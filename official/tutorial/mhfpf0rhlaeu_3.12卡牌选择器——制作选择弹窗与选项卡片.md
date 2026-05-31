---
id: mhfpf0rhlaeu
title: 3.12 Card Selector - Creating Selection Pop-ups and Option Tabs
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhfpf0rhlaeu
language: en
scope: tutorial
crawledAt: 2026-05-31T15:50:46.563Z
---

# 3.12 Card Selector - Creating Selection Pop-ups and Option Tabs

# Introduction

## Course Description:

**Course Content:**Creation and Use Cases of The Card Selector

**Learning Objectives:**Learn how to configure the card selector, create selection pop-ups and option tabs, trigger them through specific events, and generate the corresponding effects after selection. Can be used to create random items in Roguelike games, random effects after level up, etc. (such as: choose 1 from 3, choose 2 from 4, etc.).

_**This course comprises two interconnected modules: "_ _In-Game Editor Panel Configuration"_ _and "_ _Miliastra Sandbox Node Graph._ _" It is recommended to read through the course in sequence._

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_*If the course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Required Knowledge:**The course involves the following features covered in the prerequisite courses: _(If you're using this for the first time, we recommend that you first look at_**_"Prerequisite Courses"_**_for a smoother learning experience.)_

> [2.1 Collision and Interaction: Triggering An Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)
> 
> 
> [2.6 UI Controls: Displaying Information And Triggering Events on Click](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr6jorjp77a)

**Required Knowledge:**The course will involve the following basic concepts: _(It is recommended that you follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_.)_

> [Decision Maker Explorer Interface Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhvqksiqimh8)

* * *

# Card Selector - Pop-up for Option Tab Interaction

## Feature Example 1: Choose 1 from 3 options pop-up

### 1. Conceptual Overview

**Card Selector:**A special interface control that creates custom interactive option tabs through the configuration of the card selector and card panel, and which can be triggered through node graphs.

### 2. Course Content

**Feature:**Create a "3-choose-1" pop-up window. When players press the interactive button, the selection pop-up window opens, and they receive the corresponding effects based on their choice.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/19dffda55b6049c2ac9127134d3407d0_1758096988.gif)

### 3. Operational Steps

**1. Add card selector in In-Game Editor**

Click the top-left corner of the in-game editor ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/7097e1bddc8a4edd958f725d6cbf9a6b_1758096988.png)(or press the ESC key directly) >>> Bring up the left panel - ESC menu bar, then click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/f0eeba4c02df49c5ab76780a547f3326_1758096988.png)>>> In the UI Control Group Library, add a prefab template >>> Select "Card Selector."

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/d702fa94f692495389e42091f091883b_1758096988.gif)

**2. Configure controller parameters in In-Game Editor**

Configure the information in "Page Settings" and "Option Configuration," then save.

To achieve the desired functionality, in this tutorial we're configuring it as follows:

Features to Implement Corresponding Configuration Items
Option Prompt Message In [Page Settings - Title Text], enter "Please select 1 from the following 3 options".
The player must select one option and may not skip the selection altogether.Disable [Page Settings - Skip Selection].
Configure option cards and card text[Option Configuration - Deck Settings - Edit Details]

Add tabs as needed and modify them by "Type," "Icon," "Title," "Description," and others.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/bbd27cd409924f0ba2c5cdc61eff42a7_1758096989.png)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/221b58f1e754412384b84af1735a8487_1758096989.gif)

**3. Add trigger switches in In-Game Editor**

For convenience in this tutorial, we'll use pressing an interactive button to open a pop-up window as an example.

In "Interface Layout," add a prefab template >>>, Select "Interactive Button."

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/04273ca92e9e47018abc02ccf73a791b_1758096989.png)

**4. Add attachment point in In-Game Editor (**The settings here only enhance presentation and are not related to actual functionality.)**

For the purposes of the tutorial demonstration, we're adding a character back attachment point and configure the appropriate position offsets to show the effect of equipping the Catalyst.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/a9ce0a2f540c4fea91832eb18092e6ad_1758096989.png)

**5. Configure node graph in Miliastra Sandbox**

With the entity node graph, we add and configure the node graph for the player (see recommended settings in the image below). To achieve the desired functionality, in this tutorial we're configuring it as follows:

**This node graph is mounted on "Player."

Features to Implement Corresponding Configuration Items
Feature 1

After the player presses the interactive button, a 3-choice pop-up comes up.Trigger Scenario Event triggers when button is pressed.Event Node: When UI control group is triggered.
Condition//
Result Opens a "3-choose-1" pop-up.Execution Node: Use Card Selector to create the pop-up effect.

**Decision result/option correspondence list = Card ID

**Decision max/min limit affects the number of options that can be selected in this choice.
Feature 2

After an option is selected, generates the corresponding effect.Trigger Scenario After an option is selected.After an option is selected.
Condition 1 The corresponding card selector is completed.Use binary branch judgment logic to check the card selector index.

**Judgment is required when multiple card selectors exist.
Condition 2 Player selection completes the effect.Use binary branch judgment logic to determine the completion reason.

**Avoid event triggers due to timeout or other reasons.
Condition 3 Determine which card option was chosen.Use multiple branch logic to determine the selection result.

