# Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-0F172A?style=for-the-badge&logo=tailwindcss)
![Markdown Blog](https://img.shields.io/badge/Blog-Markdown-111827?style=for-the-badge&logo=markdown)

A modern portfolio and writing site built with Next.js App Router, TypeScript, Tailwind CSS, and a markdown-powered blog pipeline.

## Overview

- Portfolio pages for about, projects, contact, and homepage sections.
- Static blog generation from markdown files in `content/blog`.
- Theme support with `next-themes`.
- Syntax-highlighted blog content processed through the unified ecosystem.

## Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js App Router, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | Markdown, gray-matter, reading-time |
| Rendering | Static generation with route-based pages |
| Theme | next-themes |

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev    # Start the local development server
npm run build  # Create the production build
npm run start  # Run the production server
npm run lint   # Run Next.js linting
```

## Project Map

| Path | Purpose |
| --- | --- |
| `app/` | App Router pages, layout, sitemap, robots, and route handlers |
| `components/` | Reusable UI such as navigation, hero blocks, and theme controls |
| `content/blog/` | Markdown blog posts |
| `lib/blog.ts` | Blog parsing, front matter validation, reading time, and HTML generation |
| `lib/data.ts` | Portfolio data for projects, skills, and experience |
| `public/` | Static assets |

## Update Site Content

Use the existing content sources instead of hardcoding page text:

- Update portfolio data in `lib/data.ts`.
- Update route copy and page sections in `app/`.
- Update shared UI in `components/`.
- Add or edit blog posts in `content/blog/`.

## Add And Update Blogs

Blog posts live in `content/blog/` as `.md` files. The file name becomes the slug, so `content/blog/my-post.md` is published at `/blog/my-post`.

### Front Matter Format

Each post should start with this schema:

```md
---
title: "Your Post Title"
date: "2026-05-10"
tags: ["Architecture", "TypeScript"]
description: "A short summary used in blog lists and metadata."
---
```

### Create A New Post

1. Add a new markdown file inside `content/blog/`.
2. Use a kebab-case file name for the slug.
3. Add the required front matter.
4. Write the post body in Markdown.
5. Run `npm run build` to confirm the post is parsed correctly.

### Update An Existing Post

1. Open the relevant file in `content/blog/`.
2. Edit the front matter if the title, date, tags, or description changed.
3. Update the markdown body.
4. Rebuild the site to verify the page still renders.

### Blog Authoring Notes

- Posts are sorted by `date` in descending order.
- Reading time is calculated automatically from the markdown body.
- Code blocks are syntax highlighted during content processing.
- Keep image alt text meaningful when embedding images in posts.

## Content Pipeline

The blog loader in `lib/blog.ts` does the following:

1. Reads markdown files from `content/blog/`.
2. Parses front matter with `gray-matter`.
3. Computes reading time.
4. Converts Markdown to HTML with `remark` and `rehype`.
5. Sorts posts by publication date.

## Local Workflow

```bash
npm run dev
npm run build
```

Use the development server for iteration and the production build as the final verification pass before shipping content or UI changes.
