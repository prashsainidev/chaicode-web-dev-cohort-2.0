# Live Location Tracker

**Web Dev Cohort 2026 | Full Stack**

## Timeline
- **Start:** 29 Apr 2026, 11:00 am
- **Due:** 3 May 2026, 11:59 pm
- **Eval Begins:** 4 May 2026, 12:30 am
- **Eval Ends:** 6 May 2026, 11:59 pm

---

## Instructions

Build a real-time live location tracking system where authenticated users can share their current location and see other users moving on a map.

### Your system should include:
- OIDC / OAuth 2.0 authentication
- Only logged-in users should be able to share location
- Socket connection should identify the authenticated user
- Browser should send location updates at intervals
- Backend should publish location updates to Kafka
- Kafka consumers should process location events
- Socket server should broadcast live location updates to connected users
- Database processor should consume events and simulate or actually store location history
- Frontend should show users on a map using markers
- Marker position should update when new location comes in
- Users should be able to see live movement of others
- Project should handle basic disconnects, invalid data and duplicate events

*Do not treat Kafka as just an extra dependency. Kafka should be part of the actual flow.*

### Expected flow:
1. User logs in
2. User allows location permission
3. Frontend sends location through Socket.IO
4. Socket server receives location
5. Server publishes event to Kafka
6. Kafka consumer receives event
7. Socket server broadcasts update to users
8. Database processor consumes same event for persistence/logging

### Think about:
- Why direct DB writes on every socket event can become expensive
- Why Kafka helps in high-throughput location systems
- How rider/customer tracking apps use event streams
- How consumer groups work
- How one consumer can update sockets while another handles database writes
- How user ID should be used instead of only socket ID
- How auth should be connected with socket events
- How frequently location should be sent
- How stale users should be removed from the map
- How location history should be stored or simulated

---

## Submission Instructions

**Your submission must include:**
1. Public GitHub repository link
2. YouTube unlisted demo video link
3. Live deployed link (if possible)
4. Clear README file

**Demo video is compulsory.**  
No Google Drive links for demo videos. Upload the working demo on YouTube as unlisted and submit that link only.

**Your demo video should show:**
- Login / authentication flow
- Location permission flow
- Live location update on map
- Two browser windows or two users showing real-time updates

**Your README should include:**
- Project overview
- Tech stack
- Setup steps
- Environment variables
- OIDC auth setup
- Socket event flow
- Kafka event flow
- Demo video link
- Assumptions and limitations

---

## Evaluation Parameters

### Core Functionality (20 Marks)
- User can login
- User can share live location
- Map loads properly
- Other users appear on map
- Markers update when location changes

### WebSocket Implementation (15 Marks)
- Socket.IO connection works properly
- Location events are sent from client to server
- Server broadcasts updates correctly
- Disconnect and invalid event handling is present
- Socket is linked with authenticated user identity

### Kafka Implementation (25 Marks)
- Kafka producer is used correctly
- Kafka consumer is used correctly
- `location-updates` topic is used meaningfully
- Consumer groups are understood
- Kafka is actually part of the location update flow

### Database Processor / Persistence Thinking (15 Marks)
- Separate processor consumes location events
- Student explains DB write strategy
- Location history is stored, simulated or clearly designed
- They understand why every socket event should not directly become a heavy DB write

### OIDC / OAuth 2.0 Auth (15 Marks)
- Auth flow is implemented
- Protected socket actions are handled
- User identity is available in backend
- Location updates are tied to user ID
- Tokens/session handling is understandable

### Frontend Map Experience (10 Marks)
- Leaflet map works properly
- Markers are created and updated cleanly
- Current user and other users are understandable
- UI is usable and not broken

### Code Quality (10 Marks)
- Clean project structure
- Good naming
- Proper error handling
- Environment variables used
- Code is readable and explainable

### Demo Video (10 Marks)
- YouTube unlisted link submitted
- Working project is shown
- Kafka, socket, auth and map flow are explained
- Student clearly explains their own implementation

### README and Submission Quality (10 Marks)
- README is complete
- Setup instructions work
- `.env.example` is provided
- Repo is organized
- Links are valid

### System Understanding (10 Marks)
- Student understands high-throughput systems
- Kafka usage is justified
- Tradeoffs are explained
- System feels practical, not just copied code
