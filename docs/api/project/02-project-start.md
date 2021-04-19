---
title: Starting Project
---

## API Endpoint

```text
GET /api/project/[id]/start?apikey=[key]
```

## Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- |
| `id`      | Your project ID | required |
| `apikey`  | An API key unique to each project | required |


## Call example

```bash title="Example CURL call"
curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/start?apikey=4PJAOwTK"
```

## Response

```json title="Example JSON response"
{
	"projectId": "5e95ddf7a39e5a44428b4581",
	"jobId": "5e9602e7a39e5a46428b457f",
	"start": "ok",
	"results": "https:\/\/www.testomato.com\/api\/project\/5e95ddf7a39e5a44428b4581\/job\/5e9602e7a39e5a46428b457f\/results?apikey=4PJAOwTK"
}
```


### Response Parameters

| Parameter   | Description                                         |
| ----------- | --------------------------------------------------- |
| `projectId` | A unique project ID                                 |
| `jobId`     | A unique ID for each project job                    |
| `start`     | `ok` means your tests have successfully started     |
| `results`   | The URL where you can view your results             |

