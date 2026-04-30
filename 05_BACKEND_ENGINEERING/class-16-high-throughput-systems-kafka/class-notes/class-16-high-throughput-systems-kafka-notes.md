1. The Live Location Problem (High Throughput)

When building a Live Location Tracker (like Uber, Swiggy, or Zomato):
- thousands of drivers send their GPS coordinates every few seconds
- this creates a massive flood of incoming data (high throughput)
- standard databases (like Postgres or MongoDB) cannot handle thousands of rapid inserts per second without choking
- we need a specialized system to "buffer" and stream this massive data efficiently

2. Why Kafka?

Apache Kafka is a distributed event streaming platform.
It is built specifically for high throughput and fault tolerance.

Why use it here?
- it acts as a massive shock absorber between the producers (drivers) and consumers (databases/users)
- it can handle millions of messages per second
- it guarantees that no location update is lost, even if the database is temporarily slow

3. Kafka Architecture Basics

To understand Kafka, you need to know these 5 terms:

- Producer: the app sending data (e.g., driver's mobile app sending GPS)
- Consumer: the app reading data (e.g., backend service saving to DB or sending to rider's socket)
- Topic: a category or "folder" where messages are stored (e.g., `driver-locations`)
- Partition: topics are split into partitions for parallel processing and speed
- Broker: a single Kafka server node

4. Redis Pub/Sub vs Kafka

Why not use Redis Pub/Sub like in the Checkboxes app?
- Redis Pub/Sub is "fire and forget". If the consumer is offline, the message is lost forever.
- Kafka stores the events on disk. If a consumer goes down and comes back, it can read from where it left off.
- Kafka is meant for massive, durable data pipelines.

5. Building the Live Location Tracker

Flow of data:
[ Driver App ] -> (WebSocket / HTTP) -> [ Node.js API ]
   |
   v
[ Node.js API acts as Kafka Producer ] -> sends data to Topic `live-location`
   |
   v
[ Kafka Cluster ] -> securely buffers the massive data stream
   |
   v
[ Node.js Consumer ] -> reads from Kafka -> [ Updates DB / Broadcasts to Rider Socket ]

6. Implementation Flow Recap

1. Setup Kafka locally using Docker (usually requires Zookeeper or KRaft).
2. Create a Node.js Producer using `kafkajs`.
3. Create a Node.js Consumer using `kafkajs`.
4. Driver sends location to Node.js WebSocket.
5. Node.js WebSocket server Produces a message to Kafka topic.
6. A separate Node.js Consumer reads the Kafka topic in batches.
7. Consumer saves batch to Database (reducing DB load) or broadcasts to Rider.

7. Self Practice Checklist

[ ] 1. Run Kafka and Zookeeper locally using Docker Compose.
[ ] 2. Setup a basic Node.js app and install `kafkajs`.
[ ] 3. Write a Kafka Producer that sends fake GPS coordinates every 1 second.
[ ] 4. Write a Kafka Consumer that listens to the topic and logs the coordinates.
[ ] 5. Understand Kafka Partitions and Consumer Groups.
[ ] 6. Review the reference Gist implementation.
