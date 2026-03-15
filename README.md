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
