# Frontend React - Chai Aur React (Part 3)

## Overview

This class was held on `04 May 2026` (approximate, following Part 2).

This session worked as the continuation of React fundamentals, diving deeper into custom hooks, server-side rendering, and error handling:

- creating and using custom hooks
- managing API data fetching with loading and error states
- utilizing environment variables (`.env`) in Vite
- understanding React under the hood (`React.createElement` without JSX)
- basics of Server-Side Rendering (SSR) with Express and `ReactDOMServer`
- implementing Error Boundaries to catch component crashes

The folder contains the real class code in `08` to `11`, and this README reflects the structure established in previous classes.

---

## What I Learned

### Custom Hooks & Data Fetching
- extracting data fetching logic into reusable custom hooks (e.g., `useSpecialChai`)
- managing `loading`, `error`, and `data` states cleanly
- securely accessing environment variables in Vite using `import.meta.env`

---

### React Under the Hood (No JSX)
- creating elements using `React.createElement` instead of JSX
- understanding how Babel/Vite compiles JSX down to standard JavaScript functions

---

### Server-Side Rendering (SSR)
- setting up a basic Node.js Express server
- using `ReactDOMServer.renderToString` to render React components to HTML strings on the server
- delivering pre-rendered HTML to the client for better performance and SEO

---

### Error Boundaries
- using `<ErrorBoundary>` components to catch JavaScript errors anywhere in their child component tree
- displaying fallback UIs (like a "Broken Cup") instead of crashing the whole application

---

## Practice Highlights

- class code coverage exists for `08`, `09`, `10`, and `11`
- this class bridges the gap between basic component UI, custom hooks, and advanced rendering patterns (SSR).

---

## Assignment

- Assignment details are currently pending.
- Will update this section if a specific follow-up task is assigned.

---

## Class Resources

Refer to `links.md` for:

- React Lab link (`react.chaicode.com`)
- Whiteboard links
- Official React documentation references

---

## Key Takeaways

- Custom hooks are essential for abstracting complex data fetching and state logic out of UI components.
- Understanding `React.createElement` demystifies JSX and shows how React truly constructs the DOM.
- SSR provides a way to serve fully rendered HTML directly from the server, which is foundational for frameworks like Next.js.
- Error boundaries are crucial for building resilient React applications that gracefully handle unexpected crashes.
