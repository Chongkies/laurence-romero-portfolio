# Jose Laurence Romero | Portfolio

Computer Engineering graduate from the Philippines working in **SEO**, **full-stack web development** and **multimedia** (graphic design, video editing, photography). Open for remote work.

**Live site:** https://chongkies.github.io/laurence-romero-portfolio
**LinkedIn:** https://www.linkedin.com/in/jose-laurence-romero-a665912b1

## What's on the site

The home page asks "What are you hiring for?" and opens a portfolio matched to the answer.

| Path | What you'll find |
| --- | --- |
| **SEO** | A case study on a new UK B2B site (Prolink Property Support): weekly Google impressions grew from 8 to 692 and indexed pages from 10 to 74 after fixing a site-wide noindex block. Includes before/after tables, rankings, tools and honest limits. |
| **Software Developer** | Credit Scoring Platform (thesis project with predictive analysis, built with React, Laravel and MySQL, tested for internal validation and research, not deployed in production), an internal encoding system for an LGU treasurer's office, and a pickleball player platform. |
| **Multimedia** | Posters, logos, thumbnails, photography and other design work in a filterable gallery with a full-screen viewer. |

## Skills at a glance

- **SEO:** technical SEO, on-page SEO, keyword strategy, content audits, structured data, Google Search Console, GA4, Ahrefs Webmaster Tools, Screaming Frog
- **Development:** JavaScript, Python, C/C++, React, Laravel, Tailwind CSS, MySQL, Firebase, REST APIs, Git/GitHub
- **Multimedia:** Photoshop, Illustrator, Lightroom, Figma, Canva, Premiere Pro, After Effects, DaVinci Resolve, CapCut

## How this site is built

Plain HTML, CSS and JavaScript. No framework and no build step, hosted free on GitHub Pages.

- Light and dark mode, responsive layout, scroll animations, keyboard-friendly image viewer
- All content lives in one file (`content.js`), and `app.js` renders every page from it
- Accessible markup: skip link, alt text, reduced-motion support

```
index.html            Home page
seo/                  SEO page
developer/            Software Developer page
multimedia/           Multimedia page
content.js            All text, projects, links and images
app.js                Renders the pages
style.css             Design and layout
images/  docs/        Media and downloadable files
```

## Contact

Use the contact section on the live site, or message me on LinkedIn.

## Copyright

The code structure is free to learn from. The text, case study, photos and designs are my own work, so please don't reuse them without permission.


### SEO chart data

All numeric SEO and GA4 results live in `data/seo-metrics.js`, loaded before `content.js` (including when opened with file://). Update bookings there, including the exact date range when known. Do not duplicate metrics in rendering code.

Save original Search Console exports as `data/gsc-performance-dates.csv` (Date, Clicks, Impressions, CTR, Position) and `data/gsc-indexing-chart.csv` (Date, Not indexed, Indexed). Then run:

`node scripts/import-search-console.cjs`

Dates may be ISO, English month names, or slash-separated; ambiguous slash dates default to month/day/year. Use `node scripts/import-search-console.cjs --date-order dmy` for day/month/year. Quoted fields, comma-separated thousands and percentage values are supported; CTR is stored in percentage points. Rows are validated, sorted, and duplicate dates rejected. Missing exports keep their series empty on the initial import; existing imported data is preserved if a file is later unavailable. No daily charts appear without observations. Screenshot totals remain supplied readings; mismatched CSV ranges produce a warning and retain both the CSV summary and supplied totals for review. The importer confirms an exact impression total only when it matches the supplied rounded display and click total.

TODO: supply both CSVs; confirm the performance end date, latest indexing date, GA4 reporting range, and exact booking dates/definition. The current Search Console screenshots are earlier readings, labelled accordingly. Add `images/seo/ga4-snapshot.png` when available and re-run the importer to enable its source link. Keep confidential information out of screenshots and exports.
