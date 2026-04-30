1. The 1 Million Checkboxes Architecture

When building a massive real-time app like "1 Million Checkboxes":
- storing state in Node.js memory fails at scale
- a single server cannot efficiently hold thousands of concurrent WebSocket connections
- we need a fast, distributed state store

2. Why Redis?

Redis is an in-memory data store.
In this architecture, it solves two big problems:

State Store:
- it holds the true state of the checkboxes (bitmaps are very efficient for this)
- it is extremely fast because it's in-memory

Pub/Sub Broker:
- if user A is connected to Server 1 and user B to Server 2
- Server 1 updates Redis and publishes an event
- Server 2 receives the event and tells user B
- this keeps all users in sync across multiple servers

3. Redis Pub/Sub (Publish / Subscribe)

Simple meaning:
- Publish: sending a message to a specific channel
- Subscribe: listening to a specific channel for messages

Flow:
[ User toggles box ]
   |
   v
[ Server A updates Redis State ]
   |
   v
[ Server A Publishes to 'updates' channel ]
   |
   v
[ Server B is Subscribed, receives event ]
   |
   v
[ Server B Broadcasts to all its connected clients ]

4. Why Rate Limiting?

In real-time systems, users can use scripts or auto-clickers.
Sending 1000s of socket messages per second can crash the server.

Rate Limiting protects the system:
- prevents abuse and spam
- protects CPU, memory, and database connections

5. Rate Limiting with Redis

Redis is perfect for rate limiting because it's fast and shared across all servers.

Logic:
- track how many actions a user/IP made in a time window (e.g., 1 second)
- if count > limit, ignore the socket message or send an error back

6. Implementation Flow Recap

1. Client connects via WebSocket.
2. Server fetches current state from Redis and sends it.
3. Client clicks a box -> sends `TOGGLE` message.
4. Server checks Redis Rate Limit.
5. If allowed -> update Redis state -> publish event to Redis Pub/Sub.
6. All servers receive event -> broadcast to clients.

7. Self Practice Checklist

[ ] 1. Install Redis (locally or via Docker)
[ ] 2. Setup a Node.js WebSocket server
[ ] 3. Connect to Redis using a package like `ioredis`
[ ] 4. Store a simple shared state in Redis
[ ] 5. Implement Pub/Sub to sync messages between two Node.js processes
[ ] 6. Implement a basic rate limit check before processing a socket message
