---
applyTo: "**/*.test.ts,**/*.test.tsx,**/*.spec.ts,**/*.spec.tsx"
description: "Testing standards for the portfolio/blog project"
---

# Testing Standards

Apply the repository-wide guidance from `../copilot-instructions.md` to all test code.

## General Guidelines

- Write tests to verify behavior, not implementation details
- Prefer colocating test files next to the code they test (e.g., `component.test.tsx` beside `component.tsx`)
- Keep individual tests focused on a single assertion or behavior
- Use descriptive test names that read as plain-English sentences

## Testing Strategy

- **Unit tests**: cover pure utility functions in `lib/` (e.g., `blog.ts`, `utils.ts`) with edge cases
- **Component tests**: use React Testing Library to test components from a user's perspective — query by role, label, and text, not by class or implementation internals
- **Integration tests**: validate that page-level Server Components render correct output given known content fixtures
- Aim for meaningful coverage of critical paths; avoid testing trivial getters or generated boilerplate

## Tooling

- Use Vitest (or Jest) as the test runner; align with whatever the project's `package.json` specifies
- Use React Testing Library (`@testing-library/react`) for component tests
- Mock external dependencies at the module boundary, not inside implementation code

## Naming & Structure

- Name test files `*.test.ts` or `*.test.tsx` and keep them beside the source file
- Group related tests with `describe` blocks; use `it` or `test` for individual cases
- Name variables in tests to reflect their role (e.g., `mockPost`, `renderedHeading`)

## Code Quality in Tests

- Do not duplicate production logic inside tests — test the exported function, not a re-implementation
- Clean up side effects (mocks, timers, DOM mutations) in `afterEach` or `afterAll`
- Avoid snapshot tests for frequently changing UI; prefer explicit assertions
