---
id: introduction
title: Testomato REST API
sidebar_label: Introduction
---

Testomato [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
API provides simple interfaces for all important Testomato functionality. To use a
**REST API**, your application makes an HTTP request and parses the **JSON**
formatted response.

## `/api/project/*`

| Method | Entrypoint | Description |
| ------ | ---------- | ----------- |
| [GET](../../api/project/01-get-project.md) | `/api/project/[id]` | Get Project |
| [GET](../../api/project/02-project-start.md) | `/api/project/[id]/start` | Start all Project's checks |
| [GET](../../api/project/03-project-results.md) | `/api/project/[id]/job/[jobid]/results` | Retrieve latest Project's checks results |
| [GET](../../api/project/04-project-simple-status.md) | `/api/project/[id]/simple-status` | Simplify project status |
| [GET](../../api/project/05-project-status.md) | `/api/project/[id]/status` | Full project status |  
| [GET](../../api/project/06-project-response-times.md) | `/api/project/[id]/responseTimes` | Response times in select time period | 
| [GET](../../api/project/07-project-users.md) | `/api/project/[id]/responseTimes` | Project Users | 
| [GET](../../api/project/08-project-group.md) | `/api/project/[id]/responseTimes` | Project Groups | 
| [POST](../../api/project/09-project-create.md) | `/api/project/create` | Create new Project | 


## `/api/incident/*`

| Method | Entrypoint | Description |
| ------ | ---------- | ----------- |
| [GET](../../api/06-incident.md) | `/api/incident/byInterval` | Getting list of incidents |


## `/api/user/*`

| Method | Entrypoint | Description |
| ------ | ---------- | ----------- |
| [GET](../../api/07-user-projects.md) | `/api/user/[id]/projects` | Getting list of user projects |

## Others

* [Common responses](../../api/03-common-responses.md) - common responses
* [Get API key](02-api-key.md) - how to get API key
