---
title: Notifications and alerts
---

Testomato sends two types of notifications:

- **Warning** notifications are sent only when crawler timeouts, and
  we are not able to download any content.
- **Error** notifications is sent to you when some [check failed](/checks/introduction).

## When are notifications sent?

Notifications are only sent if the check status changes. If you intentionally create a failing check, 
Testomato will not notify you, because you know about this condition.

A notification is generated, for example, if the previous status was 200 OK and changed to 
404 Page not found. We will then send you a notification. This helps us avoid being overwhelmed by
notifications when setting up new check or change something.

## What notifications channels are supported? 

Testomato supports several services:

* Slack
* PagerDuty
* Pushover
* Pushbullet


The most popular service at Testomato is Slack:

<iframe width="100%" height="480" src="https://www.youtube.com/embed/L11cP3qViKM"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
