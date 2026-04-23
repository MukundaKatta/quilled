# Quilled

Your newsletter. Ghostwritten. Tell us what happened this week — wake up tomorrow to a full issue, in your voice, ready to send.

**Status:** v0 skeleton — landing page + newsletter-generator preview route. Full AI not yet wired.

**Landing:** https://quilled.vercel.app

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 |
| Fonts | Inter via `next/font/google` |
| Hosting | Vercel (zero config) |
| Waitlist | https://waitlist-api-sigma.vercel.app |

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy

Push to `main` — Vercel picks it up automatically. No environment variables required.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page (original copy & design preserved) |
| `/try` | v0 ghostwriter preview — enter 3 things from your week, get a mocked newsletter draft, copy to clipboard |
| `/api/waitlist` | `POST { email }` — forwards to waitlist-api-sigma with `product: "quilled"` |

## What's next

- Wire real AI (voice-to-newsletter generation) behind `/try`
- Substack / Beehiiv integration (one-click draft push)
- Auth + voice style learning per user
