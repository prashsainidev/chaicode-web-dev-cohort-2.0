## Introduction

Handling text form data in Express is one thing.

Handling file uploads is another.

The moment images, PDFs, or documents enter the picture, normal request parsing is not enough.

That is why file upload handling usually needs specialized middleware.

In the Express ecosystem, one very common solution is **Multer**.

This article explains:

- why file uploads need middleware
- what Multer does
- how single-file and multiple-file uploads work
- what storage configuration means
- how uploaded files can later be served

* * *

## Why File Uploads Need Middleware

When a form includes files, the request usually uses:

```plaintext
multipart/form-data
```

This format is different from normal JSON body data.

That means the usual request body handling is not enough.

The server needs something that can understand:

- incoming file content
- metadata such as file name and type
- how files should be stored

That is where middleware like Multer becomes useful.

* * *

## What Multer Is

Multer is an Express middleware specifically built for handling file uploads.

Simple meaning:

it helps Express process incoming files from form submissions.

Multer can help with:

- single file upload
- multiple file upload
- storage configuration
- file-related request handling

Without a tool like this, file upload handling becomes much more cumbersome.

* * *

## A Simple Upload Flow

The basic upload lifecycle looks like this:

```plaintext
client selects file
-> form submits request
-> Multer processes the incoming file
-> file gets stored based on configuration
-> server sends response
```

This high-level picture is the key idea.

* * *

## Single File Upload Example

A simple setup can look like this:

```javascript
const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("profile"), (req, res) => {
  res.send("Single file uploaded");
});
```

Here:

- `multer({ dest: "uploads/" })` tells Multer where to store files
- `upload.single("profile")` handles one file from the field named `profile`

That is the simplest beginner-friendly upload flow.

* * *

## Multiple File Upload Example

If the form allows many files, the middleware changes slightly:

```javascript
app.post("/uploads", upload.array("photos", 5), (req, res) => {
  res.send("Multiple files uploaded");
});
```

Here:

- `upload.array("photos", 5)` handles up to 5 files
- the field name is `photos`

This makes it clear that Multer can handle different upload patterns without changing the full app structure.

* * *

## Storage Configuration Basics

Multer needs to know how files should be stored.

At beginner level, one basic storage idea is:

- save the uploaded file into a local folder such as `uploads/`

That is enough to understand the mechanism.

Later, more advanced setups may customize:

- file names
- destination folders
- allowed file types

But the first goal should be understanding the upload pipeline itself.

* * *

## Why `multipart/form-data` Matters

This format matters because files are not sent like plain JSON.

The request contains:

- file content
- field data
- boundaries between form parts

Multer helps interpret that incoming structure and turn it into something Express can work with more easily.

That is why "file upload middleware" is a real need, not just an extra library choice.

* * *

## Serving Uploaded Files Comes Later

Uploading a file is only the first half.

The second half is:

- where it is stored
- how it is accessed later
- whether it should be exposed publicly

That is why upload handling and file serving are closely connected topics.

In fact, the next article in the series continues exactly from this point.

* * *

## A Good Beginner Warning

Do not treat file uploads as just "receive file and done."

Even at beginner level, safe handling matters.

You should think about:

- file type validation
- size limits
- where the file is stored
- whether the file should be publicly accessible

Cloud storage can come later.

But the local flow should be clear first.

* * *

## Summary

- file uploads use `multipart/form-data`, which needs special handling
- Multer is a common Express middleware for file uploads
- `upload.single()` handles one file
- `upload.array()` handles multiple files
- storage configuration decides where uploaded files go

* * *

## Final Thought

Multer is useful because it turns file uploads from a messy problem into a structured request flow.

Once that first upload lifecycle becomes clear, working with uploaded files in Express feels much less intimidating.

* * *

## Continue Reading

- Previous: [Sessions vs JWT vs Cookies: Understanding Authentication Approaches](https://prashsainidev.hashnode.dev/sessions-vs-jwt-vs-cookies-understanding-authentication-approaches)
- Next: [Storing Uploaded Files and Serving Them in Express](https://prashsainidev.hashnode.dev/storing-uploaded-files-and-serving-them-in-express)
