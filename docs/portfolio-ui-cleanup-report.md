# Portfolio UI cleanup report

Completed locally on 6 November 2026 in the main GitHub project. No commit, push or publication.

## Files changed

- style.css: shared palette, typography, spacing, plain controls/lists, unboxed results, reviews and responsive layouts. Removed portfolio colors, decorative rules, numbering styles, animated title underlines and background drift. The intro block is unchanged.
- app.js: three plain portfolio rows with explicit View portfolio links; one hero sentence; three linked proof facts; booking rendering from SITE.results.bookings; plain skill/stack lists; no numbered section wrappers or eyebrows. Preserved existing timeline, gallery, preview, theme, reveal and count-up behavior.
- content.js: shared booking setting and TODO, requested role blurbs, shorter hero/biography/summaries and SEO explanations. Complete copy audit below. Project facts, stacks, gallery sources, reviews, contacts and empty testimonial arrays are unchanged.
- credit-scoring.css: sans-serif formulas, no panel borders, shared palette and small control radii.
- credit-scoring.js: moved the thesis type below the title and removed numeric prefixes from stage headings. The scoring details and formulas are unchanged.
- index.html: refreshed the static home fallback.
- seo/index.html: refreshed the static SEO fallback.
- developer/index.html: refreshed the static developer fallback.
- multimedia/index.html: refreshed the static multimedia fallback.
- about/index.html: refreshed the static personal-page fallback for the shared layout.
- developer/credit-scoring/index.html: refreshed the static thesis fallback.
- docs/portfolio-ui-cleanup-report.md: this report.

All six HTML head blocks remain byte-for-byte unchanged, including Open Graph tags, canonical URLs, theme initialization and early page cross-fade opt-in. sitemap.xml and robots.txt are unchanged. No image or PDF assets were changed. No runtime dependencies were added.

## Final colors

| Token | Light | Dark |
| --- | --- | --- |
| Paper | #ffffff | #0b0b0c |
| Ink | #0a0a0a | #f2f2f0 |
| Muted | #5c5c5c | #a1a1a6 |
| Accent | #1d4ed8 | #7aa2ff |
| Surface | #f5f5f3 | #131315 |
| Table line | #d6d6d6 | #38383a |

One blue accent is used site-wide. Controls use a 6px radius; ordinary text and small headings use zero tracking, with -0.01em limited to the large headline/figure styles. Inter remains the site font. The contact section uses ink and paper in reverse.

The fixed #17191a chart curtain only matches pixels in the existing Search Console screenshot during its reveal animation; it is not another UI palette. Original photo/logo/chart colors remain in image assets.

## Contrast

WCAG relative-luminance calculations, normal text threshold 4.5:1. Every checked combination passes AA.

| Text | Light/paper | Light/surface | Dark/paper | Dark/surface |
| --- | ---: | ---: | ---: | ---: |
| Body | 19.80:1 | 18.14:1 | 17.55:1 | 16.55:1 |
| Muted | 6.69:1 | 6.13:1 | 7.65:1 | 7.21:1 |
| Accent | 6.70:1 | 6.14:1 | 7.91:1 | 7.46:1 |

Contact text and primary-button text use the same opposing token pairs: contact 19.80:1 light and 17.55:1 dark; primary buttons 6.70:1 light and 7.91:1 dark.

## Checks

- Captured and reviewed 16 full-page screenshots: home, SEO, developer and multimedia, each at 1440px and 390px in light and dark modes. No layout overflow, broken images, console errors, oversized radii, gradients outside the preserved intro, italics, uppercase transforms, strong negative tracking or trailing periods in visible headings.
- Theme toggle passed on every page in the screenshot matrix. All six pages also passed at 390px in both themes with reduced motion; reveals remain visible and the intro does not run.
- Keyboard focus is a visible 2px solid outline.
- Timeline View/Hide, experience View more, LGU and pickleball preview dialogs, gallery filters, Show more, lightbox arrows and Escape passed.
- A browser-only booking override proved that home proof and SEO highlight both update from the same setting; the repository value was not changed.
- Inter loaded successfully. All six static fallbacks load without JavaScript and without numbering or overflow.
- Intro CSS, homeIntro() and portrait-slide implementation were compared with the original and remain unchanged. Final observed intro duration: 3002ms light, 3002ms dark. Skip, once per session, home-only and reduced-motion behavior passed. The original 1000ms + 1000ms + 1000ms phases remain.
- JS syntax checks passed for app.js, content.js, credit-scoring.js and scripts/update-metadata.cjs. git diff --check passed.
- Preserved metadata, sitemap, robots, Google review content, phone/email/social link settings, developer project data, original gallery entries and empty testimonial slots were checked against the baseline.

