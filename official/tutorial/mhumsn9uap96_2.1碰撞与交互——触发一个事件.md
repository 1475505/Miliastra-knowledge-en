---
id: mhumsn9uap96
title: 2.1 Collision and Interaction: Triggering an Event
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96
language: en
scope: tutorial
crawledAt: 2026-05-31T15:49:23.316Z
---

# 2.1 Collision and Interaction: Triggering an Event

# Introduction

## Course Description:

**Course Content:** How to use [Component > Collision Trigger] and [Component > Tab]

**Learning Objectives:** Learn to use collision triggers and tabs to emit events, which can be used to create pickup condition checks, trigger effects, and trigger mechanisms (can be freely programmed after triggering events, not all examples will be covered in this tutorial)

_**This course covers two interconnected modules: [Editor Panel Configuration] and [External Tool Node Graph]. It is recommended to read fully in sequence for better understanding_

## Related Information:

**Recommended Learning Order:**[Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the [_ Comprehensive Guide _] as needed._

**Required Knowledge:**The course involves the following basic concepts: (It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the **[Comprehensive Guide]**.

> [Collision Trigger Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh8szf0sp9e8)
> 
> 
> [Tab Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhhd4di1nn5g)

* * *

# Collision Trigger: Triggering Events Through Collision

## Feature Example 1: Picking up an Item After Entering an Area

### 1. Concept Overview

**Collision Trigger:** By configuring triggers and detection ranges, events are triggered when specific targets enter/exit certain areas

### 2. Course Content

**Function:** Create pickable items that are automatically picked up when entering the pickup range

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/ed44eea6cd5b44e7a172f429453ad7c7_1757675638.gif)

### 3. Steps to Follow

**1. Using [In-Game Editor] to Add Components**

Create a prefab as an interactive object (this tutorial uses Challenge Coins as an example), click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/b9f24172fa9d426dab5179cb75be23f5_1757675642.png) on the panel to enter the components page, then click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/8fcd000bcd6749c88e9ddc19c057b6f0_1757675643.png) and select [Collision Trigger] to add it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/b32bd50de3874f34b8d98f7a3d8ce4d4_1757675643.png)

**2. Using [In-Game Editor] to Add Triggers**

After opening [Component > Collision Trigger], there are no triggers by default. Click ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/b4126220e05f41188be8b29ed81e6da9_1757675643.png) to add a trigger (multiple triggers can be added simultaneously to switch between different triggered effects)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/914e8b19124f4ec2bb76988df2530463_1757675643.png)

**3. Using [In-Game Editor] to Configurate Panel Parameters**

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Only player units can trigger pickup (objects/monsters entering the area will not trigger pickup)Set [Target] to characters only
Has a limited pickup range Increase [Zoom Multiplier] slightly

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/692f19a933ad47bb8e4722c6a767e033_1757675644.png)

After configuration is complete, you can preview the actual trigger area effect on this interface.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/419e3bfee0c146bbae01eada41f1cc89_1757675644.png)

Additionally, you can configure the rules of triggers such as [Initially Effective], [Trigger Area Shape], and [Range] in the panel, which can be adjusted freely as needed in actual use.

_**Configuration Item Description:_

_Initially Effective: Whether to display when the object is created (enabled by default when turned on, needs to be dynamically enabled through node graph when turned off)_

_Target: Can be set to characters, objects, and enemies (since tabs can only be selected by characters, no additional configuration is needed)_

**4. Configurating [Miliastra Sandbox] Node Graph**

In the example node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Feature

Pick up an item after entering an area Trigger Scenario Pick up upon entering range[Event Node]: When entering the collision trigger (triggered by touching the configured area from the outside)
Conditions//
Result Pick up Coins[Execution Node]: Use [Destroy Entity] to create pickup effect

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/b3b6058908294dd5998d47657cf9ca83_1757675644.png)

Additionally, you can use the node creation function on other collision triggers to create features such as a base fountain that heals those inside it and stops healing them when they leave.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/d947cf14707c4447805acc9455ef7189_1757675631.png)

**5. Using [In-Game Editor] to Mount Node Graph**

Mount the configured node graph on this prefab and save the prefab settings

_**This is a basic operation. The tutorial will only demonstrate it once. Make sure to mount correctly without omissions._

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/d85f13be09ae4451b8f98301ee21408e_1757675632.png)

**6. Using [In-Game Editor] to Place Prefabs and Test Gameplay**

