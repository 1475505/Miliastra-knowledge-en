---
id: mh8k7r057pkg
title: Node Graphs
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjwjrr5n73i
language: en
scope: guide
crawledAt: 2026-05-31T16:28:50.235Z
---

# Node Graphs

# I. Node Graph Overview

## 1. Custom Logic Carriers

Node graphs are a form of custom logic by the creator (Craftsperson)

For example, this is a typical entity node graph

It describes the logic of an Explosive Barrel: when attacked, it increases the attacker's score by 1 (as a _custom variable_), then **plays a special effect**, **launches an attack**, and destroys itself

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/82d2f8ad-3234-4f26-95ef-5ea21d31792a.png)

A typical node graph consists of two core elements:

_Node_: The basic functional unit of a node graph, with each node performing a specific function. For example: **Play Special Effects**, **Addition**, etc

_Connection_: Divided into _Execution Flow Connections_ (white lines in the node graph) and _Operation Flow Connections_ (blue lines in the node graph). Connections link nodes together, defining the execution order and the logic for passing parameters

## 2. How to Use Node Graphs

As mentioned above, creators (Craftspeople) can design and implement custom logic by configuring and mounting node graphs

For example:



Mount a node graph on the _Prefab_ to make an explosive barrel that detonates when hit (implementation functionality shown in the graph above)



Mount a node graph on the _stage entity_ to create a global scoring system



Use local filter nodes in the _On-Hit Detection Component_ to filter targets that can be detected by the On-Hit Detection Component



Use the Skill Node Graph in _Custom Skills_ editing to write custom skill logic

# II. Types of Node Graphs

In the current mode, node graphs fall into five categories:



Entity Node Graph



Unit Status Node Graph



Class Node Graph



Item Node Graph



Skill Node Graphs



Creation Status Node Graph



Local Filter Node Graph

Among these, the logic of the _Entity Node Graph_, _Unit Status Node Graph_, _Class Node Graph_, and _Item Node Graph_ runs on the server, so they are collectively referred to as _Server Node Graphs_.

The _Skill Node Graph_, _Creation Status Node Graph_, and _Local Filter Node Graph_ all run on the player's local device, so they are collectively referred to as _Client Node Graphs_.

Their characteristics are shown in the following table:

**Node Graph Type****Function Description**
Entity Node Graph A node graph mounted on an entity typically serves as the carrier of that entity's logic.

Its lifecycle follows that of the entity it is attached to. When the entity is destroyed, the node graph also ceases to function
Status Node Graph A node graph mounted on _Unit Status_ Node Graph: Typically used to implement custom unit status logic. For example: a Ring of Fire status that continuously attacks nearby hostile units can be implemented through unit status to achieve the continuous attack effect.

The life cycle follows the unit status. When the unit status is removed, the node graph becomes invalid
Class Node Graph A node graph mounted on _Class_ Configuration Node Graph: Used to implement class-specific logic. Can be mounted on either player or character entities

The lifecycle follows the class. When switching classes, the node graph of the previous class becomes invalid while the node graph of the new class takes effect
Item Node Graph A node graph mounted on the _Item_ configuration. Used to implement some logic specific to the item itself.
Skill Node Graph A node graph used by a custom skill defines the logic of that skill.

When a custom skill reaches the point where its skill node graph is mounted, that skill node graph begins execution
Creation Status Node Graph Node Graphs used on Complex Creations.

These node graphs are used to customize the behavior patterns of complex creations.
Local Filter Node Graph Node graphs used in various components to describe custom validation rules that are executed locally.

**Local Filter Node - Boolean Type**

The node graph will always return a boolean value (True/False) as its result

For example: In the on-hit detection component, you can configure a local filter node graph. When the local filter node graph returns True, it is considered a valid target hit and triggers the [**When On-Hit Detection Is Triggered**] event. Otherwise, it is considered an invalid target and no event is triggered

**Local Filter Note - Integer Type**

The node graph will return an integer as its output.

Because server node graphs are the most fundamental and feature-complete type, the following sections will focus primarily on their functionality. Skill node graphs and local filter node graphs generally follow the same principles, with any differences noted separately

# III. Mounting Node Graphs

As noted earlier, node graphs only function when attached to logical elements such as entities or unit statuses. Below are the mounting methods for the above-mentioned node graphs.

