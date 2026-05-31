---
id: mhhe9ji9ysn8
title: 3.18 Outline and Transparency Effect: Richer Guidance Effects for Entities
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhhe9ji9ysn8
language: en
scope: tutorial
crawledAt: 2026-05-31T15:51:42.071Z
---

# 3.18 Outline and Transparency Effect: Richer Guidance Effects for Entities

# Introduction

## Course Description:

**Course Content:** Usage of special unit states "Outline" and "Transparency Effect"

**Learning Objectives:** Learn how to configure "Outline" and "Transparency Effect" to create in-game guidance features (such as: wall-penetrating effect, interactive outlines, team outlines, creation (monster) outlines, etc.))

_**This course covers two interconnected modules:_ _[In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]_ _. It is recommended to follow the course structure and read through all sections in sequence._

## Related Information:

**Recommended Learning Sequence:** [Prerequisite Courses] → [Current Course]

**Prerequisite Courses:** This course relates to the functional knowledge points covered in the following prerequisite courses _(It is recommended to prioritize learning the_**_[Prerequisite Courses]_**_for a smoother learning experience during initial use)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)
> 
> 
> [3.5 Unit Status: Granting Buffs or Debuffs to an Object](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhtbbb9hr32y)

* * *

# Outline Effect: Differentiated Entity Visualization

## Function Example 1: Add Green Outline Effect to Interactive Objects

### 1. Concept Overview

**Outline Effect:**A special type of [Unit Status] that, through outline color configuration, can create differentiated visual effects such as: adding outlines to interactive objects or applying outlines to characters based on their team affiliation.

### 2. Course Content

**Functionality:**Create a green outline effect to be added to objects that are currently interactable. This means when a character approaches the object, a green outline is added.

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/4a4689d7-3f88-480e-97b3-11be33b53001.gif)

### 3. Step-by-Step Guide

**1. [In-Game Editor] Add Unit Status**

Create a new status as an HP-increasing buff status. In the panel, click![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/777058c4-cb50-4106-82f0-e0aa62394045.png)>>>enter Combat Preset, click![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/fb39b96a-4a07-4a5b-9227-1f28db81d694.png)>>>select![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/a8bac219-67f3-458a-9070-4b264e3ca954.png) to add it

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/7b581e57-5b40-4166-bcb1-505eb3518449.png)

2.

**[In-Game Editor] Creating "Outline" Effects**

After adding the status, you can adjust its name, Maximum Stack Layers, Duration, Status Rules, and other parameters. To achieve the desired functionality, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
General Information Status duration has no upper limit[Infinite Duration]: Enabled
Effect Details Outline Effect Select [Enable Outline Effect]
Green outline Select [Custom Color] and set it to "Green"

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/edfa0e94-5c57-439a-905b-8283d8a8f017.gif)

**3. [In-Game Editor] Create Differentiated Objects and Trigger Effects (Collision Trigger Component)**

Create 3 different objects (the tutorial uses a Hammer, Shovel, and Hoe as examples), add the [Collision Trigger] component, and configure the trigger shape/size. To achieve the expected functionality, the tutorial uses the following configuration:

_**The 3 objects only differ in their models, all other configurations are exactly the same. The tutorial uses the Hammer as an example_

Features to Implement Corresponding Configuration Items
Appropriate trigger shape/size[Shape]: Set to "Sphere"

[Radius]: Set to "1"

_**The tutorial uses the sphere's default settings, this is just for demonstration_

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/6e217a3b-1643-4403-afdf-f8015a5ef15e.png)

**4. [Miliastra Sandbox] Configure node graph**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, the tutorial configures it as follows:

**This node graph is mounted on [Object Prefab].

Features to Implement Corresponding Configuration Items
Feature 1

Add outline effect to operable objects when player enters certain range Trigger Condition Trigger event when entering certain range[Event Node]: When entering collision trigger
Condition//
Result Add outline effect[Execution Node]: Use [Add Unit Status] to add green outline effect
Feature 1

