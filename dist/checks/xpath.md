Testomato can run [XPath](https://developer.mozilla.org/en-US/docs/Web/XML/XPath) expressions against a page's HTML.
Select the **HTML Source Code** check type, then choose the **matches XPath** operator and enter your expression as the check value.

## What is XPath?

XPath is a query language for selecting nodes in an XML or HTML document — think of it as a way to address a specific
element, attribute, or set of elements by their position in the page structure, rather than by searching for text.

It also has built-in functions like `count()`, `contains()`, and `string-length()` for reasoning about what it selects.

Testomato evaluates XPath 1.0 expressions against the page's HTML source.

## When to use XPath?

Reach for XPath when the check depends on structure or count, not just content.

String and regex checks only see the page as flat text — they can match a substring or pattern, but they can't count
elements, filter by attribute, or reason about a tag's position. XPath can:

- **Count elements** — e.g. assert there's exactly one `<h1>`, or zero images missing `alt` text
- **Filter by attribute** — select elements that have (or lack) a given attribute
- **Select by relationship** — e.g. "the `<td>` right after the one containing `Pro`"

That's what makes XPath checks resilient to copy changes — the check targets the element, not the wording. If you just
need to confirm a string is present or absent, a [string check](/checks/string-checks/) is simpler and enough.

## Use Cases

### Duplicate or missing H1

A page should have exactly one `<h1>`, giving it a single clear topic for both readers and search engines:

```
count(//h1)=1
```

You can also assert an optimal H1 length with `string-length()` — SEO guidance generally recommends 50–60 characters
so the heading isn't truncated in search results:

```
string-length(//h1) >= 50 and string-length(//h1) <= 60
```

For example, our own [pricing page](https://testomato.com/pricing/) H1 — "Simple, transparent pricing for every
team" — is 42 characters, so this check would currently fail there.

### Duplicate meta description

Repeated descriptions hurt click-through rate because search results become indistinguishable:

```
count(//meta[@name="description"])=1
```

### Missing or empty img alt

All non-decoratieve `<img>` tags should have a non-empty `alt` attribute, for SEO and accessibility (screen readers rely on it, and Google
indexes it for image search):

```
count(//img[not(@alt) or @alt=''])=0
```

You can combine this with `contains()` or `string-length()` to also assert a specific image's alt text includes a
keyword, or falls within a length range.

### Table row/cell pairing

Find a row by one cell's value instead of its position, so the check still works if rows are reordered or added.
Our [bot page](https://testomato.com/bot/) lists each monitoring node's IP address in a table; this finds the row
for `testomato.com` and checks its IPv4 cell:

```
//tr[th/small="testomato.com"]/td[1]/pre/code="217.31.53.147"
```

## Tools and Resources

- [XPath Playground](https://scrapinghub.github.io/xpath-playground/) — sandbox for writing and testing expressions against real HTML
- [XPath cheat sheet](https://devhints.io/xpath) — quick syntax reference
- Browser DevTools — use `$x("your-expression")` in the console to test against the live page, including boolean/count results