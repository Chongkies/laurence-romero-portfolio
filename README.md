# Portfolio site: Jose Laurence Romero

Plain HTML, CSS and JavaScript. No build step, no framework, free to host.

## Folder layout

```
index.html            Home with the "What are you hiring for?" picker
seo/index.html        SEO & Marketing page
developer/index.html  Software Developer page
multimedia/index.html Multimedia page (gallery + lightbox)
content.js            ALL your text, projects, links, images  <-- edit this
style.css             Colors and layout (variables at the top)
app.js                Renders the pages (you don't need to touch it)
images/               Put your own images here (create subfolders as you like)
docs/                 Put resume / case-study PDFs here
```

## Preview on your computer

Double-click `index.html`, or for the most accurate preview run `python -m http.server` in this folder and open http://localhost:8000.

## How to add things (all in content.js)

**A multimedia image:** copy the file into `images/multimedia/`, then add `{ src: "images/multimedia/poster-11.jpg", alt: "Poster for ..." }` to the matching group in `gallery`. Short alt text helps SEO and accessibility.

**A video:** upload it to YouTube (unlisted is fine), copy the ID after `v=` in the link, and add `{ title: "Promo video", type: "Short form", youtube: "THE_ID" }` to `videos`. The Video section appears automatically.

**A project screenshot or links:** in the project, set `image: "images/dev/credit-scoring.png"`, `github: "https://github.com/..."`, `demo: "https://..."`. Empty fields stay hidden.

**Resume or case-study PDF buttons:** put the PDF in `docs/` and set `resumes.seo = "docs/resume-seo.pdf"` (same for `dev`, `multimedia`) or `caseStudy.pdf`. Remember a resume PDF shows your phone number publicly.

**LinkedIn:** fill the empty `url` in `links`.

**A new project or job:** copy an existing block in `content.js`, paste it below, change the text.

**SEO indexing chart:** replace `images/seo/pages-indexed-chart.png` and update `roles.seo.caseStudy.figure` in `content.js`, including the image's pixel width and height.

## Put it online for free

**Option A: Cloudflare Pages (my pick).** Create a free Cloudflare account, go to Workers & Pages, create a Pages project with "Upload assets", choose a project name such as `laurenceromero`, and upload this whole folder. You get `laurenceromero.pages.dev`. Re-upload the folder after edits.

**Option B: GitHub Pages.** Create a repository named `chongkies.github.io` (your GitHub username + `.github.io`), upload these files with "Add file > Upload files", then Settings > Pages > deploy from the main branch. Your address is `chongkies.github.io`. Editing a file on GitHub updates the site within a minute or two.

## Adding your .com later

Buy the domain from a registrar (Cloudflare Registrar and Namecheap are common). In Cloudflare Pages or GitHub Pages open the custom-domain setting, add the domain, and follow the DNS instructions shown there. Nothing in the site's files needs to change. After that, update `<title>`/description tags if you want, and add a `sitemap.xml` and `robots.txt` that use the new domain.

## Before you publish

1. Gallery images currently load from your old Carrd site. If you delete that site, the images break, so move them into `images/` first.
2. The LGU Treasurer's Office project has no tech stack yet. Fill `stack` in content.js (or delete the line).
3. Add GitHub links, screenshots and videos when you have them (see "How to add things").

## Making changes later

This folder uses a local Git repository. Before an edit, run `git status`. Save a version with `git add .` followed by `git commit -m "Describe the change"`. View saved versions with `git log --oneline`. To discard unsaved edits to a file, use `git restore -- path/to/file` (this removes that file's uncommitted changes). To undo a saved commit while keeping history, use `git revert COMMIT_ID`. Git can recover only versions you have committed; no remote is configured automatically.

- Text, links, new projects, new images or videos: edit `content.js` yourself in VS Code, then upload the folder again (Cloudflare) or save the file on GitHub (GitHub Pages).
- New sections, a different layout, new pages or a redesign: ask Claude, Codex or any developer tool to edit the files in this folder. It is plain HTML, CSS and JavaScript, so any of them can work with it.
