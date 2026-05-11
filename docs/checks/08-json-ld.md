---
title: JSON-LD checks
---

Testomato can monitor structured data values embedded in `<script type="application/ld+json">` blocks on any page.
You specify a property path; Testomato extracts the value and applies a string check against it.

## Rule syntax

Rules use the prefix `json-ld:` followed by a dot-notation path to the property you want to check.

| Rule | What it targets |
|---|---|
| `json-ld:name` | `name` in any JSON-LD block on the page |
| `json-ld:aggregateRating.ratingValue` | nested property, no type filter |
| `json-ld:Product.name` | only blocks where `"@type"` is `"Product"` |
| `json-ld:@type` | the type field itself |
| `json-ld:Product.offers.price` | deeply nested, type-scoped |

**Type scoping:** if the first path segment starts with an uppercase letter, it is treated as a `@type` filter.
`json-ld:Product.name` only checks blocks where `"@type": "Product"` — all other blocks are ignored.
Lowercase-first paths (like `json-ld:name`) check all blocks on the page.

Testomato handles multiple `<script type="application/ld+json">` blocks per page, `@graph` containers,
and top-level JSON arrays automatically.

:::note
JSON-LD checks work with any vocabulary, not just schema.org. The checker never reads `@context` — it
treats every block as plain JSON and extracts values by key name. Custom or mixed vocabularies work the same way.
:::

## Operators

JSON-LD checks support the same [operators](string-checks) as other string checks.

:::tip
For dynamic values — ratings, prices, dates — use `matches` with a regex pattern instead of `equals`.
`json-ld:aggregateRating.ratingValue` matching `\d+(\.\d+)?` passes for any numeric rating regardless of the current value.
:::

## Pages with multiple JSON-LD blocks

Many pages include more than one JSON-LD block. When you use a bare (unscoped) property like `json-ld:name`,
Testomato checks blocks in order and returns the value from the **first block that has that property** — remaining blocks are not evaluated.

For example, a homepage with three blocks (`WebSite`, `WebApplication`, `Organization`) all carrying a `name` property:

| Check | Block 1 (WebSite) | Block 2 (WebApplication) | Block 3 (Organization) | Returns |
|---|---|---|---|---|
| `json-ld:name` | `"Testomato"` | `"Testomato"` | `"Testomato s.r.o."` | `"Testomato"` (Block 1) |
| `json-ld:description` | `"Website monitoring service — uptime, SSL…"` | `"Website monitoring service that checks uptime every 15 seconds…"` | `"Testomato is a website monitoring…"` | Block 1's value |
| `json-ld:aggregateRating.ratingValue` | — | `"4.6"` | — | `"4.6"` (Block 2, only match) |

`json-ld:aggregateRating.ratingValue` skips Block 1 and returns Block 2's value because Block 1 does not have that property.

**If you need to target a specific block,** use the type-scoped form:
`json-ld:Organization.name` only checks blocks where `"@type"` is `"Organization"`, returning `"Testomato s.r.o."` instead.

:::warning
Bare properties are most reliable when only one block on the page carries that property. For `name`, `description`,
and `@type` on pages with multiple blocks, the result depends entirely on block order — which may change.
Use type-scoped checks when precision matters.
:::

## Failure modes

| What happened | Error shown |
|---|---|
| No `<script type="application/ld+json">` blocks found on the page | `Missing JSON-LD` |
| A block contains malformed JSON | `Invalid JSON-LD` |
| Block found, but the property path is not present | `Missing JSON-LD property: {path}` |
| Property found, but value fails the operator | Check marked failed, no message |

## Exact type matching

The `@type` filter matches the block's declared type exactly. A page using `"@type": "BlogPosting"` will not
match `json-ld:Article.headline`, even though `BlogPosting` is a subtype of `Article` in schema.org.

## Starter checks

The rule picker includes pre-built presets for the most common fields.

### Presence and type

| Check | Operator | What it catches |
|---|---|---|
| `json-ld:@type` | matches `[A-Z]\w+` | At least one JSON-LD block exists with a valid type |

### Product

| Check | Operator | What it catches |
|---|---|---|
| `json-ld:Product.name` | matches `.*` | Product name is present |
| `json-ld:Product.offers.price` | matches `.*` | Price is populated |
| `json-ld:aggregateRating.ratingValue` | matches `\d+(\.\d+)?` | Rating is a valid number |

### Article

| Check | Operator | What it catches |
|---|---|---|
| `json-ld:Article.headline` | matches `.*` | Headline is present |
| `json-ld:Article.datePublished` | matches `\d{4}-\d{2}-\d{2}` | Published date is a valid ISO date |
| `json-ld:author.name` | matches `.*` | Author name is populated |

### Organization

| Check | Operator | What it catches |
|---|---|---|
| `json-ld:Organization.name` | matches `.*` | Organization block has a name |

### Breadcrumbs

| Check | Operator | What it catches |
|---|---|---|
| `json-ld:BreadcrumbList.itemListElement` | contains `Home` | Breadcrumb items include a home entry |

## Resources

<!-- TODO: uncomment after post is published - [Monitoring JSON-LD Structured Data](https://testomato.com/blog/json-ld-monitoring/) — background, examples, and what to monitor first -->
- [Google Rich Results Test](https://search.google.com/test/rich-results) — check eligibility for rich results
- [Schema.org Validator](https://validator.schema.org/) — validate structured data against the schema.org vocabulary
- [JSON-LD Playground](https://json-ld.org/playground/) — experiment with JSON-LD syntax interactively
- [schema.org](https://schema.org/) — type and property reference
