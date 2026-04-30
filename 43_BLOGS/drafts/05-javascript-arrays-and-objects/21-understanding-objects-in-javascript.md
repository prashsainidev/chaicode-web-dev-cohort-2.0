## Introduction

Arrays ordered values store karne ke liye great hoti hain.

Lekin kabhi-kabhi humein related information ko labels ke saath store karna hota hai.

For example:

- name
- age
- city

Yahin object useful hota hai.

Simple words mein:

**an object is a key-value structure used to store related information with clear labels**

* * *

## What Objects Are and Why We Need Them

Objects JavaScript mein related information ko ek saath store karne ka readable tareeqa hota hai.

Jab values ke saath unka meaning bhi important ho, tab object array se zyada useful hota hai.

Array:

```javascript
let student = ["Prashant", 22, "Web Development"];
```

Object:

```javascript
let student = {
  name: "Prashant",
  age: 22,
  course: "Web Development"
};
```

Object version zyada readable hota hai.

Array mein humein yaad rakhna padta hai ki kaunsi value kis position par hai.

Object mein label already diya hota hai, isliye code samajhna easy ho jaata hai.

* * *

## How to Create an Object

```javascript
let person = {
  name: "Prashant",
  age: 22,
  city: "Jaipur"
};
```

Yahan:

- keys: `name`, `age`, `city`
- values: `"Prashant"`, `22`, `"Jaipur"`

Yahan:

- `name`, `age`, `city` properties hain
- har property ka ek label hai aur ek value hai

* * *

## Accessing Object Properties

Object ki values ko access karne ke do common ways hote hain.

### Dot Notation

```javascript
console.log(person.name);
```

Dot notation tab useful hoti hai jab property name humein directly pata ho.

### Bracket Notation

```javascript
console.log(person["age"]);
```

Bracket notation tab useful hoti hai jab property name string ke form mein use karna ho.

* * *

## Updating Object Properties

```javascript
let student = {
  name: "Prashant",
  age: 22,
  course: "Web Development"
};

student.age = 23;
console.log(student);
```

Yahan purani value replace ho jaati hai.

Yani:

- pehle `age` was `22`
- update ke baad `age` becomes `23`

* * *

## Adding and Deleting Properties

Objects flexible hote hain, isliye hum later new properties add bhi kar sakte hain aur old properties remove bhi kar sakte hain.

Add:

```javascript
student.city = "Jaipur";
```

Delete:

```javascript
delete student.age;
```

Ye tab useful hota hai jab object ka data time ke saath change ho raha ho.

* * *

## Looping Through Object Properties

```javascript
for (let key in student) {
  console.log(key, student[key]);
}
```

Ye each key aur uski value print karega.

Yahan:

- `key` pehle property name leta hai
- `student[key]` us property ki value deta hai

* * *

## Array vs Object

### Array

- ordered values
- indexes se access hoti hai

### Object

- labeled values
- keys se access hoti hai

Simple rule:

- ordered list ho to array
- labeled information ho to object

* * *

## A Small Practice Assignment

Is practice ka goal ye hai ki tum object create karna, property update karna, aur loop ke through values read karna ek saath dekh sako.

```javascript
let student = {
  name: "Prashant",
  age: 22,
  course: "Web Development"
};

student.age = 23;

for (let key in student) {
  console.log(key, student[key]);
}
```

Expected understanding:

- object related values ko label ke saath store karta hai
- `age` update karne par sirf wahi property change hoti hai
- `for...in` object ki har property par loop chalata hai

* * *

## Summary

- objects related information ko key-value pairs mein store karte hain
- object curly braces se create hota hai
- properties ko dot notation aur bracket notation se access kar sakte hain
- properties update, add, aur delete ki ja sakti hain
- `for...in` loop se object keys aur values iterate kar sakte hain
- arrays aur objects ka use case different hota hai

* * *

## Final Thought

Objects JavaScript ka bahut important part hain because real-world data aksar labeled information ki form mein hota hai.

Ek baar objects clearly samajh aa gaye, toh data ko represent karna kaafi natural lagne lagta hai.

* * *

## Continue Reading

- Previous: [Array Methods You Must Know](https://prashsainidev.hashnode.dev/array-methods)
- Next: [Understanding Object-Oriented Programming in JavaScript](https://prashsainidev.hashnode.dev/oop-in-javascript)
