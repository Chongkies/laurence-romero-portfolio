/* Shared motion enhancement. All timings and easings come from style.css. */
(function () {
  'use strict';
  const query = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const value = name => getComputedStyle(root).getPropertyValue(name).trim();
  const duration = name => parseFloat(value('--dur-' + name));
  const ease = name => value('--ease-' + name);
  const stagger = index => Math.min(index, 5) * parseFloat(value('--stagger'));
  const running = new Set();
  const seenImages = new Set();
  const all = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  function play(element, frames, name = 'base', curve = 'out', options = {}) {
    if (!element || query.matches || !element.animate) return { finished: Promise.resolve() };
    const animation = element.animate(frames, {
      duration: duration(name), easing: ease(curve), fill: 'both', ...options
    });
    running.add(animation);
    // Cancelling a superseded animation is a normal state change, not an error.
    const done = animation.finished.catch(() => {}).finally(() => {
      running.delete(animation); animation.cancel();
    });
    return { animation, finished: done };
  }

  function swapText(element, text) {
    if (!element || element.textContent === text) return;
    element.querySelectorAll('.text-outgoing').forEach(node => node.remove());
    const old = document.createElement('span');
    old.className = 'text-outgoing'; old.textContent = element.textContent;
    old.setAttribute('aria-hidden', 'true');
    const next = document.createElement('span'); next.textContent = text;
    element.replaceChildren(next);
    if (query.matches) return;
    element.append(old);
    play(old, [{ opacity: 1 }, { opacity: 0 }], 'fast').finished.then(() => old.remove());
    play(next, [{ opacity: 0 }, { opacity: 1 }], 'fast');
  }

  function icons(button, on, offSvg, onSvg) {
    button.classList.add('icon-toggle');
    button.innerHTML = `<span class="icon-off" aria-hidden="true">${offSvg}</span><span class="icon-on" aria-hidden="true">${onSvg}</span>`;
    button.classList.toggle('icon-is-on', on);
  }

  function menu(button, panel) {
    const svg = paths => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${paths}</svg>`;
    icons(button, false, svg('<path d="M3 8h18M3 16h18"/>'), svg('<path d="m5 5 14 14M19 5 5 19"/>'));
    const mobile = matchMedia('(max-width: 1100px)');
    let animation;
    function set(open) {
      animation?.animation?.cancel();
      if (!mobile.matches) open = false;
      const origin = button.getBoundingClientRect();
      const bounds = panel.getBoundingClientRect();
      panel.style.transformOrigin = `${origin.left + origin.width / 2 - bounds.left}px 0px`;
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      button.classList.toggle('icon-is-on', open);
      panel.inert = mobile.matches && !open;
      if (open) panel.classList.add('open');
      if (query.matches || !mobile.matches) { panel.classList.toggle('open', open); return; }
      animation = play(panel, open ? [
        { opacity: 0, transform: 'scale(.95)' }, { opacity: 1, transform: 'scale(1)' }
      ] : [
        { opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.95)' }
      ], 'base', 'out', { duration: duration('base') * (open ? 1 : .8) });
      if (!open) { const closing = animation; closing.finished.then(() => { if (animation === closing) panel.classList.remove('open'); }); }
    }
    button.addEventListener('click', () => set(button.getAttribute('aria-expanded') !== 'true'));
    panel.addEventListener('click', event => { if (event.target.closest('a')) set(false); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { set(false); button.focus(); }
    });
    document.addEventListener('click', event => {
      if (!panel.contains(event.target) && !button.contains(event.target) && button.getAttribute('aria-expanded') === 'true') set(false);
    });
    mobile.addEventListener('change', () => set(false));
    query.addEventListener('change', () => set(button.getAttribute('aria-expanded') === 'true'));
    set(false);
  }

  function themeIcon(button, dark) {
    const svg = paths => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">${paths}</svg>`;
    if (!button.classList.contains('icon-toggle')) icons(button, dark,
      svg('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'),
      svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'));
    else button.classList.toggle('icon-is-on', dark);
  }

  function popover(link, hint) {
    let current;
    function set(open) {
      current?.animation?.cancel();
      if (open) hint.classList.add('hint-visible');
      current = play(hint, open ? [{ opacity: 0, transform: 'scale(.95)' }, { opacity: 1, transform: 'scale(1)' }] : [{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.95)' }], 'fast', 'out', { duration: duration('fast') * (open ? 1 : .8) });
      if (!open) { const closing = current; closing.finished.then(() => { if (current === closing) hint.classList.remove('hint-visible'); }); }
    }
    link.addEventListener('mouseenter', () => set(true));
    link.addEventListener('focusin', () => set(true));
    const leave = () => { if (!link.matches(':hover, :focus-within')) set(false); };
    link.addEventListener('mouseleave', leave); link.addEventListener('focusout', leave);
  }

  function flipLayout(elements, update, open = true) {
    const positions = new Map(elements.map(element => [element, element.getBoundingClientRect().top]));
    update();
    if (query.matches) return;
    for (const [element, before] of positions) {
      const delta = before - element.getBoundingClientRect().top;
      if (Math.abs(delta) < 1) continue;
      play(element, [{ transform: `translateY(${delta}px)` }, { transform: 'translateY(0)' }], 'base', 'in-out', { duration: duration('base') * (open ? 1 : .8) });
    }
  }

  function timeline(button, panel) {
    const label = document.createElement('span'); label.className = 'toggle-label'; label.textContent = 'View';
    const hint = button.querySelector('.sr-only');
    const mark = document.createElement('span'); mark.className = 'toggle-mark icon-toggle'; mark.setAttribute('aria-hidden', 'true');
    mark.innerHTML = '<span class="icon-off">+</span><span class="icon-on">−</span>';
    button.replaceChildren(label, mark); if (hint) button.append(hint);
    let busy = false;
    button.addEventListener('click', async () => {
      if (busy) return;
      busy = true;
      const open = button.getAttribute('aria-expanded') !== 'true';
      const row = button.closest('.tl-item');
      const rows = all('.tl-item', row.parentElement).filter(el => el !== row);
      const sections = all('#main > section').filter(el => el !== row.closest('section'));
      let ghost;
      if (!open && !query.matches) {
        const rect = panel.getBoundingClientRect(), parent = row.getBoundingClientRect();
        ghost = panel.firstElementChild.cloneNode(true); ghost.className = 'timeline-exit'; ghost.inert = true; ghost.setAttribute('aria-hidden', 'true');
        Object.assign(ghost.style, { position: 'absolute', left: `${rect.left - parent.left}px`, top: `${rect.top - parent.top}px`, width: `${rect.width}px`, pointerEvents: 'none' });
        row.append(ghost);
      }
      button.setAttribute('aria-expanded', String(open));
      swapText(label, open ? 'Hide' : 'View'); mark.classList.toggle('icon-is-on', open);
      flipLayout([...rows, ...sections], () => { panel.inert = !open; panel.classList.toggle('is-open', open); }, open);
      const target = open ? panel.firstElementChild : ghost;
      if (target) await play(target, open ? [
        { opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'translateY(-4px)' },
        { opacity: 1, clipPath: 'inset(0)', transform: 'translateY(0)' }
      ] : [
        { opacity: 1, clipPath: 'inset(0)', transform: 'translateY(0)' },
        { opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'translateY(-4px)' }
      ], 'base', 'out', { duration: duration('base') * (open ? 1 : .8) }).finished;
      ghost?.remove(); busy = false;
    });
  }

  function prepareHero() {
    all('.hero h1, .hero .lead, .hero .btn-row, .hero-proof').forEach(el => {
      el.classList.remove('reveal'); if (!query.matches) el.classList.add('hero-pending');
    });
  }
  function hero(photo) {
    all('.hero-pending').forEach((el, i) => {
      el.classList.remove('hero-pending');
      play(el, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], 'enter', 'out', { delay: i * parseFloat(value('--hero-stagger')) });
    });
    if (!photo) return;
    photo.classList.remove('portrait-pending');
    play(photo, [{ opacity: 0, transform: 'translateX(80px)', clipPath: 'inset(0 0 8% 0)' }, { opacity: 1, transform: 'translateX(0)', clipPath: 'inset(0)' }], 'enter');
    // Separate X and Y tracks give the small entrance arc independent easing.
    play(photo.querySelector('img'), [{ transform: 'translateY(10px)' }, { transform: 'translateY(0)' }], 'enter', 'in-out');
  }

  function maskImages(images) {
    if (query.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const img = entry.target;
      if (seenImages.has(img.src)) return;
      seenImages.add(img.src);
      img.decode().then(() => play(img, [
        { opacity: .35, clipPath: 'inset(0 0 12% 0)' }, { opacity: 1, clipPath: 'inset(0)' }
      ], 'base', 'out', { delay: stagger(images.indexOf(img)) })).catch(() => {});
    }), { threshold: .08 });
    images.forEach(img => observer.observe(img));
  }

  async function galleryUpdate(grid, update) {
    grid.getAnimations().forEach(animation => animation.cancel());
    grid.style.opacity = '';
    grid.parentElement.querySelectorAll('.gallery-outgoing').forEach(el => el.remove());
    const ghost = grid.children.length && !query.matches ? grid.cloneNode(true) : null;
    if (ghost) {
      grid.parentElement.style.position = 'relative';
      ghost.removeAttribute('id'); ghost.classList.add('gallery-outgoing'); ghost.inert = true; ghost.setAttribute('aria-hidden', 'true');
      Object.assign(ghost.style, { position: 'absolute', left: `${grid.offsetLeft}px`, top: `${grid.offsetTop}px`, width: `${grid.clientWidth}px`, pointerEvents: 'none', zIndex: '1' });
      grid.after(ghost);
    }
    update();
    if (ghost) {
      grid.style.opacity = '0';
      const ready = all('img', grid).slice(0, 6).map(img => { img.loading = 'eager'; return img.decode().catch(() => {}); });
      await Promise.race([Promise.all(ready), new Promise(resolve => setTimeout(resolve, 8000))]);
      if (!ghost.isConnected) return;
      grid.style.opacity = '';
      play(ghost, [{ opacity: 1 }, { opacity: 0 }], 'base', 'out', { duration: duration('base') * .8 }).finished.then(() => ghost.remove());
      play(grid, [{ opacity: 0 }, { opacity: 1 }]);
    }
    maskImages(all('img', grid));
  }

  function tabIndicator(tabs) {
    tabs.classList.add('has-indicator');
    const indicator = document.createElement('span'); indicator.className = 'tab-indicator'; indicator.setAttribute('aria-hidden', 'true'); tabs.append(indicator);
    function move() {
      const active = tabs.querySelector('.tab.on'); if (!active) return;
      const before = indicator.getBoundingClientRect();
      indicator.getAnimations().forEach(animation => animation.cancel());
      const ready = indicator.dataset.ready;
      Object.assign(indicator.style, { left: `${active.offsetLeft}px`, top: `${active.offsetTop + active.offsetHeight - 1}px`, width: `${active.offsetWidth}px` });
      const rect = indicator.getBoundingClientRect();
      indicator.dataset.ready = 'true';
      if (ready && !query.matches) play(indicator, [
        { transform: `translate(${before.left - rect.left}px, ${before.top - rect.top}px) scaleX(${before.width / rect.width})` },
        { transform: 'translate(0, 0) scaleX(1)' }
      ], 'base', 'in-out');
    }
    new ResizeObserver(move).observe(tabs);
    document.fonts.ready.then(move);
    tabs.addEventListener('click', () => requestAnimationFrame(move));
    return move;
  }

  function copy(button, email) {
    const label = document.createElement('span'); label.className = 'copy-label'; label.textContent = button.textContent; button.replaceChildren(label); button.setAttribute('aria-live', 'polite');
    let timer;
    button.addEventListener('click', async () => {
      try {
        if (!navigator.clipboard?.writeText) { swapText(label, email); return; }
        await navigator.clipboard.writeText(email);
        clearTimeout(timer); swapText(label, 'Copied');
        play(button, [{ transform: 'scale(1)', filter: 'brightness(1)' }, { transform: 'scale(1.025)', filter: 'brightness(1.15)', offset: .45 }, { transform: 'scale(1)', filter: 'brightness(1)' }], 'confirm', 'in-out');
        timer = setTimeout(() => swapText(label, 'Copy email address'), 2000);
      } catch (_) { swapText(label, email); }
    });
  }

  function lightbox(box, asset) {
    const img = box.querySelector('#lb-img');
    const count = box.querySelector('#lb-count');
    const close = box.querySelector('#lb-close');
    let items = [], index = 0, trigger, generation = 0, closing = false;
    let inert = [];
    function origin() {
      const shot = document.querySelector(`#grid .shot[data-i="${index}"]`) || trigger;
      const target = shot?.getBoundingClientRect(), rect = img.getBoundingClientRect();
      img.style.transformOrigin = target ? `${target.left + target.width / 2 - rect.left}px ${target.top + target.height / 2 - rect.top}px` : 'center';
    }
    async function show(direction = 0) {
      const token = ++generation, it = items[index];
      const preload = new Image(); preload.src = asset(it.src);
      await preload.decode().catch(() => {});
      if (token !== generation || box.hidden || closing) return;
      let old;
      if (direction && img.classList.contains('loaded')) {
        const rect = img.getBoundingClientRect(); old = img.cloneNode(); old.removeAttribute('id'); old.className = 'lb-outgoing'; old.alt = ''; old.setAttribute('aria-hidden', 'true');
        Object.assign(old.style, { position: 'fixed', left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`, objectFit: 'contain', pointerEvents: 'none' });
        box.append(old);
      }
      img.src = preload.src; img.alt = it.alt; img.classList.add('loaded');
      swapText(count, `${index + 1} / ${items.length}`);
      if (direction) {
        play(img, [{ opacity: 0, transform: `translateX(${direction * 12}px)` }, { opacity: 1, transform: 'translateX(0)' }], 'base', 'in-out');
        if (old) play(old, [{ opacity: 1, transform: 'translateX(0)' }, { opacity: 0, transform: `translateX(${-direction * 12}px)` }], 'base', 'in-out', { duration: duration('base') * .8 }).finished.then(() => old.remove());
      } else {
        origin(); play(img, [{ opacity: 0, transform: 'scale(.95)' }, { opacity: 1, transform: 'scale(1)' }]);
      }
    }
    function open(list, i, source) {
      if (!box.hidden) return;
      items = list; index = i; trigger = source; closing = false;
      img.classList.remove('loaded'); box.hidden = false;
      inert = all('#main, #nav, #footer').map(el => [el, el.inert]); inert.forEach(([el]) => { el.inert = true; });
      document.body.classList.add('noscroll'); close.focus();
      play(box, [{ opacity: 0 }, { opacity: 1 }]); show();
    }
    async function dismiss() {
      if (box.hidden || closing) return; closing = true; generation++;
      origin();
      const exit = duration('base') * .8;
      const a = play(img, [{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.95)' }], 'base', 'in-out', { duration: exit });
      const fade = play(box, [{ opacity: 1 }, { opacity: 0 }], 'base', 'out', { duration: exit });
      await Promise.all([a.finished, fade.finished]);
      box.hidden = true; box.querySelectorAll('.lb-outgoing').forEach(el => el.remove());
      document.body.classList.remove('noscroll'); inert.forEach(([el, prior]) => { el.inert = prior; });
      if (trigger?.isConnected) trigger.focus(); closing = false;
    }
    const step = delta => { if (box.hidden || closing) return; index = (index + delta + items.length) % items.length; show(delta); };
    close.addEventListener('click', dismiss);
    box.querySelector('#lb-prev').addEventListener('click', () => step(-1));
    box.querySelector('#lb-next').addEventListener('click', () => step(1));
    box.addEventListener('click', event => { if (event.target === box || event.target.classList.contains('lb-stage')) dismiss(); });
    document.addEventListener('keydown', event => {
      if (box.hidden) return;
      if (event.key === 'Escape') { event.preventDefault(); dismiss(); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
      if (event.key === 'Tab') {
        const controls = all('button', box), first = controls[0], last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    let touch;
    box.addEventListener('touchstart', event => { touch = event.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', event => { if (touch == null) return; const delta = event.changedTouches[0].clientX - touch; if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1); touch = null; }, { passive: true });
    return { open };
  }

  function slideTrack(track, left) {
    const old = track.scrollLeft;
    track.scrollTo({ left, behavior: 'instant' });
    const delta = track.scrollLeft - old;
    all(':scope > *', track).forEach(el => play(el, [{ transform: `translateX(${delta}px)` }, { transform: 'translateX(0)' }], 'base', 'in-out'));
  }

  function details(element) {
    const summary = element.querySelector('summary');
    const label = document.createElement('span'); label.className = 'toggle-label'; label.textContent = 'View more';
    const hint = summary.querySelector('.sr-only'); summary.replaceChildren(label); if (hint) summary.append(hint);
    let busy = false;
    summary.addEventListener('click', async event => {
      event.preventDefault(); if (busy) return; busy = true;
      const open = !element.open, content = element.querySelector('ul'), parent = element.closest('article');
      let ghost;
      if (!open && !query.matches) {
        const rect = content.getBoundingClientRect(), bounds = parent.getBoundingClientRect();
        ghost = content.cloneNode(true); ghost.inert = true; ghost.setAttribute('aria-hidden', 'true');
        parent.style.position = 'relative';
        Object.assign(ghost.style, { position: 'absolute', margin: '0', left: `${rect.left - bounds.left}px`, top: `${rect.top - bounds.top}px`, width: `${rect.width}px`, pointerEvents: 'none' });
        parent.append(ghost);
      }
      flipLayout(all('.exp, .project, #main > section').filter(el => el !== parent && !el.contains(parent)), () => { element.open = open; summary.setAttribute('aria-expanded', String(open)); }, open);
      swapText(label, open ? 'View less' : 'View more');
      const target = open ? content : ghost;
      if (target) await play(target, open ? [{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }, { opacity: 1, clipPath: 'inset(0)' }] : [{ opacity: 1, clipPath: 'inset(0)' }, { opacity: 0, clipPath: 'inset(0 0 100% 0)' }], 'base', 'out', { duration: duration('base') * (open ? 1 : .8) }).finished;
      ghost?.remove(); busy = false;
    });
  }

  function progress(t) {
    const numbers = ease('out').match(/[.\d]+/g).map(Number);
    const [x1,y1,x2,y2] = numbers;
    const curve = (v,a,b) => 3*(1-v)*(1-v)*v*a + 3*(1-v)*v*v*b + v*v*v;
    let lo=0,hi=1;
    for(let i=0;i<12;i++){const mid=(lo+hi)/2;if(curve(mid,x1,x2)<t)lo=mid;else hi=mid;}
    return curve((lo+hi)/2,y1,y2);
  }

  function init() {
    prepareHero();
    all('.experience-more').forEach(details);
    all('.about-discover').forEach(link => { const hint = link.querySelector('.about-hint'); if (hint) popover(link, hint); });
    if (root.dataset.sharedRole) document.querySelector('.page-head h1')?.classList.add('in');
    document.addEventListener('click', event => {
      if (query.matches || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('.role-go'); if (!link) return;
      const role = link.closest('[data-role]').dataset.role;
      root.dataset.sharedRole = role;
      try { sessionStorage.setItem('portfolio-shared-role', JSON.stringify({ role, to: new URL(link.href).pathname, time: Date.now() })); } catch (_) {}
    });
    const clearShared = () => { delete root.dataset.sharedRole; try { sessionStorage.removeItem('portfolio-shared-role'); } catch (_) {} };
    addEventListener('pagereveal', event => { if (event.viewTransition) event.viewTransition.finished.catch(() => {}).finally(clearShared); else clearShared(); });
    addEventListener('pageshow', event => { if (event.persisted) clearShared(); });
  }
  query.addEventListener('change', () => {
    if (!query.matches) return;
    running.forEach(animation => { try { animation.finish(); } catch (_) { animation.cancel(); } });
    all('.hero-pending, .portrait-pending').forEach(el => el.classList.remove('hero-pending', 'portrait-pending'));
  });
  window.PortfolioMotion = { duration, ease, stagger, play, progress, swapText, menu, themeIcon, timeline, hero, maskImages, galleryUpdate, tabIndicator, copy, lightbox, slideTrack, init };
})();
