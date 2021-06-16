---
title: Incident
--- 

## API Endpoint

```text title="API endpoint"
GET /api/incident/byInterval?apikey=[key]
```

## Request params

| Parameter   | Description |  Mandatory | 
| ----------- | ------------ | ---------- | 
| `start`     | Date in ISO 8601 | required |
| `end`       | Date in ISO 8601 | required |
| `projectId` | Your project ID | required |
| `apikey`    | An API key unique to each project | required |

## Call example

```shell  title="Example CURL call"
curl https://www.testomato.com/api/incident/byInterval?&start=2021-06-09T00:00:00.000%2B02:00&end=2021-06-16T23:59:59.999%2B02:00&projectId=45sa648df8887fd9a87f&apikey=123456
```

## Response

```json title="Example JSON response"
[
  {
    "_id": "5d7783c7466a8b4b038b4573",
    "created": 1568113605,
    "status": "new",
    "reported": true,
    "testId": "538dd3b27c339158248b468c",
    "projectId": "50a9f72f14db3be812000233",
    "testName": "My Projects",
    "message": "Authentication failure  – Failed to parse URL",
    "shorthand": "Authentication failure",
    "details": "Sorry, we were unable to authenticate to the password protected area (Authentication failure  – Failed to parse URL).",
    "severity": 2,
    "request": null,
    "result": {
      "status": null,
      "httpStatus": null,
      "baseUrl": null,
      "contentType": null,
      "httpHeader": null,
      "processTime": null,
      "size": false,
      "timing": null,
      "redirects": null
    },
    "reportedAt": 1568113607
  } 
]
```