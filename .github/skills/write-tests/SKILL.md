---
name: write-tests
description: Generate tests for a utility function, React component, or page in this Next.js portfolio/blog
---

# Write Tests

Generate tests for a utility function, React component, or page in this project. Always follow the repository's established testing patterns.

Ask for the following if not provided:
- **Target file or function** to test
- **Testing scope**: unit (pure function), component (React), or integration (page render)

## Requirements

- Follow the testing standards in `.github/instructions/testing.instructions.md`
- Place test files beside the source file with a `.test.ts` or `.test.tsx` extension
- Use React Testing Library for component tests — query by role, label, and text, not by class names or internal state
- Use descriptive `it`/`test` names that read as plain-English sentences
- Cover happy path, edge cases (empty/null inputs), and error states
- Test the `lib/blog.ts` utilities with representative Markdown fixture data
- Do not duplicate production logic inside tests
- Clean up any mocks or side effects in `afterEach`
