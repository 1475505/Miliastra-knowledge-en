---
id: mhflri07dzd4
title: 3.1 Custom Variables: Switch Object Presentation Under Specific Conditions
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhflri07dzd4
language: en
scope: tutorial
crawledAt: 2026-05-31T15:51:58.696Z
---

# 3.1 Custom Variables: Switch Object Presentation Under Specific Conditions

# Introduction

## Course Description:

**Course Content:**How to use [Component - Custom Variable]

**Learning Objectives:**Learn to use custom variables to add tags to prefabs/creations (monsters)/characters/players for executing effects under specific conditions (e.g. player has a variable: Boolean "Equip/Do Not Equip Item" to determine if they can pick up items, land has an variable: Integer "Land Level" where different operations are allowed based on levels, i.e. Level 0 only allows tilling, Level 1 only allows planting).

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course materials in sequence for better understanding._

## Relevant Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

Required Knowledge: The course involves the following basic concepts: _(Recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)._

> [Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhiyqn9sxvru)

* * *

# Custom Variables: Adding a Specific Tag

## Feature Example 1: Checking Land Level-Up Sequence, Determining Current Land Level, Specific Operations Only Allowed at Specific Levels

### 1. Concept Overview

Custom Variables: These are specified values used to store data values and transfer data within node graphs. Variables have different data types that determine the type and range of data they can store.

_For example, Integer - Int (1, 2, 3...), Floating Point - float (1.0, 1.1, 1.2...), Strings, Boolean - bool (Yes, No), etc. Variables can also be of list type, which is a collection of a series of variables._

### 2. Course Content

**Function:**Create a land foundation for farming that can be levelled up in the sequence "Uncultivated → Cultivated → Seeded → Watered". Different levels have different appearances, and level-ups must follow a fixed order (e.g. cannot directly transit from uncultivated to seeded state).

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/723bc14eabab4552a02a019cf6775411_1757675197.gif)

### 3. Steps to Follow

**1. Using [In-Game Editor] to Add Components**

_**Component - Custom Variables are included by default. This section only demonstrates how to add them back if accidentally deleted._

Create a prefab as farming land (This tutorial uses an empty object as an example). Select ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/08ca3737d20f4451b099876c18de37fc_1757675197.png) to enter the Component page, then click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/75a3ae249a89441eb581ffba6b807e34_1757675198.png) and select [Custom Variables] to add it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/bf6d47813c284cad8bca40e39f239407_1757675198.png)

**2. [In-Game Editor] Adding Custom Variables**

After opening [Component - Custom Variables], there will be no custom variables by default. Select "Add Variable" below to add variables (select the desired number and variable types).

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/cb4f47ca9f8b42eaa87b82b73f83814e_1757675198.png)

**3. Using [In-Game Editor] to Configure Panel Parameters**

After adding variables, you can adjust their names, types, and initial values. To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Variable name settings, used for node graph configuration Change [Variable Name] to "Land Level"

_**The variable name does not affect its function. It is only used for node graph configuration and indexing. You may freely define the name for easy reference._
Land has 4 levels of "Uncultivated → Cultivated → Seeded → Watered"Change [Variable Type] to "Integer".

_**Using "Floating Point" or "String" will also work. This configuration is just for easier calculation. You can configure it according to your preference._
Land starts in the "Uncultivated" state Set [Initial Value] to 0.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/0abb0fde30544e688274a3d22967c0be_1757675198.png)

**4. [In-Game Editor] Choosing Land Level-Up Effects**

In the tutorial demonstration, different prefabs or special effects are generated at empty object positions to represent land upgrade effects. During actual production, you can choose the required prefabs or special effect configurations according to your needs.

_**Remember the prefab ID and effect ID for subsequent node graph configurations._

Configuration reference in tutorial:

Land Level 0: Empty Objects Only

Land Level 1: Create Prefab - Generate Soil

Land Level 2: Create Prefab - Generate Seeds

Land Level 3: Add Effects - Watered State

**5. [In-Game Editor] Adding of [Component - Tab] as Trigger Event for Land Upgrades**

[Component - Tab] is selected here for easy demonstration purposes only. In actual production, this can be adjusted (e.g. Triggering upgrades when using specific items: A hoe can upgrade land from Uncultivated → Cultivated; Seeds can upgrade land from Cultivated → Seeded; A watering can can upgrade land from Seeded → Watered).

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Land upgrades involve three trigger events: "Cultivation", "Seeding", and "Watering"Set [Tab] quantity to 3, corresponding to three operations.
Optional operations after entering a certain area Configure an appropriate size for the [Option Trigger Area].

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/2fbe28d752424bb5be8c5a3dc7024c3a_1757675199.png)

**6. [Miliastra Sandbox] Node Graph Configuration**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, the tutorial configures it as follows:

**This node graph is mounted on the Cultivate grid prefab

Features to Implement Corresponding Configuration Items
Feature

