---
title: WordPress plugin
description: Install and use Testomato Monitoring, the official WordPress and WooCommerce plugin for external uptime, content and SSL monitoring.
sidebar:
  label: WordPress plugin
---
**Testomato Monitoring** is the official WordPress plugin. It connects your WordPress or WooCommerce site to Testomato in about thirty seconds — you enter an email address, the plugin creates your account and a project for the site, and a widget on your WordPress dashboard shows the current status.

The checks themselves never run on your server. Testomato tests your site from its own machines in [nine locations](https://testomato.com/monitoring-locations), which is why the alert still arrives when WordPress, PHP or the whole host is down.

:::tip

The plugin only runs in `wp-admin`. It adds nothing to your front-end pages — no scripts, no styles, no queries.

:::

## Requirements

| Requirement | Notes |
| --- | --- |
| WordPress | 5.8 or newer (tested up to 6.9) |
| PHP | 7.4 or newer |
| WooCommerce | Optional — detected automatically when active |
| Testomato account | Created by the plugin; a 14-day free trial, no credit card |

## Installation

1. In your WordPress admin go to **Plugins → Add New** and search for **Testomato Monitoring**. Alternatively, download the ZIP from [wordpress.org](https://wordpress.org/plugins/testomato-monitor/) and upload it under **Plugins → Add New → Upload Plugin**.
2. Click **Install Now**, then **Activate**.
3. Go to **Settings → Testomato Monitoring**.

## Connecting your site

![The Testomato Monitoring connect form in WordPress settings](/img/wordpress/connect.png)

1. The **Your email** field is pre-filled with your WordPress administration email. Change it if you want the Testomato account to live under a different address.
2. Click **Connect**.
3. If the address is not signed in to Testomato yet, a **One-time code** field appears and we email you a code. Paste it in and click **Connect** again.
4. The page reloads with the connected view.

That is the whole setup. There is no API key to copy and no password to store — sign-in to Testomato is by one-time code.

### What happens when you connect

- A Testomato account is created for the email address you entered (or the existing one is used).
- A project is created for this site's home URL.
- Testomato reads your homepage and suggests the key pages worth monitoring; those URLs are added to the project as tests.
- When WooCommerce is active, the **cart** and **checkout** URLs are added as well.
- Uptime monitoring and SSL certificate monitoring are enabled for the project.

### Already have a Testomato account?

The connect flow always creates a **new** Testomato account, so it cannot attach the site to an account that already exists. Entering an address that is already registered stops the flow with an "already taken" error.

If you are already a Testomato customer, you have two options:

- add the site as a new project directly in your Testomato dashboard — the plugin is not needed for monitoring, only for the WordPress dashboard widget;
- or connect the plugin with a different email address, which gives this site its own account and trial.

## The connected settings page

![The Testomato Monitoring settings page after connecting](/img/wordpress/connected.png)

Once the site is connected, **Settings → Testomato Monitoring** shows:

- **Open Testomato dashboard** — a one-click link that signs you in to your Testomato project without a password.
- **What we monitor** — a summary of what the project checks.
- **Disconnect** — see [Disconnecting](#disconnecting-the-site) below.

## The dashboard widget

![The Testomato Monitor widget on the WordPress dashboard](/img/wordpress/widget.png)

The plugin adds a **Testomato Monitor** widget to the main WordPress dashboard. It shows:

- **Overall status** — green when every check passes, yellow for a warning such as a timeout, red when something failed, together with the number of healthy checks.
- **7-day uptime** — the uptime percentage plus one coloured bar per day, so an incident from earlier in the week is still visible.
- **24-hour response time** — an interactive trend line with the average response time over the last day.
- **Trial countdown** — how many days of the free trial are left, and a link to the plans once it ends.
- **Refresh** — re-fetches the status immediately instead of waiting for the cached value to expire.

Status values are cached for a few minutes so that opening the dashboard never waits on a network round trip. The charts are drawn with a copy of [Chart.js](https://www.chartjs.org/) bundled inside the plugin — no CDN is contacted from your admin.

If you don't want the widget, use the **Screen Options** menu at the top of the WordPress dashboard and untick **Testomato Monitor**.

## Changing what is monitored

The plugin bootstraps the project; everything after that is managed in Testomato. Click **Open Testomato dashboard** and you can:

- add or remove monitored URLs, including pages behind a login;
- define the text, HTML, headers or [structured data](/checks/json-ld) that must be present on a page — see [Checks](/checks/string-checks);
- set response-time thresholds and the check interval;
- choose where alerts go — email, Slack, webhooks and the other [notification channels](/checks/notifications);
- invite colleagues to the project.

Changes made in the dashboard are not written back to WordPress. The plugin reads status only.

## Disconnecting the site

Go to **Settings → Testomato Monitoring** and click **Disconnect**.

This removes the stored tokens from this WordPress installation. **Your Testomato project is not deleted** — it stays in your account with its full history and keeps monitoring the site. To stop monitoring entirely, delete the project in the Testomato dashboard as well.

Deleting the plugin removes every option it created (all `testomato_monitor_*` options and the cached status values). Deactivating alone leaves them in place, so you can reactivate without connecting again.

## What the plugin sends to Testomato

The plugin contacts the Testomato API at `https://testomato.com/api` and sends:

| When | What |
| --- | --- |
| You click **Connect** | The email address you entered, so we can email you a one-time sign-in code. |
| You submit the code | The code, the email address, the WordPress administrator's first and last name (from your WordPress profile, falling back to the site name), and the site's home URL. |
| While setting up | Your site's public home URL, so the test suggestion service can propose pages to monitor. |
| While connected | The project ID, to read the current status shown in the dashboard widget. |

**No content of your posts, users, comments or media is ever sent.** Testomato then crawls the public pages of your site from its own servers, the same way a search-engine crawler does — see [TestomatoBot](/bot/about).

The tokens returned by the API are stored in the WordPress options table under the `testomato_monitor_` prefix.

Service terms: [testomato.com/terms-of-service](https://testomato.com/terms-of-service) · Privacy policy: [testomato.com/privacy-policy](https://testomato.com/privacy-policy)

## Troubleshooting

### Connect fails because the site is not reachable

Testomato validates the URL by fetching it before creating the project, so the site must be reachable from the public internet. A site on `localhost`, on a private IP range, behind basic auth or behind a firewall that blocks unknown crawlers cannot be connected. Allow [TestomatoBot](/bot/about) through and try again.

### Connect fails with an "already taken" error

The email address is already registered with Testomato, and the connect flow can only create a new account. Use an address that is not registered yet, or add the site as a project from the account that owns that address — see [Already have a Testomato account?](#already-have-a-testomato-account) above.

### The one-time code never arrives

Check the spam folder first. The code is sent to the exact address in the **Your email** field, which may differ from the address you expected if your WordPress administration email was changed. Codes are short-lived; click **Connect** again to get a new one.

### The widget shows "no data yet"

The first check results need a few minutes to appear after connecting. If the widget is still empty after ten minutes, open the Testomato dashboard and confirm the project has tests and that uptime monitoring is enabled — see [Uptime monitoring](/monitoring/uptime).

### The widget reports a problem but the site looks fine

Testomato tests from outside your network, so it sees what an external visitor sees — including latency, geo-blocking and rate limiting that never affect you locally. [Why does Testomato say my site is down when it's not?](/monitoring/uptime) covers the usual causes.

### The status is stale

Status is cached for a few minutes. Use the refresh button in the widget to fetch it immediately.

## Getting help

Write to [support@testomato.com](mailto:support@testomato.com) with your site URL and, if the problem is in the connect flow, the exact error message from the settings page. See also [Support](/support).
