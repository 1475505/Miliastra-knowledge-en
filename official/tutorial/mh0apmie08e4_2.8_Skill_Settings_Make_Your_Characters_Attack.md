---
id: mh0apmie08e4
title: 2.8 Skill Settings: Make Your Characters Attack
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0apmie08e4
language: en
scope: tutorial
crawledAt: 2026-05-31T15:50:14.591Z
---

# 2.8 Skill Settings: Make Your Characters Attack

# Introduction

## Course Description:

**Course Content:**Skill Creation Process

**Learning Objectives:**Learn the complete process of creating skills and making characters attack, which can be used to create skills such as casting magic projectiles, circular AoE, summoning minions, applying status effects, etc. (These can be achieved through customizing skill ranges, damage values, and skill effects. The tutorial uses basic attack as an example, without listing all possibilities)

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to follow the course order while reading for better understanding._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [2.2 Character Settings: Enhance Character Attributes to Enable Running and Jumping](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr0zrrfahm6)
> 
> 
> [2.7 Faction Settings: Tag Detection and Attack Logic](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh99bn93wjzu)

**Required Knowledge:**The course involves the following basic concepts: (It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the [Comprehensive Guide])

> [Skills](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh8r36022zc8)
> 
> 
> [Ability Unit Effect](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhptei06nh2g)

* * *

# Skills: Making Characters Perform Specific Actions

## Feature Example 1: Casting Normal Attack

### 1. Concept Overview

**Skills:**Configure skill animations, cooldowns, target lock-on, and other rules to make characters perform specific actions (e.g. sword attacks, casting fireballs, charged attacks).

In the Editor and Miliastra Sandbox, skills consist of three parts: [Skill Basic Settings], [Character Animation], and [Skill Effects]. The tutorial will explain these three parts in detail.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/b609033351e64929a91535670755a760_1757675168.png)

### 2. Course Content

**Function:**Creating Sword Normal Attack

**Effect Demonstration:**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/98b102c9-b68b-4e71-bd61-f83236096441.gif)

### 3. Steps to Follow

**1. Adding Skills in [In-Game Editor]**

Go to the [Combat Presets] tab. Select ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/8d66ddac-e8d3-463c-844a-5448f026d95e.png) to enter skills page, then select ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/55d2558eaf2441908462c0de97eb5af3_1757675169.png) to set the skill name. After that, it can be added (The name can be configured freely, but use "Normal Attack" for this tutorial).

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/ebdee181e5c741d2b71ed24c8be6853d_1757675169.gif)

**2. [In-Game Editor] Configuration of [Skill Basic Settings]**

In this page, you can configure parameters such as [Skill Type], [Basic Settings], [Cooldown], [Usage Count], and [Skill Cost].

**All parameters in this tutorial use default settings without modification. This is for demonstration only. You can adjust them according to skill effects in actual use.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/715ae436041f43b0898818c2267aa060_1757675169.png)

_**Configuration Item Description:_

_Skill Types: Currently, there are three types, [Normal Skill], [Instant Skill], and [Hold Skill]._

_Instant Skill: Click to cast; No animation; All skill effects are executed at once._

_Normal Skill: Click to cast; Supports one-time skill animation; Skill effects can be inserted at any frame during the animation (e.g. attack occurs when weapon is swung)._

_Hold Skill: Click and hold to cast skill; Can use looping skill animation; Can insert skill effects at any frame during the animation (e.g. Charged Attack loops every 0.5s to deal damage once)._

**3. [Miliastra Sandbox] Node Graph Configuration of [Skill Effects]**

In the [Client Node Graph Resource Explorer - Skill Node Graph], add and configure the skill's node graph (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

_**Note: The skill node graph does not require additional trigger scene configuration (the start always includes [Node Graph Begins]). Casting the skill represents the trigger, which will be explained further in the subsequent skill animation settings._

Features to Implement Corresponding Configuration Items
Feature

Deal AoE damage in a fan-shaped area with hit effects Trigger Scene//
Condition//
Result Trigger attack[Execution Node]: Use [Attack Hitbox at Specific Location] to create an attack damage effect

_**Hitbox Configuration Logic Description:_

_**For detailed configuration items, please refer to_ _[Comprehensive Guide > Ability Unit Effect]._

Damage Range Attack Position To locate self and rotation. Attack point is the character's current position after the player casts the skill.
Attack Range Select [Hitbox Type] and set the height, angle, radius, and other range parameters.
Damage Target and Form The Target of Attack Is Everyone Except Self Select desired targets in [Filter Target Faction].
Within AoE Range Select [Trigger Type] as triggering only once per entity (damage will be dealt once to all units in range).
Damage Value Attack deals certain damage.Damage = Damage Coefficient * ATK + Damage Increment (actual damage depends on DEF, not explained in detail here).

