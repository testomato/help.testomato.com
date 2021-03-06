---
id: introduction
title: Testomato REST API
sidebar_label: Introduction
---

## Testomato REST API

Testomato [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
API provides simple interfaces for Testomato functionality. To use a
REST API, your application makes an HTTP request and parses the JSON
formatted response.

## `/api/project/*`

| Method | Name  | Entrypoint | Description |
| ------ | ----- | ---------- | ----------- |
| [GET](project/01-get-project.md) | Project | `/api/project/[id]` | Getting basic Project information |
| [GET](project/02-project-start.md) | Starting | `/api/project/[id]/start` | run all checks in Project |
| [GET](project/03-project-results.md) | Results | `/api/project/[id]/job/[jobid]/results` | Return results of selected job |
| [GET](project/04-project-simple-status.md) | Simple Status |`/api/project/[id]/simple-status` | Simplify project status |
| [GET](project/05-project-status.md) | Status | `/api/project/[id]/status` | Full project status |  
| [GET](project/06-project-response-times.md) | Response times | `/api/project/[id]/responseTimes` | Response times in select time period | 
| [GET](project/07-project-users.md) | Users | `/api/project/[id]/responseTimes` | Project Users | 
| [GET](project/08-project-group.md) | Group | `/api/project/[id]/responseTimes` | Project Users | 


## `/api/incident/*`

| Method | Name  | Entrypoint | Description |
| ------ | ----- | ---------- | ----------- |
| [GET](06-incident.md) | Incidents | `/api/incident/byInterval` | Getting list of incidents |


## `/api/user/*`

| Method | Name  | Entrypoint | Description |
| ------ | ----- | ---------- | ----------- |
| [GET](07-user-projects.md) | Project | `/api/user/[id]/projects` | Getting list of user projects |

## Others

* [Common responses](03-common-responses.md) - common responses
* [Get API key](02-api-key.md) - how to get API key