Before mounting, you must first create a node graph in the _Miliastra Sandbox_, see [Node Graph Editing Guide](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhb3ho0k5l2w). After creation, you can add the newly created node graph to its corresponding mounting location

## 1. Entity Node Graph

Entry point: Entity or Prefab Details Editing Tab > Node Graph Tab

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/707f6063-9acb-4343-b603-2327c02bdddf.png)

(1) On the Entity or Prefab Editing Tab, switch to the Node Graph Tab (A in the graph)

(2) Click "Add Node Graphs" (B in the graph)

## 2. Unit Status Node Graph

Entry point: Unit Status Details Editing Tab > General Information > Status Node Graph

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/bee5005c-30d7-4c15-8013-7bd395317e78.png)

## 3. Class Node Graph

Only supports Beyond mode.

Entry point: Custom Class Details Editing Tab > Node Graphs Tab

You can switch between configuring a Player Node Graph or a Character Node Graph. When the class is equipped, the Player Node Graph applies to the player entity, and the Character Node Graph applies to the character entity

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/ce121bf8-63a7-4e0f-92a7-13d94af8c7b0.png)

(1) On the class configuration page, switch to the Class Node Graph tab (A in the graph)

(2) Toggle between the Player Node Graph and the Character Node Graph (B in the graph)

(3) Click "Add Node Graphs" (C in the graph)

## 4. Item Node Graphs

Entry point: Combat Preset> Item Tab > Basic Settings

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/25186e4e-e6d6-4485-98af-17a71fc9d280.png)

(1) Switch to the Combat Preset tab (A in the graph)

(2) Switch to the Item tab (B in the graph)

(3) Click "Select Node Graph" (C in the graph)

## 5. Skill Node Graphs

### (1) Character Skill Node Graph

Only supports Beyond mode.

Entry point: Character Custom Skill Editing Page > Animation Editing > Timeline

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/b72bb02e-5bd9-46c7-827d-61f3513f63e3.png)

Enter the Animation Editing page

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/2ac3074a-d47e-48bd-b17e-7b3705998bd8.png)

Right-click on the node graph event track and select "Add Event," then select the node graph you want to add the event to in the box.

### (2) Creation Skill Node Graph

Supports Beyond and Classic modes.

Entry point: Creation Custom Skill Editing Page > Animation Editing > Timeline

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/dc9e7362-2942-41b4-b967-cc8fe5f8e2d5.png)

Enter the Animation Editing page

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/595bcb9b-dd3f-4e1b-9b5b-96ecddb194b0.png)

Right-click on the node graph event track and select "Add Event," then select the node graph you want to add the event to in the box.

## 6. Local Filter Node Graph

The local filter node graph is used in multiple components. The return value of the filter node graph determines whether the business logic should be applied. The filter node graph is divided into the following two types:

### **（1） Boolean Filter Node Graph**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/a4f5ba74-1bc9-42d5-bf63-aea4d7ec5239.png)

This type of node graph ultimately outputs a boolean result. When the result is TRUE, the business logic referenced by the node graph takes effect; when the result is FALSE, it does not take effect.

For example, using the on-hit detection component:

Entry point: On-Hit Detection Component > On-Hit Rules Page > Local Filter Node Graph

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/d02a1485-72ef-4818-8722-16ecf63c4c4a.png)

### **（2） Integer Filter Node Graph**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/a6c6dc25-ad50-4348-b5ff-18a1a79b8c53.png)

This type of node graph ultimately outputs an integer. Business logic that references this type of node graph supports configuring a list of integers. When the integer output by the integer filter node graph is included in the business configuration's integer list, the business logic takes effect.

For example, using the tab component:

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/3cc54403-9a41-469d-8953-88413a07c1ea.png)

## 7. Creation Status Decision Node Graph

Depending on different conditions or priorities, the creation will switch to different autonomous logical states. Entry point: Complex Creation > Specialized Configuration > Creation Status Decision Node Graph

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/2e1eb207-ce0b-4947-bb67-d90a05e5e55d.png)

## 8. Creation Status Node Graph

The specific actions performed by a creation in its current autonomous logical state are:

Entry point: Creation Status Decision Node Graph - Switch to Self-Execution Status node - Status Node Graph Configuration ID

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8k7r057pkg/255c5ff0-91bb-4909-8c68-fbd91a6c7831.png)

[Common Components](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhei6orvcbkm)
