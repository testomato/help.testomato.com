---
id: project-status
title: Project Status
---

## API Endpoint

```text
GET /api/project/[id]/status?apikey=[key]
```


## Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- |
| `id`      | Your project ID | required |
| `apikey`  | An API key unique to each project | required |


## Call example

```bash title="Example CURL call"
curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/status?apikey=4PJAOwTK"
```

## Response

```json title="Example JSON response"
{
	"project": {
		"lastChange": 1586880000,
		"status": "ok",
		"msg": "Server returned HTTP status 200",
		"reported": "ok",
		"lastRun": 1586885018,
		"shortMsg": 200,
		"id": "5e95de005d41f488408b4567"
	},
	"total": 12,
	"failed": 0,
	"now": 1586885028,
	"tests": [
		{
			"id": "5e95de00a39e5a44428b4585",
			"enabled": true,
			"areaId": "5e95de00a39e5a44428b4583",
			"name": "Homepage",
			"url": "https:\/\/www.testomato.com\/",
			"notice": null,
			"type": "homepage",
			"run": "completed",
			"flags": [],
			"status": {
				"status": "ok",
				"failures": [],
				"rules": [
					{
						"type": "status",
						"op": "eq",
						"val": "200"
					}
				],
				"response": {
					"status": 200,
					"httpStatus": 200,
					"baseUrl": "https:\/\/www.testomato.com\/",
					"contentType": "text\/html",
					"httpHeader": ":status: 200\r\nserver: nginx\r\n...",
					"processTime": 0.043,
					"size": false,
					"timing": [
						{ "metric": "DNS Lookup", "value": 6 },
						{ "metric": "Initial connection", "value": 63 },
						{ "metric": "SSL", "value": 8 },
						{ "metric": "Waiting", "value": 29 },
						{ "metric": "Content download", "value": 4 },
						{ "metric": "Total", "value": 43 }
					],
					"redirects": []
				},
				"request": {
					"url": "https:\/\/www.testomato.com\/",
					"method": "GET"
				},
				"lastChange": 1586880004,
				"lastRun": 1586884833
			},
			"templateId": false,
			"templateVars": null,
			"rules": [
				{ "type": "status", "op": "eq", "val": "200" }
			],
			"options": {
				"g": false,
				"l": false,
				"w": null,
				"6": false,
				"2": false
			}
		},
		// ...     
	]
   "total": 12
}
```
