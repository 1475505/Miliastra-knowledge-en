---
id: mhtq21i5la38
title: Node Graph Variables
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhtshailzs7w
language: en
scope: guide
crawledAt: 2026-05-31T16:28:44.048Z
---

# Node Graph Variables

# I. What are Node Graph Variables?

## 1. Definition of Node Graph Variables

A Node Graph Variable has a Life Cycle that follows its Node Graph, and is only valid in _Server Node Graphs_

Its functionality as a variable is largely the same as Custom Variables[Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhso1b9wjica), but its Life Cycle and scope differ in certain ways

## 2. Life Cycle and Scope

The Life Cycle of a Node Graph Variable follows the Node Graph. In the case of an Entity Node Graph, when the Node Graph is mounted on an Entity, the Entity holds these variables and can set, obtain, and monitor events through the corresponding operation nodes

A Node Graph Variable can only be accessed within the Node Graph it resides in, including setting, obtaining, and monitoring events

# II. Similarities and Differences with Custom Variables

The following graph outlines the similarities and differences between Node Graph Variables and Custom Variables

**Node Graph Variables****Custom Variables**
Life Cycle Follow Node Graph Follow Entity
Scope Accessible only within the Node Graph where the variable is defined Globally accessible, requires specifying the Entity
Naming Rules Names must be unique within the same Node Graph Names must be unique within the same Component (Entity)
Can be overridden on an Entity Yes, but must be manually exposed Yes, following the general Component parameter overwriting rules
Supported Data Types All Basic and List Data Types All Basic and List Data Types
Related Actions Set Value, Obtain Value, Monitor Changes Set Value, Obtain Value, Monitor Changes

# **III. Why Use Node Graph Variables?**

Compared to [_Custom Variables_], Node Graph Variables have the following features:



Lightweight to use, they can be defined and used entirely within the Miliastra Sandbox, enabling complete logic and data authoring inside the sandbox



Allows duplicate names, so multiple Node Graph Variables with the same name can exist on an Entity, provided they are distributed across different Node Graphs



Prevents variables tied to Node Graph Functions from being exposed externally, reducing the complexity of reading Node Graph logic



Creators (Craftspeople) can focus on encapsulating Node Graph Functions without concern for which Entity the Node Graph will be mounted on, allowing for more modular design

When designing gameplay data structures, we recommend that Creators apply these two functions as follows:

**Custom Variables**: Store general-purpose data that belongs to an Entity and is globally accessible in the Entity's Custom Variables

For example, the hit count of a mechanism is best stored in a Custom Variable, as it may need to be accessed or modified by other Entities and Node Graphs

**Node Graph Variables**: Store local, temporary variables that belong to the Node Graph within the Entity's Node Graph Variables

For example: When a Node Graph Function of an Object needs to temporarily store a global Player List, it is better to place it in Node Graph Variables. External systems do not require this variable, and storing it in Custom Variable Components could make understanding more difficult

# IV. Editing Node Graph Variables

## 1. Node Graph Variables Tab Entry Point

In the Node Graph Editing Tab - Shortcut menu, you can open the Node Graph Variables tab

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/a58b00ec-dd8b-42fd-97a1-879934981fbb.png)

## 2. Create New Node Graph Variables

Similar to Tab actions and [Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhso1b9wjica), you can add and edit the configured Node Graph Variables

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/b4eb129c-dfa7-4ba6-a4da-e0fe2385c9c5.png)

## 3. Using Node Graph Variables in the Node Graph

In a Node Graph, you can use the following Node Graph-related nodes, with usage largely consistent with Custom Variable Nodes

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/b45b732f-0638-4c9a-865e-3ff88c23aa88.png)![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/ab9858ca-714b-4742-a060-c7088a9fd55b.png)![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/775f4679-102f-49af-a728-6b1d1153c5b8.png)

Additionally, you can create operation nodes for Node Graph Variables by dragging them from the Node Graph Variables Tab into the Editing Area

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/6fc8ab8b-719f-4c5a-ad84-acee67dfce51.png)

After releasing, a shortcut creation menu appears, allowing you to choose to set or obtain operations for the Node Graph Variable

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/01bb0f46-584d-422e-a624-35dfa35cbbf0.png)

After selection, a new Set or Obtain node for the Node Graph Variable is created automatically

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/2995d099-4e41-4533-98d8-27b4381b34b7.png)

## 4. Exposing Node Graph Variables to Stages



**Function of Exposing Node Graph Variables to Stages**

Through the Node Graph Variable exposure feature, you can overwrite the values of _Node Graph Variables_ when editing Stages

For example:

In an Explosive Barrel Node Graph, a Node Graph Variable is used to define the Explosive DMG of the barrel. In Stage placement, however, you may want to configure two barrels with different DMG values

This can be done by exposing the Node Graph Variable to the Stage layer, then assigning different overwriting values to the two Explosive Barrel Entities



**Exposing Node Graph Variables to Stages**

Click the Expose button beside a Node Graph Variable and save the Node Graph to expose it to the Stage

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/35413309-a271-4a7e-a08a-61936222234d.png)

In the Stage's Node Graph, you can view the number of Node Graph Variables currently exposed.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/9c402541-bdf6-4127-94d6-be98510bebdb.png)

Click Edit Variable Count to adjust the overwrite values of this Node Graph Variable on the Entity

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtq21i5la38/611d577f-8069-45c4-9274-5b6759f3562d.png)

[Generic Pins](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkirfrna1fy)[Composite Node](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhty17iqeht0)

1
