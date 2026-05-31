---
id: mhhfcsifwb7w
title: 4.1.2 Farm Frenzy Control Tips and Feedback
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhhfcsifwb7w
language: en
scope: tutorial
crawledAt: 2026-05-31T15:53:22.018Z
---

# 4.1.2 Farm Frenzy Control Tips and Feedback

# Introduction

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Courses]

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses _(First-time users are recommended to study_**_[Prerequisite Courses]_**_for a smoother learning experience)_

> [3.1 Custom Variables: Switch Object Presentation Under Specific Conditions](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhflri07dzd4)
> 
> 
> [3.3 Follow Motion Device - Create Items that Attach and Follow](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhz70x0ra8u8)
> 
> 
> [3.4 Custom Attachment Point: Preset Points That Can Follow Movement and Rotate](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh85mxrh6kfy)
> 
> 
> [4.1.1 Farming: Collection Process](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh8gqrrpzzm6)

* * *

## Goal Breakdown

## Functional Logic

The following are gameplay features related to operation hints and feedback, which will be explained in combination during the course:

> ① Make interactive tools more visible (pickup guidance)
> 
> 
> ② Visual effects for player obtaining tools (equipped tool indication)
> 
> 
> ③ More visible effects after harvesting fruits (collection effects)
> 
> 
> ④ Differentiated display of interactive land (interaction guidance)
> 
> 
> ⑤ UI information prompts (various information tips)

### ① Interactive tools appear more noticeable (pickup guidance)

**Function Principle:**

Guide players to pick up items by adding a rotation motion device and special effects.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/8c73dec74baf4153898f69c528bab9ce_1757675290.gif)

**Steps:**

**1. [In-Game Editor] Add [Components - Basic Motion Device] to each tool, using cyclic rotation to show differentiation.**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/e84e564a6059411e82e8f255cddbfee5_1757675292.png)

**2. [In-Game Editor] Add looping effects to each tool to indicate pickable items.**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/fa6dbf0246f5428b97314e0c73ddb522_1757675292.png)

### ② Visual effects for player obtaining tools (when equipped with certain tools)

**Function Principle:**

When players obtain tools, prefabs are created and attached to the player to indicate that a tool is equipped.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/9ef4b5f3bed1489d8c4ac94b33341481_1757675292.gif)

**Steps:**

**1. [In-Game Editor] Create 3 decorative tools with the same model as the original tool for attaching to player, and add [Components - Follow Motion Device].**

_**Since the original tool already has tabs, effects and rotation, new tools need to be created to follow suit._

**2. [Miliastra Sandbox] Configure effects after picking up/switching/discarding items.**

**Function Logic:**

When the equipped tools on the player change - remove the originally equipped tools from the player - create new tools based on the tools picked up/switched, and attach them to the player.

_**The 3 items share the same functional logic, only differing in the type of item generated after checking player's equipment._

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Player]

Features to Implement Corresponding Configurations
Function

Destroy original item after pickup, trigger player pickup event Trigger Scenario After player picks up/switches/discards items

Pre-trigger through custom variable change[Event Node]: When custom variable changes

_**Used in previous tutorial_
Result 1 Destroy original tool decorations on self[Execution Node]: Destroy entity to delete the tool originally equipped on player
Condition Player picks up a tool[Flow Control Node]: Use [Multiple Branches] to check the new value
Result 2 Generate new tool after pickup[Execution Node]: Use [Create Prefab] to create a new tool at the original location
Result 3 New tool attaches to player's hand[Execution Node]: Use [Switch Follow Motion Device Target] to make the newly created tool follow the player's "Hand" attachment point, and configure appropriate offset and rotation

[Execution Node]: Use [Set Custom Variable] to modify the "decorative tool" variable on the player

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/de24ecfb64814e0690907c2a083f0613_1757675294.png)

### ③ More visible effects after harvesting fruits (collection effects)

**Function Principle:**

After players harvest fruits, a following effect is added to the items; when fruits are sold, all following items will be removed.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/51f627c533014be8bf8f6a416529d4e5_1757675294.gif)

**Steps:**

**1. [In-Game Editor] Add a variable list to [Player] to record collected items for subsequent deletion.**

_Type: Entity List_

