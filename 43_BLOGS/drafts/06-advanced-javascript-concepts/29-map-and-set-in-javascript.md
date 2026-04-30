## Introduction

In JavaScript, we often use arrays and objects.

But in some situations, modern JavaScript gives us two more useful structures:

- `Map`
- `Set`

Understanding them is useful because they handle some problems better than arrays and objects.

* * *

## What Map Is

`Map` is a key-value storage structure.

In simple words:

**Map stores key-value pairs**

Example:

```javascript
const userMap = new Map();

userMap.set("name", "Prashant");
userMap.set("age", 22);

console.log(userMap.get("name"));
```

It may look like an object, but the behavior and use case of `Map` are a little different.

* * *

## What Set Is

`Set` stores unique values.

In simple words:

**Set automatically ignores duplicate values**

Example:

```javascript
const numbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(numbers);
```

Here, the duplicate `2` and `3` will not be repeated.

This makes it useful when uniqueness matters.

* * *

## Map vs Object

An object is also a key-value structure.

So why do we need `Map`?

A beginner-friendly high-level answer:

- Object is the traditional key-value storage
- Map is a dedicated key-value collection

`Map` can feel useful when:

- you want explicit collection behavior
- you want to use a more modern API style
- you want clearer size and iteration patterns

Example:

```javascript
const student = {
  name: "Prashant",
  age: 22
};
```

Map version:

```javascript
const studentMap = new Map();
studentMap.set("name", "Prashant");
studentMap.set("age", 22);
```

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Set vs Array

An array is an ordered list and allows duplicates.

Example:

```javascript
const nums = [1, 2, 2, 3];
```

A `Set` keeps only unique values:

```javascript
const numsSet = new Set([1, 2, 2, 3]);
```

Simple comparison:

- Array = ordered list
- Set = unique values collection

That uniqueness is the most important feature of `Set`.

* * *

## Why Set Is Useful

`Set` is useful when:

- you want to remove duplicate values
- you want to maintain unique items
- you want to quickly check whether a value already exists

Example:

```javascript
const tags = new Set(["js", "html", "js", "css"]);
console.log(tags);
```

It naturally handles duplicates.

[[IMAGE SLOT 2 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## When to Use Map and Set

### Use `Map` when:

- you need a key-value structure
- a dedicated collection style feels useful
- you want more explicit mapping than a regular object

### Use `Set` when:

- you need unique values
- you want to avoid duplicates
- uniqueness is important

* * *

## A Small Practice Example

Map:

```javascript
const roles = new Map();
roles.set("admin", "full access");
roles.set("student", "limited access");

console.log(roles.get("student"));
```

Set:

```javascript
const skills = new Set(["HTML", "CSS", "JS", "JS"]);
console.log(skills);
```

* * *

## Summary

- `Map` stores key-value pairs
- `Set` stores unique values
- compared to an object, `Map` can be understood as a dedicated key-value collection
- `Set` is different from an array because it automatically removes duplicates
- both are useful tools in modern JavaScript

* * *

## Final Thought

`Map` and `Set` may feel optional at the beginner stage, but they are a useful part of modern JavaScript.

Once their basic use cases become clear, you start to see that arrays and objects are not always the only or best options.

* * *

## Continue Reading

- Previous: [Template Literals in JavaScript](https://prashsainidev.hashnode.dev/template-literals)
- Next: [String Polyfills and Common Interview Methods in JavaScript](https://prashsainidev.hashnode.dev/polyfills-and-interview-methods)
