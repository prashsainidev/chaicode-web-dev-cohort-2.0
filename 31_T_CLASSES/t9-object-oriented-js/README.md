# T9 - Object Oriented JavaScript

## Overview

This T-Class focused on Object Oriented JavaScript and how OOP ideas show up in real JavaScript code.

The class moved from older constructor-function style thinking to modern class syntax, and then into inheritance, encapsulation, and polymorphism.

---

## What I Learned

### Constructor Functions And Prototypes

- why creating methods directly inside objects is not scalable
- how constructor functions solve repeated object creation
- how shared methods move to `prototype`
- how `new` creates an instance and links it to the prototype chain

---

### Classes In JavaScript

- class syntax is a cleaner way to express object-oriented patterns
- `constructor()` initializes object data
- instance methods live on the prototype under the hood
- classes improve readability compared to manual constructor patterns

---

### Inheritance

- `extends` lets one class reuse another class
- `super()` is used to call the parent constructor
- child classes can add their own properties and methods

Example idea from class:

- `User` as a base class
- `Admin` extending `User`

---

### Encapsulation

- getters and setters help control how values are read or changed
- private fields help hide internal state
- validation can be handled inside setters instead of exposing raw values directly

---

### Polymorphism

- child classes can override parent methods
- same method name can behave differently depending on the object
- example: `Animal`, `Dog`, and `Cat` each having their own `speak()` behavior

---

## Class Code Highlights

The local code and linked repo cover:

- constructor functions
- prototype methods
- class syntax
- inheritance with `Admin extends User`
- getters and setters
- private fields
- polymorphism through method overriding

Check `links.md` for the external repo and related references.

---

## Key Takeaways

- OOP in JavaScript is not just about classes
- prototypes are the real foundation underneath many patterns
- class syntax makes code easier to read, but the core mechanics still matter
- inheritance and encapsulation are useful only when they improve clarity

---

## Related Blog Flow

- Understanding Object-Oriented Programming in JavaScript
- The new Keyword in JavaScript
- Understanding the this Keyword in JavaScript

---

## Current Status

- class completed
- class code added
- visual board pending
- related blog flow updated
