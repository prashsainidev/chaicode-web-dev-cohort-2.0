# Demystifying the tRPC Monorepo

*Notes from Full Stack Development Part 1 (May 16, 2026)*

Hey! If you are reading this, you are probably trying to wrap your head around one of the most powerful full-stack architectures we have in the TypeScript ecosystem today: **The tRPC Monorepo**. 

As a student learning full-stack development, keeping API contracts in sync and managing duplicate types across the frontend and backend seemed overwhelming. This class introduced a much cleaner way to solve this. I've broken down what I learned here in a beginner-friendly way—structured like how a senior teacher would explain it—so it's super easy for anyone to understand.

---

## 1. The "Why" Behind the Architecture

Before we look at the code, we need to understand *why* we are doing this.

### What is a Monorepo?
A monorepo (Monolithic Repository) doesn't mean a monolithic application. It simply means housing multiple distinct projects (like a React frontend, a Node.js backend, and a shared database schema) inside a **single Git repository**. 

**The Core Problem Solved:** 
Usually, we build `my-app-frontend` and `my-app-backend` as separate projects. If we add a new field to the database, we have to manually update our frontend TypeScript interfaces so they don't break. With a monorepo (powered by `Turborepo` and `pnpm workspaces` in our case), both projects share the exact same source of truth. If the backend changes a type, the frontend immediately shows a red error line in VSCode telling us what to fix. It saves so much debugging time!

### What is tRPC?
tRPC stands for *TypeScript Remote Procedure Call*. 
Traditional APIs (REST or GraphQL) require a middleman to share types (like OpenAPI/Swagger generation or GraphQL codegen). tRPC says: *"If both your client and server are written in TypeScript, why not just export the server's type definitions directly and let the client import them?"*

You get **End-to-End Type Safety** without any code generation steps.

---

## 2. Breaking Down the Workspace

When you open `class-code/trpc-monorepo-main`, you'll see two main folders: `apps/` and `packages/`. This structure is intentional and highly scalable.

### `apps/` (The Consumers)
These are the deployable applications. They consume the logic built inside your `packages`.
- **`apps/api`**: Your backend server (usually Express, Fastify, or a serverless function). This is where the tRPC server lives and responds to requests.
- **`apps/web`**: Your frontend application (React, Next.js, Vite). This is the client that makes calls to your API.

### `packages/` (The Building Blocks)
These are the shared libraries. They are *not* deployed on their own, but are imported by your `apps`.
- **`packages/database`**: Contains your ORM setup (like Prisma or Drizzle) and database schemas. Both the API (to query data) and the Web app (for type references) can import from here.
- **`packages/trpc`**: This is the magic bridge! It contains your tRPC routers, context setup, and API endpoints. 
- **`packages/services`**: Shared business logic or external integrations (like sending emails).
- **`packages/eslint-config` & `typescript-config`**: Shared configuration. Instead of managing 5 different `tsconfig.json` files, you define the rules once here and extend them everywhere else.

---

## 3. How the Magic Happens (The Workflow)

Let's trace how a piece of data moves from the backend to the frontend seamlessly.

### Step 1: Defining the Route (Backend)
Inside `packages/trpc`, you define a router and an endpoint. We use **Zod** to validate the input.

```typescript
// packages/trpc/src/routers/user.ts
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const userRouter = router({
  getUserById: publicProcedure
    .input(z.object({ id: z.string() })) // Validation!
    .query(async ({ input, ctx }) => {
      // Fetch from DB using ctx.db
      const user = await ctx.db.user.findUnique({ where: { id: input.id } });
      return user; 
    }),
});
```

### Step 2: Exporting the AppRouter Type
We combine all our smaller routers into one massive `AppRouter` type and export **only the type**. We are not shipping server code to the browser!

```typescript
// packages/trpc/src/index.ts
export const appRouter = router({
  user: userRouter,
  // ...other routers
});

// THIS IS THE CRITICAL LINE
export type AppRouter = typeof appRouter;
```

### Step 3: Consuming on the Frontend
Inside `apps/web`, we setup the tRPC client using the `AppRouter` type we just exported.

```tsx
// apps/web/src/components/UserProfile.tsx
import { trpc } from "../utils/trpc"; // Configured with <AppRouter>

export function UserProfile({ id }) {
  // 1. Autocomplete works for "user.getUserById"
  // 2. TypeScript knows `id` must be a string (because of Zod!)
  // 3. `data` is fully typed based on what the server returned.
  const { data, isLoading } = trpc.user.getUserById.useQuery({ id });

  if (isLoading) return <div>Loading...</div>;
  
  // No manual interfaces needed. `data.name` is known to exist.
  return <h1>{data.name}</h1>;
}
```

---

## 4. Key Takeaways for Beginners

1. **Turborepo is for caching and orchestration.** Running `pnpm build` will use Turborepo to figure out the dependency graph (e.g., build the database package *before* building the API app). If a package hasn't changed, Turbo pulls the build from cache, saving massive amounts of CI/CD time.
2. **Strict Boundaries.** Keep your UI components in a shared package if you plan to introduce a mobile app later. Keep database logic strictly in the database package.
3. **The Developer Experience (DX) is unmatched.** Refactoring a database column name in the backend will immediately highlight the exact lines of code in the React frontend that need updating. That level of confidence is why industry leaders are moving to this stack.

---

## Final Thoughts
This class showed us that building full-stack apps isn't just about writing code; it's about **architecting for maintainability**. By mastering the tRPC + Turborepo stack, you eliminate entire classes of bugs (API mismatches, outdated swagger docs, duplicate types) before your code even runs.

*Now, go dive into the `class-code` and explore how `package.json` links these workspaces together using `"workspace:*"` dependencies!*
