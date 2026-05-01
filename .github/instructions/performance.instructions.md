<!-- Inspired by: https://github.com/github/awesome-copilot/blob/main/instructions/nextjs-tailwind.instructions.md -->
---
applyTo: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx"
description: "Performance optimization guidelines for the portfolio/blog project"
---

# Performance Standards

Apply the repository-wide guidance from `../copilot-instructions.md` to all code.

## General Guidelines

- Optimize for Core Web Vitals (LCP, INP, CLS) as the primary performance targets
- Prefer static generation over server-side rendering; use `generateStaticParams` for all blog post pages
- Measure before optimizing — avoid premature optimization of non-critical paths

## Images & Media

- Use `next/image` for all images; always provide `width`, `height`, and meaningful `alt` attributes
- Supply responsive `sizes` hints on images that span varying layout widths
- Use modern image formats (WebP, AVIF) via Next.js's built-in image optimization
- Avoid large hero images without lazy loading or blur placeholders

## Fonts & CSS

- Load all fonts via `next/font` at the layout level to eliminate render-blocking requests
- Avoid importing large third-party CSS libraries; prefer Tailwind utilities
- Minimize global CSS; scope styles with Tailwind utility classes

## JavaScript & Bundle Size

- Default to React Server Components to keep client bundle small
- Split code by route automatically via the App Router; avoid importing large libraries into Client Components unnecessarily
- Tree-shake unused exports; prefer named imports over namespace imports
- Use `dynamic()` with `{ ssr: false }` only when a module truly requires the browser environment

## Data Fetching & Caching

- Cache static data at build time with `generateStaticParams` and `export const revalidate`
- Use `revalidateTag` / `revalidatePath` for targeted on-demand revalidation rather than full rebuilds
- Avoid waterfalls: fetch independent data in parallel using `Promise.all` where possible

## SEO & Metadata

- Use the Next.js Metadata API in `layout.tsx` and `page.tsx` to provide accurate `<title>` and `<meta>` tags
- Generate Open Graph and Twitter card metadata for all blog posts
- Include a `sitemap.ts` (already present) and keep it accurate
