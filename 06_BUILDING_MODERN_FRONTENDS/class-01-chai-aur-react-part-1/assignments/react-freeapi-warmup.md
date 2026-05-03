# React FreeAPI Warmup

**Section:** Building Modern Frontends  
**Class:** Chai Aur React (Part 1)  
**Added on:** 03 May 2026

---

## Why This Assignment Exists

This class already covered the exact building blocks needed for a beginner React API task:

- JSX
- list rendering
- props
- `useState`
- `useEffect`

So the next best assignment is not another static card layout.

It is a small React app that fetches real data and renders it cleanly.

---

## Core Task

Build a small React app using `FreeAPI`.

Use `useEffect` to fetch data and `useState` to store and render it.

---

## Choose One Main Version

### Option 1. Quote Widget

Build a small UI that:

- fetches a random quote from FreeAPI
- shows quote text and author
- includes a refresh button
- handles loading state
- handles error state

Suggested endpoint:

- `https://api.freeapi.app/api/v1/public/quotes/random`

---

### Option 2. Multi-Quote Feed

Build a React page that:

- loads quote data multiple times or from multiple endpoints if available
- stores the response in state
- renders repeated cards using `.map()`
- extracts a reusable `QuoteCard` component

---

### Option 3. API Explorer Card

Build a small React interface that:

- fetches one FreeAPI endpoint
- shows status like loading / success / error
- prints selected fields only
- includes a button to re-fetch data

This is good if you want to practice state transitions cleanly.

---

## Minimum Requirements

Your solution should include:

1. one React app inside `practice/`
2. API request using `fetch()`
3. state for loading, error, and response data
4. at least one reusable child component
5. clean UI rendering for success and failure cases

---

## Recommended Folder Direction

- `practice/` -> your actual implementation
- `assignments/` -> assignment brief and later completion notes
- `class-code/` -> keep untouched as lecture reference

---

## Suggested Learning Flow

1. start from a clean Vite React app
2. create one piece of state for data
3. create one piece of state for loading
4. create one piece of state for error
5. fetch inside `useEffect`
6. render the response cleanly
7. split one UI card into a separate component

---

## Stretch Goal

After the first version works:

- add a `Refresh Quote` button
- show timestamp of last fetch
- add a second tab or button for another FreeAPI endpoint

---

## What This Prepares Me For

This assignment prepares me for:

- API-driven React apps
- handling side effects correctly
- state-based UI rendering
- later frontend classes where data fetching becomes normal