Place the modified prefab in the scene and enter Test Mode to experience this feature

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/a0a5637cafc9403ebc80b27aecf44510_1757675632.gif)

**For more information, please refer to [Creation Manual > Collision Trigger Component].

# Tabs: Triggering Events Through Interactive Options

## Feature Example 2: Opening a Chest After Interaction

### 1. Concept Overview

**Tab:** It is cased on collision triggers and encapsulates Genshin Impact's native dialogue options, meaning when entering the option trigger area, an option list will pop up; through configurating options, events are triggered when players interact with the options.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/174a8e7b7e304aa9ada734cc0c6df96a_1757675633.png)

### 2. Course Content

**Function:** Create an interactive chest that can be interacted with when entering its range and opens after interaction

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/08c6eb3ca1d3495298b2dc35830caf18_1757675634.gif)

### 3. Steps to Follow

**1. Using [In-Game Editor] to Add Components**

Create a prefab as an interactive object (this tutorial uses a Chest as an example), click ![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/3a71daf63e954d7d9457b04030cccf01_1757675634.png) on the panel to enter the components page, then click ![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/490a494871604c0cad795743675bed41_1757675634.png) and select [Tab] to add it.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/e459d2afddd345e8ba7ab0b00113b8d3_1757675634.png)

**2. [In-Game Editor]: Preset Status - Interactive Performance**

The chest selected in the tutorial has [Preset Status] that simplifies the creation of chest opening; you can check the [Preset Status Name] and [Status Value] on the confirmation panel.

_**[Preset Status] refers to an animation state of an encapsulated object (e.g., chest opening/closing, coin rotation, lever switching). Currently, only some objects have Preset Statuses. For more information, please refer to [Creation Manual > Preset Status]._

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/30b8f558e3ec48f6ae1dbf8375ab59ee_1757675635.gif)

**3. Using [In-Game Editor] to Configure Panel Parameters**

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
There are some hints to interactions, taking "Open Chest" as an example Set [Tab List > Option Text] to "Open Chest"
Has a certain interactive range Increase [Trigger Option Area > Zoom Multiplier] slightly

_**Since [Component > Tab] includes 1 default option and 1 trigger area by default, no addition is needed for this tutorial. In actual use, you can select [Add Tab] or [Add Trigger Area] to add new configuration items as needed._

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/3c8db710d55d4f3d81252a85a0e13055_1757675638.png)

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/63dfdb312ee747dfa950d674c007401e_1757675640.png)

After configuration is complete, you can preview the actual trigger area effect on this interface.

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/576e9de7ccc441599829a6c6b30ef1fa_1757675640.png)

Additionally, you can configure rules such as [Initially Effective], [Sort Level], [Option Icon], and [Trigger Area Shape] on the panel, which can be freely adjusted as needed in actual use

_**Configuration Item Description:_

_Initially Effective: Whether to display when the object is created (enabled by default when turned on, needs to be dynamically enabled through node graph when turned off)_

_Tab: Configure different options (multiple options can be configured to trigger different events, but in this tutorial, only 1 is configured)_

_Sort Level: Affects the sorting order of options (options with higher levels appear first; options with equal levels are sorted by order of addition)_

_Local Filter: Uses a special local filter node graph to further determine whether the tab should be displayed (e.g., showing different content to different players)_

**4. Configurating [Miliastra Sandbox] Node Graph**

In the example node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Feature

Opening a chest after interaction Trigger Scenario Triggered after interaction[Event Node]: When tab is selected (triggered when "any" interactive option is selected)
Conditions//
Result 1 Chest opens[Execution Node]: Use [Set Preset Status] to create chest opening effect
Result 2 Cannot open chest again after it opens[Execution Node]: Use [Enable/Disable Tab] to disable the option to prevent further interaction

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/7b3749f8eda348e194e35114e86cd7dc_1757675640.png)

**5. Using [In-Game Editor] to Mount Node Graph**

Mount the configured node graph on this prefab and save the prefab settings

**6. Using [In-Game Editor] to Place Prefabs and Test Gameplay**

Place the modified prefab in the scene and enter Test Mode to experience this feature

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/1f7558b771ea4cb0941da6114aad770c_1757675640.gif)

*For more information about tabs, please refer to [Comprehensive Guide> Tab Component]

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 3: Activate Mechanisms After Picking up Specific Objects

