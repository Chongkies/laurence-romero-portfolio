# Jose Laurence Romero | Portfolio

Computer Engineering graduate from the Philippines working in **SEO**, **full-stack web development** and **multimedia** (graphic design, video editing, photography). Open for remote work.

**Live site:** https://chongkies.github.io/laurence-romero-portfolio
**LinkedIn:** https://www.linkedin.com/in/jose-laurence-romero-a665912b1

## What's on the site

The home page asks "What are you hiring for?" and opens a portfolio matched to the answer.

| Path | What you'll find |
| --- | --- |
| **SEO & Marketing** | A case study on a new UK B2B site (Prolink Property Support): weekly Google impressions grew from 8 to 692 and indexed pages from 10 to 51 after fixing a site-wide noindex block. Includes before/after tables, rankings, tools and honest limits. |
| **Software Developer** | Credit Scoring Platform (thesis project with predictive analysis, built with React, Laravel and MySQL, tested at a bank and production-ready), an internal encoding system for an LGU treasurer's office, and a pickleball player platform. |
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
seo/                  SEO & Marketing page
developer/            Software Developer page
multimedia/           Multimedia page
content.js            All text, projects, links and images
app.js                Renders the pages
style.css             Design and layout
images/  docs/        Media and downloadable files
```

## Run it locally

```bash
git clone https://github.com/Chongkies/chongkies.github.io.git
cd chongkies.github.io
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Contact

Use the contact section on the live site, or message me on LinkedIn.

## Copyright

The code structure is free to learn from. The text, case study, photos and designs are my own work, so please don't reuse them without permission.