When player enters a certain range, interactive objects will display outline effect Trigger Condition Trigger event when exiting certain range[Event Node]: When exiting collision trigger
Condition//
Result Remove outline effect[Execution Node]: Use [Remove Unit Status] to remove green outline effect

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/d5ee71a1-a67a-401a-be49-86bc3743a311.png)

**5. [In-Game Editor] Mount Node Graph**

Mount the configured node graph on three different prefabs and save the prefab settings

**6. [In-Game Editor] Place Prefabs and Test Play**

Place the modified prefab in the scene and enter Test Play Mode to experience this feature.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/a7dfc553-6deb-4bb4-aee3-c55e5ecaa8ec.gif)

# Transparency Effect: Wall-Penetrating Entity Visualization

## Function Example 2: Add Transparency Effect to Specific Objects

### 1. Concept Overview

**Transparency Effect:**A special type of [Unit Status] that can create differentiated visual effects such as making specific objects transparent and creating transparent skills by configuring Transparency effect colors and filtering node graphs.

### 2. Course Content

**Functionality:**Creates a white Transparency effect and apply it to specific objects. When walls or other solid objects block the line of sight between a character and the object, the object becomes visible through the obstacles.

**Effect Demonstration:**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/8bed1e12-7ef6-4f84-a224-1f22ea49d96b.gif)

### 3. Step-by-Step Guide

**1. [In-Game Editor] Add Unit Status**

Create a new status as an HP-increasing buff status. In the panel, click![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/457faddb-2b56-497c-849f-bea75f3e0aa7.png)>>>enter Combat Preset, click![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/be256f20-14db-4589-9aff-90ae9e423ff6.png)>>>select![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/6e3e8075-653a-463f-a1ad-5290d9b0ae46.png) to add it

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/09b605f4-f1ab-4baa-a606-b3de0aefe422.png)

2.

**[In-Game Editor] Create "Transparency" Effect**

After adding the status, you can adjust its Name, Maximum Stack Layers, Duration, Status Rules, and other parameters. To achieve the desired functionality, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
General Information Status duration has no upper limit[Infinite Duration]: Enabled
Effect Details Transparency Effect Select [Enable Transparency Effect]
Transparency Color: White Select [Custom Color], Set to "White"

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/d6af3d5e-ab11-44cb-acf2-2f34e5e72982.gif)

**3. [In-Game Editor] Create Objects with Transparency Effect**

Create an object with Transparency Effect (using a Torch as an example in this tutorial). Simply add the pre-configured status to the [Unit Status]

_**This demonstration simply shows the direct application of the effect. During actual development, you can flexibly configure the Transparency duration and select specific objects for Transparency effect based on stage design needs._

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/2da29311-c746-415e-af29-694cc4ce9c2c.gif)

**6. [In-Game Editor] Place Prefabs and Test Play**

Place the modified prefab in the scene and enter Test Play Mode to experience this feature.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/ca8f96b4-5757-4f33-a704-53eb0ca2f5a3.gif)

* * *

# Course Summary and Supplementary Materials

**Course Assignment:** Based on the course content, try to recreate/expand the following features

> **Feature Replication:** Create Elemental Sight effect, after activating the skill, you can see the outline effects of different objects

**Course Review:** Learn how to create [Outline] and [Transparency] effects, and apply these statuses to specific entities when needed, and produce various objects and skills with differentiated visual presentations.

### Supplementary Materials

We provide project files related to the above course content. You can use the [Teaching Archive: Outline and Transparency Effect] for comparative study.

![Image 19](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Outline and Transparency Effect.gil

35.1 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhc86jihqgf8/a968b27c-bf0a-4762-8acb-69d210ebaa4d.gil)

[3.17 Mini-Map Markers: Dedicated Markers for Displaying Entity Locations on the Map](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhw6purbjsrq)
