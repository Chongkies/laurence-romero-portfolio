/* Renders every page from content.js. You normally don't need to edit this file. */
(function () {
  "use strict";

  const S = window.SITE;
  const view = document.body.getAttribute("data-view") || "home";
  const root = document.body.getAttribute("data-root") || ".";
  const isFile = location.protocol === "file:";
  const PATHS = { home: "", seo: "seo/", dev: "developer/", multimedia: "multimedia/", about: "about/" };
  const ROLE_IDS = ["seo", "dev", "multimedia"];

  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const url = (id, hash) => root + "/" + PATHS[id] + (isFile ? "index.html" : "") + (hash || "");
  const asset = (p) => (/^(https?:)?\/\//.test(p) ? p : root + "/" + p);
  const email = S.email.user + "@" + S.email.domain;

  const svg = (inner) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  const ICONS = {
    seo: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/><path d="M8 13l2.5-3 2 2L15 8"/>'),
    dev: svg('<path d="m8 8-5 4 5 4"/><path d="m16 8 5 4-5 4"/><path d="m14 5-4 14"/>'),
    multimedia: svg('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-8 8"/>'),
  };

  const chips = (arr, showLogos = false) => (arr && arr.length ? `<ul class="chips">${arr.map((t) => {
    const logo = showLogos && S.softwareLogos && S.softwareLogos[t];
    return `<li>${logo ? `<img class="tool-logo" src="${esc(asset(logo))}" width="16" height="16" alt="" aria-hidden="true">` : ""}${esc(t)}</li>`;
  }).join("")}</ul>` : "");

  /* ---------------------------------------------------------- shell */
  function renderNav() {
    $("#nav").innerHTML = `
      <div class="wrap nav-in">
        <a class="brand" href="${url("home")}"><span class="mono">${esc(S.initials)}</span><span class="brand-name">${esc(S.name)}</span></a>
        <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="navlinks"><span></span><span></span></button>
        <nav class="links" id="navlinks">
          <div class="nav-pages">
          ${ROLE_IDS.map((id) => `<a href="${url(id)}" class="${view === id ? "active" : ""}">${esc(S.roles[id].nav)}</a>`).join("")}
          <a href="${url("about")}" class="${view === "about" ? "active" : ""}"${view === "about" ? ' aria-current="page"' : ""}>${esc(S.personalAbout.nav)}</a>
          </div>
          <div class="nav-actions">
          <button class="theme" id="theme" aria-label="Toggle dark mode" title="Toggle dark mode">${svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>')}</button>
          <a class="nav-contact" href="${url("home", "#contact")}">Contact</a>
          </div>
        </nav>
      </div>`;

    const burger = $("#burger");
    const links = $("#navlinks");
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
    $("#theme").addEventListener("click", () => {
      const el = document.documentElement;
      const dark =
        el.getAttribute("data-theme") === "dark" ||
        (!el.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
      const next = dark ? "light" : "dark";
      el.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  function renderFooter() {
    $("#footer").innerHTML = `
      <div class="wrap foot-in">
        <p>© ${new Date().getFullYear()} ${esc(S.name)} · ${esc(S.location)}</p>
        <a href="#top" class="totop">Back to top ↑</a>
      </div>`;
  }

  function contactBlock(ctx, subject) {
    const links = S.links.filter((l) => l.url && l.roles.includes(ctx));
    const sub = encodeURIComponent("Hello Laurence — " + (subject || "Work inquiry"));
    return `
      <section class="cta reveal" id="contact">
        <div class="wrap">
          <div class="cta-box">
            <h2>Let's work together</h2>
            <p>${esc(S.availability)}. Send a short note about what you need and I'll reply by email.</p>
            <div class="btn-row">
              <a class="btn primary" href="mailto:${email}?subject=${sub}">Email me</a>
              <button class="btn ghost" id="copy-email" type="button">Copy email address</button>
            </div>
            ${
              links.length
                ? `<ul class="link-row">${links
                    .map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a></li>`)
                    .join("")}</ul>`
                : ""
            }
          </div>
        </div>
      </section>`;
  }

  function wireCopy() {
    const b = $("#copy-email");
    if (!b) return;
    b.addEventListener("click", () => {
      const done = () => {
        b.textContent = "Copied: " + email;
        setTimeout(() => (b.textContent = "Copy email address"), 2500);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(email).then(done, () => (b.textContent = email));
      else b.textContent = email;
    });
  }

  /* ----------------------------------------------------------- home */
  function renderHome() {
    const cards = ROLE_IDS.map((id) => {
      const r = S.roles[id];
      return `
        <a class="role-card reveal" data-role="${id}" href="${url(id)}">
          <span class="role-ico">${ICONS[id]}</span>
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.blurb)}</p>
          ${chips(r.tags)}
          <span class="role-go">View portfolio <i>→</i></span>
        </a>`;
    }).join("");

    const timeline = S.timeline
      .map(
        (t) => `
        <li class="tl-item reveal">
          <span class="tl-dot" data-role="${t.tag}"></span>
          <div>
            <h4>${esc(t.title)}</h4>
            ${organizationName(t.org)}
          </div>
          <span class="tl-date">${esc(t.dates)}</span>
        </li>`
      )
      .join("");

    $("#main").innerHTML = `
      <section class="hero">
        <div class="wrap hero-in">
          <div class="hero-copy">
          <p class="kicker reveal"><span class="pulse"></span>${esc(S.availability)} · ${esc(S.location)}</p>
          <h1 class="reveal">${esc(S.name)}</h1>
          <p class="lead reveal">${esc(S.hero.lead)}</p>
          <div class="btn-row reveal">
            <a class="btn primary" href="#portfolios">Explore my work</a>
            <a class="btn ghost" href="#contact">Get in touch</a>
          </div>
          </div>
          ${S.hero.image ? `<div class="hero-portrait reveal"><img src="${esc(asset(S.hero.image.src))}" alt="${esc(S.hero.image.alt)}" width="1000" height="1333" fetchpriority="high" decoding="async"></div>` : ""}
        </div>
      </section>

      <section class="section" id="portfolios">
        <div class="wrap">
          <h2 class="section-title reveal">What are you hiring for?</h2>
          <p class="section-sub reveal">Pick a path to see the work that matches.</p>
          <div class="cards">${cards}</div>
        </div>
      </section>

      <section class="section alt" id="about">
        <div class="wrap about-grid">
          <div>
            <h2 class="section-title reveal"><a class="about-discover" href="${url("about")}" aria-describedby="about-hint">${esc(S.personalAbout.nav)}<span class="about-hint" id="about-hint" role="tooltip">${esc(S.personalAbout.hint)}</span></a></h2>
            ${S.bio.map((p) => `<p class="reveal">${esc(p)}</p>`).join("")}
            <dl class="facts reveal">
              ${S.facts.map((f) => {
                const org = f.k === "Education" && Object.keys(S.organizationLogos || {}).find((name) => f.v.includes(name));
                return `<div><dt>${esc(f.k)}</dt><dd${org ? ' class="organization-name"' : ""}>${org ? organizationLogo(org) : ""}${esc(f.v)}</dd></div>`;
              }).join("")}
            </dl>
          </div>
          <div>
            <h3 class="reveal">Experience</h3>
            <ul class="timeline">${timeline}</ul>
            <p class="legend reveal">
              <span><i class="tl-dot" data-role="seo"></i>SEO & Marketing</span>
              <span><i class="tl-dot" data-role="dev"></i>Developer</span>
              <span><i class="tl-dot" data-role="multimedia"></i>Multimedia</span>
            </p>
          </div>
        </div>
      </section>

      ${contactBlock("home", "Work inquiry")}
    `;
  }

  function renderAbout() {
    const p = S.personalAbout;
    $("#main").innerHTML = `
      <section class="page-head">
        <div class="wrap">
          <h1 class="reveal">${esc(p.nav)}</h1>
          <h2 class="reveal">${esc(p.title)}</h2>
          <p class="lead reveal">${esc(p.intro)}</p>
          ${chips(p.hobbies)}
        </div>
      </section>
      <section class="section personal-page">
        <div class="wrap personal-photos">
          ${p.photos.map((photo) => `<a href="${esc(asset(photo.src))}" target="_blank" rel="noopener noreferrer" aria-label="${esc(photo.alt)} (open full photo in a new tab)"><img src="${esc(asset(photo.src))}" alt="${esc(photo.alt)}" loading="lazy" decoding="async"></a>`).join("")}
        </div>
      </section>`;
  }

  /* ------------------------------------------------- role page head */
  function pageHead(id) {
    const r = S.roles[id];
    const others = ROLE_IDS.filter((x) => x !== id)
      .map((x) => `<a class="pill" data-role="${x}" href="${url(x)}">${esc(S.roles[x].nav)}</a>`)
      .join("");
    const resume = S.resumes[id] ? `<a class="btn ghost" href="${asset(S.resumes[id])}" target="_blank" rel="noopener">Download resume</a>` : "";
    return `
      <section class="page-head">
        <div class="wrap">
          <a class="back reveal" href="${url("home", "#portfolios")}">← All portfolios</a>
          <p class="kicker reveal">${esc(r.kicker)}</p>
          <h1 class="reveal">${esc(r.headline)}</h1>
          <p class="lead reveal">${esc(r.summary)}</p>
          <div class="btn-row reveal">
            <a class="btn primary" href="#contact">Contact me</a>
            ${id === "multimedia" && r.videos && r.videos.length ? `<a class="btn ghost" href="#videos">${esc(r.videoLink)}</a>` : ""}
            ${id === "multimedia" ? `<a class="btn ghost" href="#designs">${esc(r.galleryLink)}</a>` : ""}
            ${resume}
          </div>
          <p class="switch reveal"><span>Also see:</span>${others}</p>
        </div>
      </section>`;
  }

  const skillGroups = (groups) =>
    `<div class="skill-grid">${groups
      .map((g) => `<div class="skill reveal"><h4>${esc(g.group)}</h4>${chips(g.items, true)}</div>`)
      .join("")}</div>`;

  const organizationLogo = (name) => {
    const logo = S.organizationLogos && S.organizationLogos[name];
    return logo ? `<img class="organization-logo" src="${esc(asset(logo))}" width="24" height="24" alt="${esc(name)} logo">` : "";
  };
  const organizationName = (name) => `<p class="organization-name">${organizationLogo(name)}<span>${esc(name)}</span></p>`;

  const experienceList = (items) =>
    items
      .map(
        (e) => `
      <article class="exp reveal">
        <div class="exp-head">
          <div><h3>${esc(e.title)}</h3>${organizationName(e.org)}</div>
          ${e.dates ? `<span class="tl-date">${esc(e.dates)}</span>` : ""}
        </div>
        ${e.bullets ? `<ul class="bullets">${e.bullets.slice(0, 3).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          ${e.bullets.length > 3 ? `<details class="experience-more">
            <summary><span class="more-label">View more</span><span class="less-label">View less</span><span class="sr-only"> about ${esc(e.title)} at ${esc(e.org)}</span></summary>
            <ul class="bullets">${e.bullets.slice(3).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          </details>` : ""}` : ""}
      </article>`
      )
      .join("");

  /* ------------------------------------------------------------ SEO */
  function indexingChart(figure) {
    const chart = figure.chart;
    const x = (day) => 40 + day / 21 * 420;
    const y = (value) => 220 - value / 60 * 180;
    return `<div class="indexing-chart">
      <ul class="indexing-legend">${chart.series.map((series, i) => `<li><span class="indexing-key series-${i}"></span>${esc(series.label)}</li>`).join("")}</ul>
      <svg viewBox="0 0 500 270" role="img" aria-labelledby="indexing-chart-title indexing-chart-desc">
        <title id="indexing-chart-title">${esc(figure.title)}</title>
        <desc id="indexing-chart-desc">${esc(figure.alt)} ${esc(chart.note)}</desc>
        ${[0, 20, 40, 60].map((value) => `<line class="indexing-grid" x1="40" x2="460" y1="${y(value)}" y2="${y(value)}"/><text class="indexing-axis" x="30" y="${y(value) + 4}" text-anchor="end">${value}</text>`).join("")}
        ${[{ day: 0, label: "21 Sep" }, { day: 7, label: "28 Sep" }, { day: 14, label: "5 Oct" }, { day: 21, label: "12 Oct" }].map((tick) => `<text class="indexing-axis" x="${x(tick.day)}" y="246" text-anchor="middle">${tick.label}</text>`).join("")}
        ${chart.series.map((series, i) => {
          const path = chart.checkpoints.map((point, n) => `${n ? "H" : "M"}${x(point.day)}${n ? "V" : ","}${y(series.values[n])}`).join(" ");
          return `<g class="indexing-series series-${i}"><path class="indexing-line" d="${path}" pathLength="1"/>${chart.checkpoints.map((point, n) => `<circle class="indexing-point" cx="${x(point.day)}" cy="${y(series.values[n])}" r="4" tabindex="0"><title>${esc(point.label)}: ${series.values[n]} ${esc(series.label.toLowerCase())}</title></circle>`).join("")}<text class="indexing-value" x="470" y="${y(series.values.at(-1)) + 4}">${series.values.at(-1)}</text></g>`;
        }).join("")}
      </svg>
      <p class="note">${esc(chart.note)}</p>
    </div>`;
  }

  function renderSeo() {
    const r = S.roles.seo;
    const c = r.caseStudy;
    const max = Math.max.apply(null, c.weekly.map((w) => w.v));
    const bars = c.weekly
      .map(
        (w) => `
        <div class="bar-col">
          <span class="bar-val">${w.v}</span>
          <div class="bar${w.partial ? " partial" : ""}" style="--n:${((w.v / max) * 100).toFixed(1)}"></div>
          <span class="bar-lab">${esc(w.label)}${w.partial ? "<small>3 days</small>" : ""}</span>
        </div>`
      )
      .join("");

    $("#main").innerHTML = `
      ${pageHead("seo")}

      <section class="section">
        <div class="wrap">
          <h2 class="section-title reveal">${esc(c.title)}</h2>
          <p class="meta reveal">${esc(c.meta)}</p>
          <p class="reveal narrow">${esc(c.brief)}</p>
          ${c.pdf ? `<p class="reveal"><a class="btn ghost" href="${asset(c.pdf)}" target="_blank" rel="noopener">Download the case study (PDF)</a></p>` : ""}

          <div class="stats">
            ${c.stats
              .map(
                (s) => `
              <div class="stat reveal">
                <strong>${esc(s.value)}</strong>
                <span>${esc(s.label)}</span>
                <small>${esc(s.note)}</small>
              </div>`
              )
              .join("")}
          </div>

          <div class="panel reveal">
            <h3>${esc(c.weeklyTitle)}</h3>
            <div class="bars">${bars}</div>
            <p class="note">${esc(c.weeklyNote)}</p>
          </div>
          ${c.figure ? `<div class="panel case-figure reveal" aria-labelledby="indexing-figure-title">
            <h3 id="indexing-figure-title">${esc(c.figure.title)}</h3>
            <figure>
              ${c.figure.chart ? indexingChart(c.figure) : `<a class="case-figure-image" href="${esc(asset(c.figure.src))}" target="_blank" rel="noopener noreferrer">
                <img src="${esc(asset(c.figure.src))}" alt="${esc(c.figure.alt)}" width="${esc(c.figure.width)}" height="${esc(c.figure.height)}" loading="lazy" decoding="async">
              </a>`}
              <figcaption class="note">${esc(c.figure.caption)}${c.figure.chart ? ` <a class="indexing-source" href="${esc(asset(c.figure.src))}" target="_blank" rel="noopener noreferrer">Open original chart</a>` : ""}</figcaption>
            </figure>
            ${c.figure.explanation.map((p) => `<p class="figure-explanation">${esc(p)}</p>`).join("")}
            <h4>What this means</h4>
            <ul class="bullets">${c.figure.takeaways.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          </div>` : ""}
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <h2 class="section-title reveal">Before and after</h2>
          <div class="table-wrap reveal">
            <table>
              <thead><tr><th>Area</th><th>Before</th><th>After</th></tr></thead>
              <tbody>${c.beforeAfter.map((r2) => `<tr><th scope="row">${esc(r2[0])}</th><td>${esc(r2[1])}</td><td>${esc(r2[2])}</td></tr>`).join("")}</tbody>
            </table>
          </div>

          <h3 class="sub-title reveal">${esc(c.rankingsTitle)}</h3>
          <div class="table-wrap reveal">
            <table>
              <thead><tr><th>Page</th><th>Impressions</th><th>Avg. position</th></tr></thead>
              <tbody>${c.rankings.map((r2) => `<tr><th scope="row">${esc(r2[0])}</th><td>${esc(r2[1])}</td><td>${esc(r2[2])}</td></tr>`).join("")}</tbody>
            </table>
          </div>
          <p class="note reveal">${esc(c.rankingsNote)}</p>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <h2 class="section-title reveal">What I did</h2>
          <div class="did-grid">
            ${c.did.map((d, i) => `<div class="did reveal"><span class="num">${String(i + 1).padStart(2, "0")}</span><h4>${esc(d[0])}</h4><p>${esc(d[1])}</p></div>`).join("")}
          </div>
          <aside class="callout reveal"><strong>Honest note.</strong> ${esc(c.honest)}</aside>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <h2 class="section-title reveal">Skills and tools</h2>
          ${skillGroups(r.skills)}
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <h2 class="section-title reveal">Experience</h2>
          ${experienceList(r.experience)}
        </div>
      </section>

      ${r.certificates && r.certificates.length ? `<section class="section">
        <div class="wrap">
          <h2 class="section-title reveal">Certificates</h2>
          ${r.certificates.map((certificate) => `<article class="exp reveal">
            <div class="exp-head"><div><h3>${esc(certificate.title)}</h3>${organizationName(certificate.org)}</div></div>
            <div class="btn-row">
              <a class="btn ghost" href="${esc(asset(certificate.pdf))}" target="_blank" rel="noopener noreferrer">View certificate (PDF)</a>
              <a class="btn ghost" href="${esc(certificate.source)}" target="_blank" rel="noopener noreferrer">View on Semrush</a>
            </div>
          </article>`).join("")}
        </div>
      </section>` : ""}

      ${contactBlock("seo", r.ctaSubject)}
    `;
  }

  /* ------------------------------------------------------------ DEV */
  function renderDev() {
    const r = S.roles.dev;
    const projects = r.projects
      .map(
        (p, projectIndex) => `
      <article class="project reveal">
        ${p.image ? `<img class="project-img" loading="lazy" src="${asset(p.image)}" alt="${esc(p.title)} screenshot">` : ""}
        <div class="project-body${p.previews && p.previews.length ? " has-project-view" : ""}">
          ${p.previews && p.previews.length ? `<button class="btn ghost project-view" type="button" data-project-preview="${projectIndex}" aria-label="View UI previews: ${esc(p.title)}">${svg('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>')}<span>View</span></button>` : ""}
          <p class="meta">${esc(p.subtitle)}</p>
          <h3>${esc(p.title)}</h3>
          ${chips(p.stack, true)}
          <ul class="bullets">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          ${
            p.github || p.demo
              ? `<div class="btn-row">
            ${p.github ? `<a class="btn ghost" href="${esc(p.github)}" target="_blank" rel="noopener">View code</a>` : ""}
            ${p.demo ? `<a class="btn ghost" href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo</a>` : ""}
          </div>`
              : ""
          }
        </div>
      </article>`
      )
      .join("");

    const edu = r.education
      .map(
        (e) => `
      <div class="edu reveal"><div><h4>${esc(e.title)}</h4>${organizationName(e.org)}</div>${e.dates ? `<span class="tl-date">${esc(e.dates)}</span>` : ""}</div>`
      )
      .join("");

    $("#main").innerHTML = `
      ${pageHead("dev")}

      <section class="section">
        <div class="wrap">
          <h2 class="section-title reveal">Projects</h2>
          <div class="projects">${projects}</div>
        </div>
      </section>

      <section class="section alt">
        <div class="wrap">
          <h2 class="section-title reveal">Skills and tools</h2>
          ${skillGroups(r.skills)}
        </div>
      </section>

      <section class="section">
        <div class="wrap two-col">
          <div>
            <h2 class="section-title reveal">Experience</h2>
            ${experienceList(r.experience)}
          </div>
          <div>
            <h2 class="section-title reveal">Education & training</h2>
            ${edu}
          </div>
        </div>
      </section>

      ${contactBlock("dev", r.ctaSubject)}
      <dialog class="project-preview-dialog" id="project-preview-dialog" aria-labelledby="project-preview-heading">
        <div class="project-preview-header"><h2 id="project-preview-heading"></h2><button class="btn ghost" type="button" id="project-preview-close">Close</button></div>
        <div class="project-preview-devices" id="project-preview-devices"></div>
      </dialog>
    `;
    const previewDialog = $("#project-preview-dialog");
    $$("[data-project-preview]").forEach((button) => button.addEventListener("click", () => {
      const project = r.projects[Number(button.dataset.projectPreview)];
      $("#project-preview-heading").textContent = project.title;
      $("#project-preview-devices").classList.toggle("single-preview", project.previews.length === 1);
      $("#project-preview-devices").innerHTML = project.previews.map((preview) => `<figure class="project-device-preview">
        <div class="device-frame device-${preview.device === "iphone" ? "iphone" : "laptop"}">
          ${preview.browser ? `<div class="preview-browser" aria-hidden="true">
            <div class="preview-browser-tabs"><span class="preview-browser-tab">${esc(preview.browser.tab)} <span>×</span></span><span class="preview-browser-new">+</span><span class="preview-browser-window">− &nbsp; □ &nbsp; ×</span></div>
            <div class="preview-browser-toolbar"><span>← &nbsp; → &nbsp; ↻</span><span class="preview-browser-address">${esc(preview.browser.address)}</span><span>⋮</span></div>
          </div>` : ""}
          <a href="${esc(asset(preview.src))}" target="_blank" rel="noopener noreferrer" aria-label="${esc(preview.label)}: open full-size screenshot in a new tab"><img src="${esc(asset(preview.src))}" alt="${esc(preview.alt)}" decoding="async"></a>
        </div><figcaption>${esc(preview.label)} · <a href="${esc(asset(preview.src))}" target="_blank" rel="noopener noreferrer">Open full size</a></figcaption>
      </figure>`).join("");
      previewDialog.showModal();
      document.body.classList.add("noscroll");
      $("#project-preview-close").focus();
    }));
    $("#project-preview-close").addEventListener("click", () => previewDialog.close());
    previewDialog.addEventListener("close", () => document.body.classList.remove("noscroll"));
    previewDialog.addEventListener("click", (event) => {
      const bounds = previewDialog.getBoundingClientRect();
      if (event.target === previewDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) previewDialog.close();
    });
  }

  /* ----------------------------------------------------- MULTIMEDIA */
  function renderMultimedia() {
    const r = S.roles.multimedia;
    const videos = r.videos || [];
    const videoHtml = videos.length
      ? `<section class="section alt" id="videos" aria-labelledby="videos-title">
          <div class="wrap">
            <h2 class="section-title reveal" id="videos-title">Video projects</h2>
            <div class="video-grid">
              ${videos
                .map(
                  (v) => `
                <figure class="video reveal">
                  <div class="video-frame"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${esc(v.youtube)}" title="${esc(v.title)}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>
                  <figcaption><strong>${esc(v.title)}</strong>${v.type ? `<span>${esc(v.type)}</span>` : ""}</figcaption>
                  <a class="video-watch" href="https://www.youtube.com/watch?v=${esc(v.youtube)}" target="_blank" rel="noopener noreferrer">Watch on YouTube<span class="sr-only">: ${esc(v.title)}</span></a>
                </figure>`
                )
                .join("")}
            </div>
          </div>
        </section>`
      : "";

    $("#main").innerHTML = `
      ${pageHead("multimedia")}

      ${videoHtml}

      <section class="section">
        <div class="wrap">
          <h2 class="section-title reveal" id="designs">Selected work</h2>
          <div class="tabs reveal" id="tabs" role="tablist"></div>
          <div class="masonry" id="grid" aria-live="polite"></div>
          <div class="more"><button class="btn ghost" id="more" type="button">Show more</button></div>
        </div>
      </section>

      <section class="section${videos.length ? "" : " alt"}">
        <div class="wrap">
          <h2 class="section-title reveal">Tools</h2>
          ${skillGroups(r.toolGroups)}
        </div>
      </section>

      <section class="section${videos.length ? " alt" : ""}">
        <div class="wrap">
          <h2 class="section-title reveal">Experience</h2>
          ${experienceList(r.experience)}
        </div>
      </section>

      ${contactBlock("multimedia", r.ctaSubject)}
    `;
    initGallery(r.gallery);
  }

  function initGallery(groups) {
    const PAGE = 18;
    const cats = [{ id: "all", label: "All" }].concat(groups.map((g) => ({ id: g.id, label: g.label })));
    let active = "all";
    let shown = PAGE;
    let list = [];
    const tabs = $("#tabs");
    const grid = $("#grid");
    const more = $("#more");

    const all = [];
    groups.forEach((g) => g.items.forEach((it) => all.push({ src: it.src, alt: it.alt || g.label + " by " + S.name, cat: g.id })));

    tabs.innerHTML = cats
      .map((c) => `<button role="tab" class="tab${c.id === active ? " on" : ""}" data-cat="${c.id}" aria-selected="${c.id === active}">${esc(c.label)}</button>`)
      .join("");

    function draw() {
      list = active === "all" ? all : all.filter((x) => x.cat === active);
      grid.innerHTML = list
        .slice(0, shown)
        .map((it, i) => `<button class="shot" type="button" data-i="${i}" aria-label="Open image ${i + 1}"><img loading="lazy" decoding="async" src="${esc(asset(it.src))}" alt="${esc(it.alt)}"></button>`)
        .join("");
      more.parentElement.style.display = list.length > shown ? "" : "none";
    }

    tabs.addEventListener("click", (e) => {
      const b = e.target.closest(".tab");
      if (!b) return;
      active = b.getAttribute("data-cat");
      shown = PAGE;
      $$(".tab", tabs).forEach((t) => {
        const on = t === b;
        t.classList.toggle("on", on);
        t.setAttribute("aria-selected", on);
      });
      draw();
    });
    more.addEventListener("click", () => {
      shown += PAGE;
      draw();
    });
    grid.addEventListener("click", (e) => {
      const b = e.target.closest(".shot");
      if (b) openLightbox(list, +b.getAttribute("data-i"));
    });
    draw();
  }

  /* ------------------------------------------------------- lightbox */
  let lbList = [];
  let lbIndex = 0;
  function openLightbox(list, i) {
    lbList = list;
    lbIndex = i;
    const lb = $("#lightbox");
    lb.hidden = false;
    document.body.classList.add("noscroll");
    showLb();
    $("#lb-close").focus();
  }
  function showLb() {
    const it = lbList[lbIndex];
    const img = $("#lb-img");
    img.classList.remove("loaded");
    img.onload = () => img.classList.add("loaded");
    img.src = asset(it.src);
    img.alt = it.alt;
    $("#lb-count").textContent = lbIndex + 1 + " / " + lbList.length;
  }
  function closeLb() {
    $("#lightbox").hidden = true;
    document.body.classList.remove("noscroll");
  }
  function stepLb(d) {
    lbIndex = (lbIndex + d + lbList.length) % lbList.length;
    showLb();
  }
  function wireLightbox() {
    const lb = $("#lightbox");
    if (!lb) return;
    $("#lb-close").addEventListener("click", closeLb);
    $("#lb-prev").addEventListener("click", () => stepLb(-1));
    $("#lb-next").addEventListener("click", () => stepLb(1));
    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target.classList.contains("lb-stage")) closeLb();
    });
    document.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") stepLb(-1);
      if (e.key === "ArrowRight") stepLb(1);
    });
    let x0 = null;
    lb.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1);
      x0 = null;
    });
  }

  /* ----------------------------------------------- scroll animations */
  function reveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = Math.min((i % 4) * 60, 180) + "ms";
      io.observe(el);
    });
  }

  /* ----------------------------------------------------------- boot */
  document.body.setAttribute("data-view", view);
  renderNav();
  if (view === "seo") renderSeo();
  else if (view === "dev") renderDev();
  else if (view === "multimedia") renderMultimedia();
  else if (view === "about") renderAbout();
  else renderHome();
  renderFooter();
  wireCopy();
  wireLightbox();
  reveal();

  // Land on #contact etc. when arriving from another page
  if (location.hash) {
    const t = document.getElementById(location.hash.slice(1));
    if (t) setTimeout(() => t.scrollIntoView(), 60);
  }
  // Close the mobile menu after tapping a link
  document.addEventListener("click", (e) => {
    if (e.target.closest("#navlinks a")) {
      $("#navlinks").classList.remove("open");
      $("#burger").setAttribute("aria-expanded", "false");
    }
  });
})();
