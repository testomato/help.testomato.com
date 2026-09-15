---
title: About
description: What Testomatobot is, the user agent it identifies itself with, and where to find its IP addresses.
sidebar:
  order: 1
---
[Testomatobot](https://testomato.com/bot) is the web crawler used by [Testomato](https://testomato.com) to access checked websites, submit HTML forms, and download web pages and other resources according to each project's configuration.

Testomatobot identifies itself with the following [User-Agent string](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent). The platform and `minicrawler` version vary between checks, so match on `Testomatobot` rather than on the whole string:

```text
Testomatobot/1.0 (Linux x86_64; +https://testomato.com/bot) minicrawler/<version>
```

## IP addresses

Testomatobot runs from a fixed set of addresses, listed with their locations on [testomato.com/bot](https://testomato.com/bot) and as plain text, one address per line, at [`ipv4.txt`](https://testomato.com/bot/ipv4.txt) and [`ipv4-ipv6.txt`](https://testomato.com/bot/ipv4-ipv6.txt).

:::tip
If a firewall, a WAF or a rate limiter is blocking the bot, see [Firewall and allowlisting](/bot/firewall/) for rules you can copy.
:::

## Open source

Testomatobot uses [Minicrawler](https://github.com/testomato/minicrawler) to perform HTTP requests and retrieve responses, including headers. Minicrawler was developed to have the smallest possible memory and processor footprint, built specifically for Testomato's needs. It is open-sourced under the [AGPL License](https://www.gnu.org/licenses/agpl-3.0.html).

We welcome any suggestions or contributions. Feel free to try it out and let us know what you think.

:::tip
If you would like Testomatobot to stop accessing your server, please contact us at [info@testomato.com](mailto:info@testomato.com).
:::
