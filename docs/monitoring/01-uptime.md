---
id: uptime
title: Uptime monitoring
---

### Getting false timeouts

Why Does Testomato Say My Site Is Down When It's Not? Testomato may
occasionally report your site is down or unavailable, but everything
looks fine when you go and investigate the problem for yourself.

### Location Matters

Uptime Monitoring in Testomato is done externally rather than internally
This means that [Testomatobot](https://www.testomato.com) tests and
monitors your site or server from a location that is outside the 
local network where your server is hosted.

In some cases, a project may be unavailable to Testomato a very short
period of time due to problems with network latency, i.e. how long it
takes data to get from one point to another.

To help avoid sending alerts about false timeouts or short-term issues,
we retest your project a second time before we send an alert if
[Testomato](https://www.testomato.com) is unable to connect with your site or server.

We have also started adding more testing locations in Testomato to help
minimize the influence of our connection on your project test results.

## Disable Uptime Monitoring

Site downtime can mean loss of revenue and user trust, so it's important
to stay one step ahead by knowing when your website is up or down.
Uptime Monitoring & Response Time is automatically enabled for our:

* **Professional Plan**
* **Business Plan**
* **Enterprise Plan**
* and during a 30-day free trial period

:::tip

If your plan does not support uptime monitoring, please take a look at
our [pricing plans](https://www.testomato.com/pricing) for more
information.

:::

#### How to Disable Uptime Monitoring

1. Click on the project you'd like to manage or select it from your All
   projects menu in the top right corner.
2. Click to **edit button** near to uptime ![](/img/uptime-setup.png)
4. Then select `OFF` in uptime interval menu, and confirm change ![](/img/uptime-disable.png)


