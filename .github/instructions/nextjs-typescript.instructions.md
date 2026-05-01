<!-- Based on: https://github.com/github/awesome-copilot/blob/main/instructions/nextjs-tailwind.instructions.md -->
---
applyTo: "**/*.tsx,**/*.ts,**/*.jsx,**/*.js,**/*.css"
description: "Next.js + TypeScript development standards for this portfolio/blog"
---

# Next.js + TypeScript Coding Standards

Apply the repository-wide guidance from `../copilot-instructions.md` to all code.

## General Guidelines

- Use the App Router (`app/` directory) exclusively — never the Pages Router
- Default to React Server Components; only add `'use client'` when interactivity, hooks, or browser APIs are required
- Enable and respect TypeScript strict mode at all times
- Prefer `async`/`await` over `.then()` chains
- Keep modules focused; colocate types, utilities, and components near where they are used

## Architecture

- Group routes by feature within `app/`; use route groups `(group)` to share layouts without affecting URLs
- Implement `error.tsx` and `not-found.tsx` boundaries at appropriate route segments
- Use `loading.tsx` and `<Suspense>` boundaries for async data to improve perceived performance
- Fetch data in Server Components; pass props down rather than fetching in Client Components when possible

## TypeScript

- Prefer explicit return types on exported functions and React components
- Use type guards (`instanceof`, `typeof`, discriminated unions) for runtime safety
- Avoid `any`; use `unknown` and narrow when receiving external data
- Define shared types in dedicated files; export them from `lib/` or colocated `types.ts` files

## Styling

- Use Tailwind CSS utility classes exclusively — no inline styles or custom CSS files unless unavoidable
- Support dark mode via Tailwind's `dark:` variant, consistent with the `next-themes` provider
- Follow a mobile-first responsive approach; use Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`)
- Maintain semantic HTML structure — use correct heading hierarchy, landmarks, and ARIA attributes

## State & Data

- Use React Server Components for server-side data fetching and static generation
- Use React hooks (`useState`, `useReducer`) only in Client Components for local UI state
- Leverage Next.js static generation (`generateStaticParams`) for blog post pages
- Use `revalidatePath` / `revalidateTag` for on-demand revalidation when needed

## Markdown / Blog Content

- Process Markdown files via `lib/blog.ts` only; do not read `content/blog/` directly from components
- Keep front matter fields consistent across all blog posts
- Sanitize any user-supplied or externally sourced HTML before rendering
