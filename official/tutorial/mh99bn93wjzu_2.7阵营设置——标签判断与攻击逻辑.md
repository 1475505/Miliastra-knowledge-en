---
id: mh99bn93wjzu
title: 2.7 Faction Settings: Tag Detection and Attack Logic
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh99bn93wjzu
language: en
scope: tutorial
crawledAt: 2026-05-31T15:50:08.124Z
---

# 2.7 Faction Settings: Tag Detection and Attack Logic

# Introduction

## Course Description:

**Course Content:**Faction System Introduction and Usage

**Learning Objectives:**Learn how to configure faction relations for attack tag detection and default attack logic implementation (e.g. By default, monsters belong to the same faction. Some can be assigned to player faction as summons or monsters and player factions can be divided based on different players to create Auto Chess/Pokémon-style gameplay).

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course materials fully and in sequence for better understanding._

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Required Knowledge:**The course involves the following basic concepts: _(Recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)._

> [Faction](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhvbfk9sc1qa)

* * *

# Faction: A Team Tag That Affects Attack Logic Determination

## Feature Example 1: Configuring Creations (Monsters) as Player's Faction

### 1. Concept Overview

**Faction:**Configuring different factions and faction relations for tag detection in node graphs (in/not in X faction) and attack logic determination (automatically attack/does not attack units of certain factions).

### 2. Course Content

**Function:**Create a creation (monster) belonging to the player's faction that does not attack the player but helps to attack other creations (monsters) (this function can be implemented through panel configuration alone without node graph). Used to create friendly faction creations (monsters)/NPCs and summon-type skills in various gameplay scenarios.

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/28716998b075495da52999e8087c9c39_1757675703.gif)

**If you encounter issues such as creations (monsters) unable to attack normally or carry out abnormal patrolling during the playtest, you can try using [Stage Settings > Terrain Navigation >Render Navmesh].

### 3. Steps to Follow

**1. Entering Faction Configuration Page in [In-Game Editor]**

Click the top left corner of the in-game editor ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/b0c877c94e8146fd8ece432ca403db94_1757675704.png)(or press the ESC key) >>> bring up the left screen - ESC Menu Bar, then click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/832eea08fd984412b0b6bb467c1d29ba_1757675704.png)>>> select [Faction] in stage settings

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/821334f5229443b7817181ae8d4cf27e_1757675704.gif)

**2. Using [In-Game Editor] to Configure Panel Parameters**

Configure factions and faction relations as needed.

_**The tutorial uses the default settings without modifications for concept explanation._

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/aa14f00991e340339728f41051215c2d_1757675705.png)

_**Configuration Item Description:_

_Default Faction Object: The default faction assigned to units when they are initially created without any faction modifications._

_Faction Relations: Divided into two types of [Hostile] and [Friendly]. You can configure how other factions relate to your faction and how your faction relates to others (e.g. If Faction 1 is friendly to Faction 2, but Faction 2 is hostile to Faction 1, then Faction 2 will attack Faction 1, but Faction 1 will not attack Faction 2 during actual gameplay)._

**3. Creating Same-Faction Creations (Monsters) in [In-Game Editor]**

Create a creation (monster) (using a normal Hilichurl as an example). Change to [Initial Player Faction] in the Attributes - Faction and save the settings.

_**In this tutorial, there are no additional feature requirements and players are in the same faction. So, selecting the initial player faction is sufficient here. If players are divided into different factions, additional considerations would be needed regarding which specific faction the creation (monster) belongs to._

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/0dbc5524cde7453ba4b195d4e53cb396_1757675705.png)

**4. [In-Game Editor] Creations (Monsters) Placement and Testing**

Place the created creations (monsters) and regular creations (monsters) in the scene. Enter the Test Play to experience their functions.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/c9fd416a0d5c467989f14d52ab81ffc1_1757675705.gif)

_**If you encounter issues such as creations (monsters) unable to attack normally or carry out abnormal patrolling during the playtest, you can try using [Stage Settings > Terrain Navigation >_ _Render Navmesh_ _]._

_**For more information, please refer to [Comprehensive Guide - Faction]._

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Faction Switch, Changing Player Faction

**Feature Description:**After player interaction, switch player's faction according to selected option.

**Effect Demonstration:**

In this demonstration, a creation (monster) is placed to test if the faction switch is successful based on whether the creation (monster) attacks the player.

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/55e51796ca394e8f9dd0e2c9af97d5df_1757675706.gif)

**Implementation Steps:**

1. Create a prefab as an interactive object.

2. Add [Component - Tab] to this prefab and configure the options and trigger option area range.

3. Configure the node graph of this prefab (see recommended settings in the image below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature

Switch faction after interacting with option Trigger Scene Triggered after option selection[Event Node]: When option tab is selected
Condition Which a specific option is selected[Flow Control Node]: Determine option number
Result 1 Switch to Creation (Monster) Faction[Execution Node]: Change Entity Faction to Creation (Monster) Faction
Result 2 Switch to Player Faction[Execution Node]: Change Entity Faction to Player Faction

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/e634ef68dca84f9ea5762060792e6950_1757675706.png)

4. Mount the node graph on the prefab and save the settings.

5. Place the prefab in the scene and add a creation (monster) for detection. Enter the Test Play to experience the functions.

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following features based on the course content.

> **Advanced Extension:**Create a capture skill that can convert enemy faction creations (monsters) into your own faction's creations (monsters).

**Course Review:**Learn how to add faction configuration and faction relations for team tag detection and attack logic determination (e.g. Team 1/Team 2 scores, friendly faction summons).

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files - Faction Configuration]**.

![Image 11](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Faction Configuration.gil

22.3 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3x2594e7yi/a1e8cb227721459b9869637484f4a8c0_1757675703.gil)

[2.6 UI Controls: Displaying Information and Triggering Events on Click](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr6jorjp77a)[2.8 Skill Settings: Make Your Characters Attack](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0apmie08e4)
