---
id: mh055pi9lit0
title: 2.5 VFX: Enriching Your Effects
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh055pi9lit0
language: en
scope: tutorial
crawledAt: 2026-05-31T15:49:51.266Z
---

# 2.5 VFX: Enriching Your Effects

# Introduction

## Course Description:

**Course Content:** Configurating VFX in the Editor and Miliastra Sandbox

**Learning Objectives:** Learn how to add VFX to the game and create your own VFX

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [_ _Miliastra Sandbox_ _Node Graph]. It is recommended to read fully in sequence for better understanding._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:** This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)

Required Knowledge: The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]._**_)_

> [VFX](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh4wcu0cy9u0)
> 
> 
> [VFX Player Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhq3ror7x54m)

# VFX Player Group: Making Objects Display Different Effects

## Feature Example 1: Creating a Burning Torch

### 1. Concept Overview

**VFX:** Create art assets for various visuals (Editor and Miliastra Sandbox come with a set of preset VFX)

**VFX Player Group:** Add VFX and VFX rules to make objects display different effects (e.g., glowing doors, explosions, bullet trails)

### 2. Course Content

**Function:** Create a burning torch (this function can be implemented through panel configuration alone without node graph), which can be used as a decorative object or puzzle-solving item in parkour/puzzle gameplay

**Effect Demonstration:**

_**The torch object itself has no burning VFX, add the VFX to make it appear as burning_

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/8404613de8b04afe8fa2028f710a696c_1757675687.gif)

### 3. Steps to Follow

**1. Add VFX in [In-Game Editor]**

Create a Prefab As an interactive object (this tutorial uses a torch as an example) by selecting ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/ade3a024a73f43bbaa91a8cf179caabc_1757675687.png) on the panel >>> open [VFX Player Group] on the [Component] page >>> select [Add VFX]

_**All units with configurable effects contain [Component > VFX Player Group] by default when created, so you do not need to add it manually; if you deleted it, you can add it back through [Add Component]_

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/e7e715f889dc40169daf80ef88e5c9bd_1757675687.gif)

**2. Using [In-Game Editor] to Configure Panel Parameters**

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
VFX Continuous Loop Select "Loop Effect" in [VFX Asset Type]
Flame VFX[VFX Asset]: Select the appropriate flame VFX
The flame is positioned at the torch tip Adjust [Offset] to a suitable position

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/bc1eb60806e8435b8807fa38bb1bdda2_1757675687.png)

After configuration is complete, you can preview the current VFX on this interface:

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/289e3292858748dfb3cd0a0dfd4bf702_1757675687.gif)

Additionally, you can configure VFX rules such as [VFX Type], [Follow Position/Rotation], [Attachment Point], [Zoom Factor] on the panel, which can be adjusted freely as needed in actual use.

_**Configuration Item Description:_

_VFX Types: Divided into loop effects and timed effects, with different effect assets corresponding to each type_

_Loop Effects: Play continuously_

_Timed Effects: Disappear after playing once_

**3. Using [In-Game Editor] to Place the Prefab and Test Gameplay**

Place the modified component in the scene and enter Test Mode to experience this feature

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/e79ddc0e88af4b5fb8bb2cd84d8f9f92_1757675688.gif)

_**For more information, please refer to [Creation Manual - VFX Player Group]._

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Creating an Interactive Torch Lighting

**Feature Description:**Object A adds effects to Object B (interactive mechanism lights up the torch)

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/96f119625dbd456695c55f672a028be9_1757675688.gif)

**Implementation Steps:**

1. Create a Prefab A as a torch.

2. In Prefab A's [Component > VFX Player], select the effect to be added and parameters such as its position (This is not for actual configuration, but to preview and confirm the added effect. The actual configuration panel remains empty).

_**In this tutorial, we will continue using the effects and parameter configurations from Feature Example 1. During actual creation, these can be adjusted accordingly._

Loop Effect; Effect id189; Offset (0, 1.2, 0)

3. Place Prefab A in the scene and confirm its GUID.

4. Create Prefab B (select the lever mechanism as an example in the tutorial) as an interactive object.

5. On Prefab B, add [Component > Tab] and configure the options and trigger option area range.

6. Configure the node graph of Prefab B (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configurations
Feature

Interactive Torch Lighting Trigger Scene Triggered after the interaction option Event Node: When the Tab Is Selected (triggers when "any" interaction option is selected)
Condition//
Result 1 Torch Lit[Execution Node]: Mount looping effect on Prefab A, with effect assets and position as confirmed in steps 2 and 3.
Result 2 Change of lever mechanism indicates successful interaction[Execution Node]: Use [Set Preset Status] to create lever effect.
Result 3 Mechanism cannot be used again after activation[Execution Node]: Use the [Activate/Deactivate Tabs] to disable the option and stop further interaction.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/e35a1f506e374325b36623426a7a1d9a_1757675688.png)

7. Mount the configured node graph on this prefab and save the prefab settings.

8. Place Prefab B in the scene and enter the Test Play to experience its functions.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/03d9a674580d4aa58586a4e6639b4641_1757675688.gif)

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following features based on the course content.

> **Feature Replication:**Create a glowing effect when opening a chest.
> 
> 
> **Advanced Extension:**Create skill range warning effects by combining prop motion device and landing effects.

**Course Review:**Learn how to use effects to create differentiated visual presentations, and try to create various scene guides, decorations, and props.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files - Effects]**.

![Image 11](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Effects.gil

25.3 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlua6rk6v5y/67e35456-f312-44c6-89ba-5f2b092fab5b.gil)

[2.4 Basic Motion: Making Objects Move](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh93rq9zhueq)[2.6 UI Controls: Displaying Information and Triggering Events on Click](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr6jorjp77a)
