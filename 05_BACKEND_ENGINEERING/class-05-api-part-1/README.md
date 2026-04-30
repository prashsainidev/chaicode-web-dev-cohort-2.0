# Backend Engineering - Building RESTful API (Part 1)

## Overview

This class focused on starting a RESTful API project with a more structured backend setup.

It introduced the early architecture of a modular auth-based API using Express, Mongoose, Joi, and shared utility folders.

---

## What I Learned

### API Project Structure

- Organizing backend code into modules
- Separating app setup, server startup, and database connection
- Keeping auth logic isolated inside its own folder

---

### Validation Flow

- Using DTO classes for request validation
- Validating request body with Joi
- Cleaning incoming payload before business logic runs

---

### Auth Module Basics

- Creating a user schema with Mongoose
- Splitting controller and service responsibilities
- Checking duplicate email during registration
- Preparing token-based verification flow

---

### Common Utilities

- Creating reusable API response helpers
- Creating reusable API error helpers
- Keeping shared backend logic inside `common/`

---

## Practice Highlights

- Explored modular REST API folder structure
- Understood register flow architecture
- Saw how validation, controller, service, and model connect together

---

## Class Resources

Refer to `links.md` for all resources

---

## Blog

- Related draft: REST API Design Made Simple with Express.js

---

## Key Takeaways

- REST APIs become easier to manage with modular structure
- DTO validation keeps request handling cleaner
- Auth flow is easier to scale when controller, service, and model are separate

---

> Based on my learning from a structured web development cohort.
