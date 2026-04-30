# API Testing Guide

Date: 2026-04-19
For: Class 11 + Class 12 combined practice continuation

## Where To Run

Project folder:

- `05_BACKEND_ENGINEERING/class-12-restful-api-building/practice/class-code-continuation/`

## Before Testing

Do these manual steps first:

1. create `.env` from `env.example`
2. add real `MONGODB_URI`
3. add real ImageKit keys
4. run `npm install`
5. run `npm run dev`

Base URL:

```txt
http://localhost:5000
```

## Step 1. Test Auth Basics

### Register

`POST /api/auth/register`

```json
{
  "name": "Prashant",
  "email": "prashant@example.com",
  "password": "Password1",
  "role": "customer"
}
```

### Login

`POST /api/auth/login`

```json
{
  "email": "prashant@example.com",
  "password": "Password1"
}
```

Save:
- `accessToken` from response
- `refreshToken` cookie

### Get Current User

`GET /api/auth/me`

Header:

```txt
Authorization: Bearer <accessToken>
```

## Step 2. Test Avatar Upload

`POST /api/auth/avatar`

Headers:

```txt
Authorization: Bearer <accessToken>
```

Body:
- form-data
- key: `avatar`
- type: file

Expected:
- file uploads
- ImageKit URL comes back in response
- avatar URL gets saved in user record

## Step 3. Test Owner CRUD

### Create Owner

`POST /api/owners`

```json
{
  "name": "N Srinivasan",
  "company": "Chennai Super Kings"
}
```

### Get All Owners

`GET /api/owners`

### Get Owner By Id

`GET /api/owners/:id`

### Update Owner

`PUT /api/owners/:id`

```json
{
  "name": "Updated Owner",
  "company": "Updated Company"
}
```

### Delete Owner

`DELETE /api/owners/:id`

## Step 4. Test Team CRUD

### Create Team

`POST /api/teams`

```json
{
  "name": "CSK",
  "ownerId": "<ownerId>"
}
```

### Other Team Routes

- `GET /api/teams`
- `GET /api/teams/:id`
- `PUT /api/teams/:id`
- `DELETE /api/teams/:id`

## Step 5. Test Player CRUD

### Create Player

`POST /api/players`

```json
{
  "name": "MS Dhoni",
  "role": "wicket-keeper",
  "teamId": "<teamId>"
}
```

### Other Player Routes

- `GET /api/players`
- `GET /api/players/:id`
- `PUT /api/players/:id`
- `DELETE /api/players/:id`

### Transfer Player

`PATCH /api/players/:id/transfer`

```json
{
  "teamId": "<newTeamId>"
}
```

### Update Player Role

`PATCH /api/players/:id/role`

```json
{
  "role": "batsman"
}
```

## Step 6. Test Sponsor CRUD

### Create Sponsor

`POST /api/sponsors`

```json
{
  "name": "Dream11"
}
```

### Other Sponsor Routes

- `GET /api/sponsors`
- `GET /api/sponsors/:id`
- `PUT /api/sponsors/:id`
- `DELETE /api/sponsors/:id`

## Step 7. Test Broadcaster CRUD

### Create Broadcaster

`POST /api/broadcasters`

```json
{
  "name": "Star Sports"
}
```

### Other Broadcaster Routes

- `GET /api/broadcasters`
- `GET /api/broadcasters/:id`
- `PUT /api/broadcasters/:id`
- `DELETE /api/broadcasters/:id`

## Step 8. Test Relationship Routes

### Attach Sponsor To Team

`POST /api/team-sponsors`

```json
{
  "teamId": "<teamId>",
  "sponsorId": "<sponsorId>"
}
```

### Get Team Sponsors

`GET /api/team-sponsors/:teamId`

### Assign Broadcaster To Team

`POST /api/team-broadcasters`

```json
{
  "teamId": "<teamId>",
  "broadcasterId": "<broadcasterId>"
}
```

### Get Team Broadcasters

`GET /api/team-broadcasters/:teamId`

## Recommended Testing Order

1. auth register/login
2. avatar upload
3. owner create
4. team create
5. player create
6. sponsor create
7. broadcaster create
8. team-sponsor relation
9. team-broadcaster relation
10. transfer player

## Final Reminder

If a route fails, first check:

1. is MongoDB connected
2. is `.env` filled correctly
3. is ImageKit configured
4. are you using valid MongoDB `_id` values in request bodies
