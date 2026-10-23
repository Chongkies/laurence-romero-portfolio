/* Change SITE.baseUrl in content.js, then run: node scripts/update-metadata.cjs. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8'), context);
const base = context.window.SITE.baseUrl.replace(/\/?$/, '/');
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const decode = (value) => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
const pages = ['', 'seo/', 'developer/', 'multimedia/'];
for (const page of pages) {
  const file = path.join(root, page, 'index.html');
  let html = fs.readFileSync(file, 'utf8').replaceAll('\r\n', '\n');
  const title = decode(html.match(/<title>([^<]+)<\/title>/)[1]);
  const descriptionTag = html.match(/<meta name="description" content="([^"]*)">/);
  const description = decode(descriptionTag[1]);
  html = html.replace(/^\s*<meta (?:property="og:[^"]+"|name="twitter:[^"]+")[^>]*>\r?\n/gm, '');
  html = html.replace(/^\s*<link rel="canonical"[^>]*>\r?\n/gm, '');
  const url = new URL(page, base).href;
  const image = new URL('images/og-card.png', base).href;
  const tags = [
    ['property', 'og:title', title], ['property', 'og:description', description],
    ['property', 'og:type', 'website'], ['property', 'og:url', url],
    ['property', 'og:image', image], ['property', 'og:image:width', '1200'],
    ['property', 'og:image:height', '630'], ['property', 'og:image:alt', 'Jose Laurence Romero — SEO · Web Development · Multimedia'],
    ['name', 'twitter:card', 'summary_large_image'],
  ].map(([attribute, key, value]) => `  <meta ${attribute}="${key}" content="${escape(value)}">`).join('\n');
  html = html.replace(descriptionTag[0], descriptionTag[0] + '\n' + tags + `\n  <link rel="canonical" href="${escape(url)}">`);
  fs.writeFileSync(file, html);
}
const entries = pages.map(page => `  <url><loc>${escape(new URL(page, base).href)}</loc><lastmod>2026-10-23</lastmod></url>`).join('\n');
fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: ' + new URL('sitemap.xml', base).href + '\n');
console.log('Updated four page metadata blocks, sitemap.xml and robots.txt from SITE.baseUrl.');
