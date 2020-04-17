---
id: project-response-times
title: GET Project Response Times
sidebar_label: "Project > Response Times"
---
# Project Response Times

## API Endpoint

```txt title="API endpoint"
GET /api/project/[id]/responseTimes?start=[date]&time=[date]apikey=[key]
```

## Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- |
| `id`      | Your project ID | required |
| `apikey`  | An API key unique to each project | required |
| `start`  | Date in ISO 8601 | required |
| `end`  | Date in ISO 8601 | required |

## Call example

```bash title="Example CURL call"
curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/responseTimes?apikey=4PJAOwTK&start=2020-04-01T00:00:00.000+02:00&end=2020-04-30T23:59:59.999+02:00"
```

## Response

```json title="Example JSON response"
[
	[
		"Time",
		"DNS Lookup",
		"Initial connection",
		"SSL",
		"Request",
		"Waiting",
		"Content download",
		"Total"
	],
	[ 1586880000, 0.1, 1, 5.8, 0, 31.1, 3.1, 42.1],
	[ 1586885000, 0.1, 1, 5.9, 0, 32, 3, 42.3 ],
	[ 1586890000, 0, 0.9, 5.8, 0, 33.6, 3.1, 44.3]
]
```