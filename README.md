# AI Chef Mate

A responsive recipe-inspiration landing experience built with **Next.js App Router, React, TypeScript, custom CSS design tokens and Framer Motion**.

The current repository is a front-end product experience. It includes an interactive recipe-brief composer that creates a structured prompt and copies it to the clipboard. It does **not** call an AI model, store accounts, or claim to return AI-generated recipes. A live model integration should be added through a server-side route with provider credentials kept in environment variables.

## Getting started

### Requirements

- Node.js 20 or newer
- npm 10 or newer (npm 9+ supports the v3 lockfile)

### Install and run

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Project structure

```text
src/
├── app/
│   ├── globals.css             # Global design system and responsive styles
│   ├── layout.tsx              # Root document, metadata and app providers
│   ├── loading.tsx             # App Router loading UI
│   └── page.tsx                # Home route composition
├── components/
│   ├── layout/                 # Site header and footer
│   ├── providers/              # Framer Motion configuration
│   └── ui/                     # Shared low-level UI primitives
├── features/
│   └── landing/
│       ├── components/
│       │   ├── sections/       # Independently maintained landing sections
│       │   ├── ui/             # Section heading and reveal primitives
│       │   └── landing-page.tsx
│       ├── data/               # Typed static content
│       └── utils/              # Pure recipe-brief construction logic

public/images/                  # Compressed WebP imagery used by the page
.github/workflows/ci.yml        # Type check, lint and production build
```

## Visual system

The visual language uses warm porcelain surfaces, deep aubergine typography and a coral accent, with soft blush and lavender section treatments. It is intentionally distinct from the green palette used in the Cookoing project. The header tracks the section currently crossing the reading position and marks the matching desktop/mobile navigation item.

## Architecture notes

- **App Router stays thin:** route files compose the page and own document-level metadata only.
- **Feature-first organisation:** landing sections and their content live together under `features/landing`.
- **Reusable UI:** header, footer, icon, motion provider, reveal animation and section heading are shared components.
- **Motion accessibility:** `MotionConfig` respects the operating system's reduced-motion preference; CSS also includes a reduced-motion fallback.
- **No false product claims:** sample recipe cards are labelled as editorial examples. The recipe studio creates a prompt locally and does not send user input to a server.
- **No browser-only work during SSR:** clipboard access happens only after an explicit form submission. The root document uses `suppressHydrationWarning` narrowly on `<html>` to tolerate attributes injected there by browser extensions before React hydrates; this does not replace fixing actual server/client data mismatches in application components.

## Adding a live AI provider later

Implement the provider call in a Next.js Route Handler (for example `src/app/api/recipes/route.ts`). Validate and limit request input on the server, keep provider keys in server-only environment variables, set request timeouts and output limits, validate the model response before returning it, and add clear loading/error states in the client. Never expose a provider secret through a `NEXT_PUBLIC_` variable.

Use `.env.example` as a reminder that no provider is currently configured. Do not add real secrets to source control.

## Motion and interaction

- Intro motion for the hero copy and food photography.
- Scroll-triggered reveals with one-time viewport entry.
- Subtle hover movement for recipe cards and imagery.
- Animated, accessible mobile navigation with scroll-aware active-section states.
- Live-updating recipe brief preview and clipboard feedback.
- Native disclosure elements for keyboard-friendly FAQ interaction.

All transitions are restrained and respect `prefers-reduced-motion`.
