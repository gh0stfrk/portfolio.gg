# Personal Portfolio & Blog — Copilot Instructions

## Project Overview

A personal portfolio and blog site built with Next.js, TypeScript, and Tailwind CSS. Features a statically generated blog powered by Markdown content, project showcase, and contact page. Uses the App Router with React Server Components.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with dark mode support
- **Content**: Markdown blog posts processed via `lib/blog.ts`
- **Theming**: `next-themes` via `components/theme-provider.tsx`
- **Static generation**: Fully static where possible; blog pages statically generated from `content/blog/`

## Conventions

### Naming
- Files and folders: `kebab-case` (e.g., `section-heading.tsx`, `blog.ts`)
- React components: `PascalCase` exports
- Functions and variables: `camelCase`
- Types and interfaces: `PascalCase`
- CSS classes: Tailwind utility classes only — no custom CSS unless absolutely necessary

### Structure
- App routes live in `app/` using the Next.js App Router file conventions (`page.tsx`, `layout.tsx`)
- Reusable UI components live in `components/`
- Data-fetching utilities and shared logic live in `lib/`
- Blog content (Markdown) lives in `content/blog/`
- Static assets live in `public/`

### Error Handling
- Use TypeScript type guards for runtime safety
- Propagate errors to the nearest `error.tsx` boundary
- Validate inputs at system boundaries (API routes, form submissions)
- Never swallow errors silently

## Workflow

- Branch naming: `feat/description`, `fix/description`, `chore/description`
- Commits: Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
- Keep PRs focused on a single concern

### Instruction References
- TypeScript/Next.js guidelines: `.github/instructions/nextjs-typescript.instructions.md`
- Testing: `.github/instructions/testing.instructions.md`
- Security: `.github/instructions/security.instructions.md`
- Documentation: `.github/instructions/documentation.instructions.md`
- Performance: `.github/instructions/performance.instructions.md`
- Code review: `.github/instructions/code-review.instructions.md`
