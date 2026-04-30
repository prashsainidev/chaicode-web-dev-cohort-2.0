## Introduction

When beginners first see `...` in JavaScript, it often feels like it means just one thing.

But the interesting part is this:

the same `...` syntax can play two different roles:

- spread
- rest

The difference depends on the context.

In simple words:

- spread = expand
- rest = collect

* * *

## What the Spread Operator Does

The spread operator expands values.

Example with array:

```javascript
const nums = [1, 2, 3];
console.log(...nums);
```

Here, the array values are being expanded.

This is helpful when you want to use the elements of an array as separate values.

* * *

## Spread with Arrays

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];
console.log(combined);
```

Result:

```javascript
[1, 2, 3, 4]
```

So with spread, arrays can be combined easily.

* * *

## Spread with Objects

```javascript
const user = { name: "Prashant", age: 22 };
const updatedUser = { ...user, city: "Jaipur" };

console.log(updatedUser);
```

Here, the existing properties of the object are being expanded into a new object.

This is a very common real-world usage pattern.

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## What the Rest Operator Does

The rest operator collects multiple values.

Example:

```javascript
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30);
```

Here:

- multiple arguments were passed
- rest collected them into a single array

In simple words:

**rest gathers many values into one group**

* * *

## Rest in Function Parameters

```javascript
function showMarks(name, ...marks) {
  console.log(name);
  console.log(marks);
}

showMarks("Prashant", 78, 82, 91);
```

Here:

- `name` takes the first argument
- `...marks` collects the remaining arguments

* * *

## Spread vs Rest: Core Difference

This is the heart of the topic.

### Spread

- expands values
- breaks an existing collection into individual values

### Rest

- collects values
- turns multiple incoming values into one grouped collection

A simple memory trick:

- spread = open it out
- rest = gather it in

[[IMAGE SLOT 2 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Practical Use Cases

### Spread is useful for:

- combining arrays
- copying or updating objects
- expanding function arguments

### Rest is useful for:

- handling a variable number of function arguments
- collecting remaining values

* * *

## A Small Practice Example

```javascript
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

function collect(...items) {
  console.log(items);
}

collect("a", "b", "c");
```

In this example:

- spread creates a new array
- rest collects values

* * *

## Summary

- the `...` syntax can play two roles: spread and rest
- spread expands values
- rest collects values
- spread is useful with arrays and objects
- rest is especially useful in function parameters
- understanding the context is the most important part

* * *

## Final Thought

Spread and rest may look the same at first glance, but they work in opposite directions.

One expands, and the other collects.

Once this idea becomes clear, the `...` syntax starts to feel very natural.

* * *

## Continue Reading

- Previous: [Destructuring in JavaScript](https://prashsainidev.hashnode.dev/destructuring)
- Next: [Template Literals in JavaScript](https://prashsainidev.hashnode.dev/template-literals)
