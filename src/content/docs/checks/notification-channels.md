---
title: Notification channels
description: Connect Email, Slack, Discord, Google Chat, Telegram, SMS and other services, then choose which of them alert you for each project.
sidebar:
  order: 7
---
Testomato can alert you about incidents in several places at once. You connect each service once, on your account, and then choose for every project which of the connected channels it uses.

All of it lives on one page: open the user menu and click **Notifications**. The page has three parts:

- **Alert delay** — how long an incident must last before you are notified.
- **Channels & integrations** — the services you connect.
- **Project delivery** — which channels each project uses and how sensitive its alerts are.

## Supported channels

| Channel | What it does | How you connect it |
| --- | --- | --- |
| [Email](#email) | Sends alerts to your inbox | On by default |
| [Browser push](#browser-push) | Native alerts on your device, even when the tab is closed | Allow notifications in the browser |
| [Slack](#slack) | Posts incidents to a Slack channel | One click, Slack sign-in |
| [Discord](#discord) | Posts incidents to a Discord channel | Webhook URL |
| [Google Chat](#google-chat) | Posts incidents to a Google Chat space | Webhook URL |
| [Telegram](#telegram) | The Testomato bot messages you or your group | Press **Start** in Telegram |
| [Webhook](#webhook) | Sends incidents as JSON to any URL | Your URL |
| [PagerDuty](#pagerduty) | Triggers on-call incidents | Service API key |
| [Pushover](#pushover) | Push notifications to your phone | User key |
| [Pushbullet](#pushbullet) | Push notifications | Access token |
| [SMS (Twilio)](#sms-twilio) | Text messages through your own Twilio account | Twilio credentials |

Every connected channel has a **Test** button that sends a sample alert, so you can check the setup right away.

## Connect a channel

Open **Notifications** and click the channel in **Channels & integrations** to expand it. The steps for each one follow.

### Email

Email is connected from the start and alerts go to the address you sign in with. To send them somewhere else, enter a different address under **Send to a custom address instead**. Clear the field to go back to your sign-in address.

### Browser push

Click **Enable on this device** and allow notifications when the browser asks. Each device and browser has to be enabled on its own; the enabled ones are listed under the channel, and you can remove any of them.

Browser push works in current versions of Chrome, Edge, Firefox and Opera.

### Slack

Click **Add to Slack**, sign in to your Slack workspace and pick the channel that should get the alerts. Testomato then shows the channel and workspace it posts to.

https://www.youtube.com/watch?v=L11cP3qViKM

### Discord

Discord alerts are posted through a channel webhook. You need the **Manage Webhooks** permission on the Discord server.

1. In Discord, open your server settings and go to **Integrations** → **Webhooks**.
2. Click **New Webhook** and pick the channel for the alerts.
3. Click **Copy Webhook URL**.
4. In Testomato, paste it into **Discord webhook URL** and click **Save**.

If the webhook is deleted in Discord, Testomato can no longer post. Create a new webhook and save its URL.

### Google Chat

Google Chat alerts are posted to a space through its webhook. Incoming webhooks are available only in Google Workspace, not in personal Google accounts.

1. Open the Google Chat space that should get the alerts.
2. Open the space menu and go to **Apps & integrations** → **Webhooks** → **Add webhook**.
3. Name it, for example Testomato, and save it.
4. Copy the webhook URL.
5. In Testomato, paste it into **Google Chat webhook URL** and click **Save**.

:::note
If **Add webhook** is greyed out, your Workspace admin has not allowed incoming webhooks, or you can't manage the space. Ask the admin to allow them, or ask a space manager to add the webhook for you.
:::

### Telegram

Telegram alerts come from the Testomato bot, so there is nothing to copy or paste.

- **For yourself:** click **Open Telegram** and press **Start** in the chat with the bot.
- **For a team:** click **Add to a group**, pick the Telegram group and add the bot to it.

Testomato waits until you press **Start** and then shows the chat it sends alerts to. The link is valid for 10 minutes; if it expires, click **Get a new link**.

If you remove the bot from the group or block it, Testomato disconnects Telegram on its own. Connect it again to resume alerts.

### Webhook

The webhook channel sends every incident as an HTTP `POST` with a JSON body to a URL you choose, so you can feed alerts into your own tools. Enter the URL in **Your webhook URL** and click **Save**.

Each request carries a plain-text summary in `text` and one entry per incident in `attachments`:

```json
{
  "text": "…",
  "attachments": [
    {
      "type": "new",
      "testName": "…",
      "message": "…",
      "link": "https://testomato.com/…",
      "details": "…",
      "severity": "…",
      "fields": [{"title": "URL", "value": "https://example.com/", "short": false}]
    }
  ]
}
```

`type` is `new` for an incident that has just started and `resolved` for one that has ended. Resolved incidents add **Started at** and **Resolved at** to `fields`.

### PagerDuty

1. In PagerDuty, click **Add new service**.
2. Name it, for example Testomato, and choose **Generic API system**.
3. Copy the **Service API Key**.
4. In Testomato, paste it into **PagerDuty service API key** and click **Save**.

### Pushover

Open the Pushover app, copy **Your User Key**, paste it into **Pushover user key** and click **Save**.

### Pushbullet

Open your Pushbullet account settings and create an access token if you don't have one. Paste it into **Pushbullet access token** and click **Save**.

### SMS (Twilio)

Text messages are sent through your own [Twilio](https://www.twilio.com) account, so you need one first. You get a message when an incident starts and when it is resolved.

1. Copy the **Account SID** from your Twilio Console. It starts with `AC`.
2. Create an API key under **API keys & tokens** and enter its **API key SID** (starts with `SK`) and secret. You can leave the API key SID empty and enter your **Auth Token** instead.
3. Enter the **Sender**: a Twilio phone number, such as `+14155550100`, or a Messaging Service SID starting with `MG`.
4. Add up to five **Recipient numbers** in international format, such as `+14155550100`.
5. Click **Save**, then **Send test SMS** to check it.

:::caution
Twilio bills every message to your account. A Twilio trial account sends only to verified numbers and adds a trial notice to each message.
:::

## Choose channels for each project

Connecting a channel doesn't send any alerts by itself. In **Project delivery**, expand a project and switch on the channels it should use. Only connected channels are listed.

- **Mute all** stops every alert for the project; **Unmute all** turns them back on.
- **Apply to all projects** copies the project's channels and sensitivity to all your other projects.
- **Alert sensitivity** decides what you are notified about:
  - **Errors only** (the default) — hard failures such as downtime, error responses or missing content.
  - **Errors + warnings** — also timeouts and slow responses, before they become hard errors.

You can change the same settings for a single project under **Notifications** in its project settings.

## Alert delay

Short outages that fix themselves don't need to wake anyone. **Alert delay** sets how long an incident must last before Testomato notifies you: any length, 5, 10 or 20 minutes. It applies to every channel and every project.

See [Notifications and alerts](/checks/notifications/) for when Testomato sends a notification in the first place.
