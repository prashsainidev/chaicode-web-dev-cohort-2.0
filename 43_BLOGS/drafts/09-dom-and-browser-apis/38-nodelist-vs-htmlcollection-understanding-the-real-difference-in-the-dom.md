## Introduction

At some point while learning the DOM, almost everyone runs into this confusion:

**`querySelectorAll()` returns one thing, and `getElementsByClassName()` returns another. But both look like lists.**

Sometimes you get a `NodeList`.
Sometimes you get an `HTMLCollection`.

At first glance, they look the same.

But the real difference is in their behavior.

And this difference matters in DOM manipulation, iteration, and interview questions.

* * *

## Why This Topic Matters

Inside the browser DOM, manually handling elements one by one is not practical.

We often need multiple items at once:

- all buttons
- all cards
- all list items
- all children of a parent

That is why the browser gives us collections.

But not all collections behave the same way.

That is where the difference between `NodeList` and `HTMLCollection` becomes important.

* * *

## Start with the Simple Idea

Understand both with one simple sentence:

- `NodeList` = a list of DOM nodes
- `HTMLCollection` = a collection of HTML elements

This definition is useful, but real clarity comes when we look at the behavior.

* * *

## What Is a `NodeList`?

`NodeList` is a list-like collection that represents DOM nodes.

Example:

```javascript
const items = document.querySelectorAll(".item");
console.log(items);
```

`querySelectorAll()` usually returns a `NodeList`.

Important beginner point:

do not think of a `NodeList` as an array.

It may look like an array, but technically it is not one.

Still, in many cases it feels convenient to work with because it often supports `forEach()`.

* * *

## What Is an `HTMLCollection`?

`HTMLCollection` is also a list-like structure, but it is specifically a collection of HTML elements.

Example:

```javascript
const cards = document.getElementsByClassName("card");
console.log(cards);
```

Methods like `getElementsByClassName()` and `getElementsByTagName()` commonly return an `HTMLCollection`.

Again, this is not an array either.

But its behavior differs from `NodeList` in important ways.

* * *

## The Biggest Difference: Static vs Live

This is the most important part.

### `NodeList` from `querySelectorAll()`

Most of the time, it is a **static snapshot**.

That means:

if the DOM changes later, the old list does not update automatically.

### `HTMLCollection`

It is usually a **live collection**.

That means:

if the DOM changes, the collection can update by itself.

Example:

```javascript
const boxes = document.getElementsByClassName("box");
console.log(boxes.length);

const newBox = document.createElement("div");
newBox.className = "box";
document.body.appendChild(newBox);

console.log(boxes.length);
```

Here, the length of the `HTMLCollection` can change automatically after the DOM update.

That is why the live vs static difference matters so much.

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## A Simple Analogy

Think of it like this:

- `HTMLCollection` = a live attendance register
- `NodeList` from `querySelectorAll()` = a printed photo of the class list

If a new student gets added to the attendance register, the list changes.

In a printed photo, nothing changes.

This analogy is very useful for beginners.

* * *

## Another Important Difference: Nodes vs Elements

The names themselves give a hint:

- `NodeList` -> nodes
- `HTMLCollection` -> HTML elements

Not everything in the DOM is an element.

There are also text nodes, comment nodes, and other node types.

`HTMLCollection` is specifically a collection of elements.

In some contexts, `NodeList` is connected to the broader idea of nodes.

At the beginner level, it is enough to remember this:

**`HTMLCollection` is more element-focused, while `NodeList` comes from the node side of the DOM.**

* * *

## How You Commonly Get Them

### Methods that commonly return `NodeList`

```javascript
document.querySelectorAll(".item");
```

### Methods that commonly return `HTMLCollection`

```javascript
document.getElementsByClassName("item");
document.getElementsByTagName("div");
document.children;
```

Remembering these common sources is very helpful in practical debugging.

* * *

## Can You Loop Over Them?

Yes, you can loop over both of them.

But the difference is:

- `NodeList` often feels convenient with `forEach()`
- `HTMLCollection` does not always have the same methods available directly

Example:

```javascript
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log(item.textContent);
});
```

With `HTMLCollection`, you often use a normal loop or convert it first:

```javascript
const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i].textContent);
}
```

* * *

## They Are Not Real Arrays

This is a very common beginner confusion.

Both collections:

- can be accessed by index
- can give you `.length`
- look like lists

But neither of them is an actual JavaScript array.

That is why:

- `map()`
- `filter()`
- `reduce()`

array methods like these do not always work directly.

If needed, you can convert them:

```javascript
const list = document.querySelectorAll(".item");
const realArray = Array.from(list);
```

* * *

## A Small Practical Example

Imagine a page with 3 cards.

You use two different selectors:

```javascript
const liveCards = document.getElementsByClassName("card");
const staticCards = document.querySelectorAll(".card");
```

Now if you add one more `.card` through JavaScript:

- `liveCards` may update
- `staticCards` may stay the same

This one example makes it much clearer that DOM collections are not just "lists of the same kind."

* * *

## One Gentle Exception

At the beginner level, this rule is useful:

- `querySelectorAll()` -> static `NodeList`
- `HTMLCollection` -> live

But later you will see that some `NodeList` cases can behave differently too.

For now, just keep the main mental model in mind.

Getting the foundation clear first is more important.

* * *

## Common Beginner Confusions

### Are they arrays?

No.

Both are array-like, but they are not actual arrays.

### Are they the same thing?

No.

They may look similar, but their source and behavior are different.

### Which one updates automatically?

Usually `HTMLCollection`.

### Which one is easier with `forEach()`?

Usually `NodeList` from `querySelectorAll()`.

* * *

## Summary

- `NodeList` and `HTMLCollection` are both DOM collections
- `NodeList` often comes from `querySelectorAll()`
- `HTMLCollection` commonly comes from `getElementsByClassName()` or similar methods
- `HTMLCollection` is usually live
- `NodeList` from `querySelectorAll()` is usually static
- both are array-like, but not real arrays

* * *

## Final Thought

In DOM learning, many things look the same until their behavior gets exposed.

`NodeList` vs `HTMLCollection` is one of those topics.

Once the live vs static difference becomes clear, both selectors and DOM manipulation start to make much more sense.

* * *

## Continue Reading

- Previous: [Array Flatten in JavaScript](https://prashsainidev.hashnode.dev/array-flatten)
- Next: [Serialization and Deserialization in Web Development](https://prashsainidev.hashnode.dev/serialization-and-deserialization-in-web-development)
