# Kymbo — Positioning

Kymbo is a **nearshore digital-commerce engineering agency** — a full-service
development shop with a Colombian team and a US LLC, serving primarily the US
and Canada. This document is the material the feed draws from when a carousel
is not about the FYM campaign specifically.

> Verified against Notion 2026-08-03 (see `profiles/kymbo/content/ideas/stack.json`
> for the machine-readable version and full source citations). Treat this
> document as the human-readable summary; treat `stack.json` as authority.

---

## What Kymbo does — the full offer surface

Kymbo builds **web platforms, e-commerce stores, mobile applications, and
custom integrations**. WordPress is the default CMS ("bread and butter"),
but the shop is not WordPress-only.

### CMS work
- **WordPress** — the default. Two build paths: (a) Elementor + premium
  Envato/ThemeForest template, 60–120 hours, fast turnaround; (b) fully custom
  theme, 33/33/33 payment terms, ES2020+ vanilla JS in the theme, no jQuery.
- **Alternatives when the client needs them** — Strapi (headless, Node teams),
  Sanity (structured content), Contentful (enterprise headless),
  Webflow (designer-led, no-devs), Ghost (newsletter-first).
- **Rejected** — shared hosting on any Kymbo build (GoDaddy, Bluehost). Too
  slow. This is a stated position, not a preference.

### Custom development
- **Frontend** — Next.js (marketing + SSR-for-SEO), React + Vite (SPAs, internal
  tools), React Router v7 framework mode.
- **Backend** — Python + FastAPI (httpx not requests; asyncpg via SQLAlchemy).
- **Infrastructure** — Cloudflare (Workers/Pages), Vercel, Netlify, Railway
  (dev→staging→prod), AWS (CDK for new infra). AWS not for small projects;
  Vercel not for heavy custom infra.

### E-commerce & storefronts
- Shopify and WooCommerce are the two production paths.
- Payment stack: gateway + processor + merchant account (Stripe, Adyen,
  regional). Auth vs capture is treated as two moments, not one.
- PCI scope reduction is a discipline: hosted/tokenized fields, no card data
  in email, ever.

### Mobile applications
- Custom mobile builds where the project requires a native surface. Not the
  default; a service offered when the requirement is genuine.

### Hospitality-specific (the FYM campaign lane)
- **Booking engines & PMS integrations** — Cloudbeds (indie hotels, B&Bs),
  Mews (modern boutique), Little Hotelier (under 20 rooms), Hostaway (vacation
  rentals), Guesty (multi-unit STRs), Oracle Opera Cloud (enterprise).
- Kymbo's productized FYM offer bundles a WordPress build with Guesty (widget
  in Launch tier, full integration in Growth tier) — but the *shop's*
  hospitality experience is not Guesty-locked. Kalido, Kymbo's flagship
  portfolio, runs Mews.

---

## How Kymbo works — the team and the process

This is the material for the "team + process" carousels Isa asked for.

### Roles on every project

- **Project Manager (PM)** — client-facing single point of contact; scope,
  timeline, budget, milestones. Never handles code.
- **Tech Lead** — architectural decisions, code review, integration design.
  The role that decides whether a requirement is a template extension or a
  custom build.
- **Developer(s)** — implementation. Frontend, backend, or full-stack depending
  on the project shape.
- **Designer** — full-custom projects only. Template projects skip this role.

A small project runs on PM + tech lead + one developer. A full-custom hotel or
e-commerce build runs on PM + tech lead + designer + one or two developers.

### Client onboarding

1. **Discovery.** Kymbo runs a scoped discovery call to understand what the
   client actually needs (which is often not what the RFQ said).
2. **SOW.** A Statement of Work with a real number, a real timeline and named
   deliverables — not a "we'll figure it out" quote.
3. **33/33/33** payment structure on custom builds — kickoff, midpoint,
   go-live. Template builds are 50/50.
