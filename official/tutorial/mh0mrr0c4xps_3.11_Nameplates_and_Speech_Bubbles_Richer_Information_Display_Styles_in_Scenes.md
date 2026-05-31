---
id: mh0mrr0c4xps
title: 3.11 Nameplates and Speech Bubbles: Richer Information Display Styles in Scenes
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0mrr0c4xps
language: en
scope: tutorial
crawledAt: 2026-05-31T15:50:39.414Z
---

# 3.11 Nameplates and Speech Bubbles: Richer Information Display Styles in Scenes

# Introduction

## Course Description:

**Course Content:**Creation and Use Cases of Nameplates and Speech Bubble Components

**Learning Objectives:**Understand how to configure scene 3D UI (nameplates/speech bubbles) and create in-game guidance information (such as: health bars, text hints, quest indicators, navigation markers, etc.)

_**This course involves two interconnected modules: "In-Game Editor Panel Configuration" and "Miliastra Sandbox Node Graph." It is recommended to read through the course in sequence._

## Relevant Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If the course details are unclear or you wish to understand further, please refer to the_**prerequisite courses:**The course and the prerequisite courses below cover the following:_(If you're using this for the first time, it is recommended that you first look at_**_[Prerequisite Courses]_**_for a better learning experience.)_

> [2.1 Collision and Interaction: Triggering An Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)
> 
> 
> [2.6 UI Controls - Displaying Information And Triggering Events on Touch](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr6jorjp77a)
> 
> 
> [2.4 Custom Attachment Point - Preset Points That Can Follow Movement and Rotate](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh85mxrh6kfy)

**Required Knowledge**The course involves the following basic concepts: _(It is recommended that you follow the course materials. If the course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[Comprehensive Guide]_**_.)_

> [Nameplate Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh2fo3r4myz2)
> 
> 
> [Speech Bubble Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwtnor94zhy)

* * *

# Nameplates: Visualized information in scene interface during gameplay

## Feature Example 1: Creating permanent on-screen guidance/tooltips

### 1. Conceptual Overview

**Nameplates:**Through type, content, and navigation tip configuration, you can create visualized information displays such as: HP, level, etc., and provide directional guidance, distance display and other guidance indicators.

### 2. Course Content

**Feature:**Create a permanently displayed quest guide that shows navigation tips for distance and direction when players approach within a certain range, and which displays quest information when they get close.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/74d8cb9146e04857a46552247c050b10_1758096975.gif)

### 3. Operational Steps

**1. Add components using In-Game Editor**

① Create a component as the quest NPC (we'll be using the building-block figure as the example here), then, in the panel click on ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/5a274705736743dfb4bdf841fff82b65_1758096979.png)>>> Inside the component page, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/d455ddc787a948739461a23b2ff50b91_1758096979.png)>>> Select "Nameplate" to add.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/1bd89b5895574d749c468019e05ef551_1758096979.png)

② Then, to facilitate quick adjustment of the nameplate's effective position (the nameplate's effective position can be configured to custom attachment points), add the Custom Attachment Point component.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/eae2437f6d384d4bab9446b91f3609ec_1758096979.png)

**2. Add custom attachment points in In-Game Editor**

After opening [Components - Custom Attachment Point], click "Add Custom Attachment Point" below to add one (set its "Name," "Offset," and "Scale" as needed).

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/cdfe63d52e7c428c89eb716bc6af8699_1758096980.png)

**3. Add nameplate in In-Game Editor**

After opening [Components - Nameplate], simply click ![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/8db27e665e794dba83ad8f7bebc5b6a2_1758096980.png) to add. Configure "Attachment Point, "Visible Radius," "Type," and "Navigation Indicator," etc., as needed.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/bc6b867c2a21424c83987c749f018d98_1758096980.gif)

**4. Configure parameters in In-Game Editor panel**

After adding the nameplate, you can configure the nameplate and navigation indicator as necessary. To achieve the desired functionality, in this tutorial we're configuring it as follows:

