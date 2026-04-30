# Backend Engineering - JWT Keys & OpenID Connect

## Overview

This backend class was held on Saturday, `18 Apr 2026`.

The topic for this session was `JWT Keys & OpenID Connect`.

This class appears to focus more on authentication architecture and token verification concepts than on feature-heavy code. The shared board topic suggests the class connected JWT signing/verification keys with the OpenID Connect identity flow.

---

## What I Learned

### JWT Key Concepts

- understanding that JWT verification depends on the correct signing key
- learning the difference between signing a token and verifying a token
- understanding why public/private key based JWT flows matter in modern auth systems

---

### OpenID Connect Basics

- understanding OpenID Connect as an identity layer built on top of OAuth 2.0
- understanding how authentication-focused identity data fits into a token-based flow
- learning that token validation is not only about decoding, but also about issuer, audience, and signature trust

---

### Auth Architecture Thinking

- connecting JWT usage with real-world provider-based authentication
- thinking about trusted issuers, keys, and token validation flow
- understanding why auth systems depend on both protocol rules and key management

---

## Class Notes

The class board link currently available is:

- `https://app.eraser.io/workspace/3ar1AucmO4XFsKiSWSU7`

---

## Current Status

- class attended
- topic confirmed as `JWT Keys & OpenID Connect`
- Eraser board link is added
- implementation is kept outside this cohort repo in a separate project workspace
- beginner-friendly setup and testing steps are also kept in that separate project workspace
- notebook-style notes are added in `class-notes/class-13-jwt-keys-and-openid-connect-notes.md`
- PDF notes are added in `class-notes/JWT_Keys___OpenID_Connect_Notes.pdf`

---

## Practice Direction

This class is a bridge between earlier local authentication classes and provider-style authentication.

Practice now includes:

- discovery endpoint
- JWKS/public key endpoint
- authorization code flow
- token exchange
- userinfo endpoint

This keeps the class connected with real OIDC thinking instead of only theory notes.

## Blog

- Related auth foundation drafts:
- JWT Authentication in Node.js Explained Simply
- Sessions vs JWT vs Cookies: Understanding Authentication Approaches

## Implementation Location

The actual OIDC implementation for this class is kept outside this repo in a separate project workspace.

This class folder now keeps only the class notes and the implementation reference, so it stays clear where the implementation work was done.
