# Build Your Own ChaiTailwind
**Web Dev Cohort 2026**
**Prize: INR 3000**

## Timeline
- **Start:** 19 Mar 2026, 9:00 pm
- **Due:** 10 May 2026, 11:59 pm

## What to Submit
Your submission must include:
- A working hosted project link
- A public GitHub repository
- A short video recording where you:
  - Explain your approach
  - Show how your class system works
  - Walk through key parts of your code
  - Demonstrate the project in the browser
- A Twitter (X) post that includes:
  - What you built
  - How it works (briefly)
  - Screenshots or demo
  - GitHub link
  - Hosted link

*Submit the Twitter post link along with your project.*

## What to Build?
In this project, you will build your own lightweight utility-first CSS engine using JavaScript.

Instead of writing traditional CSS, users will write class names following a pattern like `chai-*` (for example: `chai-p-2`, `chai-bg-red`, `chai-text-center`). Your script will scan the DOM, read these class names, convert them into corresponding inline styles, and apply them dynamically.

For example:
- `chai-p-2` → `padding: 2px`
- `chai-bg-red` → `background-color: red`

**Your system should:**
- Traverse the DOM after page load
- Identify all classes starting with `chai-`
- Parse the class names and extract styling values
- Apply inline styles using JavaScript
- Remove or ignore the original `chai-*` classes

**You are expected to support multiple commonly used utilities such as:**
- Spacing (padding, margin)
- Colors (background, text)
- Typography (font size, alignment)
- Borders and radius
- Basic layout utilities

*This project focuses on DOM manipulation, pattern parsing, and building a reusable client-side library that mimics the behavior of utility-first CSS frameworks.*
