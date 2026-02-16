---
id: common-server-errors
title: Common Server Errors
---

[Testomato](https://www.testomato.com) is sensitive to **Common Server Error Messages**. They are a marker
for us to indicate that something is broken on your website.

#### PHP Errors

Testomato is sensitive to **all types of PHP error messages**:

* `Fatal error`
* `Catchable fatal error`
* `Warning`
* `Parse error`
* `Notice`
* `Strict Standards`
* `Deprecated`
* `Unknown error`

https://www.php.net/manual/en/book.errorfunc.php

#### Database Errors

* [All MySQL error messages](https://dev.mysql.com/doc/mysql-errors/8.4/en/server-error-reference.html)

#### Database connection errors

* `The server encountered an internal error`
* `Internal server error`
* `Can't connect to MySQL server`
* `Your browser sent a request that this server could not understand or process`
* Wordpress `Error establishing a database connection`

#### PHP Debuggers

* [XDebug](https://xdebug.org)
* [Tracy Debuger](https://github.com/nette/tracy)
* [Symfony error pages](https://symfony.com)
* [Phusion Passenger errors](https://www.phusionpassenger.com/)
* Blank page - empty page without any content

:::note

We have a page that shows randomly generated examples of some of the
most common error messages: https://www.testomato.com/example/error

:::


### Disable Common Server Error Check

You can disable this functionality in Project Settings:

![](/img/common-server-error-messages.png)