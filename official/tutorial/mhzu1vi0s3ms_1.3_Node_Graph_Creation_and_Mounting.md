---
id: mhzu1vi0s3ms
title: 1.3 Node Graph Creation and Mounting
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhzu1vi0s3ms
language: en
scope: tutorial
crawledAt: 2026-05-31T15:48:19.732Z
---

# 1.3 Node Graph Creation and Mounting

# Introduction

## Course Description:

**Course Content:** How to edit and mount node graph

**Learning Objectives:** Learn how to write node graphs and the basic approach to feature development

**This course primarily explains the node graph editing process. For more information on basic concepts, please refer to the **[Creation Manual]**

## Relevant Information:

**Recommended Learning Order:**[Current Course] → [Creation Manual]

**If course details are unclear or if you'd like additional information, please refer to the **[Creation Manual]** as needed.

**Required Knowledge:**The course involves the following basic concepts (Recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the **[Creation Manual]**

> [Summary](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhi4kw9mur0i)
> 
> 
> [Basic Concept](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh95yviwyfes)
> 
> 
> [Node Graph Editing Guide](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhia4t9r9glm)

* * *

# Node Graph Editor

## Node Graph Description

### Feature Overview

**Node Graph:**Refers to custom logic written by creators to implement logical functions in the game

**Node Graph Types:**Currently divided into five types: [Entity Node Graph], [Unit Status Node Graph], [Class Node Graph], [Skill Node Graph], and [Local Filter Node Graph]

> [Entity Node Graph], [Unit Status Node Graph], and [Class Node Graph] run on the server, therefore collectively called **Server Node Graphs**;
> 
> 
> [Skill Node Graph] and [Local Filter Node Graph] run on the player's local device (client), therefore collectively called **Local Node Graphs (Client Node Graphs)**

These type distinctions will affect the monitoring/execution rules, specific node configurations, and mountable objects in the node graph

_**For more information on basic concepts, please refer to [Creation Manual > Overview]_

## Node Graph Creation

### Approach to Node Graph Creation

A node graph has three key elements: **[Event]**, **[Condition]**, and **[Result]**. By connecting them logically, you can create a complete node graph (implementing logical functionality). Here is a general breakdown:

> 1. Identify the trigger conditions for a function, i.e., **[what event causes it]**
> 
> 
> 2. Determine if the function's execution results in conditional branching, i.e., **[what conditions trigger what results]**
> 
> 
> 3. Confirm the effects after function executes, i.e., **[what final effects are achieved]**

_**Note: The above approach is a general breakdown method suitable for most node graphs. Some node graph types (such as local filter node graphs) may not strictly consist of [Event], [Condition], and [Result], so please choose the types that work the best._

### Instructions

> 1. Select the corresponding node graph page based on the intended node graph type of your creation (In this tutorial, we will demonstrate with [Server Node Graph > Entity Node Graph])
> 
> 
> ![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhckkc0lh4e0/664aa32d51eb4516bdab01041051df47_1760003791.png)
> 
> 
> 2. On the page, right-click to expand the options list >>> Select [Create Node Graph] to create a new node graph and open the corresponding node graph editing page
> 
> 
> ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhckkc0lh4e0/43285307b4024fc3b3d0a2a526715cfa_1760003792.png)
> 
> 
> 3. On the node graph editing page, right-click to expand the options list (Node Library) >>> Select the corresponding node to create
> 
> 
> ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhckkc0lh4e0/f1a772791d1c4739ad617ec2e8f91393_1760003792.png)
> 
> 
> 4. After completing the basic node graph build >>> Click save to finish editing the node graph
> 
> 
> The function demonstrated in the example is: after interacting with a certain object, if the interaction option is 1, destroy the object; if the option is 2, then no effect will take place
> 
> 
> ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhckkc0lh4e0/a65eb24ebc75413e9fa1405d8dd39c84_1760003792.png)

_**For more information on basic concepts_ _, please refer to_ _[Creation Manual - Basic Concepts]_

## Node Graph Mounting

### Instructions

> Complete the node graph >>> Mount it on the corresponding unit >>> Click [Save] to complete the mounting (the tutorial demonstrates using [Prefab])
> 
> 
> ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhckkc0lh4e0/045c1daf51c44940a1982fc6870a387e_1760003792.gif)

_**For more information on basic concepts, please refer to [Creation Manual - Node Graph Editing Guide]_

[1.2 Map Creation and Playtesting](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhcegrr5omvi)[1.4 Importing and Exporting Saves](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhjuwpiubrh0)
