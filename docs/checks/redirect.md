---
id: redirect
title: Check Redirect Location
sidebar_label: Redirect check
---

### Check Redirect Location

Every page on the Internet has an address called a URL - which stands for `Uniform Resource Locator`.
Sometimes, content moves from one URL to another URL. That’s when you need a redirect.
A redirect automatically makes a browser go from one URL to another URL.

Testomato allows you to check redirect location and response codes.

### Types of Redirects

* 301, "Moved Permanently"—recommended for SEO
* 302, "Found" or "Moved Temporarily"
* Meta Refresh 

The HyperText Transfer Protocol (HTTP) **301 Moved Permanently** redirect status response code
indicates that the resource requested has been definitively moved to the URL given by the Location headers.
The 301 redirect is the best method for implementing redirects on a website. 
Get more info [about 301 redirects](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301).

The **302 Found redirect** status response code indicates that the resource requested 
has been temporarily moved to the URL given by the Location header. 
Get more info [about 302 redirects](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302).


**Meta refreshes** are a type of redirect executed on the page level rather
than the server level. They are usually slower, and not a recommended SEO technique.   

```html
<http-equiv="refresh" content="0; url=https://example.com/">
```

:::info
Testomato can't detect Meta refreshes redirects.
:::


### Create new Page check

First you have to create a new **Page check**:

![Add new Page check](/img/checks/redirect-add-page-check.png)

Enter the URL you want to check:

![Enter URL for check](/img/checks/redirect-enter-url.png)

:::important
This form always follow redirects. Do not worry, you can change that URL later. 
:::  

### Check Redirect response code

Click on the pencil to edit **Page check**:

![Edit new Page check](/img/checks/redirect-edit-new-check.png)

Edit new **Page check**:

![Edit new Page check](/img/checks/redirect-check-edit.png)

1. Change check URL if needed
2. Add expected response code
3. Turn off **Follow redirects** 
4. Save changes

### Check Redirect location URL

You can also check exact Redirect location URL. Click on the pencil to edit **Page check**:

![Edit new Page check](/img/checks/redirect-edit-new-check.png)

Add **Redirect Location** check:

![Redirect location Check](/img/checks/redirect-redirect-location.png)