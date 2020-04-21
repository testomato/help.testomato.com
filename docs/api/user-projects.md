---
id: user-projects
title: User Projects 
---
## API Endpoint

```text
GET  /api/user/[id]/projects?apikey=[key] 
```

## Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- |
| `id`      | User ID | required |
| `apikey`  | An API key unique to each user | required |


## Call example

```bash title="Example CURL call"
curl https://www.testomato.com/api/user/7/projects?apikey=Sx9KJOjJ
```

## Response

Array of projects

```json title="Example JSON response"
[
    {
        "name": "omdesign.cz/",
        "url": "http://omdesign.cz/",
        "title": "My homepage",
        "created": "2018-08-07T08:24:57+00:00",
        "status": null,
        "period": "1 hour",
        "timeout": 7,
        "delay": 50,
        "uptimeEnabled": false,
        "uptimeUrl": "http://omdesign.cz/",
        "userAgent": null,
        "apiKey": "YmZhU4mx",
        "userIds": [ "7" ],
        "payerId": "7",
        "location": "de",
        "checkDefaultErrors": true,
        "id": "5b6957598cef2f6b118b47d3"
    },
    // ...
]
```