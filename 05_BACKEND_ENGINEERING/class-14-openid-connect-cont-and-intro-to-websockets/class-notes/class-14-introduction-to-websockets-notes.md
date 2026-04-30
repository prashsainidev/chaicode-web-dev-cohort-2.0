1. What Is WebSocket?

WebSocket is a full-duplex communication protocol.

Simple meaning:

- client and server keep one persistent connection open
- both sides can send data at any time
- communication becomes real-time

Unlike normal HTTP request-response flow, WebSocket does not need a new request for every small update.

2. Why WebSocket Is Useful

WebSocket is useful when data changes frequently and updates should appear instantly.

Common examples:

- chat apps
- live notifications
- multiplayer games
- stock price updates
- dashboards
- collaborative apps
- live counters and activity trackers

3. HTTP vs WebSocket

HTTP:

- request-response based
- client asks first
- server replies once
- connection is usually short-lived

WebSocket:

- persistent connection
- client and server both can send data
- better for real-time features

Draw this:

HTTP:
[ Client ] -> request -> [ Server ]
[ Server ] -> response -> [ Client ]

WebSocket:
[ Client ] <==== persistent two-way connection ====> [ Server ]

4. ws and wss

Two common protocols:

- `ws://`  -> unsecured WebSocket
- `wss://` -> secure WebSocket

In browser code, protocol can be chosen dynamically:

- if page uses `https`, use `wss`
- otherwise use `ws`

5. What We Built In Class

In this class, we built a real-time checkbox board using WebSocket.

Main features:

- Node.js HTTP server to serve HTML and JavaScript
- WebSocket server using the `ws` package
- shared checkbox state across all connected users
- live total connections and active users count
- broadcast updates to every client
- connect button and username input on frontend
- 60-second session timer
- rate limiting for rapid actions
- lazy loading for a very large checkbox grid

6. Packages And Setup

Important package used:

- `ws`

In the current class code, the main dependencies are:

- `ws`
- `zlib`

Only `ws` is actively used in the current implementation.

7. Server-Side Architecture

The backend creates:

1. an HTTP server
2. a WebSocket server on top of that HTTP server

Simple flow:

[ Browser ]
    |
    | opens page through HTTP
    v
[ Node HTTP Server ]
    |
    | upgrades connection
    v
[ WebSocket Server ]

This means one server setup handles both static files and real-time communication.

8. Static File Serving

The Node HTTP server serves:

- `index.html`
- `script.js`
- other static assets if needed

The server checks requested file path, resolves content type, and reads files using `fs.readFile`.

This shows that a simple Node server can serve frontend files and also power WebSocket communication.

9. WebSocket Connection Flow

When a new client connects:

1. total connections increases
2. active users increases
3. latest stats are broadcast to everyone
4. initial checkbox state is sent to the new user
5. the new user also receives current stats

Draw this:

[ New Client Connects ]
        |
        v
Increment counters
        |
        v
Send full checkbox state
        |
        v
Broadcast updated stats

10. Shared State In This Project

The server stores a shared state:

- `checkboxState = new Array(100000).fill(false)`

Simple meaning:

- there are one lakh checkboxes
- each value is either `true` or `false`
- server keeps the source of truth

If one user changes a checkbox, the server updates the shared array and broadcasts that change.

11. Broadcasting

Broadcasting means sending the same update to all connected clients.

In this project, two main broadcasts happen:

- stats broadcast
- checkbox update broadcast

Simple meaning:

- if one user checks a box, everyone sees it
- if connection count changes, everyone sees it

12. Frontend WebSocket Flow

The browser creates a WebSocket connection like this:

- detect protocol from current page
- create `ws://host` or `wss://host`
- listen for `onopen`, `onmessage`, `onclose`, and `onerror`

Important event handlers:

- `onopen`   -> connection opened
- `onmessage` -> new data received
- `onclose`  -> connection closed
- `onerror`  -> connection error happened

13. Types Of Messages Used

The client handles three main message types:

1. full checkbox array
2. stats object
3. individual checkbox update

Simple interpretation:

- array means initial board state
- object with `totalConnections` and `activeUsers` means stats update
- object with `index` and `checked` means one checkbox changed

14. Why Lazy Loading Was Needed

The UI has 100000 checkboxes.

Rendering all of them at once would be heavy.

So the frontend uses lazy loading:

- render only 500 checkboxes at a time
- when user scrolls near bottom, render more

This improves initial performance and keeps the page more manageable.

15. Connection Control In UI

The frontend does not immediately allow checkbox interaction.

Flow:

- page connects to WebSocket automatically
- user enters a name
- connect button becomes enabled
- user clicks connect
- checkbox grid becomes active
- 60-second timer starts

This creates a simple session-based interaction flow.

16. Timer Logic

After user starts interaction:

- a 60-second countdown is shown
- when timer ends, socket is closed
- checkboxes become disabled again

Simple meaning:

The UI gives a limited interaction window instead of keeping the session open forever.

17. Rate Limiting

The server uses a simple rate limit based on client IP address.

Current logic:

- track user actions per second
- allow maximum 5 actions in 1 second
- if limit is exceeded, send an error message

Why this matters:

- prevents spam
- reduces abuse
- protects server from rapid repeated events

18. totalConnections vs activeUsers

These two values are different.

- `totalConnections` = total number of connections made so far
- `activeUsers` = users currently connected right now

Example:

- if 10 users connected during the day, totalConnections may become 10
- if only 3 are connected now, activeUsers will be 3

19. What This Class Taught Architecturally

This class was not only about opening a socket.

It also introduced:

- real-time state synchronization
- server as source of truth
- broadcasting updates
- connection lifecycle handling
- basic rate limiting
- performance thinking through lazy rendering

20. OIDC Auth Server Track

This class code also included an OIDC authentication project.

Important parts explored:

- Express + TypeScript auth server
- Drizzle ORM with Postgres
- public/private key files inside `cert`
- discovery endpoint
- JWKS endpoint
- sign-up and sign-in endpoints
- RS256 JWT generation
- `/o/userinfo` endpoint

Simple meaning:

This part of the class connected identity-based authentication with real backend implementation.

21. Important OIDC Endpoints Seen In Code

Important endpoints in the auth project:

- `GET /.well-known/openid-configuration`
- `GET /.well-known/jwks.json`
- `GET /o/authenticate`
- `POST /o/authenticate/sign-up`
- `POST /o/authenticate/sign-in`
- `GET /o/userinfo`

These endpoints show how a provider-style auth server exposes metadata, keys, token generation, and user identity information.

22. How Token Signing Works Here

The auth project uses:

- private key for signing JWT
- public key for verifying JWT
- algorithm: `RS256`

Why this matters:

- signing and verification are separated
- public key can be exposed safely for verification use cases
- this fits OIDC and distributed auth architecture better than sharing one secret everywhere

23. Sign-Up and Sign-In Flow

Current auth flow in code:

1. user signs up
2. password is hashed with salt
3. user signs in
4. server verifies password
5. server creates JWT claims
6. server signs token using private key
7. client uses token for `/o/userinfo`

Simple meaning:

This is a practical auth-server flow, not just theory around tokens.

24. Final Revision Summary

Introduction to WebSockets taught that:

- WebSocket enables persistent two-way communication
- real-time apps need server-client event flow instead of repeated HTTP polling
- Node.js can serve static files and run a WebSocket server together
- shared state can be synchronized across multiple users
- live systems also need controls like timers, lazy rendering, and rate limiting
- today's class code also connected this with OIDC auth-server concepts like discovery, JWKS, RS256 JWT signing, and userinfo flow
