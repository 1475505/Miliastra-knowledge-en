---
id: mhr6jorjp77a
title: 2.6 UI Controls: Displaying Information and Triggering Events on Click
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr6jorjp77a
language: en
scope: tutorial
crawledAt: 2026-05-31T15:49:59.158Z
---

# 2.6 UI Controls: Displaying Information and Triggering Events on Click

# Introduction

## Course Description:

**Course Content:**Creation and Usage of User Interface (UI) Controls

**Learning Objectives:**Learn how to configure UI components and create in-game guiding information or interactive buttons (e.g. HP bars, attributes, leaderboards, text prompts)

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course materials in sequence for better understanding._

## Relevant Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves the feature knowledge taught by the following prerequisite courses: _(First-time users are recommended to study_**_[Prerequisite Courses]_**_for a smoother learning experience.)_

> [2.1 Collision and Interaction: Trigger an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)
> 
> 
> [2.2 Character Settings: Enhance Character Attributes to Enable Running and Jumping](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr0zrrfahm6)

**Required Knowledge:**The course involves the following basic concepts: _(Recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide]_**_)._

> [UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhvxqt9n1y8a)(Includes the following controls templates listed)

# UI Controls: UI Information and Buttons on Player Devices

**UI Controls:** Configure controls and control information to create UI elements or buttons displayed on player devices _(Pop-up hints, progress bars, attribute information, timers, interactive props, etc. are considered UI controls)._

## Feature Example 1: Information Controls - Permanently Displayed Dynamic Text Box

### 1. Concept Overview

**Information Controls:**Primarily for displaying information. Can show fixed/dynamic content (Fixed: Text guidance; Dynamic: Progress changes). [Text Box], [Pop-up Window], [Progress Bar], [Global Timer], and [Scoreboard] are all information controls.

_**The tutorial will use [Text Box] as an example._

### 2. Tutorial Content

**Function:**Create a UI that displays score information. Score +1 when collecting coins.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/ad23bd4c33ec4b268dfe78dad531aa9e_1757675696.gif)

### 3. Operational Steps

**1. Add Custom Variables in [In-Game Editor]**

Add a custom variable (name can be freely configured) to [Player], with type: integer and initial value: 0.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/935ad81f95094c1c9b28d000443fa6a5_1757675697.png)

**2. [In-Game Editor] Controls Creation**

Click the top left corner of the in-game editor ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/e5d3b8fde8834884889b231702506c2b_1757675697.png)(or press the ESC key) >>> Bring up the left screen - ESC Menu Bar, then click ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/b88d7ccd80fc4d828848714240835a14_1757675697.png) to enter the UI Controls Editor page and add the UI Controls template to the [UI Control Group Library] >>> Select [Text Box]

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/b5672dc14c0247afa5f6291eb0ef0825_1757675697.gif)

**3. [In-Game Editor] Configure Controls Parameters**

Configure the text box display information and save settings.

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configurations
Fixed Display Information as Scores Enter "Score:" into [Text Content].
Dynamic Display Information for Player's Score Change Insert variable for player's score value into [Text Content] (custom variable added in step 1).
Making Information More Noticeable Adjust parameters like [Font Size], [Position], [Alignment], etc.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/38d2d052ece3463ea4024e6ef864343f_1757675698.png)

_**The current in-game editor's interface layout needs to be configured individually for different device models (the tutorial uses mobile and PC devices as examples)._

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/50c4ad1400174342875d46ac50b2e83f_1757675698.gif)

**4. [In-Game Editor] Adding Controls to Interface Layout**

Add the completed controls to the interface layout (after adjusting device configurations in step 3, they will automatically sync here without additional configuration).

**Prefabs created in the UI Control Group Library, similar to those made in the Prefab Library, will not be displayed during actual gameplay unless they are added to the interface layout.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/01383005f06c4e718906f411818b6df8_1757675698.png)

**5. [In-Game Editor] Binding of Interface Controls to Specific Players**

In Combat Preset - Class, select Layout.

_**In this tutorial, there is no differentiation in player information display (e.g. Info A displayed for Player A, Info B displayed for Player B). Default configuration is used. If necessary, independent configurations can be set for different classes._

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/b6afb893ef7b45cc9123c1496c9ed731_1757675698.png)

**6. [In-Game Editor] Creation of Coins for Collection**

Create a coin prefab as a collectible item, add [Component > Collision Trigger], and configure the trigger area.

