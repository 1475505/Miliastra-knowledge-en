---
id: mhz70x0ra8u8
title: 3.3 Follow Motion Device: Create Items that Attach and Follow
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhz70x0ra8u8
language: en
scope: tutorial
crawledAt: 2026-05-31T15:52:14.345Z
---

# 3.3 Follow Motion Device: Create Items that Attach and Follow

# Introduction

## Course Description:

**Course Content:**Configuration and usage of [Component - Follow Motion Device]

**Learning Objectives:**Learn to use the Follow Motion Device to create items with attachment or constant-speed following effects, which can be used for character weapon pick-up, performing follow-up placement skills, loot absorption, and other effects.

_**This course covers two connected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course materials in sequence for better understanding._

## Relevant Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Required Knowledge:**The course involves the following basic concepts: _(Recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)._

> [Follow Motion Device Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mht0fviz1u04)

* * *

# Follow Motion Device - Making Objects Attach or Follow

## Feature Example 1: Automatically Pick Up Nearby Items When Character Enters a Certain Range

### 1. Concept Overview

**Follow Motion Device:**By configuring follow target and tracking type, objects can follow certain units according to specific patterns.

### 2. Course Content

**Feature Effect:**When the character enters a certain area, they can automatically attract nearby items.

**Effect Demonstration:**

_For a more intuitive demonstration, this tutorial is shown from a top-down view._

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/8c7ae7cf30134178ae719c902796fdb8_1757675210.gif)

### 3. Steps to Follow

**1. Using [In-Game Editor] to Add Components**

Create a prefab as an interactive object (The tutorial uses Challenge Coins as an example). Select ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/59bcf926c299458283a2e5ad10bff0f0_1757675212.png) to enter the Component page. Click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/013e068b19104182beace5148aed8485_1757675212.png) and select [Follow Motion Device] to add it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/93ae68e5810841728cb13c248f2d41af_1757675212.png)

**2. Using [In-Game Editor] to Add Triggers**

After opening [Component - Follow Motion Device], a follow motion device with no follow target is configured by default. To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Items follow and are not completely attached Set [Tracking Type] to constant speed tracking.
Follow at a certain speed Increase the value of [Initial Speed].

**The actual configuration of including initial speed, acceleration, acceleration duration, etc. can be adjusted accordingly.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/37ef8f9ac311450490c42812b5c460a5_1757675212.png)

**Since the required following feature is not enabled by the default configuration but under the specific condition "When entering a certain range", no additional configuration is needed for the initial preset here. It can be adjusted in the subsequent node graph (which will override the in-game editor settings).

**3. [In-Game Editor] Configuration of Collision Trigger Areas as Trigger Conditions**

Add [Component - Collision Trigger] and add two triggers: One for detecting pick-up range to make items follow, and one for detecting successful pick-up to destroy the item (i.e. when player successfully picks up an item).

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Trigger 1

Detect pick-up range for item following Only player units can trigger pick-up (objects/creations (monsters) entering the area won't pick up items)Set [Effect Target] to character only
Players can pick up items when nearby Increase [Zoom Multiplier]
Trigger 2

Detect pick-up and destroy item Only player units can trigger pick-up (objects/creations (monsters) entering the area won't pick up items)Set [Effect Target] to character only
Item successfully picked up when in contact with player Decrease [Zoom Multiplier]

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/bf2a8d5430554f11b02e4bdc18973c16_1757675213.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/18d51ba78d1641429c75d05ac0c9b3af_1757675213.png)

**4. Configurating [Miliastra Sandbox] Node Graph**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Feature 1

Item is attracted when player is within range Trigger Scene Attraction enabled upon entering range[Event Node]: When entering the collision trigger (triggered by touching the configured area from the outside)
Condition Enter attraction range[Flow Control Node]: Use [Multiple Branches] to check Trigger ID.

_**Trigger 1: Wider range, used for attraction._
Result Item follows player[Execution Node]: Use [Switch Follow Motion Device Target] to make items around the player follow them.

_**Since [Character] does not have a GUID, you need to get the [GUID of character's player] for following._
Feature 2

Player successfully picks up items nearby Trigger Scene Can be picked up when in close contact[Event Node]: When entering the collision trigger (triggered by touching the configured area from the outside)
Condition Enter pick-up range[Flow Control Node]: Use [Multiple Branches] to check Trigger ID.

_**Trigger 2: Narrower range, used for pick-ups._
Result Pick up item[Execution Node]: Use [Destroy Entity] to create collection effect.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/9abbb91ac6b94282b69b08b2f6b87c81_1757675213.png)

**5. Using [In-Game Editor] to Mount Node Graph**

Mount the configured node graph on this prefab and save the prefab settings.

**6. Using [In-Game Editor] to Place the Prefab and Test Gameplay**

Place the modified prefab in the scene and enter Test Mode to experience this feature.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/97d1d36b72fe416ab46b55bc7da81e34_1757675213.gif)

_**For more information, please refer to [Comprehensive Guide - Follow Motion Device Component]._

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following features based on the course content.

> **Feature Replication:**Create a follow item that constantly follows the player.
> 
> 
> **Advanced Extension:**Create a magnet item that attracts nearby objects when used (no attraction without usage).

**Course Review:**Learn how to configure the follow movement device, which can be used to create items or placement-type mechanism skills that attach to or follow specific targets.

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Follow Motion Device].

![Image 11](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Follow Motion Device.gil

21 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv401iiwlxw/77e7f474355b441cbb7b93f092d88c38_1757675210.gil)

[3.2 Timer: Events Triggered at Specific Times](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhq8ew91dx8i)[3.4 Custom Attachment Point: Preset Points That Can Follow Movement and Rotate](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh85mxrh6kfy)
