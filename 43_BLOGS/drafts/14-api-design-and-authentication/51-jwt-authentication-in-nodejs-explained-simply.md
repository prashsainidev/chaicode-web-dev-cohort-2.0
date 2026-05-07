## Introduction

Authentication is one of the first serious backend ideas most learners meet.

The core question is simple:

**how does the server know who the user is?**

One common answer in modern backend systems is:

**JWT**

JWT appears in many tutorials, APIs, and full-stack apps.

But it becomes much easier to understand when we break it into simple parts.

In this article, we will understand:

- what authentication means
- what JWT is
- what the parts of a JWT are
- how a login flow works with JWT
- how tokens are sent in later requests
- how protected routes use token validation

* * *

## What Authentication Means

Authentication means verifying identity.

In simple words:

the server needs to know whether the person making the request is really the user they claim to be.

Examples:

- logging into an account
- accessing a private dashboard
- viewing protected user data

Authentication is about identity.

Authorization comes after that and asks:

**what is this authenticated user allowed to do?**

For now, our focus is the first part: proving identity.

* * *

## What JWT Is

JWT stands for **JSON Web Token**.

At beginner level, think of it like this:

it is a token the server gives after successful login, and the client can send that token in future requests to prove identity.

That means the server does not need to ask for username and password on every protected request.

Instead:

- login happens once
- token is issued
- token is sent later with requests

That is the basic idea.

* * *

## JWT Structure: Header, Payload, Signature

A JWT has three parts:

- Header
- Payload
- Signature

### Header

This describes basic token metadata, such as the token type and signing algorithm.

### Payload

This contains useful data such as:

- user ID
- email
- role

### Signature

This helps the server verify that the token has not been tampered with.

At beginner level, you do not need to go deep into cryptography.

The important understanding is:

the signature helps establish trust in the token.

* * *

## Why Token-Based Authentication Feels Useful

Token-based authentication is popular because it fits well with APIs and modern frontend-backend separation.

The server can issue a token after login.

Then the client can attach that token to later requests.

That makes JWT useful in:

- REST APIs
- SPAs
- mobile apps
- frontend-backend architectures where the client and server are separated

This is one reason JWT became so common.

* * *

## A Simple JWT Login Flow

The flow usually looks like this:

1. user sends login credentials
2. server checks if the credentials are valid
3. if valid, server creates and sends a JWT
4. client stores that token
5. client sends the token in future protected requests
6. server verifies the token before allowing access

That is the basic lifecycle.

So the token becomes the identity proof after login.

* * *

## Sending the Token with Requests

A common way to send the token is through the `Authorization` header.

Example:

```plaintext
Authorization: Bearer <token>
```

This tells the server:

"Here is my token. Please verify it."

That way, the request carries identity information without sending raw login credentials every time.

* * *

## Protecting Routes with JWT

Suppose there is a protected route like:

```plaintext
GET /profile
```

The server should not give that data to just anyone.

So a typical flow is:

- read token from request header
- verify token
- if valid, allow access
- if invalid, deny access

This is where authentication middleware often becomes useful in Node.js and Express apps.

The middleware checks the token before the route handler continues.

* * *

## Stateless Authentication in Simple Words

JWT is often connected with the idea of **stateless authentication**.

Simple meaning:

the server can validate the token itself, instead of depending entirely on stored session state for every authenticated request.

At beginner level, the exact comparison can be understood more clearly in the sessions vs JWT article.

For now, remember this:

JWT is popular because it lets identity travel with the request in token form.

* * *

## A Practical Beginner Warning

JWT is useful, but beginners should avoid treating it like a magic security object.

It is part of an authentication design.

Good authentication still depends on:

- proper validation
- safe token handling
- correct expiry logic
- secure storage decisions

That means understanding the flow matters more than blindly copying token code from tutorials.

* * *

## Summary

- authentication is about verifying who the user is
- JWT is a token used to represent authenticated identity
- a JWT has header, payload, and signature parts
- login usually creates the token
- later requests send the token for protected route access

* * *

## Final Thought

JWT becomes much less scary once you stop looking at it as a mysterious string.

The better way to see it is:

it is a structured identity token used after login so future requests can prove who the user is.

That one idea already gives a strong beginner foundation.

* * *

## Continue Reading

- Previous: [REST API Design Made Simple with Express.js](https://prashsainidev.hashnode.dev/rest-api-design-made-simple-with-expressjs)
- Next: [Sessions vs JWT vs Cookies: Understanding Authentication Approaches](https://prashsainidev.hashnode.dev/sessions-vs-jwt-vs-cookies-understanding-authentication-approaches)
