## Introduction

In JavaScript, `this` is one of those concepts that can feel a little magical at first.

The reason is simple:

the same function can behave differently in different situations because `this` can change.

And then we have:

- `call()`
- `apply()`
- `bind()`

These three methods give us control over the context in which a function runs.

* * *

## What `this` Means in Simple Terms

A beginner-friendly way to think about it:

**Think of `this` as "who is calling the function."**

In other words, `this` can change depending on the context from which the function is called.

It is not the perfect formal definition, but it is very useful for building beginner intuition.

* * *

## `this` Inside Normal Functions

Inside a standalone function, `this` does not feel as simple as it does inside an object method.

```javascript
function showThis() {
  console.log(this);
}

showThis();
```

Here, the behavior of `this` can feel different depending on the environment and the way the function is called.

For now, just remember this:

- in a normal function, `this` is not automatically tied to a specific object

* * *

## `this` Inside Objects

Inside an object method, `this` feels much more intuitive.

```javascript
const film = {
  name: "Bajirao Mastani",
  lead: "Ranveer",
  introduce() {
    console.log(this.lead + " performs in " + this.name);
  }
};

film.introduce();
```

Here, `this` refers to the object.

Why?

Because the method was called through the `film` object.

* * *

## The Caller Idea Again

From this example, remember one simple rule:

```javascript
film.introduce();
```

Here, the caller is `film`.

That is why `this` inside the method is connected to `film`.

This basic idea makes `call()`, `apply()`, and `bind()` much easier to understand later.

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## What `call()` Does

`call()` lets us manually run a function with a specific object as its context.

Example:

```javascript
function cookDish(ingredient, style) {
  return this.name + " prepares " + ingredient + " in " + style + " style";
}

const sharmaKitchen = { name: "Sharma Ji's Kitchen" };

console.log(cookDish.call(sharmaKitchen, "Paneer", "Mughlai"));
```

Here:

- `cookDish` is a normal function
- through `call()`, we made `this` point to `sharmaKitchen`

Simple meaning:

**`call()` runs the function immediately with the given context**

* * *

## What `apply()` Does

`apply()` works almost the same way as `call()`.

The main difference is how the arguments are passed.

Example:

```javascript
function cookDish(ingredient, style) {
  return this.name + " prepares " + ingredient + " in " + style + " style";
}

const guptaKitchen = { name: "Gupta Ji's Kitchen" };

console.log(cookDish.apply(guptaKitchen, ["Chole Kulche", "Punjabi"]));
```

Here, the arguments are passed in an array-like form.

Simple meaning:

**`apply()` also runs the function immediately, but it takes arguments in an array-like form**

* * *

## What `bind()` Does

`bind()` is a little different.

It does not run the function immediately.

Instead, it returns a **new function** with a fixed `this` value.

Example:

```javascript
function reportDelivery(location, status) {
  return this.name + " at " + location + ": " + status;
}

const deliveryBoy = { name: "Ranveer" };

const boundReport = reportDelivery.bind(deliveryBoy);

console.log(boundReport("Haridwar", "Delivered"));
```

Here, `bind()` returned a new function whose context was already set.

Simple meaning:

**`bind()` creates a bound function for future use**

* * *

## Difference Between `call`, `apply`, and `bind`

| Method | Runs Immediately? | Arguments Style | Return |
| --- | --- | --- | --- |
| `call()` | Yes | one by one | function result |
| `apply()` | Yes | array-like | function result |
| `bind()` | No | one by one while binding | new function |

This table is very useful for beginners.

[[IMAGE SLOT 2 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## A Small Borrowing Example

Method borrowing is a very practical use case for this topic.

```javascript
const actor = {
  name: "Ranveer",
  bow() {
    return this.name + " takes a bow";
  }
};

const anotherActor = { name: "Vicky" };

console.log(actor.bow.call(anotherActor));
```

Here, the original method belonged to the `actor` object, but with `call()` it was used with another object.

That is the basic idea of method borrowing.

* * *

## A Small Practice Assignment

Try this:

1. Create an object with a method that uses `this`
2. Use that same method on another object through `call()`
3. Pass array arguments with `apply()`
4. Use `bind()` to store a function and call it later

This practice makes the difference between `this` and these three methods much clearer.

* * *

## Summary

- at the beginner level, `this` can be understood through the caller
- `this` can feel different in normal functions and object methods
- `call()` runs a function immediately with a given context
- `apply()` also runs a function immediately, but takes arguments in array form
- `bind()` returns a new bound function that can be called later

* * *

## Final Thought

`this`, `call()`, `apply()`, and `bind()` can seem magical at first.

But once the basic idea of caller and context becomes clear, the topic starts to feel much less mysterious.

* * *

## Continue Reading

- Previous: [The `new` Keyword in JavaScript](https://prashsainidev.hashnode.dev/new-keyword-in-javascript)
- Next: [Destructuring in JavaScript](https://prashsainidev.hashnode.dev/destructuring)
