# Class 07 Worklog

Date: 2026-04-19
Class: Authentication And Authorization

## Folder Rule

- `../class-code/` = original class snapshot
- `./class-code-continuation/` = separate continuation copy for practice and completion
- original class code should stay untouched
- all new work for this class should happen inside `practice/class-code-continuation/`

## Baseline Received From Class

The original class snapshot already contains:

- auth register route
- auth login route
- refresh token flow
- logout flow
- verify email route
- forgot password route
- reset password route
- `getMe` route
- auth middleware
- JWT utility helpers
- MongoDB connection file
- mail utility file

## Current Review

### Already completed in practice copy

- fixed `ApiError.forbidden()` to return `403`
- replaced `notfound()` with `notFound()` returning `404`
- added missing `ApiError` import in `src/app.js`
- added sample admin-only route: `GET /api/auth/admin-dashboard`
- added central error middleware for clean JSON error responses
- added complete `env.example` for local setup
- added practical route testing order in this worklog

## What Still Looks Pending

### Runtime / code issues

- no major obvious runtime blocker is left from the first review
- full end-to-end verification is still pending because local `.env`, MongoDB, and SMTP are manual steps
- admin route is added, but public register DTO does not allow `admin` role by default
  - to test admin route, role must be updated manually in MongoDB or an admin user must already exist

### Manual setup still required

- MongoDB connection
- `.env` creation
- JWT secret values
- SMTP / Mailtrap setup for email testing
- full route testing in Postman or Bruno

## Manual Setup Checklist

Use `practice/class-code-continuation/env.example` as the base file.

Steps:

1. go inside `class-code-continuation/`
2. create `.env`
3. copy all values from `env.example`
4. replace JWT secrets with your own values
5. replace SMTP values with Mailtrap or your SMTP provider values
6. make sure MongoDB is running before starting the server

Reference values:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/cohort-auth
JWT_ACCESS_SECRET=replace_me
JWT_REFRESH_SECRET=replace_me
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=replace_me
SMTP_PASS=replace_me
SMTP_FROM_NAME=Backend Practice
SMTP_FROM_EMAIL=test@example.com
```

## Run Commands

Inside `practice/class-code-continuation/`:

```bash
npm install
npm run dev
```

If Docker Mongo is needed later, this class already has docker scripts in `package.json`, but right now the simplest path is local MongoDB or Atlas connection through `MONGODB_URI`.

## Route Testing Order

Base URL:

```txt
http://localhost:5000/api/auth
```

Recommended order:

1. `POST /register`
   - body:
   ```json
   {
     "name": "Prashant",
     "email": "prashant@example.com",
     "password": "12345678",
     "role": "customer"
   }
   ```

2. `GET /verify-email/:token`
   - token email link se milega
   - if SMTP is not active, token MongoDB me `verificationToken` ke hashed form me store hota hai, so best testing path email delivery ke through hi hai

3. `POST /login`
   - same email/password use karo
   - response me `accessToken` milega
   - refresh token cookie me set hoga

4. `GET /me`
   - header:
   ```txt
   Authorization: Bearer <accessToken>
   ```

5. `POST /refresh-token`
   - cookie required

6. `POST /forgot-password`
   - body:
   ```json
   {
     "email": "prashant@example.com"
   }
   ```

7. `PUT /reset-password/:token`
   - body:
   ```json
   {
     "password": "newpassword123"
   }
   ```

8. `GET /admin-dashboard`
   - header:
   ```txt
   Authorization: Bearer <accessToken>
   ```
   - only works when logged-in user role is `admin`
   - since register DTO does not allow `admin`, test this after manually updating the user role in MongoDB

## Practice Order

1. create `.env`
2. connect MongoDB
3. test register
4. test verify email
5. test login
6. test `/me`
7. test refresh token
8. test forgot password
9. test reset password
10. manually set one user role to `admin`
11. test `/admin-dashboard`

## Current Status

- practice continuation folder created
- original class snapshot preserved
- next step:
  - create `.env`
  - connect MongoDB
  - test auth flow end to end
