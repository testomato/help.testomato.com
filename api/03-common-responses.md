---
id: common-responses
title: Common responses
---


## OK: Success response

```json
{
    "message": "Success message",
    "code": 200,
    "ok": true,
    "error": false
}
```

## ERROR: Missing API endpoint

```json
{
  "message": "API endpoint not found",
  "code": 404,
  "ok": false,
  "error": true
}
```

## ERROR: Invalid API key

```json
{
  "message": "You don't have required permission to selected project.",
  "code": 401,
  "ok": false,
  "error": true
}
```

## ERROR: Project not found

```json
{
 "message": "Project \"xxxx\" not found.",
 "code": 404,
 "ok": false,
 "error": true
}
```
