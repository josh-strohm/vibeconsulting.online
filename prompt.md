# VibeConsulting.online — AI Coding & Design Prompt

Use this document as the **single source of truth** when building or iterating on the site.

## Mission

Build a production-quality marketing website for **VibeConsulting** (domain: vibeconsulting.online): AI consulting for small-to-medium businesses. The site must **educate** skeptical, ROI-focused SMB buyers and **convert** them to book a discovery call or submit a contact form.

Tone: energetic builder — sharp, competent, a little playful. Not corporate. Not generic AI hype. Not purple cyberpunk cliché.

## Stack (required)

- **Next.js** App Router + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- Fonts: **Syne** (display), **DM Sans** (body), mono for utility labels
- No CMS in v1
- Env placeholders only:
  - `N8N_WEBHOOK_URL` — contact form destination
  - `NEXT_PUBLIC_BOOKING_EMBED_URL` — Google Calendar (or similar) embed src

## Brand system — Linear-inspired grey / white

### Colors

| Token | Hex | Use |
|-------|-----|-----|
| ink | `#08090A` | Page background |
| ink-elevated | `#111113` | Cards / surfaces |
| ink-border | `#23252A` | Borders / hairlines |
| fog | `#F7F8F8` | Primary text |
| fog-muted | `#8A8F98` | Secondary text / labels |
| signal | `#E6E6E6` | Light grey emphasis |
| mint | `#8A8F98` | Alias for muted labels (legacy token) |
| tide | `#C0C4CC` | Mid grey |
| coral | `#F87171` | Errors only |
| primary | `#FFFFFF` | CTAs (white button, dark text) |

- No blue-green / teal / purple brand accents
- Greyscale only for brand UI; white primary buttons

### Visual personality

- Linear-style product dark UI: charcoal surfaces, soft grey borders, white type
- Soft white ambient glow in hero (not colored mesh)
- Cards: subtle border brighten on hover, no neon glow
- Motion: restrained entrance + scroll reveals; honor `prefers-reduced-motion`
- Avoid: teal/mint accents, electric blue CTAs, purple neon, busy gradients

### Typography

| Role | Face | Notes |
|------|------|-------|
| Display | **Syne** | Geometric, energetic; hero + section titles |
| Body | **DM Sans** | Readable, modern |
| Mono | **JetBrains Mono** or **Geist Mono** | Labels, process tags, form hints |

### Voice

- Outcome language (time, money, fewer manual steps)
- Direct, energetic, lightly witty
- No fake metrics, no invented client logos, no “synergy/leverage” filler
- CTAs: “Book a call”, “Talk to us”, “See services”

## Site map

| Path | Purpose |
|------|---------|
| `/` | Full marketing narrative + CTAs |
| `/services` | Four offers detailed |
| `/about` | Philosophy + how we work |
| `/contact` | Form + booking embed |

### Four offers

1. **AI Readiness Audit** — where AI pays off first
2. **AI Strategy & Roadmap** — 90-day plan, prioritization
3. **Build & Automate** — agents, workflows, integrations, process automation
4. **Team Enablement** — training and adoption playbooks

## Page specs

### Home `/`

1. Sticky header: wordmark “VibeConsulting”, nav, Book a call
2. Hero: large Syne headline, supporting line, dual CTAs (Book / Services), gradient mesh background
3. Problem: AI FOMO / tool sprawl / no ROI plan for SMBs
4. Outcomes: 3–4 concrete result cards
5. Services snapshot: four offers → link to `/services`
6. Process: Discover → Design → Build → Enable
7. Differentiator: we ship systems and capability, not endless decks
8. Proof: honest early-stage placeholder (no fake logos)
9. FAQ: 5–6 real objections
10. Final CTA band
11. Footer: links, contact, copyright

### Services `/services`

- Intro + four detailed offer sections (what / who for / deliverables / CTA)
- Engagement models blurb (audit → roadmap → build → enable)
- CTA band

### About `/about`

- Origin/philosophy of “vibe” consulting (practical, human, shipped work)
- How engagements feel for the client
- Values: clarity, ROI, enablement, no hype
- CTA to contact

### Contact `/contact`

- Short pitch
- Contact form: name, email, company (optional), message
- On submit: POST `/api/contact` → n8n webhook when configured
- Booking embed component with env placeholder + empty-state fallback
- Mini FAQ or response-time expectation

## Technical requirements

- App Router file structure; shared `layout` with metadata defaults
- shadcn components for Button, Input, Textarea, Accordion (FAQ), Card, etc.
- `POST /api/contact` validates input (zod recommended); forwards JSON to `N8N_WEBHOOK_URL`
- Graceful behavior if webhook unset (no crash; clear error or dev log)
- `BookingEmbed` uses `NEXT_PUBLIC_BOOKING_EMBED_URL`; fallback UI if missing
- SEO: unique title/description per page, Open Graph basics, sitemap + robots
- Responsive mobile-first; touch-friendly CTAs
- A11y: semantic HTML, labels, focus states, AA contrast
- Performance: optimize fonts, minimize client JS; prefer server components; client only where needed (form, motion)
- `.env.example` documenting both env vars

## Component inventory (minimum)

SiteHeader, SiteFooter, Hero, ProblemSection, Outcomes, ServicesGrid, ProcessSteps, Differentiator, ProofPlaceholder, FAQ, CtaBand, ContactForm, BookingEmbed, plus shadcn ui primitives.

## Implementation order

1. Scaffold Next.js + Tailwind + shadcn; global tokens/fonts
2. Layout chrome (header/footer)
3. Home sections top to bottom
4. Services, About, Contact pages
5. Contact API + form UX states (idle/loading/success/error)
6. Booking embed placeholder
7. SEO + polish + reduced-motion + mobile QA

## Definition of done

- All four routes look intentional and on-brand
- Form validation + API path works with mock/placeholder webhook
- Booking area degrades cleanly without embed URL
- Greyscale Linear-style theme (no teal / blue-green brand color)
- No fake social proof
- Keyboard + mobile usable
- README with run instructions and env vars

## Explicit do-nots

- Do not invent case studies, logos, or percentages
- Do not use purple/violet or blue-green/teal brand accents
- Do not ship a bare unstyled form
- Do not use Lorem ipsum in final UI — write real marketing copy
- Do not add auth, blog, or CMS in this pass unless asked
