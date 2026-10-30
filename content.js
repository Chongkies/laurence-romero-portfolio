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

  // Single URL setting: after changing this, run node scripts/update-metadata.cjs.
  baseUrl: "https://chongkies.github.io/laurence-romero-portfolio/",

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
  availability: "Available any time (Philippine time, UTC+8). Looking for flexible-schedule remote work: I can work at my own pace or fit around an office schedule.",

  // Email is assembled in the browser so basic scrapers can't read it from the HTML.
  email: { user: "laurence.romero64", domain: "gmail.com" },
  phone: "+639562913209",

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
    availability: "Flexible remote work · Philippine time (UTC+8)",
    whoIHelp: "I help small businesses get found on Google, run smoother with simple web tools, and look good online.",
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
    { id: "seo-prolink", title: "SEO Specialist", org: "Prolink Property Support", dates: "Sept 2026 – Present", tag: "seo" },
    { id: "it-concentrix", title: "IT Operations Intern", org: "Concentrix", dates: "Mar 2023 – Jun 2023", tag: "dev" },
    { id: "design-freelance", title: "Freelance Graphic Designer", org: "Small businesses and local events", dates: "Freelance", tag: "multimedia" },
    { id: "video-freelance", title: "Freelance Video Editor", org: "Freelance", dates: "Freelance", tag: "multimedia" },
    { id: "annotation-remotasks", title: "Data Annotation Associate", org: "Remotasks", dates: "2019 – 2020", tag: "dev" },
  ],

  workFacts: [
    {
      "k": "Time zone",
      "v": "Philippine time (UTC+8)"
    },
    {
      "k": "Availability",
      "v": "Any time, flexible schedule"
    },
    {
      "k": "Work style",
      "v": "Remote, at my own pace"
    }
  ],

  // Testimonials must be real quotes approved by the person.
  // Entry shape: { quote, name, role, org (optional) }. Empty arrays render nothing.
  roles: {
    /* ------------------------------------------------------------ SEO */
    seo: {
      testimonials: [],
      howIWork: {
        "title": "How I work",
        "steps": [
          "Audit your site and tracking.",
          "Fix technical and on-page issues.",
          "Track results in Google Search Console and GA4.",
          "Send a simple report in plain English."
        ]
      },
      nav: "SEO & Marketing",
      title: "SEO & Marketing",
      kicker: "SEO Specialist",
      headline: "Technical SEO, content strategy and plain-English reporting.",
      summary:
        "Computer Engineering graduate with hands-on SEO experience across keyword strategy, on-page optimization and technical fixes, plus the web development background to diagnose and implement changes myself.",
      blurb: "Technical SEO, content strategy and reporting. A client website recorded 11 bookings during the first month; their traffic sources are not yet confirmed.",
      tags: ["Technical SEO", "Keyword strategy", "Reporting"],
      ctaSubject: "SEO / marketing work",

      // TODO: add the Semrush completion date when provided; title and certificate links are verified.
      certifications: [
        {
          title: "Semrush SEO Crash Course with Brian Dean",
          org: "Semrush Academy",
          pdf: "docs/semrush-certificate.pdf",
          source: "https://static.semrush.com/academy/certificates/bc902fe71f/jose-laurence-romero_2.pdf",
        },
      ],

      // These quotes are copied from public Google reviews and must stay verbatim.
      clientReviews: {
        "title": "What Prolink's customers say on Google",
        "note": "Public Google reviews of Prolink Property Support, the business I do SEO for. These are reviews of the business, not of my own work.",
        "items": [
          {
            "name": "Olivia L.",
            "quote": "Incredible, some one was out to the property within the hour to fix the issue. Will use again for sure"
          },
          {
            "name": "Jeff S.",
            "quote": "We have worked along side Pro Link for a couple of years now and we can honestly say they are among the best clients we have worked with. They are really helpful when it comes to assisting us with getting access information or further details regarding the jobs etc. The whole team are a pleasure to work with."
          }
        ],
        "summary": "Three 5-star Google reviews so far."
      },

      caseStudy: {
        title: "Case study: new UK B2B site, from invisible to ranking",
        meta: "Prolink Property Support · UK B2B · Wix website · Sept – Oct 2026",
        brief:
          "Prolink Property Support, a newly launched UK service business, needed to appear on Google for property-management support searches. I worked part-time on setup, technical SEO, on-page SEO, content review and reporting.",
        pdf: "", // e.g. "docs/seo-case-study.pdf" to show a download button
        // TODO: confirm what counts as a booking, the date range, and where the booking count was read.
        bookings: {
          title: "11 bookings made through the website so far",
          note: "Bookings made through the client's website since I started working on it. Counted from the client's booking records.",
        },
        stats: [
          { value: "8 → 692", label: "weekly Google impressions", note: "w/c 8 Sep to w/c 6 Oct" },
          { value: "10 → 68", label: "pages indexed by Google", note: "Google Search Console, Pages/Indexing; latest screenshot" },
          { value: "12", label: "non-brand queries ranking in positions 1–3", note: "Google Search Console, 8 Sep–15 Oct 2026 snapshot" },
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
        // TODO: confirm the exact performance report date range (approximately 24 Sep–22 Oct 2026); it is not shown.
        // TODO: confirm the date of the latest indexing reading.
        figures: [
          {
            "src": "images/seo/search-console-performance.png",
            "plotReveal": { "left": 5.3, "top": 23, "width": 91, "height": 46.5 },
            "alt": "Google Search Console daily performance: 17 clicks, 2.13K impressions, 0.8% CTR and average position 28.5, with impressions higher through October than late September.",
            "width": 1533,
            "height": 597,
            "title": "Search performance",
            "caption": "Google Search Console, daily data, late Sep – late Oct 2026.",
            "stats": [
              {
                "label": "Impressions",
                "value": "2.13K"
              },
              {
                "label": "Clicks",
                "value": "17"
              },
              {
                "label": "CTR",
                "value": "0.8%"
              },
              {
                "label": "Average position",
                "value": "28.5"
              }
            ],
            "explanation": [
              "In this period the site appeared in Google results about 2,130 times. Impressions were close to zero in late September and clearly higher through October. The 17 clicks are an early result; visibility is growing faster than traffic.",
              "The average position is 28.5 and the click rate is 0.8%. My next step is to improve titles, content and internal links for pages sitting just off page 1, so they can move up and earn more clicks."
            ],
            "takeaways": [
              "Visibility is growing before traffic does, which is normal for a new site.",
              "I report the real numbers, including the weak ones, so you know where the work is.",
              "I track clicks, impressions, CTR and position every month in Search Console."
            ]
          },
          {
            "src": "images/seo/search-console-indexing.png",
            "plotReveal": { "left": 6.5, "top": 35.7, "width": 88.5, "height": 43.6 },
            "alt": "Google Search Console indexing chart showing 68 indexed pages and 18 not indexed at the latest reading.",
            "width": 933,
            "height": 375,
            "title": "Pages on Google",
            "caption": "Google Search Console, Pages/Indexing report. Baseline: 21 Sep 2026; latest reading shown in the screenshot.",
            "stats": [
              {
                "label": "Pages on Google",
                "value": "10 → 68"
              },
              {
                "label": "Still not indexed",
                "value": "18"
              }
            ],
            "explanation": [
              "At the start only 10 pages were on Google and 34 were not indexed. A site-wide noindex setting was telling Google to skip pages and blog posts. After I fixed it and re-submitted the pages, indexed pages grew in steps to 68. The chart does not establish when the fix happened or that it caused any specific jump.",
              "18 pages are still not indexed. Google decides when to add each page, so I keep checking them and fixing any page that has a real problem."
            ],
            "takeaways": [
              "More pages on Google means more chances to appear in search.",
              "Checking indexing is the first step in every audit I do."
            ]
          }
        ],
        beforeAfter: [
          ["Indexing", "10 pages on Google; 29+ pages and posts blocked by a noindex setting", "68 pages on Google; 18 still not indexed (latest Search Console screenshot)"],
          ["Visibility", "8 impressions in the first week", "692 in the week of 6 Oct 2026; 2.13K impressions in late Sep–late Oct 2026 (daily report)"],
          ["Measurement", "No search or analytics tracking", "Search Console, GA4 and Bing Webmaster Tools live; monthly client reporting"],
          ["On-page SEO", "Missing and duplicate titles and descriptions; stray code visible on pages", "Titles and descriptions written for key pages; stray code removed"],
          ["Technical", "Duplicate posts, broken links, redirect gaps, no business schema", "301 redirects, broken links fixed, LocalBusiness-type schema added"],
          ["Authority", "Brand-new domain", "9 referring domains; first links and citations in progress"],
        ],
        rankingsTitle: "Rankings snapshot",
        rankingsNote:
          "Earlier snapshot: Google Search Console, 8 Sep – 15 Oct 2026. These page/query figures use a different date range from the daily performance report above. 287 different queries brought the site into Google results and 37 non-brand queries reached the top 10. Many of the strongest rankings are long-tail searches with modest volume, which is typical in the first weeks.",
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
          "The client's website has recorded 11 bookings during the first month of the campaign, counted from the client's booking records. I cannot attribute all 11 to Google search. Search clicks are still small: the late Sep–late Oct 2026 daily report shows 17 clicks and an average position of 28.5. I am working to connect bookings to their source in GA4. Next steps: move page-2 posts onto page 1, rebuild the city page, and grow local citations and reviews.",
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
          dates: "Sept 2026 – Present",
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
      testimonials: [],
      howIWork: {
        "title": "How I work",
        "steps": [
          "Understand the workflow and who uses it.",
          "Plan the features and data.",
          "Build and test with real users.",
          "Improve it from feedback."
        ]
      },
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
          subtitle: "Undergraduate group thesis · internal validation and research",
          stack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
          bullets: [
            "Wrote most of the later implementation for a dynamic credit scoring platform: lenders configure models and predictive-analysis tiers without code changes, alongside audit logs and PDF reports.",
            "Completed with a three-person thesis team and refined through three UAT rounds and panel feedback.",
            "Accepted by the partner bank for internal validation and research; not a live production deployment.",
          ],
          caseStudy: {
            "path": "developer/credit-scoring/",
            "title": "Development of a Framework for a Credit Scoring Platform",
            "subtitle": "Credit Scoring System with Predictive Analysis",
            "summary": "A dynamic, model-driven credit scoring platform with configurable predictive analysis. Lenders choose scoring models and assign criterion tiers without changing application code.",
            "type": "Undergraduate group thesis · Computer Engineering · University of San Carlos, Cebu City",
            "partner": "Rural Bank of Hindang (Leyte), Inc.",
            "status": "Accepted for internal validation and research. Not a live production deployment.",
            "confidentiality": "Details generalised to respect confidentiality with the partner institution.",
            "stack": [
              "React.js",
              "Vite",
              "React Router",
              "Axios",
              "Tailwind CSS",
              "Flowbite React",
              "Recharts",
              "Laravel",
              "REST APIs",
              "MySQL",
              "WampServer",
              "VS Code",
              "Git"
            ],
            "stats": [
              {
                "value": "15",
                "label": "anonymized borrower profiles"
              },
              {
                "value": "3",
                "label": "bank staff in UAT"
              },
              {
                "value": "4.67–5.00",
                "label": "UAT means · 5-point scale · Very satisfied"
              },
              {
                "value": "3",
                "label": "UAT rounds plus panel feedback"
              }
            ],
            "problem": "The bank assessed loan applicants on paper forms and in Excel. Each application took 45 minutes to 1 hour; results were inconsistent and records were difficult to manage. Four Cebu microfinance firms - Asialink, RAFI, Guilmark and Exquisite Lending, reported slow computation and difficulty storing and retrieving records. All four said they would consider a better system.",
            "solution": "Lenders define their own credit and risk scoring models without code changes. The platform scores borrowers, calculates configurable predictive indicators and preserves records of changes. It supports assessment and review; its indicators are rule-based, not machine learning.",
            "stages": [
              {
                "title": "1. Initial screening",
                "text": "Weighted eligibility criteria cover applicant circumstances, loan context and collateral. A total of 12 points or more passes screening. Proprietary scoring forms and option-level point values are omitted."
              },
              {
                "title": "2. Credit risk rating",
                "text": "Capacity to pay, character and management, condition, and collateral feed a 100-point rating. The result maps to five credit-risk levels, from Very Low to Very High.",
                "formula": "RiskScore = Σ(Wᵢ × Xᵢ)",
                "note": "Wᵢ is a criterion weight; Xᵢ is its assigned score."
              },
              {
                "title": "3. Dynamic predictive analysis",
                "text": "Repayment Likelihood and Default Probability are calculated from the selected credit/risk model pair and its assigned criterion tiers. Different model configurations can produce different indicators; an application-specific tier override takes priority. The module is configurable and rule-based, not a trained ML model."
              }
            ],
            "formulas": [
              {
                "title": "Repayment Likelihood",
                "expression": "L = (Σ sᵢ·wᵢ) / (Σ max_sᵢ·wᵢ) × 100",
                "tiers": "Primary 0.50 · Secondary 0.35 · Low 0.15 · None excluded",
                "meaning": "sᵢ is the criterion score, max_sᵢ its maximum and wᵢ its tier weight."
              },
              {
                "title": "Default Probability",
                "expression": "P_d = (Σ (max_sⱼ − sⱼ)·rwⱼ) / S_rmax × 100",
                "tiers": "Critical 0.60 · Contingency 0.30 · Behavioral 0.10 · None excluded",
                "meaning": "The weighted gap to each maximum is normalised by S_rmax, the maximum weighted risk-gap total."
              }
            ],
            "tierNote": "Tiers are configured per credit/risk model pair. A per-application override takes priority over that configuration.",
            "features": [
              {
                "title": "Dynamic configuration, explainable output",
                "text": "Administrators assign predictive tiers to criteria for each credit/risk model pair, with None excluding a criterion. Per-application overrides allow a different tier configuration for an individual assessment. Gauges, badges, recommendations and breakdown tables present the resulting calculations.",
                "image": "images/dev/credit-scoring/predictive-gauges.webp",
                "alt": "Predictive Analysis interface with repayment and default gauges, interpretation badges, PDF export and a recommendation banner",
                "width": 1217,
                "height": 612,
                "caption": "Application UI example. The displayed values and application count are not presented as validation results; the 15-profile validation results are reported separately below."
              },
              {
                "title": "Breakdowns that expose the calculation",
                "text": "Tables connect each score to its tier, weight and weighted contribution. The illustration below uses symbolic placeholders; the bank's actual scoring tables and criterion point values are not reproduced.",
                "illustration": "breakdown"
              },
              {
                "title": "Models that change without code",
                "text": "Create, edit, duplicate, archive, restore and soft-delete credit and risk models. The interface separates model management from application scoring.",
                "image": "images/dev/credit-scoring/model-manager.webp",
                "alt": "Model manager with Credit Score and Risk Score tabs, search, Create Model and row action menus; bank branding replaced with a neutral label",
                "width": 1916,
                "height": 904,
                "caption": "Full-frame application UI. Bank branding has been replaced with a neutral label."
              },
              {
                "title": "Records that retain their history",
                "text": "Loan edits archive the old record and create a new one. Archive and Recycle Bin workflows support retrieval; activity logs record the user, action, module, old/new values and IP."
              },
              {
                "title": "Access, reporting and daily use",
                "text": "Role-based, branch-scoped access, dashboard pie charts, PDF report export and dark mode support staff workflows."
              }
            ],
            "architecture": [
              {
                "title": "React SPA",
                "detail": "Vite · React Router · Axios · Tailwind CSS · Flowbite React · Recharts",
                "responsibility": "Forms, navigation, visualisations and report interaction."
              },
              {
                "title": "Laravel REST API",
                "detail": "Authentication · validation · computation · logging",
                "responsibility": "Scoring, predictive calculations and application rules."
              },
              {
                "title": "MySQL",
                "detail": "Soft deletes · archiving",
                "responsibility": "Users, borrowers, loan applications, credit score models, risk score models, model combination tiers and activity logs."
              }
            ],
            "development": "Developed on WampServer using VS Code and Git. The frontend, API and database form a decoupled three-tier design.",
            "results": [
              "Validation data: 15 anonymized borrower profiles from the bank.",
              "Risk distribution: 40% Very Low (6), 26.7% Low (4), 33.3% Moderate (5), 0% High or Very High.",
              "Mean Repayment Likelihood: 93.6% (Very Low risk group) vs 73.4% (Moderate group). Default Probability in the Moderate group ran from 25% to 39%.",
              "User acceptance testing: 3 bank staff (president, loans clerk, audit staff), 5-point Likert scale. Means ranged 4.67 to 5.00 across efficiency, ease of use, security, features, predictive analysis and overall potential.",
              "Three UAT rounds plus panel feedback led to the edit/archive features, a corrected default-probability formula, and dynamic tier assignment."
            ],
            "distribution": [
              {
                "label": "Very Low",
                "percent": 40,
                "display": "40%",
                "count": 6
              },
              {
                "label": "Low",
                "percent": 26.7,
                "display": "26.7%",
                "count": 4
              },
              {
                "label": "Moderate",
                "percent": 33.3,
                "display": "33.3%",
                "count": 5
              },
              {
                "label": "High",
                "percent": 0,
                "display": "0%",
                "count": 0
              },
              {
                "label": "Very High",
                "percent": 0,
                "display": "0%",
                "count": 0
              }
            ],
            "limitations": [
              "Rule-based and dependent on administrator-configured weights. No trained ML model or long-term repayment dataset was used.",
              "Tested on 15 profiles in a rural-bank context; results may not generalise.",
              "Data sharing between administrators was prepared but not validated and is not presented as a finished feature.",
              "The bank accepted the deliverables for internal validation and research, not live production deployment or adoption."
            ],
            "nextSteps": "Recommended next steps: cloud deployment, ML validation on larger datasets, a borrower portal, 2FA and stronger security, and multi-bank support.",
            "logos": {
              "React Router": {
                "src": "images/dev/credit-scoring/icons/reactrouter.svg"
              },
              "Axios": {
                "src": "images/dev/credit-scoring/icons/axios.svg"
              },
              "Flowbite React": {
                "src": "images/dev/credit-scoring/icons/flowbite.png",
                "originalColor": true
              },
              "Recharts": {
                "src": "images/dev/credit-scoring/icons/recharts.svg"
              },
              "WampServer": {
                "src": "images/dev/credit-scoring/icons/wampserver.png",
                "originalColor": true
              }
            },
            "gallery": [
              {
                "src": "images/dev/credit-scoring/login-form.webp",
                "title": "Login form",
                "alt": "Email and password fields with sign-in and password-reset links; bank logo replaced with a neutral label",
                "width": 1916,
                "height": 905
              },
              {
                "src": "images/dev/credit-scoring/password-reset.webp",
                "title": "Password reset",
                "alt": "Empty email field and Send Reset Link button",
                "width": 1909,
                "height": 901
              },
              {
                "src": "images/dev/credit-scoring/dashboard.webp",
                "title": "Dashboard",
                "alt": "Dashboard tiles for users, credit data, predictive analysis, models, evaluation, loans and activity logs",
                "width": 1890,
                "height": 821
              },
              {
                "src": "images/dev/credit-scoring/services.webp",
                "title": "Products and services",
                "alt": "Three-column interface for loans, deposits and services; bank branding replaced with a neutral label",
                "width": 1916,
                "height": 905
              },
              {
                "src": "images/dev/credit-scoring/credit-data.webp",
                "title": "Credit score data",
                "alt": "Risk-distribution pie chart, report controls and records with numbered borrower placeholders",
                "width": 1904,
                "height": 910
              },
              {
                "src": "images/dev/credit-scoring/credit-analysis.webp",
                "title": "Credit score analysis",
                "alt": "Analysis view with a risk-distribution pie chart and collapsed criterion groups",
                "width": 1895,
                "height": 867
              },
              {
                "src": "images/dev/credit-scoring/predictive-gauges.webp",
                "title": "Predictive analysis",
                "alt": "Repayment and default gauges with interpretation badges and a recommendation banner",
                "width": 1217,
                "height": 612
              },
              {
                "src": "images/dev/credit-scoring/model-manager.webp",
                "title": "Model manager",
                "alt": "Credit and risk model tabs, search, Create Model and action menus",
                "width": 1916,
                "height": 904
              },
              {
                "src": "images/dev/credit-scoring/credit-evaluation.webp",
                "title": "Credit evaluation",
                "alt": "Empty applicant and amount fields followed by model selection cards",
                "width": 1914,
                "height": 903
              },
              {
                "src": "images/dev/credit-scoring/risk-model-selection.webp",
                "title": "Risk model selection",
                "alt": "Risk model cards and Start Processing control",
                "width": 1911,
                "height": 588
              },
              {
                "src": "images/dev/credit-scoring/loan-records.webp",
                "title": "Loan records",
                "alt": "Loan listing with numbered borrower placeholders, risk ratings, search and export controls",
                "width": 1556,
                "height": 783
              },
              {
                "src": "images/dev/credit-scoring/recycle-bin.webp",
                "title": "Recycle Bin",
                "alt": "Archived application with a numbered borrower placeholder and restore and delete actions",
                "width": 1233,
                "height": 723
              },
              {
                "src": "images/dev/credit-scoring/audit-log.webp",
                "title": "Activity log",
                "alt": "Activity log showing generic Admin account actions; bank branding replaced with a neutral label",
                "width": 1892,
                "height": 865
              }
            ],
            "galleryNote": "Browse full-frame screenshots with the arrows, keyboard or a horizontal swipe. Each image keeps its original dimensions and proportions; click to open full size. Bank branding is replaced with a neutral label. Screens containing personal data or proprietary scoring values are excluded. Interface values are not additional validation results."
          },
          github: "", // e.g. "https://github.com/Chongkies/credit-scoring"
          demo: "",
          image: "", // e.g. "images/dev/credit-scoring.png"
        },
        {
          title: "LGU Treasury Collections System",
          previewLabel: "View desktop UI",
          previews: [
            { src: "images/dev/lgu-dashboard.jpg", alt: "Sample treasurer office encoder dashboard with receipt-entry forms, drafts, receipt search and account management", device: "laptop", label: "Laptop — encoder dashboard", browser: { tab: "Treasury Collections", address: "Local network preview" } },
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
            { src: "images/dev/pickleball-laptop.jpg", alt: "Leyte Pickleball Player Directory desktop layout with location filters, rating summary and player cards", device: "laptop", label: "Laptop viewport" },
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
      testimonials: [],
      howIWork: {
        "title": "How I work",
        "steps": [
          "Learn the goal, audience and style.",
          "Share a first draft.",
          "Revise with your feedback.",
          "Deliver files ready for print and social media."
        ]
      },
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
          dates: "Freelance",
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
