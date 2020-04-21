---
id: project-results
title: Project Results
---


## API Endpoint

```text
GET /api/project/[id]/job/[jobid]/results?apikey=[key]
```

## Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- |
| `id`      | Your project ID | required |
| `jobid`   | A unique ID for each project job  | required |
| `apikey`  | An API key unique to each project | required |


## Call example

```bash title="Example CURL call"
curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/job/5e996714a39e5a31428b45b7/results?apikey=4PJAOwTK"
```

## Response

```json title="Example JSON response"
{
	"startedAt": 1587111892,
	"duration": 0.22143507003784,
	"mode": 0,
	"areas": [
		{
			"projectId": {
				"$id": "5e95ddf7a39e5a44428b4581"
			},
			"name": "Public",
			"public": true,
			"rules": [],
			"form": {
				"action": "",
				"originalAction": "",
				"relativeAction": "",
				"checksum": null,
				"enabled": false,
				"method": "",
				"html": "",
				"baseUrl": null,
				"identifier": null,
				"params": null,
				"_id": {
					"$id": "5e9967d4b43021964b8b4598"
				}
			},
			"httpAuth": null,
			"period": true,
			"result": null,
			"options": [],
			"_id": {
				"$id": "5e95de00a39e5a44428b4583"
			}
		}
	],
	"results": [
		{
			"areaId": "5e95de00a39e5a44428b4583",
			"testId": "5e95de00a39e5a44428b4585",
			"testName": "Homepage",
			"status": "ok",
			"failures": [],
			"rules": [
				{
					"type": "status",
					"op": "eq",
					"val": "200"
				}
			]
		},
		{
			"areaId": "5e95de00a39e5a44428b4583",
			"testId": "5e95de00a39e5a44428b458b",
			"testName": "Contact",
			"status": "ok",
			"failures": [],
			"rules": [
				{
					"type": "status",
					"op": "eq",
					"val": "200"
				}
			]
		},
		{
			"areaId": "5e95de00a39e5a44428b4583",
			"testId": "5e95de00a39e5a44428b4599",
			"testName": "robots.txt",
			"status": "ok",
			"failures": [],
			"rules": [
				{
					"type": "status",
					"op": "eq",
					"val": "200"
				}
			]
		},
		{
			"areaId": "5e95de00a39e5a44428b4583",
			"testId": "5e95de00a39e5a44428b459b",
			"testName": "404 Not found",
			"status": "ok",
			"failures": [],
			"rules": [
				{
					"type": "status",
					"op": "eq",
					"val": "404"
				}
			]
		}
	],
	"persist": true,
	"processed": true,
	"jobId": "5e9967d4b43021964b8b4597",
	"total": 4,
	"failed": 0
}
```


### Response Parameters

| Parameter   | Description                                         |
| ----------- | --------------------------------------------------- |
| `jobId`     | A unique project ID                                 |
| `startedAt`  | Time when job started (unix timestamp)  |
| `duration`   | Duration of the job  |
| `total`      | The total number of tests performed  |
| `failed`     | The number of failed tests  |
| `areas`      | List of protected areas IDs  |
| `results`    | Array of test results -- each result has a testId, testName etc.  |
