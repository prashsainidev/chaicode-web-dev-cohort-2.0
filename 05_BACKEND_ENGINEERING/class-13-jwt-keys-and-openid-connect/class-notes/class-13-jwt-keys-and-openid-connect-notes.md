1. What Is JWT Key-Based Authentication?

JWT key-based authentication means tokens are signed and verified using keys.

Simple meaning:

- user gets a token
- token contains some user data
- token is trusted only if signature is valid

Important point:

Token ko sirf decode karna enough nahi hota.
Token ko verify karna hota hai.

2. Symmetric vs Asymmetric Authentication

There are two common ways to sign tokens.

Symmetric:

- same secret signs token
- same secret verifies token

Asymmetric:

- private key signs token
- public key verifies token

Draw this:

Symmetric:
[ Private Secret ] -> sign
[ Same Secret ] -> verify

Asymmetric:
[ Private Key ] -> sign
[ Public Key ] -> verify

3. Why Public/Private Keys Matter

If many apps need to verify tokens, sharing one secret everywhere is risky.

Asymmetric approach helps because:

- auth service keeps private key secret
- other services can verify using public key
- private key does not need to be shared

4. What Is OIDC?

OIDC means OpenID Connect.

Simple meaning:

- OIDC is an identity layer on top of OAuth 2.0
- OAuth 2.0 is mainly about authorization
- OIDC adds authentication and user identity information

Short understanding:

OAuth2 says:
"Can this app access something?"

OIDC says:
"Who is the logged-in user?"

5. OAuth 2.0 vs OIDC

OAuth 2.0:

- authorization-focused
- gives delegated access

OIDC:

- authentication-focused
- gives identity information
- usually returns id token and user info

6. Service Discovery In OIDC

OIDC providers expose a discovery document.

Common endpoint:

- `/.well-known/openid-configuration`

This tells clients:

- issuer
- authorization endpoint
- token endpoint
- userinfo endpoint
- jwks uri

Simple meaning:

Client app does not need to guess all endpoints manually.

7. What Is JWKS?

JWKS means JSON Web Key Set.

Simple meaning:

- public keys are shared in JSON format
- clients/services use them to verify signed tokens

Common endpoint:

- `/oidc/jwks`

8. What Is Issuer?

Issuer means:

- who created this token
- which auth service is the source of trust

Example:

- `http://localhost:5000`

If issuer does not match expected auth server, token should not be trusted.

9. What Is Audience?

Audience means:

- token kis client/app ke liye issued hua hai

Example:

- `chaicode-client`

If audience does not match expected client, token should not be trusted.

10. OIDC Authorization Code Flow

This class used authorization code style thinking.

Flow:

1. user logs in
2. client sends user to authorize endpoint
3. server generates short-lived authorization code
4. client exchanges code for token
5. client uses access token to get user info

Draw this:

[ User ]
   |
   v
[ Login ]
   |
   v
[ /oidc/authorize ]
   |
   v
[ short-lived code ]
   |
   v
[ /oidc/token ]
   |
   v
[ access_token + id_token ]
   |
   v
[ /oidc/userinfo ]

11. Endpoints Implemented In Practice

In our OIDC practice implementation, these endpoints were added:

- `GET /.well-known/openid-configuration`
- `GET /oidc/jwks`
- `GET /oidc/public-key`
- `GET /oidc/authorize`
- `POST /oidc/token`
- `GET /oidc/userinfo`

12. What `/oidc/authorize` Does

This endpoint:

- checks authenticated user
- checks client_id
- checks redirect_uri
- generates short-lived authorization code
- redirects with `code`

Simple meaning:

This is the place where login proof gets converted into an authorization code.

13. What `/oidc/token` Does

This endpoint:

- receives authorization code
- validates client_id
- validates client_secret
- validates redirect_uri
- exchanges code for tokens

Returned data:

- `access_token`
- `id_token`
- `token_type`
- `expires_in`

14. What `/oidc/userinfo` Does

This endpoint:

- accepts valid OIDC access token
- verifies signature
- verifies issuer
- verifies audience
- returns user identity data

Typical user info:

- `sub`
- `email`
- `email_verified`
- `name`
- `role`

15. Local Auth vs OIDC Token

Important difference:

- local auth token is used first to prove user is logged in
- OIDC token is generated later by OIDC flow

Simple flow:

local login token -> authorize endpoint -> code -> token endpoint -> OIDC token

16. Why Redirect URI Is Important

Redirect URI tells auth server where to send user/code back.

Security reason:

- random redirect should not be allowed
- only expected redirect URI should pass

This is why exact match is important.

17. Why Short-Lived Authorization Code Is Used

Authorization code should expire quickly because:

1. it is temporary
2. it reduces replay risk
3. final tokens should only be issued after proper exchange

18. Why This Class Matters

This class is the bridge between:

- normal app authentication
- provider-style authentication
- microservice trust model
- modern SSO/OIDC architecture

It teaches not just login, but trust between systems.

19. Final Revision Summary

Class 13 taught that:

- JWT trust depends on correct key verification
- asymmetric auth is useful for distributed systems
- OIDC adds identity on top of OAuth 2.0
- discovery, issuer, audience, JWKS, authorize, token, and userinfo are key pieces
- backend auth can grow from simple login to provider-style auth architecture

20. Self Practice Checklist

[ ] 1. Read difference between symmetric and asymmetric auth again
[ ] 2. Open discovery endpoint and inspect returned JSON
[ ] 3. Open JWKS endpoint and understand public key response
[ ] 4. Register one user in local auth
[ ] 5. Login and copy local access token
[ ] 6. Call `/oidc/authorize` with local token
[ ] 7. Copy authorization code from redirect URL
[ ] 8. Exchange code on `/oidc/token`
[ ] 9. Copy OIDC access token
[ ] 10. Call `/oidc/userinfo`
[ ] 11. Understand issuer and audience values in token flow
[ ] 12. Read `oidc.service.js` line by line
[ ] 13. Read `oidc.controller.js` line by line
[ ] 14. Read `oidc.routes.js` line by line

Purpose:
This checklist is for hands-on revision.
I will complete these tasks in VS Code and Postman after finishing the theory notes.
