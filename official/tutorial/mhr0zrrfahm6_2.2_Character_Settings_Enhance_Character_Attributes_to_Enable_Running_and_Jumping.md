---
id: mhr0zrrfahm6
title: 2.2 Character Settings: Enhance Character Attributes to Enable Running and Jumping
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr0zrrfahm6
language: en
scope: tutorial
crawledAt: 2026-05-31T15:49:29.720Z
---

# 2.2 Character Settings: Enhance Character Attributes to Enable Running and Jumping

# Introduction

## Course Description:

**Course Content:** This course mainly covers the settings for player/character/class modules in combat presets.

**Learning Objectives:** Learn how to adjust character control and attribute changes through panel configuration or node graph

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read fully in sequence for better understanding_

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves the feature knowledge taught by the following prerequisite courses: _(First-time users are recommended to study_**_[Prerequisite Courses]_**_first for a smoother learning experience.)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)

Required Knowledge: The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_._

> [Player](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0lwvi5wklg)
> 
> 
> [Character](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh9q2t907lsa)
> 
> 
> [Class](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhqob7ihvmjo)

* * *

# Binding Class: Changing Character Attributes

## Feature Example 1: Changing Bound Class

### 1. Concept Overview

In the Editor and Miliastra Sandbox, the settings related to [Player] and [Character] are divided into three configuration items: [Player], [Character], and [Class].

> [Player]: A special abstract entity type that handles in-game logic layer calculations, without a physical entity.
> 
> 
> _Reference: In Genshin Impact, a player's team can have up to 4 characters, all belonging to 1 player entity._
> 
> 
> _**Note: In UGC, each player corresponds to at most 1 character, rather than up to 4 characters as mentioned in this article._
> 
> 
> [Character]: The actual unit that a player controls for walking, running, climbing, and gliding during gameplay, with a physical entity.
> 
> 
> _Reference: Playable characters like Xiangling, Xingqiu, and Bennett are all character entities._
> 
> 
> [Class]: Can be viewed as a player attribute that affects the default attributes and skills of the player's character.
> 
> 
> _Reference: The characters Xiangling, Xingqiu, and Bennett that players control have no inherent attributes or skills, but acquire different attacks and skills through the addition of their respective class._

### 2. Course Content

**Function:** Create two initial classes with different attributes (this function can be implemented through panel configuration without using node graphs), which can be used for different-faction characters in asymmetric competitive gameplay (like hide-and-seek); you can create differentiated classes with varying movement abilities, attributes, skills, etc. as needed in actual use.

**Effect Demonstration:**

_**In this demo, Class A and B are set with an HP difference: Class B has HP=1, Class A has HP=10,000; check the HP values at the bottom to see the characters' difference._

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/25698f6b03ad418c8178dc1f8da5c95c_1757675654.gif)

### 3. Steps to Follow

**1. Add Class in [In-Game Editor]**

Click the editor's top menu bar ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/9d390531c3074a1dba0a299dcc08aac2_1757675663.png) to switch to Combat Preset, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/e0bfc6c5598a43b08b941942ccf32ec7_1757675663.png) to enter Player Settings tab, select [Class] >>> click ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/56729a66fbd04e62ac9480115d449390_1757675663.png) to create Class

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/a8afb0b47ec943229bc9775ac7124a42_1757675664.png)

**2. Using [In-Game Editor] to Configure Panel Parameters**

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
HP difference between Class A and B Configure [Attribute > Base HP] differently, Class A has HP=10,000, Class B has HP=1

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/9ae0f0dc9a304f65bd08720e8b3c2c40_1757675664.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/ce4a1a9577cb4b189546f1d5c03e325f_1757675664.png)

Additionally, you can configure rules such as [Level], [Revival], [Base Movement], [Camera & Interface Layout], [Name], and more on the panel, which can be freely adjusted as needed in actual use.

**3. Using [In-Game Editor] to Bind Class**

In the player template, select the desired initial class

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/850ae3cd0b634d2a93a50b9653418aab_1757675664.png)

## Modifiable Attributes

In the Editor and Miliastra Sandbox, you can edit a character's attributes by modifying the following rules for classes.

> _Level Settings: Initial level, maximum level, experience required for leveling up, etc._
> 
> 
> _Revival Settings: Whether revival is allowed after death, revival rules, etc._
> 
> 
> _Basic Movement: Whether to allow movement attributes such as Jump/Sprint/Climb/Glide_
> 
> 
> _Various Attributes: Base HP, ATK, DEF, Max Stamina, etc._
> 
> 
> _Camera and Interface Layout: Player camera perspective, UI controls information displayed on the interface_

### Level Settings

### Instructions

#### 1. Panel Configuration

Level Settings is divided into 2 sections: The level setting in [Player], and the level setting in [Class]

> The level setting in [Player]: Overrides the level setting of the default bound class, but does not affect the level when switching to another class
> 
> 
> The level setting in [Class]: The player's class level when first switching to that class
> 
> 
> _Example: There are [Player A - Level 1], [Class A - Level 5], [Class B - Level 10], set the player's default class as Class A;_
> 
> 
> _Upon entering the game, the actual level will be 1 (the player overrides the level setting of the default bound class); switching to Class B during gameplay will change the level to 10 as set in [Class] (switching to other classes will change the level to that set for other classes)._
> 
> 
> ![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/8a9bc86bec0d4d4abba756b8065efe6e_1757675665.png)
> 
> 
> ![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/0de6c025318c48389de677258805655f_1757675649.png)

