---
id: mheah1idu8j8
title: Flow Control Node
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk9zrrzshm6
language: en
scope: guide
crawledAt: 2026-05-31T16:24:10.048Z
---

# Flow Control Node

# I. General

## **1. Multiple Branches**

![Image 2](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mheah1idu8j8/93d9bfdf-1494-4000-8bb7-b4d92dd14d19.png)

**Node Functions**

Accepts one input parameter as the control expression (supports Integer or String). Branches into multiple paths based on its value

When the value on an Output Pin equals the control expression, execution continues along that Output Pin. If no pin matches, the [Default] pin is taken

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Control Expression Generic Only supports Integers or Strings

## **2. Double Branch**

![Image 3](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mheah1idu8j8/55ab51c6-74f2-47bb-976b-158a781ed88a.png)

**Node Functions**

Branches into True or False based on the evaluated condition

When the Boolean is True, the [True] execution flow runs; when it is False, the [False] execution flow run

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition Boolean

[Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh277t9fl4tm)[Other Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhbbdr09w60g)
