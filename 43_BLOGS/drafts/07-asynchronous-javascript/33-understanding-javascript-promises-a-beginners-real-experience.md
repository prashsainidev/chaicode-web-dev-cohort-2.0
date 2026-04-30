When I first saw this code:

```javascript
console.log("Start");
setTimeout(() => console.log("Async Task"), 2000);
console.log("End");
```

**Output:**

```plaintext
Start
End
Async Task
```

My first reaction was, "Okay, there is a 2000ms delay, so it printed last. Simple."

It felt logical. It made sense. And I thought that was the end of it.

**But then I tried one more experiment. And that is where the confusion started.**

* * *

## The Moment My Confidence Broke

I thought, "If it is coming late because of the 2000ms delay, then let me make it 0ms. Now it should run line by line, right?"

```javascript
console.log("3rd line");
setTimeout(() => console.log("2nd line"), 0);
console.log("3rd line");
```

I was pretty confident.

Then the output came:

```plaintext
3rd line
3rd line
2nd line
```

And that was the moment when I thought:

**"Wait. How is it still coming last even after 0ms?"**

This was not just a delay issue. Something else was happening inside JavaScript that I did not understand yet.

And honestly, that is where my real journey into async JavaScript started.

* * *

## JavaScript Is Single-Threaded - And That Changes Everything

JavaScript is a **single-threaded language**.

Simple meaning:

- one main task at a time
- one call stack
- one execution flow

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

So when JavaScript sees `setTimeout`, it does not sit there holding that timer by itself.

It hands that work off to the browser or Node.js environment.

After the timer finishes, the callback does not run directly. It first goes into a queue.

And that queue only gets processed when the **Call Stack is completely empty**.

That is why `0ms` does not mean "immediately."

`0ms` really means:

"Send this to the queue after the minimum delay. It will run when the stack is free."

* * *

## Call Stack, Queue, and Event Loop - This Trio Really Matters

To understand JavaScript's async system, three things need to be clear:

- Call Stack
- Queue
- Event Loop

Think of it with a restaurant analogy:

- **Call Stack** = the counter where the actual work is happening
- **Queue** = the waiting area
- **Event Loop** = the manager who keeps checking whether the counter is free