**Since there are multiple selection results, a list is returned, and judgment is made by taking values from the list.
Result Executes the corresponding result based on the selected card.In the tutorial, adding weapon effects is used as an example. In actual development, different effects can be freely created as needed.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/9b08bb00aa9e457c93de8744e025ec30_1758096990.png)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/c35b39c3657e4719a7d474701ec820ce_1758096985.png)

**6. Mount node graph in In-Game Editor**

Mount the configured node graph on the player.

**7. Test run in In-Game Editor**

Enter Test Run to use this feature.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/f468b23aeede4941a85201fc9ea36af6_1758096985.gif)

_**For more information, please refer to [Comprehensive Guide - Card Selector]._

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: "4-choose-2" option pop-up (including random effect creation)

**Feature Description:**After opening the chest, a "4-choose-2" window pops up. When the player presses the interactive button, the selection window pops up. Selection triggers the corresponding effects: one of the cards has a random effect (customized through node graph logic).

**Effect Demonstration:**

_**Random card effect: Deduct HP, with deduction value being a random number._

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/c41e3e3e8a154cbdba13392781da652d_1758096986.gif)

**Operational Steps:**

1. In the UI Control Group Library, add a prefab template >>> Select "Card Selector" to add a new card selector.

2. Add custom variable for "Player."

> Name: Effect of Unknown Card Obtained;
> 
> 
> Type: Integer;
> 
> 
> Initial Value: 0

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/94d15073aaf34e079a9f5a0efaaea547_1758096986.png)

3. Add a prefab template in "UI Control Group Library" >>> Select "Text Box" as the effect hint for selecting hidden cards. The information to be displayed reads: "You have received a random effect: HP deduction [Player's obtained unknown card effect]."

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/96067f3812e5445da2c8bf7b44e37a4b_1758096987.png)

4. Configure card selector controller parameters

Configure in Page Settings and Option Configuration, then save.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/731353781e5f466e80b47486a5d3e949_1758096987.png)

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/48ad3f392b0046aaa9229fe1cf91798d_1758096987.gif)

5. Create a chest as a trigger prefab, add an Option Card component, and configure the option tab information and option trigger area.

6. Create a node graph for triggering the chest opening pop-up.

****This node graph is mounted on "Chest."**

Features to Implement Corresponding Configuration Items
Feature 1

After the player interacts with the chest to open it, a "4-choose-2" pop-up appears.Trigger Scenario Triggers event after selection is made via interaction.Event Node: When tab is selected.
Condition//
Result 1 Opens a "4-choose-2" pop-up.Execution Node: Use Card Selector to create the pop-up

**Decision result/option corresponding list = Card ID

**Decision max/min limit affects the number of options that can be selected in this choice.
Result 2 Prevents option tabs from be interacted with repeatedly (to prevent chests from being opened multiple times).Execution Node: Use "Activate/Disable Tab" to disable this interaction option.
Result 3 Effect: Chest opens.Execution Node: Use "Set Preset Status" to change the chest's state.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/ba5ed8770e474e0488fa46e6debba091_1758096987.png)

7. Create a node diagram after making a "4-choose-2" pop-up tab.

****This node graph is mounted on "Player."**

Features to Implement Corresponding Configuration Items
Feature

After player selects an option, the corresponding option effect is triggered.Trigger Scenario After option is selected.After an option is selected.
Condition 1 Completion of corresponding card selector.Use binary branch judgment logic to check card selector index.

**Judgment needed when multiple card selectors exist.
Condition 2 Player selection completes effect.Use binary branch judgment logic to determine the completion reason.

**Avoid triggering events due to timeout or other reasons.
Condition 3 Determine which card option was chosen.Use multiple branch logic to determine the selection result.

**Since there are multiple selection results, a list is returned, and judgment is made by taking values from the list.
Result 1 Confirms which cards are selected.Since choosing 2 out of 4 returns a list of two options, you need to use "List Iteration Loop" + "Multiple Branches" to determine which 2 options were selected.
Result-2 Executes the corresponding Result-1 based on the selected card.

Known card adds special effects.In the tutorial, adding special effects is used as an example. During actual production, different effects can be freely created as needed.
Result 3 Executes the corresponding Result-2 based on the selected card.

Unknown card is for HP deduction.In this tutorial, "HP deduction" is used as an example and displayed through the UI text box.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/b23ab52b09044864acdbf7c7d654e2f6_1758096987.png)

8. Mount the node graphs on their respective prefabs and save.

9. Place the created prefabs in the scene and enter Test Mode to use the feature.

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand on the following features based on the course content.

> **Feature Replication:**
> 
> 
> > **Create a grid- type option pop-up window**
> 
> 
> **Course Review:**
> 
> 
> 
> ### **Supplementary Materials**
> 
> 
> **We have provided relevant project files that can be studied with [Tutorial Files - Card Selector].**
> 
> 
> 
> ![Image 20](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)
> 
> CardSelector.gil
> 
> 
> 
> 40.1 KB
> 
> [](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhtj800c96l4/154cbb627eac4cfbb099da0d6a4d350a_1758096987.gil)

[3.11 Nameplates and Speech Bubbles: Richer Information Display Styles in Scenes](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0mrr0c4xps)[3.13 Dictionaries and Structures - Data Structures with Mapping Relationships](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhg6ak9g62oy)
