# Book My Ticket Hackathon
**Movie ticket booking system**  
**Participants:** 551  
**Timeline:** 11 Apr 2026 – 15 Apr 2026  
**Mode:** Solo  

## About
This hackathon is a follow-up assignment based on your recent Chai Aur SQL class learnings.

You will be provided with a starter source code zip file that already contains working endpoints. Your task is not to build the system from scratch, but to study the existing codebase carefully and extend it properly by adding an authentication layer and protected booking flow.

**Starter Code:** [https://github.com/chaicodehq/book-my-ticket](https://github.com/chaicodehq/book-my-ticket)

Your goal is to build a simplified Book My Ticket platform where:
- Users can register
- Users can login
- Only authenticated users can access protected endpoints
- Logged-in users can book seats for a movie

*For now, you can assume mock movie data and focus mainly on authentication and seat booking logic. Frontend is optional. You can build it if you want, but evaluation will be based on backend implementation.*

This assignment is designed to simulate a real developer scenario where you extend an existing production codebase instead of starting fresh.

## Rules & Guidelines
- Starter source code must be used as the base
- Do not remove or break existing endpoints
- Add authentication layer on top of the current system
- Implement register and login functionality
- Protect booking related endpoints using auth middleware
- Only logged-in users should be allowed to book seats
- Prevent duplicate seat bookings
- Associate bookings with logged-in users
- Keep movie data mocked for now
- Frontend is optional
- Code should be clean, structured and readable
- Submit a working GitHub repository with proper README explaining setup and flow

## Key Dates
- **Registration Opens:** 11 April 2026, 18:00
- **Registration Closes:** 15 April 2026, 19:00
- **Hackathon Starts:** 11 April 2026, 23:00
- **Hackathon Ends:** 15 April 2026, 23:59

## Tracks
### Backend Ninja
This track focuses on building a production-style backend by extending an existing codebase instead of starting from scratch.

You will implement authentication and protected booking flows for a Book My Ticket platform using the starter source code provided. The goal is to understand how real backend systems evolve by adding features on top of existing APIs.

**Your backend should support:**
- user registration and login
- authentication using tokens
- protected endpoints accessible only after login
- seat booking for a movie
- preventing duplicate seat bookings
- associating bookings with users
- clean integration without breaking existing endpoints

*Frontend is optional. Evaluation will primarily focus on backend quality and implementation approach.*

**This track tests your ability to:**
- read existing code
- extend features correctly
- design protected APIs
- handle booking logic safely
- structure production-ready backend code

#### Evaluation Criteria
- Authentication Implementation: 10
- Protected Route Handling: 10
- Booking Logic Correctness: 10
- Code Structure & Readability: 10
- Integration with Existing Codebase: 10
- Optional Bonus: Frontend Integration: 10

## Sponsors
- Chai Code

## Judges
- Hitesh Choudhary (Founder & CEO, Chai Code)
- Shubham Waje (Database Master, Chai Code)
- Akash Kadlag (Full Stack Engineer, Chai Code)
- Piyush Garg (Principal Engineer, Chai Code)
- Suraj Jha (Mobile Architect, Chai Code)

## Winners
**Backend Ninja**
- **Stellar Tickets** (preetjain2200) - Exclusive ChaiCode Swags
- **Seat Pakki kro** (armaandipsinghmaan) - Exclusive ChaiCode Swags
- **book my ticket** (sayantanbal) - Exclusive ChaiCode Swags

## FAQ
**Do we need to build the project from scratch?**  
No, use the provided starter codebase.

**Is frontend required for submission?**  
No, it is optional. Evaluation is based on backend.

**What booking functionality is expected?**  
Authenticated users should be able to:
- view available seats
- book seats
- avoid duplicate bookings
- associate bookings with their user account
