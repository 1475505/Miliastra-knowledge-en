---
id: mhv3ufrgotny
title: 2.11 Stage Settlement: Game Over and Finalizing Results for All Players
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhv3ufrgotny
language: en
scope: tutorial
crawledAt: 2026-05-31T15:49:06.159Z
---

# 2.11 Stage Settlement: Game Over and Finalizing Results for All Players

# Introduction

## Course Description:

**Course Content:**Stage Settlement Flow Design

**Learning Objectives:**Understand how to set up complete settlement conditions and flows during game design: Trigger settlement checks through specific events and link them with win conditions to create features such as winning by defeating a boss, reaching the podium, eliminating all other players, or collecting a specific number of coins. (Additional variations can be freely configured under Random Event. Not all are covered in this tutorial.)

_**This course involves two interconnected modules: "In-Game Editor Panel Configuration" and "Miliastra Sandbox Node Graph." It is recommended to read through the course in sequence._

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(if you're using this for the first time, it is recommended that you first learn_**_[Prerequisite Courses]_**_for a smoother learning experience.)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)

**Required Knowledge:**The course involves the following basic concepts: _(It is recommended that you follow the course materials. If the course details are unclear or you wish to understand further, please refer to the relevant chapters in_**_[_ _Comprehensive Guide_ _]_**_.)_

> [Stage Settlement](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhx1du08nhwo)

* * *

# Stage Settlement: Game Over and Finalizing Overall Results

## Feature Example 1: Interact with different tabs to trigger different stage settlements

### 1. Concept Overview

**Stage Settlement:**The final step in the game flow, marking the end of a session. (Depending on the setup, settlements can also occur mid-game.) Outcomes such as success, failure, or other results are determined based on gameplay performance.

_**Stage Settlement is a preconfigured node designed for flexible use, adaptable to various settlement operations and conditions._

### 2. Course Content

**Feature:**When player interacts with tabs, stage settlement occurs. Different options trigger different settlement outcomes (this tutorial demonstrates the process using Success and Failure Settlement).

**Effect Demonstration:**

Success Settlement

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/05991a8bb12143aeb3cd2954a8ef6c49_1758096965.gif)

Failure Settlement

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/c2d4e654332a472f94977300a0967e30_1758096966.gif)

### 3. Steps to Follow

**1. Create a settlement trigger object in In-Game Editor**

Create a prefab to act as the settlement operation object (this tutorial uses an Elemental Torch as an example), then, in the panel, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/346ca247643b4e629d6007c0cc430499_1758096966.png) to enter the component page, click ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/9256cdbd820241a7bc81976abf359741_1758096966.png)>>> Select "Tab" to add.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/f0e9324a64ec4ffe8ddd91a88df8434b_1758096967.png)

**2. Configure panel parameters in In-Game Editor**

Tabs can be customized after creation, including the tab list and option trigger areas. To achieve the desired functionality, in this tutorial we're configuring it as follows:

Features to Implement Corresponding Configuration Items
Set up two tabs to trigger different settlement results.In "Tab," configure the tabs as "Success Settlement" and "Failure Settlement."

_**Tab names don't affect functionality. What matters are the tab IDs._
Enlarge the trigger area slightly.Adjust the zoom ratio in "Trigger Option Area."

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/43a1699a293b4181b5af71399558caf4_1758096967.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/dd49415468c14b3aa5ff651ee59745c8_1758096967.png)

**3. Configure node graph in Miliastra Sandbox**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, in this tutorial, we're configuring it as follows:

****This node graph is mounted on the settlement operation prefab.**

Features to Implement Corresponding Configuration Items
Feature

After player interacts with the settlement operation prefab, the interaction option is checked and a corresponding settlement result is executed.Trigger Scenario Event triggers after player selects the tab.Event Node: When the Tab Is Selected
Condition 1 Execute different effects after different operations.Flow Control Node: Use multiple branches to determine "Option IDs"

_**In this tutorial, option IDs correspond to:_

_ID 1 > Success Settlement_

_ID 2 > Failure Settlement_
Result 1 Assign player's settlement status depending on the operation.Execution Node: Use "Set Player Settlement Completion Status" to set player's settlement status as either "Success" or "Failure."
Result 2 Finalize Level Execution Node: Use "Finalize Level" to finalize the game.

_**Executing "Finalize Level" ends the game instantly, and it is most often set as the closing node in the flow._

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/5a2e17e50fe240b6a7a9f7d8af8d77f5_1758096967.png)

**4. Mount node graph in In-Game Editor**

Mount the configured node graph on this prefab and save the prefab settings.

**5. Place the prefab and test gameplay in In-Game Editor**

Place the configured prefab in the scene and enter Test Play to use this feature.

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/66830516dfa84f15b8f20d7764c0d254_1758096968.gif)

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: After player picks up a specific object, direct player to perform an optional stage settlement

**Feature Description:**Once the required key item is acquired from the chest, direct the player to perform an optional stage settlement. Upon interaction, the system checks for the item. If present, settlement is executed.

_**Stage settlement itself is relatively straightforward,_ _but the real focus lies in guiding players to obtain the key item to carry out settlement correctly_ _. The following demonstration illustrates this process through a combined use of visual effects, bubbles, and UI elements._

**Effect Demonstration:**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/7a4b6a1b53dd45b7b66c0764111ffbb6_1758096963.gif)

**Implementation Steps:**

**1. Create an interactive chest object in In-Game Editor. Interacting with it provides a key item**