In this tutorial, only the Damage Increment is set for demonstration purposes. This damage is set as [Absolute Damage].

**Absolute Damage ignores DEF value and deals damage directly based on Damage Increment.
Other Hit Effects Special Effect Displayed on Hits Configure an appropriate effect asset for [On-Hit Effects], and set suitable [Effects Zoom] and [Offset].
Visible Damage Value[Block Damage Pop Up] = No

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/825892d03a324192915528092bf1aa57_1757675169.png)

You can also use other skill nodes to create features (e.g., healing, turning, shooting bullets).

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/3870c69d9a8949638934f38ca63a9449_1757675170.png)

**4. [In-Game Editor] Configuration of [Character Animation]**

Click [Animation Editor] to enter the animation timeline editor. To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Character has a sword swinging animation Select appropriate animation assets. The tutorial uses sword's normal attack as an example.
Damage is dealt during the sword swing (no damage when drawing the sword, damage is dealt only when swinging the sword)Find the specific frame of the required animation in [Node Graph Event Track] and add the skill node graph configured in step 3.
Character has a sword swinging animation Add effects on [Status Track]. Select Sword and configure attachment point [GI_Weapon R].

Attachment points can be viewed in [Character] - [Components - Custom Attachment Point].

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/381dbcb5065b42f285528b73175093d3_1757675170.png)

After completing the configuration, the skill animation and damage range effects can be viewed directly on the current interface.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/15ae27ca112f44a5bfa13e594b62a517_1757675165.gif)

Additionally, you can configure rules such as [Allow Interruption], [Floating Movement], and [Allow Rotation] as needed in actual use.

_**For more information, please refer to [Comprehensive Guide > Skills]._

**5. Adding Skills to Characters in [In-Game Editor]**

Add skills to the desired [Class] and bind them to the corresponding [Player].

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/7cdbd545eb30487e8a864893fac9b386_1757675166.gif)

**6. [In-Game Editor] Creations (Monsters) Placement and Testing**

Place a creation (monster) as a damage test target. Enter the Test Play to experience the functions.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/fcb64752dc61402b89a52b5650f7646d_1757675166.gif)

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Summoning Skill

**Feature Description:**After casting a summoning skill, a friendly Blazing Axe Mitachurl is summoned to assist the player in attacking other units.

**Effect Demonstration:**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/1f91f141924e4c3b8fcf6964c65ad84e_1757675167.gif)

_**If you encounter issues such as creations (monsters) unable to attack normally or carry out abnormal patrolling during the playtest, you can try using [Stage Settings > Terrain Navigation >_ _Render Navmesh_ _]._

**Implementation Steps:**

1. Add custom skills and configure basic skill-related presets (CD, usage restrictions, etc.).

2. Configure the [Skill] node graph for [Skill Effects] (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature

Summon minions after using skill Trigger Scene//
Condition//
Result Summon minions[Execution Node]: Notify Server Node Graph

**Since client node graphs cannot be created directly, some functions are initiated from the client to be received and executed by the server (see Step 3 for details).

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/a6f6e6dc705d44199166ffcb9b1ae80e_1757675168.png)

3. Effects on the [Character] node graph configuration after receiving client parameters (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature

Summon minions after using skill Trigger Scene//
Condition//
Result 1 Summon minion[Execution Node]: Use Create Prefab to spawn a minion at the skill user's position.
Result 2 Minion is in the same faction[Execution Node]: Directly modify the faction of the created entity.

**This step is not needed if the minion is pre-configured to be in the same faction.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/96efd7ec828942458eeae043751af336_1757675168.png)

4. Configure the [Skill] node graph in the [Skill]. Mount the [Character] node graph on the [Character], and save the settings.

5. Add the completed skill to the required [Class]. Bind it to the corresponding player and enter the Test Play to experience the functions.

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/innovate the following features based on the course content.

> Feature Recreation: Create a skill that shoots projectiles in the direction the character is facing.
> 
> 
> Advanced Extension: Create a Wind Current skill that generates a field at the target location, continuously damaging and pulling enemies toward its center.

**Course Review:**Learn how to create diverse and differentiated skills (different skill effects and presentations) through basic settings, animation editing, and skill node graph combinations.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files: Skill Settings]**.

![Image 17](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Skill Settings.gil

23.5 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuyg4iehwcs/54555524-553b-40ee-842c-94378baaa06d.gil)

[2.7 Faction Settings: Tag Detection and Attack Logic](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh99bn93wjzu)[2.9 Character Disruptor Device: Apply Continuous/Instantaneous Forces to Characters](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh09qf0mc628)
