---
id: about
title: About TestomatoBot
sidebar_label: About
---

### What is TestomatoBot?

[TestomatoBot](https://www.testomato.com/bot) is the web crawler software and toolset used by [Testomato](https://www.testomato.com)
to access checked websites, submit HTML Forms, downloads web pages and other resources that will be checked according to the 
project configurations of Testomato's users.

TestomatoBot uses by default the following [User-Agent string](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent):

```text
Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.1.2
```

:::info
   Get list of all TestomatoBot IP addresses: https://www.testomato.com/bot
:::

## Open source code

[TestomatoBot](https://www.testomato.com/bot) uses [Minicrawler](https://github.com/testomato/minicrawler) to perform an HTTP requests for a given 
URL to get an HTTP response, including headers. It was developed to have the smallest possible memory footprint, processor time consumption, 
and fit the needs of [Testomato](https://www.testomato.com), as well as other internal projects. [Minicrawler](https://github.com/testomato/minicrawler) 
is open-sourced under the AGPL License.

We encourage you to check [Minicrawler](https://github.com/testomato/minicrawler) out and try it out for yourself. 
We welcome any suggestions or feedback you might have for ways we can improve it!

:::tip
   If you don't want Testomatobot to access your server (i.e. due to overloading), please contact us at [info@testomato.com](mailto:info@testomato.com).
:::