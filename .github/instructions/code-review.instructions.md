---
applyTo: "**"
description: "Code review standards for the portfolio/blog project"
---

# Code Review Standards

Apply the repository-wide guidance from `../copilot-instructions.md` to all reviews.

## General Guidelines

- Review code as a collaborator, not a gatekeeper — the goal is shared understanding and quality
- Focus comments on the code, not the author
- Distinguish between blocking issues (correctness, security, breaking changes) and suggestions (style, refactoring)
- Approve PRs that are correct and safe even if you would have done something differently

## What to Check

### Correctness
- Does the code do what the PR description says it does?
- Are edge cases handled (empty arrays, null values, network failures)?
- Do all changed and new files have corresponding type annotations?

### Security
- Are user inputs validated and sanitized?
- Are secrets kept out of the codebase and client bundles?
- Are error responses generic (no internal details leaked to clients)?

### Performance
- Are new components Server Components by default, with `'use client'` only where needed?
- Are images using `next/image` with correct `width`, `height`, and `alt`?
- Are large dependencies loaded lazily or limited to server-side usage?

### Maintainability
- Is the code readable without needing excessive comments to explain it?
- Are functions and components focused on a single responsibility?
- Does the change follow the existing naming and file-structure conventions?

### Tests
- Are new utility functions and components covered by tests?
- Do tests verify observable behavior rather than implementation details?

## PR Conventions

- Keep PRs focused on a single concern; break large changes into smaller sequential PRs when possible
- Write a clear PR description: what changed, why, and any deployment considerations
- Link related issues in the PR description
- Resolve all CI failures before requesting review

## Review Etiquette

- Leave actionable, specific feedback — not vague suggestions like "this could be better"
- Use `nit:` prefix for non-blocking style preferences
- Re-review promptly after requested changes are made
