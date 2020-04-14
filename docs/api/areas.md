---
id: areas
title: Areas
---

## Project Areas info

### API Endpoint

```txt title="API endpoint"
GET /api/areas/[id]?apikey=[key]
```

### Request params

| Parameter | Description |  Mandatory | 
| --------- | ------------ | ---------- | 
| `id`      | Project ID | required |
| `apikey`  | An API key unique to each project | required |

### Call example

```shell  title="Example CURL call"
curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/areas?apikey=4PJAOwTK
```

### Response

```json title="Example JSON response"
[
	{
		"projectId": "5e95ddf7a39e5a44428b4581",
		"name": "Public",
		"public": true,
		"rules": [],
		"httpAuth": null,
		"period": true,
		"result": null,
		"options": {
			"w": null,
			"2": false
		},
		"id": "5e95de00a39e5a44428b4583",
		"nextRun": 126,
		"periodInt": 300
	}
]
```
