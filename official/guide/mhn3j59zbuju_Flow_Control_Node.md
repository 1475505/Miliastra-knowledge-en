---
id: mhn3j59zbuju
title: Flow Control Node
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh21nw9b6f8i
language: en
scope: guide
crawledAt: 2026-05-31T16:24:03.902Z
---

# Flow Control Node

# I. General

## **1. Multiple Branches**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhn3j59zbuju/35325abf-effb-497b-bb17-99728dacc4b3.png)

**Node Functions**

Accepts one input parameter as the control expression (supports Integer or String). Branches into multiple paths based on its value

When the value on an Output Pin equals the control expression, execution continues along that Output Pin. If no pin matches, the [Default] pin is taken

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Control Expression Generic Only supports Integers or Strings

## **2. Double Branch**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhn3j59zbuju/a044f91e-9b61-4b64-91c6-bdb238f92bca.png)

**Node Functions**

Branches into True or False based on the evaluated condition

When the Boolean is True, the [True] execution flow runs; when it is False, the [False] execution flow run

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition Boolean

[Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhb09x012qu8)[Other Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mht31vila3ms)