Create a prefab as an interactive object (this tutorial uses a Chest as an example), add a "Tab Component," and set the option text and trigger option area size.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/8ddcdf09af7f44f59eb9d6369f00a61d_1758096963.png)

**2. Create a guidance cue for the interactive chest in In-Game Editor**

Add a looping effect in the chest's "Effects Playing Component" to serve as visual guidance for interaction. Here, this tutorial uses an Arrow effect as an example. Configuration parameter details are as follows:

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/268389f9ff79420990afcc3fe2f64000_1758096963.png)

**3. Create custom player variables in In-Game Editor for stage-clear condition validation and UI element display**

Add 1 custom variable under "Player" to serve as the condition for stage clearance, and set the parameters as follows:

_Variable Name: Has key_

_Variable Type: Boolean_

_Initial Value: No_

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/b7e427f92fce4fa6bfc694d3cdf73243_1758096964.png)

**4. Create a UI prompt in In-Game Editor**

Create a UI element to display whether the player has a key. Save it and add it to the UI layout.

The text box should read: "Current Key Status: Player Variable – Has Key"

_**This is implemented by inserting the variable → Player Variable – Has Key._

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/0c98a36ac40045479f15c66033122b67_1758096964.png)

**5. Create an interactive object as the stage-clear mechanism in In-Game Editor**

Create a prefab to serve as the stage-clear interactive object (this tutorial uses an Elemental Torch as an example), add a "Tab Component," and then set the option text and adjust the size of the option trigger area.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/1d38273ecfa043fe911c66b9497d85e4_1758096964.png)

**6. Create a guidance cue for the stage-clear mechanism in In-Game Editor**

Add a "Text Bubble Component" to the stage-clear interactive object to guide the player to perform settlement via interaction, and set up the text content and position.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/5ebdec100d7f453a880f93dbce54056d_1758096964.png)

_**To ensure the player is guided to interact only after obtaining the required item, set the text bubble to be hidden by default._

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/bf00514b86a04a67a984bdcb672b452b_1758096965.png)

**7. Configure the node graph of the interactive chest in Miliastra Sandbox**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, in this tutorial we're configuring it as follows:

****This node graph is mounted on the interactive chest object.**

Features to Implement Corresponding Configuration Items
Feature

Upon chest interaction, the player obtains a key, and a guidance cue directs them to interact with the stage-clear mechanism.Trigger Scenario Event triggers after player selects the tab.Event Node: When the Tab Is Selected
Condition//
Result 1 Chest interaction is limited to once only.Execution Node: Use "Activate/Disable Tab" to disable this interaction option.
Result 2 Chest opens.Execution Node: Use "Set Preset Status" to configure the effect shown when the chest is opened.
Result 3 Disable the guidance cue effect for the chest.Execution Node: Use "Clear Effects by Effect Assets" to disable the effect.
Result 4 Player obtains the key item.Execution Node: Use "Set Custom Variable" to modify the custom variable on the interacting player for subsequent settlement checks.
Result 5 Add a guidance cue to the interactive stage-clear mechanism.Execution Node: Use "Mount Loop Effect" to add a effect to the stage-clear mechanism.

Execution Node: Use "Switch Effective Bubble Dialogue" to enable the previously created bubble dialogue.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/b915242d14bd4254a1e9ccf82018c3a0_1758096965.png)

**8. Configure the node graph of the interactive stage-clear mechanism in Miliastra Sandbox**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, in this tutorial we're configuring it as follows:

****This node graph is mounted on the interactive stage-clear mechanism object.**

Features to Implement Corresponding Configuration Items
Feature

Interaction with the stage-clear mechanism prompts a key item check: if the player has one, stage settlement succeeds.Trigger Scenario Event triggers after player selects the tab.Event Node: When the Tab Is Selected
Condition Check if player has the key item.Flow Control Node: Use Double Branch to check the custom variable on the interacting player.
Result 1 Set player settlement status.Execution Node: Use "Set Player Settlement Completion Status" to set the player's settlement status to "Success."

_**Without a settlement state preset, using "Finalize Level" directly defaults to a "Success" result. This case is included solely for demonstration._
Result 2 Finalize Level Execution Node: Use "Finalize Level" to finalize the game.

_**Executing "Finalize Level" ends the game instantly, and it is most often set as the closing node in the flow._

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/191e17a6c99d4afe802e8c26b3a8f0cd_1758096965.png)

**9. Mount the node graphs on their respective prefabs and save.**

**10. Place the created prefabs in the scene and enter the Test Play to experience the feature.**

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand on the following features based on the course content.

> **Feature Replication:**Create a multiplayer treasure contest mechanism. Players interact with a crown to claim it. The first to obtain the crown is the winner, and all other players are considered defeated.
> 
> 
> **Advanced Extension:**Create a simple quest system that guide the player to defeat specific monsters and obtain specific items. The quest is completed successfully when the player defeats the monsters and acquires the required items.

**Course Review:**Learn how to configure settlement states and flows with stage settlement node graphs, and design game completion logic for various situations.

### Supplementary Course Materials

We have provided relevant project files that can be studied with [Tutorial Files - Stage Settlement].

![Image 21](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Stage Settlement.gil

28.8 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhbhuormu2om/f86f78925c244e65ade5fd2fea18bdbc_1758096966.gil)

[2.10 Environment Configuration: Sky Backgrounds, Filters, and Light Sources](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhw64cr51fue)
