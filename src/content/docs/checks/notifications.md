---
title: Notifications and alerts
sidebar:
  order: 6
---
Testomato sends two types of notifications:

- **Warning** notifications are sent only when crawler timeouts and
  we are not able to download any content.
- **Error** notifications are sent to you when some check has failed.

## When are notifications sent?

Notifications are only sent if the check status changes. If you intentionally create a failing check, 
Testomato will not notify you, because you know about this condition.

A notification is generated, for example, if the previous status was 200 OK and changed to 
404 Page not found. We will then send you a notification. This helps you avoid being overwhelmed by
notifications when setting up a new check or after changing an existing check.

## What notifications channels are supported? 

Testomato supports several services:

* Slack
* PagerDuty
* Pushover
* Pushbullet


The most popular service at Testomato is Slack:

https://www.youtube.com/watch?v=L11cP3qViKM
