# Mbrace Dental Studio

A production-ready dental clinic marketing site built with Next.js (App
Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Every piece of real content — clinic name, phone, address, hours,
treatments, doctors, testimonials, FAQs — lives in one file:
[`src/lib/content.ts`](src/lib/content.ts). Edit it and every section that
uses that data (including the per-treatment detail pages at
`/services/[slug]`, which are generated automatically from the `services`
array) updates with it.

## Wiring up the appointment form

The appointment form (`src/components/sections/Appointment.tsx`) is a
client component that POSTs a JSON payload (`name`, `phone`, `treatment`,
`preferredDate`) to `NEXT_PUBLIC_LEAD_WEBHOOK_URL`. Copy `.env.example` to
`.env.local` and set that variable to any webhook endpoint — a GoHighLevel
inbound webhook, a Google Apps Script bound to a Sheet, Zapier, etc. With
no webhook configured, submissions are logged to the server console and
the form still shows its success state, so local development works without
any external service.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (prerenders every route as static
  HTML/SSG — verify with `npm run build`)
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint

## Notable implementation choices

- **Photography.** All photos in `public/images/` are free-license stock
  from Pexels (Pexels License — free for commercial use, no attribution
  required), sourced and downloaded locally so the build has no runtime
  dependency on an external CDN. Swap them for real clinic/team photos by
  replacing the files at the same paths, or update the `photo` field on
  each doctor in `content.ts`.
- **Animation** is Framer Motion via `LazyMotion` + `m` (not `motion`) to
  keep the client bundle small, gated globally by `MotionConfig
  reducedMotion="user"` so `prefers-reduced-motion` is respected
  automatically.
- **FAQ accordion** uses native `<details>/<summary>` — no JavaScript, no
  client component, fully accessible by default.
- Only `Header`'s mobile menu, the hero entrance animation, and the
  appointment form are client components; every other section is a Server
  Component.
