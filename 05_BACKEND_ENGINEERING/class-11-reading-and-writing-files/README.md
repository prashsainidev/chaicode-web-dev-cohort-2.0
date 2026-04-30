# Backend Engineering - Reading And Writing Files

## Overview

This backend class was held on Saturday, `11 Apr 2026`.

The topic for this session was `Reading and Writing Files`.

This class focused on practical file handling in Node.js and then connected that idea to real backend uploads through `multer` and `ImageKit`.

---

## What I Learned

### File System Basics

- writing files with synchronous APIs
- reading files with callback-based and promise-based APIs
- appending content to existing files
- creating folders with recursive directory support
- deleting, renaming, and copying files while understanding the tradeoffs of each approach

---

### Async File Flow

- chaining file operations like read, write, append, and delete
- seeing how nested callbacks work in a simple demo
- comparing sync, async callback, and promise-based file system handling

---

### File Upload Pipeline

- configuring `multer` with custom disk storage
- generating unique filenames before saving uploads
- validating allowed file types and file size limits
- understanding why temp local uploads are useful before cloud upload

---

### Avatar Upload With ImageKit

- moving from local file storage to cloud media upload
- creating a dedicated `multer` middleware for uploads
- streaming the uploaded file from disk to `ImageKit`
- saving the returned avatar URL in the user document
- deleting the temp file after upload so local storage stays clean

---

## Class Code Highlights

The local class code currently has two snapshots inside `class-code/`:

- `chai-aur-filesystem-main/` for the file system demos and initial upload setup
- `chai-aur-filesystem-main-1/` for the refined avatar upload flow with `ImageKit`

The main files covered in this class include:

- `src/modules/fs-module/fs-sync.js`
- `src/modules/fs-module/fs-async.js`
- `src/modules/fs-module/fs-promises.js`
- `src/common/middleware/multer.middleware.js`
- `src/common/config/imagekit.js`
- `src/modules/auth/auth.routes.js`
- `src/modules/auth/auth.controller.js`
- `src/modules/auth/auth.service.js`

This class reused the existing auth project as a base, but the new work for this session was mainly around file read/write, upload handling, and avatar media flow.

---

## Current Status

- class attended live
- topic is confirmed as `Reading and Writing Files`
- local class code is available
- file system demos and upload flow are now documented
- practice checklist is added in `practice/README.md`
- self-practice examples are added in the first class-code snapshot under `chai-aur-filesystem-main/`
- local assignment work is added in `assignments/ipl-management-system/`
- notes links can still be expanded later if board material gets added

---

## Blog

- Handling File Uploads in Express with Multer
- Storing Uploaded Files and Serving Them in Express
