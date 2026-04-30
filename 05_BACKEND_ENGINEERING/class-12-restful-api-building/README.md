# Backend Engineering - RESTful API Building

## Overview

This backend class was held on Sunday, `12 Apr 2026`.

The topic for this session was `RESTful API Building`.

This class continued the previous backend project instead of starting from zero. The current code snapshot clearly reuses the auth and upload-ready project from the last class, but now begins a new IPL-style REST API module inside the same codebase.

---

## What I Learned

### Project Continuation

- reusing the previous backend codebase instead of rebuilding the setup
- extending the same Express app with a new domain module
- understanding how one existing project can grow feature by feature

---

### New IPL Module Start

- creating a separate `ipl-ms` module inside `src/modules/`
- starting schema design for IPL-related entities
- wiring the first REST routes into the main app

---

### Owner CRUD Flow

- creating an `Owner` model with validation
- adding owner controller, service, and routes
- mounting `/api/owners` in the Express app
- using the same `ApiResponse` and `ApiError` utilities from the existing project

---

### Schema And Service Practice Direction

- adding starter models for `Team`, `Player`, `Sponsor`, and `Broadcaster`
- creating relationship models like `TeamSponsor` and `TeamBroadcaster`
- preparing extra service logic such as player transfer, sponsor attachment, and broadcaster assignment
- extending the module through practice to complete the remaining CRUD and relationship wiring

---

## Class Code Highlights

The local class code currently lives in:

- `class-code/chai-aur-filesystem-main/`

This code snapshot appears to be a continuation of the previous class snapshot:

- base comparison source -> `class-11-reading-and-writing-files/class-code/chai-aur-filesystem-main-1/`

Main new work visible in today's code:

- `src/app.js` now mounts `ownerRoutes` at `/api/owners`
- new controller -> `src/modules/ipl-ms/controllers/owner.controller.js`
- new route file -> `src/modules/ipl-ms/routes/owner.routes.js`
- new service -> `src/modules/ipl-ms/services/owner.service.js`
- new models:
- `owner.model.js`
- `team.model.js`
- `player.model.js`
- `sponsor.model.js`
- `broadcaster.model.js`
- `team-sponsor.model.js`
- `team-broadcaster.model.js`
- extra service practice files:
- `player.service.js`
- `team-sponsor.service.js`
- `team-broadcaster.service.js`

Useful external references linked in `links.md` now include:

- reference repo for the filesystem/backend continuation
- three GitHub Classroom links for related class and practice flow

---

## Current Status

- class attended
- topic confirmed as `RESTful API Building`
- local class code is now added
- code is a mix of the previous auth/file-handling project and today's new IPL module work
- remaining CRUD and relationship flow is now clearly continued through local practice work
- summary notes are updated from local code inspection
- notebook-style notes are added in `class-notes/class-12-restful-api-building-notes.md`
- practice and assignment details can still expand after more class instructions arrive

---

## Blog

- REST API Design Made Simple with Express.js

---

## Why This Exists

Keeping this folder updated makes the project history easier to follow from class to class, especially when the new code is built on top of an older snapshot.
