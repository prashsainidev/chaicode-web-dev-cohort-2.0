## Introduction

Programming mein kabhi-kabhi humein aise structures chahiye hote hain jo reusable hon.

For example:

- multiple students
- multiple cars
- multiple users

Yahin Object-Oriented Programming, ya OOP, useful hota hai.

Simple words mein:

**Object-Oriented Programming is a way to organize code using reusable blueprints and the objects created from them**

* * *

## What Object-Oriented Programming Means

OOP ka basic idea hai ki hum code ko aise design karen jaise hum real-world entities ko model kar rahe hon.

Yani:

- data bhi hota hai
- behavior bhi hota hai

For example:

- student ka name aur age data hai
- `showDetails()` jaisa method behavior hai

Ye combination code ko zyada organized aur reusable bana deta hai.

* * *

## Real-World Analogy: Blueprint to Objects

- blueprint = design
- real object = actual instance

Programming mein:

- class = blueprint
- object = actual instance

Ye analogy OOP samajhne ka easiest beginner entry point hai.

* * *

## What Is a Class in JavaScript?

A class in JavaScript acts like a blueprint.

Isme hum define karte hain ki future objects ke paas kaunsa data aur kaunsa behavior hoga.

```javascript
class Student {
}
```

* * *

## Creating Objects Using Classes

```javascript
class Student {
}

let student1 = new Student();
```

Yahan `student1` class ka object hai.

`new` keyword class se ek naya instance create karta hai.

* * *

## Constructor Method

Constructor object create hote waqt automatically run hota hai.

Ye usually initial values set karne ke liye use hota hai.

```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

* * *

## Methods Inside a Class

Methods class ke andar likhe gaye functions hote hain jo object behavior define karte hain.

```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails() {
    console.log(this.name + " is " + this.age + " years old");
  }
}
```

Yahan `showDetails()` ek method hai jo object ki information use kar raha hai.

* * *

## Creating Multiple Objects

```javascript
let student1 = new Student("Prashant", 22);
let student2 = new Student("Aman", 20);
```

Yehi code reusability ka real benefit hai.

Same class se multiple objects ban sakte hain with different values.

* * *

## Basic Idea of Encapsulation

Beginner level par encapsulation ko simple language mein samjho:

**encapsulation means keeping related data and related behavior together in one place**

Isse code scattered feel nahi hota.

Class ke andar values aur methods ko saath rakhna isi idea ka beginner-friendly version hai.

* * *

## A Small Practice Assignment

Is practice ka goal ye hai ki tum class, constructor, object creation, aur method call ko ek saath dekh sako.

```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails() {
    console.log(this.name + " is " + this.age + " years old");
  }
}

let s1 = new Student("Prashant", 22);
let s2 = new Student("Aman", 20);

s1.showDetails();
s2.showDetails();
```

Expected understanding:

- `Student` ek blueprint hai
- `s1` aur `s2` us blueprint ke actual objects hain
- har object apni values ke saath same method use kar sakta hai

* * *

## Summary

- OOP code ko objects aur blueprints ki tarah organize karne ka approach hai
- class ek blueprint hoti hai
- object class ka actual instance hota hai
- constructor initial values set karta hai
- methods object behavior define karti hain
- OOP reusability aur organization improve karta hai

* * *

## Final Thought

OOP beginners ko pehle thoda formal lag sakta hai, but real-life blueprint analogy ke through ye kaafi natural lagne lagta hai.

Ek baar class aur object ka relationship clear ho gaya, JavaScript ka ye part much more approachable ho jaata hai.

* * *

## Continue Reading

- Previous: [Understanding Objects in JavaScript](https://prashsainidev.hashnode.dev/understanding-objects)
- Next: [Understanding the this Keyword in JavaScript](https://prashsainidev.hashnode.dev/this-keyword)
