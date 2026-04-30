## Introduction

As JavaScript projects grow, one problem appears quickly:

**keeping all the code in one file becomes messy**

This is where modules become useful.

* * *

## Why Modules Are Needed

If everything is in one file, then:

- readability can decrease
- maintainability can become difficult
- reuse can feel awkward

Modules let us organize code into smaller, focused files.

* * *

## Exporting Functions or Values

Export means:

**something from this file can be used in another file**

```javascript
export const siteName = "Chaicode";
```

```javascript
export function greet(name) {
  return `Hello ${name}`;
}
```

* * *

## Importing Modules

Import means:

**bringing an exported thing from another file into your current file**

```javascript
import { greet, siteName } from "./utils.js";
```

* * *

## Named Exports

```javascript
export const appName = "Chaicode";
export function add(a, b) {
  return a + b;
}
```

```javascript
import { appName, add } from "./utils.js";
```

* * *

## Default Export

```javascript
export default function greet(name) {
  return `Hello ${name}`;
}
```

```javascript
import greet from "./greet.js";
```

* * *

## Default vs Named Exports

- named export -> imported with the exact name
- default export -> the main export of the file

* * *

## Benefits of Modular Code

- code becomes more organized
- files stay smaller
- reuse becomes easier
- maintenance becomes better

* * *

## A Small Example

`math.js`

```javascript
export function add(a, b) {
  return a + b;
}
```

`main.js`

```javascript
import { add } from "./math.js";

console.log(add(2, 3));
```

[[IMAGE SLOT 1 - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Summary

- modules are used to organize code into multiple files
- `export` makes values or functions available to other files
- `import` brings those values into the current file
- default and named exports use different syntax
- modular code is more maintainable and reusable

* * *

## Final Thought

Modules move JavaScript from just working code toward structured code.

Once the import/export flow becomes clear, the idea of code organization starts to feel much more natural.

* * *

## Continue Reading

- Previous: [Error Handling in JavaScript: Try, Catch, Finally](https://prashsainidev.hashnode.dev/error-handling)
- Next: [Array Flatten in JavaScript](https://prashsainidev.hashnode.dev/array-flatten)
