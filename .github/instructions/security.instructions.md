<!-- Inspired by: https://github.com/github/awesome-copilot/blob/main/instructions/nextjs-tailwind.instructions.md -->
---
applyTo: "**/*.ts,**/*.tsx,**/*.js,**/*.jsx"
description: "Security best practices for the portfolio/blog project"
---

# Security Standards

Apply the repository-wide guidance from `../copilot-instructions.md` to all code.

## General Guidelines

- Follow OWASP Top 10 principles throughout the codebase
- Never trust user-supplied data; validate and sanitize at every system boundary
- Store secrets exclusively in environment variables — never hard-code them in source files
- Keep dependencies up to date and audit with `npm audit` regularly

## Input Validation & Sanitization

- Validate all inputs at API route handlers and form submission handlers before processing
- Sanitize any externally sourced HTML (e.g., Markdown-rendered content) before injecting into the DOM
- Use allowlists rather than blocklists when validating structured data
- Reject requests that do not match expected shape before any business logic executes

## Authentication & Authorization

- Protect any server actions or API routes that mutate data with proper authentication checks
- Use middleware (`middleware.ts`) to enforce route-level access control
- Never expose session tokens, API keys, or credentials in client-side bundles or error messages
- Prefer short-lived tokens and server-side session storage

## API Routes & Server Actions

- Return generic error messages to clients; log detailed errors server-side only
- Set appropriate HTTP status codes and response headers (e.g., `Content-Security-Policy`)
- Limit accepted content types and response sizes where applicable
- Avoid exposing internal stack traces or system paths in production responses

## Dependencies

- Prefer well-maintained packages with a strong security track record
- Pin dependency versions and review changelogs before upgrading
- Remove unused dependencies promptly

## Environment & Configuration

- Use `.env.local` for local secrets; never commit `.env*` files containing real credentials
- Document all required environment variables in `.env.example` with placeholder values
