# Experience and SEO update report

## Changes made

- Updated the homepage hero CTAs: the first button uses an inline 16px SVG arrow and solid orange styling; the second stays outlined until hover or keyboard focus. The three portfolio links remain orange.
- Updated the company name in site copy, reviews, README and the prior UI audit. The review heading is `What the company's customers say on Google`; its quote uses `[the company]` in place of the former client name and otherwise remains unchanged.
- Replaced the SEO role copy with five bullets of at most 18 words. The home timeline and SEO page show three bullets with the remaining two behind View/Hide.
- Added the GIP software developer experience to the home timeline and above IT Operations on the Developer page. Its five bullets are at most 20 words. No placeholder date or location is shown.
- Updated the static HTML fallbacks and replaced decorative directional glyphs with text-presentation arrows or SVGs. The intro, cross-fade, project boxes, tech logos, dividers, updated logo wiring and shared contained-button rules were preserved.
- Removed the now-unused `keywordLibraryMinimum` data field.

## TODOs

- `README-github.md` was not present in this clone; `README.md` was updated.

## Retired SEO experience claims

The previous experience bullets about a 450+ keyword library managed with GrandRanker, navigation and conversion-path improvements, duplicate-post redirects and broken links, AI-written-post review, and finding content opportunities from query data were retired. The broad analytics setup and monthly reporting work remains in the revised tool/reporting bullet. GrandRanker remains listed as an SEO tool already present in the site's skills data.

## Image review

- `images/seo/pages-indexed-chart.png` describes the subject as an anonymized UK property-support company; it does not display the company name.
- `images/seo/search-console-indexing.png` and `images/seo/search-console-performance.png` show generic Search Console data with no company name visible.
- `images/og-card.png` contains the older personal LR mark, but no company name.

No images were renamed or changed.

## Name search

The final case-insensitive search of repository text outside `.git` returned no matches. The image checks above found no client name in pixels; the personal LR mark remains in the Open Graph card.

## Verification

- The five SEO bullets contain at most 18 words; the five Developer bullets contain at most 20.
- JavaScript syntax checks passed for `app.js`, `content.js`, `credit-scoring.js` and `data/seo-metrics.js`. `git diff --check` reported no whitespace errors.
- The six local routes `/`, `/seo/`, `/developer/`, `/developer/credit-scoring/`, `/multimedia/` and `/about/` returned HTTP 200.
- The requested 375px/1280px light/dark visual and browser-console checks could not be completed: the computer-use browser host was unavailable and native browser window capture timed out. Tab, theme and viewport rendering still need a manual browser check.

## Files changed

- `README.md`
- `about/index.html`
- `app.js`
- `content.js`
- `credit-scoring.css`
- `credit-scoring.js`
- `data/seo-metrics.js`
- `developer/credit-scoring/index.html`
- `developer/index.html`
- `docs/portfolio-ui-cleanup-report.md`
- `index.html`
- `multimedia/index.html`
- `seo/index.html`
- `style.css`
- `docs/experience-update-report.md`

No commit or push was made.
