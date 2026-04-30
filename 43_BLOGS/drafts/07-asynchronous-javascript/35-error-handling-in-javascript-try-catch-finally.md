## Introduction

JavaScript code does not always run perfectly.

Sometimes:

- the wrong variable gets used
- an invalid value appears
- an unexpected situation occurs

Errors can happen in all of these situations.

And if errors are not handled, the program can feel like it fails abruptly.

This is where error handling becomes useful.

* * *

## What Errors Are in JavaScript

In simple words, an error is an unexpected problem that happens during code execution.

Example:

```javascript
console.log(userName);
```

If `userName` is not defined at all, a runtime error can happen.

* * *

## Why Error Handling Matters

Error handling matters because:

- the app feels less crash-prone
- debugging becomes easier
- graceful failure becomes possible
- the user experience becomes better

* * *

## Using `try` and `catch`

```javascript
try {
  console.log(userName);
} catch (error) {
  console.log("Something went wrong");
}
```

Here:

- `try` -> the risky code
- `catch` -> handle the problem

* * *

## Runtime Error Example

```javascript
try {
  let user = null;
  console.log(user.name);
} catch (error) {
  console.log("Error caught:", error.message);
}
```

* * *

## The `finally` Block

The idea of the `finally` block is simple:

**whether an error happens or not, this block will run**

```javascript
try {
  console.log("Trying...");
} catch (error) {
  console.log("Error happened");
} finally {
  console.log("This always runs");
}
```

* * *

## Throwing Custom Errors

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
  return "Access granted";
}
```

```javascript
try {
  console.log(checkAge(16));
} catch (error) {
  console.log(error.message);
}
```

* * *

## A Simple Practical Example

```javascript
function bootNavigation(mapLoaded) {
  try {
    if (!mapLoaded) {
      throw new Error("Map was not loaded");
    }
    return "Navigation ready";
  } catch (error) {
    console.log("Navigation failed:", error.message);
  } finally {
    console.log("Navigation sequence completed");
  }
}

bootNavigation(false);
```

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Summary

- errors are unexpected problems that happen during JavaScript execution
- `try` is used for risky code
- `catch` handles the error
- `finally` always runs
- `throw` can be used to create custom errors
- error handling is important for both graceful failure and debugging

* * *

## Final Thought

It is easy to ignore error handling, but in real applications it is a very important skill.

Once `try`, `catch`, and `finally` become clear, code starts to feel much safer and more predictable.

* * *

## Continue Reading

- Previous: [Async/Await in JavaScript: Writing Cleaner Asynchronous Code](https://prashsainidev.hashnode.dev/async-await)
- Next: [JavaScript Modules: Import and Export Explained](https://prashsainidev.hashnode.dev/javascript-modules)