_**Entity list is chosen because multiple items can be collected simultaneously, stacking effect is used so that subsequently each entity in the list can be removed._

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/f5b22eb06ceb4204af8d19be3518179f_1757675296.png)

**2. [In-Game Editor] Create a following fruit decoration and add [Components - Follow Motion Device] for subsequent node graph control to follow the player.**

_**No additional configuration is needed here, it will be called through the node graph later._

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/28077b1e9c694686be308f8a0b1aeeee_1757675296.png)

**3. [Miliastra Sandbox] Create following effects for objects after collecting fruits.**

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Player]

Features to Implement Corresponding Configurations
Feature

Item follows after collecting fruit Trigger Scenario After player collects fruit[Event Node]: When custom variable changes

_**Used in previous tutorial_
Condition Check if player is collecting fruit[Flow Control Node]: Use custom variable name to determine if player is performing fruit collection action.
Result 1 Create Decoration[Execution Node]: Create Prefab
Result 2 Make decorations follow the player[Execution Node]: Switch the target of the Follow Motion Device to follow the player

_**Here, to emphasize the collection effect, each object's following position has a certain offset, thus creating a stacking effect when collecting multiple fruits._
Result 3 Record decorative items for later removal after fruit submission[Execution Node]: Insert value into list, and store the created entity.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/729020131892456290f6e66a611eb136_1757675297.png)

**4. [Miliastra Sandbox] Create effect to clear following decorations after player submits fruits.**

**Function Principle:**

After the player submits the fruit, all entities in the recorded entity list will be removed, and then the list will be cleared.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Fruit Merchant]

Features to Implement Corresponding Configurations
Feature

Object follows after collecting fruit Trigger Scenario Player submits fruit[Event Node]: When custom variable changes

_**Used in previous tutorial_
Condition//
Result 1 Remove all fruit decorations[Execution Node]: Use [List Loop Iteration] + [Destroy Entity] to remove player-recorded collectible entities.
Result 2 Clear list for subsequent recording[Execution Node]: After the loop ends, use [Clear List] to empty the player's collectible entity list.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/f00df3b2ea9f40d9933056a8b1bc5e50_1757675288.png)

### ④ Differentiated display of interactive land

**Function Principle:**

Add white frame effects to interactive land tiles to guide players for interaction.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/198ccad12151402a84568256c162cd77_1757675288.gif)

**Steps:**

**1. [Miliastra Sandbox] Create interactive guide effects.**

**Function Logic:**

When players can operate the land for changes - remove the effects from the original interactive land - add effects to the new interactive land.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Player]

Features to Implement Corresponding Configurations
Feature

Destroy original item after pickup, and trigger player pickup event Trigger Scenario Player enters/exits interactive land area[Event Node]: When custom variable changes

_**Used in previous tutorial_
Condition Player enters/exits interactive farmland area[Flow Control Node]: Determine player entering/exiting interactive land.
Result 1 Remove effects from old land[Execution Node]: Remove effects
Result 2 Add effects to new land[Execution Node]: Add effects

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/a5764fc86a0d45b2b7440b023b637f38_1757675290.png)

### ⑤ UI Prompts (Various Information Tips)

**Function Principle:**

Add UI controls to display various information and provide guidance to players.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/8a9fc30605454f7f9e8a2f043e11a24c_1757675290.png)

**Steps:**

**1. [In-Game Editor] Add UI controls, and select text box.**

In the previous tutorial, various information variables were added for players. The information shown in the tutorial is as follows:

> 1. Currently equipped tool
> 
> 
> 2. Number of seed uses remaining
> 
> 
> 3. Number of fruits collected
> 
> 
> 4. Score

Create a text box by selecting variables from the [Player Themself] variable category.

_**When implementing, you can adjust flexibly according to your own needs._

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/989e840da30d48bc98fd63d8275b9643_1757675290.png)

* * *

# Supplementary Materials

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Operation Hints and Feedback].

![Image 16](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Operation Hints and Feedback.gil

93.9 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvknsiw4qp8/ff4c5acd1c5047c7a1995578149dec98_1757675290.gil)

[4.1.1 Farm Frenzy Farming: Gathering Process](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh8gqrrpzzm6)[4.1.3 Farm Frenzy Gameplay Flow](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhqdyt95smtm)
