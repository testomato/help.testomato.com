---
id: about
title: About
---

[TestomatoBot](https://www.testomato.com/bot) is the web crawler used by [Testomato](https://www.testomato.com) to access checked websites, submit HTML forms, and download web pages and other resources according to each project's configuration.

TestomatoBot identifies itself with the following [User-Agent string](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent):

```text
Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.1.2
```

:::info
For a full list of TestomatoBot IP addresses, see [testomato.com/bot](https://www.testomato.com/bot).
:::


## Open source

TestomatoBot uses [Minicrawler](https://github.com/testomato/minicrawler) to perform HTTP requests and retrieve responses, including headers. Minicrawler was developed to have the smallest possible memory and processor footprint, built specifically for Testomato's needs. It is open-sourced under the [AGPL License](https://www.gnu.org/licenses/agpl-3.0.html).

We welcome any suggestions or contributions. Feel free to try it out and let us know what you think.

:::tip
If you would like TestomatoBot to stop accessing your server, please contact us at [info@testomato.com](mailto:info@testomato.com).
:::