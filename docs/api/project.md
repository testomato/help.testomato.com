---
id: project
title: Project
--- 

## API Endpoint

```text title="API endpoint"
GET /api/project/[id]?apikey=[key]
```

## Request params

| Parameter | Description |  Mandatory | 
| --------- | ------------ | ---------- | 
| `id`      | Your project ID | required |
| `apikey`  | An API key unique to each project | required |

## Call example

```shell  title="Example CURL call"
curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581?apikey=4PJAOwTK
```

## Response

```json title="Example JSON response"
{
    "apiKey": "4PJAOwTK",
    "checkDefaultErrors": true,
    "created": "2020-04-14T15:59:51+00:00",
    "delay": 50,
    "id": "5e95ddf7a39e5a44428b4581",
    "location": "eu",
    "name": "1icaoc-testomato.com",
    "payerId": "7",
    "period": "5 minutes",
    "status": null,
    "timeout": 7,
    "title": "testomato.com",
    "uptimeEnabled": 15,
    "uptimeUrl": "http://testomato.com/",
    "url": "https://www.testomato.com/",
    "userAgent": null,
    "userIds": [
        "7"
    ]
}
```