1. What Is A RESTful API?

RESTful API means an API that follows resource-based URL design and uses HTTP methods properly.

Simple meaning:

- API is the communication layer between frontend/client and backend
- RESTful API means we do not create random endpoints for everything
- we represent real resources using clean routes

Examples:

- `/api/owners`
- `/api/teams`
- `/api/players`

Draw this:

[ Client / Frontend ]
        |
        | HTTP Request
        v
[ REST API Server ]
        |
        | reads/writes
        v
[ Database ]

2. Core REST Idea

In REST, backend is designed around resources.

Resource examples from this class:

- Owner
- Team
- Player
- Sponsor
- Broadcaster

Rule:

- noun-based routes use karo
- HTTP method se action decide hota hai

3. REST Methods Map

GET    -> fetch data
POST   -> create new data
PUT    -> update full resource / commonly update route
PATCH  -> partial update
DELETE -> delete resource

Example:

GET    /api/owners
GET    /api/owners/:id
POST   /api/owners
PUT    /api/owners/:id
DELETE /api/owners/:id

4. Resource URL Design

Bad style:

- `/createOwner`
- `/deleteOwnerById`

Better REST style:

- `POST /api/owners`
- `DELETE /api/owners/:id`

Simple meaning:

URL should represent the resource.
Method should represent the action.

5. Backend Module Structure

In this class, project was structured module-wise.

Draw this:

src/
  modules/
    ipl-ms/
      controllers/
      services/
      models/
      routes/

Meaning:

- `models` -> database schema
- `services` -> business logic
- `controllers` -> request/response handling
- `routes` -> endpoint mapping

6. Why This Structure Is Useful

If everything is written in one file, project becomes messy.

Modular structure helps in:

1. readability
2. debugging
3. scaling project
4. code reuse
5. team collaboration

7. Express Flow In This Class

Request flow:

[ Route ]
    |
    v
[ Controller ]
    |
    v
[ Service ]
    |
    v
[ Mongoose Model / DB ]
    |
    v
[ Response ]

Simple meaning:

- route chooses controller
- controller calls service
- service talks to DB
- controller sends final response

8. What Is A Model?

Model defines the schema of a resource stored in MongoDB.

Examples in this class:

- owner model
- team model
- player model
- sponsor model
- broadcaster model

Model decides:

- fields
- data types
- validation rules
- references

9. What Is A Controller?

Controller handles incoming request and outgoing response.

Example controller jobs:

- read `req.body`
- read `req.params.id`
- call service
- send `ApiResponse`

Simple meaning:

Controller should stay thin.
Heavy logic should go to service.

10. What Is A Service?

Service contains business logic.

Examples:

- create owner
- update player team
- attach sponsor to team
- assign broadcaster to team

Service meaning:

- actual work happens here
- validation and DB logic is usually handled here

11. Owner CRUD

Owner CRUD was the first full REST flow clearly visible in class.

CRUD meaning:

Create  -> add new owner
Read    -> get owners
Update  -> edit owner
Delete  -> remove owner

Owner routes idea:

- `POST /api/owners`
- `GET /api/owners`
- `GET /api/owners/:id`
- `PUT /api/owners/:id`
- `DELETE /api/owners/:id`

12. Reusing Existing Project

This class did not start from zero.

It reused:

- auth setup
- common utils
- error handling
- response helper
- existing Express app structure

Simple meaning:

Earlier backend work became the base.
This class added a new domain on top of it.

13. ApiResponse And ApiError

This project used shared helpers for clean API behavior.

`ApiResponse` use:

- success response ko standard format me bhejna

`ApiError` use:

- error throw karna with status code and message

Why useful:

1. consistent response format
2. cleaner controller code
3. centralized error handling

14. Relationships In IPL Module

This class introduced resource relationships also.

Examples:

- one owner can own teams
- player belongs to a team
- sponsor can be attached to team
- broadcaster can be assigned to team

Draw this:

[ Owner ] ---> [ Team ] ---> [ Player ]
               |
               +----> [ Sponsor ]
               |
               +----> [ Broadcaster ]

15. Relationship Models

Some direct models store entities.
Some models store relationships.

Entity models:

- Owner
- Team
- Player
- Sponsor
- Broadcaster

Relationship models:

- TeamSponsor
- TeamBroadcaster

Meaning:

Sometimes relation itself is important, so separate collection/model banaya jata hai.

16. REST API Best Practices Seen Here

1. keep route names resource-based
2. use controllers and services separately
3. use shared response helpers
4. validate IDs and missing resources
5. return meaningful error messages
6. organize code by module

17. Why This Class Matters

This class is important because it moves backend from:

- basic auth project

to:

- real domain-based API design

This is the step where backend starts looking like a real application.

18. Real Learning Outcome

From this class, the main learning is:

- how to continue an existing backend project
- how to add a new module
- how to design CRUD APIs
- how to structure controller/service/model/routes
- how to think in terms of resources and relationships

19. Final Revision Summary

RESTful API building means designing backend around resources using HTTP methods and clean URLs.

This class used an IPL-style module to practice:

- resource creation
- CRUD design
- modular backend structure
- service layer thinking
- relationship modeling

20. Self Practice Checklist

[ ] 1. Create one `Owner` using `POST /api/owners`
[ ] 2. Fetch all owners using `GET /api/owners`
[ ] 3. Fetch one owner by id
[ ] 4. Update one owner
[ ] 5. Delete one owner
[ ] 6. Read `owner.routes`, `owner.controller`, `owner.service` flow line by line
[ ] 7. Understand why controller and service are separated
[ ] 8. Trace how `app.js` mounts routes
[ ] 9. Read all IPL models and understand relationships
[ ] 10. Check how `TeamSponsor` and `TeamBroadcaster` relation models work
[ ] 11. Test one player-related route
[ ] 12. Test one sponsor-related route
[ ] 13. Test one broadcaster-related route
[ ] 14. Compare class 11 project base with class 12 new module additions

Purpose:
This checklist is for hands-on revision.
I will complete these tasks in VS Code and Postman after finishing the theory notes.
