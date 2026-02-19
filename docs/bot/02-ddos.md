---
id: ddos
title: DDoS protection
---

## What is a DDoS attack?

A [Denial-of-service (DoS) attack](https://en.wikipedia.org/wiki/Denial-of-service_attack) is a cyber-attack in which the perpetrator makes a machine or network resource unavailable to its intended users by disrupting services of a host connected to the internet. This is typically accomplished by flooding the target with superfluous requests in an attempt to overload the system and prevent legitimate requests from being fulfilled. A distributed denial-of-service (DDoS) attack does this using multiple compromised systems as sources of attack traffic.

## Can Testomato trigger DDoS protection?

Yes. [Testomatobot](https://www.testomato.com/bot) accesses checked websites very frequently — for example, every minute — and depending on your project settings, may download multiple URLs from the same website simultaneously. This pattern of behaviour can resemble a DDoS attack and may trigger automated protections on your server or hosting provider.

:::note
Read more [about Testomatobot](/bot/about).
:::

Since all Testomato servers use fixed IP addresses, you can avoid this by whitelisting those addresses in your firewall.

:::info
For a full list of Testomatobot IP addresses, see [testomato.com/bot](https://www.testomato.com/bot).
:::

## Cloudflare Access denied (Error 1020)

[Cloudflare](https://www.cloudflare.com/) may block Testomatobot and return an **Access denied (Error 1020)** response, as it can mistake monitoring traffic for data scraping.

![Cloudflare Error 1020 access denied screen](/img/bot/error-1020.png)

Error 1020 means that Testomatobot has been blocked by a [Cloudflare Firewall Rule](https://developers.cloudflare.com/firewall/cf-firewall-rules). To resolve this, you will need to update your Cloudflare firewall settings to allow Testomato's IP addresses through.

### How to fix Error 1020

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/login).
2. Temporarily [pause Cloudflare on your site](https://support.cloudflare.com/hc/en-us/articles/203118044#h_8654c523-e31e-4f40-a3c7-0674336a2753).
3. Go to the **Firewall** page.
4. Search for the **RAY ID** or [Testomato IP addresses](https://www.testomato.com/bot) in **Firewall Events** to identify the blocking rule.
5. Update the rule to allow Testomatobot through, or add Testomato's IP addresses to your allowlist.

### Further reading

* [What is a Firewall?](https://www.cloudflare.com/learning/security/what-is-a-firewall/)
* [What is a DDoS Attack?](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)
* [What is a Web Application Firewall (WAF)?](https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/)
* [What is Data Scraping?](https://www.cloudflare.com/learning/bots/what-is-data-scraping/)
* [Cloudflare Bot Management](https://www.cloudflare.com/products/bot-management/)