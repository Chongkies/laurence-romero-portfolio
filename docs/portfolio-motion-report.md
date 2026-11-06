# Motion refinement report

Implemented in the main GitHub project on 6 November 2026. No commit or push.

## Files changed by this task

- style.css: shared motion tokens, shorter reveals and preview motion, transform-based chart animation, icon crossfades, immediate press states, sliding gallery underline, reduced-motion rules and shared navigation names.
- motion.js (new): reusable animation helpers; menu, tooltip, timeline and experience expansion; hero stagger/portrait arc; gallery overlap/masks; copy confirmation; lightbox motion and focus; transform-only carousel slide; shared-title navigation setup.
- app.js: connects the existing controls/renderers to motion.js, applies the new stagger and count-up timing, and keeps the original intro implementation.
- credit-scoring.css: risk bars animate with scaleX rather than width.
- credit-scoring.js: screenshot carousel uses a transform-based movement helper.
- index.html, seo/index.html, developer/index.html, multimedia/index.html, about/index.html, developer/credit-scoring/index.html: load motion.js before app.js and add a small early shared-title hint. Static main content is unchanged.
- docs/portfolio-motion-report.md: this report.

content.js, sitemap.xml and robots.txt match the baseline exactly. Existing content/layout/color settings, booking/review/case-study data, phone/email/social links and Open Graph/canonical metadata were preserved. Earlier uncommitted UI-cleanup edits remain in place.

## Final shared tokens

| Token | Value | Use |
| --- | --- | --- |
| --ease-out | cubic-bezier(0.23, 1, 0.32, 1) | Entrances and releases |
| --ease-in-out | cubic-bezier(0.65, 0, 0.35, 1) | Moves, layout FLIP, underline, image changes, page/theme fades |
| --dur-press | 100ms | Reserved press token; actual press-in is instant as explicitly required |
| --dur-fast | 150ms | Icon/text crossfades and press release |
| --dur-base | 220ms | Menus, lightbox, expansion, gallery overlap and ordinary moves |
| --dur-enter | 450ms | Hero and scroll entrances only |
| --dur-exit | 360ms | 80% of the matching 450ms entrance; one-way scroll entrances do not need an exit |
| --dur-confirm | 250ms | One-shot copy confirmation |
| --stagger | 30ms | Row/item stagger, capped at five offsets = 150ms |
| --hero-stagger | 50ms | Name, sentence, actions, proof line |

Matching 220ms overlays/expansions close in 176ms. The 150ms tooltip closes in 120ms. These are calculated from the shared duration, rather than separate hard-coded UI timings. The legacy --ease alias and the intro's own three 1000ms phases are intentionally unchanged.

## Each requested rule

| # | Status | Implementation or reason |
| --- | --- | --- |
| 1 | Applied | Scroll/hero entrances, menu, lightbox and View expansion use ease-out. |
| 2 | Applied | Menu and bullet/details expansion: 220ms. About tooltip: 150ms. |
| 3 | Applied | Rows and gallery masks use 30ms offsets, capped after six items (150ms total stagger). Preview devices use the same stagger. |
| 4 | Applied | Buttons, tabs, role rows and theme toggle press to scale .97, with a 150ms release. |
| 5 | Skipped | No toggle knobs exist. |
| 6 | Applied | Hero name → sentence → actions → proof, at 0/50/100/150ms. Hero/photo begin after the unchanged intro finishes or is skipped, or on load when it is already seen. |
| 7 | Applied | Portrait X starts at 80px; the image Y starts 10px lower. Independent ease-out/ease-in-out tracks form a small arc, then return to the original layout. |
| 8 | Applied | Successful clipboard write crossfades to Copied, pulses once for 250ms and restores the original label after two seconds. Failure does not announce success. No phone-copy control existed, so none was added. |
| 9 | Applied | Gallery underline, image-to-image changes, perceived accordion movement and thesis carousel use ease-in-out. Accordion layout changes instantly; adjacent content uses FLIP transforms instead of animating height. |
| 10 | Applied | Menu, lightbox image, project preview and tooltip enter from scale .95 with opacity zero. |
| 11 | Applied | Menu origin is the burger corner; lightbox origin uses the clicked/current thumbnail position; bullet content reveals downward from its button. |
| 12 | Applied | Menu and lightbox retract to their trigger origins. Lightbox restores focus to the originating thumbnail. |
| 13 | Applied | No spring, bounce or overshooting easing curves. |
| 14 | Applied | Press-in has zero duration and zero delay; only release is tweened. Entrance delays are cleared after settling. |
| 15 | Applied | Menu/lightbox/bullet/details exits are 176ms vs 220ms entries. Tooltip exit is 120ms vs 150ms entry. |
| 16 | Applied | Outgoing gallery snapshots overlap the incoming grid; existing images remain visible while replacement thumbnails decode. Lightbox image changes overlap, text labels crossfade, and page navigation retains its overlapping crossfade. |
| 17 | Partly applied | Portrait and gallery images get short first-reveal clip masks. There are no headline accent lines in the current plain design; none were added. The existing active gallery underline slides rather than adding a new decorative line. |
| 18 | Applied | Moon/sun, burger/close and plus/minus icon pairs overlap for 150ms, with 2px blur and scale .9 → 1. |
| 19 | Skipped | No draggable UI exists. |
| 20 | Partly applied | Fixed site-header view-transition-name keeps the header/wordmark stable. All three selected home titles share portfolio-title with the destination H1. Gallery/lightbox uses thumbnail-origin transforms rather than a second native View Transition. Normal links/navigation remain the fallback. |

