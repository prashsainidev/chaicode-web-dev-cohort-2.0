# Assignment - Authentication And Authorization

## Goal

Complete the unfinished authentication flow inside the same backend codebase.

Do the work inside `class-code/` and keep following the same structure already used in this class.

---

## Suggested Tasks

### 1. Complete Email Verification Flow

Target files:
- `class-code/src/modules/auth/auth.routes.js`
- `class-code/src/modules/auth/auth.controller.js`
- `class-code/src/modules/auth/auth.service.js`

What to do:
- connect `/verify-email/:token` to a proper verify-email controller
- call `authService.verifyEmail(token)` from the controller
- return a success response after verification

---

### 2. Add Refresh Token Route

Target files:
- `class-code/src/modules/auth/auth.routes.js`
- `class-code/src/modules/auth/auth.controller.js`
- `class-code/src/modules/auth/auth.service.js`

What to do:
- create a route like `POST /refresh-token`
- read refresh token from cookie
- call the existing `refresh()` service
- return a new access token in response

---

### 3. Add Forgot Password Flow

Target files:
- `class-code/src/modules/auth/auth.routes.js`
- `class-code/src/modules/auth/auth.controller.js`
- `class-code/src/modules/auth/auth.service.js`
- `class-code/src/modules/auth/dto/`

What to do:
- create a DTO for forgot-password request
- add route and controller for forgot password
- call the existing `forgotPassword(email)` service logic
- keep response consistent with `ApiResponse`

---

### 4. Add Reset Password Flow

Target files:
- `class-code/src/modules/auth/auth.routes.js`
- `class-code/src/modules/auth/auth.controller.js`
- `class-code/src/modules/auth/auth.service.js`
- `class-code/src/modules/auth/dto/`
- `class-code/src/modules/auth/auth.model.js`

What to do:
- create reset-password route
- accept token and new password
- verify token and expiry
- update password and clear reset token fields

---

### 5. Add One Protected Admin Route

Target files:
- `class-code/src/modules/auth/auth.routes.js`
- `class-code/src/modules/auth/auth.middleware.js`

What to do:
- add one sample route protected by `authenticate`
- use `authorize("admin")` on top of it
- return a simple success message

---

### 6. Fix Obvious Incomplete Auth Code

Target files:
- `class-code/src/modules/auth/auth.service.js`
- `class-code/src/common/config/email.js`
- `class-code/src/modules/auth/auth.middleware.js`
- `class-code/src/common/utils/api-error.js`

Things to review:
- `token` variable usage inside register flow
- email utility parameter naming / message body
- import paths that may miss `.js`
- status codes for `forbidden` and `notfound`
- typo consistency in token field names if you want cleanup

---

## Submission Idea

Minimum good submission:
- verify email route works
- refresh token route works
- forgot password route exists
- one admin-only protected route exists

Better submission:
- reset password flow also works end to end
- obvious auth bugs are cleaned up

---

## Reminder

Do not create a new project.
Do the assignment inside this same class code so the auth system grows naturally from the previous classes.
