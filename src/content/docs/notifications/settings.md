---
title: Alert settings
description: Choose which channels alert you for each project, how sensitive the alerts are and how long an incident must last before you hear about it.
sidebar:
  order: 3
---
All notification settings live on one page: open the user menu and click **Notifications**. The page has three parts:

- **Alert delay** — how long an incident must last before you are notified.
- **Channels & integrations** — the services you connect, see [Notification channels](/notifications/channels/).
- **Project delivery** — which channels each project uses and how sensitive its alerts are.

## Choose channels for each project

Connecting a channel doesn't send any alerts by itself. In **Project delivery**, expand a project and switch on the channels it should use. Only connected channels are listed.

- **Mute all** stops every alert for the project; **Unmute all** turns them back on.
- **Apply to all projects** copies the project's channels and sensitivity to all your other projects.

You can change the same settings for a single project under **Notifications** in its project settings.

## Alert sensitivity

**Alert sensitivity** decides what you are notified about, separately for each project:

- **Errors only** (the default) — hard failures such as downtime, error responses or missing content.
- **Errors + warnings** — also timeouts and slow responses, before they become hard errors.

## Alert delay

Short outages that fix themselves don't need to wake anyone. **Alert delay** sets how long an incident must last before Testomato notifies you: any length, 5, 10 or 20 minutes. It applies to every channel and every project.
