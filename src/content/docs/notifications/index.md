---
title: Notifications and alerts
description: When Testomato sends a notification, what kinds there are and where it can send them.
sidebar:
  label: Overview
  order: 1
---
Testomato sends two types of notifications:

- **Warning** notifications are sent only when crawler timeouts and
  we are not able to download any content.
- **Error** notifications are sent to you when some check has failed.

Which of them you get is set per project by [alert sensitivity](/notifications/settings/#alert-sensitivity).

## When are notifications sent?

Notifications are only sent if the check status changes. If you intentionally create a failing check, 
Testomato will not notify you, because you know about this condition.

A notification is generated, for example, if the previous status was 200 OK and changed to 
404 Page not found. We will then send you a notification. This helps you avoid being overwhelmed by
notifications when setting up a new check or after changing an existing check.

To skip short outages that fix themselves, set an [alert delay](/notifications/settings/#alert-delay).

## What notification channels are supported?

Testomato can send alerts to:

* [Email](/notifications/channels/#email)
* [Browser push](/notifications/channels/#browser-push)
* [Slack](/notifications/channels/#slack)
* [Discord](/notifications/channels/#discord)
* [Google Chat](/notifications/channels/#google-chat)
* [Telegram](/notifications/channels/#telegram)
* [Webhook](/notifications/channels/#webhook)
* [PagerDuty](/notifications/channels/#pagerduty)
* [Pushover](/notifications/channels/#pushover)
* [Pushbullet](/notifications/channels/#pushbullet)
* [SMS (Twilio)](/notifications/channels/#sms-twilio)

See [Notification channels](/notifications/channels/) for how to connect each of them, and [Alert settings](/notifications/settings/) for choosing which ones alert you for each project.
