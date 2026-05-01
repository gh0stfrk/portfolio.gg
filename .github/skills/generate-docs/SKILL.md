---
name: generate-docs
description: Generate or update documentation for a utility, component, or page in this Next.js portfolio/blog
---

# Generate Documentation

Generate or update documentation for the specified code. Follow the project's documentation standards.

Ask for the following if not provided:
- **Target**: file, function, or component to document
- **Type**: code comment, README section, or blog front matter

## Requirements

- Follow the documentation standards in `.github/instructions/documentation.instructions.md`
- Explain *why* — not just *what* — the code does; the code itself shows the what
- For exported functions and components in `lib/`, add concise JSDoc with `@param` and `@returns` where useful
- For React components, document non-obvious props only; let TypeScript types carry the structural details
- For blog posts (`content/blog/*.md`), ensure the front matter matches the schema defined in `lib/blog.ts`
- For README updates, follow the existing structure: overview → setup → architecture
- Keep all documentation concise; avoid re-stating what TypeScript types already express

## Output Format

Provide the documentation inline with the code or as a standalone Markdown block, whichever fits the target. Briefly explain any decisions made (e.g., why a parameter was documented with extra detail).
