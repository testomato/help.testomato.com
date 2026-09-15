---
title: DDoS protection
description: Why Testomato's monitoring traffic can look like an attack to a firewall, and how to tell a real outage from a check that was blocked.
sidebar:
  order: 5
---
## What is a DDoS attack?

A [Denial-of-service (DoS) attack](https://en.wikipedia.org/wiki/Denial-of-service_attack) is a cyber-attack in which the perpetrator makes a machine or network resource unavailable to its intended users by disrupting services of a host connected to the internet. This is typically accomplished by flooding the target with superfluous requests in an attempt to overload the system and prevent legitimate requests from being fulfilled. A distributed denial-of-service (DDoS) attack does this using multiple compromised systems as sources of attack traffic.

## Can Testomato trigger DDoS protection?

Yes. [Testomatobot](https://testomato.com/bot) accesses checked websites very frequently — for example, every minute — and depending on your project settings, may download multiple URLs from the same website simultaneously. This pattern of behaviour can resemble a DDoS attack and may trigger automated protections on your server or hosting provider.

Three things about a monitoring check make it look suspicious to an automated defence:

* **The frequency.** A human visitor does not request the same page every sixty seconds, from the same address, indefinitely.
* **The client.** Testomatobot is not a browser. It does not run JavaScript, so it cannot solve the challenges that bot protections use to tell a person from a script.
* **The pattern.** Checks arrive from several monitoring locations, which to a rate limiter counting by network can look like a small distributed burst.

:::note
Read more [about Testomatobot](/bot/about/).
:::

Since all Testomato servers use fixed IP addresses, you can avoid all of this by allowing those addresses through. [Firewall and allowlisting](/bot/firewall/) has the address list and the rules to copy.

## Is the site down, or is the check blocked?

A blocked check is reported as a failure, so the first question is which of the two you are looking at. Open the failing check in Testomato and compare the response it received with what you see yourself:

| What Testomato received | What it usually means |
| --- | --- |
| `403`, or a challenge or error page from your CDN | The check was blocked. Allow the addresses through |
| `429` | Rate limiting. Allow the addresses through, or raise the threshold |
| `5xx` while the site loads for you | A real problem that only affects some requests — a failing origin behind a load balancer, or a resource limit |
| A timeout | Either a real outage or a firewall dropping the packets silently |

Your access log settles it: a request that reached the web server is in there with the status it got, and a request that is missing entirely was stopped before it, by a network firewall or a CDN. [Checking that it worked](/bot/firewall/#checking-that-it-worked) walks through this.

## Where the rule lives

Protections stack, and the one that blocked the check is not always the one you think. Work from the outside in — the request has to pass every layer in this order:

1. Your **CDN or hosting platform**, which filters before anything reaches your server. This is where most blocks happen: see [Cloudflare](/bot/cloudflare/) and [Vercel](/bot/vercel/).
2. Your **server firewall** — ufw, iptables, fail2ban.
3. Your **web server** and its rate limiting.
4. Your **application** — a security plugin such as Wordfence, or your own bot detection.

Each of these is covered in [Firewall and allowlisting](/bot/firewall/).

## Further reading

* [What is a DDoS Attack?](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)
* [What is a Firewall?](https://www.cloudflare.com/learning/security/what-is-a-firewall/)
