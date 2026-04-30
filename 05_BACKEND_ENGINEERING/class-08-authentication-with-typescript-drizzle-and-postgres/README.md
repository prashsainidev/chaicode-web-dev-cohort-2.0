# Backend Engineering - Authentication With TypeScript, Drizzle And Postgres

## Overview

This class shifts the authentication project into a TypeScript-first backend setup and replaces the earlier Mongoose flow with a Postgres + Drizzle ORM stack.

Instead of continuing the previous Express auth code as-is, this session rebuilds the auth flow with typed request validation, SQL-backed user storage, and a cleaner modular structure.

---

## What I Learned

### Auth Flow In TypeScript

- organizing the backend into `app`, `auth`, `db`, and middleware layers
- creating typed signup, signin, and `me` routes in Express
- validating auth payloads with `zod`

---

### Drizzle And Postgres Setup

- defining a `users` table with `drizzle-orm/pg-core`
- connecting the app through a dedicated database module
- using Drizzle migrations and schema snapshots for SQL workflow

---

### Token And Route Protection

- creating JWT-based auth tokens for signed-in users
- reading bearer tokens through middleware
- protecting `/auth/me` with an authenticated-user guard

---

### Project Tooling

- setting up TypeScript build and watch scripts
- using `drizzle-kit` for schema generation and migrations
- keeping local Postgres setup ready through Docker Compose

---

## Practice Highlights

- moved from a JavaScript + Mongo-style auth setup to a typed SQL-based version
- saw how request validation, schema modeling, and auth middleware connect together
- kept the class structured around a realistic backend folder layout

---

## Class Resources

Refer to `links.md` for class links, reference repo, and code pointers.

---

## Blog

- Related auth foundation drafts:
- JWT Authentication in Node.js Explained Simply
- Sessions vs JWT vs Cookies: Understanding Authentication Approaches

---

## Key Takeaways

- TypeScript makes auth flows easier to reason about as the backend grows
- Drizzle gives a simple typed bridge between application code and Postgres
- authentication structure matters just as much as the route logic itself

---

> Visual diagram link will be updated later.
