## Introduction

JavaScript seekhte waqt sabse pehle jo cheezein milti hain, unmein variables aur data types bahut important hote hain.

Agar simple language mein samjho, toh variable ek box ki tarah hota hai jisme hum information store karte hain.

Real life example:

- name store karna hai
- age store karni hai
- student ho ya nahi, ye store karna hai

Program ko kaam karne ke liye data chahiye hota hai.

Aur us data ko naam ke saath store karne ke liye variables use hote hain.

* * *

## What Variables Are and Why They Are Needed

Variable ek named storage hota hai.

Simple words mein:

**value ko yaad rakhne ke liye variable use hota hai**

Example:

```javascript
let name = "Prashant";
```

Yahan:

- `name` variable ka naam hai
- `"Prashant"` stored value hai

Variables isliye needed hote hain kyunki bina unke har jagah raw values likhni padti.

Aur phir code ko read, update, aur reuse karna difficult ho jaata.

* * *

## A Real-Life Box Analogy

Variable ko ek labeled box ki tarah socho.

Box par label likha hai:

- `name`
- `age`
- `isStudent`

Aur box ke andar actual value rakhi hai.

Example:

- `name` box -> `"Prashant"`
- `age` box -> `22`
- `isStudent` box -> `true`

Ye analogy beginners ke liye bahut useful hoti hai.

* * *

## How to Declare Variables in JavaScript

JavaScript mein variables declare karne ke teen common ways hain:

- `var`
- `let`
- `const`

### Using `var`

```javascript
var name = "Prashant";
```

### Using `let`

```javascript
let age = 22;
```

### Using `const`

```javascript
const isStudent = true;
```

Sabhi variable declaration ke liye use ho sakte hain, but inka behavior thoda alag hota hai.

* * *

## Primitive Data Types

Data type ka matlab hota hai value kis type ki hai.

Beginner level par yeh primitive data types samajhna important hai:

- string
- number
- boolean
- null
- undefined

### String

Text values ke liye.

```javascript
let name = "Prashant";
```

Yahan `name` ek string hai.

### Number

Numbers ke liye.

```javascript
let age = 22;
```

### Boolean

True ya false values ke liye.

```javascript
let isStudent = true;
```

### Null

Intentional empty value ko represent karne ke liye.

```javascript
let middleName = null;
```

### Undefined

Jab variable declare toh ho, but value assign na hui ho.

```javascript
let city;
```

* * *

## Data Types with Practical Examples

```javascript
let name = "Prashant";     // string
let age = 22;              // number
let isStudent = true;      // boolean
let middleName = null;     // null
let city;                  // undefined
```

Is tarah ke examples beginners ke liye useful hote hain because value aur type dono clear dikhte hain.

* * *

## Basic Difference Between `var`, `let`, and `const`

Beginner level par inka simple difference samajhna enough hai.

### `var`

- old style declaration
- aaj bhi JavaScript mein exist karta hai
- modern code mein usually kam prefer kiya jaata hai

### `let`

- value ko later change kar sakte ho

Example:

```javascript
let age = 22;
age = 23;
```

### `const`

- declare karne ke baad variable ko reassign nahi kar sakte

Example:

```javascript
const country = "India";
```

Yeh baad mein change nahi kiya ja sakta:

```javascript
country = "USA";
```

Yeh error dega.

* * *

## Show How Values Can Change

`let` ke saath:

```javascript
let score = 10;
score = 20;
console.log(score);
```

`const` ke saath:

```javascript
const pi = 3.14;
// pi = 3.14159
```

Yahan second line allowed nahi hogi.

Simple rule:

- `let` = change allowed
- `const` = reassign not allowed

* * *

## What Is Scope?

Scope ka beginner-friendly meaning hai:

**variable kahan se access kiya ja sakta hai**

Simple example:

```javascript
let outside = "I am outside";

if (true) {
  let inside = "I am inside";
  console.log(outside);
  console.log(inside);
}

console.log(outside);
```

Yahan `outside` broader area mein available hai.

Lekin `inside` sirf block ke andar available hota hai.

Beginner ke liye bas itna samajhna enough hai ki har variable har jagah available nahi hota.

* * *

## A Small Practice Assignment

Try this:

```javascript
let name = "Prashant";
let age = 22;
const isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

age = 23;
console.log(age);
```

Phir `const` wali value ko change karke dekho aur observe karo kya hota hai.

Ye practice beginner ko instantly difference feel kara deti hai.

* * *

## Summary

- variables information store karne ke liye use hote hain
- JavaScript mein `var`, `let`, aur `const` se variables declare kiye ja sakte hain
- primitive data types mein string, number, boolean, null, aur undefined important hain
- `let` values ko change karne deta hai
- `const` reassign karne nahi deta
- scope ka matlab hota hai variable kahan available hai

* * *

## Final Thought

Variables aur data types JavaScript ke basic topics lag sakte hain, but ye poori language ka foundation hain.

Ek baar ye clearly samajh aa gaye, toh aage ka code zyada readable aur less confusing lagta hai.

* * *

## Continue Reading

- Previous: [CSS Selectors 101: Targeting Elements with Precision](https://prashsainidev.hashnode.dev/css-selectors-101)
- Next: [JavaScript Operators: The Basics You Need to Know](https://prashsainidev.hashnode.dev/javascript-operators)

