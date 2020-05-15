---
id: http
title: Hypertext Transfer Protocol
---

Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, 
such as HTML. It was designed for communication between web browsers and web servers, but it can also be 
used for other purposes. HTTP follows a classical client-server model, with a client opening a connection
to make a request, then waiting until it receives a response. HTTP is a stateless protocol, 
meaning that the server does not keep any data (state) between two requests. 

When accessing a web server or application, every [HTTP request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) that is received by a 
server is responded to with an [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
Status codes come in the format of 3 digit numbers. The first digit marks the class of the status code:

* `100–199` Informational responses
* `200–299` Successful responses
* `300–399` Redirects
* `400–499` Client-side errors
* and `500–599` Server errors - indicate problems on the server side 

### [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)

The request has succeeded. All the requested data was located on the web
server and transferred to the client. Internet users do not usually see this code.
The meaning of the success depends on the HTTP method, but this code always 
announces a successful operation. 

### [301 Moved Permanently](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)

The `301` code means that the data requested from the client cannot be found under the
given address since it has been moved permanently. Since the current location of the 
requested content is delivered in the status report, the browser can request the 
new address straightaway. The user is then forwarded to the new address and the old
address is no longer valid. The `301` code also goes unnoticed because the URL
in the address bar simply changes.
 
### [302 Moved Temporarily](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
  
Unlike the `301` code, which is a permanent redirection, the 302 informs the user that the requested data 
has temporarily been moved. With a `302` code the remaining information is specified so that an automatic
redirection can take place. The old address remains valid.

### [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)

The HTTP status code `403` tells the client that the requested data is access-protected
and that the request cannot be performed due to the client not having authority.
An automatically generated HTML page will let the user know about the access problem.

### [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)

The HTTP `404` **Not Found** client error response code indicates that the server
can't find the requested resource. Links which lead to a `404` page are often called
**broken** or **dead links**, and can be subject to link rot.

### [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)

The `500` status code, or *Internal Server Error*, means that server cannot process 
the request for an unknown reason. Sometimes this code will appear when more 
specific `5xx` errors are more appropriate. Internet users can presume that an
administrator is working on the problem and that the server will be available later on.


## Why Testomato checking `/thisShouldNotExist` page?

A `404` page is an page that appears when you click on a link that is broken 
and is therefore no longer (or in fact, never was) available.

Testomato is **generate this check automatically** for new [Project](/project) and
watch that your server response with correct `404  Not Found` response code.
Because some servers might response with `200 OK` response codes even
for non existing pages and that's harm SEO.

Content and links on `404` pages are so important because they give users a way out 
of the error page. Instead of closing the window or navigating away from your site,
the user is able to find helpful and potentially relevant resources on another page.

Check out our 404 page https://www.testomato.com/404

