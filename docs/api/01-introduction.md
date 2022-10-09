---
id: introduction
title: Testomato REST API
sidebar_label: Introduction
---

Testomato [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
API provides simple interfaces for all important Testomato functionality. To use a
**REST API**, your application makes an HTTP request and parses the **JSON**
formatted response.


:::warning
This API documentation will be soon replaced with by documentation in [OpenAPI](https://www.openapis.org/) format.
You can check preview here https://help.testomato.com/api
:::

## `/api/project/*`

| Method | Entrypoint | Description |
| ------ | ---------- | ----------- |
| [GET](project/01-get-project.md) | `/api/project/[id]` | Get Project |
| [GET](project/02-project-start.md) | `/api/project/[id]/start` | Start all Project's checks |
| [GET](project/03-project-results.md) | `/api/project/[id]/job/[jobid]/results` | Retrieve latest Project's checks results |
| [GET](project/04-project-simple-status.md) | `/api/project/[id]/simple-status` | Simplify project status |
| [GET](project/05-project-status.md) | `/api/project/[id]/status` | Full project status |  
| [GET](project/06-project-response-times.md) | `/api/project/[id]/responseTimes` | Response times in select time period | 
| [GET](project/07-project-users.md) | `/api/project/[id]/responseTimes` | Project Users | 
| [GET](project/08-project-group.md) | `/api/project/[id]/responseTimes` | Project Groups | 
| [POST](project/09-project-create.md) | `/api/project/create` | Create new Project | 


## `/api/incident/*`

| Method | Entrypoint | Description |
| ------ | ---------- | ----------- |
| [GET](06-incident.md) | `/api/incident/byInterval` | Getting list of incidents |


## `/api/user/*`

| Method | Entrypoint | Description |
| ------ | ---------- | ----------- |
| [GET](07-user-projects.md) | `/api/user/[id]/projects` | Getting list of user projects |

## Others

* [Common responses](03-common-responses.md) - common responses
* [Get API key](02-api-key.md) - how to get API key
