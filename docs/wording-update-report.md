# Wording update report

## Changes

- Replaced the GIP title with “Computer Engineer Intern (GIP)” in the home timeline and Developer experience section. Added the ownership and AI coding tools disclosure as the fourth timeline bullet behind View/Hide and as the additional Developer experience bullet.
- Replaced the LGU Treasury Collections System project bullet with the supplied discovery, requirements, data modeling, security design, AI tool, review and testing wording.
- Updated the Developer hero line to describe planning with users, real user testing and review/testing of AI-assisted code.
- Updated the home Developer category blurb to begin “Computer engineer building full-stack web apps with React and Laravel:” and retain the bank-tested thesis and local government collections system context.
- Updated the home title/metadata to identify the owner as a computer engineer, and set JSON-LD `jobTitle` to `["SEO and GEO Specialist","Computer Engineer","Graphic Designer"]`. The “Software Developer” portfolio category name remains unchanged.

## Verification

- `node --check app.js` and `node --check content.js` passed; `git diff --check` reported no whitespace errors.
- Targeted search across HTML and JavaScript found no instances of the requested outdated junior/AI wording.
- Local routes `/`, `/developer/` and `/developer/credit-scoring/` returned HTTP 200. The home timeline View/Hide interaction was checked in the browser; its panel lookup was corrected to use the associated timeline item.

## Files changed

- `app.js`
- `content.js`
- `developer/index.html`
- `index.html`
- `multimedia/index.html`
- `seo/index.html`
- `style.css`
- `docs/wording-update-report.md`

No commit or push was made.
