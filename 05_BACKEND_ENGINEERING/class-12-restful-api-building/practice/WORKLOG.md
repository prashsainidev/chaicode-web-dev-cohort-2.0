# Class 11-12 Combined Worklog

Date: 2026-04-19
Focus: Class 11 and Class 12 are being handled together because class 12 continues the same backend project from class 11.

## Folder Rule

- `../../class-11-reading-and-writing-files/class-code/chai-aur-filesystem-main-1/` = class 11 refined upload/auth snapshot
- `../class-code/chai-aur-filesystem-main/` = original class 12 snapshot
- `./class-code-continuation/` = separate continuation copy for combined practice work
- original class snapshots should stay untouched
- all new combined work should happen inside `class-code-continuation/`

## Why These Two Classes Are Together

Class 11 gave:
- file system practice
- multer upload flow
- ImageKit integration
- avatar upload flow inside auth project

Class 12 continued the same project and added:
- `ipl-ms` module
- owner CRUD
- team/player/sponsor/broadcaster models
- relationship service starters

So the practical flow is:
1. understand class 11 upload/auth project
2. continue from class 12 IPL module

## What Is Already Available In The Continuation Copy

The copied class 12 snapshot already includes:

- auth routes and auth services
- avatar upload flow
- multer middleware
- ImageKit config
- fs module files
- owner CRUD
- IPL models
- relationship service starter files

## What Still Looks Pending

### Class 11 side

- manual `.env` setup is still required
- MongoDB must be connected manually
- ImageKit keys must be filled manually
- avatar upload flow should be tested manually end-to-end

### Class 12 side

- only owner CRUD is fully wired
- team CRUD is not wired yet
- player CRUD is not wired yet
- sponsor CRUD is not wired yet
- broadcaster CRUD is not wired yet
- relationship services are present but not connected to controllers/routes yet

## Combined Practice Order

1. create `.env` from `class-code-continuation/env.example`
2. connect MongoDB
3. add ImageKit keys manually
4. verify auth routes run
5. verify avatar upload route works
6. review owner CRUD flow carefully
7. build team CRUD using same owner pattern
8. build player CRUD
9. build sponsor CRUD
10. build broadcaster CRUD
11. connect relationship workflows:
    - transfer player
    - attach sponsor
    - assign broadcaster

## Manual Setup Checklist

Before running anything:

1. go to `class-code-continuation/`
2. create `.env`
3. copy values from `env.example`
4. add real MongoDB URI
5. add real ImageKit keys
6. install dependencies if needed
7. start the server

## Current Status

- combined continuation copy created in class 12 practice folder
- original class 11 and class 12 snapshots preserved
- fixed class 11 carry-over upload error handling in the auth avatar flow
- completed class 12 IPL module wiring for:
  - team CRUD
  - player CRUD
  - sponsor CRUD
  - broadcaster CRUD
  - team-sponsor controllers/routes
  - team-broadcaster controllers/routes
- next step:
  - create `.env`
  - connect MongoDB and ImageKit manually
  - test all routes in Postman or Bruno
