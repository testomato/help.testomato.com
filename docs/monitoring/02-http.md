---
title: HTTP Status Codes
---

Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests.

When accessing a web server or application, every [HTTP request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) that is received by a server is responded to with an [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). Status codes are three-digit numbers where the first digit indicates the class of response:

* `100–199` Informational responses
* `200–299` Successful responses
* `300–399` Redirects
* `400–499` Client-side errors
* `500–599` Server errors

## [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)

The request has succeeded and all requested data was located on the server and transferred to the client. This code is rarely visible to end users. The meaning of the success depends on the HTTP method used, but this code always indicates a successful operation.

## [301 Moved Permanently](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)

The requested resource has been permanently moved to a new URL, which is included in the response. The browser automatically redirects the user to the new address, and the old address is no longer valid. Like `200`, this code typically goes unnoticed by users as the redirect happens automatically.

## [302 Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)

Officially called `302 Found`, this code is commonly referred to as a temporary redirect. The requested resource has been temporarily moved to a different URL. Unlike a `301`, the original address remains valid and the redirect is not permanent. The browser follows the redirect automatically.

## [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)

The server understood the request but refuses to authorize it. The client does not have the necessary permissions to access the requested resource.

## [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)

The server cannot find the requested resource. Links that lead to a `404` page are often called **broken** or **dead links**. See [how Testomato uses `404` checks](#why-does-testomato-check-thisshouldnotexist) below.

## [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)

The server encountered an unexpected condition that prevented it from fulfilling the request. This is a generic catch-all error; more specific `5xx` codes may be more appropriate in some cases. Users can generally assume the issue is being investigated and the server will be available again later.

## Why does Testomato check `/thisShouldNotExist`?

Testomato **automatically generates a `404` check** for each new project to verify that your server correctly returns a `404 Not Found` response for non-existent pages. This matters because some servers return a `200 OK` response even for pages that don't exist — a pattern sometimes called a "soft 404" — which can harm your site's SEO.

A well-configured `404` page also helps retain users who follow broken links, by offering helpful navigation options rather than a dead end. You can see an example of a good `404` page at [testomato.com/404](https://www.testomato.com/404).

## Is Testomato a broken link checker?

No. Testomato checks the HTTP status of URLs you have configured, but it does not crawl your website or examine HTML to proactively search for broken links.

:::tip
If you need a broken link checker, try the [Broken Link Checker Chrome Extension](https://chrome.google.com/webstore/detail/broken-link-checker/bjcoimpfplliplknnmgbffboiihamekf/related).
:::