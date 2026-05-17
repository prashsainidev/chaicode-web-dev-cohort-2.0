# Full Stack Development - Part 1

## Overview

This class was held on `16 May 2026`.

This session served as a deep dive into building a robust Full Stack architecture using a **tRPC Monorepo**. The focus was on setting up a scalable, end-to-end type-safe ecosystem where the frontend and backend share types seamlessly without code duplication or manual API contracts.

The folder follows the standard structure:

- `class-code/` contains the `trpc-monorepo-main` workspace.
- `practice/` for my own practice work.
- `class-notes/` contains detailed, human-readable notes on how the tRPC monorepo operates.
- `assignments/` for any class-specific assignment details.

---

## What I Learned

- The conceptual model of a **Monorepo** using Turborepo and pnpm workspaces.
- Why **tRPC** is a game-changer for TypeScript full-stack applications compared to traditional REST or GraphQL.
- Setting up cross-package dependencies (e.g., `apps/web` and `apps/api` depending on shared `packages/`).
- Writing scalable router endpoints with input validation using `Zod`.
- Establishing true end-to-end type safety between a backend API and a React frontend.

---

## Practice Highlights

- Explored the `apps/api` (backend) and `apps/web` (frontend) relationship.
- Navigated through the modular `packages/` directory (`database`, `trpc`, `services`, `logger`).

---

## Assignment

- Assignment details are currently pending.
- Will update the `assignments` folder if a specific follow-up task is assigned.

---

## Class Resources

Refer to `links.md` for:

- Class specific links, including the Eraser whiteboard.
- Official GitHub repository references.

---

## Key Takeaways

- Monorepos allow for immense code reuse (sharing ESLint configs, TypeScript configs, UI components, and database schemas).
- tRPC eliminates the need for manual API type generation (like Swagger/OpenAPI); the client inherently infers the server's exact router types.
