---
title: Project Create
---

### API Endpoint

```text
POST /api/project/create?period=[period]
```

### Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- |
| `period`  | Check period interval `5 minutes`, `30 minutes`, `1 hour`, `8 hours` ,`1 day` or `7 days` | optional |

Payload data:

| Parameter | Description |
| --------- | ----------- |
| `urls` | array of URLs that will be add as new Testomato projects |  
| `blank` | boolean parameter specifies whether the preset check will be added automatically or not |

### Authenticate user

First you have to retrieve `SESSION_ID` from us:

```shell
curl -X POST -F "login=email@example.com" -F "password=123456" https://www.testomato.com/api/auth/login
```

You can use [standard CURL from PHP](http://php.net/manual/en/book.curl.php) to retrieve `SESSION_ID`. We are expect here **password** and **user login** (email) as POST field:

```php
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://www.testomato.com/api/auth/login');
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, ['login' => 'email@example.com', 'password' => '123456']);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$session_id = json_decode(curl_exec($curl))->session->id;
```

You are getting from us valid JSON response with following content:

```json
{
	"id": "123",
	"isLoggedIn": true,
	"session": {
		"id": "4as56d4asf46456f654"
	}
}
```

Now you have [SESSION_ID](http://php.net/manual/en/function.session-id.php). The `SESSION_ID` need to be used in `/api/project/create` POST request

```php
$url = sprintf("https://www.testomato.com/api/project/create?%s", http_build_query(['period' => $period]));

$data = json_encode(['urls' => ['https://example.com'], 'blank' => $blank]);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_COOKIE, sprintf("PHPSESSID=%s; path=/", $session_id));
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
```

### Example

```php
<?php

/**
 * Testomato API example
 *
 * @author Roman Ožana <roman@ozana.cz>
 */
class TestomatoApi {

	const URL = 'https://www.testomato.com/api/';
	const AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36';

	static string $session_id = '';

	/**
	 * @throws Exception
	 */
	public static function login(string $login, string $password): stdClass {
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, sprintf("%s/auth/login", self::URL));
		curl_setopt($curl, CURLOPT_POST, true);
		curl_setopt($curl, CURLOPT_POSTFIELDS, ['login' => $login, 'password' => $password]);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

		$response = json_decode(curl_exec($curl));

		if (
			isset($response->session->id) && $response->session->id &&
			isset($response->isLoggedIn) && $response->isLoggedIn
		) {
			static::$session_id = $response->session->id;
			return $response;
		} else {
			throw new Exception('Login was not successful!' . isset($response->messsage) ? ' ' . $response->message : null);
		}
	}

	public static function addProjects(array $urls, $blank = false, $period = '5 minutes'): Generator {
		$url = sprintf("%s/project/create?%s", self::URL, http_build_query(['period' => $period]));

		$data = json_encode(['urls' => $urls, 'blank' => $blank]);

		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_POST, true);
		curl_setopt($curl, CURLOPT_USERAGENT, self::AGENT);
		curl_setopt($curl, CURLOPT_COOKIE, sprintf("PHPSESSID=%s; path=/", static::$session_id));
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
		curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

		$response = str_replace('}{', "}\n{", curl_exec($curl));

		foreach (explode("\n", $response) as $part) {
			yield json_decode($part);
		}
	}

	/**
	 * @throws Exception
	 */
	public static function logout(): stdClass {
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, sprintf("%s/auth/logout", self::URL));
		curl_setopt($curl, CURLOPT_POST, true);
		curl_setopt($curl, CURLOPT_USERAGENT, self::AGENT);
		curl_setopt($curl, CURLOPT_COOKIE, sprintf("PHPSESSID=%s; path=/", static::$session_id));
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

		$response = json_decode(curl_exec($curl));

		if (isset($response->message)) {
			return $response;
		} else {
			throw new \Exception('Invalid response format');
		}

	}
}
```

Usage:

```php
<?php

require_once __DIR__ . '/TestomatoApi.php';

$login = TestomatoApi::login('exampl@email.com', '123456'); // login

foreach (TestomatoApi::addProjects(['https://example.com', 'https://example2.com']) as $response) {
	if (isset($response->id)) {
		printf("https://www.testomato.com/project/%s/#/tests\n", $response->id);
	}
}

echo TestomatoApi::logout()->message; // logout
```