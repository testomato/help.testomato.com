Testomato can monitor structured data values embedded in `<script type="application/ld+json">` blocks on any page.
Select a preset check from the rule picker, then provide an assertion value; Testomato extracts the matching property and applies a string operator against it.

## Rule syntax

Preset checks use the prefix `JSON-LD:` followed by either a type scoped path or a bare property path.

| Rule | What it targets |
|---|---|
| `JSON-LD: name` | `name` in any JSON-LD block on the page |
| `JSON-LD: AR.ratingValue` | nested property, no type filter |
| `JSON-LD: Product: name` | only blocks where `@type` is `Product` |
| `JSON-LD: @type` | the type field itself |
| `JSON-LD: Product: offers.price` | deeply nested, type-scoped |

**Type scoping:** if the first path segment starts with an uppercase letter, it is treated as a `@type` filter. For example,
`JSON-LD: Product: name` only checks blocks where the `@type` is `Product` — all other blocks are ignored.
Lowercase-first paths (like `JSON-LD: name`) check all blocks on the page.

Testomato handles multiple `<script type="application/ld+json">` blocks per page, `@graph` containers,
and top-level JSON arrays automatically.

:::note
JSON-LD checks work with any vocabulary, not just schema.org. The checker never reads `@context` — it
treats every block as plain JSON and extracts values by key name. Custom or mixed vocabularies work the same way.
:::

## Operators

JSON-LD checks support the same [operators](/checks/string-checks/) as other string checks.

:::tip
For dynamic values — ratings, prices, dates — use `matches` with a regex pattern instead of `equals`.
`JSON-LD: AR.ratingValue` matching `\d+(\.\d+)?` passes for any numeric rating regardless of the current value.
:::

## Pages with multiple JSON-LD blocks

Many pages include more than one JSON-LD block. Testomato extracts the target property from **every** block on the page and tests the operator against each value. The check **passes if any single value matches** (it short-circuits on the first match).

For example, a homepage with three blocks (`WebSite`, `WebApplication`, `Organization`) all carrying a `name` property:

| Check | WebSite | WebApplication | Organization |
|---|---|---|---|
| `JSON-LD: name` `contains` `Testomato` | Testomato ✓ | Testomato | Testomato s.r.o. |
| `JSON-LD: name` `contains` `Testomato s.r.o.` | Testomato | Testomato | Testomato s.r.o. ✓ |
| `JSON-LD: AR.ratingValue` `matches` `\d+` | — | 4.6 ✓ | — |

**If you need to target a specific block,** use the type-scoped form.
`JSON-LD: Organization: name` only checks blocks where `@type` is `Organization`.

:::caution
Negated operators (`does not contain`, `does not match`) also pass if **any single** extracted value satisfies them. On a page with multiple blocks, `JSON-LD: name` `does not contain` `foo` passes as long as one block's name doesn't contain foo — even if another block's does. Use type-scoped checks to avoid ambiguity.
:::

## Failure modes

| What happened | Error shown |
|---|---|
| No `<script type="application/ld+json">` blocks found, or all blocks are empty | `Missing JSON-LD` |
| At least one block contains malformed JSON and no valid block remains | `Invalid JSON-LD` |
| Block found, but the property path is not present | `Missing JSON-LD property: {path}` |
| Property found, but value fails the operator | Check marked failed, no message |

## Exact type matching

The `@type` filter matches the block's declared type exactly. A page using `@type: BlogPosting` will not
match `JSON-LD: Article: headline`, even though `BlogPosting` is a subtype of `Article` in schema.org.

## Starter checks

The rule picker includes pre-built presets for the most common fields.

### Presence and type

| Check | Operator | What it catches |
|---|---|---|
| `JSON-LD: @type` | matches `[A-Z]\w+` | At least one JSON-LD block exists with a valid type |

### Product

| Check | Operator | What it catches |
|---|---|---|
| `JSON-LD: Product: name` | matches `.*` | Product name is present |
| `JSON-LD: Product: offers.price` | matches `.*` | Price is populated |
| `JSON-LD: AR.ratingValue` | matches `\d+(\.\d+)?` | Rating is a valid number |

### Article

| Check | Operator | What it catches |
|---|---|---|
| `JSON-LD: Article: headline` | matches `.*` | Headline is present |
| `JSON-LD: Article: datePublished` | matches `\d{4}-\d{2}-\d{2}` | Published date is a valid ISO date |
| `JSON-LD: author.name` | matches `.*` | Author name is populated |

### Organization

| Check | Operator | What it catches |
|---|---|---|
| `JSON-LD: Organization: name` | matches `.*` | Organization block has a name |

### Breadcrumbs

| Check | Operator | What it catches |
|---|---|---|
| `JSON-LD: BreadcrumbList: itemListElement` | contains `Home` | Breadcrumb items include a home entry |

## Resources

- [Monitoring JSON-LD Structured Data](https://testomato.com/blog/json-ld-monitoring/) — background, examples, and what to monitor first
- [Google Rich Results Test](https://search.google.com/test/rich-results) — check eligibility for rich results
- [Schema.org Validator](https://validator.schema.org/) — validate structured data against the schema.org vocabulary
- [JSON-LD Playground](https://json-ld.org/playground/) — experiment with JSON-LD syntax interactively
- [schema.org](https://schema.org/) — type and property reference