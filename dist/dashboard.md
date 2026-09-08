[**Dashboard**](https://testomato.com/app/dashboard) is meant to help you get a basic overview of what's
going on in your projects in a quick way.

![Dashboard](/img/dashboard.png)

When you sign in to Testomato, we want you to be able to know if there
are problems the minute you see your dashboard. That's why boxes will
change color according to the status of each check.

## Open selected Project

By clicking on **Project Name** or **Checks** button.

![Dashboard Open Project](/img/open-project.png)

## Check colors

Each check is a box, coloured by the result of its last run:

1.  **Green**: This page passed all checks.
2.  **Red**: This page failed some checks.
3.  **Orange**: Testomato could not download the page — usually a timeout.
4.  **Gray**: The check has been *turned off*.
5.  **Dashed outline**: The check is new and has not produced a result yet.
6.  **Spinner**: The check is running right now.

Under the boxes, each project sums its checks up as `All 11 checks passed`, or
`1 failing · 2 warning of 20` when something needs attention. The figure carries
an icon as well as a colour, so it stays readable if you don't distinguish the two.

## Overview and Detailed

The toggle next to the **Dashboard** heading switches between two layouts.
**Detailed** gives every check its own box — that is the view in the screenshots
above. **Overview** collapses each project to a single row with its current
response time and a response-time trend, which is the more useful one once you
monitor a lot of sites.

![Dashboard Overview](/img/dashboard-overview.png)