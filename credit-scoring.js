/* Renderer used only by the credit-scoring thesis case study. */
"use strict";
window.renderCreditScoringCaseStudy = function ({ S, esc, asset, url, chips }) {
  const c = S.roles.dev.projects.find((project) => project.caseStudy).caseStudy;
  const bullets = (items) => `<ul class="bullets">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  const thesisChips = () => `<ul class="chips">${c.stack.map((name) => {
    const local = c.logos && c.logos[name];
    const logo = local ? local.src : S.softwareLogos[name];
    return `<li>${logo ? `<img class="tool-logo${local && local.originalColor ? " thesis-logo-original" : ""}" src="${esc(asset(logo))}" width="16" height="16" alt="" aria-hidden="true">` : ""}${esc(name)}</li>`;
  }).join("")}</ul>`;
  document.getElementById("main").innerHTML = `<article class="thesis-case">
    <header class="page-head">
      <div class="wrap">
        <a class="back reveal" href="${url("dev")}">← Developer portfolio</a>
        <p class="kicker reveal">${esc(c.type)}</p>
        <h1 class="reveal">${esc(c.title)}</h1>
        <p class="thesis-subtitle reveal">${esc(c.subtitle)}</p>
        <p class="lead reveal">${esc(c.summary)}</p>
        ${thesisChips()}
        <p class="thesis-status reveal">${esc(c.status)}</p>
        <div class="stats">
          ${c.stats.map((stat) => `<div class="stat reveal"><strong>${esc(stat.value)}</strong><span>${esc(stat.label)}</span></div>`).join("")}
        </div>
        <p class="thesis-confidential reveal">${esc(c.confidentiality)}</p>
        <nav class="thesis-jumps reveal" aria-label="Case study sections">
          <a href="#thesis-method">Scoring method</a><a href="#thesis-features">Interface & features</a><a href="#thesis-architecture">Architecture</a><a href="#thesis-results">Results</a><a href="#thesis-limits">Limitations</a>
        </nav>
      </div>
    </header>

    <section class="section"><div class="wrap thesis-two">
      <div class="reveal"><h2 class="section-title">The problem</h2><p>${esc(c.problem)}</p></div>
      <div class="reveal"><h2 class="section-title">The solution</h2><p>${esc(c.solution)}</p></div>
    </div></section>

    <section class="section" id="thesis-method"><div class="wrap">
      <h2 class="section-title reveal">How the scoring works</h2>
      <ol class="thesis-flow" aria-label="Initial screening, then credit risk rating, then predictive indicators">
        ${c.stages.map((stage) => `<li class="panel reveal"><h3>${esc(stage.title)}</h3><p>${esc(stage.text)}</p>${stage.formula ? `<p class="thesis-formula">${esc(stage.formula)}</p><p class="note">${esc(stage.note)}</p>` : ""}</li>`).join("")}
      </ol>
      <div class="thesis-two thesis-formulas">
        ${c.formulas.map((formula) => `<div class="panel reveal"><h3>${esc(formula.title)}</h3><p class="thesis-formula">${esc(formula.expression)}</p><p>${esc(formula.tiers)}</p><p class="note">${esc(formula.meaning)}</p></div>`).join("")}
      </div>
      <p class="note reveal">${esc(c.tierNote)}</p>
    </div></section>

    <section class="section" id="thesis-features"><div class="wrap">
      <h2 class="section-title reveal">Interface & feature highlights</h2>
      <div class="panel thesis-gallery reveal" id="thesis-gallery" role="region" aria-roledescription="carousel" aria-label="Application UI screenshots">
        <h3>Explore the application UI</h3><p>${esc(c.galleryNote)}</p>
        <div class="thesis-carousel-frame">
          <div class="thesis-carousel-track" id="thesis-carousel-track" tabindex="0" aria-label="Screenshot gallery; use left and right arrow keys">
            ${c.gallery.map((image, i) => `<figure class="thesis-carousel-slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${c.gallery.length}: ${esc(image.title)}"><a href="${esc(asset(image.src))}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot: ${esc(image.title)}"><img src="${esc(asset(image.src))}" alt="${esc(image.alt)}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async"></a><figcaption><strong>${esc(image.title)}</strong><span>${esc(image.alt)}. Click to open full size.</span></figcaption></figure>`).join("")}
          </div>
          <button class="thesis-carousel-arrow previous" type="button" id="thesis-carousel-prev" aria-label="Previous screenshot" aria-controls="thesis-carousel-track">‹</button>
          <button class="thesis-carousel-arrow next" type="button" id="thesis-carousel-next" aria-label="Next screenshot" aria-controls="thesis-carousel-track">›</button>
        </div>
        <p class="note" id="thesis-carousel-status" aria-live="polite" aria-atomic="true">1 / ${c.gallery.length} — ${esc(c.gallery[0].title)}</p>
      </div>
      <div class="thesis-features">
        ${c.features.map((feature) => `<section class="panel reveal">
          <h3>${esc(feature.title)}</h3><p>${esc(feature.text)}</p>
          ${feature.illustration === "breakdown" ? `<div class="thesis-breakdown">
            <p class="thesis-illustration-label">Generalised interface illustration · symbolic placeholders, not borrower data</p>
            <div class="table-wrap"><table><caption class="sr-only">Illustrative repayment calculation breakdown with symbolic scores</caption><thead><tr><th>Criterion</th><th>Score / maximum</th><th>Tier / weight</th><th>Contribution</th></tr></thead><tbody>
              <tr><th scope="row">Criterion A</th><td>s₁ / max_s₁</td><td>Primary · 0.50</td><td>s₁ × 0.50</td></tr>
              <tr><th scope="row">Criterion B</th><td>s₂ / max_s₂</td><td>Secondary · 0.35</td><td>s₂ × 0.35</td></tr>
              <tr><th scope="row">Criterion C</th><td>s₃ / max_s₃</td><td>Low · 0.15</td><td>s₃ × 0.15</td></tr>
            </tbody></table></div>
          </div>` : ""}
        </section>`).join("")}
      </div>
    </div></section>

    <section class="section" id="thesis-architecture"><div class="wrap">
      <h2 class="section-title reveal">Three tiers, separate responsibilities</h2>
      <ol class="thesis-flow" aria-label="React frontend communicates with Laravel API, which communicates with MySQL">
        ${c.architecture.map((tier) => `<li class="panel reveal"><h3>${esc(tier.title)}</h3><p>${esc(tier.detail)}</p><p class="note">${esc(tier.responsibility)}</p></li>`).join("")}
      </ol><p class="note reveal">${esc(c.development)}</p>
    </div></section>

    <section class="section" id="thesis-results"><div class="wrap">
      <h2 class="section-title reveal">Validation results</h2>
      <div class="panel thesis-distribution reveal">
        <h3>Risk distribution · 15 profiles</h3>
        <ul class="thesis-risk-list">${c.distribution.map((risk) => `<li><span class="thesis-risk-label">${esc(risk.label)}</span><span class="thesis-risk-track" aria-hidden="true"><span class="thesis-risk-bar" style="--share:${risk.percent}%"></span></span><span>${esc(risk.display)} (${risk.count})</span></li>`).join("")}</ul>
      </div>
      <div class="thesis-results-copy reveal">${c.results.map((result) => `<p>${esc(result)}</p>`).join("")}</div>
    </div></section>

    <section class="section" id="thesis-limits"><div class="wrap">
      <h2 class="section-title reveal">Limitations and next steps</h2>
      <div class="panel reveal">${bullets(c.limitations)}<p class="thesis-next">${esc(c.nextSteps)}</p></div>
    </div></section>

    <section class="section"><div class="wrap">
      <h2 class="section-title reveal">Project context</h2>
      <dl class="thesis-credits reveal"><div><dt>Institution</dt><dd>Computer Engineering, University of San Carlos, Cebu City</dd></div><div><dt>Partner institution</dt><dd>${esc(c.partner)}</dd></div></dl>
      <p class="note reveal">${esc(c.confidentiality)}</p>
      <div class="btn-row reveal"><a class="btn ghost" href="${url("dev")}">← Back to developer portfolio</a></div>
    </div></section>
  </article>`;
  const track = document.getElementById("thesis-carousel-track");
  const previous = document.getElementById("thesis-carousel-prev");
  const next = document.getElementById("thesis-carousel-next");
  const status = document.getElementById("thesis-carousel-status");
  let current = 0;
  const update = () => {
    current = Math.max(0, Math.min(c.gallery.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
    previous.disabled = current === 0; next.disabled = current === c.gallery.length - 1;
    status.textContent = `${current + 1} / ${c.gallery.length} — ${c.gallery[current].title}`;
  };
  const move = (index) => track.scrollTo({ left: Math.max(0, Math.min(c.gallery.length - 1, index)) * track.clientWidth, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  previous.addEventListener("click", () => move(current - 1));
  next.addEventListener("click", () => move(current + 1));
  track.addEventListener("scroll", update, { passive: true });
  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(current + (event.key === "ArrowRight" ? 1 : -1)); }
  });
  new ResizeObserver(() => { track.scrollTo({ left: current * track.clientWidth, behavior: "instant" }); update(); }).observe(track);
  update();
};
