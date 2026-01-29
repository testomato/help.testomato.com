---
id: semantic
title: Semantic checks
sidebar_label: Semantic checks
---

Testomato can check some basics [metadata](https://developer.mozilla.org/en-US/docs/Glossary/Metadata) or semantic tags inside HTML `<head>` tag. 


![Twitter Semantic](/img/checks/semantic-checks.png)


### Page title

The [title tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) is main and most important anchor for SEO.
Check `Page <title>` allow you to check exact HTML `<title>` tag content:

```html
<title>content...</title>
```

### Meta description

```html
<meta name="description" content="content..."/>
```

### The Open Graph tags

The [Open Graph protocol](https://ogp.me/) enables any web page to become a rich object in a social graph. 
For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.

```html
<meta property="og:title" content="content..."/>
<meta property="og:description" content="content..."/>
<meta property="og:image" content="content..."/>
<meta property="og:image:height" content="content..."/>
<meta property="og:image:width" content="content..."/>
<meta property="og:type" content="content..."/>
<meta property="og:url" content="content..."/>
<meta property="og:site_name" content="content..."/>
<meta property="og:locale" content="content..."/>
<meta property="og:updated_time" content="content..."/>
```

and without `og` prefixes

```html
<meta property="article:modified_time" content="content..."/>
<meta property="article:published_time" content="content..."/>
<meta property="article:publisher" content="content..."/>
<meta property="article:section" content="content..."/>
<meta property="article:tag" content="content..."/>
```

### Twitter Cards tags

Testomato allows you to check [Twitter Card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) markup meta: 

![Twitter Semantic](/img/checks/semantic-checks-twitter.png)

Currently are supported follow markups:
 
```html
<meta name="twitter:title" content="content..."/>
<meta name="twitter:image" content="content..."/>
<meta name="twitter:image:alt" content="content..."/>
<meta name="twitter:description" content="content..."/>
<meta name="twitter:card" content="content..."/>
<meta name="twitter:site" content="content..."/>
```

Get more information about [Twitter Cards markup](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup). 
