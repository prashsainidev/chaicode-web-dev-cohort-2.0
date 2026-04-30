<!--
Hashnode Title: URL Parameters vs Query Strings in Express.js
Hashnode Subtitle: Learn the difference between route params and query strings, and know exactly when to use each one in Express.
Cover Image Prompt: A split educational illustration showing an Express route URL with path parameters on one side and query filters on the other, with clean URL anatomy visuals and no text in the image.
Suggested Slug: express-route-params-vs-query-strings
Suggested Tags: expressjs, nodejs, backend, webdev
-->

## Introduction

When beginners start building routes in Express, one confusion appears again and again:

when should you use a URL parameter, and when should you use a query string?

Both appear in URLs.

Both carry information.

But they are not usually used for the same purpose.

This distinction becomes much easier once you connect it to real-world usage.

In this article, we will understand:

- what URL parameters are
- what query strings are
- how they differ
- how Express reads them
- when to use each one

* * *

## What URL Parameters Are

URL parameters, often called route params, are values placed directly inside the path of the URL.

For example:

```plaintext
/users/42
```

Here, `42` can represent a specific user ID.

That means the path is identifying a particular resource.

In Express, a route can be written like this:

```javascript
app.get("/users/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});
```

Here:

- `:id` is a route parameter
- Express stores it inside `req.params`

* * *

## What Query Strings Are

Query strings come after a `?` in the URL.

For example:

```plaintext
/search?category=books&sort=price
```

Here, the path is still `/search`.

But extra information is being passed as modifiers or filters.

In Express, query values are available through `req.query`.

Example:

```javascript
app.get("/search", (req, res) => {
  res.send(req.query.category);
});
```

So query strings are usually not used to identify the main resource.

They are used to modify or refine the request.

* * *

## The Simplest Difference

This one line helps a lot:

- **params identify**
- **query strings filter or adjust**

That is the cleanest beginner rule.

If you keep that in mind, route design becomes much easier.

[[IMAGE SLOT 1 - DIAGRAM IDEA: URL structure breakdown - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## Example 1: User Profile ID

Suppose you want to fetch one specific user profile.

A good route shape is:

```plaintext
/users/42
```

Why?

Because `42` identifies which exact user resource is being requested.

This is a strong case for route params.

In Express:

```javascript
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Profile of user ${userId}`);
});
```

* * *

## Example 2: Search Filters

Now imagine you already know the route is `/products`, but you want to refine the results.

For example:

```plaintext
/products?category=shoes&color=black&sort=price
```

Here, the request is still about the same broad resource:

`products`

The extra values are just narrowing or modifying the result.

That is why query strings fit better here.

In Express:

```javascript
app.get("/products", (req, res) => {
  const category = req.query.category;
  const color = req.query.color;
  const sort = req.query.sort;

  res.send(`Category: ${category}, Color: ${color}, Sort: ${sort}`);
});
```

* * *

## Params and Query Together

These two are not enemies.

In real routes, they often work together.

Example:

```plaintext
/users/42/orders?status=completed
```

Here:

- `42` identifies which user
- `status=completed` filters which orders to show

That is a very natural and practical use of both concepts together.

* * *

## How Express Accesses Them

This part is simple but important:

### Route Params

Use:

```javascript
req.params
```

### Query Strings

Use:

```javascript
req.query
```

That means Express already separates them cleanly for you.

You just need to design the route properly.

* * *

## When Should You Use Params?

Use route params when:

- the value identifies a specific resource
- the value is part of the route's core structure
- the route would feel incomplete without it

Examples:

- `/users/:id`
- `/posts/:slug`
- `/products/:productId`

* * *

## When Should You Use Query Strings?

Use query strings when:

- the route already points to the resource
- the extra values refine the result
- the values are optional modifiers

Examples:

- `/products?category=shoes`
- `/posts?page=2`
- `/users?role=admin`

[[IMAGE SLOT 2 - DIAGRAM IDEA: Params vs query comparison diagram - ADD GENERATED IMAGE HERE BEFORE PUBLISHING]]

* * *

## A Practical Mistake to Avoid

Do not force filters into params just because both are technically values in a URL.

For example:

```plaintext
/products/shoes/black/price
```

This is much harder to understand than:

```plaintext
/products?category=shoes&color=black&sort=price
```

The second version communicates intention much more clearly.

That clarity matters in API design.

* * *

## Summary

- route params are usually used to identify a specific resource
- query strings are usually used to filter, sort, or modify a request
- Express gives route params in `req.params`
- Express gives query strings in `req.query`
- both concepts often work together in real applications

* * *

## Final Thought

Params and query strings stop feeling confusing once you stop looking at them as just "data inside a URL."

The better question is:

is this value identifying something, or is it modifying the request?

That one distinction makes route design much cleaner.

* * *

## Continue Reading

- Previous: [Creating Routes and Handling Requests with Express](https://prashsainidev.hashnode.dev/creating-routes-and-handling-requests-with-express)
- Next: [What Is Middleware in Express and How It Works](https://prashsainidev.hashnode.dev/what-is-middleware-in-express-and-how-it-works)
