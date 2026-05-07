## Introduction

At some point in backend learning, one phrase starts showing up everywhere:

**REST API**

Beginners often hear it as if it is a complicated standard full of rules.

But the core idea is simpler than it first sounds.

REST is mainly about designing APIs around **resources** in a clear and predictable way.

This article will make the idea practical by focusing on one simple example:

`users`

That is enough to understand:

- what REST means
- how HTTP methods map to actions
- how routes should be designed
- why clean API naming matters

* * *

## What REST API Means

REST stands for **Representational State Transfer**.

At beginner level, you do not need to memorize the formal definition.

A more useful understanding is:

REST is a style of API design where the server exposes resources through clear routes and standard HTTP methods.

In simple words:

- the client asks for a resource
- the server responds about that resource

Examples of resources:

- users
- products
- orders
- posts

* * *

## What Is a Resource?

A resource is the main thing your API is dealing with.

For example, in a user system:

- one user is a resource
- the collection of users is also a resource set

That is why route naming often looks like:

- `/users`
- `/users/:id`

The API is centered around the resource, not around random action names.

This is one of the most important REST ideas.

* * *

## HTTP Methods and Their Usual Meaning

REST APIs commonly use HTTP methods in predictable ways.

### GET

Used to read data.

Examples:

- `GET /users`
- `GET /users/42`

### POST

Used to create data.

Example:

- `POST /users`

### PUT

Used to update or replace data.

Example:

- `PUT /users/42`

### DELETE

Used to remove data.

Example:

- `DELETE /users/42`

These method-resource combinations make APIs much easier to understand.

[[IMAGE SLOT 1 - DIAGRAM IDEA: CRUD vs HTTP methods mapping table - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## One Resource Example: Users

Let us build the mental model around `users`.

### Get all users

```plaintext
GET /users
```

### Get one user

```plaintext
GET /users/42
```

### Create a user

```plaintext
POST /users
```

### Update a user

```plaintext
PUT /users/42
```

### Delete a user

```plaintext
DELETE /users/42
```

This structure already feels much cleaner than writing awkward action-style routes like:

- `/getUsers`
- `/createUser`
- `/deleteUserById`

REST route design prefers resource clarity.

* * *

## Express Makes REST Routing Easy

In Express, this style maps naturally to code.

Example:

```javascript
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.send("All users");
});

app.get("/users/:id", (req, res) => {
  res.send(`User ${req.params.id}`);
});

app.post("/users", (req, res) => {
  res.send("Create a user");
});

app.put("/users/:id", (req, res) => {
  res.send(`Update user ${req.params.id}`);
});

app.delete("/users/:id", (req, res) => {
  res.send(`Delete user ${req.params.id}`);
});
```

This is one of the reasons REST and Express go together so naturally.

* * *

## Why Status Codes Matter

REST APIs do not only send data.

They also send meaning through status codes.

Some beginner-friendly examples:

- `200 OK` -> request succeeded
- `201 Created` -> new resource created
- `400 Bad Request` -> client sent invalid input
- `404 Not Found` -> resource does not exist
- `500 Internal Server Error` -> server-side issue

Status codes matter because they help the client understand what happened without guessing from the response body alone.

* * *

## APIs as Communication Between Client and Server

A helpful way to think about APIs is this:

the API is the communication contract between the client and the server.

The client says:

"I want this resource."

or

"I want to create this."

The server replies with:

- data
- status
- success or error information

That is why route naming and method usage matter so much.

Good API design reduces confusion for everyone using the system.

[[IMAGE SLOT 2 - DIAGRAM IDEA: REST request-response lifecycle - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## A Simple Design Mistake to Avoid

One common beginner mistake is creating route names that mix action verbs into everything.

For example:

- `/getAllUsers`
- `/addNewUser`
- `/removeUser`

These are understandable, but REST usually aims for cleaner resource-first naming:

- `GET /users`
- `POST /users`
- `DELETE /users/:id`

The route stays resource-focused, and the method communicates the action.

That is much more consistent.

* * *

## Summary

- REST is a resource-based API design style
- resources like users or products become the center of route design
- GET, POST, PUT, and DELETE communicate common CRUD actions
- Express maps REST routes naturally and clearly
- status codes help communicate the result of a request properly

* * *

## Final Thought

REST starts feeling simple once you stop treating it as a difficult theory topic.

At beginner level, it is mostly about this:

choose clear resources, use standard HTTP methods properly, and keep route naming predictable.

That alone already takes API design a long way.

* * *

## Continue Reading

- Previous: [What Is Middleware in Express and How It Works](https://prashsainidev.hashnode.dev/what-is-middleware-in-express-and-how-it-works)
- Next: [JWT Authentication in Node.js Explained Simply](https://prashsainidev.hashnode.dev/jwt-authentication-in-nodejs-explained-simply)
