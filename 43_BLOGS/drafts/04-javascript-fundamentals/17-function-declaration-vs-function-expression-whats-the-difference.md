## Introduction

JavaScript mein functions bahut important hote hain.

Functions humein help karte hain:

- same code ko baar-baar reuse karne mein
- logic ko organize karne mein
- program ko cleaner banane mein

Simple words mein:

**function reusable block of code hota hai**

Lekin JavaScript mein function banane ke do common tareeqe hote hain:

- function declaration
- function expression

Dono ka purpose similar lagta hai, but behavior kuch jagahon par different hota hai.

* * *

## What Functions Are and Why We Need Them

Without functions, humein same logic baar-baar likhni padti.

Example:

agar humein do numbers add karne ka logic multiple jagah chahiye, toh function usse reusable bana deta hai.

```javascript
function add(a, b) {
  return a + b;
}
```

Ab jab bhi zarurat ho:

```javascript
console.log(add(2, 3));
console.log(add(10, 5));
```

Yehi functions ka real benefit hai.

* * *

## Function Declaration Syntax

Function declaration mein function directly apne naam ke saath define hoti hai.

Example:

```javascript
function multiply(a, b) {
  return a * b;
}
```

Yahan:

- `function` keyword use hua
- `multiply` function ka naam hai
- parameters `a` aur `b` hain

Ye syntax beginners ke liye kaafi straightforward hoti hai.

* * *

## Function Expression Syntax

Function expression mein function ko ek variable ke andar store kiya jaata hai.

Example:

```javascript
const multiply = function (a, b) {
  return a * b;
};
```

Yahan function ek value ki tarah behave kar rahi hai jo variable `multiply` mein store hui hai.

JavaScript mein functions values ho sakti hain, aur yehi baat function expressions ko possible banati hai.

* * *

## Side-by-Side Comparison

Function declaration:

```javascript
function greet(name) {
  return "Hello " + name;
}
```

Function expression:

```javascript
const greet = function (name) {
  return "Hello " + name;
};
```

Dono ka output similar ho sakta hai.

Difference mostly syntax aur behavior ka hota hai.

* * *

## Key Differences Between Declaration and Expression

### 1. Naming Style

Function declaration directly named hoti hai.

Function expression variable ke through access hoti hai.

### 2. Definition Style

Declaration standalone dikhti hai.

Expression assignment jaisi lagti hai.

### 3. Hoisting Behavior

Yeh beginner ke liye sabse interesting difference hai.

* * *

## Basic Idea of Hoisting

Hoisting ko beginner language mein aise samjho:

**kuch cheezein code mein define hone se pehle bhi accessible lag sakti hain**

Function declaration example:

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

Ye kaam kar sakta hai.

Function expression example:

```javascript
sayHello();

const sayHello = function () {
  console.log("Hello");
};
```

Ye same tarah work nahi karega.

Iska simple reason:

- declaration function pehle se available jaisi behave karti hai
- expression variable assignment ke baad available hoti hai

Hum yahan deep execution context details mein nahi ja rahe, bas behavior samajhna enough hai.

* * *

## When to Use Each Type

### Function Declaration kab useful hoti hai?

- jab reusable named function likhni ho
- jab code clearly read hona chahiye
- jab top-level helper function define karni ho

### Function Expression kab useful hoti hai?

- jab function ko variable mein store karna ho
- jab function ko later pass ya assign karna ho
- jab callback style code likhna ho

Beginner ke liye dono samajhna important hai, because real projects mein dono milte hain.

* * *

## Small Practice Example

Function declaration:

```javascript
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));
```

Function expression:

```javascript
const multiplyExp = function (a, b) {
  return a * b;
};

console.log(multiplyExp(2, 3));
```

Try calling both before defining and phir observe karo difference.

Ye beginner ke liye best learning exercise hoti hai.

* * *

## A Small Assignment Idea

Try this:

1. Write a function declaration that multiplies two numbers
2. Write the same logic using function expression
3. Call both and print results
4. Try calling them before defining and observe behavior

Is exercise se syntax aur behavior dono clear hote hain.

* * *

## Summary

- functions reusable blocks of code hote hain
- function declaration aur function expression function banane ke do common tareeqe hain
- declaration direct named form mein hoti hai
- expression variable assignment ke through hoti hai
- basic level par hoisting behavior in dono ko different banata hai
- real code mein dono useful hote hain

* * *

## Final Thought

Function declaration aur function expression dono important hain.

Inka difference samajhne se sirf syntax clear nahi hoti, balki JavaScript ka behavior bhi zyada logical lagne lagta hai.

* * *

## Continue Reading

- Previous: [Control Flow in JavaScript: If, Else, and Switch Explained](https://prashsainidev.hashnode.dev/control-flow-if-else-switch)
- Next: [Arrow Functions in JavaScript: A Simpler Way to Write Functions](https://prashsainidev.hashnode.dev/arrow-functions)

