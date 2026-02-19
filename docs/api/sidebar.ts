import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/testomato-api",
    },
    {
      type: "category",
      label: "Authenticate",
      items: [
        {
          type: "doc",
          id: "api/get-api-token",
          label: "Get API token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/verify-api-token",
          label: "Verify API token",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Project",
      items: [
        {
          type: "doc",
          id: "api/new-project",
          label: "New project",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-project",
          label: "Get project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/project-update",
          label: "Project update",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/project-delete",
          label: "Project delete",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/project-status",
          label: "Project status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/simplified-project-status",
          label: "Simplified project status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/starting-project",
          label: "Starting project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/project-results",
          label: "Project results",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/project-users",
          label: "Project users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-user-to-project",
          label: "Add user to project",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/project-roles",
          label: "Project roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/project-notifications",
          label: "Project notifications",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-notifications",
          label: "Update notifications",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/response-times",
          label: "Response times",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/uptime",
          label: "Uptime",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/project-permissions",
          label: "Project permissions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Group",
      items: [
        {
          type: "doc",
          id: "api/start-project-group",
          label: "Start project group",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/project-groups",
          label: "Project groups",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Checks",
      items: [
        {
          type: "doc",
          id: "api/get-test",
          label: "Get test",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