4. **Staging environment first.** Every build is deployed to staging and
   client-tested before go-live. The client signs off before we point the
   domain.
5. **Handoff.** Documentation, admin access, hosting credentials, backup
   restore drill. The client can take the site elsewhere on day one — Kymbo
   competes on ongoing value, not on lock-in.

### Custom vs template — how Kymbo decides

- **Template** — content-first sites, marketing sites, informational sites,
  brochure-plus-booking sites. Faster, cheaper, capped at ~25 active plugins
  on the Elementor path.
- **Custom** — sites where the design is a value driver, or the integration
  needs are non-trivial, or performance is load-bearing (LCP-critical
  landing pages, high-traffic e-commerce). Capped at 15 active plugins on the
  custom theme path. Vanilla ES2020+ in the theme, no jQuery.

### Performance is a gate, not an aspiration

Every build hits an internal budget or it does not ship:

- LCP < 2.5s · CLS < 0.1 · INP < 200ms · TBT < 200ms · TTI < 4s
- Lighthouse ≥ 80
- First-load payload < 2 MB (excluding video), compressed HTML < 100 KB

Industry average hotel page load is ~6.3s. That gap is a Kymbo value
proposition, published as a number.

### SEO is a gate, not an add-on

Before a build moves to client presentation, an SEO QA gate runs. Missing any
of these fails the gate:

- "Discourage search engines" off
- `robots.txt` allow rules correct (no leftover `Disallow: /` from staging)
- No `noindex` left by a staging plugin
- 301s in place on any URL that changed
- No staging URLs indexable
- One H1 per page, unique title < 60ch, unique description < 155ch
- JSON-LD schema present per page type

---

## The FYM offer, in one place

Two-tier productized offer for the campaign. See `stack.json → offer` for the
Notion-verified detail; the Shopify SKUs marked "pending" are not yet a
publishable buy path.

- **Launch — $999 setup + $99/mo Care Plan.** Template site, 5 pages, SEO
  ready, tracking installed, Guesty booking engine embedded (real-time
  availability + direct bookings synced to the client's Guesty calendar; free
  for Guesty users). *SKUs pending Shopify creation — do not publish a buy
  path yet.*
- **Growth — $2,149 setup + $300/mo Full Maintenance.** Custom design,
  GA4 + heatmaps, CRO baseline, speed optimization, full Guesty Pro
  integration (API-connected, real-time calendar + pricing sync, payment flow
  configured, staging tested before go-live). Recurring is live in Shopify;
  14 dev hours/month.
- **Hosting-only — $20/mo.** WP Engine partner infrastructure, ~$5/mo less
  than WP Engine's direct entry plan.

---

## What Kymbo is *not* saying

- **No "widget vs full-integration" language** in customer-facing copy.
  Clients don't care about the label. Kymbo either ships full integration or
  ships a Kymbo-owned pre-built one that behaves like full integration.
  (Isa's direction, 2026-08-11.)
- **No 45-day guarantee**, no "in-writing" delivery promises, no
  "pays for itself", no "prints profit", no "immediate return". None of
  these appear in the offer or the SOW. See
  [`copy-discipline.md`](copy-discipline.md).
- **No competitor calling-out.** Critique the practice ("commission you don't
  see on the P&L"), not the company ("Booking.com is the villain").
- **No AI-imagery as the headline.** AI-assisted development is a proof point
  for speed and price — never the story.

---

## Who Kymbo serves — beyond the current campaign

The FYM campaign is aimed at independent hotels + STR operators. Kymbo's book
of business is wider:

- Independent brands that need a real e-commerce storefront.
- Service businesses that need a proper marketing site plus a booking or lead
  system.
- Existing WordPress sites hitting the plugin ceiling or the shared-hosting
  ceiling — Kymbo does the rebuild.
- Companies that need a custom integration (POS to CMS, PMS to CRM, payments
  to accounting) and don't want to hire in-house for a one-time project.