## Deliberate exceptions and limits

- The intro's original rounded Skip button, faint grid gradients/color-mix, SVG circles and timing are preserved because the explicit Do NOT change instruction takes priority over the general cleanup checklist.
- Screenshots and artwork retain their own text, colors and shapes; the UI cleanup does not alter their pixels. Device-preview hardware marks are not section dividers.
- Python is unavailable here and port 8000 was occupied. The checks used a temporary Node static server on 127.0.0.1:8001 instead. That server is stopped after each run.
- YouTube embeds were replaced only inside the test browser with local placeholders for consistent captures. Video playback itself was not validated; embed URLs and Watch on YouTube links are unchanged.
- Static fallback booking labels omit a numeric literal so the booking count has one source. With JavaScript, both locations display the shared setting. No other authored booking number remains in the site markup or renderer.
- Existing availability, location and contact details are consolidated near contact; repeated hero metadata, work-fact labels and category legends were removed.

## TODOs and missing information

- Shared bookings: update the value and reporting date range when client records change; confirm booking definition and exact dates. The supplied count remains unchanged.
- Semrush completion date.
- Exact Search Console performance date range (approximately 24 Sep–22 Oct 2026).
- Date of the latest indexing reading.
- Existing LGU TODO: written permission to describe the project and code ownership confirmation.
- Existing LGU TODO: measured pilot results when available; use fake data in future screenshots.
- Existing match-recorder TODO: final app name, repository, demo and screenshots.

No new facts, results, dates of project activity or client claims were invented. Where the same SEO number appears in a required chart and a headline stat, it is the same evidence; repeated prose was removed.

## Complete copy changes

The following is the complete audit of shortened, rewritten or removed content fields. Unchanged Google reviews, project copy and experience bullets are not rewritten.

### availability

**Before**

Available any time (Philippine time, UTC+8). Looking for flexible-schedule remote work: I can work at my own pace or fit around an office schedule.

**After**

Available any time for flexible remote work from Hilongos, Leyte, Philippines (UTC+8), at my own pace or around an office schedule.

### hero.lead

**Before**

Computer Engineer who gets businesses found on Google, builds web applications, and creates visuals that look good and work well.

**After**

I help small businesses get found on Google, build practical web applications, and create graphics, videos and photos.

### hero.whoIHelp

**Before**

I help small businesses get found on Google, run smoother with simple web tools, and look good online.

**After**

Removed: combined with the hero sentence

### bio[0]

**Before**

I'm a Computer Engineering graduate from the University of San Carlos, based in Hilongos, Leyte. My work sits in three areas: search engine optimization, full-stack web development, and multimedia (graphic design, video editing and photography).

**After**

I'm a Computer Engineering graduate from the University of San Carlos, based in Hilongos, Leyte. I work in SEO, full-stack web development and multimedia.

### bio[1]

**Before**

It started with designing posters and editing videos for local events, and grew into client work for small businesses. I'm self-taught in design, formally trained in engineering, and I like projects where those skills meet.

**After**

Designing posters and editing videos for local events grew into work for small businesses. I'm self-taught in design and formally trained in engineering.

### personalAbout.nav

**Before**

About Me

**After**

About me

### personalAbout.title

**Before**

Outside Work

**After**

Outside work

### roles.seo.headline

**Before**

Technical SEO, content strategy and plain-English reporting.

**After**

Technical SEO, content strategy and clear reporting

### roles.dev.headline

**Before**

Full-stack web applications built around real business requirements.

**After**

Web applications for real business workflows

### roles.multimedia.headline

**Before**

Design with a purpose. Edit with impact.

**After**

Graphic design, video and photography

### roles.seo.summary

**Before**

Computer Engineering graduate with hands-on SEO experience across keyword strategy, on-page optimization and technical fixes, plus the web development background to diagnose and implement changes myself.

**After**

I plan keywords, improve on-page content and fix technical SEO issues, with the web development background to implement changes myself.

### roles.dev.summary

**Before**

Computer Engineering graduate building full-stack web applications across frontend, backend, databases and APIs. I turn business workflows into software, work with modern frameworks and development tools, and validate features through automated tests and user acceptance testing. I use AI coding assistants under my direction, reviewing their output and testing each phase hands-on.

**After**

Computer Engineering graduate building interfaces, back ends, databases and APIs around business workflows. I test with users and automated checks, and direct AI coding assistants while reviewing and testing their output.

### roles.multimedia.summary

**Before**

Self-taught designer and editor. What started as a hobby, designing posters and editing videos for local events, turned into client work for small businesses like bike shops, pet stores and local events. I focus on making things look good and work well.

