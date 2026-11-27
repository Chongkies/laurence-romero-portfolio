# CV button report

## Implementation

- Added a right-aligned “Download CV” button below the navigation on `/seo/`, `/developer/` and `/multimedia/`, with the existing contained secondary button style, inline download icon, accessible label, download filename and new-tab fallback.
- Kept the control out of the home page, About page and credit-scoring detail page. The dynamic role-page link uses each page's `data-root` asset helper; the static role pages use their correct parent-relative PDF paths.
- Added a subtle 200 ms reveal movement and retained reduced-motion support.
- `robots.txt` allows all paths, and `sitemap.xml` contains no PDF URLs.

## Verification

- Confirmed all three existing PDFs are present and unchanged. Local requests for each role page and PDF returned HTTP 200; PDF responses used `application/pdf`.
- Checked the button placement and responsive layout at 375, 768 and 1280 px in light and dark themes. The button remained right-aligned, with space before the hero and no horizontal overflow.
- Extracted text from each PDF and searched the requested terms. No matches were found in any of the three PDFs.
- Verified the link destinations, filenames and HTML attributes in the page markup. Browser downloads were not triggered, so downloaded files were not written outside the workspace.

## Files changed

- `app.js`
- `content.js`
- `developer/index.html`
- `index.html`
- `multimedia/index.html`
- `seo/index.html`
- `style.css`
- `docs/cv-button-report.md`
- `docs/wording-update-report.md`

No PDF was edited. No commit or push was made.
