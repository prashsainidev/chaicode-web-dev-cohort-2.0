# Class References

## Class Info

- Section: Backend Engineering
- Class Name: Authentication with TypeScript, Drizzle and Postgres
- Class Date: Sunday, March 29, 2026

---

## Notes

- Visual diagram link will be updated later
- Extra handwritten or external notes can be added here later if needed

Status: In progress

---

## Class Code

- Main code lives inside `class-code/`
- App entry is `class-code/src/index.ts`
- Express app factory is in `class-code/src/app/index.ts`
- Auth routes, controller, models, and token utils are inside `class-code/src/app/auth/`
- Database connection and schema live in `class-code/src/db/`
- Middleware for auth token parsing is in `class-code/src/app/middleware/auth-middleware.ts`

Status: Completed

---

## Resources

- Reference Repo -> [Open GitHub](https://github.com/piyushgarg-dev/chaicode-authentication)
- TypeScript Docs -> [Open Docs](https://www.typescriptlang.org/docs/)
- Express Docs -> [Open Docs](https://expressjs.com/)
- Drizzle ORM Docs -> [Open Docs](https://orm.drizzle.team/docs/overview)
- Drizzle Kit Docs -> [Open Docs](https://orm.drizzle.team/docs/drizzle-kit-overview)
- PostgreSQL Docs -> [Open Docs](https://www.postgresql.org/docs/)
- Zod Docs -> [Open Docs](https://zod.dev/)
- JWT Package -> [Open Package](https://github.com/auth0/node-jsonwebtoken)

Status: Completed

---

## Assignment

- Suggested practice: add password hashing with a stronger dedicated password library
- Suggested practice: move JWT secret and port values to environment variables
- Suggested practice: add refresh token, logout, and email verification flow on top of this codebase

Status: In progress

---

## Blog

- JWT Authentication in Node.js Explained Simply
- Draft File: [Open Draft](https://github.com/prashsainidev/chaicode-web-dev-cohort-2.0/blob/main/43_BLOGS/drafts/14-api-design-and-authentication/51-jwt-authentication-in-nodejs-explained-simply.md)
- Published Blog: [Read Published Blog](https://prashsainidev.hashnode.dev/jwt-authentication-nodejs)
- Published Link: Not published yet
- Sessions vs JWT vs Cookies: Understanding Authentication Approaches
- Draft File: [Open Draft](https://github.com/prashsainidev/chaicode-web-dev-cohort-2.0/blob/main/43_BLOGS/drafts/14-api-design-and-authentication/52-sessions-vs-jwt-vs-cookies-understanding-authentication-approaches.md)
- Published Blog: [Read Published Blog](https://prashsainidev.hashnode.dev/sessions-vs-jwt-vs-cookies)
- Published Link: Not published yet

Status: In progress

---

## Masterji

- Task status not documented yet

Status: In progress

---

## Extra Notes

- This class introduces a new TypeScript + Drizzle + Postgres auth setup instead of extending the previous Mongoose codebase directly
- Docker Compose and Drizzle files are already included inside `class-code/`
