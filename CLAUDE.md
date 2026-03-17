# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Business website for kurtisdunn.com.au — an automation consulting service targeting small businesses. Built as a single-page app with a multi-step assessment form.

## Tech Stack

- **React 19** + **TypeScript** (strict mode) + **Vite 6** (SWC plugin)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **React Router v7** for client-side routing (two routes: `/` home, `/assessment`)
- **shadcn/ui** (new-york style) with Radix UI primitives
- **Lucide React** for icons

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # TypeScript check + Vite build (tsc -b && vite build)
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Architecture

**Routing & State:** App.tsx owns dark mode state (persisted to localStorage) and passes it as props. Form data passes between hero and assessment page via sessionStorage. No backend — form submissions are simulated.

**Path aliases:** `@` maps to `src/` (configured in vite.config.ts and tsconfig). shadcn/ui aliases: `@/components`, `@/ui`, `@/lib`, `@/utils`, `@/hooks`.

**Key components:**
- `src/components/hero.tsx` — Landing hero with inline assessment form
- `src/components/assessment.tsx` — Multi-step questionnaire with Radix UI form controls
- `src/components/contact-modal.tsx` — Full-screen modal for consultation requests
- `src/components/services.tsx` — Service cards grid
- `src/components/ui/` — shadcn/ui primitives (button, card, input, etc.)

**Styling:** Custom 5-color palette defined in `src/App.css` via `@theme` block: `rich-black`, `russian-green`, `dark-sea-green`, `cambridge-blue`, `platinum`. Dark mode uses `.dark` class toggle on document root. IBM Plex Sans font.

## Deployment

GitHub Actions on push to `main` → builds → deploys to **AWS S3** with **CloudFront** CDN invalidation. See `.github/workflows/main.yml`. AWS credentials are in GitHub secrets.
