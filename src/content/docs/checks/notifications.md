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

## What notification channels are supported?

Testomato can send alerts to:

* Email
* Browser push
* Slack
* Discord
* Google Chat
* Telegram
* Webhook
* PagerDuty
* Pushover
* Pushbullet
* SMS (Twilio)

See [Notification channels](/checks/notification-channels/) for how to connect each of them and choose which ones alert you for each project.
