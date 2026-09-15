---
title: Firewall and allowlisting
description: The addresses to allow through your firewall, and ready-made rules for nginx, Apache, ufw, fail2ban, ModSecurity, AWS WAF and Wordfence.
sidebar:
  label: Firewall and allowlisting
  order: 2
---
Testomato checks your site from its own servers, so every check arrives as external traffic from a fixed set of IP addresses. A firewall, a web application firewall or a rate limiter that does not know those addresses can block them, and a blocked check is reported as a failure even though your site is perfectly healthy.

This page has the addresses to allow and the rules to copy. If you are here because something is already being blocked, [DDoS protection](/bot/ddos/) explains why monitoring traffic trips these protections in the first place.

## What to allow

There are two things Testomato sends requests from, and both may need to get through:

| Source | What it does | When it matters |
| --- | --- | --- |
| Monitoring nodes | Run your checks — download pages, submit forms, fetch assets | Every check, all the time |
| Testomato web servers | Fetch a URL once to validate it | When you add a project or a check in the app |

Allowlisting only the monitoring nodes is enough for checks to run, but adding a new project can still fail with "site unreachable" because that first validating request comes from the web servers. Allow both.

## IP addresses

Testomato publishes the current list in two plain-text files, one address per line, which is what you want if you generate firewall configuration from a script:

| File | Contents |
| --- | --- |
| [`testomato.com/bot/ipv4.txt`](https://testomato.com/bot/ipv4.txt) | IPv4 only |
| [`testomato.com/bot/ipv4-ipv6.txt`](https://testomato.com/bot/ipv4-ipv6.txt) | IPv4 and IPv6 |

The [bot page](https://testomato.com/bot) shows the same addresses in a table, together with the location and hostname of each node.

:::caution
Read the addresses from those files rather than from a copy someone made once — nodes are added and moved. If you maintain the allowlist by hand, re-check it when a location is added to [Testomato's monitoring locations](https://testomato.com/monitoring-locations).

The examples further down this page show two or three addresses to keep them readable. Every one of them needs the full list.
:::

If your firewall takes a generated file, pull the list straight from the source:

```bash
curl -fsS https://testomato.com/bot/ipv4-ipv6.txt \
  | grep -Ev '^\s*(#|$)' \
  | sed 's/^/allow /; s/$/;/' > /etc/nginx/testomato-allow.conf
```

## User agent

Testomatobot identifies itself with a [User-Agent string](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) that contains `Testomatobot`. See [About Testomatobot](/bot/about/) for the exact format.

:::caution
Match on the user agent for logging and for bot-management exceptions, but never as the only condition on a rule that grants access — anyone can send that header. Where a rule decides whether a request gets in, match on the IP address, optionally combined with the user agent.
:::

## Hosting platforms and CDNs

If your site sits behind a platform that filters traffic before it reaches your server, that is where the rule belongs — nothing you configure on the origin will help, because the request never gets there.

| Platform | Symptom |
| --- | --- |
| [Cloudflare](/bot/cloudflare/) | **Access denied (Error 1020)**, a challenge page, or a `429` |
| [Vercel](/bot/vercel/) | The **Vercel Security Checkpoint** page |

The rest of this page covers the firewalls you run yourself.

## WordPress and Wordfence

Wordfence blocks crawlers it does not recognise, and its rate limiting triggers easily on the frequency Testomato checks at.

1. In WordPress, go to **Wordfence → Firewall → Blocking**, and check **Blocked IPs** for Testomato addresses.
2. Go to **Wordfence → Firewall → All Firewall Options → Allowlisted IP addresses** and add the list. See [Wordfence's allowlisting documentation](https://www.wordfence.com/help/firewall/allowlisting/).
3. Under **Rate Limiting**, either raise the thresholds or rely on the allowlist, which exempts the addresses from them.

If you use the [Testomato Monitoring plugin](/wordpress/) and connecting the site fails with an unreachable-URL error, this is usually the cause — allow the addresses and connect again.

## nginx

To allow Testomato into an area restricted by IP, list the addresses before the `deny` with [`ngx_http_access_module`](https://nginx.org/en/docs/http/ngx_http_access_module.html):

```nginx
location /staging/ {
    include /etc/nginx/testomato-allow.conf;  # allow 217.31.53.147; …
    allow 203.0.113.10;                       # your office
    deny all;
}
```

If the problem is rate limiting rather than access, exclude the addresses from the limiting zone with a `geo` map, so they are not counted at all:

```nginx
geo $limit {
    default        1;
    217.31.53.147  0;
    217.31.54.206  0;
    # … the rest of the list
}

map $limit $limit_key {
    0 "";
    1 $binary_remote_addr;
}

limit_req_zone $limit_key zone=perip:10m rate=10r/s;
```

An empty key is ignored by `limit_req_zone`, so Testomato's requests never hit the limit.

:::caution
If nginx sits behind Cloudflare, a load balancer or any other proxy, `$remote_addr` is the proxy's address, not Testomato's, and these rules will never match. Configure [`ngx_http_realip_module`](https://nginx.org/en/docs/http/ngx_http_realip_module.html) first. The same applies to every IP-based rule on this page.
:::

## Apache

With Apache 2.4 and [`mod_authz_core`](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html), in the server config or in `.htaccess`:

```apache
<RequireAny>
    Require ip 217.31.53.147
    Require ip 217.31.54.206
    Require ip 2001:1ab0:f001:face:216:3eff:fe3b:3e13
    # … the rest of the list
    Require ip 203.0.113.10
</RequireAny>
```

If the site is behind HTTP basic authentication, combine the two so Testomato gets in without a password while everyone else is still prompted:

```apache
AuthType Basic
AuthName "Staging"
AuthUserFile /etc/apache2/.htpasswd

<RequireAny>
    Require valid-user
    Require ip 217.31.53.147
    # … the rest of the list
</RequireAny>
```

## Server firewalls

### ufw

```bash
while read -r ip; do ufw allow from "$ip" to any port 443 proto tcp; done \
  < <(curl -fsS https://testomato.com/bot/ipv4-ipv6.txt)
```

See the [ufw documentation](https://help.ubuntu.com/community/UFW) for making the rules persistent.

### fail2ban

fail2ban bans an address after a burst of requests, which is exactly what a monitoring check looks like. Add the addresses to `ignoreip` in `/etc/fail2ban/jail.local`, space-separated, then `systemctl reload fail2ban`:

```ini
[DEFAULT]
ignoreip = 127.0.0.1/8 ::1 217.31.53.147 217.31.54.206 167.235.18.92
```

### ModSecurity

With the OWASP Core Rule Set, skip the rules for Testomato's addresses early in phase 1, before the rules you want to bypass:

```apache
SecRule REMOTE_ADDR "@ipMatch 217.31.53.147,217.31.54.206,167.235.18.92" \
    "id:1000,phase:1,nolog,allow,ctl:ruleEngine=Off"
```

### AWS WAF

Create an IP set containing the addresses and reference it from a rule with the **Allow** action, placed above the rules that block the traffic. See the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/).

## Checking that it worked

1. Look for `Testomatobot` in your access log. Requests that reach the log got past the network firewall; what matters then is the status code they received.

   ```bash
   grep Testomatobot /var/log/nginx/access.log | tail -20
   ```

2. Nothing in the log at all means the request was dropped before the web server — a network firewall, a CDN or a WAF in front of it.
3. `403`, `429` or a Cloudflare error page in the log means the request arrived and was rejected by the application or the WAF.
4. In Testomato, run the check manually and look at the response it received. A check that still fails with `403` after an allowlist change is usually matching on the wrong address — see the proxy caution under [nginx](#nginx).

:::tip
If you cannot get Testomatobot through, or you would rather it stopped accessing your server altogether, contact us at [info@testomato.com](mailto:info@testomato.com).
:::