## Verification

- Playwright interaction matrix: 16 page/theme/width combinations, four main pages at 390px and 1280px in both themes. Captured viewport screenshots and checked for overflow and enhancement failures.
- Menu open/close/Escape, focus restoration, timeline View/Hide, experience View more/less, project-preview open/close, gallery category changes and overlapping layers, sliding underline position, keyboard tabs, lightbox open/next/Escape/focus trap/return, copy-email success/reset, active press scale and visible 2px focus outline passed.
- All six pages passed reduced-motion checks in both themes at 390px: no intro, visible content, no authored WAAPI movement, instant state changes. No-JavaScript primary pages remain readable and do not overflow.
- All three portfolio-title pairs passed native cross-document transitions in Chrome: transition ready, portfolio-title matched, and site-header group had no animation. The main matrix also exercised navigation at both widths and in both themes.
- Fallback tested separately by disabling the same-document API and replacing navigation opt-in with opt-out inside the test browser only. All three links still navigated, and theme switching used the opacity fallback. This is capability emulation, not a claim of a native Firefox/Safari test.
- Keyboard About tooltip opening/closing passed at 150/120ms. Thesis screenshot carousel Next advanced using transform-only motion.
- Observed intro duration: 3009ms light, 3003ms dark. Original drawing/monogram/aperture CSS and homeIntro() were compared exactly with the pre-task baseline and are unchanged. Once-per-session and reduced-motion behavior passed.
- JS syntax checks passed for app.js, motion.js, content.js and credit-scoring.js; git diff --check passed.
- Zero console/page errors in the test matrix and shared-transition checks. Authored WAAPI keyframes were checked to use only transform, opacity, filter or clip-path. Source audit found no transition: all, animated width/height/grid rows/visibility, linear UI easing, overshoot curve or ad-hoc UI easing outside the preserved intro.
- Content/settings files, existing static main content and Open Graph/canonical tags were compared against the current-code baseline.

## Limits and deliberate exceptions

- The intro retains its original easings, durations and drawing animation, as requested. It is excluded from the general motion-token/property cleanup.
- Native View Transition geometry interpolation is controlled by the browser; authored UI animation keyframes use only the allowed painted properties. The ordinary multi-page navigation path is retained.
- Browser coverage: installed Chrome plus an emulated no-View-Transitions path. Firefox and Safari were not tested. When cross-document transitions are unavailable or skipped, navigation remains a regular page load; the theme uses its existing opacity fallback when the same-document API is missing.
- Gallery image decoding has a resource-wait deadline; the copy label stays confirmed for two seconds. These waits are not animation durations.
- The lightbox uses a small trigger-origin scale rather than flying a full thumbnail across the screen. Next/previous uses an overlapping fade/short slide, which keeps motion calm.
- YouTube was stubbed only inside Playwright for consistent UI checks; video playback was not tested or modified.
- Temporary QA screenshots/results are in the OS temporary folder portfolio-motion-review. No test dependencies, generated images or build system were added to the site.
