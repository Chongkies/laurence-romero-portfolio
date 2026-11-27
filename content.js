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

const seoMetrics = window.SEO_METRICS;

window.SITE = {
  name: "Jose Laurence Romero",
  initials: "LR",

  // Single URL setting: after changing this, run node scripts/update-metadata.cjs.
  baseUrl: "https://laurenceromero.xyz/",

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
  availability: "Available any time for flexible remote work from Hilongos, Leyte, Philippines (UTC+8), at my own pace or around an office schedule.",

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

  // TODO: update the booking value and date range when the client's records change; confirm the booking definition and reporting dates.
  results: {
    bookings: seoMetrics.bookings, // TODO: update value and exact booking dates in data/seo-metrics.js.
  },

  hero: {
    availability: "Flexible remote work · Philippine time (UTC+8)",
    image: { src: "images/me/web/laurence-portrait.jpg", alt: "Jose Laurence Romero smiling in front of a station building and city skyline" },
    lead: "I help small businesses get found on Google, build practical web applications, and create graphics, videos and photos.",
  },

  bio: [
    "I'm a Computer Engineering graduate from the University of San Carlos, based in Hilongos, Leyte. I work in SEO, full-stack web development and multimedia.",
    "Designing posters and editing videos for local events grew into work for small businesses. I'm self-taught in design and formally trained in engineering.",
  ],

  personalAbout: {
    nav: "About me",
    hint: "Want to know me more? Click me!",
    title: "Outside work",
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
    { id: "seo-specialist", title: "SEO and GEO Specialist", org: "B2B Property Management Services Company", dates: "Sept 2026 – Present", tag: "seo" },
    { id: "software-dev-gip", title: "Software Developer Intern (GIP)", org: "Government Internship Program \u00b7 Municipal Treasurer's Office, LGU Hilongos", dates: "Oct 2026 \u2013 Present", tag: "dev" },
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
      nav: "SEO",
      title: "SEO",
      kicker: "SEO and GEO Specialist",
      headline: "SEO and AI search for small businesses",
      summary: "I help small UK businesses get found on Google and in AI answers, using free tools.",
      blurb: "Technical SEO, content and reporting. Took a new UK business site from 7 to 5,206 Google impressions in about ten weeks.",
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
        "title": "What the company's customers say on Google",
        "note": "Public Google reviews of the business I do SEO for; these are reviews of the business, not of my work.",
        "items": [
          {
            "name": "Olivia L.",
            "quote": "Incredible, some one was out to the property within the hour to fix the issue. Will use again for sure"
          },
          {
            "name": "Jeff S.",
            "quote": "We have worked along side [the company] for a couple of years now and we can honestly say they are among the best clients we have worked with. They are really helpful when it comes to assisting us with getting access information or further details regarding the jobs etc. The whole team are a pleasure to work with."
          }
        ],
        "summary": ""
      },

      skills: [
        { group: "Tools", items: ["Google Search Console", "Google Analytics 4", "Bing Webmaster Tools", "Ahrefs Webmaster Tools", "Screaming Frog", "Semrush (free)", "Wix SEO tools", "schema.org JSON-LD", "ChatGPT", "Google Gemini", "Microsoft Copilot"] },
      ],

      experience: [
        {
          title: "SEO and GEO Specialist",
          org: "B2B Property Management Services Company",
          dates: "Sept 2026 – Present",
          bullets: [
            "Grew UK site impressions 7 to 5,206 and indexed pages 10 to 74 in ten weeks.",
            "Fixed issues (duplicate H1s, long titles, missing descriptions, alt text, share images); Ahrefs site health 81 to 100.",
            "Rewrote titles and meta descriptions for real queries, added internal links and published answer-first guides.",
            "Structured pages for AI search (direct answers, FAQs, schema); 32 Copilot citations in three months.",
            "Set up Search Console, GA4 and Bing Webmaster Tools; send monthly one-page reports.",
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ DEV */
    dev: {
      testimonials: [],
      nav: "Developer",
      title: "Software Developer",
      kicker: "Software Developer",
      headline: "Web applications for real business workflows",
      summary: "Computer Engineering graduate building web apps with React and Laravel. I plan with the people who use them, test with real users, and review AI-assisted code before it ships.",
      blurb: "Full-stack web apps with React and Laravel: a credit scoring thesis tested with a bank, and a collections system for a local government office.",
      ctaSubject: "Software development work",

      projects: [
        {
          title: "Credit Scoring Platform",
          subtitle: "Thesis project, validated with a partner rural bank",
          stack: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
          bullets: [
            "Built most of the later implementation of a configurable scoring platform: lenders adjust models and risk tiers without code changes.",
            "Refined through 3 UAT rounds with bank staff and a thesis panel.",
            "Includes audit logs and PDF reports. Not a live deployment.",
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
            "Local-network app for encoding receipts, sharing funds and supervisor review, built from the office's paper forms and rules.",
            "Keyboard-first entry, live total checks, duplicate-serial detection, role-based verification and audit logs.",
            "Tested with 50,000 simulated receipts and 25 simulated users; in development ahead of a pilot. Built with Claude and Codex under my direction.",
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
            "Player profiles, skill ratings and matchmaking inspired by DUPR.",
            "Responsive interfaces built with reusable React components.",
          ],
          github: "",
          demo: "",
          image: "",
        },
        {
          // TODO: choose the app's final name; add repository, demo and screenshots when available.
          hidden: true,
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
        { group: "Languages", items: ["JavaScript", "TypeScript", "PHP", "Python"] },
        { group: "Frontend", items: ["React.js", "Tailwind CSS", "shadcn/ui", "Inertia.js", "HTML5", "CSS3"] },
        { group: "Backend and data", items: ["Laravel", "REST APIs", "MySQL", "Firebase"] },
        { group: "Tools", items: ["Git", "GitHub", "VS Code"] },
        { group: "AI-assisted development", items: ["Claude Code", "Codex", "GitHub Copilot", "Cursor"] },
      ],

      experience: [
        {
          title: "Software Developer Intern (GIP)",
          org: "Government Internship Program \u00b7 Municipal Treasurer's Office, LGU Hilongos",
          dates: "Oct 2026 \u2013 Present",
          bullets: [
            "Front end: built the interface in React, TypeScript, Inertia.js, Tailwind CSS and shadcn/ui, with keyboard-first entry, account lookup and live total checks.",
            "Back end: built the Laravel back end with role-based verification, audit logs, duplicate-serial detection and fund splits rounded to the centavo.",
            "Database: designed the MySQL data model from paper receipts, monthly reports and office rules; encrypted personal names.",
          ],
        },
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
      nav: "Multimedia",
      title: "Multimedia",
      kicker: "Graphic Design · Video Editing · Photography",
      headline: "Graphic design, video and photography",
      summary: "Self-taught designer and editor creating work for small businesses, local events and community groups.",
      blurb: "Posters, logos, thumbnails, video edits and photos for small businesses, local events and community groups.",
      ctaSubject: "Design / video project",

      toolGroups: [
        { group: "Graphic design", items: ["Canva", "Adobe Photoshop", "Adobe Lightroom", "Adobe Illustrator", "Figma"] },
        { group: "Video editing", items: ["CapCut", "Filmora", "DaVinci Resolve", "Adobe Premiere Pro", "Adobe After Effects"] },
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
