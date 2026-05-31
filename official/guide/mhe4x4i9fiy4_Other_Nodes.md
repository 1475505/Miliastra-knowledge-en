---
id: mhe4x4i9fiy4
title: Other Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mht31vila3ms
language: en
scope: guide
crawledAt: 2026-05-31T16:30:34.632Z
---

# Other Nodes

## **1. Execute Only by Sequence**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhe4x4i9fiy4/c369df44-452e-4101-aaf7-7bd579ec71f3.png)

**Node Functions**

Start Event of the Creation Status Node Graph

The Creation Status Node Graph starts with an [**Execute Only by Sequence]** node. Each output pin connects to an Execution Node, allowing different actions to run as needed. If the entry conditions for the previous action are not met, the graph will enter the _Failed Execution_ first. If the conditions are still not met, it will try the action on the next pin

The Creation Status Node Graph runs continuously. If a higher-priority behavior meets its conditions, the Complex Creation immediately switches to execute that behavior

If the conditions are not met, the Complex Creation may not execute any actions

Example: At runtime, Branch 1 checks Node A first. If Node A meets its conditions and executes successfully, Nodes B and C will not execute. If Node A does not meet its conditions, Branch 1 continues by checking Node B. If neither Node A nor Node B meets its conditions, Branch 2 then checks whether Node C meets its conditions

If the Creation is executing the behavior in Node C, but Node A's execution condition is met, the Complex Creation will immediately switch to executing the behavior in Node A

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhe4x4i9fiy4/ef35a55a-44fe-48cf-862c-96e1af72ed77.png)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

[Flow Control Node](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh21nw9b6f8i)
