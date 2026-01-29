---
id: string-checks
title: String checks
sidebar_label: String checks
---

Testomato allows you to create string checks for two types of page content. Those simple checks can be created for:

![String checks](/img/checks/string-checks.png)

1. `HTML on page` - represents raw source code that we downloaded from given URL
2. `Text on page` - represents just readable text from given URL

Then you can use following **operators**:

* `contains` - check that downloaded content contains given string with [substr()](https://www.php.net/manual/en/function.substr.php) PHP function
* `does not contain` - check that content does not contain given string
* `equals` - content is exactly same
* `matches` - check that content match regular expression with [preg_match()](https://www.php.net/manual/en/function.preg-match.php) PHP function
* `does not match` - check that content not match


:::tip
**String checks** are case sensitive, so make sure you **PaY ClosE AtTentioN** to the text you enter.
:::

### How regular expressions are processed

Testomato processes and escapes all users inputs including regular expressions. We are using `{` and `}` for wrapping your
regex and also add following [Pattern Modifiers](https://www.php.net/manual/en/reference.pcre.pattern.modifiers.php):

* `u` pattern and subject strings are treated as UTF-8. An invalid subject will cause the preg_* function to match nothing;
* `m` subject strings are treated as multi-line string

You can debug your regex with https://www.phpliveregex.com/ or https://phphub.net/regex/ 

### When use `Text on page` when `HTML on page`?

`HTML on page` is content as we downloaded from given url, only encoded to `utf8` - it's useful for checking whole content including
 HTML tags or meta information in `<head></head>`. 
 
 `Text on page` is subset of `HTML on page` - we just remove all markup (HTML tags,
  header, scripts etc.) and then apply all your checks. 
