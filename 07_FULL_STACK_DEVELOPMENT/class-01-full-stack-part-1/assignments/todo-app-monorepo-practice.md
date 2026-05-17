# Todo App (tRPC Monorepo Practice)

**Section:** Full Stack Development  
**Class:** Full Stack (Part 1)  
**Type:** Personal Practice Assignment
**Added on:** 16 May 2026

---

## 🎯 Objective
This is a **personal practice assignment** given by Sir to help understand the tRPC Monorepo codebase. It is not an official cohort submission or peer review. 

The goal is to build a simple Todo App from scratch within the monorepo architecture to truly understand how `packages` and `apps` talk to each other.

---

## 🛠️ What To Build
You need to implement a full-stack Todo application using the existing Monorepo setup.

### Backend (`packages/trpc` & `packages/database`)
- Create a `Todo` model in your database schema (e.g., `id`, `title`, `completed`, `createdAt`).
- Build a new tRPC router (`todoRouter`) in `packages/trpc`.
- Implement endpoints for:
  - `getTodos` (fetch all)
  - `addTodo` (create new)
  - `toggleTodo` (mark as complete/incomplete)
  - `deleteTodo`

### Frontend (`apps/web`)
- Create a simple React UI to consume your new `todoRouter`.
- The UI should have:
  - An input field to add new tasks.
  - A list of tasks with checkboxes to toggle completion.
  - A delete button for each task.
- **Focus:** Observe the end-to-end type safety. If you change a field in the backend schema, notice how the frontend immediately throws a TypeScript error!

---

## 📝 Rules & Scope
- **Where to build:** Build this directly inside the `class-code/trpc-monorepo-main` structure (or your `practice/` clone of it) to understand how the `workspace:*` dependencies work.
- **Styling:** Keep the UI simple. The main focus of this assignment is mastering the tRPC architecture, not the CSS.
