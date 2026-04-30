## Introduction

Promises made asynchronous code better than callbacks.

But as the steps increased, `.then()` chaining could still start to feel a little noisy.

This is where `async` and `await` become useful.

In simple words:

**async/await is a cleaner and more readable way to write promise-based code**

* * *

## Why Async/Await Was Introduced

It was important to make asynchronous JavaScript code more readable.

Callback nesting was creating problems.

Promises improved things, but in longer async chains the readability still did not feel perfect.

That is why async/await was introduced:

- to improve readability
- to make async code feel more step by step
- to make error handling clearer

* * *

## Async/Await as Syntactic Sugar

In a beginner-friendly way:

**async/await is not a replacement for Promises, it is a cleaner syntax for them**

That is why people say:

async/await is syntactic sugar over promises.

Meaning:

the underlying async work is still promise-based, but the way of writing it feels better.

* * *

## How Async Functions Work

The `async` keyword is used with a function.

Example:

```javascript
async function sayHello() {
  return "Hello";
}
```

This function may look normal, but an async function gives promise-like behavior.

For beginners, just remember this:

an `async` function is prepared to handle asynchronous work.

* * *

## The `await` Keyword Concept

The idea of `await` is simple:

**wait for the Promise to resolve, then move forward**

Example:

```javascript
async function getData() {
  const result = await Promise.resolve("Done");
  console.log(result);
}
```

Here, `await` is waiting for the Promise result.

* * *

## A Simple Promise Example

```javascript
function boilWater(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Water boiled"), time);
  });
}
```

Promise chaining style:

```javascript
boilWater(500)
  .then((msg) => console.log(msg));
```

Async/await style:

```javascript
async function makeTea() {
  const msg = await boilWater(500);
  console.log(msg);
}
```

This is the core idea behind the readability improvement.

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## How Async/Await Improves Readability

Promise chaining:

```javascript
doTask()
  .then((result) => nextTask(result))
  .then((result) => finalTask(result))
  .catch((error) => console.log(error));
```

Async/await:

```javascript
async function runTasks() {
  try {
    const a = await doTask();
    const b = await nextTask(a);
    const c = await finalTask(b);
    console.log(c);
  } catch (error) {
    console.log(error);
  }
}
```

The second version feels more step by step.

* * *

## Error Handling with Async Code

With async/await, error handling usually feels clearer through `try...catch`.

```javascript
async function fetchData() {
  try {
    const result = await Promise.resolve("Success");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
```

This is especially helpful when there are multiple async steps.

* * *

## A Small Practice Example

```javascript
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Prashant"), 500);
  });
}

async function showUser() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

showUser();
```

This is a strong enough async/await example for a beginner.

[[IMAGE SLOT 2 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Summary

- async/await is a cleaner way to write asynchronous code
- it is based on Promises
- `async` prepares a function for async behavior
- `await` waits for a Promise to resolve
- async/await improves readability
- error handling feels clearer with `try...catch`

* * *

## Final Thought

Async/await is a strong step toward making JavaScript async code more human-readable.

Once this flow becomes clear, promise-based code starts to feel much less intimidating.

* * *

## Continue Reading

- Previous: [Understanding JavaScript Promises - A Beginner's Real Experience](https://prashsainidev.hashnode.dev/understanding-javascript-promises)
- Next: [Error Handling in JavaScript: Try, Catch, Finally](https://prashsainidev.hashnode.dev/error-handling)
