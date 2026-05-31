---
id: mhcegrr5omvi
title: 1.2 Map Creation and Playtesting
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhcegrr5omvi
language: en
scope: tutorial
crawledAt: 2026-05-31T15:48:13.173Z
---

# 1.2 Map Creation and Playtesting

# Introduction

## Course Description:

**Course Content:** This course will guide you through creating a map file in 3 steps: creating a project file, setting basic map parameters, and saving & testing

**Learning Objective:** Understand how to create a basic map file

## Relevant Information:

**Recommended Learning Order:**[Current Course] → [Comprehensive Guide] (reference as needed)

_**If course details are unclear or if you'd like additional information, please refer to the_**_[Comprehensive Guide]_**_as needed._

**Required Knowledge:**The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)_

> [Stage Editing](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhztndiqfpw4)
> 
> 
> [Preset Point](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhdyy7ico090)

* * *

# Creating Project File

### Instructions

To create a project file (save/map), you need to [enter the save page] and [create project file]:

> **1. Enter the save page**
> 
> 
> There are two ways of entering the save page based on your current state: [editor and Miliastra Sandbox closed — launch Genshin Impact and enter], or [editor and Miliastra Sandbox open — enter from editor and Miliastra Sandbox]
> 
> 
> ● **[Launch Genshin Impact and enter]:**After entering the game, click the Paimon Menu in the upper left corner![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/83288065d049438a9bf27f634638338e_1757675612.png)>>> [My Miliastra Wonderland] >>> to open the save page
> 
> 
> ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/5c0ae7a0-1ad9-4c19-9ba1-5d9b222dd882.png)
> 
> 
> ● **[Enter from in-game editor]:**Click the upper left corner of the in-game editor![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/d299dc4752614cbaa68c0b57972dffcb_1757675612.png) (or press Esc) >>> Bring out the menu on the left > Esc menu, click![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/8d6b3794256747dead3aec5d58eccc67_1757675612.png)>>> to open
> 
> 
> ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/d0ffec15263c459da3589c49255f88a7_1757675612.png)
> 
> 
> **2. Create project file (save/map)**
> 
> 
> Enter the save page then click [Create New Save] in the bottom right corner to create project file
> 
> 
> ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/e0d10ede0a5940789ec16f6a347c940a_1757675613.png)

# Configuring Basic Map Parameters

### How to Enter

Click the upper left corner of the in-game editor![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/87d68a24736547acba8fe51e35b44fe2_1757675613.png) (or press Esc) >>> Bring out the menu on the left > Esc menu, click![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/e549b322f37a4c52bc6a1ce464c5d4a9_1757675613.png)>>> to enter

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/c033de963205492e8e8fb86770c7f951_1757675613.png)

### Feature Summary

Stage Settings: Includes 8 setting options relevant to the following stage flow. Configuration errors will prompt anomaly warnings and the playtest will not proceed _(_**_You can use the default preset after creating a new save directly_**_. This course will go through a brief introduction of the configured key modules)_

● **Basic:** Stage environment boundaries, player count limits, and other basic system information;

● **Faction:** Team tags for players/objects/monsters, friendly/hostile relationships, tags used for default attack logic and condition judgment;

● **Spawn Point:** Setting the locations where player-controlled characters spawn when entering the game;

● **Revive Point:** Setting the locations where player-controlled characters respawn after death

● **Player Count Settings**: Set the number of players for the stage and configure player groups.

● **Loading Screen:** Graphics Configuration: Set up the visual elements that appear when the stage is loading. ● **Settlement:** Settlement Logic: Define the rules and conditions for how the stage is settled, including win/loss criteria and scoring.

● **Terrain Navigation:** Pathfinding Mesh: Set up the navigation mesh for enemies (monsters) to determine their movement paths.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/5800bfbaebf6466e9ad37e3159e63488_1757675611.png)

## Basics

### Important Configuration Items

**● Scene's Effective Range After Execution:**Affects map borders (If object/world coordinates in the scene exceed the scene's range limit, an error will occur)

**● Stage Environment Level:**Affects the damage values of non-character Elemental Reactions in Genshin Impact's native combat system (only supports calculations using default formulas, detailed value formulas cannot be modified)

**● Aggro Type:**Configure custom types, set aggro multipliers, which affect the rules for monsters/objects switching primary aggro targets during combat (this is a complex topic so it will be elabobrated in another course later)

## Faction

### Important Configuration Items

**● Default Faction Objects:**Affects the default faction of newly created players/objects/monsters (they must have a default faction, otherwise an error will occur), factions can be dynamically changed through the node graph after creation

**● Faction Relations:**Affects default combat rules (e.g., whether to attack xxx by default) and damage output judgment (e.g., attack damage is only dealt to hostile factions)

## Spawn Point

### Important Configuration Items

**●  Apply to Character Template:** Affects the player's spawn point (a spawn point must be configured for each player, otherwise an error will occur)

## Revive Point

### Feature Overview

● **Revive Point:**Determines the player's respawn point after death (empty by default, configure as needed in actual setup)

## Player Count Settings

### Feature Overview

● **Group Settings:** Choose between fixed or custom player counts to set limits on the number of players in the level.

● **Group Settings:** Used for configuring team assignments in the level, affecting how teams are displayed in multiplayer scenarios.

## Loading Screen

### Feature Overview

**● Cover Settings:** The image displayed when the stage is loading.

**● Title Settings:** You can specify the title of your stage, which will be shown in the bottom-left corner of the loading screen.

**● Description Settings:** You can provide a brief description of the stage, which will also be displayed in the bottom-left corner of the loading screen.

**● Preview Loading:** Allows you to preview the configured loading screen effect.

## Settlement

### Feature Overview

**● Settlement Screen Settings:** You can modify the type and method of the settlement interface.

**● Settlement Type:** You can settle the results based on individual performance or by team (faction).

## Terrain Navigation

### Feature Overview

**● Mesh:** Affects the pathfinding functionality for creatures (monsters).

**For more information, please refer to [Comprehensive Guide > Stage Editor]

# Save & Test

### Instructions

After completing map edit, click the upper left corner of the in-game editor![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/e7447ca4cd0f409c8f93514fa8d31e61_1757675611.png) (or press Esc) >>> Bring out the menu on the left > Esc menu, click![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/d48a5f37801545a7a23e5a030accc134_1757675611.png) to save the map, then click![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/41ca5954d19a482887f0c6bec2bb40c9_1757675611.png) to playtest

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhlj6crbdfzq/ac103e04b65c4e099a710362deb40a78_1757675611.png)

[1.1 Basic Understanding of Editor Interface](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhlcjxr9duvy)[1.3 Node Graph Creation and Mounting](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhzu1vi0s3ms)
