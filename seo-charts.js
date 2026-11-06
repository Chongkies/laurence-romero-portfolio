/* Native, progressively enhanced charts. No guessed daily observations. */
window.SEOCharts = (() => {
  const models = new Map();
  const e = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const date = value => value ? new Date(value+'T00:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}) : '';
  const range = r => r?.start ? `${date(r.start)}${r.end ? ' – '+date(r.end) : r.approximateEnd ? ' – '+r.approximateEnd+' (approximate)' : ''}` : '';
  const stats = rows => `<div class="stats seo-metric-stats">${rows.map(([value,label,note])=>`<div class="stat"><strong>${e(value)}</strong><span>${e(label)}</span>${note?`<small>${e(note)}</small>`:''}</div>`).join('')}</div>`;
  const caption = (source,r,image,asset) => `<p class="note chart-caption">${e(source)}${range(r)?' · '+e(range(r)):''}${image?.earlierSnapshot?'. Source screenshot shows an earlier reading.':''}${image?.available?` <a href="${e(asset(image.path))}" target="_blank" rel="noopener noreferrer">View source screenshot</a>`:''}</p>`;
  function chart(id,title,points,keys,options={}) {
    if (!points.length) return '';
    const horizontal=options.horizontal, width=720, left=horizontal?305:48, right=horizontal || options.bars?28:options.step?185:215, top=24, bottom=horizontal?points.length*48+24:268;
    const plot=width-left-right, max=Math.max(1,...points.flatMap(p=>keys.map(k=>p[k.key])))*1.12;
    const first=Date.parse(points[0].date), last=Date.parse(points.at(-1).date);
    const x=(p,i)=>horizontal?left:first===last?left+plot/2:left+(options.bars?Math.min(24,plot/points.length*.325):0)+(Date.parse(p.date)-first)/(last-first)*(plot-(options.bars?Math.min(48,plot/points.length*.65):0));
    const y=n=>bottom-n/max*(bottom-top);
    let svg='';
    if(!horizontal) svg=[0,.5,1].map(f=>`<line class="seo-grid" x1="${left}" x2="${width-right}" y1="${y(max*f)}" y2="${y(max*f)}"/><text class="seo-axis" x="${left-8}" y="${y(max*f)+5}" text-anchor="end">${Math.round(max*f)}</text>`).join('');
    if(horizontal) svg+=points.map((p,i)=>`<text x="0" y="${top+i*48+19}">${e(p.label)}</text><rect class="seo-bar horizontal" x="${left}" y="${top+i*48}" width="${p.value/max*plot}" height="26"/><text x="${left+p.value/max*plot+10}" y="${top+i*48+19}">${e(p.value)}</text>`).join('');
    else if(options.bars) svg+=points.map((p,i)=>{const barWidth=Math.min(48,plot/points.length*.65);return `<rect class="seo-bar vertical" style="transform-origin:${x(p,i)}px ${bottom}px" x="${x(p,i)-barWidth/2}" y="${y(p[keys[0].key])}" width="${barWidth}" height="${bottom-y(p[keys[0].key])}"/>`;}).join('');
    else svg+=keys.map((k,ki)=>{
      const d=points.map((p,i)=>`${i?(options.step?'H':'L'):'M'}${x(p,i)}${i&&options.step?'V':','}${y(p[k.key])}`).join(' ');
      return `<path class="seo-line ${ki?'secondary':''}" d="${d}" pathLength="1"/><text class="seo-end ${ki?'secondary':''}" x="${width-right+12}" y="${y(points.at(-1)[k.key])+5}">${e(points.at(-1)[k.key])} ${e(k.label.toLowerCase())}</text>`;
    }).join('');
    if(!horizontal) svg+=[...new Set([0,Math.floor((points.length-1)/2),points.length-1])].map((i,n,a)=>`<text class="seo-axis" x="${x(points[i],i)}" y="${bottom+33}" text-anchor="${n===0?'start':n===a.length-1?'end':'middle'}">${e(options.weekly?points[i].label:date(points[i].date).replace(/ \d{4}$/, ''))}</text>`).join('');
    const summary=options.summary || `${title}: ${points.map(p=>`${p.label || date(p.date)}, ${keys.map(k=>p[k.key]+' '+k.label).join(', ')}`).join('; ')}.`;
    models.set(id,{points,keys,horizontal,left,plot,bottom,top,x});
    return `<div class="seo-chart-block"><h4>${e(title)}</h4><div class="seo-native-chart" id="${id}" tabindex="0" role="group" aria-label="${e(summary)}" aria-describedby="${id}-hint"><svg viewBox="0 0 ${width} ${bottom+52}" aria-hidden="true">${svg}</svg><output class="seo-tooltip" aria-live="polite" hidden></output><span class="sr-only" id="${id}-hint">Use arrow keys to explore values; Home and End jump to the first and last point.</span></div><div class="sr-only"><table><caption>${e(title)}</caption><thead><tr><th scope="col">${horizontal?'Source':'Date'}</th>${keys.map(k=>`<th scope="col">${e(k.label)}</th>`).join('')}</tr></thead><tbody>${points.map(p=>`<tr><th scope="row">${e(p.label || date(p.date))}${p.partialDays?' (partial week: '+e(p.partialDays)+' days)':''}</th>${keys.map(k=>`<td>${e(p[k.key])}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  }
  function render(m,copy,asset) {
    models.clear();
    const h=m.historical,p=m.performance,i=m.indexing,a=m.analytics,t=p.totals;
    const full=h.weekly.filter(w=>!w.partialDays), engagement=`${Math.floor(a.engagementSeconds/60)}m ${String(a.engagementSeconds%60).padStart(2,'0')}s`;
    let html=stats([[`${full[0].value} → ${full.at(-1).value}`,'weekly Google impressions','Earlier weekly snapshot'],[`${i.baseline.indexed} → ${i.latest.indexed}`,'pages indexed by Google'],[h.topThreeQueries,'non-brand queries in positions 1–3',range(h.rankingsRange)],[`${h.technicalHealth.score}/${h.technicalHealth.maximum}`,'technical health score',`${h.technicalHealth.errors} errors · Ahrefs · ${date(h.technicalHealth.date)}`]]);
    html+=`<div class="seo-result-group"><h3>Weekly impressions</h3>${chart('seo-weekly','Weekly appearances in Google results',h.weekly,[{key:'value',label:'Impressions'}],{bars:true,weekly:true})}${caption('Google Search Console',{start:h.weekly[0].date,end:h.weekly.at(-1).date},null,asset)}<p class="note">The final bar covers ${e(h.weekly.at(-1).partialDays)} days.</p></div>`;
    html+=`<section class="seo-result-group" aria-labelledby="performance-title"><h3 id="performance-title">Search performance</h3>${stats([[t.impressionsExact ?? t.impressionsDisplay,'Impressions'],[t.clicks,'Clicks'],[t.ctr+'%','CTR'],[t.averagePosition,'Average position']])}<p>${e(copy.performance)}</p>${p.series.length?chart('seo-impressions','Daily impressions',p.series,[{key:'impressions',label:'Impressions'}])+caption(p.source,p.range,m.screenshots.performance,asset)+chart('seo-clicks','Daily clicks',p.series,[{key:'clicks',label:'Clicks'}],{bars:true}):''}${caption(p.source,p.range,m.screenshots.performance,asset)}${p.rangeWarning?`<p class="note">${e(p.rangeWarning)}</p>`:''}</section>`;
    html+=`<section class="seo-result-group" aria-labelledby="indexing-title"><h3 id="indexing-title">Pages on Google</h3>${stats([[i.latest.indexed,'Indexed pages'],[i.latest.notIndexed,'Not indexed'],[i.baseline.indexed,'Indexed at baseline',date(i.baseline.date)]])}<p>${e(copy.indexing)}</p>${i.series.length?chart('seo-indexing','Indexing over time',i.series,[{key:'indexed',label:'Indexed'},{key:'notIndexed',label:'Not indexed'}],{step:true}):''}${caption(i.source,i.series.length?{start:i.series[0].date,end:i.series.at(-1).date}:{},m.screenshots.indexing,asset)}${i.rangeWarning?`<p class="note">${e(i.rangeWarning)}</p>`:''}<p class="note">Earlier baseline: ${e(h.initialNotIndexed)} pages not indexed; the noindex setting blocked ${e(h.blockedPagesMinimum)}+ pages and posts. Google decides when to index each page; the readings alone do not establish the timing or cause of a particular jump.</p></section>`;
    html+=`<section class="seo-result-group" aria-labelledby="analytics-title"><h3 id="analytics-title">Google Analytics</h3>${stats([[a.activeUsers,'Active users'],[a.newUsers,'New users'],[engagement,'Average engagement per active user']])}<p class="note">${e(a.eventCount)} events recorded.</p><p>${e(copy.analytics)}</p>${chart('seo-first-visits','First visits by source',a.firstVisits,[{key:'value',label:'Active users'}],{horizontal:true})}${caption(a.source,a.range,m.screenshots.analytics,asset)}${chart('seo-sessions','Top sources by sessions',a.sessions,[{key:'value',label:'Sessions'}],{horizontal:true})}${caption(a.source,a.range,m.screenshots.analytics,asset)}</section>`;
    return html;
  }
  function init() {
    const reduced=matchMedia('(prefers-reduced-motion: reduce)'), cleanups=[];
    const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('chart-drawn');observer.unobserve(entry.target);}}),{threshold:.2}):null;
    document.querySelectorAll('.seo-native-chart').forEach(el=>{
      const model=models.get(el.id);if(!model)return;
      if(observer&&!reduced.matches){el.classList.add('chart-ready');observer.observe(el);}
      let selected=0;const output=el.querySelector('output');
      const show=index=>{selected=Math.max(0,Math.min(model.points.length-1,index));const p=model.points[selected];output.textContent=`${p.label || date(p.date)}${p.partialDays?' (partial week: '+p.partialDays+' days)':''}: ${model.keys.map(k=>`${k.label}: ${p[k.key]}`).join(' · ')}`;output.hidden=false;};
      const move=event=>{const box=el.getBoundingClientRect(),vx=(event.clientX-box.left)/box.width*720,vy=(event.clientY-box.top)/box.height*(model.bottom+52);show(model.horizontal?Math.round((vy-model.top-13)/48):model.points.reduce((best,p,n)=>Math.abs(model.x(p,n)-vx)<Math.abs(model.x(model.points[best],best)-vx)?n:best,0));};
      const key=event=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','Escape'].includes(event.key))return;event.preventDefault();if(event.key==='Escape'){output.hidden=true;return;}show(event.key==='Home'?0:event.key==='End'?model.points.length-1:selected+(['ArrowLeft','ArrowUp'].includes(event.key)?-1:1));};
      const focus=()=>show(selected),hide=()=>{output.hidden=true;};
      [['pointermove',move],['pointerleave',hide],['keydown',key],['focus',focus],['blur',hide]].forEach(([name,fn])=>{el.addEventListener(name,fn);cleanups.push(()=>el.removeEventListener(name,fn));});
    });
    const finish=()=>{if(reduced.matches){document.querySelectorAll('.seo-native-chart').forEach(el=>el.classList.add('chart-drawn'));observer?.disconnect();}};
    reduced.addEventListener('change',finish);
    return ()=>{observer?.disconnect();reduced.removeEventListener('change',finish);cleanups.forEach(fn=>fn());models.clear();};
  }
  return {render,init};
})();