[[IMAGE SLOT 2 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

But there is one more important detail here:

- **Macrotask Queue** -> `setTimeout`, `setInterval`, and similar tasks
- **Microtask Queue** -> Promises, mutation observers, and similar tasks

And the most important rule is:

**Microtasks always run before Macrotasks.**

* * *

## The Real Async Flow Sequence

The flow looks something like this:

```plaintext
1. Code runs in the Call Stack
2. The setTimeout callback goes to the Macrotask Queue
3. Promise resolution goes to the Microtask Queue
4. The Call Stack becomes empty
5. The Event Loop checks what is ready
6. The Microtask Queue gets drained first
7. Then work is taken from the Macrotask Queue
```

That is why Promises behave differently from `setTimeout`, even when both seem "async."

* * *

## Why Do Promises Get VIP Treatment?

Look at this code:

```javascript
console.log("Start");

Promise.resolve("Done!")
  .then(val => console.log("Microtask:", val));

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

console.log("End");
```

**Output:**

```plaintext
Start
End
Microtask: Done!
Macrotask: setTimeout
```

Both of them look async here.

But the Promise ran first because the Promise callback goes into the **Microtask Queue**, while the `setTimeout` callback goes into the **Macrotask Queue**.

[[IMAGE SLOT 3 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

**Golden Rule: Promises run before setTimeout when the Call Stack becomes empty.**

* * *

## Before Promises, There Was Callback Hell

To really appreciate Promises, it helps to understand the callback era a little.

The callback idea was simple:

a function was given to another function so it could be called after the work was completed.

The problem started when multiple async steps came in a chain.

```javascript
prepareOrderCB("Biryani", (err, order) => {
  if (err) return console.log(err);
  pickupOrderCB(order, (err, order) => {
    if (err) return console.log(err);
    deliverOrderCB(order, (err, order) => {
      if (err) return console.log(err);
      console.log(`${order.dish}: ${order.status}`);
    });
  });
});
```

This kind of code:

- was deeply nested
- was hard to read
- repeated error handling at every step
- became irritating to maintain

That is why people called it **Callback Hell** or the **Pyramid of Doom**.

Promises cleaned up that mess.

* * *

## What Is a Promise, in Simple Words?

A Promise is a JavaScript object that represents the **eventual completion or failure** of an asynchronous operation.

In simple words:

**A Promise is a container for a future result.**

The result is not here yet, but it will arrive.

It will either be:

- a success
- or a failure

### The 3 States of a Promise

- `pending`
- `fulfilled`
- `rejected`

[[IMAGE SLOT 4 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Creating and Using a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Chaicode ready");
    } else {
      reject(new Error("Something went wrong"));
    }
  }, 2000);
});

myPromise
  .then(result => {
    console.log("Success:", result);
    return result.toUpperCase();
  })
  .then(result => console.log("Uppercase:", result))
  .catch(error => console.log("Error:", error.message))
  .finally(() => console.log("Done - no matter what"));
```

Here:

- `resolve()` sends the success result
- `reject()` sends the error
- `.then()` handles success
- `.catch()` handles errors
- `.finally()` runs in both cases

And the most useful part is this:

Promises allow clean chaining.

```javascript
prepareOrder("Biryani")
  .then(order => pickupOrder(order))
  .then(order => deliverOrder(order))
  .then(order => console.log(`${order.dish}: ${order.status}`))
  .catch(err => console.log("Something went wrong:", err));
```

No pyramid. No deep nesting. Error handling is centralized too.

* * *

## Async/Await - The Same Promise, Cleaner Syntax

Then came `async/await`.

Internally, it still uses Promises, but the syntax feels more natural.

Compared to a `.then()` chain, it feels more readable.

```javascript
async function makeTea() {
  try {
    const water = await boilWater(200);
    const leaves = await grindLeaves();
    const tea = await steepTea(leaves);
    const final = await addSugar(tea, 2);

    console.log("Tea is ready!", final);
  } catch (err) {
    console.log("Something went wrong:", err.message);
  }
}
```

`async` makes the function return a Promise.

`await` basically says:

"Wait. Let the Promise resolve first. Then we will continue."

That is why async/await feels more natural to beginners.

* * *

## Promise Utilities - When You Need to Handle Multiple Promises Together

In real projects, you often need to handle more than one Promise at the same time.

### Promise.all

Use it when:

**you need all of them to succeed**

```javascript
const [profile, settings, notifs] = await Promise.all([
  fetchProfile(),
  fetchSettings(),
  fetchNotifications()
]);
```

If even one fails, the whole operation gets rejected.

### Promise.allSettled

Use it when:

**you want the result of every Promise, whether it passes or fails**

```javascript
const results = await Promise.allSettled([
  fetchProfile(),
  fetchSettings(),
  fetchNotifications()
]);
```

### Promise.any

Use it when:

**one successful result is enough**

```javascript
const result = await Promise.any([
  fetchFromServer1(),
  fetchFromServer2(),
  fetchFromServer3()
]);
```

[[IMAGE SLOT 5 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## What Became the Real Learning for Me

Promises felt theoretical to me until that `0ms setTimeout` confusion hit me.

That one output forced me to understand this:

- JavaScript is single-threaded
- the environment and queues have different roles
- the Event Loop is real
- Promises get special treatment

And honestly, that is when async JavaScript started feeling less scary.

* * *

## Final Thought

Sometimes the most useful learning does not come from a perfectly planned lecture, but from one confusing output.

For me, Promises were exactly that kind of topic.

At first, I thought `0ms` meant "right now."

Then I realized that even "right now" follows a system in JavaScript.

And that was the moment when I felt:

**I am not just memorizing syntax anymore, I am starting to understand the system.**

* * *

## Continue Reading

- Previous: [Callbacks in JavaScript: Why They Exist](https://prashsainidev.hashnode.dev/callbacks)
- Next: [Async/Await in JavaScript: Writing Cleaner Asynchronous Code](https://prashsainidev.hashnode.dev/async-await)
