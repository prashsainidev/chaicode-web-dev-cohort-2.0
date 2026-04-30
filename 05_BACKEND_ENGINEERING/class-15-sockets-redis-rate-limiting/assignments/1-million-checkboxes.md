# 1 Million Checkboxes

**Web Dev Cohort 2026 | Full Stack**

## Timeline
- **Start:** 29 Apr 2026, 11:00 am
- **Due:** 3 May 2026, 11:59 pm
- **Eval Begins:** 4 May 2026, 12:30 am
- **Eval Ends:** 6 May 2026, 11:59 pm

---

## Instructions

In this project, you have to build a real-time web application where users can interact with a large grid of checkboxes.

The core idea is inspired by the “1 Million Checkboxes” concept, but here you will build it from scratch using your own backend, WebSocket layer, Redis coordination and custom rate limiting.

### Tech Stack
**The frontend can be built using:**
- HTML
- CSS
- JavaScript

**The backend must be built using:**
- Node.js
- Express
- WebSockets
- Redis

### Core Requirements
Your application should allow users to see a large number of checkboxes and toggle them. When one user changes the state of a checkbox, the change should be reflected for other connected users in real time using WebSockets.

You also need to think about scale. This is not just about rendering checkboxes on screen. You should think about how the backend handles many users, how socket connections are managed, how checkbox state is stored, and how updates are broadcast efficiently.

**Your system should include:**
- A frontend grid of checkboxes
- WebSocket connection between client and server
- Backend in Express
- Redis for storing or coordinating checkbox state
- Redis Pub/Sub for broadcasting updates across server instances
- Custom rate limiting without using external rate-limit packages
- OIDC / OAuth 2.0 based authentication server
- Logged-in users should be able to interact with the system
- Anonymous users can be restricted or given read-only access, depending on your design
- Proper handling of socket IDs and connected users
- Efficient checkbox update flow
- Basic protection against spam clicks or abuse
- Clean project structure and readable code

*You are expected to implement rate limiting yourself. Do not use packages like express-rate-limit. You can use Redis, IP address, user ID, socket ID, time windows, counters, expiry and your own logic to build it.*

### Things to Think About:
- How will 1 million checkbox states be stored?
- Will you store each checkbox separately or use a compact structure?
- How will the server know which checkbox changed?
- How will other users receive updates?
- What happens if multiple users toggle the same checkbox?
- How will Redis Pub/Sub help if there are multiple backend servers?
- How will rate limiting work for HTTP APIs and WebSocket events?
- How will authentication work before allowing socket actions?
- How will you prevent one user from spamming too many checkbox changes?
- How will the frontend avoid rendering everything badly?
- How will the app behave if a user refreshes the page?

You do not need to make this production-perfect, but your system should clearly show that you understand real-time communication, state management, Redis, rate limiting and authentication flow.

---

## Submission Instructions

**Your submission must include:**
1. Public GitHub repository link
2. Live deployed link (if possible)
3. YouTube unlisted demo video link
4. Clear README file

**Demo video is compulsory.**  
DO NOT submit Google Drive links for the video. Upload the working demo on YouTube as an unlisted video and submit that link.

**Your demo video should show:**
- Login / authentication flow
- Checkbox grid loading
- Checkbox toggle working
- Real-time update between two browser windows or two users

**Your GitHub README should include:**
- Project overview
- Tech stack
- Features implemented
- How to run locally
- Environment variables required
- Redis setup instructions
- Auth flow explanation
- WebSocket flow explanation
- Rate limiting logic explanation
- Screenshots or demo link

*Make sure the project runs properly before submission. Broken setup, missing `.env.example`, unclear README or non-working demo will affect evaluation.*

---

## Evaluation Parameters

### Core Functionality (20 Marks)
- Checkbox grid is visible and usable
- Users can toggle checkboxes
- Checkbox state is maintained correctly
- App handles a large checkbox system thoughtfully
- Refresh or reload behavior is handled properly

### WebSocket Implementation (20 Marks)
- WebSocket connection is implemented properly
- Checkbox updates are sent through sockets
- Other connected users receive updates in real time
- Socket events are cleanly structured
- Connection and disconnection handling is present

### Redis Usage (20 Marks)
- Redis is used meaningfully, not just added for name
- Checkbox state or coordination uses Redis properly
- Redis Pub/Sub is used for broadcasting across server instances
- Redis keys are named cleanly
- Student can explain why Redis is needed in this system

### Custom Rate Limiting (15 Marks)
- Rate limiting is implemented manually
- No external rate-limit package is used
- Logic handles IP, user ID or socket ID based limits
- WebSocket event spam is controlled
- Student understands window, counter and expiry based limiting

### Authentication with OIDC / OAuth 2.0 (15 Marks)
- Auth flow is implemented
- Users can log in
- Protected actions are handled correctly
- Socket actions are connected with authenticated users
- Token/session handling is understandable and secure enough for the assignment

### Frontend Quality (10 Marks)
- UI is usable and not broken
- Large checkbox rendering is handled thoughtfully
- DOM updates are not extremely inefficient
- State update flow is clean
- Basic responsive layout is present

### Backend Structure (10 Marks)
- Express app is structured cleanly
- Routes, socket handlers, Redis logic and auth logic are separated properly
- Error handling is present
- Environment variables are used properly
- Code is readable

### Demo Video and Explanation (10 Marks)
- YouTube unlisted video is submitted
- Working demo is clearly shown
- Real-time behavior is demonstrated

### README and Submission Quality (10 Marks)
- README is clear and complete
- Setup instructions work
- `.env.example` is provided
- GitHub repo is organized
- Submission links are valid

### Overall System Thinking (10 Marks)
- Student shows understanding beyond basic coding
- Design considers scale and abuse prevention
- Redis, WebSockets and rate limiting are connected logically
- Implementation feels practical