_**This feature has already been used in the prerequisite course Collision and Interaction. Configuration elements will not be listed here._

**7. [Miliastra Sandbox] Node Graph Configuration**

In the instance node graph, configure the node graph of the coin (see recommended settings in the image below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature

Collect coins to gain points.Trigger Scene Collect upon entering range.Event Node: When entering collision trigger (triggers when entering from outside and making contact with the configured area).
Condition//
Result 1 Add 1 point after collection.[Execution Node]: Use configured custom variable and set [Score After Collection = Current Score +1].
Result 2 Collect Coins.[Execution Node]: Use [Destroy Entity] to create collection effect.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/f64cdda6d7524db9986f85dfa6901f2e_1757675693.png)

**8. Using [In-Game Editor] to Mount Node Graph**

Mount the configured node graph on the coin prefab and save the prefab settings.

**9. Using [In-Game Editor] to Place the Prefab and Test Gameplay**

Place the created coin prefab in the scene and enter the Test Mode to experience the functions.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/2c458712b50b4f038f6a2b28d3c010ee_1757675693.gif)

_**For more information, please refer to [Comprehensive Guide > Text Box UI Controls]._

## Feature Example 2: Interactive Controls - Press to Trigger Event

### 1. Concept Overview

**Interactive Controls:**Controls that can be clicked to interact with. Interacting with these controls triggers events. [Interactive Button] are categorized as Interactive Controls.

_**Similar in usage to [Collision Trigger] and [Tab], they are used to trigger events. The main difference is that interactive buttons offer stronger control, allowing events to be triggered at any time. They are commonly used for active effects (e.g. using items, active skills, opening inventory)._

### 2. Tutorial Content

**Function:**Create a button that actively increases points. Adds +1 points every time it is pressed.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/732db1b5ab184df9b5e89917dc92afcc_1757675693.gif)

### 3. Operational Steps

The UI display and variable settings for points in this feature example are identical to Feature Example 1. This section will focus on explaining the special configuration of [Interactive Button] without repeating past content.

**1. Add Custom Variables in [In-Game Editor]**

Add a custom variable (name can be freely configured) to [Player], with type: integer and initial value: 0.

**2. [In-Game Editor] Controls Creation**

Click the top left corner of the in-game editor ![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/a57e289dfa7c487687ba08295d44be62_1757675694.png)(or press the ESC key) >>> bring up the left panel - ESC Menu Bar, then click ![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/6e721811a919464ba6a39ffe852b4e37_1757675694.png)>>> enter the UI Controls Editor page and add the UI Controls template to the [UI Control Library] >>> select [Text Box] and [Interactive Button]

**3. [In-Game Editor] Configure Controls Parameters**

Configure [Text Box] and [Interactive Button] parameters.

_**[Interactive Button] uses default parameters without additional configuration. When using it, you can adjust parameters such as [Button Position], [Trigger Key], [Usage Interval], [Usage Count Limit] as needed._

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/e3248edb28a548c38f6acfbc14514ba2_1757675694.png)

**4. [In-Game Editor] Adding Controls to Interface Layout**

Add the completed controls to the interface layout.

**5. [In-Game Editor] Binding of Interface Controls to Specific Players**

In Combat Preset - Class, select Layout.

_**In this tutorial, there is no differentiation in player information display (e.g. Info A displayed for Player A, Info B displayed for Player B). Default configuration is used. If necessary, independent configurations can be set for different classes._

**6. [Miliastra Sandbox] Node Graph Configuration**

In the entity node graph, configure the node graph of [Player] (see recommended settings in the image below). To achieve the expected function effect, the tutorial configuration is as follows:

_**Special Note: The event node [When UI Control Group Triggered] corresponding to the interaction button can only be triggered by [Player]._

Features to Implement Corresponding Configuration Items
Feature

Increase points by pressing button Trigger Scene Triggered when the button is pressed Event Node: When UI Control Group Triggered (when any interactive button is pressed)
Condition//
Result Add 1 point after collection[Execution Node]: Use configured custom variable and set [Score After Collection = Current Score +1]

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/3c5e4e5a750b46feb80b31158f811c00_1757675694.png)

**7. Using [In-Game Editor] to Mount Node Graph**

Mount the configured node graph on [Player] and save the prefab settings.

**8. [In-Game Editor] Game Demo**

Enter the Test Mode to experience the functions.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/41d2f6914d3146fabb1972affdb4177e_1757675694.gif)

