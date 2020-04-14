---
id: project-simple-status
title: Project Simple Status
--- 

## API Endpoint

```txt title="API endpoint"
GET /api/project/[id]/simple-status?apikey=[key]
```
## Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- | 
| `id`      | Your project ID | required | 
| `apikey`  | An API key unique to each project | required |

## Call example

```shell  title="Example CURL call"
curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/simple-status?apikey=4PJAOwTK
```

## Response

```json title="Example JSON response"
{
    "failed": 0,
    "tests": [
        {
            "name": "Homepage",
            "status": "OK",
            "url": "https://www.testomato.com/"
        },
        {
            "name": "Blog",
            "status": "OK",
            "url": "https://blog.testomato.com/"
        },

        // ...

        {
            "name": "robots.txt",
            "status": "OK",
            "url": "https://www.testomato.com/robots.txt"
        },
        {
            "name": "404 Not found",
            "status": "OK",
            "url": "https://www.testomato.com/thisShouldNotExist"
        }
    ],
    "total": 12
}
```
