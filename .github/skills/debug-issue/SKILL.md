---
name: debug-issue
description: Debug a bug or unexpected behavior in this Next.js portfolio/blog
---

# Debug Issue

Systematically debug the provided issue using a four-phase process.

Gather the following before starting:
- **Symptoms**: what is the unexpected behavior? What was expected?
- **Reproduction steps**: how can the issue be reliably triggered?
- **Environment**: local dev, build output, or production?

## Phase 1 — Assessment

- Restate the problem clearly in one sentence
- Identify the component, page, or utility most likely responsible
- List hypotheses ranked by likelihood (consider recent changes first)

## Phase 2 — Investigation

- Trace the execution path from the entry point (route, component, or function) to the failure
- Check `lib/blog.ts` for Markdown processing bugs if the issue involves blog content
- Check `app/` route files and `generateStaticParams` for static generation issues
- Inspect TypeScript types for mismatches that may cause runtime surprises
- Use `console.log` or Next.js DevTools as appropriate; do not leave debug statements in committed code

## Phase 3 — Resolution

- Implement the minimal fix that addresses the root cause
- Do not refactor unrelated code while fixing the bug
- Confirm the fix resolves the symptom without introducing new issues

## Phase 4 — QA

- Write or update a test that would have caught this bug
- Verify the fix across light and dark themes if it is a UI issue
- Check that build and type-check (`tsc --noEmit`) pass cleanly
