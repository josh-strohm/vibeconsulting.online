# VibeConsulting.online

Marketing site for **VibeConsulting** — AI consulting for small-to-medium businesses.

Stack: **Next.js** (App Router) · **TypeScript** · **Tailwind CSS** · **shadcn/ui**

Design system and implementation brief: see [`prompt.md`](./prompt.md).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `N8N_WEBHOOK_URL` | Server-only. Contact form POSTs JSON here (optional override). |
| `NEXT_PUBLIC_BOOKING_EMBED_URL` | Public. Google Calendar embed `src` (optional override). |

Both have defaults in code. Env vars only needed if you want to override them.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Pages

- `/` — Home funnel
- `/services` — Four offers
- `/about` — Philosophy & values
- `/contact` — Form + booking embed
