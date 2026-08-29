# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Start local dev server (http://localhost:3000)
npm run build  # Production build — also the way to validate that new blog posts parse correctly
npm run start  # Run the production build
npm run lint   # next lint (extends next/core-web-vitals)
```

There is no test runner configured (no test files, no Vitest/Jest dependency), despite `.github/instructions/testing.instructions.md` describing a Vitest/RTL strategy for if/when tests are added. Verification currently happens via `npm run build` and `npm run lint`.

## Architecture

Next.js 15 App Router site (React 19, TypeScript strict, Tailwind CSS) with two content sources feeding the pages:

- **`lib/data.ts`** — hardcoded portfolio data (projects, skillGroups, experiences) consumed directly by page components (`app/about`, `app/projects`, `app/page.tsx`). Edit this file to update portfolio content; don't hardcode it into components.
- **`lib/blog.ts`** — the only module allowed to touch `content/blog/`. It reads markdown files, parses front matter with `gray-matter`, computes reading time, and converts markdown → HTML through a unified/remark/rehype pipeline (`remark-parse` → `remark-rehype` → `rehype-highlight` → `rehype-stringify`). Components and pages must go through this module rather than reading `content/blog/` directly. Key exports: `getBlogSlugs`, `getBlogPostMeta`, `getBlogPost(slug)`, `getAllBlogPosts()`.
- **`app/rss.xml/route.ts`** and **`app/sitemap.ts`** both derive from the blog data, so any change to the frontmatter schema or slug logic in `lib/blog.ts` has to stay consistent with those consumers too.

Blog posts are markdown files in `content/blog/*.md`; filename (kebab-case) is the slug and becomes the route `app/blog/[slug]`. Required front matter:

```md
---
title: "Your Post Title"
date: "2026-05-10"
tags: ["Architecture", "TypeScript"]
description: "A short summary used in blog lists and metadata."
---
```

Posts are sorted by `date` descending. After adding/editing a post, run `npm run build` to confirm it parses.

Root layout (`app/layout.tsx`) wires up `next/font` (Plus Jakarta Sans + Space Grotesk as CSS variables), the `ThemeProvider` (`next-themes`, class-based dark mode, see `tailwind.config.ts` color tokens driven by CSS vars), and the persistent `Navbar`/`Footer` shell around `{children}`.

## Conventions

(From `.github/copilot-instructions.md` and `.github/instructions/*.instructions.md` — read those for full detail; highlights below.)

- Files/folders: `kebab-case`. Components: `PascalCase` exports. Types/interfaces: `PascalCase`. Functions/vars: `camelCase`.
- App Router only — never Pages Router. Default to Server Components; add `'use client'` only when hooks/interactivity/browser APIs are required.
- Tailwind utility classes only; no custom CSS/inline styles unless unavoidable. Dark mode via the `dark:` variant, consistent with `ThemeProvider`.
- Avoid `any`; use `unknown` and narrow. Prefer explicit return types on exported functions/components.
- Use `next/image` for images (width/height/alt), `next/font` for fonts — never load fonts outside `layout.tsx`.
- Conventional commits (`feat:`, `fix:`, `docs:`, `chore:`); branch names `feat/description`, `fix/description`, `chore/description`.
