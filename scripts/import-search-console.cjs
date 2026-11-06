/* No dependencies. CSV inputs are optional; missing files never fabricate series. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function parseCsv(text) {
  text = text.replace(/^\uFEFF/, '');
  const first = text.split(/\r?\n/)[0];
  const delimiter = first.includes('\t') ? '\t' : first.includes(';') ? ';' : ',';
  const rows = []; let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (quoted && text[i + 1] === '"') { field += '"'; i++; }
      else if (quoted || !field.trim()) quoted = !quoted;
      else field += ch;
    } else if (ch === delimiter && !quoted) { row.push(field.trim()); field = ''; }
    else if ((ch === '\n' || ch === '\r') && !quoted) {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field.trim()); if (row.some(Boolean)) rows.push(row); row = []; field = '';
    } else field += ch;
  }
  if (quoted) throw Error('CSV has an unterminated quoted field.');
  row.push(field.trim()); if (row.some(Boolean)) rows.push(row);
  return rows;
}
function isoDate(value, order = 'mdy') {
  let y, m, d;
  const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  let match;
  if ((match = value.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})(?:T.*)?$/))) [, y, m, d] = match;
  else if ((match = value.match(/^(\d{1,2})[/.\-](\d{1,2})[/.\-](\d{4})$/))) {
    y = match[3]; const dayFirst = +match[1] > 12 || (+match[2] <= 12 && order === 'dmy');
    [d,m] = dayFirst ? [match[1],match[2]] : [match[2],match[1]];
  } else if ((match = value.match(/^(\d{1,2})[\s-]+([A-Za-z]+)[\s,-]+(\d{4})$/))) { d = match[1]; m = months.indexOf(match[2].slice(0,3).toLowerCase()) + 1; y = match[3]; }
  else if ((match = value.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/))) { m = months.indexOf(match[1].slice(0,3).toLowerCase()) + 1; d = match[2]; y = match[3]; }
  else throw Error('Unrecognised date: ' + value);
  [y,m,d] = [y,m,d].map(Number);
  const date = new Date(Date.UTC(y,m-1,d));
  if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m-1 || date.getUTCDate() !== d) throw Error('Invalid date: ' + value);
  return date.toISOString().slice(0,10);
}
function number(value, field, count = false) {
  const cleaned = String(value).replace(/[,%\s\u00a0]/g, '');
  if (!cleaned) throw Error('Missing numeric value for ' + field);
  const n = Number(cleaned);
  if (!Number.isFinite(n) || n < 0 || (count && !Number.isInteger(n))) throw Error('Invalid ' + field + ': ' + value);
  return n;
}
function series(text, kind, order) {
  const rows = parseCsv(text);
  if (!rows.length) throw Error('CSV is empty.');
  const header = rows.shift().map(s => s.toLowerCase().replace(/[^a-z0-9]/g,''));
  const fields = kind === 'performance' ? ['date','clicks','impressions','ctr','position'] : ['date','notindexed','indexed'];
  const index = Object.fromEntries(fields.map(key => { const at = header.indexOf(key); if (at < 0) throw Error('Missing CSV column: ' + key); return [key,at]; }));
  const dates = new Set();
  return rows.map((row, i) => {
    try {
      const date = isoDate(row[index.date],order); if (dates.has(date)) throw Error('Duplicate date: ' + date); dates.add(date);
      if (kind === 'performance') return { date, clicks: number(row[index.clicks],'clicks',true), impressions: number(row[index.impressions],'impressions',true), ctr: number(row[index.ctr],'CTR'), position: number(row[index.position],'position') };
      return { date, notIndexed: number(row[index.notindexed],'not indexed',true), indexed: number(row[index.indexed],'indexed',true) };
    } catch (error) { throw Error('CSV row ' + (i+2) + ': ' + error.message); }
  }).sort((a,b) => a.date.localeCompare(b.date));
}
function importMetrics(root, order = 'mdy') {
  if (!['mdy','dmy'].includes(order)) throw Error('--date-order must be mdy or dmy.');
  const file = path.join(root,'data/seo-metrics.js'), context = { window: {} };
  vm.runInNewContext(fs.readFileSync(file,'utf8'),context); const metrics = context.window.SEO_METRICS, warnings = [];
  for (const [kind,name] of [['performance','gsc-performance-dates.csv'],['indexing','gsc-indexing-chart.csv']]) {
    const csv = path.join(root,'data',name);
    if (!fs.existsSync(csv)) { warnings.push('Missing '+name+'; existing series retained (empty until the first import).'); continue; }
    const points = series(fs.readFileSync(csv,'utf8'),kind,order);
    if (!points.length) throw Error(name+' contains no observations.');
    metrics[kind].series = points;
    if (kind === 'performance') {
      const clicks = points.reduce((n,p)=>n+p.clicks,0), impressions = points.reduce((n,p)=>n+p.impressions,0);
      metrics.performance.csvSummary = { clicks, impressions };
      metrics.performance.range.start = points[0].date; metrics.performance.range.end = points.at(-1).date;
      const compact = metrics.performance.totals.impressionsDisplay;
      const approximate = Number(compact.replace(/K$/i,'')) * (/K$/i.test(compact) ? 1000 : 1);
      metrics.performance.totals.impressionsExact = impressions === approximate && clicks === metrics.performance.totals.clicks ? impressions : null;
      metrics.performance.rangeWarning = clicks === metrics.performance.totals.clicks && Math.abs(impressions-approximate) < 5 ? '' : 'CSV totals differ from the supplied screenshot totals; confirm that their reporting ranges match.';
      if (metrics.performance.rangeWarning) warnings.push(metrics.performance.rangeWarning);
    } else {
      const last = points.at(-1), snapshot = metrics.indexing.latest;
      metrics.indexing.rangeWarning = last.indexed === snapshot.indexed && last.notIndexed === snapshot.notIndexed ? '' : 'The last CSV reading differs from the supplied latest totals; compare the export and screenshot dates.';
      if (!metrics.indexing.rangeWarning) snapshot.date = last.date;
      if (metrics.indexing.rangeWarning) warnings.push(metrics.indexing.rangeWarning);
    }
  }
  for (const image of Object.values(metrics.screenshots)) image.available = fs.existsSync(path.join(root,image.path));
  const banner = '/* Generated series from original Search Console exports.\n   TODO: confirm the exact ranges, GA4 reporting range, booking dates/definition\n   and replace earlier source screenshots. Empty series mean no CSV has been imported. */\n';
  fs.writeFileSync(file,banner+'window.SEO_METRICS = '+JSON.stringify(metrics,null,2)+';\n');
  return { metrics, warnings };
}
if (require.main === module) {
  try {
    const args = process.argv.slice(2), value = name => { const at=args.indexOf(name); return at<0?undefined:args[at+1]; };
    const result = importMetrics(path.resolve(value('--root') || path.join(__dirname,'..')),value('--date-order') || 'mdy');
    result.warnings.forEach(s=>console.warn(s));
    console.log('Wrote data/seo-metrics.js: '+result.metrics.performance.series.length+' performance rows, '+result.metrics.indexing.series.length+' indexing rows.');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
module.exports = { parseCsv, isoDate, series, importMetrics };
