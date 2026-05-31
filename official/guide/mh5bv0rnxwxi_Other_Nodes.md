---
id: mh5bv0rnxwxi
title: Other Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhbbdr09w60g
language: en
scope: guide
crawledAt: 2026-05-31T16:30:42.318Z
---

# Other Nodes

## **1. Execute Only by Sequence**

![Image 2](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh5bv0rnxwxi/f27de125-685a-4a28-8e70-83baf42b3f10.png)

**Node Functions**

Start Event for the Creation Status Decision Node Graph

The Creation Status Decision Node Graph starts with an [**Execute Only by Sequence)]** node. Each output pin connects to a **[Switch to self execution status]** node, so you can execute different behaviors as needed. If the entry conditions for the previous state are not met, it will enter the _Failed Execution_ first. If the conditions are still not met, it will try the state on the next pin

The Creation Status Decision Node Graph runs continuously. When a state earlier in the sequence meets its conditions, the Complex Creation immediately switches execution state and executes the Status Node Graphs in that preceding order

If no conditions are met, the Complex Creation may not execute any Status Node Graph

Example: At runtime, Branch 1 checks Node A first. If Node A meets its conditions and executes successfully, Nodes B and C will not execute. If Node A does not meet its conditions, Branch 1 continues by checking Node B. If neither Node A nor Node B meets its conditions, Branch 2 then checks whether Node C meets its conditions

If the Creation Status Node Graph in Node C is currently running, but Node A's execution conditions are met, the Complex Creation will immediately switch to the Creation Status Node Graph in Node A

![Image 3](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh5bv0rnxwxi/fac529b4-d4a0-40da-9169-97ae8cbe87a4.png)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

[Flow Control Node](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk9zrrzshm6)
