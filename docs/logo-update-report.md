# Logo and favicon update report

## Source image

The requested `docs/logo.png` was not present. I used the supplied `docs/logo.jpg` without modifying it. The outer white background was flood-filled from the corners with a per-channel tolerance of 20, then cropped with 8% padding and placed on a transparent square canvas. The edge was antialiased and de-fringed.

Alpha verification for `images/logo/logo-transparent.png`: corners `0, 0, 0, 0`; edge midpoints `0, 0, 0, 0`; center `255`. The transparent master was composited against dark and light backgrounds and inspected; no white halo was visible.

The source logo has dark/navy parts, so a white logo and dark-tab favicon variants were generated for dark themes.

## Files created

- `images/logo/logo-transparent.png`
- `images/logo/logo-light.png`
- `favicon.ico` (16, 32 and 48 px)
- `images/favicon/favicon-32.png`
- `images/favicon/favicon-48.png`
- `images/favicon/favicon-192.png`
- `images/favicon/favicon-512.png`
- `favicon-dark.ico` (16, 32 and 48 px)
- `images/favicon/favicon-dark-32.png`
- `images/favicon/favicon-dark-48.png`
- `images/favicon/apple-touch-icon.png` (180 × 180, opaque white background)

## Files changed

- `index.html`
- `seo/index.html`
- `developer/index.html`
- `developer/credit-scoring/index.html`
- `multimedia/index.html`
- `about/index.html`
- `app.js`
- `style.css`
- `docs/logo-update-report.md`

Each page now has root-correct favicon links and light/dark theme-color metadata. The nav uses the new logo while retaining the name text. The home intro uses the matching dark or light logo; its existing timing, easing, theme behavior, session behavior, skip control and home-only condition were kept.

## Checks and remaining old marks

- Local HTTP checks returned 200 for all six requested routes and each new logo/favicon URL. `robots.txt` allows crawling.
- Chrome preview confirmed the nav logo in both light and dark themes at a wide desktop size. The local browser automation bridge did not provide device emulation, so a 375 px visual pass and a precise 1280 px viewport pass could not be completed.
- No external favicon or logo files were referenced before this update. The inline LR navigation marks and SVG intro monogram were replaced; there are no old favicon files to delete.
- `images/og-card.png` still contains the previous LR tile. It was not changed, as requested.
- The supplied `docs/logo.jpg` remains unchanged. No `CNAME` or unrelated files were edited.

Google can take days to weeks to refresh favicons. After pushing, request re-indexing of the homepage in Google Search Console.
