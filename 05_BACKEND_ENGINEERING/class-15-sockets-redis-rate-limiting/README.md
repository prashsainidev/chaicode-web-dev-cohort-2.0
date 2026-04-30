# Backend Engineering - Sockets, Redis, Rate Limiting: 1 Million Checkboxes

## Overview

This backend class was held on Saturday, `25 Apr 2026`.

The topic for this session was `Sockets, Redis, Rate Limiting: 1 Million Checkboxes`.

This class focused on scaling real-time WebSocket communication using Redis as a high-speed distributed state store and a Pub/Sub message broker, as well as protecting the system using Redis-based rate limiting.

---

## What I Learned

### Redis as State Store
- storing the shared state of 1 million checkboxes efficiently in Redis (using bitmaps)
- overcoming the limitations of single-server Node.js memory
- keeping the global state true and fast across all connected clients

---

### Redis Pub/Sub
- understanding Publish/Subscribe messaging patterns
- broadcasting events from one server to multiple other servers seamlessly
- eliminating tight coupling between socket servers

---

### Rate Limiting with Redis
- preventing abuse, spam, and server crashes from auto-clickers
- using Redis to track and limit actions per user/IP within a specific time window
- protecting resources like CPU, Memory, and DB connections

---

## Class Notes

The class board link currently available is:
- `https://app.eraser.io/workspace/H9mwGkEVRIlmmHNNu0zd`

Notebook-style markdown notes for this class are added in:
- `class-notes/class-15-sockets-redis-rate-limiting-notes.md`

---

## Current Status

- class attended
- topic confirmed as `Sockets, Redis, Rate Limiting: 1 Million Checkboxes`
- notes created and added to `class-notes`
- Eraser board link is added
- Practice is pending

---

## Practice Direction

Practice now includes:
- setting up a local Redis instance
- connecting a Node.js WebSocket server to Redis using `ioredis`
- syncing shared state between two terminal instances via Pub/Sub
- creating a custom rate limiter middleware for socket messages
