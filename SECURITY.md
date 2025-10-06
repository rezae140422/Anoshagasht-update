# Security hardening for this site

This repository includes a set of pragmatic, high-impact security measures intended to raise the security posture of the site. These changes are conservative and designed to be safe for a static landing page, but you should review and adapt them for your exact deployment.

## What I changed

- `next.config.js`
  - Added an `async headers()` function that applies strong HTTP response headers site-wide: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Expect-CT.

- `middleware.ts`
  - Reinforces the same headers at the edge and adds a simple in-memory rate limiter to slow down abusive clients.

## Why these matter

- Content-Security-Policy (CSP): prevents cross-site scripting (XSS) and reduces injection risks by restricting where resources can be loaded from. This config restricts scripts/styles/images to trusted sources.
- HSTS: forces browsers to use HTTPS, preventing downgrade attacks.
- X-Frame-Options: prevents clickjacking.
- X-Content-Type-Options: prevents MIME-type sniffing.
- Referrer-Policy and Permissions-Policy: tighten data leakage and block risky browser features.
- Rate limiting: mitigates brute-force and scraping at the application edge.

## Limitations & important notes

- CSP: I used a conservative CSP that allows inline styles (`'unsafe-inline'`) because Tailwind sometimes injects styles; for the strongest protection remove `'unsafe-inline'` and migrate to hashed/style nonces.
- The rate limiter is in-memory and per-instance. In production use a distributed store (Redis) or a managed WAF/CDN rate limit to cover multiple instances.
- Expect-CT and Feature-Policy: some headers are browser-specific / legacy. Review for your target browsers and CDNs.
- Image remote patterns: the Next.js image config already allows certain hosts. Keep that in sync with CSP's `img-src` if you add/remove sources.

## Recommended next steps (high priority)

1. Enforce HTTPS at the CDN/Load Balancer and ensure HSTS is included only after HTTPS is in place.
2. Use a CDN/WAF (Cloudflare, Fastly, AWS CloudFront + AWS WAF) to provide global rate limiting, bot management, and DDoS protection.
3. Move rate limiting to a shared store (Redis) if running multiple server instances.
4. Implement CSP nonces for any inline scripts/styles or remove inline usage entirely and move to external, integrity-checked assets.
5. Add automated security scanning (Snyk, npm audit, Dependabot security updates, static analysis, and regular penetration tests).
6. Centralize secrets and environment variables (e.g., use a secrets manager; don't check secrets into the repo).

## How to test locally

After pulling these changes, run the dev server and inspect response headers in the browser devtools network tab. For production-like testing, deploy to a staging environment behind HTTPS and test behaviors (CSP reports, blocked resources).

## Rollback plan

If any header breaks a third-party integration, remove/adjust that header in `next.config.js` and redeploy. CSP changes can block resources immediately; test behind staging before rolling out to production.

---

If you want, I can:

- Add CSP reporting (report-uri/report-to) to collect violations during a staged rollout.
- Replace the in-memory rate limiter with Redis-backed limiter and add configuration for Redis.
- Run the project locally and verify there are no syntax errors caused by edits.
