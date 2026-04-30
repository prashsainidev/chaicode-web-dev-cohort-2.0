# Backend Engineering - Authentication And Authorization

## Overview

This class extended the REST API project into a more real authentication flow.

Instead of stopping at registration, the backend now moves toward login, logout, protected routes, token handling, password hashing, and user-based access control.

---

## What I Learned

### Auth Flow Expansion

- adding login and logout routes on top of the existing register flow
- mounting auth routes inside the Express app with JSON, URL-encoded, and cookie middleware
- creating a `getMe` route for fetching the current authenticated user

---

### Password And Token Security

- hashing passwords with `bcryptjs` before saving users
- comparing hashed passwords during login
- generating both access tokens and refresh tokens with JWT
- storing refresh token data more safely instead of exposing raw values in normal responses

---

### Protected Routes And Middleware

- using an `authenticate` middleware to read bearer tokens
- attaching the logged-in user to `req.user`
- preparing `authorize` middleware for role-based access control

---

### Verification And Recovery Groundwork

- keeping email verification token logic inside the auth service
- preparing verification and forgot-password related flows
- adding email utility setup so auth features can grow beyond basic login

---

## Practice Highlights

- continued the same backend project from the last two classes
- connected routing, controller, service, model, middleware, and token utilities more clearly
- saw how authentication is built step by step instead of in a single class

---

## Class Resources

Refer to `links.md` for class links, docs, and code references.

---

## Blog

- JWT Authentication in Node.js Explained Simply
- Sessions vs JWT vs Cookies: Understanding Authentication Approaches

---

## Key Takeaways

- authentication is more than just register and login endpoints
- backend security depends on hashing, tokens, middleware, and clear separation of concerns
- real backend systems are built layer by layer across multiple classes

---

> Based on my learning from a structured web development cohort.
