## Introduction

Socho tumhe 5 favorite movies store karni hain.

Ek tareeqa ye ho sakta hai:

```javascript
let movie1 = "Interstellar";
let movie2 = "3 Idiots";
let movie3 = "Inception";
```

Ye small example ke liye theek lagta hai.

But jaise hi values zyada ho jaati hain, alag-alag variables awkward lagne lagte hain.

Yahin arrays useful hoti hain.

Simple words mein:

**array ordered collection hoti hai jisme multiple values ek saath store ki ja sakti hain**

* * *

## What Arrays Are and Why We Need Them

Arrays tab useful hoti hain jab humein same type ya related values ko ek ordered list ke form mein store karna ho.

Examples:

- fruits list
- marks list
- tasks list
- movie names

Instead of:

```javascript
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
```

hum likh sakte hain:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Ye cleaner bhi hai aur manageable bhi.

* * *

## How to Create an Array

JavaScript mein array create karne ka simplest way square brackets use karna hai.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Array empty bhi ho sakti hai:

```javascript
let tasks = [];
```

* * *

## Accessing Elements Using Index

Array indexing `0` se start hoti hai.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Yani:

- first element -> index `0`
- second element -> index `1`
- third element -> index `2`

* * *

## Updating Elements

Pehle array aisi hai:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Ab agar hum second element ko update karein:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
fruits[1] = "Orange";

console.log(fruits);
```

Toh output ho jaayega:

```javascript
["Apple", "Orange", "Mango"]
```

Yahan ek important baat notice karo:

- index same rehta hai
- sirf us index par stored value change hoti hai

* * *

## Array Length Property

```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length);
```

`.length` total elements batati hai.

* * *

## Basic Looping Over Arrays

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Ye beginner ke liye basic and important pattern hai.

* * *

## Individual Variables vs Array

Individual variables:

```javascript
let mark1 = 78;
let mark2 = 82;
let mark3 = 90;
```

Array:

```javascript
let marks = [78, 82, 90];
```

Array version zyada clean hoti hai.

* * *

## A Small Practice Assignment

Pehle is array ko dekho:

```javascript
let movies = ["Interstellar", "Dune", "3 Idiots", "Inception", "Drishyam"];
```

Ab is code ko run karke samajhne ki koshish karo:

```javascript

console.log(movies[0]);
console.log(movies[movies.length - 1]);

movies[2] = "Zindagi Na Milegi Dobara";
console.log(movies);

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
```

Update hone se pehle aur baad mein difference ye hoga:

Before:

```javascript
["Interstellar", "Dune", "3 Idiots", "Inception", "Drishyam"]
```

After:

```javascript
["Interstellar", "Dune", "Zindagi Na Milegi Dobara", "Inception", "Drishyam"]
```

Yani sirf index `2` wali value change hui. Baaki array same rahi.

* * *

## Summary

- arrays multiple values ko order mein store karne ke liye use hoti hain
- array create karne ke liye square brackets use hote hain
- indexing `0` se start hoti hai
- elements ko index se access aur update kiya ja sakta hai
- `.length` property total elements batati hai
- basic `for` loop se array iterate ki ja sakti hai

* * *

## Final Thought

Arrays JavaScript ka ek bahut important foundation topic hain.

Ek baar arrays clearly samajh aa gayin, toh data ko group karna aur process karna kaafi easier lagne lagta hai.

* * *

## Continue Reading

- Previous: [Arrow Functions in JavaScript: A Simpler Way to Write Functions](https://prashsainidev.hashnode.dev/arrow-functions)
- Next: [Array Methods You Must Know](https://prashsainidev.hashnode.dev/array-methods)
