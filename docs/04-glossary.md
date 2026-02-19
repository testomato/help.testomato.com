# Glossary

This glossary clarifies terminology used in the documentation and UI. Where applicable, the API schema name is shown as a synonym.

## Group 
**Definition**: A named grouping of checks used to organise monitoring within a project.

API schemas and paths sometimes refer to this entity as `Area`. When reading API reference pages, treat `Area` as equivalent to `Group`.

See: [Project Groups](/api/project-groups)

## Check
**Definition**: A single monitoring action that evaluates a condition (for example, an HTTP check or Redirect check).

API schemas and paths sometimes refer to this entity as `Test`. When reading API reference pages, treat `Test` as equivalent to `Check`.

See: [Get test](/api/get-test), [Project results](/api/project-results)

## Rule
**Definition**: Evaluation or threshold parameters applied to a Check/Test (for example, HTML title tag matches "some pattern").

See: [Get test](/api/get-test)

## Project
**Definition**: The top-level entity containing Groups/Areas and Checks/Tests.

See: [Get project](/api/get-project)

## Status / Simplified status
**Definition**: Project status endpoints provide an overview of a project's health. The `/simple-status` endpoint returns a smaller, easier-to-consume representation.
  
See: [Project status](/api/project-status), [Simplified project status](/api/simplified-project-status)