Features to Implement Corresponding Configuration Items
Display nameplate above head Set attachment point to "Head"

**"Head" is the name of a custom attachment point. Select the appropriate option based on your actual needs.
Nameplate information hint becomes visible within a certain range.Set Visible Radius to "5."

**Adjust according to your actual needs.
The nameplate has text and icon hints.Add two nameplate contents items;

Set Type to "Text Box" and "Icon" respectively.

**Adjust text and icon content and position offset as needed.
Provide navigation guidance to players within a certain range (direction hints).Enable navigation indicator and set the "Maximum Visible Radius" and "Minimum Visible Radius."
The navigation indicator tool includes text (showing distance to player) and icon prompts.Add two indicator content items;

Set the Type to "Text Box" and "Icon" respectively.

Show distance using [Insert Variable - Data - Distance to Player].

**Adjust text and icon content and position offset according to your actual needs.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/3586a268d03f41c7a2291bae5c9f0dcd_1758096981.png)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/853276d4a95e4a1588aa14d32db5e60b_1758096972.png)

**5. Place the prefab and test gameplay in In-Game Editor**

Place the configured prefab in the scene and enter Test Mode to use this feature.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/7b17bd19e211435f8c9e42f08566cc2a_1758096973.gif)

_**For more information, please refer to [Comprehensive Guide - Component - Nameplate]._

# Speech Bubble Dialogue - In-Game Dialogue Information in The Scene Interface

## Feature Example 2: Creating a guidance dialogue loop

### 1. Conceptual Overview

**Speech Bubble Dialogue:**By configuring speech bubble text, you can easily create visualized presentations of dialogue text.

### 2. Tutorial Content

**Feature:**Create a looping dialogue message that becomes visible when the player enters a certain range.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/b3f2b72126ec4453a3742f87644752b4_1758096973.gif)

### 3. Operational Steps

**1. Add components using In-Game Editor**

① Create a prefab for the quest NPC (we're using the building block doll here as an example), then in the panel click ![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/0747a48831d5422a95afd64eb41c1f68_1758096974.png)>>> Then, in the component page, click ![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/405acbc80c014ce3ae43caf2b5bf6100_1758096974.png)>>> Select "Bubble" to add.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/cf90e3b5211b45ffb5503ae2b7c1cd27_1758096974.png)

② Additionally, to facilitate quick adjustment of the nameplate's effective position (the nameplate's effective position can be configured to custom attachment points), add the Custom Attachment Point component.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/d867411292f740a2934d1eaffb5d53ff_1758096974.png)

**2. Add custom attachment points in In-Game Editor**

After opening [Component - Custom Attachment Points], click "Add Custom Attachment Point" below to add one (configure its "Name," "Offset," and "Scale" as needed).

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/c6ef4cc2ddf64f36868f4a4aa9b8f41f_1758096975.png)

**3. Add speech bubble text using In-Game Editor**

After opening [Component - Bubble], you can add new dialogue content using "Add Bubble Text" to create complete dialogues (in this tutorial, we'll demonstrate this by creating multiple dialogue segments as an example).

Additionally, clicking ![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/12b1e2caf57548dbafccbe3f439ba1dc_1758096975.png)allows you to add new speech bubbles (for switching to completely new dialogue content), which will not be demonstrated again in this tutorial.

_**The bubble dialogue component only displays one dialogue bubble at a time._

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/2bccf120bcb545d094338b1c0d954276_1758096975.png)

**4. Configure panel parameters in In-Game Editor**

After adding a nameplate, you can make adjustments to the nameplate and navigation indicator. To achieve the desired functionality, in this tutorial we're configuring it as follows:

Features to Implement Corresponding Configuration Items
Display bubble above head Set attachment point to "Head."

Adjust offset position as needed.

