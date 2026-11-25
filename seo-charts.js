/* Native SVG charts for the SEO case study; no chart library or generated totals. */
window.SEOCharts = (() => {
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const fmt = (n) => Number(n).toLocaleString("en-GB");
  const axisMax = (max) => max <= 12 ? 12 : 1000;

  function weekly(m) {
    const width = 900, height = 390, left = 64, right = 18, top = 40, bottom = 300;
    const plotW = width - left - right, plotH = bottom - top, step = plotW / m.weeks.length, barW = Math.min(48, step * .64);
    const max = axisMax(Math.max(...m.weeks.map((w) => Math.max(w.impressions, w.clicks))));
    const label = (w, field) => `Week of ${w.label}: ${fmt(w[field])} ${field}`;
    const makeSvg = (field) => {
      const ticks = [0, max / 4, max / 2, max * .75, max];
      const grid = ticks.map((v, i) => { const y = bottom - (v / max) * plotH; return `<line class="seo-grid" data-tick="${i}" x1="${left}" x2="${width-right}" y1="${y}" y2="${y}"/><text class="seo-axis" data-tick="${i}" x="${left-10}" y="${y+5}" text-anchor="end">${fmt(v)}</text>`; }).join("");
      const bars = m.weeks.map((w, i) => {
        const x = left + step * i + (step - barW) / 2, value = w[field], h = (value / max) * plotH, y = bottom - h;
        const fill = w.partial ? "url(#partial-hatch)" : "var(--accent)";
        const xLabel = i % 2 === 0 || i === m.weeks.length - 1 ? `<text class="seo-axis week-label" x="${x+barW/2}" y="${bottom+30}" text-anchor="middle">${esc(w.label)}</text>` : "";
        return `<g class="seo-week-bar" data-index="${i}" tabindex="0" role="button" aria-label="${esc(label(w, field))}"><rect class="seo-bar${w.partial ? " is-partial" : ""}" x="${x}" y="${top}" width="${barW}" height="${plotH}" fill="${fill}" style="--bar-delay:${i*40}ms;--bar-scale:${value/max}"/><text class="seo-value" x="${x+barW/2}" y="${Math.max(top-8,y-8)}" text-anchor="middle">${fmt(value)}</text>${xLabel}</g>`;
      }).join("");
      return `<svg viewBox="0 0 ${width} 350" role="img" aria-label="Weekly ${field} from Google Search Console in the UK, 14 September to 20 November 2026"><defs><pattern id="partial-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="var(--surface)"/><line x1="0" y1="0" x2="0" y2="8" stroke="var(--muted)" stroke-width="2"/></pattern></defs>${grid}${bars}<line class="seo-baseline" x1="${left}" x2="${width-right}" y1="${bottom}" y2="${bottom}"/></svg>`;
    };
    const table = `<div class="sr-only"><table><caption>Weekly Google results (UK)</caption><thead><tr><th>Week</th><th>Impressions</th><th>Clicks</th></tr></thead><tbody>${m.weeks.map((w) => `<tr><th>${esc(w.label)}${w.partial ? " (partial week, 16–20 Nov)" : ""}</th><td>${w.impressions}</td><td>${w.clicks}</td></tr>`).join("")}</tbody></table></div>`;
    return `<section class="seo-chart-block" aria-labelledby="weekly-chart-title"><h3 id="weekly-chart-title">Weekly Google results (UK)</h3><div class="chart-tabs" role="tablist" aria-label="Weekly Google result metric"><button class="chart-tab is-active" id="chart-tab-impressions" role="tab" aria-selected="true" tabindex="0" data-metric="impressions">Impressions</button><button class="chart-tab" id="chart-tab-clicks" role="tab" aria-selected="false" tabindex="-1" data-metric="clicks">Clicks</button></div><div class="seo-native-chart" id="weekly-chart" data-metric="impressions">${makeSvg("impressions")}<output class="seo-tooltip" aria-live="polite" hidden></output></div><p class="chart-caption">Partial week (16–20 Nov). Values are weekly; weeks are not summed. Google Search Console, UK, to 20 Nov 2026.</p>${table}</section>`;
  }

  function horizontal(id, title, rows) {
    const width = 700, left = 320, right = 45, rowH = 52, top = 16, height = top + rows.length * rowH + 8, max = Math.max(...rows.map((r) => r.value));
    const bars = rows.map((r, i) => {
      const y = top + i * rowH, w = (r.value / max) * (width - left - right);
      const words = r.label.split(" "), lines = []; let line = "";
      words.forEach((word) => { if ((line + " " + word).trim().length > 19 && line) { lines.push(line); line = word; } else line = (line + " " + word).trim(); });
      if (line) lines.push(line);
      const label = lines.map((part, index) => `<tspan x="0" dy="${index ? 17 : 0}">${esc(part)}</tspan>`).join("");
      return `<g class="seo-horizontal-row" tabindex="0" role="img" aria-label="${esc(r.label)}: ${r.value}"><text class="seo-row-label" x="0" y="${y+17}">${label}</text><rect class="seo-bar horizontal ${r.highlight ? "is-highlight" : "is-muted"}" x="${left}" y="${y+12}" width="${w}" height="22" style="--bar-delay:${i*40}ms;--bar-scale:${r.value/max}"/><text class="seo-value" x="${left+w+10}" y="${y+29}">${r.value}</text></g>`;
    }).join("");
    const table = `<div class="sr-only"><table><caption>${esc(title)}</caption><tbody>${rows.map((r) => `<tr><th>${esc(r.label)}</th><td>${r.value}</td></tr>`).join("")}</tbody></table></div>`;
    return `<section class="seo-chart-block seo-small-chart"><h3>${esc(title)}</h3><div class="seo-native-chart"><svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(title)}">${bars}</svg></div>${table}</section>`;
  }

  function render(m) {
    return `${weekly(m)}<section class="seo-result-group"><h2 class="section-title">AI search</h2><div class="seo-ai-charts">${horizontal("sessions-chart", "Website sessions by source, last 90 days", m.sessions)}${horizontal("citations-chart", "Copilot citations by page, 3 months", m.copilotCitations)}</div><p class="seo-ai-summary">AI assistants sent 75 sessions in 90 days, more than Google organic search (56). Most citations (20 of 32) go to one answer-first guide.</p><p class="note">GA4 to 22 Nov 2026; Bing Webmaster Tools.</p></section>`;
  }

  function init() {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const chart = document.querySelector("#weekly-chart");
    if (!chart) return () => {};
    const weeks = window.SEO_METRICS.weeks;
    const tabs = [...document.querySelectorAll(".chart-tab")];
    const output = chart.querySelector("output");
    let metric = "impressions", selected = 0;
    const setMetric = (next, focus = false) => {
      metric = next;
      tabs.forEach((tab) => { const active = tab.dataset.metric === metric; tab.classList.toggle("is-active", active); tab.setAttribute("aria-selected", String(active)); tab.tabIndex = active ? 0 : -1; if (focus && active) tab.focus(); });
      chart.dataset.metric = metric;
      chart.classList.add("chart-chart-switching");
      const max = metric === "clicks" ? 12 : 1000;
      chart.querySelectorAll("[data-tick]").forEach((item) => {
        const index = Number(item.dataset.tick), value = max * index / 4, y = 300 - 260 * index / 4;
        if (item.tagName.toLowerCase() === "line") { item.setAttribute("y1", String(y)); item.setAttribute("y2", String(y)); }
        else { item.setAttribute("y", String(y + 5)); item.textContent = fmt(value); }
      });
      chart.querySelectorAll(".seo-week-bar").forEach((group, i) => {
        const rect = group.querySelector("rect");
        const value = weeks[i][metric], max = metric === "clicks" ? 12 : 1000;
        const barHeight = 260 * value / max, y = 300 - barHeight;
        rect.style.setProperty("--bar-scale", String(value / max));
        group.querySelector(".seo-value").textContent = fmt(value); group.querySelector(".seo-value").setAttribute("y", String(Math.max(32, y-8)));
        group.setAttribute("aria-label", `Week of ${weeks[i].label}: ${fmt(value)} ${metric}`);
      });
      setTimeout(() => chart.classList.remove("chart-chart-switching"), reduced.matches ? 0 : 400);
    };
    tabs.forEach((tab, i) => tab.addEventListener("keydown", (event) => { if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return; event.preventDefault(); const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length-1 : (i + (event.key === "ArrowRight" ? 1 : tabs.length-1)) % tabs.length; setMetric(tabs[next].dataset.metric, true); }));
    tabs.forEach((tab) => tab.addEventListener("click", () => setMetric(tab.dataset.metric)));
    chart.querySelectorAll(".seo-week-bar").forEach((group, i, all) => {
      const show = () => { selected = i; output.textContent = `Week of ${weeks[i].label}: ${fmt(weeks[i][metric])} ${metric}`; output.hidden = false; };
      group.addEventListener("mouseenter", show); group.addEventListener("focus", show); group.addEventListener("mouseleave", () => { output.hidden = true; }); group.addEventListener("blur", () => { output.hidden = true; });
      group.addEventListener("keydown", (event) => { if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return; event.preventDefault(); const next = event.key === "Home" ? 0 : event.key === "End" ? all.length-1 : Math.max(0, Math.min(all.length-1, i + (event.key === "ArrowRight" ? 1 : -1))); all[next].focus(); });
    });
    const charts = [...document.querySelectorAll(".seo-native-chart")];
    charts.forEach((item) => item.classList.add("chart-ready"));
    if (!reduced.matches && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("chart-drawn"); observer.unobserve(entry.target); } }), { threshold: .15 });
      charts.forEach((item) => observer.observe(item));
    } else charts.forEach((item) => item.classList.add("chart-drawn"));
    return () => {};
  }
  return { render, init };
})();
