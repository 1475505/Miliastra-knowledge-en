---
id: mh93rq9zhueq
title: 2.4 Basic Motion: Making Objects Move
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh93rq9zhueq
language: en
scope: tutorial
crawledAt: 2026-05-31T15:49:42.636Z
---

# 2.4 Basic Motion: Making Objects Move

# Introduction

## Course Description:

**Course Content:** How to use [Component > Basic Motion Device]

**Learning Objectives:** Learn to use the basic motion device to make objects move, which can be used to create moving mechanisms, prop visuals, or decorative elements (achievable through custom motion rules, which will not be enumerated in this tutorial)

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read fully in sequence for better understanding._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If course details are unclear or if you'd like additional information, please refer to the_**_[Comprehensive Guide]_**_as needed._

**Prerequisite Courses:**This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)

**Required Knowledge:**The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)_

> [Components](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhrxco0iu7dk)
> 
> 
> [Basic Motion Device Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhja29rn3ygu)

* * *

# Basic Motion Device: Making Objects Move in Specific Patterns

## Feature Example 1: Creating a Shuttling Mechanism

### 1. Concept Overview

**Basic Motion Device:** Configure motion rules to make objects move in certain patterns (e.g., uniform linear motion, uniform rotational motion, etc.)

### 2. Course Content

**Function:** Create an object that moves back-and-forth continuously (this function can be implemented through panel configuration alone without node graph), which can be used as a moving platform in parkour/puzzle gameplay; in practical applications, it can be used to create mechanisms such as large pendulums and roller coasters

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/0135406daafa426699778b64e00c8082_1757675679.gif)

### 3. Steps to Follow

**1. Using [In-Game Editor] to Add Components**

Create a prefab as an interactive object (this tutorial uses a moving platform as an example), then on the panel, click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/30fb94fe74fe4a6d8b3c6e3c6358ab73_1757675680.png) on the components page, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/7e96392592854affa28181e939681624_1757675680.png) and select [Basic Motion Device] to add it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/8b85c8cc420b4002ad4def223aca4d5e_1757675680.png)

**2. Using [In-Game Editor] to Add Triggers**

After opening [Component > Basic Motion Device], there are no motion devices by default, so you need to select ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/dc0d72ac2b71433099925ca35a6944e5_1757675680.png) to add a motion device (multiple motion devices can be added simultaneously to create combined motion effects).

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/4492eb76d06047808b514c797c984cdd_1757675680.png)

**3. Using [In-Game Editor] to Configurate Panel Parameters**

Configure the rules for the basic motion devices, then save prefab settings.

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Platform moves continuously after creation (no special trigger conditions)Enable [Initially Effective]
Platform moves back and forth along a specific path Set [Movement Type] to Path Movement

Configure movement positions and movement time with [Waypoint]
Platform moves in a loop Set [Loop Type] to Loop

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/1d5ff1c34a2e417d9efb23cd2c1296d3_1757675680.png)

After configuration is complete, you can preview the current motion device on this interface.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/d6eebd0f3ae5412f90e676190c55d818_1757675681.gif)

Additionally, you can configure the rules of basic motion devices such as [Motion Type] and [Motion Speed] on the panel, or combine multiple motion devices to achieve complex motion effects, which can be adjusted freely as needed in actual use.

_**Configuration Item Description:_

_Motion Type: Currently 4 types are supported, which are [Uniform Linear Motion], [Uniform Rotational Motion], [Target-Oriented Rotational Motion], and [Path Movement]; additionally, different types can be stacked together (special note: [Uniform Rotational Motion] and [Target-Oriented Rotational Motion] cannot be stacked together)._

**4. Using [In-Game Editor] to Place the Prefab and Test Gameplay**

Place the modified prefab in the scene and enter Test Mode to experience this feature.

**For more information, please refer to [Comprehensive Guide > Basic Motion Device Component].

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Stepping on a specific platform to open the gate; stepping off a specific platform to close the gate