After the player performs an operation on the land, check what operation it is and the land level. If both meet the requirements, increase the land level.Trigger Scene Event triggered after selecting a tab.[Event Node]: When tab is selected
Condition 1 Different operations trigger different effects[Flow Control Node]: Use multiple branches to check "Option ID"

_**In this tutorial, option numbers correspond to:_

_Number 1 - Cultivate Land_

_Number 2 - Plant Seeds_

_Number 3 - Water Plants_
Condition 2 Land upgrades must follow a fixed order and cannot skip levels[Flow Control Node]: Use binary branch to check the current custom variable "Land Level". Only land meeting the conditions can be upgraded (i.e. Level 0 land can only be cultivated, Level 1 land can only be seeded, Level 2 land can only be watered).
Result 1 Adjust land appearance based on different operations[Execution Node]: Use [Create Prefab] or [Mount Effect] to create land upgrade visual effects.
Result 2 Adjust land level based on different operations[Execution Node]: Use [Set Custom Variable] to change the custom variable "Land Level" on the land to the next level.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/f41051b2d65142dc941bc15e388af45d_1757675199.png)

7. Using [In-Game Editor] to Mount Node Graph

Mount the configured node graph on this prefab and save the prefab settings.

8. Using [In-Game Editor] to Place the Prefab and Test Gameplay

Place the modified prefab in the scene and enter Test Mode to experience this feature

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/ad4d8ce1081d4cc793c0715fc6ccf6f4_1757675199.gif)

_**For more information, please refer to [Comprehensive Guide - Component - Custom Variable]._

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Detection of item pick-up - Item cannot be picked up when already holding an item, the held item can only be switched.

**Feature Description:**The 3 items can be "picked up" and "switched". When you are not holding an item, you can pick it up. After picking up an item, you can only switch between items.

**Effect Demonstration:**

_This example demonstrates preliminary effects, with successful pickup/switch actions shown through UI text. During actual production, special effects or item-dependent behaviors can be added and adjusted._

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/ae6a6845e2424a53a506488f60b79264_1757675196.gif)

**Implementation Steps:**

**1. Create 3 different item objects. Add [Components - Tab]. Configure the options "Pick up" and "Switch". Set up appropriate option trigger areas.**

**2. [Player] configures [Components > Custom Variable], and adds 2 custom variables with the following parameters:**

_Variable 1 - Has Tool or Not, used to determine whether the player can "Pick Up" or "Switch" items._

_Variable 2 - Currently equipped tool, used to determine the player's current item, after "Switch", the originally equipped item will be placed in its original position._

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/ec0f43e49e0b4dd293999d30bd60014e_1757675197.png)

**3. Configure the node graph for "Pick up"/"Switch" item effects (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:**

_**Since the logic for all 3 items is consistent, there is only the determination of the differences between the generated items and the switched equipped items in the player's inventory. This tutorial will use rake as an example._

Features to Implement Corresponding Configuration Items
Feature

Can pick up item when no item is held. When an item is already held, can only switch items and put down the initial item.Trigger Scene After interaction Event Node: When the Tab Is Selected (triggers when "any" interaction option is selected)
Condition 1 Determine player's operation[Flow Control Node]: Use multiple branches to check "Option ID"

**In this tutorial, option numbers correspond to:

Number 1 - Pick up

Number 2 - Switch
Condition 2 Determine whether the player has picked up the item[Flow Control Node]: Use binary branch to check [Player] variable "Has Tool or Not".
Result 1 Pick up item when there is no item. Item disappears when picked up.[Execution Node]: Change [Player] variable "Has Tool" to "Yes" and "Equipped Tool" to "Rake".

[Execution Node]: Destroy the picked up item
Condition 3 When switching, generates old items based on the items picked up by the player.[Flow Control Node]: Use multiple branches to check [Player] variable "Currently Equipped Tool"
Result 2 When switching to a new item with an existing item, the current item disappears and the old item is generated in the original position.[Execution Node]: Use [Create Prefab] to generate the prefab corresponding to the player's equipped tool in the original position.

[Execution Node]: Change the [Player] variable "Equipped Tool" to "Rake".

[Execution Node]: Destroy the item picked up

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/22e54176e605453d99dbf3aa721a7cce_1757675197.png)

**4. Mount the node graph on the corresponding prefabs and save the settings.**

**5. Place the created prefabs in the scene and enter the Test Mode to experience the functions.**

* * *

# Course Summary and Supplementary Materials

Course Assignment: Try to replicate/expand the following features based on the course content.

Feature Replication: Create a door that requires a key to open.

Advanced Extension: Create 3 tools: rake, seeds, and watering can, which can perform different operations on the land (cultivating, seeding, watering). Players can only perform corresponding operations when they have the specific tools.

Course Review: Learn to configure different types of custom variables as corresponding tags to create more complex conditions.

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Custom Variables].

![Image 14](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Custom Variables.gil

23.4 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd1830yp95c/03a50be6-2972-4490-81d4-c631389f52ee.gil)

[3.2 Timer: Events Triggered at Specific Times](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhq8ew91dx8i)
