---
title: "Static Content with Next.js"
date: "2026-02-11"
tags: ["Next.js", "Markdown", "SEO"]
description: "Markdown content and static generation are still a strong pairing for fast technical sites."
---

For a developer portfolio or technical blog, static generation is often the right default. The content changes intentionally, pages load quickly, and deployments stay simple.

The shape is straightforward:

1. Store posts as markdown files.
2. Parse frontmatter for metadata.
3. Generate a route for each slug.
4. Render HTML with a controlled markdown pipeline.

This keeps writing close to the codebase while still giving every post its own metadata, URL, and reading experience.

The important part is not the tooling by itself. It is the editorial workflow: make it easy to write, review, and publish without turning the portfolio into a CMS project.
