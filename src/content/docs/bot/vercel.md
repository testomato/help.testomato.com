---
title: Vercel
description: Why the Vercel Security Checkpoint blocks Testomatobot, and how to add a WAF bypass rule — by hand or with a ready-made prompt.
sidebar:
  order: 4
---
Vercel's firewall is where the **Vercel Security Checkpoint** comes from — the interstitial page that asks the visitor's browser to solve a JavaScript challenge. Testomatobot is not a browser and cannot solve it, so a challenged check always fails. Vercel's documentation says as much: automated tools cannot establish a challenge session, and the supported answer for legitimate automation is a [bypass](https://vercel.com/docs/vercel-firewall/firewall-concepts#bypass) rule.

The checkpoint shows up for three different reasons, and the fix is not the same for all of them:

| What is challenging the request | How to let Testomato through |
| --- | --- |
| A custom rule with the **Challenge** action | A custom rule with the **Bypass** action, ordered above it |
| [**Attack Mode**](https://vercel.com/docs/vercel-firewall/attack-mode), under **Firewall → Bot Management** | Attack Mode waves through the bots in Vercel's own verified-bot directory, and Testomatobot is not one of them. Disable Attack Mode once the attack is over, or add a System Bypass rule |
| Automatic [DDoS mitigation](https://vercel.com/docs/vercel-firewall/ddos-mitigation) | A System Bypass rule — see [System-level mitigations](#system-level-mitigations) below |

## Add a bypass rule

1. In the [Vercel dashboard](https://vercel.com/dashboard), open your project and select **Firewall** in the sidebar.
2. Select **⋯ → Configure** at the top right, then **Add Rule**.
3. Name the rule, for example `Allow Testomatobot traffic`.
4. Add an **If** condition on **IP Address**, listing [Testomato's addresses](/bot/firewall/#ip-addresses), combine it with **AND**, and add a second condition: **User Agent** **Contains** `Testomatobot`.
5. Set **Then** to **Bypass**.
6. Select **Save Rule**, then **Review Changes** and **Publish**.

![The Vercel custom rule form with a bypass rule for Testomatobot](/img/bot/vercel-rule.png)

The rule then appears under **Project rules**, where you can toggle it off without deleting it:

![The finished rule in Vercel's project rules list](/img/bot/vercel-rules-list.png)

:::caution
The rule pictured above matches on the user agent alone, which is the quickest thing to set up and the weakest — the header is trivial to forge, so anyone who sends it walks straight past your firewall. Add the IP condition and combine the two with **AND**.

Match on `Testomatobot`, not on `Testomatobot/1.0` or `minicrawler/5.2.7`. The platform and `minicrawler` version change between releases, and a rule pinned to one of them stops matching without warning.
:::

## Generate the rule with a prompt

Vercel builds a rule from a plain-English description, but it cannot read the address list for you — give it the URL on its own and it says so and asks you to paste the addresses instead. So fetch them first:

```bash
curl -fsS https://testomato.com/bot/ipv4-ipv6.txt | paste -sd, -
```

Use [`ipv4.txt`](https://testomato.com/bot/ipv4.txt) instead if your site is not reachable over IPv6. Then paste this into the text area at the top of the rule form, with the addresses in place of the placeholder, and select **Generate Rule**:

```text
Create a rule named "Allow Testomatobot traffic" for Testomato's website monitoring service.

Match a request when the User Agent contains "Testomatobot" AND the IP address is one of:
<paste the addresses here, comma-separated>

Set the action to Bypass.
```

:::caution
When it asks for the addresses, it also offers to build a rule that matches the user agent alone and let you add the IP conditions later. Decline that one. A **Bypass** rule keyed on a header anyone can send is an open door through your firewall, and "later" tends not to come.

Read the conditions before you save and compare them against the file. A rule whose IP condition came out empty, or holds addresses that are not Testomato's, looks perfectly reasonable in the form and quietly matches nothing — with a bypass action, the only symptom is checks that keep failing.
:::

The same text area edits an existing rule — "add the IP addresses to the condition" or "change the action to bypass" both work.

## System-level mitigations

A bypass custom rule only bypasses your remaining custom rules and the managed rulesets. Vercel is explicit that it does **not** cover system-level mitigations such as DDoS protection. If checks still fail while the rule is live and matching, add a [System Bypass rule](https://vercel.com/docs/vercel-firewall/vercel-waf/system-bypass-rules):

1. On the **Firewall** page, select **Add New** and then **System Bypass**.
2. Fill in **IP Address Or CIDR** and **Domain** — a domain connected to the project, or `*` for all of them — and a note for future reference.
3. Select **Create System Bypass**, and repeat for each address.

:::note
System Bypass rules are a Pro and Enterprise feature, limited to 25 rules per project on Pro and 100 on Enterprise. The twelve IPv4 addresses fit comfortably; add the IPv6 ones only if your site is reachable over IPv6.

Custom rules are capped too — three per project on Hobby, forty on Pro.
:::

:::caution
WAF rules defined in `vercel.json` through `routes` and `mitigate` support only the `challenge` and `deny` actions. A bypass rule has to be created in the dashboard, the [CLI](https://vercel.com/docs/cli/firewall) or the REST API. Firewall changes apply immediately and do not need a redeployment.
:::

:::tip
Once the rule is published, confirm it worked by [checking your logs](/bot/firewall/#checking-that-it-worked) rather than by waiting for the next check to go green.
:::
