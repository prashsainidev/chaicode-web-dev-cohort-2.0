# Frontend React - Chai Aur React (Part 1)

## Overview

This class was held on Friday, `02 May 2026`.

This session worked as the actual React entry point:

- setting up React with Vite
- understanding JSX and component-based UI
- rendering lists from arrays
- passing props between components
- using `children`
- handling state with `useState`
- getting started with side effects using `useEffect`

The folder already had the real class code in `foundation-01` to `foundation-05`, so this README now reflects what was actually covered instead of staying a placeholder.

---

## What I Learned

### React Setup and Project Flow

- React app setup using Vite
- understanding `main.jsx`, `App.jsx`, and the root render flow
- why component-based UI is easier to scale than one large file

---

### JSX and Rendering Basics

- JSX lets us write UI in a JavaScript-friendly way
- React components return UI blocks
- a component should describe what to render from data

In the early foundation files, the class started from a very small `App` and then gradually moved toward reusable UI.

---

### Rendering Lists from Arrays

- mapping arrays into JSX
- repeating cards using `.map()`
- thinking in terms of data first, UI second

The `shows` examples made this clear:

- one array
- many rendered cards
- cleaner than manually writing repeated markup

---

### Props and Component Reuse

- sending data from parent to child using props
- making smaller reusable components like `AvatarCard`
- understanding that React becomes powerful when UI pieces stay modular

---

### Children Pattern

- `children` helps a wrapper component render nested custom content
- useful for reusable shells, layouts, cards, and sections

This came through in the custom `Shell` component example.

---

### State with `useState`

- state lets UI change over time
- clicking buttons should update state, not regular variables
- React re-renders the component when state changes

The counter example is a simple but important step because it explains why React is interactive rather than just static JSX.

---

### Effects with `useEffect`

- `useEffect` runs side-effect logic outside normal rendering
- timers should be cleaned up
- network requests should be handled carefully
- `AbortController` is useful when a fetch should stop on unmount

The later foundation code introduced:

- countdown timer logic
- fetch flow
- cleanup functions

That is a very important bridge from basic React syntax to real app behavior.

---

## Practice Highlights

- class code coverage exists from `foundation-01` to `foundation-05`
- my practice folder already contains `foundation-1` and `foundation-2`
- this class now clearly connects setup, JSX, props, state, and effects in one progression

---

## Assignment & Projects

I added a React + FreeAPI assignment here:
- [React FreeAPI Warmup](assignments/react-freeapi-warmup.md)

**MasterJi FreeAPI Projects:**
During this class, 8 official FreeAPI projects were also assigned (Random Users, Meals, Cats, Jokes, Quotes, Products, YouTube, Auth). 
- All 8 projects are properly linked and tracked in the **[Assignments Index](assignments/README.md)** so we remember they belong to this class, while their actual files stay safely in the `42_PROJECTS` folder.

This fits well with the class because after learning `useState` and `useEffect`, the next smart step is consuming a real API inside a React UI.

---

## Class Resources

Refer to `links.md` for:

- React documentation
- Vite documentation
- FreeAPI links
- class code progression
- practice references

---

## Key Takeaways

- React is easier to understand when followed in layers: setup, JSX, lists, props, state, then effects
- list rendering and component reuse are the first big mindset shifts
- `useState` explains interactivity
- `useEffect` explains how React talks to the outside world
- a FreeAPI-based mini project is the best next practice after this class
