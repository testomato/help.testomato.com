---
title: CSRF protection
---

## Testomato & CSRF protecion

Can Testomato hadle forms with CSRF protecion. The simply answer is NO.
If your application is protected from cross-site request forgery attacks, it's also
preventing Testomato from sending requests with [minicralwer](https://github.com/testomato/minicrawler), but we can try to 
bridge the simplest type of protection by doubling the request.

* **During the first request**, Testomato ignores HTTP response code - 
  usually there’s some sort of unauthorized request response,
  but we update all hidden form params values and save the session.
* **The second request** is submitted within the same session in the hopes that one of the hidden params has a valid CSRF token

## What's CSRF protecion

[Cross-site request forgeries](https://en.wikipedia.org/wiki/Cross-site_request_forgery) are a type of malicious
exploit where unauthorized commands are performed on behalf of an authenticated user.

In case you're not familiar with cross-site request forgeries, let's discuss an example of how this
vulnerability can be exploited. Imagine your application has a `/user/email` route that accepts a 
`POST` request to change the authenticated user's email address. Most likely, this route expects
an email input field to contain the email address the user would like to begin using.

Without CSRF protection, a malicious website could create an HTML form that points to your
application's `/user/email` route and submits the malicious user's own email address

```html
<form action="https://your-application.com/user/email" method="POST">
  <input type="email" value="malicious-email@example.com">
</form>

<script>
  document.forms[0].submit();
</script>
```

### Preventing CSRF Requests

You can generate CSRF "token" for each active user session managed by the application.
This token is used to verify that the authenticated user is the person actually making 
the requests to the application. Since this token is stored in the user's session
and changes each time the session is regenerated, a malicious application is unable to access it.

```php
session_start();
if (empty($_SESSION['token'])) {
    $_SESSION['token'] = bin2hex(random_bytes(32));
}
$token = $_SESSION['token'];
?>
<form action="https://your-application.com/user/email" method="POST">
  <input type="email" value="malicious-email@example.com">
  <input type="hidden" name="token" value="<?php echo $token ?>" />
</form>
```

Anytime you define an HTML form in your application, 
you should include a hidden CSRF `_token` field in the 
form so that the CSRF protection can validate the request.

```php
if (!empty($_POST['token'])) {
    if (hash_equals($_SESSION['token'], $_POST['token'])) {
         // Proceed to process the form data
    } else {
         // Log this as a warning and keep an eye on these attempts
    }
}
```

### Per-Form Tokens

You can go even further and generate Per-Form Tokens for every single 
form on your application:

```php
$second_token = hash_hmac('sha256', '/my_form.php', $_SESSION['second_token']);
?>
<input type="hidden" name="token" value="<?php echo $second_token ?>" />
```

```php
$calc = hash_hmac('sha256', '/my_form.php', $_SESSION['second_token']);
if (hash_equals($calc, $_POST['token'])) {
    // Continue...
}
```

You can also change the name of the token variable or invalidate a token
periodically in time. If you have a security requirement that each CSRF 
token is allowed to be usable exactly once, the simplest strategy
is to regenerate it after each successful validation. 
However, doing so will invalidate every previous token which doesn't
mix well with people who browse multiple tabs at once.

## Resources

* [Cross-site request forgeries](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
* [CSRF Protection with Laravel](https://laravel.com/docs/8.x/csrf#csrf-explanation)
* [CSRF Protection with Symfony](https://symfony.com/doc/current/security/csrf.html)
* [CSRF Protection with Express.js](http://expressjs.com/en/resources/middleware/csurf.html)
