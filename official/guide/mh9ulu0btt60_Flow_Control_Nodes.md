---
id: mh9ulu0btt60
title: Flow Control Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhxppurzujfq
language: en
scope: guide
crawledAt: 2026-05-31T16:24:23.487Z
---

# Flow Control Nodes

# I. General

## **1. Double Branch**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ulu0btt60/1adcac39-adde-43f3-aa87-5bbd293e1590.png)

**Node Functions**

Branches into True or False based on the evaluated condition

When the Boolean is True, the [True] execution flow runs; when it is False, the [False] execution flow runs

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition Boolean

## **2.****Multiple Branches**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ulu0btt60/98a6b231-acb2-4cb0-b724-ae1c1c809d7d.png)

**Node Functions**

Takes an input parameter as a control expression (supports integers or strings). Multiple branches can be defined based on the value of the control expression.

Execution follows the output pin whose value matches the control expression. If no matching pin is found, it will proceed through the [Default] pin.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Control Expression Generic Supports only integers or strings

[Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6obvipqv1g)[Other Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhor3u09y7u0)
