# Class 12 Practice - RESTful API Building

## Class Info

- Section: Backend Engineering
- Class: 12
- Topic: RESTful API Building
- Day: Sunday
- Date: 12 April 2026

## Purpose

This practice folder is for the work that still needs to be completed by hand after the live class. The current class code shows a clear start of an IPL module, but only part of that module is fully wired right now.

## What Looks Completed In Class Code

- owner schema is created
- owner controller is created
- owner service is created
- owner routes are created
- `/api/owners` is mounted in `src/app.js`

## What Looks Like Self Practice

- complete CRUD for `Team`
- complete CRUD for `Player`
- complete CRUD for `Sponsor`
- complete CRUD for `Broadcaster`
- connect `player.service.js` to proper controller and routes
- connect `team-sponsor.service.js` to proper controller and routes
- connect `team-broadcaster.service.js` to proper controller and routes
- add request validation DTOs where needed
- add route-level testing in Postman or Bruno
- verify relationship-based flows such as:
- transfer a player to a new team
- attach a sponsor to a team
- assign a broadcaster to a team

## Suggested Practice Order

1. Review the owner CRUD flow carefully.
2. Create the same pattern for team CRUD.
3. Extend the same pattern for player CRUD.
4. Connect sponsor and broadcaster master entities.
5. Finish the relationship workflows after the basic entities are working.

## Reminder

This checklist is inferred from the current local code snapshot. It can be refined later if the exact assignment instructions are shared separately.
