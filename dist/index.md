import { CardGrid, LinkCard } from '@astrojs/starlight/components';

Testomato watches your website from the outside and tells you when something breaks — a page stops
loading, a form stops submitting, a certificate is about to expire. These pages cover how to set that
up and what the results mean.

Not sure where to start? [How Does Testomato Work?](/introduction/) is the short version.

## Getting started

<CardGrid>
	<LinkCard title="How Does Testomato Work?" href="/introduction/" description="What Testomato checks, and what it deliberately does not." />
	<LinkCard title="Dashboard" href="/dashboard/" description="Reading the project cards, the check colours and the two layouts." />
	<LinkCard title="Account" href="/account/" description="Resetting your password, and deleting your account." />
	<LinkCard title="WordPress plugin" href="/wordpress/" description="Connect a WordPress or WooCommerce site in about thirty seconds." />
</CardGrid>

## Checks

<CardGrid>
	<LinkCard title="String checks" href="/checks/string-checks/" description="Look for text in the page source or its rendered text." />
	<LinkCard title="Semantic checks" href="/checks/semantic/" description="Page title, meta description, Open Graph and Twitter Cards." />
	<LinkCard title="Redirect check" href="/checks/redirect/" description="Verify the status code and the location a URL redirects to." />
	<LinkCard title="XPath checks" href="/checks/xpath/" description="Target elements by structure instead of by wording." />
	<LinkCard title="JSON-LD checks" href="/checks/json-ld/" description="Monitor structured data values embedded in a page." />
	<LinkCard title="Content Security Policy" href="/checks/content-security-policy/" description="Watch the CSP header and its individual directives." />
	<LinkCard title="Common server errors" href="/checks/common-server-errors/" description="The error messages Testomato recognises on its own." />
	<LinkCard title="Notifications and alerts" href="/checks/notifications/" description="When alerts are sent, and which channels are supported." />
</CardGrid>

## Monitoring

<CardGrid>
	<LinkCard title="Uptime monitoring" href="/monitoring/uptime/" description="How reachability is measured, and why a site can look down when it is not." />
	<LinkCard title="HTTP status codes" href="/monitoring/http/" description="What each code means for a check, and the soft 404 problem." />
</CardGrid>

## TestomatoBot

<CardGrid>
	<LinkCard title="About TestomatoBot" href="/bot/about/" description="The crawler, its user agent and its IP addresses." />
	<LinkCard title="DDoS protection" href="/bot/ddos/" description="Why a firewall may block the bot, and how to allow it." />
</CardGrid>

## Billing

<CardGrid>
	<LinkCard title="Payment methods" href="/payment/payment/" description="Cards, PayPal and manual payments; annual versus monthly." />
	<LinkCard title="Invoices" href="/payment/invoices/" description="Where to find invoices and who receives them." />
</CardGrid>

## Reference

<CardGrid>
	<LinkCard title="API reference" href="/api/" description="The REST API: authentication, projects, checks and results." />
	<LinkCard title="Glossary" href="/glossary/" description="The terms used across the UI and the API, and where they differ." />
	<LinkCard title="Contact support" href="/support/" description="Reach the team, or tell us what to build next." />
</CardGrid>