_**"Head" is the name of a custom attachment point. Select the appropriate component based on your actual needs._
Speech bubble dialogue appears when player is within a certain range.Set the Visible Radius to "5."

_**Can be adjusted according to actual needs._
Speech bubbles contain guidance text.Add two speech bubble text items;

Set as "Text Box."

_**Set text content type based on your actual needs._
Loops this dialogue.Enable "Loop Playback."

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/c173edf5b3fa4f999a3202026e8f823d_1758096976.png)

**5. Place prefab and test gameplay in In-Game Editor**

Place the configured prefab in the scene and enter Test Mode to use this feature.

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/ea6efe73f7a544909affea7cebf0eedd_1758096976.gif)

_**For more details, please refer to [Comprehensive Guide - Components - Speech Bubble Component]._

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 3: Combined use of quest markers and speech bubbles

**Feature Description:**When the player approaches within a certain distance of an NPC, a dialogue prompt appears, indicating they can talk to the NPC. After interaction, the NPC plays dialogue content.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/7b300b8608b047749c0cd6671191ee8c_1758096977.gif)

**Operational Steps:**

1. Create a component as a quest NPC (this tutorial uses a building block doll as an example). Add [Components - Tab], configure the "Greet" option, then set up the appropriate option trigger area.

2. Add [Component - Custom Attachment Point], and after adding the point, configure its position offset as needed.

3. Add [Component - Nameplate], configure the nameplate's icon, text and navigation indicator (consistent with the configuration in Example 1 of this tutorial, no additional demonstration here).

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/71b4c3a452be44d4906464c71666d32a_1758096978.png)

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/6c31194557774983a082b13c4d024580_1758096978.png)

4. Add using [Components - Bubble] and configure the speech bubble text content (same as the configuration in Example 2 of this tutorial, no additional demonstration here).

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/14291ab3cb504205aaff817b41ab1415_1758096978.png)

Note: Since the speech bubble for this feature is displayed through active interaction, you need to close the first active bubble.

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/dbbc02d51d4e4f4fadc631fc4bc1b985_1758096978.png)

5. Configure the Post-Interaction Bubble Dialogue effect for the NPC's node graph (refer to the illustration below). To achieve the desired functionality, in this tutorial we're configuring it as follows:

**This node graph is mounted on "NPC Prefab."

Features to Implement Corresponding Configuration Items
Feature

Play speech bubble dialogue after interaction selection Trigger Scenario After interaction Event Node: When option is selected (triggered when any interaction option is selected).
Condition//
Result Plays bubble dialogue.Execution Node: Makes NPC play bubble dialogue 1.

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/7fe52bb7cf7649bc8ab271218112057e_1758096979.png)

6. Mount the respective node graphs on the prefabs and save.

7. Place the completed prefab in the scene and enter Test Mode to use the feature.

* * *

# Course Summary and Supplementary Materials

**Course Assignment:** Try to recreate/expand on the following features based on the course content.

> **Feature Re-creation:** Create quest hints for gathering and monster hunting tasks.
> 
> 
> **Advanced Extension:** Create a simple quest system where players can receive quests where the player can start quests when getting within range of designated areas by means of interactive speech bubbles. After completing the quest, interacting again will bring up completion information in the speech bubble.

**Course Review:** Learn how to use [Component - Nameplate] or [Component - Bubble] to create information visualizations which in turn can be used to create various text, icon, progress, and other scene information presentations.

### Supplementary Course Materials

We have provided the relevant project files that can be studied with **[Tutorial Files - Nameplate and Bubble Dialogue].**

![Image 29](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Nameplate and Bubble Dialogue.gil

26.2 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2hu0r25i6u/cbc257bd74bc41cbbbe5d243e484a6a6_1758096979.gil)

[3.10 Hit and Impact: Creating Attack Hit Effects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhsdgyi53pz0)[3.12 Card Selector - Creating Selection Pop-ups and Option Tabs](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhfpf0rhlaeu)
