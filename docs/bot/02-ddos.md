---
id: ddos
title: TestomatoBot and DDoS protection 
sidebar_label: DDoS protection
---

## What is DDoS (Denial-of-service attack) 

[Denial-of-service attack](https://en.wikipedia.org/wiki/Denial-of-service_attack) (DoS attack) is a cyber-attack in
which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily 
or indefinitely disrupting services of a host connected to the Internet. Denial of service is typically accomplished 
by flooding the targeted machine or resource with superfluous requests in an **attempt to overload systems** and
prevent some or all legitimate requests from being fulfilled. DDoS attacks achieve effectiveness by 
utilizing **multiple compromised computer** systems as sources of attack traffic.

## False DDoS attack by Testomato
 
[TestomatoBot](https://www.testomato.com/bot) accesses checked websites very frequently (e.g. every minute) and 
according to the Project settings **TestomatoBot** try download multiple URLs from same website at once that can be
taken as attempt to DDoS attack.

:::note
   Read more information [about TestomatoBot](/bot/about) 
:::

All Testomato servers always use same IP addresses, these addresses can be whitelisted on your Firewall. 

:::info
   Get list of all TestomatoBot IP addresses: https://www.testomato.com/bot
:::

## Advanced DDoS Protection by Cloudflare
 
[Cloudflare](https://www.cloudflare.com/) aims to block bots and crawlers like [TestomatoBot](/bot/about). 
They assume that [TestomatoBot](/bot/about) is used by data scrapers so they are blocking 
it and response by [Access denied (Error: 1020)](https://www.google.com/search?q=Error+1020+cloudflare). 

![](/img/bot/error-1020.png)

**Access denied (Error: 1020)** indicates that TestomatoBot violated a [Firewall Rule](https://developers.cloudflare.com/firewall/cf-firewall-rules).

#### How to fix that?

1. Login to [Cloudflare Dashboard](https://dash.cloudflare.com/login)
2. Temporarily pause [Cloudflare on Site](https://support.cloudflare.com/hc/en-us/articles/203118044#h_8654c523-e31e-4f40-a3c7-0674336a2753)
3. Go to **Firewall** page
4. Search for the **RAY ID** or [Testomato IP addresses](https://www.testomato.com/bot) in the **Firewall Events**
5. Once we find the exact, the next step is to make changes to the rule to make the website accessible.

#### Getting more information

* [What is a Firewall?](https://www.cloudflare.com/learning/security/what-is-a-firewall/)
* [What is a DDoS Attack?](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)
* [What is Web Application Firewall (WAF)](https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/)
* [What is Data Scraping?](https://www.cloudflare.com/learning/bots/what-is-data-scraping/)
* [Cloudflare Bot Management](https://www.cloudflare.com/products/bot-management/)