**Feature Description:** After entering the key collision trigger area, the player will obtain a key. A custom variable is added as a condition. When interacting with the chest, the system checks if the player has the key (by checking the custom variable). If the condition is met, the chest will open.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/94733bef435f4fc99a1210955d623622_1757675641.gif)

**Implementation Steps:**

1. On [Player], add a custom variable named [Has Key], typed [Boolean], initially valued [No]

2. Create a Prefab A as a key

3. On Prefab A, add [Component > Collision Trigger] and configure the trigger and trigger area rules as needed

4. Configure the node graph of Prefab A (see recommended settings in the image below)

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/d246c1ac5bc74c5f91dc6f9b63b3c073_1757675641.png)

5. Mount the node graph of Prefab A onto Prefab A and save the settings

6. Create a Prefab B as an interactive mechanism (select the Exquisite Chest in the tutorial, which has preset open/close states)

7. On Prefab B, add [Component > Tab], configure option text, icon, etc., and set the option's trigger area

8. Configure the node graph for Prefab B (see recommended settings in the image below)

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/e987b3c8fc514c649dbefabd60932ea5_1757675641.png)

9. Mount the node graph of Prefab B onto Prefab B and save the settings

10. Place Prefab A and Prefab B in the scene

11. Enter Test Play to experience this feature.

## Feature Example 4: Displaying Different Options Under Different Conditions (Using Filter Node Graph, Modified Based on Feature Example 3)

**Feature Description:** When the player doesn't have a key, the chest interaction option says "Requires a key to open"; when the player has a key, the chest interaction option says "Open chest"

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/84e22f4d03cf485d90f2eb76ca6f08fa_1757675642.gif)

**Implementation Steps:** Steps 1~6 and 9~12 are identical to Feature Example 3 (no additional explanation needed), only Steps 7~8 are different

1. On [Player], add a custom variable named [Has Key], typed [Boolean], initially valued [No]

2. Create a Prefab A as a key

3. On Component A, add [Component > Collision Trigger] and configure the trigger and trigger area rules as needed

4. Configure the node graph of Prefab A

5. Mount the node graph of Prefab A onto Prefab A and save the settings

6. Create a Prefab B as an interactive mechanism (select the Exquisite Chest in the tutorial, which has preset open/close states)

7. Configure the filter node graph for Prefab B (see recommended settings in the image below)

**This tutorial uses a [Boolean Filter Node Graph], which needs to be viewed in the Client Node Resource Explorer. To open it: Click on the window in the top-left corner of Miliastra Sandbox >>> Client Node Resource Explorer. This node graph will read the [True/False] output of the node.

_-_ If the final output is [True], the tab referencing the filter node graph **will be active**, and the player will see this option (displayed).

_-_ If the final output is [False], the tab referencing the filter node graph **will not be active**, and the player will not see this option (not displayed).

**For more detailed information about filter node graphs, refer to subsequent lessons.

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/f2fa0b7300654a0dabaf1be6def3a159_1757675642.png)

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/51a93fb83ed246d7b4eb90d20f01cb9c_1757675642.png)

8. On Prefab B, add [Component > Tab], configure tab text, icon, filter node graph, etc., and set the option's trigger area

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/a5049c2663164bfab89c0ca103065655_1757675642.png)

9. Configure the node graph of Prefab B (see recommended settings in the image below)

10. Mount the node graph of Prefab B onto Prefab B and save the settings

11. Place Prefab A and Prefab B in the scene

12. Enter Test Play to experience this feature

* * *

# Course Summary and Supplementary Materials

**Course Assignment:** Try to replicate/expand the following features based on the course content

> **Feature Replication:** Create a mechanism where Switch A opens Chest B
> 
> 
> **Advanced Extension:** Create a simple quest system, whose first dialogue initiates the quest "Collect Coins: Pick Up 5 Coins", which can be submitted if conditions are met and shows "Not completed yet" if conditions are not met

**Course Review:** Learn how to use [Component > Collision Trigger] or [Component > Tab] to emit events and create various interactive mechanisms or props

### Supplementary Materials

We have provided the project files related to the above lessons, which can be studied in conjunction with **[Tutorial File > Collision and Interaction]**.

![Image 32](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Collision and Interaction.gil

38.5 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhloq9rfs5ku/e68192cdaf5e4801936597e4ca0cdd22_1757675643.gil)

[2.2 Character Settings: Enhance Character Attributes to Enable Running and Jumping](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr0zrrfahm6)