#### 2. Node Graph Configuration

There are 2 nodes for adjusting levels on the node graph: [Change Class Level] and [Increase Class EXP].

> Change Class Level: Change the current class level to x
> 
> 
> Increase Class EXP: Gives x EXP
> 
> 
> ![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/fe05391535e74743a87584a849f31903_1757675649.png)

### Revival Settings

### Instructions

#### Panel Configuration

Revival settings are divided into 2 sections: Revival rules in [Player] and revival points setting in [Stage Settings].

> Revival rules in [Player]: Whether to allow revival, revival span, revival point selection rules, etc.
> 
> 
> Revival points setting in [Stage Settings]: Revival point list setting, which affects the selectable revival points in revival rules
> 
> 
> ![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/7358d515714b4100bd3994690078778a_1757675649.png)
> 
> 
> ![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/76f5f530029743cfa6487eea52e8b980_1757675649.png)

### Basic Movement

### Instructions

#### Panel Configuration

In [Class], bind specific classes to define the controlled character's basic movement attributes (jump/sprint/climb/glide)

> ![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/cd7e29ef4a224277b35a593f6beea00b_1757675649.png)

_**Noted that the settings need to be [Class - Allow Climb] and [Climbed Object - Climbable] for a character to climb._

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/00705e93e55c4da7b0df04b1e69e6264_1757675650.png)

### Various Attributes

### Instructions

#### Panel Configuration

In [Class], bind specific classes to set character attributes (HP, ATK, DEF, Max Stamina, etc.)

> ![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/1e502f4231f34ab0ae145b5e35c9f304_1757675650.png)

### Camera and Interface Layout

### Instructions

#### Panel Configuration

In [Class], bind specific classes to define the camera and interface layout for controlling characters

_**This configuration item involves other module settings, which will be explained in detail in subsequent lessons. Here, we only briefly indicate where the configuration item is in [Class]._

> ![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/800fe577892a4108ae81851c92b2e706_1757675650.png)

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Changing Class After Interaction

**Function:** Create two different classes (with different HP values), after the player selects an option, if it is Option 1, change to Class B, if it is Option 2, change to Class A

**Effect Demonstration:**

In this demo, Class A and B are set with different HP values: Class B has HP=1, Class A has HP=10,000; when HP changes, the class switch is successful.

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/6c0595e0cb8b4d97bd5ecdfb4857ed08_1757675650.gif)

**Implementation Steps:**

1. Create a prefab as an interactive object

2. Add [Component > Tab] and configure options and the trigger area

3. Configure node graph (see recommended settings in the image below)

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/e7c5f1dcb5284e1882dcc6e56ea23018_1757675654.png)

4. Mount the node graph on the prefab and save the settings

5. Place the prefab in the scene

6. Enter Test Play to experience this feature

## Feature Example 3: Changing Class Level to Fixed Level After Interaction

**Feature Description:** After the player selects an option, if it is Option 1, the level will change to 10, if it is Option 2, the level will change to 20

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/dcf7b24605d74a87b12b210ed3d6029e_1757675658.gif)

**Implementation Steps:** Same as Feature Example 1, only the node graph differs, see reference below

1. Create a prefab as an interactive object

2. Add [Component > Tab] and configure options and the trigger area

3. Configure node graph (see recommended settings in the image below)

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/18bc7ac6c13844a2a48709aaf8d0f674_1757675660.png)

4. Mount the node graph on the prefab and save the settings

5. Place the prefab in the scene

6. Enter Test Play to experience this feature

## Feature Example 4: Changing Class Level to Current Level +1 After Interaction

**Feature Description:** After the player selects the option, the current level increases by 1

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/ce184083ad544697826aeea2ea4e7d09_1757675660.gif)

**Implementation Steps:** Same as Feature Example 1, only the node graph differs, see reference below

1. Create a prefab as an interactive object

2. Add [Component > Tab] and configure options and the trigger area

3. Configure node graph (see recommended settings in the image below)

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/6a0b33a7efc5448497aa73a8f83532fd_1757675663.png)

4. Mount the node graph on the prefab and save the settings

5. Place the prefab in the scene

6. Enter Test Play to experience this feature

* * *

# Course Summary and Supplementary Materials

**Course Assignment:** Try to recreate/innovate the following features based on course content

> Feature Recreation 1: Switch the class in specific areas, after switching, the character cannot jump or sprint (can be used in parkour/puzzle gameplay, restricting movement methods for precise positioning in specific scenes)
> 
> 
> Feature Recreation 2: Create a cliff wall with vine paths laid out on it, allowing the character to climb only along the vine paths and not other wall surfaces (can be used in parkour/puzzle gameplay for guided climbing movement)

**Course Review:** Learn how to affect character attributes by changing classes, creating differentiated classes (movement abilities, attributes, skills, etc.)

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files: Character Settings]**.

![Image 25](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Character Setting.gil

29.6 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcq490pvtz4/5770a796576045d4b070a5041dc5ed4a_1757675663.gil)

[2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)[2.3 Camera Settings: The Game From Different Perspectives](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhi2dr0pe60g)
