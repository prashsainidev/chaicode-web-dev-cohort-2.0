# Backend Engineering - High Throughput Systems - Kafka: Live Location Tracker

## Overview

This backend class was held on Sunday, `26 Apr 2026`.

The topic for this session was `High Throughput Systems - Kafka: Live Location Tracker`.

This class explored building massive real-time data pipelines using Apache Kafka, focusing on how to handle high throughput scenarios like a live location tracking system.

---

## What I Learned

### High Throughput Challenges
- understanding why traditional databases fail under thousands of rapid inserts per second
- understanding the need for a durable message broker / event streaming platform

---

### Kafka Architecture
- learning about Producers, Consumers, Brokers, Topics, and Partitions
- understanding how Kafka acts as a shock absorber for massive data streams
- comparing Kafka's durable disk-based logs vs Redis Pub/Sub's fire-and-forget memory approach

---

### Live Location Tracker Architecture
- using Node.js to receive rapid WebSocket GPS updates
- using `kafkajs` to produce messages to a Kafka topic
- consuming messages asynchronously to update a database in batches or broadcast to riders

---

## Class Notes

The class board link currently available is:
- `https://app.eraser.io/workspace/rU5ivf0lJT19Y4BFIDGN`

Notebook-style markdown notes for this class are added in:
- `class-notes/class-16-high-throughput-systems-kafka-notes.md`

---

## Current Status

- class attended
- topic confirmed as `High Throughput Systems - Kafka: Live Location Tracker`
- notes created and added to `class-notes`
- Eraser board and Gist links are added
- Practice is pending

---

## Practice Direction

Practice now includes:
- spinning up Kafka using Docker Compose
- creating a `kafkajs` Producer to simulate a driver sending GPS coordinates
- creating a `kafkajs` Consumer to process those coordinates
- exploring Consumer Groups and Partitions
