---
name: refactor-code
description: Refactor existing code in this Next.js portfolio/blog to improve readability and maintainability without changing behavior
---

# Refactor Code

Refactor the provided code to improve readability, reduce complexity, or align with project conventions — without changing observable behavior.

Ask for the following if not provided:
- **Target file or function** to refactor
- **Goal**: simplification, naming improvements, convention alignment, or other

## Requirements

- **No behavior changes**: the refactored code must produce identical outputs for identical inputs
- **Incremental steps**: make one focused change at a time; do not combine multiple unrelated improvements
- Before refactoring, verify the target has test coverage. If not, suggest writing tests first
- Align with conventions in `.github/instructions/nextjs-typescript.instructions.md`:
  - Prefer RSC over Client Components where possible
  - Replace `any` types with accurate TypeScript types
  - Use Tailwind utilities; remove any inline styles
  - Extract repeated patterns into shared components only if used in 3+ places

## Output Format

1. Summarize the specific smell or issue being addressed
2. Show the refactored code
3. Explain what changed and why
4. Note any follow-up refactors that were intentionally deferred
