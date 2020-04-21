---
id: project-users
title: Project Users
---

## List Project Users 

### API Endpoint

```text
GET /api/project/[id]/users?apikey=[key]
```

### Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- |
| `id`      | Your project ID | required |
| `apikey`  | An API key unique to each project | required |


### Call example

```bash title="Example CURL call"
curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/users?apikey=4PJAOwTK"
```

### Response

`Array` of users that have access to selected Project:

```json title="Example JSON response"
[
	{
		"email": "roman@testomato.com",
		"phone": null,
		"name": "Roman Ožana",
		"confirmed": true,
		"timezone": "Europe\/Prague",
		"reportPeriod": "day",
		"notificationEmail": null,
		"notificationDelay": 1,
		"apiKey": "123456",
		"id": "7",
		"role": {
			"name": "project admin",
			"users_id": null,
			"id": "4",
			"permissions": [
				"read",
				"run",
				"editTests",
				"edit",
				"manageUsers",
				"apiKey"
			],
			"systemRole": true,
			"permissionsSwitches": {
				"read": true,
				"run": true,
				"editTests": true,
				"edit": true,
				"manageUsers": true,
				"apiKey": true
			}
		},
		"isPayer": true,
		"canBeRemoved": false
	}
]
```


## Add User to Project

### API Endpoint

```text
POST /api/project/[id]/users?apikey=[key]
```

### Request params

| Parameter | Description | Mandatory |
| --------- | ------------ | -------- |
| `id`      | Your project ID | required |
| `apikey`  | An API key unique to each project | required |

Payload data:

| Parameter | Description |
| --------- | ----------- |
| `email` | Email of the user that will be added. If he isn't a Testomato user, an invitation email will be sent. |  
| `role` | **4** (admin) <br /> **5** developer <br /> **6** guest |
                            
```json
{
  "email": "user@email.cz",
  "role":6
}
```

### Call example

```shell title="Example CURL call"
curl -X POST -H 'Content-Type: application/json' \
    -d '{"email":"user@email.cz", "role":6}' \
    "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/users?apikey=4PJAOwTK"
```