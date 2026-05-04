# Frontend React - Chai Aur React (Part 2)

## Overview

This class was held on Sunday, `03 May 2026`.

This session worked as the continuation of React fundamentals, diving deeper into advanced hooks and data fetching logic:

- advanced state management
- understanding `useRef` and DOM manipulation in React
- complex `useEffect` implementations
- introduction to React Router (if covered)
- data fetching with modern tools (like Tanstack Query)

The folder contains the real class code in `foundation-06` to `foundation-07`, and this README reflects the structure established in Part 1.

---

## What I Learned

### Advanced State & References
- going beyond simple `useState` updates
- using `useRef` to hold mutable values without triggering re-renders
- using `useRef` for direct DOM element access when absolutely necessary

---

### Complex Side Effects
- handling race conditions in `useEffect`
- deep dive into dependency arrays
- cleaning up complex subscriptions and event listeners

---

### Data Fetching & State Synchronization
- the limitations of standard `fetch` inside `useEffect`
- managing loading, error, and success states cleanly
- intro to tools like Tanstack Query (as seen in `foundation-07` setup) to handle caching and asynchronous state automatically

---

## Practice Highlights

- class code coverage exists for `foundation-06` and `foundation-07`
- my practice folder is currently "In Progress" as I digest these advanced concepts
- this class bridges the gap between basic component UI and production-ready data fetching

---

## Assignment

- Assignment details are currently pending.
- Will update this section if a specific follow-up task is assigned.

---

## Class Resources

Refer to `links.md` for:

- Class codebase link (`react.chaicode.com`)
- Whiteboard links (pending)
- Official React documentation references

---

## Key Takeaways

- React components become significantly more powerful when you master the dependency array in `useEffect`.
- `useRef` is an essential escape hatch but should not replace standard state flow.
- Modern React development heavily relies on dedicated data-fetching libraries (like Tanstack Query) rather than raw `useEffect` fetches for production applications.
- Practice is required to fully internalize caching and asynchronous states.
