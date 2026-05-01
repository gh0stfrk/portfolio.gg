---
name: code-review
description: Review code changes in this Next.js portfolio/blog for correctness, security, performance, and maintainability
---

# Code Review

Review the provided code or diff against the project's standards. Flag blocking issues and offer concrete suggestions.

## Review Checklist

### Correctness
- Does the code behave as described? Are edge cases handled?
- Are TypeScript types accurate? No use of `any` without justification?

### Security
- Are inputs validated before use? Is user-generated content sanitized before rendering?
- Are secrets stored in environment variables, not source code?
- Are error responses free of internal implementation details?

### Performance
- Are new components Server Components by default?
- Are images using `next/image` with `width`, `height`, and `alt`?
- Are large third-party libraries kept out of Client Components?

### Maintainability
- Does the code follow `kebab-case` file names and `PascalCase` component exports?
- Are components placed in the correct directory (`components/` vs `app/`)?
- Is styling done exclusively with Tailwind utilities? Dark mode supported via `dark:` variant?
- Is the markdown processing going through `lib/blog.ts` only?

### Tests
- Do new utilities and components have corresponding tests?
- Do tests verify behavior, not implementation details?

## Output Format

For each issue found:
1. **Severity**: Blocking / Suggestion / Nit
2. **Location**: file and line number
3. **Issue**: what is wrong or could be improved
4. **Recommendation**: specific fix or alternative
