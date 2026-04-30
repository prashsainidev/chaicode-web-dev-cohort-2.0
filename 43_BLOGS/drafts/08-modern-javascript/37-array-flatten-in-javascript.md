## Introduction

Sometimes an array does not contain direct values only, but other arrays as well.

```javascript
const numbers = [1, [2, 3], [4, 5]];
```

This is called a nested array.

And when we convert it into a simple single-level array, that process is called flattening.

* * *

## What Nested Arrays Are

Nested array means:

**an array containing other arrays**

```javascript
const data = [1, [2, 3], [4, 5]];
```

* * *

## Why Flattening Arrays Is Useful

Flattening is useful when we:

- want all the values in a single list
- want easier processing
- want simpler looping
- want to solve interview-style problems

* * *

## The Basic Concept of Flattening

Before:

```javascript
[1, [2, 3], [4, 5]]
```

After:

```javascript
[1, 2, 3, 4, 5]
```

That means the layers were removed.

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Approach 1: `flat()`

```javascript
const numbers = [1, [2, 3], [4, 5]];
const flatNumbers = numbers.flat();

console.log(flatNumbers);
```

* * *

## Approach 2: Manual Thinking with Loops

```javascript
const numbers = [1, [2, 3], [4, 5]];
let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (Array.isArray(numbers[i])) {
    for (let j = 0; j < numbers[i].length; j++) {
      result.push(numbers[i][j]);
    }
  } else {
    result.push(numbers[i]);
  }
}

console.log(result);
```

* * *

## Approach 3: Recursive Thinking

When arrays can be deeply nested, the idea of a recursive approach comes in.

At the beginner level, just understand this:

if an inner array also contains another inner array, the same flattening logic may need to be applied again.

* * *

## Common Interview Scenario

A simple interview question could be:

"Flatten this nested array."

The real test is:

- how you visualize the problem
- how you separate direct values from nested arrays
- how you build the final flat result

* * *

## A Small Practice Example

```javascript
const arr = [1, [2, 3], [4, 5]];

console.log(arr.flat());
```

Manual logic:

```javascript
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  } else {
    result.push(arr[i]);
  }
}

console.log(result);
```

* * *

## Summary

- nested arrays contain other arrays inside them
- flattening means converting a nested structure into a flat array
- the `flat()` built-in method is useful for simple flattening
- the manual loop approach strengthens problem-solving thinking
- array flattening is a common interview-style topic

* * *

## Final Thought

Array flattening may look like a small problem at first, but it is a useful topic for building problem-solving mindset.

Once you learn to visualize the nested structure, the flattening logic starts to feel much more natural.

* * *

## Continue Reading

- Previous: [JavaScript Modules: Import and Export Explained](https://prashsainidev.hashnode.dev/javascript-modules)
- Next: [NodeList vs HTMLCollection: Understanding the Real Difference in the DOM](https://prashsainidev.hashnode.dev/nodelist-vs-htmlcollection-understanding-the-real-difference-in-the-dom)
