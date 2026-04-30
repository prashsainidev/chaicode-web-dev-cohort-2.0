## Introduction

In JavaScript, functions are not just blocks of code that run.

We can:

- store functions
- pass functions around
- and call them later

This is where the callback concept begins.

In simple words:

**a callback is a function that is given to another function as an argument**

* * *

## Functions as Values

In JavaScript, functions can behave like values.

Example:

```javascript
function greet() {
  console.log("Hello");
}
```

And a function can also be passed around.

This behavior is what makes callbacks possible.

* * *

## What a Callback Function Is

A simple example:

```javascript
function doSomething(task) {
  task();
}

function sayHello() {
  console.log("Hello");
}

doSomething(sayHello);
```

Here, `sayHello` is the callback.

Why?

Because it was passed into another function.

* * *

## Passing Functions as Arguments

This is the core of understanding callbacks.

```javascript
function processUser(callback) {
  console.log("Processing user...");
  callback();
}

processUser(function () {
  console.log("User processed");
});
```

Here, a function was passed as an argument.

That means:

- JavaScript can handle functions in a flexible way
- callbacks are a result of that flexibility

* * *

## Why Callbacks Are Used in Asynchronous Programming

Callbacks are especially useful when some work finishes later.

For example:

- after a timer finishes
- after an API response arrives
- after a file loads

Example:

```javascript
setTimeout(() => {
  console.log("This runs later");
}, 1000);
```

The function given here is the callback.

It will run later.

Simple meaning:

**the callback defines what should happen after the task is completed**

* * *

## Common Callback Usage Scenarios

Callbacks are very common in:

- timers
- event handling
- async tasks
- iteration methods

Example with array:

```javascript
[1, 2, 3].forEach(function (num) {
  console.log(num);
});
```

A callback is being used here as well.

* * *

## A Simple Async Example

```javascript
function prepareOrderCB(dish, cb) {
  setTimeout(() => cb(null, { dish, status: "prepared" }), 100);
}

prepareOrderCB("Biryani", (err, order) => {
  if (err) return console.log(err);
  console.log(order);
});
```

Here, the callback runs later, once the preparation is complete.

This is a practical beginner example of an async callback.

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Why Callbacks Feel Useful

Callbacks feel useful because they:

- allow flexible behavior
- can define later execution
- help handle asynchronous tasks

In a way, they give a function the freedom to say:

"What should happen after the work is done?"

* * *

## The Basic Problem of Callback Nesting

The problem with callbacks starts when multiple async steps get nested inside one another.

Example idea:

- prepare the order
- then pick it up
- then deliver it

Nested form:

```javascript
prepareOrderCB("Biryani", (err, order) => {
  if (err) return console.log(err);
  pickupOrderCB(order, (err, order) => {
    if (err) return console.log(err);
    deliverOrderCB(order, (err, order) => {
      if (err) return console.log(err);
      console.log(order);
    });
  });
});
```

Here, the code starts to feel deeper and less readable.

That is the callback nesting problem.

* * *

## Callback Problems - Conceptually

At the beginner level, callback problems can be understood like this:

- the code can become deeply nested
- readability can decrease
- error handling can start to feel repetitive

This is exactly the problem that later created the need for promises and async/await.

[[IMAGE SLOT 2 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Summary

- a callback is a function passed to another function as an argument
- in JavaScript, functions can behave like values
- callbacks are useful in asynchronous programming
- timers and later-running tasks often use callback patterns
- callback nesting can create readability problems

* * *

## Final Thought

Callbacks are the starting point of JavaScript's async world.

Once the idea of callbacks becomes clear, the journey toward promises and async/await starts to feel much more logical.

* * *

## Continue Reading

- Previous: [Synchronous vs Asynchronous JavaScript](https://prashsainidev.hashnode.dev/sync-vs-async)
- Next: [Understanding JavaScript Promises - A Beginner's Real Experience](https://prashsainidev.hashnode.dev/understanding-javascript-promises)
