---
title: Cloudflare
description: Why Cloudflare returns Access denied (Error 1020) to Testomatobot, how to find the rule that blocked it, and how to allow Testomato's addresses through.
sidebar:
  order: 3
---
Cloudflare is the most common reason a check fails on a site that is perfectly healthy. It can mistake monitoring traffic for data scraping, and the frequency Testomato checks at — every minute, sometimes several URLs at once — looks like exactly the pattern its bot and rate-limiting rules exist to stop.

## Access denied (Error 1020)

A blocked check usually comes back as an **Access denied (Error 1020)** response:

![Cloudflare Error 1020 access denied screen](/img/bot/error-1020.png)

Error 1020 means Testomatobot was blocked by a [WAF custom rule](https://developers.cloudflare.com/waf/custom-rules/). The rule is one of yours, so the fix is to find it and add an exception. Other blocks show up as a challenge page, a `429`, or one of the other [1xxx error codes](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/) — the way to identify them is the same.

## Finding the rule

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/login) and select your domain.
2. Go to **Security → Events** ([Security Events](https://developers.cloudflare.com/waf/analytics/security-events/)).
3. Filter by the **Ray ID** from the error page, or by one of the [Testomato IP addresses](/bot/firewall/#ip-addresses), to find the blocked request.
4. The event names the service and the rule that blocked it — a custom rule, a managed rule, rate limiting or IP reputation.

:::caution
Older instructions tell you to pause Cloudflare and look at the **Firewall** page. That page is now **Security → WAF**, and pausing is only a way to confirm that Cloudflare is the cause — it takes your site out from behind Cloudflare entirely, so the checks go green because nothing is filtering them any more. Unpause once you know.
:::

## Allowing Testomato through

There are two ways to do it. Pick one.

### IP Access Rules (simplest)

1. In the [Cloudflare dashboard](https://dash.cloudflare.com/login), select your domain.
2. Go to **Security → WAF → Tools**.
3. Under [**IP Access Rules**](https://developers.cloudflare.com/waf/tools/ip-access-rules/), add each [Testomato address](/bot/firewall/#ip-addresses) with the action **Allow** and scope it to the site or your whole account.

This exempts the addresses from the WAF, rate limiting and the IP reputation checks, but not from a custom rule that blocks them explicitly.

### A WAF skip rule (more control)

A [skip rule](https://developers.cloudflare.com/waf/custom-rules/skip/) in **Security → WAF → Custom rules** overrides everything below it, including your own block rules:

1. Create a custom rule and place it above the rules that are blocking Testomato.
2. Use this expression, with the full list of addresses in the set:

   ```txt
   (ip.src in {217.31.53.147 217.31.54.206 167.235.18.92})
   ```

3. Choose the action **Skip** and tick the components to bypass — at minimum **All remaining custom rules**, **Rate limiting rules** and **Managed rules**.

:::tip
Once the rule is live, confirm it worked by [checking your logs](/bot/firewall/#checking-that-it-worked) rather than by waiting for the next check to go green.
:::

## Further reading

* [What is a Firewall?](https://www.cloudflare.com/learning/security/what-is-a-firewall/)
* [What is a Web Application Firewall (WAF)?](https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/)
* [What is Data Scraping?](https://www.cloudflare.com/learning/bots/what-is-data-scraping/)
* [Cloudflare Bot Management](https://www.cloudflare.com/products/bot-management/)
