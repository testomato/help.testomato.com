---
id: uptime
title: Uptime monitoring
---

Uptime monitoring checks whether your site or server is reachable and measures its response time. It is automatically enabled on the **Professional**, **Business**, and **Enterprise** plans, and during the 30-day free trial.

:::tip
If your plan does not include uptime monitoring, see our [pricing plans](https://www.testomato.com/pricing) for more information.
:::

## How to disable uptime monitoring

1. Click on the project you'd like to manage, or select it from the **All Projects** menu in the top right corner.
2. Click the **edit button** next to the uptime status. ![Testomato screenshot with a red callout pointing to the edit button](/img/uptime-setup.png)
3. Select `OFF` in the uptime interval menu and confirm the change. ![Detail image of the interval select menu with multiple option](/img/uptime-disable.png)

## Why does Testomato say my site is down when it's not?

Testomato may occasionally report your site as down or unavailable even when everything looks fine when you investigate yourself. There are a few reasons this can happen.

### Monitoring is done from an external location

[Testomato Bot](https://www.testomato.com/bot) tests your site from outside the local network where your server is hosted. This means it is subject to the same network conditions as any external visitor, including latency — the time it takes data to travel from one point to another.

In some cases, a brief network disruption between Testomato's monitoring location and your server can make your site appear unreachable, even if it is functioning normally for users in other locations.

### Testomato retests before alerting

To reduce false alerts caused by short-term issues, Testomato automatically retests your project a second time before sending a downtime notification. You will only receive an alert if the second test also fails.

### More monitoring locations

Testomato is continuously adding monitoring locations to reduce the influence of any single connection on your results. If you are seeing frequent false timeouts, this may improve over time as additional locations are added.