---
id: mh8wpr0h7ywg
title: 3.9 Ability Unit: Combat Components with Preset Attributes
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh8wpr0h7ywg
language: en
scope: tutorial
crawledAt: 2026-05-31T15:53:04.960Z
---

# 3.9 Ability Unit: Combat Components with Preset Attributes

# Introduction

## Course Description:

**Course Content:**Creation and application of ability units

**Learning Objectives:**Learn how to configure ability units to create mechanisms

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [2.8 Skill Settings: Make Your Characters Attack](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0apmie08e4)

**Prerequisite Courses:**The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)_

> [Ability Unit](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh751b943foa)

* * *

# Ability Unit: Creating Mechanisms with Combat Attributes

## Feature Example 1: Using Ability Units to Create Damage-Dealing Mechanisms

### 1. Concept Overview

**Ability Unit:**Encapsulated special abilities (such as: attack, destroy, play effects, etc.) that can be applied quickly by directly modifying the parameters

### 2. Course Content

**Feature:**Create a thorn that deals damage when approached

**Effect Demonstration:**![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/84f6a2a621654c8495f49cc73416c558_1757675260.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Add ability unit**

Create a mechanism that's used to deal damage (thorns are used as an example in the tutorial). In the objects panel, click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/a5a976f5-7c71-460d-81ac-f2fdedcf2afe.png)>>> Enter the Combat Attributes page and look for [Ability Unit] >>> Select [Advanced Editing] >>> Click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/7f31da36-732b-4b28-856b-89243b91280f.png) to add a new ability unit.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/6bc73947f9ed4264a871d6fa9522b45a_1757675261.png)

**2. [In-Game Editor] Configure panel data**

In the new ability unit, click the ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/4461a0ab-e73f-4bf3-8bae-47bfb313553f.png) next to the name to rename. Since subsequent node graph calls to the [Name] of the ability unit, renaming makes it easier for future management and calls (renamed as "ThornAttack" in the tutorial, but you can change it freely based on your needs during actual creation).

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/8a8bab6ab13348108527b311de5a48bd_1757675261.png)

Next, you can select the specific ability unit in [Ability Unit Type]. In the tutorial, we use thorn damage dealt to players as an example, therefore "Direct Attack" is selected.

Ability Unit Type Corresponding Ability Description
Hitbox Attack Initiates a hitbox attack based on a specified target or position. When the attacking hitbox collides with an entity's hurtbox, it triggers an attack on that entity
Direct Attack Launch a direct attack against the specified target
Heal HP Restore a certain amount of HP to the target

After defining the ability unit type, you can configure specific attack parameters. The configuration for this demonstration is shown below. The values can be modified based on actual needs.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/d07e07c6faa844158e40ddbee74dba09_1757675261.png)

**3. [In-Game Editor] Configure collision triggers**

The ability unit depends on trigger events. In this tutorial, we'll use [Trigger after Player approaches a specific area] as an example and configure a collision trigger on the thorns.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/ec288c3be8e446fc87c6f43e2b874a46_1757675262.png)

**4. [Miliastra Sandbox] Attack After Entering the Collision Box**

In the tutorial, we use the "When Entering Collision Trigger" event to trigger ability unit calls.

Features to Implement Corresponding Configuration Items
Feature

Take thorn damage when entering the area Trigger Scenario Enter trigger area[Event Node]: When entering the collision trigger
Conditions//
Result Deal damage to entrants[Execution Node]: Initiate Attack

_**When "Overwrite ability unit settings?" is set to "True," the node graph's configured "Damage Coefficient" and "Damage Increment" will override the preset values in the in-game editor; otherwise, they will not override_

_**Fill in the ability unit with the previously named string "ThornAttack"_

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/9c54eb8f24a44f689e1751a992fd6b82_1757675262.png)

**5. [In-Game Editor] Mount the node graph to the prefab, drag it into the scene, and enter test mode**

Now that the ability unit call logic is configured, mount the node graph on the thorn prefab and save. Drag it into the scene to test the corresponding functionality.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/84f6a2a621654c8495f49cc73416c558_1757675260.gif)

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Creating a Platform that Restores Health Continuously When Entered

**Feature Description:** Platform that Continuously Restores HP

**Effect Demonstration:**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/69cc2c46b79e49fd82e250cce9ed677b_1757675259.gif)

**Solution Analysis:** Create a damage-over-time effect by continuously calling the object's ability unit through timer loops.

**Implementation Steps:**

1. Create a platform prefab, configure the ability unit, select "Restore Health" as the ability unit type, and rename it to "ContinuousRecovery."

2. Configure collision triggers for the platform.

3. In the node graph, configure a loop timer so that when an entity enters the trigger, it can activate the timer while storing the entrant as a variable.

4. When the timer is triggered, connect to the [Restore HP] node and configure the recovery amount and ability unit name.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/d16e3a3933b34a63a6eac862d98c9892_1757675260.png)

5. To prevent the character from continuously regenerating HP after leaving the platform, you can also add a "When Exiting Collision Trigger" event to terminate the activated timer.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/080b4da1e69e48bb8351f0f1a4c059d8_1757675260.png)

6. Place the created platform into the scene and test the effect.

_**For more information, please refer to [Comprehensive Guide > Ability Unit]_

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following feature based on the course content

> Feature Replication: Create a feature that deals damage to characters upon entry
> 
> 
> Advanced Application: Create a burning area that deals continuous damage to creations (monsters)

**Course Review:** Learn how to create more diverse combat effects through ability unit type settings, collision triggers, and node graph combinations.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files > Ability Unit]**.

![Image 15](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Ability Unit.gil

24.3 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4dpw9hmcpu/f24edef9-0a53-421a-a3bb-a7d57e6deea7.gil)

[3.8 Projectile Motion Device: Creating a Shootable Bullet](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhn4nsiz7k18)[3.10 Hit and Impact: Creating Attack Hit Effects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhsdgyi53pz0)
