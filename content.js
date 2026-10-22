/* =====================================================================
   ALL SITE CONTENT LIVES HERE. Edit text, add projects, add images.
   You normally never need to touch app.js or style.css.
   Local image paths are relative to the site root, e.g. "images/multimedia/poster-01.jpg"
   ===================================================================== */

// Helper for the Carrd-hosted images used in this first draft.
// Later: download your originals, put them in /images/multimedia/ and
// replace these entries with local paths like "images/multimedia/poster-01.jpg".
const carrd = (n, items) =>
  items.map((it) => {
    const [id, ext = "jpg"] = it.split("."); // "abc123" or "abc123.png"
    return { src: `https://laurenceromero.carrd.co/assets/images/gallery0${n}/${id}_original.${ext}?v=a5aeaca9`, alt: "" };
  });

window.SITE = {
  name: "Jose Laurence Romero",
  initials: "LR",

  // Logos shown beside organization names in education and experience.
  organizationLogos: {
    "University of San Carlos": "images/school_logo.png",
    "Concentrix": "images/organizations/concentrix.png",
    "Remotasks": "images/organizations/remotasks.png",
    "Semrush Academy": "images/tools/semrush.svg",
  },

  // Local logos for named software in skills, tools and project stacks.
  softwareLogos: {
    "PHP": "images/tools/php.svg",
    "Codex": "images/tools/chatgpt.svg",
    "React Native": "images/tools/react.svg",
    "Expo": "images/tools/expo.svg",
    "FFmpeg": "images/tools/ffmpeg.svg",
    "Loom": "images/tools/loom.svg",
    "Notion": "images/tools/notion.svg",
    "Discord": "images/tools/discord.svg",
    "Microsoft Office": "images/tools/microsoft-office.png",
    "Google Workspace": "images/tools/google-workspace.png",
    "Google Search Console": "images/tools/googlesearchconsole.svg",
    "Google Analytics 4": "images/tools/googleanalytics.svg",
    "Bing Webmaster Tools": "images/tools/bing.svg",
    "Semrush (free)": "images/tools/semrush.svg",
    "Wix SEO tools": "images/tools/wix.svg",
    "Rich Results Test": "images/tools/google.svg",
    "Meta Business Suite": "images/tools/meta.svg",
    "ChatGPT": "images/tools/chatgpt.svg",
    "Google Gemini": "images/tools/googlegemini.svg",
    "Claude": "images/tools/claude.svg",
    "GitHub Copilot": "images/tools/githubcopilot.svg",
    "Microsoft Copilot": "images/tools/microsoftcopilot.svg",
    "Cursor": "images/tools/cursor.svg",
    "JavaScript": "images/tools/javascript.svg",
    "Python": "images/tools/python.svg",
    "C": "images/tools/c.svg",
    "C++": "images/tools/cplusplus.svg",
    "React.js": "images/tools/react.svg",
    "React": "images/tools/react.svg",
    "TypeScript": "images/tools/typescript.svg",
    "Inertia.js": "images/tools/inertia.svg",
    "shadcn/ui": "images/tools/shadcnui.svg",
    "HTML5": "images/tools/html5.svg",
    "CSS3": "images/tools/css.svg",
    "Tailwind CSS": "images/tools/tailwindcss.svg",
    "Vite": "images/tools/vite.svg",
    "Laravel": "images/tools/laravel.svg",
    "MySQL": "images/tools/mysql.svg",
    "Firebase": "images/tools/firebase.svg",
    "Git": "images/tools/git.svg",
    "GitHub": "images/tools/github.svg",
    "VS Code": "images/tools/visualstudiocode.svg",
    "Claude Code": "images/tools/claude.svg",
    "Windsurf": "images/tools/windsurf.svg",
    "Figma": "images/tools/figma.svg",
    "Filmora": "images/tools/wondersharefilmora.svg",
    "DaVinci Resolve": "images/tools/davinciresolve.svg",
    "Ahrefs Webmaster Tools": "images/tools/ahrefs-webmaster-tools.png",
    "Screaming Frog": "images/tools/screaming-frog.png",
    "GrandRanker": "images/tools/grandranker.webp",
    "Canva": "images/tools/canva.svg",
    "Adobe Photoshop": "images/tools/adobephotoshop.svg",
    "Adobe Lightroom": "images/tools/adobelightroom.svg",
    "CapCut": "images/tools/capcut.svg",
    "Adobe After Effects": "images/tools/aftereffects.svg",
    "Adobe Illustrator": "images/tools/adobe-illustrator.svg",
    "Adobe Premiere Pro": "images/tools/adobe-premiere-pro.svg"
  },

  location: "Hilongos, Leyte, Philippines",
  availability: "Open for remote work",

  // Email is assembled in the browser so basic scrapers can't read it from the HTML.
  email: { user: "laurence.romero64", domain: "gmail.com" },

  // Put resume PDFs in /docs/ and fill the paths to show "Download resume" buttons.
  // (Resume PDFs include your phone number, so they will be public once uploaded.)
  resumes: { seo: "", dev: "", multimedia: "" },

  // Links shown per page. Empty url = hidden. "roles" says where each link appears.
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jose-laurence-romero-a665912b1", roles: ["home", "seo", "dev", "multimedia"] },
    { label: "GitHub", url: "https://github.com/Chongkies", roles: ["home", "dev"] },
    { label: "Upwork", url: "https://www.upwork.com/freelancers/joselaurencer", roles: ["home", "seo", "multimedia"] },
    { label: "OnlineJobs.ph", url: "https://www.onlinejobs.ph/jobseekers/info/1520167", roles: ["home", "seo", "multimedia"] },
  ],

  hero: {
    image: { src: "images/me/web/laurence-portrait.jpg", alt: "Jose Laurence Romero smiling in front of a station building and city skyline" },
    lead: "Computer Engineer who gets businesses found on Google, builds web applications, and creates visuals that look good and work well.",
  },

  bio: [
    "I'm a Computer Engineering graduate from the University of San Carlos, based in Hilongos, Leyte. My work sits in three areas: search engine optimization, full-stack web development, and multimedia (graphic design, video editing and photography).",
    "It started with designing posters and editing videos for local events, and grew into client work for small businesses. I'm self-taught in design, formally trained in engineering, and I like projects where those skills meet.",
  ],

  personalAbout: {
    nav: "About Me",
    hint: "Want to know me more? Click me!",
    title: "Outside Work",
    intro: "I enjoy running, mountain biking, hiking, photography and pickleball. Here are a few personal photos from the court, the trails and time outdoors.",
    hobbies: ["Running", "Mountain biking", "Hiking", "Photography", "Pickleball"],
    photos: [
      { src: "images/me/web/pickleball-court.jpg", alt: "Laurence holding a paddle on an indoor pickleball court" },
      { src: "images/me/web/scooter-ride.jpg", alt: "Laurence seated on a scooter beside a road through rock cliffs" },
      { src: "images/me/web/forest-walk.jpg", alt: "Laurence standing among moss-covered trees and ferns in a forest" },
      { src: "images/me/web/seaside.jpg", alt: "Laurence standing in clear shallow seawater" },
      { src: "images/me/web/running-finish.jpg", alt: "Laurence wearing a finisher medal at a running event" },
      { src: "images/me/web/mountain-biking.jpg", alt: "Laurence riding a mountain bike down a rocky trail" },
    ],
  },

  facts: [
    { k: "Education", v: "B.S. Computer Engineering, University of San Carlos (July 2026)" },
    { k: "Languages", v: "English, Filipino, Cebuano, Japanese (a little)" },
  ],

  // One master timeline: every job appears once, tagged by area. Newest first.
  timeline: [
    { title: "SEO Specialist", org: "Prolink Property Support (part-time)", dates: "Sept 2026 – Present", tag: "seo" },
    { title: "IT Operations Intern", org: "Concentrix", dates: "Mar 2023 – Jun 2023", tag: "dev" },
    { title: "Freelance Graphic Designer", org: "Small businesses and local events", dates: "Freelance", tag: "multimedia" },
    { title: "Freelance Video Editor", org: "Freelance", dates: "", tag: "multimedia" },
    { title: "Data Annotation Associate", org: "Remotasks", dates: "2019 – 2020", tag: "dev" },
  ],

  roles: {
    /* ------------------------------------------------------------ SEO */
    seo: {
      nav: "SEO & Marketing",
      title: "SEO & Marketing",
      kicker: "SEO Specialist",
      headline: "Technical SEO, content strategy and plain-English reporting.",
      summary:
        "Computer Engineering graduate with hands-on SEO experience across keyword strategy, on-page optimization and technical fixes, plus the web development background to diagnose and implement changes myself.",
      blurb: "Technical SEO, content strategy and reporting. See how a new site grew from 8 to 692 weekly Google impressions in five weeks.",
      tags: ["Technical SEO", "Keyword strategy", "Reporting"],
      ctaSubject: "SEO / marketing work",

      certificates: [
        {
          title: "Semrush SEO Crash Course with Brian Dean",
          org: "Semrush Academy",
          pdf: "docs/semrush-certificate.pdf",
          source: "https://static.semrush.com/academy/certificates/bc902fe71f/jose-laurence-romero_2.pdf",
        },
      ],

      caseStudy: {
        title: "Case study: new UK B2B site, from invisible to ranking",
        meta: "Prolink Property Support · UK B2B · Wix website · Sept – Oct 2026",
        brief:
          "Prolink Property Support, a newly launched UK service business, needed to appear on Google for property-management support searches. I worked part-time (about an hour a day) on setup, technical SEO, on-page SEO, content review and reporting.",
        pdf: "", // e.g. "docs/seo-case-study.pdf" to show a download button
        stats: [
          { value: "8 → 692", label: "weekly Google impressions", note: "w/c 8 Sep to w/c 6 Oct" },
          { value: "10 → 51", label: "pages indexed by Google", note: "21 Sep to 10 Oct" },
          { value: "12", label: "non-brand queries ranking in positions 1–3", note: "Google Search Console" },
          { value: "100/100", label: "technical health score, 0 errors", note: "Ahrefs, 7 Oct" },
        ],
        weeklyTitle: "Weekly impressions",
        weeklyNote: "Times the site appeared in Google results each week. The last bar is only 3 days of data. Source: Google Search Console.",
        weekly: [
          { label: "8 Sep", v: 8 },
          { label: "15 Sep", v: 21 },
          { label: "22 Sep", v: 52 },
          { label: "29 Sep", v: 130 },
          { label: "6 Oct", v: 692 },
          { label: "13 Oct", v: 337, partial: true },
        ],
        // TODO: re-export the chart without "anonymised" in its subtitle to match the named Prolink Property Support case study.
        figure: {
          src: "images/seo/pages-indexed-chart.png",
          alt: "Pages on Google rose from 10 to 51 between 21 September and 12 October 2026, with plateaus near 28 and 43. Pages not yet indexed fell from 34 to 8 over the same period.",
          width: 2000,
          height: 1150,
          chart: {
            note: "Approximate checkpoints from Google Search Console, 21 Sep – 12 Oct 2026. Intermediate values are rounded; this is not a daily export.",
            series: [
              { label: "Pages on Google", values: [10, 28, 43, 51, 51] },
              { label: "Pages not yet on Google", values: [34, 31, 12, 8, 8] },
            ],
            checkpoints: [
              { label: "21 Sep", day: 0 },
              { label: "About 22 Sep", day: 1 },
              { label: "About 5 Oct", day: 14 },
              { label: "About 10 Oct", day: 19 },
              { label: "12 Oct", day: 21 },
            ],
          },
          title: "Getting blocked pages onto Google",
          caption: "Source: Google Search Console (Pages / Indexing report), 21 Sep – 12 Oct 2026.",
          explanation: [
            "When I started, only 10 pages were on Google and 34 were not indexed. A site-wide noindex setting was telling Google to skip 29+ pages and blog posts on the site.",
            "After I fixed the setting and re-submitted the pages, the report showed indexed pages rising to about 28, staying level for about two weeks, then climbing to 43 and finally 51 by 10 Oct. The chart does not establish the exact date of the fix or show that it alone caused each jump.",
            "8 pages were still waiting at the last check. Indexing is not instant: Google decides when to crawl and whether to include each page, so the totals may change as it processes the remaining pages.",
          ],
          takeaways: [
            "More indexed pages means more chances to appear in search results, supporting the growth in impressions shown above.",
            "A single hidden setting was blocking much of the site, so checking indexing is the first step in any SEO audit I do.",
            "I track this in Google Search Console's Pages report and re-check it after every fix.",
          ],
        },
        beforeAfter: [
          ["Indexing", "10 pages on Google; 29+ pages and posts blocked by a noindex setting", "51 pages on Google; 8 still waiting"],
          ["Visibility", "8 impressions in the first week", "692 in the week of 6 Oct; 1,240 over the period"],
          ["Measurement", "No search or analytics tracking", "Search Console, GA4 and Bing Webmaster Tools live; monthly client reporting"],
          ["On-page SEO", "Missing and duplicate titles and descriptions; stray code visible on pages", "Titles and descriptions written for key pages; stray code removed"],
          ["Technical", "Duplicate posts, broken links, redirect gaps, no business schema", "301 redirects, broken links fixed, LocalBusiness-type schema added"],
          ["Authority", "Brand-new domain", "9 referring domains; first links and citations in progress"],
        ],
        rankingsTitle: "Rankings snapshot",
        rankingsNote:
          "Google Search Console, 8 Sep – 15 Oct. 287 different queries brought the site into Google results and 37 non-brand queries reached the top 10. Many of the strongest rankings are long-tail searches with modest volume, which is typical in the first weeks.",
        rankings: [
          ["Homepage", "108", "5.8 (page 1); 15 clicks"],
          ["Guide: reducing property management admin", "85", "10.5; queries like “reduce property admin workload” rank 1–2"],
          ["Guide: managing outsourced contractors", "67", "13.6"],
          ["Guide: virtual property management assistants", "90", "18.3"],
          ["Local service page (city-targeted)", "194", "83.5; being rebuilt next"],
        ],
        did: [
          ["Setup and tracking", "Verified the site in Google Search Console and Bing, connected GA4 through Wix."],
          ["Technical SEO", "Diagnosed and fixed the site-wide noindex, removed stray code, added 301 redirects for duplicate posts, fixed broken links, added structured data."],
          ["On-page SEO", "Wrote titles, meta descriptions and alt text; set up blog categories and internal links; cleaned navigation and removed duplicate menu items."],
          ["Content quality", "Audited AI-written blog posts and flagged leaked drafting notes, repeated text and off-topic content for editing."],
          ["Opportunity analysis", "Used query and page data to find pages stuck on page 2 and rewrote titles to lift click-through."],
          ["Reporting", "Plain-English monthly reports for a non-technical client."],
        ],
        honest:
          "These are early-stage results from about six weeks of work. Visibility has grown faster than clicks (22 clicks in the period, 10 from the UK). Next steps: move page-2 posts onto page 1, rebuild the city page, set up lead tracking in GA4, and grow local citations and reviews.",
      },

      skills: [
        { group: "SEO skills", items: ["Keyword research & strategy", "On-page SEO", "Technical SEO", "Content audits", "Internal linking & site structure", "Structured data (JSON-LD)", "Analytics & reporting"] },
        { group: "Tools", items: ["Google Search Console", "Google Analytics 4", "Bing Webmaster Tools", "Ahrefs Webmaster Tools", "Screaming Frog", "Semrush (free)", "GrandRanker", "Wix SEO tools", "Rich Results Test"] },
        { group: "Marketing & social", items: ["Social media management", "Meta Business Suite", "Canva"] },
        { group: "AI-assisted workflow", items: ["ChatGPT", "Google Gemini", "Claude", "GitHub Copilot", "Microsoft Copilot", "Cursor"] },
        { group: "Communication & documentation", items: ["Loom", "Notion", "Discord", "Microsoft Office", "Google Workspace"] },
      ],

      experience: [
        {
          title: "SEO Specialist",
          org: "Prolink Property Support",
          dates: "Sept 2026 – Present · Part-time",
          bullets: [
            "Lead AI-assisted keyword and content strategy with GrandRanker, managing a 450+ keyword library.",
            "Run on-page SEO audits covering meta tags, internal linking and content structure, and improve navigation and UX to strengthen conversion paths.",
            "Set up Google Search Console, GA4 and Bing Webmaster Tools to track search visibility and site activity.",
            "Resolved indexing blocks, duplicate-post redirects and broken links, and added structured data.",
            "Reviewed AI-written posts for repeated text, drafting notes and off-topic content.",
            "Prepared plain-English monthly reports and used query and page data to identify content opportunities.",
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ DEV */
    dev: {
      nav: "Developer",
      title: "Software Developer",
      kicker: "Software Developer",
      headline: "Full-stack web applications built around real business requirements.",
      summary:
        "Computer Engineering graduate building full-stack web applications across frontend, backend, databases and APIs. I turn business workflows into software, work with modern frameworks and development tools, and validate features through automated tests and user acceptance testing. I use AI coding assistants under my direction, reviewing their output and testing each phase hands-on.",
      blurb: "Full-stack web apps with React, Laravel and Firebase, including a credit scoring platform built for a rural bank.",
      tags: ["React", "Laravel", "Firebase"],
      ctaSubject: "Software development work",

      projects: [
        {
          title: "Credit Scoring Platform",
          subtitle: "Thesis project with predictive analysis",
          stack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
          bullets: [
            "Full-stack credit scoring platform for a rural bank with role-based authentication, automated credit evaluation, predictive analysis, dashboards and PDF report generation.",
            "Began as my Computer Engineering thesis, then was tested extensively with the bank and brought to a production-ready state.",
            "Refined features with stakeholder feedback during user acceptance testing (UAT).",
          ],
          github: "", // e.g. "https://github.com/Chongkies/credit-scoring"
          demo: "",
          image: "", // e.g. "images/dev/credit-scoring.png"
        },
        {
          title: "LGU Treasury Collections System",
          previewLabel: "View desktop UI",
          previews: [
            { src: "images/dev/lgu-dashboard.jpg", alt: "Sample treasurer office encoder dashboard with receipt-entry forms, drafts, receipt search and account management", device: "laptop", label: "Windows laptop — encoder dashboard", browser: { tab: "Treasury Collections", address: "Local network preview" } },
          ],
          subtitle: "Full-stack app for a municipal Treasurer's Office in the Philippines; in development ahead of a pilot",
          stack: ["Laravel", "React", "TypeScript", "Inertia.js", "Tailwind CSS", "shadcn/ui", "MySQL"],
          bullets: [
            "Translated paper receipts, monthly reports and office business rules into a local-network app for encoding, fund sharing and supervisor review.",
            "Built keyboard-first entry with account lookup, live total checks and duplicate-serial detection, plus configurable fund splits rounded to the centavo.",
            "Added role-based verification, audit logs and encrypted personal names; encoders cannot approve their own entries.",
            "Tested with 50,000 simulated receipts and 25 simulated users, including concurrent duplicate serials and edits. Pilot results are not yet available.",
            "Led discovery, requirements, data modeling and security decisions, and validated each phase against office documents with staff. Claude and Codex generated much of the implementation under my direction.",
          ],
          // TODO before publishing: obtain written office permission to describe the project and confirm code ownership.
          // TODO after the pilot: add measured results if available. Use fake data in any future screenshots.
          github: "",
          demo: "",
          image: "",
        },
        {
          title: "Pickleball Player Platform",
          previewLabel: "View mobile & laptop UI",
          previews: [
            { src: "images/dev/pickleball-laptop.jpg", alt: "Leyte Pickleball Player Directory desktop layout with location filters, rating summary and player cards", device: "laptop", label: "Windows laptop viewport" },
            { src: "images/dev/pickleball-iphone.jpg", alt: "Leyte Pickleball Player Directory mobile layout with navigation and search filters", device: "iphone", label: "iPhone viewport" },
            { src: "images/dev/pickleball-iphone-players.jpg", alt: "Mobile directory summary with player counts, average rating and player cards below", device: "iphone", label: "iPhone — directory & players" },
          ],
          subtitle: "Player profiles, skill ratings and matchmaking",
          stack: ["React.js", "Firebase", "Tailwind CSS"],
          bullets: [
            "Web platform with player profiles, skill ratings and matchmaking inspired by DUPR.",
            "Responsive interfaces built from reusable React components.",
            "Designed to improve player discovery and community engagement.",
          ],
          github: "",
          demo: "",
          image: "",
        },
        {
          // TODO: choose the app's final name; add repository, demo and screenshots when available.
          title: "Pickleball Match Recorder & Auto-Editor",
          subtitle: "Planned iOS and Android app — development not started; stack listed below is proposed",
          stack: ["React Native", "Expo", "Python", "FFmpeg", "Audio signal processing"],
          bullets: [
            "Planned mobile app to record pickleball matches, remove downtime between points and turn long rallies into shareable highlights.",
            "Proposed approach: detect paddle hits from audio and group them into rallies, aiming to support different camera angles without relying on players being visible.",
            "First planned step: validate a Python audio-processing prototype against real match footage before building the mobile app.",
            "Planned on-device processing would keep footage on the phone. Later ideas include line-call assistance for 60 fps cameras, stats and a free tier with subscriptions; feasibility is not yet validated.",
          ],
          github: "",
          demo: "",
          image: "",
        },
      ],

      skills: [
        { group: "Languages", items: ["JavaScript", "TypeScript", "PHP", "Python", "C", "C++"] },
        { group: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui", "Inertia.js", "Vite"] },
        { group: "Backend & APIs", items: ["Laravel", "REST APIs"] },
        { group: "Databases", items: ["MySQL", "Firebase"] },
        { group: "Tools", items: ["Git", "GitHub", "VS Code"] },
        { group: "AI-assisted development", items: ["GitHub Copilot", "Microsoft Copilot", "Claude Code", "Codex", "Cursor", "Windsurf", "ChatGPT", "Google Gemini"] },
        { group: "Technical operations", items: ["IT troubleshooting", "System documentation", "Data quality / validation", "User acceptance testing", "Technical support"] },
        { group: "Planned project technologies (not yet used)", items: ["React Native", "Expo", "FFmpeg", "Audio signal processing"] },
        { group: "Communication & documentation", items: ["Loom", "Notion", "Discord", "Microsoft Office", "Google Workspace"] },
      ],

      experience: [
        {
          title: "IT Operations Intern",
          org: "Concentrix",
          dates: "Mar 2023 – Jun 2023",
          bullets: [
            "Troubleshot hardware and software issues to support daily IT operations.",
            "Investigated network issues as part of the office's IT support work.",
            "Configured workstations for daily use.",
            "Documented IT processes and worked with enterprise IT teams on operational support.",
          ],
        },
        {
          title: "Data Annotation Associate",
          org: "Remotasks",
          dates: "2019 – 2020",
          bullets: [
            "Annotated image datasets for machine learning applications.",
            "Worked with LiDAR datasets as part of data annotation assignments.",
            "Kept accuracy high while meeting productivity and quality targets, working independently and fully remote.",
          ],
        },
      ],

      education: [
        { title: "B.S. Computer Engineering", org: "University of San Carlos", dates: "July 2026" },
        { title: "CCNAv7: Introduction to Networks", org: "Cisco Networking Academy · completed coursework", dates: "" },
        { title: "CCNAv7: Switching, Routing, and Wireless Essentials", org: "Cisco Networking Academy · completed coursework", dates: "" },
      ],
    },

    /* ----------------------------------------------------- MULTIMEDIA */
    multimedia: {
      nav: "Multimedia",
      title: "Multimedia",
      kicker: "Graphic Design · Video Editing · Photography",
      headline: "Design with a purpose. Edit with impact.",
      summary:
        "Self-taught designer and editor. What started as a hobby, designing posters and editing videos for local events, turned into client work for small businesses like bike shops, pet stores and local events. I focus on making things look good and work well.",
      blurb: "Graphic design, video editing and photography: posters, logos, thumbnails, social content and more.",
      tags: ["Graphic design", "Video editing", "Photography"],
      ctaSubject: "Design / video project",

      toolGroups: [
        { group: "Graphic design", items: ["Canva", "Adobe Photoshop", "Adobe Lightroom", "Adobe Illustrator", "Figma"] },
        { group: "Video editing", items: ["CapCut", "Filmora", "DaVinci Resolve", "Adobe Premiere Pro", "Adobe After Effects"] },
        { group: "Communication & documentation", items: ["Loom", "Notion", "Discord", "Microsoft Office", "Google Workspace"] },
      ],

      // Gallery: add or remove entries freely. { src, alt } for each image.
      gallery: [
        { id: "thumbnails", label: "Thumbnails", items: carrd(1, ["5c77c8c7", "571fe691", "fb10a45b", "32b4471b", "042c9b32", "d6e2b126", "7a149aa4"]) },
        { id: "logos", label: "Logos", items: carrd(2, ["53a563bd.png", "afa8a7c1", "e9fe8344.png", "2f5d42ec.png", "65bcb005", "6509c698"]) },
        { id: "posters", label: "Posters", items: carrd(3, ["34c963dd", "0a355601", "6a876781", "cad5bbff", "d24ddf34", "0852403b", "71444dd8", "2cbfa0bf", "b62aea9a", "096456fd"]) },
        {
          id: "other",
          label: "Other works",
          items: carrd(4, ["551df52f.png", "2bed7dc3.png", "1a6e4f67", "331c8630", "758fa30b", "254c0c9d", "b320c2cc", "203173e0", "7960f404", "bde3fe91", "263b506d", "09ed3fa4.png", "91139552", "aa25339b", "37c3a025"]),
        },
        {
          id: "photography",
          label: "Photography",
          items: carrd(5, ["28781a49", "b4da8f28", "c28a0bec", "cf3c3eea", "bb5b75db", "040366ae", "0bc01d24", "2b8bf5e3", "b73544af", "92bd6520", "1a14d326", "7d0bb539", "8e3fb412", "342db598", "a238a5c1", "e2fff2e3", "6cd1dfe3", "49fb0d82", "2c2d9179"]),
        },
      ],

      // Video projects: use the YouTube video ID (the part after v= in the link).
      // { title: "Promo video", type: "Short form", youtube: "dQw4w9WgXcQ" }
      videoLink: "View videos",
      galleryLink: "View designs & photos",
      videos: [
        { title: "Exploration Hike", type: "Long form", youtube: "X5goU1Vimgg" },
        { title: "Toughest Climb", type: "Long form", youtube: "rtR6EWFu8yA" },
        { title: "POV", type: "Long form", youtube: "Z2fKE_3kQrk" },
        { title: "Time Lapse", type: "Long form", youtube: "0btx23rKCjE" },
        { title: "Shoe Unboxing", type: "Short form", youtube: "szcOZ8K38JA" },
        { title: "UGC", type: "Short form", youtube: "rDXC7eHaHHU" },
      ],

      experience: [
        {
          title: "Freelance Graphic Designer",
          org: "Small businesses and local events",
          dates: "Freelance",
          bullets: [
            "Designed digital and print marketing materials for company promotions and announcements.",
            "Created social media graphics and branding assets aligned with business goals.",
            "Produced banners, posters and social content for local sports and community events, keeping branding consistent across campaigns by working with organizers.",
            "Designed business logos using industry-specific imagery, including bicycle components for a bike service and coconut illustrations for a copra business.",
            "Created travel and outdoor thumbnails that combine destination photography with prominent titles and trip details.",
            "Designed downhill-race number plates with rider names, race numbers and sponsor logos arranged around a clear event identity.",
            "Created destination posters that pair outdoor photography with prominent location names and clear typography.",
          ],
        },
        {
          title: "Freelance Video Editor",
          org: "Freelance",
          dates: "", // TODO: add freelance video editing dates when provided; update the home timeline too.
          bullets: [
            "Edited long-form videos with a focus on storytelling, arranging scenes and pacing to give the footage a clear progression.",
            "Used on-screen subtitles to carry the story and add context rather than dubbed narration.",
            "Created outdoor video edits covering exploration hikes, climbs, point-of-view footage and time-lapse sequences.",
            "Edited short-form content, including shoe unboxing and UGC videos, alongside longer edits.",
          ],
        },
      ],
    },
  },
};
