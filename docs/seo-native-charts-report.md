# Native SEO charts

Implemented in the main GitHub project; no commit or publication.

## Files

- data/seo-metrics.js: single numeric source for bookings, Search Console, GA4 and retained historical SEO figures. Daily arrays are empty pending original exports.
- scripts/import-search-console.cjs: CSV parser/importer; quoted numbers, percentages, common date formats, validation, chronological sorting, duplicate rejection, missing-file handling and range mismatch warnings.
- seo-charts.js: native SVG charts, source links, keyboard/pointer tooltips, hidden data tables, one-time 900 ms entrances and reduced-motion handling.
- content.js: shared metrics references and requested performance, indexing, Analytics and honest-note copy; historical facts retained.
- app.js: native chart integration; old screenshot panel and curtain animation removed.
- style.css: plain responsive chart surfaces and motion using existing theme/easing tokens; unused screenshot-panel styles removed.
- All six HTML pages: metrics script loaded before content.js; SEO also loads chart code. Home and SEO main fallbacks refreshed without changing metadata.
- scripts/update-metadata.cjs: loads shared metrics before evaluating content.js; metadata generator was not run.
- README.md: importer instructions, ownership of metrics and outstanding data.

## Numbers

- Bookings: 11 → 30, described as website bookings in the first month and a half/about six weeks. Sources remain unconfirmed. Booking-record note unchanged.
- Indexed: 68 → 74; not indexed: 18 → 15. Baseline remains 10 on 21 September 2026.
- Clicks: 17 → 32; impressions: 2.13K → 3.77K; average position: 28.5 → 25.4; CTR stays 0.8%. No unconfirmed exact 3,770 total is displayed.
- GA4 added: 65 active users, 55 new users, 4m 00s average engagement, 840 events. First-source counts: ChatGPT 25, Direct 21, Google organic search 15, Gemini 2, Facebook 1, LinkedIn 1. Top session sources: Direct 76, ChatGPT 27, Google organic search 19, LinkedIn 8, manage.wix.com 4, Gemini 2, Facebook 2. No channel attribution for bookings.
- Retained weekly 8→692 result, original six observations (last is a three-day partial week), 12 top-three queries, 287 queries/37 top-ten queries, 100/100 health with zero errors, nine referring domains, 450+ keyword library, historical 34 not indexed/29+ blocked, and the original rankings rows. Reviews unchanged.

## Charts and TODOs

Visible with real supplied observations: historical weekly impressions and both GA4 source charts. Current Search Console totals display as plain figures; daily impressions, daily clicks and indexing step lines remain hidden until CSVs are imported. The baseline and latest reading are not joined using invented points.

- Supply data/gsc-performance-dates.csv and data/gsc-indexing-chart.csv, then run node scripts/import-search-console.cjs.
- Confirm exact performance end date (currently approximately 8 Sep–early Nov 2026), latest indexing date, GA4 range, and booking definition/exact dates.
- Recheck the performance explanation against the imported series. Import warnings flag mismatched reporting ranges/totals; supplied snapshot totals are retained for review.
- Existing source screenshots show earlier readings and links explicitly say so. Replace with current safe screenshots when available. images/seo/ga4-snapshot.png is missing, so no GA4 screenshot link is rendered.
- Older audit reports intentionally retain historical numbers; unrelated CSS dimensions and image identifiers are not metrics.

## Validation

All JS syntax checked. Importer exercised with tiny fake CSVs only in a temporary directory, including quoted thousands, percentages, dates, sorting and rejection cases. Playwright covers SEO at 1440/390 in both themes, native tooltips, visible focus, no horizontal overflow, no failed requests or console errors, once-only draw state, reduced motion and file:// loading. Temporary CSV data also exercises all three waiting chart types without installing fake data in the project. Full screenshots and checks are in the temporary portfolio-seo-native-review directory.
