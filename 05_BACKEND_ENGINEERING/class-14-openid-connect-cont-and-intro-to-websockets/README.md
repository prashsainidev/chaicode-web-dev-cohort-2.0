# Backend Engineering - OpenID Connect Cont. & Intro to WebSockets

## Overview

This backend class was held on Sunday, `19 Apr 2026`.

The topic for this session was `OpenID Connect Cont. & Intro to WebSockets`.

This class focused mainly on understanding real-time communication in Node.js through a practical WebSocket project, but the shared class code also includes OIDC authentication work. So today's class folder now reflects both tracks that were explored: WebSockets for real-time systems and OIDC for identity-based auth flow.

---

## What I Learned

### WebSocket Basics

- understanding that WebSocket creates a persistent two-way connection between client and server
- learning the difference between normal HTTP request-response flow and real-time event-based communication
- understanding `ws` and `wss` in browser-client communication

---

### Real-Time State Synchronization

- sharing one checkbox state across many connected users
- sending initial state to new users after connection
- broadcasting updates so every connected client stays in sync
- using the server as the source of truth for shared state

---

### OIDC Authentication Flow

- revisiting OpenID Connect through actual auth-server code instead of only theory
- seeing discovery endpoint and JWKS endpoint in a working Express + TypeScript setup
- understanding RS256 token signing with public/private keys
- connecting sign-up, sign-in, token generation, and `/o/userinfo` into one auth flow

---

### Practical Architecture Thinking

- serving static files through a Node HTTP server
- creating a WebSocket server on top of the same HTTP server
- tracking `totalConnections` and `activeUsers`
- adding simple rate limiting to reduce spammy actions
- using lazy rendering on the frontend because the checkbox grid is very large
- reading OIDC auth-server structure using Express, Drizzle, Postgres, JWT, and node-jose

---

## Class Notes

The main code explored for this class is currently kept in separate workspaces outside this repo:

- `class-code/oidc-auth-main`

Notebook-style markdown notes for this class are added in:

- `class-notes/class-14-introduction-to-websockets-notes.md`
- `class-notes/Intro_to_Websockets_and_oidc_cont_Notes.pdf`

---

## Current Status

- class attended
- topic confirmed as `OpenID Connect Cont. & Intro to WebSockets`
- today's code reviewed from both WebSocket and OIDC auth projects
- README and links updated based on actual WebSocket code
- README and links also updated to include OIDC auth-server coverage
- notebook-style notes added for revision

---

## Practice Direction

This class is a good starting point for real-time backend features.

Practice now can continue with:

- chat-style message broadcasting
- room-based sockets
- reconnect handling
- heartbeat/ping-pong checks
- database-backed real-time state
- OIDC authorize and token flow continuation
- token verification with issuer, audience, and JWKS understanding

This keeps the class connected with both real-world WebSocket use cases and provider-style authentication thinking.
