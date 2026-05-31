---
id: mhvwl90ktgkg
title: Flow Control Node
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhq1k3rzp6oe
language: en
scope: guide
crawledAt: 2026-05-31T16:23:54.474Z
---

# Flow Control Node

# I. General

## **1. Double Branch**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvwl90ktgkg/6045e2a4-127f-455b-93da-d6c485e7aa15.png)

**Node Functions**

Branches into True or False based on the evaluated condition

When the Boolean is True, the [True] execution flow runs; when it is False, the [False] execution flow run

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition Boolean

## **2.****Multiple Branches**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvwl90ktgkg/6e9fe74c-d9bc-4a8f-b72c-2739eb1ad6ea.png)

**Node Functions**

Takes an input parameter as a control expression (supports integers or strings). Multiple branches can be defined based on the value of the control expression.

Execution follows the output pin whose value matches the control expression. If no matching pin is found, it will proceed through the [Default] pin.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Control Expression Generic Supports only integers or strings

[Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhz064iplia4)[Other Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh84c29jwjgy)