**Feature Description:** When the player steps on a specific platform (enters a certain area), the gate opens; when the player steps off a specific platform (exits a certain area), the gate closes

**Effect Demonstration:**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/19d6c91e7d44424fa57f58db93eaa4ff_1757675682.gif)

**Implementation Steps:**

1. Create a Prefab A as a gate

2. On Prefab A, select [Components > Basic Motion Device] to add 2 motion devices for opening and closing the gate separately; then configure their motion type as [Uniform Linear Motion], and adjust its time and speed as needed (see recommended settings in the image below)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/9b43eee3fcf74a47a8a8ee2e2483809d_1757675678.png)

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/4032fac6e70e4e85b6ff77b20e260951_1757675678.png)

3. Click [Preview Current Motion] to see if the motion effect meets your expectations; if it does, save the settings

4. On Prefab A, add a custom variable named [Gate Open State], set the type to [Boolean], and set the initial value to [No] (you can adjust this freely based on your needs)

**Additional Note: Since only open/closed states are involved, to prevent errors caused by repeatedly triggering open/close events in Co-Op Mode, an additional custom variable is used to manage the gate's state.

5. Create Prefab B as a trigger

6. On Prefab B, add [Components > Collision Trigger] and configure the trigger area

7. Place Prefab A in the scene and record its GUID (note that this is the GUID of the object in the scene, not the prefab ID)

8. Configure the node graph of Prefab B (see recommended settings in the image below); to achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Feature 1

Enter area to open gate Trigger Scenario When stepping on the trigger[Event Node]: When entering the collision trigger (triggered by touching the configured area from the outside)
Condition Gate is not open[Flow Control Node]: Check if the gate status is "Not Open" (custom variable, Gate Open = No)
Result 1 Gate opens[Execution Node]: Use [Activate Basic Motion Device] to activate the door opening motion device
Result 2 Cannot retrigger gate opening during/after gate opening[Execution Node]: Set the gate state to "Opened" (custom variable, Gate Open = Yes)
Feature 2

Exit area to close gate Trigger Scenario When stepping off the trigger[Event Node]: When leaving the collision trigger (triggered by touching the configured area from the inside)
Condition Gate is open[Flow Control Node]: Check if the gate status is "Opened" (custom variable, Gate Open = Yes)
Result 1 Gate closes[Execution Node]: Use [Activate Basic Motion Device] to activate the door closing motion device
Result 2 Cannot retrigger gate closing during/after gate closing[Execution Node]: Set the gate state to "Not Open" (custom variable, Gate Open = No)

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/468e85c5ceec4e0b8c4d19e29bf069f0_1757675679.png)

Additionally, you can use the node creation function on other basic motion devices to achieve effects such as triggering certain effects by opening a door and using time-stop skills to pause object movement.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/955de6dc23724788af3aa15d14975185_1757675679.png)

9. Mount the node graph on Prefab B and save the settings

10. Place Prefab B in the scene

11. Enter Test Play to experience this feature

* * *

# Course Summary and Supplementary Materials

**Course Assignment:** Try to recreate/innovate the following features based on the course

> Feature Recreation: Create a door that requires a "key" to open
> 
> 
> Advanced Extension: Achieve combined movements such as casting a fishing rod or flipping food in a pan by combining multiple motion devices

**Course Review:** Learn how to use [Component > Basic Motion Device] to apply motion to objects (so they would move in specific patterns) to create various motional mechanisms or props

### Supplementary Materials

We have provided the project files related to the above lessons, which can be studied in conjunction with **[Tutorial File > Basic Motion]**.

![Image 15](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Basic Motion.gil

28.9 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhusw7ia36ro/d86abdc5fa6440068aae1ec63c7fb1be_1757675679.gil)

[2.3 Camera Settings: The Game From Different Perspectives](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhi2dr0pe60g)[2.5 VFX: Enriching Your Effects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh055pi9lit0)
