/* SEO case study values. Keep this plain JS so the site also works from file://. */
window.SEO_METRICS = {
  bookings: {
    value: 30,
    label: "bookings made through the client's website in the first month and a half",
    note: "Counted from the client's booking records; traffic sources are not confirmed.",
    period: "first month and a half",
  },
  // Weekly impressions total 5,211 while the supplied headline is 5,206; preserve both readings as provided.
  weeks: [
    { date: "2026-09-14", label: "14 Sep", impressions: 6, clicks: 0 },
    { date: "2026-09-21", label: "21 Sep", impressions: 21, clicks: 1 },
    { date: "2026-09-28", label: "28 Sep", impressions: 70, clicks: 3 },
    { date: "2026-10-05", label: "5 Oct", impressions: 510, clicks: 3 },
    { date: "2026-10-12", label: "12 Oct", impressions: 571, clicks: 4 },
    { date: "2026-10-19", label: "19 Oct", impressions: 729, clicks: 1 },
    { date: "2026-10-26", label: "26 Oct", impressions: 702, clicks: 6 },
    { date: "2026-11-02", label: "2 Nov", impressions: 851, clicks: 6 },
    { date: "2026-11-09", label: "9 Nov", impressions: 890, clicks: 4 },
    { date: "2026-11-16", label: "16 Nov", impressions: 861, clicks: 10, partial: true },
  ],
  sessions: [
    { label: "Direct", value: 163 },
    { label: "AI assistants", value: 75, highlight: true },
    { label: "Google organic", value: 56 },
    { label: "Referral", value: 30 },
    { label: "Organic social", value: 16 },
  ],
  copilotCitations: [
    { label: "Repairs and tax guide", value: 20 },
    { label: "Contractor access guide", value: 5 },
    { label: "Scaling a portfolio guide", value: 3 },
    { label: "Services page", value: 2 },
    { label: "Homepage", value: 1 },
    { label: "Get a quote page", value: 1 },
  ],
};
