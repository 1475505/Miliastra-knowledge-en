---
id: mh85mxrh6kfy
title: 3.4 Custom Attachment Point: Preset Points That Can Follow Movement and Rotate
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh85mxrh6kfy
language: en
scope: tutorial
crawledAt: 2026-05-31T15:52:20.927Z
---

# 3.4 Custom Attachment Point: Preset Points That Can Follow Movement and Rotate

# Introduction

## Course Description:

**Course Content:**How to use [Component - Custom Attachment Point]

**Learning Objective:**Learn to use custom attachment points to add preset points to prefabs/creations (monsters)/characters or use native points for generating items/effects at specific locations in certain scenes.

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course materials in sequence for better understanding._

## Relevant Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(First-time users are recommended to study_**_[Prerequisite Courses]_**_for a smoother learning experience.)_

> [3.1 Custom Variables: Switch Object Presentation Under Specific Conditions](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhflri07dzd4)
> 
> 
> [3.3 Follow Motion Device - Create Items that Attach and Follow](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhz70x0ra8u8)

**Required Knowledge:**The course involves the following basic concepts: _(Recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)._

> [Attachment Points](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhmnxdib95as)

* * *

# Custom Attachment Points: Entity's Skeleton or Specified Locations

## Feature Example 1: Generate effects at different positions on objects to guide players to pick them up

### 1. Concept Overview

**Custom Attachment Points:**Can use native points or add custom positions, commonly used to attach other units or effects at specific locations in certain scenarios (e.g. generating flames on character's hands, creating light effects at the bottom of objects).

### 2. Course Content

**Feature Effect:**Create item guide effects (This function can be fully configured through the in-game editor).

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/06526063dbf2418e8936c989468fdb23_1757675219.gif)

### 3. Steps to Follow

**1. Using [In-Game Editor] to Add Components**

Create a prefab (This tutorial uses Chisel as an example). Select ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/c9f11ea1-43df-49c7-bd14-aa45e5159a6e.png) to enter the Component page. Click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/fa42992e15a645e89f6c83124f046a66_1757675219.png) and select [Custom Attachment Point] to add it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/4737a84eb4b34d528725bd87020d8657_1757675219.png)

**2. Using [In-Game Editor] to Add Attachment Points**

After opening [Component - Custom Attachment Point], you will see default native attachment points (objects only have root nodes, while creations (monsters) and characters have different skeleton nodes). Click to add custom attachment points. Their names and position offset/rotation can be modified.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/71914331cf4e44a2a2a4c8ee5e29e098_1757675220.png)

**3. Add VFX in [In-Game Editor]**

In [Component - VFX Playing Group], add effects and bind them to different attachment points. During actual production, you can adjust the offset/rotation accordingly.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/e6d10cd7a3c148da92750eff25dbc696_1757675220.png)

After completing the configuration, you can preview the effects directly in the special effects interface.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/fa7e8554111e4e9b86992518c804121f_1757675220.gif)

**4. Using [In-Game Editor] to Place the Prefab and Test Gameplay**

Place the modified prefab in the scene and enter Test Mode to experience this feature.

_**For more information, please refer to [Comprehensive Guide - Attachment Point]._

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Generate an item at a specific character position after pickup

**Feature Description:**Players can pick up items, which will be attached to the character's hand after pickup, highlighting the pickup effect.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/6a25203b61d743f0a353146f1ea8dd23_1757675220.gif)

**Implementation Steps:**

1. Create a collectible object (the tutorial continues to use the rake from Function Example 1), add [Components - Tabs], configure the "Pick Up" option, and set up an appropriate option trigger area.

2. Create 1 clone object that will be added to the player upon pickup, add [Components - Follow Motion Device] (no additional configuration needed here, will be controlled through the node graph later).

3. [Player] configures [Components > Custom Variables], and adds 1 custom variable with the following parameters:

Input "Variable > Pickup Tool Is" to trigger events after variable changes.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/4da71a06931a4220af6788fffe089398_1757675221.png)

4. Configure the "pickup" effect for the tool's node graph (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configurations
Function

Destroy original item after pickup, trigger player pickup event Trigger Scene After interaction Event Node: When the Tab Is Selected (triggers when "any" interaction option is selected)
Condition 1//
Result 1 Trigger follow-up event after pickup[Execution Node]: Change [Player] variable "Equipped Tool" to "Rake"
Result 2 Item disappears after pickup Execution Node：Destroy the item picked up

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/755fe6ce8a6f4b91b193844a79a11b9d_1757675218.png)

5. Configure the item pickup effect for [Player] node graph (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configurations
Function

Destroy original item after pickup, trigger player pickup event Trigger Scene After player picks up an item

Pre-trigger through custom variable change Event Node: When custom variable changes
Condition 1 The item picked up is "Rake"Flow Control Node: Use [Double Branch] to check the new value, and execute subsequent actions when the new value is "Rake"
Result 1 Generate new item after pickup[Execution Node]: Use [Create Prefab] to create a new item in the original position
Result 2 New item attaches to player's hand[Execution Node]: Use [Switch Follow Motion Device Target] to make the newly created item follow the player's "RHand" attachment point, and configure appropriate offset and rotation

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/82484b52a0254062a937d9e8a8db5abe_1757675219.png)

6. Mount the corresponding node graph on Prefab and Player, and save the settings.

7.

Place the created prefab in the scene and enter the Test Mode to experience the functions.

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Based on the course content, try to replicate/innovate the following features.

> **Feature Replication:**After collecting fruit, generate the collected fruit in front of the player.
> 
> 
> **Advanced Extension:**When collecting multiple fruits, the fruits generated in front of the player gradually stack up.

**Course Review:**Learn to configure custom attachment points by using native or preset points for attaching props or effects.

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Custom Attachment Point]

![Image 13](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Custom Attachment Point.gil

19.6 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhm5e0rt0ac6/7680cb64-e9ac-4076-b54d-335af4878dbe.gil)

[3.3 Follow Motion Device: Create Items that Attach and Follow](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhz70x0ra8u8)[3.5 Unit Status: Applying Buff and Debuff Effects to Objects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhtbbb9hr32y)
