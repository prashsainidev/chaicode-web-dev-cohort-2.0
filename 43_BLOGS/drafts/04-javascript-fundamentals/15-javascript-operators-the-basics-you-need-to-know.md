## Introduction

JavaScript mein sirf values store karna enough nahi hota.

Humein un values ke saath kaam bhi karna hota hai.

For example:

- do numbers add karna
- do values compare karna
- true/false check karna
- existing value update karna

Ye sab operators ki help se hota hai.

Simple words mein:

**operators values ke saath kaam karne ke tools hote hain**

* * *

## What Operators Are

Operator ek symbol hota hai jo values par koi action perform karta hai.

Example:

```javascript
5 + 3
```

Yahan `+` operator hai.

Ye sirf JavaScript math tak limited nahi hai.

Operators comparison, logic, aur assignment ke liye bhi use hote hain.

* * *

## Arithmetic Operators

Arithmetic operators simple math operations ke liye use hote hain.

Main ones:

- `+`
- `-`
- `*`
- `/`
- `%`

Example:

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

Ye beginners ke liye sabse easy operators hote hain samajhne ke liye.

* * *

## Comparison Operators

Comparison operators do values ko compare karte hain aur usually boolean result dete hain.

Important comparison operators:

- `==`
- `===`
- `!=`
- `>`
- `<`

Example:

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");
```

* * *

## `==` vs `===`

Ye beginner ke liye bahut important difference hai.

### `==`

Loose comparison karta hai.

```javascript
console.log(10 == "10"); // true
```

### `===`

Strict comparison karta hai.

```javascript
console.log(10 === "10"); // false
```

Simple memory trick:

- `==` value compare karta hai loosely
- `===` value aur type dono compare karta hai

Beginners ke liye usually `===` zyada safe hota hai.

* * *

## Logical Operators

Logical operators conditions combine karne ke liye use hote hain.

Main logical operators:

- `&&`
- `||`
- `!`

### AND `&&`

```javascript
let isLoggedIn = true;
let isPaidUser = true;

console.log(isLoggedIn && isPaidUser);
```

### OR `||`

```javascript
let hasCoupon = false;
let isMember = true;

console.log(hasCoupon || isMember);
```

### NOT `!`

```javascript
let isStudent = false;
console.log(!isStudent);
```

* * *

## Assignment Operators

Assignment operators values assign ya update karne ke liye use hote hain.

Examples:

- `=`
- `+=`
- `-=`

```javascript
let score = 10;
score += 5;
console.log(score);

score -= 2;
console.log(score);
```

Ye everyday coding mein kaafi common hote hain.

* * *

## Everyday Practical Examples

Arithmetic:

```javascript
let price = 100;
let tax = 18;
console.log(price + tax);
```

Comparison:

```javascript
let age = 18;
console.log(age >= 18);
```

Logical:

```javascript
let isLoggedIn = true;
let hasAccess = false;
console.log(isLoggedIn && hasAccess);
```

Assignment:

```javascript
let count = 1;
count += 1;
console.log(count);
```

* * *

## A Small Practice Assignment

Try this:

```javascript
let a = 12;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a == "12");
console.log(a === "12");

console.log(a > b && b < a);
```

Isse arithmetic, comparison, aur logical operators ka basic feel aa jaata hai.

* * *

## Summary

- operators values ke saath action perform karte hain
- arithmetic operators math ke liye use hote hain
- comparison operators values compare karte hain
- logical operators conditions combine karte hain
- assignment operators values assign aur update karte hain
- `==` aur `===` ka difference samajhna very important hai

* * *

## Final Thought

Operators chhote symbols lag sakte hain, but everyday JavaScript logic inhi par depend karta hai.

Ek baar inka basic behavior clear ho gaya, toh conditions aur expressions samajhna kaafi easier lagta hai.

* * *

## Continue Reading

- Previous: [Understanding Variables and Data Types in JavaScript](https://prashsainidev.hashnode.dev/variables-and-data-types)
- Next: [Control Flow in JavaScript: If, Else, and Switch Explained](https://prashsainidev.hashnode.dev/control-flow-if-else-switch)

