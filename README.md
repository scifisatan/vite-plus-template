# Vite+ React Template

A React + TypeScript template powered by Vite+ with:

- Tailwind CSS v4
- shadcn/ui (Radix Nova style)
- Oxlint + type-aware linting
- Built-in formatting via Vite+ (`vp fmt`)

## Stack

- React 19 + TypeScript
- Vite+ (`vite-plus`)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- shadcn/ui + Radix primitives

## Prerequisites

- Node.js (managed through `vp env` if needed)
- Vite+ CLI installed globally (`vp`)

## Getting Started

Install dependencies:

```bash
vp install
```

Start the development server:

```bash
vp dev
```

Build for production:

```bash
vp build
```

Preview the production build:

```bash
vp preview
```

## Linting And Formatting

Run linting:

```bash
vp lint
```

Run type-aware linting (enabled by default in this template):

```bash
vp lint --type-aware --tsconfig ./tsconfig.json
```

Format the codebase:

```bash
vp fmt
```

Run full checks (format + lint + type checks):

```bash
vp check
```

Auto-fix issues where possible:

```bash
vp check --fix
```

## Cloudflare And Wrangler Deployment

This template is configured to deploy as a Cloudflare Worker with static SPA assets.

### Current Wrangler Configuration

The project-level Wrangler config lives in [wrangler.jsonc](wrangler.jsonc) with the following behavior:

- `name: "vp-template"`: Worker/service name used for deploys.
- `compatibility_date: "2025-09-27"`: Pins runtime behavior to a known Cloudflare compatibility date.
- `compatibility_flags: ["nodejs_compat"]`: Enables Node.js compatibility for packages that rely on Node APIs.
- `observability.enabled: true`: Turns on Cloudflare observability telemetry for the Worker.
- `assets.not_found_handling: "single-page-application"`: Routes unknown asset paths to your SPA entry point for client-side routing.

### Local Preview (Cloudflare Runtime)

To preview using Wrangler's local runtime:

```bash
vp run preview
```

This script builds first, then runs `wrangler dev` against the built output.

### Deploy To Cloudflare

Deploy with:

```bash
vp run deploy
```

This script builds first, then runs `wrangler deploy`.

### First-Time Cloudflare Setup

If this is your first deploy from this machine:

1. Authenticate with Cloudflare:

```bash
vp exec wrangler login
```

2. Verify account access:

```bash
vp exec wrangler whoami
```

3. Run deploy:

```bash
vp run deploy
```

Note: `vite.config.ts` includes `@cloudflare/vite-plugin`, so local development and runtime integration are already wired for Cloudflare.

## Tailwind CSS Setup

Tailwind is configured with the Vite plugin in [vite.config.ts](vite.config.ts) and loaded in [src/index.css](src/index.css) via:

- `@import "tailwindcss"`
- `@import "tw-animate-css"`
- `@import "shadcn/tailwind.css"`

Theme tokens and CSS variables are defined in [src/index.css](src/index.css) and used by shadcn/ui components.

## shadcn/ui Setup

This template is already initialized with shadcn settings in [components.json](components.json), including:

- style: `radix-nova`
- cssVariables: `true`
- iconLibrary: `hugeicons`
- aliases for `@/components`, `@/lib`, and `@/hooks`

Add new shadcn components:

```bash
vp dlx shadcn@latest add button
```

## Project Structure

```text
src/
	components/
		ui/
		theme/
	hooks/
	lib/
	App.tsx
	index.css
	main.tsx
```

## Notes

- Use `vp` commands instead of calling npm/pnpm/yarn directly.
- Tooling configuration for linting and formatting lives in [vite.config.ts](vite.config.ts).