**After**

Self-taught designer and editor creating work for bike shops, pet stores and local events, from early hobby projects to client commissions.

### roles.seo.blurb

**Before**

Technical SEO, content strategy and reporting. A client website recorded 11 bookings during the first month; their traffic sources are not yet confirmed.

**After**

Technical SEO, content strategy and clear reporting for small businesses. I fix search issues, improve content and track what changes.

### roles.dev.blurb

**Before**

Full-stack web apps with React, Laravel and Firebase, including a credit scoring platform built for a rural bank.

**After**

Full-stack web developer building practical systems: a credit scoring platform tested with a bank, a data-entry system for a local government treasurer's office, and a player-rating platform for pickleball. I plan with the people who will use it, build the interface and the back end, test it with real users, and improve it from their feedback.

### roles.multimedia.blurb

**Before**

Graphic design, video editing and photography: posters, logos, thumbnails, social content and more.

**After**

I design posters, logos, social media graphics and YouTube thumbnails, edit videos, and take photos, mostly for small businesses, local events and community groups. Clean work that matches your brand and is ready for print or social media.

### roles.seo.caseStudy.title

**Before**

Case study: new UK B2B site, from invisible to ranking

**After**

Case study: Prolink Property Support

### roles.seo.caseStudy.brief

**Before**

Prolink Property Support, a newly launched UK service business, needed to appear on Google for property-management support searches. I worked part-time on setup, technical SEO, on-page SEO, content review and reporting.

**After**

A newly launched UK service business needed to appear in property-management support searches. I worked part-time on setup, technical SEO, on-page content and reporting.

### roles.seo.caseStudy.weeklyNote

**Before**

Times the site appeared in Google results each week. The last bar is only 3 days of data. Source: Google Search Console.

**After**

Weekly appearances in Google results. The final bar covers 3 days. Source: Google Search Console.

### roles.seo.caseStudy.figures[0].explanation

**Before**

In this period the site appeared in Google results about 2,130 times. Impressions were close to zero in late September and clearly higher through October. The 17 clicks are an early result; visibility is growing faster than traffic.

The average position is 28.5 and the click rate is 0.8%. My next step is to improve titles, content and internal links for pages sitting just off page 1, so they can move up and earn more clicks.

**After**

Impressions were near zero in late September and rose through October. Visibility is growing faster than traffic.

Next I will improve titles, content and internal links on pages just off page 1. I track clicks, impressions, CTR and position monthly in Search Console.

### roles.seo.caseStudy.figures[0].takeaways

**Before**

Visibility is growing before traffic does, which is normal for a new site.

I report the real numbers, including the weak ones, so you know where the work is.

I track clicks, impressions, CTR and position every month in Search Console.

**After**

Removed repeated text; its facts remain in the nearby statistics, explanation or evidence.

### roles.seo.caseStudy.figures[1].stats

**Before**

{"label":"Pages on Google","value":"10 → 68"}

{"label":"Still not indexed","value":"18"}

**After**

{"label":"Still not indexed","value":"18"}

### roles.seo.caseStudy.figures[1].explanation

**Before**

At the start only 10 pages were on Google and 34 were not indexed. A site-wide noindex setting was telling Google to skip pages and blog posts. After I fixed it and re-submitted the pages, indexed pages grew in steps to 68. The chart does not establish when the fix happened or that it caused any specific jump.

18 pages are still not indexed. Google decides when to add each page, so I keep checking them and fixing any page that has a real problem.

**After**

At the baseline, 34 pages were not indexed. A site-wide noindex setting blocked 29+ pages and posts. I removed it and re-submitted the pages; the chart shows indexing growing in steps but does not establish when the fix happened or that it caused a specific jump.

Google decides when to index each page. I continue checking the remaining pages and fixing problems.

### roles.seo.caseStudy.figures[1].takeaways

**Before**

More pages on Google means more chances to appear in search.

Checking indexing is the first step in every audit I do.

**After**

Removed repeated text; its facts remain in the nearby statistics, explanation or evidence.

### roles.seo.caseStudy.beforeAfter

**Before**

["Indexing","10 pages on Google; 29+ pages and posts blocked by a noindex setting","68 pages on Google; 18 still not indexed (latest Search Console screenshot)"]

["Visibility","8 impressions in the first week","692 in the week of 6 Oct 2026; 2.13K impressions in late Sep–late Oct 2026 (daily report)"]

["Measurement","No search or analytics tracking","Search Console, GA4 and Bing Webmaster Tools live; monthly client reporting"]

["On-page SEO","Missing and duplicate titles and descriptions; stray code visible on pages","Titles and descriptions written for key pages; stray code removed"]

