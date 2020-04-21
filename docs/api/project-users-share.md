---
id: user
title: Project Users
sidebar_label: "Project > Users"
---

## List Project Users 

Share a Project `POST /project/{projectId}/users`
=================================================

Request
-------

```bash
curl -X POST -H 'Content-Type: application/json' \
  -d '{"email":"user@email.cz", "role":6}' \
  'https://www.testomato.com/api/project/{projectId}/users?apikey={apikey}'
```

### Request Parameters

+-----------+-------------------------------------+
| Parameter | Description                         |
+===========+=====================================+
| projectId | Your project ID                     |
+-----------+-------------------------------------+
| apikey    | > An API key unique to each project |
+-----------+-------------------------------------+

### Request Body (JSON)

+-----------------------------------+-----------------------------------+
| Field                             | Description                       |
+===================================+===================================+
| email                             | Email of the user that will be    |
|                                   | added. If he isn\'t a Testomato   |
|                                   | user, an invitation email will be |
|                                   | sent.                             |
+-----------------------------------+-----------------------------------+
| role                              | Project role ID:                  |
|                                   |                                   |
|                                   | :   -   **4** (admin)             |
|                                   |     -   **5** (developer)         |
|                                   |     -   **6** (guest)             |
+-----------------------------------+-----------------------------------+

``` {.json}
{
  "email": "user@email.cz",
  "role":6
}
```
