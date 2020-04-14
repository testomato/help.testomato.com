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

* [GET project](project.md) - return basic project information
* [GET start project](project-start.md) - run all checks in Project
* [GET project response times](project-response-times.md) - return response times in select time period
* [GET project simple status](project-simple-status.md) - return simplify project status
* [GET project status](project-status.md) - return project status


## `/api/areas/*`

* [GET areas](areas.md) - getting information about project groups

## Others

* [Common responses](common-responses.md) - common responses
* [Get API key](api-key.md) - how to get API key
