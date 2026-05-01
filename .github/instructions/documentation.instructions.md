---
applyTo: "**/*.md,**/*.mdx"
description: "Documentation standards for the portfolio/blog project"
---

# Documentation Standards

Apply the repository-wide guidance from `../copilot-instructions.md` to all documentation.

## General Guidelines

- Write documentation for humans first; be concise and direct
- Keep documentation close to the code it describes — prefer inline comments and colocated README files over a separate docs folder
- Update documentation in the same PR as the code change it describes

## Code Comments

- Add comments to explain *why* something is done, not *what* — the code itself shows the what
- Mark non-obvious workarounds or temporary hacks with `// TODO:` or `// HACK:` and a brief explanation
- Avoid commenting out dead code; delete it and rely on version control history

## Component & Function Documentation

- Document exported functions and React components with a brief description of their purpose and any non-obvious parameters
- Do not add JSDoc blocks to every function by default; reserve them for public-facing utilities in `lib/`
- Keep prop descriptions concise; let TypeScript types carry the structural information

## Blog Content

- Write blog posts in Markdown following the front matter schema defined by `lib/blog.ts`
- Use clear heading hierarchy (`#` → `##` → `###`) — do not skip levels
- Include meaningful `alt` text on all images embedded in Markdown

## README & Project-Level Docs

- Maintain the root `README.md` with: project overview, local setup steps, and a brief architecture description
- Document any environment variables in `.env.example` with a comment explaining each variable's purpose