["Technical","Duplicate posts, broken links, redirect gaps, no business schema","301 redirects, broken links fixed, LocalBusiness-type schema added"]

["Authority","Brand-new domain","9 referring domains; first links and citations in progress"]

**After**

["Measurement","No search or analytics tracking","Search Console, GA4 and Bing Webmaster Tools live; monthly client reporting"]

["On-page SEO","Missing and duplicate titles and descriptions; stray code visible on pages","Titles and descriptions written for key pages; stray code removed"]

["Technical","Duplicate posts, broken links, redirect gaps, no business schema","301 redirects, broken links fixed, LocalBusiness-type schema added"]

["Authority","Brand-new domain","9 referring domains; first links and citations in progress"]

### roles.seo.caseStudy.rankingsNote

**Before**

Earlier snapshot: Google Search Console, 8 Sep – 15 Oct 2026. These page/query figures use a different date range from the daily performance report above. 287 different queries brought the site into Google results and 37 non-brand queries reached the top 10. Many of the strongest rankings are long-tail searches with modest volume, which is typical in the first weeks.

**After**

Earlier snapshot: Google Search Console, 8 Sep–15 Oct 2026; a different range from the daily report. The site appeared for 287 queries; 37 non-brand queries reached the top 10. The strongest rankings are mostly low-volume, long-tail searches.

### roles.seo.caseStudy.did

**Before**

["Setup and tracking","Verified the site in Google Search Console and Bing, connected GA4 through Wix."]

["Technical SEO","Diagnosed and fixed the site-wide noindex, removed stray code, added 301 redirects for duplicate posts, fixed broken links, added structured data."]

["On-page SEO","Wrote titles, meta descriptions and alt text; set up blog categories and internal links; cleaned navigation and removed duplicate menu items."]

["Content quality","Audited AI-written blog posts and flagged leaked drafting notes, repeated text and off-topic content for editing."]

["Opportunity analysis","Used query and page data to find pages stuck on page 2 and rewrote titles to lift click-through."]

["Reporting","Plain-English monthly reports for a non-technical client."]

**After**

["Setup and tracking","Verified Search Console and Bing; connected GA4 through Wix."]

["Technical SEO","Diagnosed crawl issues and implemented the fixes shown in the comparison above."]

["On-page SEO","Wrote alt text, set blog categories and internal links, and removed duplicate navigation items."]

["Content quality","Audited AI-written posts for leaked drafting notes, repetition and off-topic content."]

["Opportunity analysis","Used query and page data to find page-2 opportunities and rewrote titles to improve click-through."]

["Reporting","Sent monthly reports in plain English to a non-technical client."]

### roles.seo.caseStudy.honest

**Before**

The client's website has recorded 11 bookings during the first month of the campaign, counted from the client's booking records. I cannot attribute all 11 to Google search. Search clicks are still small: the late Sep–late Oct 2026 daily report shows 17 clicks and an average position of 28.5. I am working to connect bookings to their source in GA4. Next steps: move page-2 posts onto page 1, rebuild the city page, and grow local citations and reviews.

**After**

Bookings were recorded during the first month of the campaign; their traffic sources are not confirmed. Search traffic is still small. I am connecting booking sources in GA4, improving page-2 posts, rebuilding the city page, and growing local citations and reviews.

### Other labels and repeated UI text

- "Honest note." → "Honest note".
- "1. Initial screening" → "Initial screening"; "2. Credit risk rating" → "Credit risk rating"; "3. Dynamic predictive analysis" → "Dynamic predictive analysis". Source project data remains intact; the renderer removes the display prefixes.
- Removed SEO eyebrow "SEO Specialist", developer eyebrow "Software Developer", multimedia eyebrow "Graphic Design · Video Editing · Photography", and the home availability/location eyebrow. Their role/context facts remain in headings, body copy or contact.
- Removed the home-card tag lists: SEO [Technical SEO, Keyword strategy, Reporting]; Developer [React, Laravel, Firebase]; Multimedia [Graphic design, Video editing, Photography]. Developer project stacks and all skills remain.
- Removed repeated work-fact display labels Time zone / Availability / Work style; their values are consolidated in the contact availability sentence.
- Removed the home hero metadata strip and category legend; phone/email links remain prominent in contact, and location remains in biography, contact and footer.
- Removed numbered section labels, role index numbers, action-card numbers and work-step numbers. Existing visible headings remain.
- Removed empty "What this means" headings with their duplicated takeaway lists, now combined into the concise figure explanations.
- Booking highlight "11 bookings made through the website so far" and its repeated source note → the shared numeric value plus "bookings made through the client's website" and "Counted from the client's booking records." The count is authored only in content.js.