_**For more information, please refer to [Comprehensive Guide - Interactive Button UI Controls]._

# Interactive Button UI Controls

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 3: Information Controls - Point Progress Bar

**Feature Description:**Create a point progress bar. When players enter the point collection zone, the progress bar increases. After five seconds of point collection, a game clear message is displayed. If players leave the collection zone midway, the collection progress stops.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/e1368829bfb441b3b54fdc68296e4011_1757675695.gif)

**Implementation Steps:**

1. Add 3 custom variables to [Player], corresponding to the [Maximum], [Minimum], and [Current Value] of the point collection progress.

Variable 1, Name: [Maximum Point Collection] (name can be freely configured); Type: Integer; Initial Value: 100

Variable 2, Name: [Minimum Point Collection] (name can be freely configured); Type: Integer; Initial Value: 0

Variable 3, Name: [Current Points] (name can be freely configured); Type: Integer; Initial Value: 0

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/1d4c685c11b04882b1fb1d8eade9a1b6_1757675695.png)

2. Create a progress bar control. Select appropriate [Type], [Size], [Style], [Color], and other parameters. Configure current value, maximum value, and minimum value corresponding to [Player Themself]'s variable values. Save settings.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/a643f0c2077e496191e9f5ab87fd3684_1757675696.png)

3. Add the completed controls to the interface layout and bind them to the corresponding class (player).

4. Create a prefab as a point collection platform.

5. Add [Component - Collision Trigger] to this prefab. Select an appropriate type and configure the trigger area to cover the platform. Set the target to Character only.

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/75543ad97513439fb79977078d3fb8ce_1757675696.png)

6. Configure the node graph of the prefab (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

**Prefab Node Graph**

_**Since point collection is a progress state that continuously increases and changes value over time, a [Timer] is used to increase the progress value at a specific frequency (After the area, the timer starts to increase the collection value. After exiting the area, the timer stops and the collection value no longer increases)._

Features to Implement Corresponding Configuration Items
Feature 1

Entering the point collection area increases point collection value.Trigger Scene Triggered upon entering the circular platform.[Event Node]: When entering collision trigger (triggers when entering from outside and making contact with the configured area).
Conditions//
Result Start accumulating points[Execution Node]: Start timer and mount it to the player.

As it is triggered repeatedly, select [Loop = Yes]

In the tutorial, setting [Time Splice List = 0.5s] means the timer triggers once every 0.5s. It can be adjusted accordingly (e.g., triggers once every 0.1s or 1s).
Feature 2

Stop increasing point collection value after leaving the point collection zone.Trigger Scene Triggered after leaving the circular platform.[Event Node]: When leaving the collision trigger (triggered by touching the configured area from the inside)
Conditions//
Result No more points added.[Execution Node]: Stop timer and terminate the previously mounted timer.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/fabc357301e3463a9feef058bfa3fac9_1757675696.png)

**Player Node Graph**

Features to Implement Corresponding Configuration Items
Feature

Increase point collection value over time and win when collection points max out.Trigger Scene Specificed frequency

In the tutorial, changes occur every 0.5s as an example.[Event Node]: When timer is triggered

According to previous design, triggers every 0.5s.
Condition//
Result Increase point collection value[Execution Node]: Add custom variable to change current value.

Max value = 100, and max value can be reached in 5s. Hence, point collection value increases by 10 every 0.5s (New Value = Current Value +10).

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/1fae35f2d5c4445c9586c7480dbdae7c_1757675697.png)

7. Mount the node graph on the prefab and player. Save the settings. Place the prefab in the scene and enter the Test Mode to experience the functions.

_**For more information, please refer to [Comprehensive Guide - Progress Bar UI Controls]._

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/innovate the following features based on the course content.

> Feature Replication: Create an interactive progress bar to display mission completion progress. E.g. Current items collected/Required items.
> 
> 
> Advanced Extension: Create usable items that generate items with special effects and move in specific patterns when activated.

**Course Review:**Learn how to use appropriate interface controls to create information or interactive UI (e.g. creating mission progress, interaction progress, active items).

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files - UI Controls]**.

![Image 25](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

UI Controls.gil

34.1 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhcvo60uajk8/e8d87b6e3da6447ea7549ed2ee0cc75b_1757675697.gil)

[2.5 VFX: Enriching Your Effects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh055pi9lit0)[2.7 Faction Settings: Tag Detection and Attack Logic](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh99bn93wjzu)
