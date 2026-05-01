---
name: setup-component
description: Create a new React component or page for this Next.js portfolio/blog following project conventions
---

# Setup Component

Create a new React component or Next.js page for this portfolio/blog. Always follow the repository's established patterns.

Ask for the following if not provided:
- **Component name** (PascalCase)
- **Type**: UI component (`components/`) or route page (`app/`)
- **Rendering mode**: Server Component (default) or Client Component (needs interactivity)

## Requirements

- Use the existing file-naming convention: `kebab-case.tsx` for the file, `PascalCase` for the export
- Place UI components in `components/`, page routes in `app/`
- Default to React Server Component; only add `'use client'` if the component needs hooks, event handlers, or browser APIs
- Style exclusively with Tailwind CSS utility classes — no inline styles or custom CSS
- Support dark mode using Tailwind's `dark:` variant, consistent with the `next-themes` provider already in the project
- Use TypeScript with explicit prop types; no implicit `any`
- For page components, add metadata using the Next.js Metadata API
- Follow the semantic HTML structure and heading hierarchy used in existing pages
- Reference `components/section-heading.tsx`, `components/button-link.tsx`, and `components/navbar.tsx` for established patterns before creating new primitives
