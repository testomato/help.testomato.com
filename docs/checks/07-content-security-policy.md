---
title: Content Security Policy checks
---

Testomato supports two check types for monitoring your `Content-Security-Policy` response header.

1. **`Content-Security-Policy`** checks the full header value as a string.
Use it to verify the header is present, hasn't changed, or matches an expected pattern.

2. **`CSP: <directive>`** extracts a single directive from the policy and checks its value independently.
`CSP: script-src` gives you just the `script-src` value — useful for asserting that `unsafe-inline` is absent
without caring about the rest of the policy.

Supported directives: `default-src`, `script-src`, `style-src`, `img-src`, `font-src`,
`connect-src`, `frame-src`, `frame-ancestors`, `form-action`, `base-uri`, `object-src`,
`media-src`, `worker-src`, `manifest-src`, `upgrade-insecure-requests`.

## Operators

Both check types support the same [operators](string-checks).

:::tip
Use `matches pattern` with `.*` to check that a header or directive is present with any value.
For `upgrade-insecure-requests` — a standalone directive with no value — use `.*` (zero or more characters),
not `.+` (one or more), since the extracted value is an empty string when the directive is present.
:::

:::note
Avoid `contains` with an empty string for existence checks.
Every string contains an empty string, so the check always passes regardless of what the header contains.
:::

## Limitations

Three things Testomato's CSP checks do not do:

1. **`Content-Security-Policy-Report-Only` is not checked.** If a site only has the report-only header,
   the `Content-Security-Policy` check fails with "Missing" as if no policy exists.
2. **No policy analysis.** Testomato checks string presence or patterns — it does not evaluate whether a policy
   is actually effective. Use [CSP Evaluator](https://csp-evaluator.withgoogle.com/) for that.
3. **No violation reporting.** These checks monitor the header value, not what the browser blocks or reports.
   They complement a violation reporting service like [Report URI](https://report-uri.com/), not replace it.

## Starter checks

### Permissive baseline

Good for sites with an existing CSP that haven't been monitoring it yet:

| Check | What it catches |
|---|---|
| `Content-Security-Policy` matches `.*` | Header is present at all |
| `CSP: script-src` does not contain `unsafe-inline` | Inline script execution is blocked |
| `CSP: frame-ancestors` matches `.*` | Clickjacking protection is in place |

### Stricter set

Add these once you're confident in your baseline:

| Check | What it catches |
|---|---|
| `CSP: object-src` equals `'none'` | No legacy plugin content (`<object>`, `<embed>`) |
| `CSP: base-uri` equals `'self'` | Base tag injection is blocked |
| `CSP: upgrade-insecure-requests` matches `.*` | Mixed content is upgraded automatically |

## Resources

- [How to Monitor Your Content-Security-Policy](https://testomato.com/blog/content-security-policy-monitoring/) — background, examples, and starter recipes
- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) — full directive reference
- [CSP Evaluator (Google)](https://csp-evaluator.withgoogle.com/) — audit your policy for known weaknesses
- [Report URI](https://report-uri.com/) — violation reporting and policy building
- [OWASP CSP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) — practical examples and sample policies
- [Mitigate XSS with a strict CSP](https://web.dev/articles/strict-csp/) — nonce- and hash-based approach (recommended)
