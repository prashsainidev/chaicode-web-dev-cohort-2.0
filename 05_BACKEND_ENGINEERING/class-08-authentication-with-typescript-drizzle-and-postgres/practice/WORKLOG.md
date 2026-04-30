# Class 08 Worklog

Date: 2026-04-19
Class: Authentication With TypeScript, Drizzle And Postgres

## Folder Rule

- `../class-code/` = original class snapshot
- `./class-code-continuation/` = separate continuation copy for practice and completion
- original class code should stay untouched
- all new work for this class should happen inside `practice/class-code-continuation/`

## Baseline Received From Class

The original class snapshot already contains:

- TypeScript Express app
- `/auth/sign-up`
- `/auth/sign-in`
- `/auth/me`
- Drizzle database module
- `users` schema
- token utility
- bearer-token auth middleware
- Docker compose for Postgres
- migration files in `drizzle/`

## What Still Looks Pending

### Code / project gaps

- no `env.example` file was present in the original class snapshot
- `src/index.ts` uses hardcoded port `8080` instead of env-based port
- no centralized error-handling structure is visible yet
- full local verification is still pending because Postgres and `DATABASE_URL` setup are manual
- token utility uses a hardcoded JWT secret in the original class snapshot
- auth middleware needed a small control-flow fix when no `Authorization` header is present

### Manual setup still required

- Docker Desktop / local Postgres
- `.env` creation
- `DATABASE_URL`
- Drizzle migration run
- route testing

### Current local blocker

- `npm install` is currently failing in the practice continuation copy
- visible errors:
  - `ENOENT` for `esbuild.exe`
  - `EBUSY` / `EPERM` while cleaning or reinstalling `node_modules`
- meaning:
  - local `node_modules` state is broken or locked on Windows
  - because of that, build verification is blocked even though the current code-side fixes are already applied

### Self-fix steps for later

1. close any running terminal, dev server, or editor process using this folder
2. delete `practice/class-code-continuation/node_modules`
3. run `npm install` again
4. if it still fails, delete `package-lock.json` and rerun `npm install`
5. after install succeeds, run:
   - `npm run build`
   - `docker compose up -d`
   - `npm run db:migrate`

## Manual Setup Checklist

Use `practice/class-code-continuation/env.example` as the base file.

Steps:

1. go inside `practice/class-code-continuation/`
2. create `.env`
3. copy values from `env.example`
4. start Postgres using Docker
5. run migration
6. start the TypeScript server

## Run Commands

Inside `practice/class-code-continuation/`:

```bash
npm install
docker compose up -d
npm run db:migrate
npm run dev
```

## Route Testing Order

Base URL:

```txt
http://localhost:8080/auth
```

Recommended order:

1. `POST /sign-up`
2. `POST /sign-in`
3. `GET /me` with `Authorization: Bearer <token>`

## Current Status

- practice continuation folder created
- original class snapshot preserved
- added worklog for setup and tracking
- added `env.example`
- updated server port to read from env first
- updated token utility to read `JWT_SECRET` from env
- fixed auth middleware so public routes continue cleanly without auth header
- added invalid-token response in auth middleware
- install/build verification is currently blocked by local `esbuild` / `node_modules` issue
- next step:
  - fix local dependency install issue
  - then rerun build and migration commands
