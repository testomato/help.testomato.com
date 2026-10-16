---
title: MCP server
description: Connect an AI assistant to Testomato through the MCP server to check uptime and incidents and manage checks.
---
MCP ([Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)) is an open standard for connecting AI assistants to other services.

The Testomato MCP server lets an AI assistant use your Testomato account for you. Ask it about uptime, incidents and checks, or have it add, change, delete and run checks.

Ask your assistant what it can do with Testomato, and it lists the [tools](#tools) below.

## Requirements

Every Testomato plan supports MCP access, including the free trial. However, if you were invited to someone else's project and have no plan of your own, you can't use the MCP server.

To use the MCP, you need to create a [personal access token](/account/api-tokens/#create-a-personal-access-token).

## Set up

Every client needs the same two things:

- **Server URL**: `https://testomato.com/api/mcp`
- **Header**: `Authorization: Bearer <your-personal-access-token>`

### Claude Code

```shell
claude mcp add --transport http --scope user testomato https://testomato.com/api/mcp --header "Authorization: Bearer <token>"
```

`--scope user` makes the server available in all your projects.

### VS Code

Run **MCP: Open User Configuration** from the Command Palette and add the server. VS Code asks for your token when the server first starts and doesn't store it in the file.

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "testomato-token",
      "description": "Testomato personal access token",
      "password": true
    }
  ],
  "servers": {
    "testomato": {
      "type": "http",
      "url": "https://testomato.com/api/mcp",
      "headers": {"Authorization": "Bearer ${input:testomato-token}"}
    }
  }
}
```

The tools are available in Copilot Chat in Agent mode.

### Codex

Add the server to `~/.codex/config.toml`:

```toml
[mcp_servers.testomato]
url = "https://testomato.com/api/mcp"
http_headers = { "Authorization" = "Bearer <token>" }
```

:::note
Other clients that support remote MCP servers and custom headers work with the same server URL and header. Some clients require sign-in methods the Testomato MCP server doesn't support yet. If yours can't connect, [let us know](/support/).
:::

## Tools

You don't need to use the tool names. Ask in your own words, and the assistant picks the tool. Your client shows the tool name when it asks for permission to use it.

**Read**

| Tool | What it does |
| --- | --- |
| `list_projects` | Lists your projects |
| `get_project_status` | Shows a project and whether its site is up |
| `list_tests` | Lists the checks in a project |
| `get_project_areas` | Lists the check groups in a project |
| `get_uptime` | Uptime percentage for a period |
| `get_response_times` | Average, minimum and maximum response time for a period |
| `list_incidents` | Incidents for a period, newest first |

**Write**

| Tool | What it does |
| --- | --- |
| `create_test` | Adds a check |
| `update_test` | Changes a check's URL or name |
| `delete_test` | Deletes a check, after you confirm |
| `run_project_tests` | Runs a project's checks now, after you confirm |

Write tools follow the same permissions and plan limits as the web app.

Before deleting a check or running checks, the assistant shows what will happen and waits for your confirmation, as a chat message or a dialog depending on your client.

## Example prompts

- *What was the uptime of my site last week?*
- *List incidents in the last 3 days.*
- *Add a check for https://example.com/pricing.*
- *Delete the check for https://example.com/pricing.*

## Limitations

Running checks only starts them, so the assistant can't tell you the results. Wait a few minutes, then ask about incidents to see what failed.

A check created through MCP gets one rule: the page returns HTTP status 200. To add or edit rules, for example a [string check](/checks/string-checks/) that the page contains *Add to cart*, use the [web app](https://testomato.com/app/dashboard).

## Troubleshooting

| Error | Fix |
| --- | --- |
| Every request fails with 401 | Your token expired or was revoked. [Check the token](/account/api-tokens/#use-a-token). |
| "Your current plan does not include access to the Testomato API." | Your account has no plan of its own. This happens when you were invited to someone else's project. |
| "Project … not found or not accessible." | The ID is wrong, or your role in that project doesn't allow the action. |
| "Confirmation token expired." | You confirmed after more than 2 minutes. Ask the assistant to try again. |
