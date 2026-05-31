---
id: mhg6ak9g62oy
title: 3.13 Dictionaries and Structures - Data Structures with Mapping Relationships
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhg6ak9g62oy
language: en
scope: tutorial
crawledAt: 2026-05-31T15:50:53.392Z
---

# 3.13 Dictionaries and Structures - Data Structures with Mapping Relationships

# Introduction

## Course Description:

**Course Content:**The concept and usage of dictionaries and structures in data structures

**Learning Objectives:**Understand what dictionaries and structures are, and configure data structures with mapping relationships to store and use variables in complex logic.

> **1. A dictionary can be used to store a set of data with mapping relationships.**For example, in a party game, it can be used to record the scores of all players on the field. Without a dictionary, you'll need to create multiple custom variables to represent each player's score. With a dictionary, you can create a dictionary of entities and integers to represent the player entities and their corresponding scores.
> 
> 
> **2. Structures can be used to store and use a variety of data combinations.**For example, in RPG gameplay, to create a weapon with multiple attributes, the data information required includes three fields: "Weapon Name" (string), "Attack Power" (floating point number), and "Enhanced or Not" (Boolean value), which can be stored and used through a structure.

_**This course involves two interconnected modules: "_ _In-Game Editor Panel Configuration_ _" and "_ _Miliastra Sandbox Node Graph_ _." It is recommended to read through the course in sequence._

## Relevant Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If the course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(if you're using this for the first time, it is recommended that you first learn_**_[Prerequisite Courses}_**_for a smoother learning experience.)_

[2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)

[3.1 Custom Variables: Switch Object Presentation Under Specific Conditions](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhflri07dzd4)

**Required Knowledge:**The course involves the following basic concepts: _(It is recommended that you follow the course materials. If the course details are unclear or you wish to understand further, please refer to the relevant chapters in_**_[_ _Comprehensive Guide_ _]_**_._

[Dictionaries](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhubgk9yy8gy)

[Structures](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh3fmi0t99ns)

* * *

# Dictionary: A Data Structure with Mapping Relationships

## Feature Example 1: Create a dictionary to store score values for different objects. The corresponding points are gained when the player picks up items.

### 1. Conceptual Overview

**Dictionary:**By configuring "Keys" and "Values", we can establish a mapping relationship between data type A and data type B, which can be dynamically queried and used during actual gameplay.

### 2. Course Content

**Feature:**Create multiple collectible objects, each with different point values, resulting in different scores when collected.

**Effect Demonstration:**

_**The obtained points value is displayed as UI text in the player interface (the 4 items correspond to the point values of +1, +2, +3, +4 respectively)._

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/1b88252c073447b980a551c567c09c8b_1758096996.gif)

### 3. Operational Steps

**1. In In-Game Editor, create four different objects and add custom variables as their identifiers.**

Create four prefabs as collectible items (we're using Fowl, Matsutake, Fish, and Fruit Pile as examples in this tutorial), and add variables as identifiers in the Custom Variables component.

_**The procedure is the same for all four_ prefabs _in the tutorial. Only the initial values are set differently for each prefab. Here, Fowl is used as an example._

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/c3acab62b5e84bbea6fcdfefc408dae6_1758096999.png)

**2. In In-Game Editor, add components to make the four items collectible.**

Add the Collision Trigger component to each of the 4 prefabs, create trigger zones, and configure their parameters.

_**The procedure is exactly the same for all four_ prefab _s in this tutorial, with Fowl used as an example here._

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/fa884542b41d4c43a8e593149e090d7b_1758096999.png)

**3. Create dictionary in In-Game Editor**

Due to functional requirements, this dictionary needs to have global query capabilities. Therefore, the dictionary is configured at "Stage Entity." Add custom variables and set the parameters as follows:

_Variable Name: Item Point Table_

_Variable Type: Dictionary_

_Key Type: String; Value Type: Integer_

_The dictionary list contains the "Item Name" and the corresponding "Point Value" columns._

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/229bf7d7048e48eeb98ebab3978f6d02_1758096999.png)

**4. Create score display effect in In-Game Editor**

① Add a custom variable to "Player" with the following configuration:

_Variable-1 Name: Score; Type: Integer; Initial Value: 0_

_Variable-2, Name: Picked Up Item; Type: String; Default Initial Value_

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/6a69737a321943fd95a1c5edcdb05f60_1758096999.png)

② Create and add a UI control "Text Box," and set the text content to:

_"You have picked up [Player Variable - Picked Up Item], and gained [+Player Variable - Points] points"._

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/c849a51369204c29a19009976d309862_1758097000.png)

**5. Configure node graph in Miliastra Sandbox**

In the node graph used in the example, add and configure the node graph for this component (see the recommended settings in the image below). To achieve the desired functionality, in this tutorial we're configuring it as follows:

****This node graph is mounted on the four collectible prefabs.**

Features to Implement Corresponding Configuration Items
Feature

When the player enters the pickup range, they pick up the item and sees a score increase on item value.Trigger Scenario Event is triggered when player enters pickup range.Event Node: When player enters the collision trigger.
Condition//
Result 1 Modifies the display of player's score value.Execution Node: Use "Set Custom Variable."

Query the level entity dictionary to find the corresponding score value by matching the trigger entity's [Custom Variable - Name].
Result 2 Modifies the display of player's acquired items.Execution Node: Use "Set Custom Variable."

Since the item's Custom Variable-Name has already been set, simply use this variable to replace the player's variable.
Result 3 Item disappears after pickup.Execution Node: Use "Destroy Entity" to destroy the picked-up item.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/4c690a83e66c4afd8141a30b92a6d1e4_1758097000.png)

**6. Mount node graphs in In-Game Editor**

Mount the configured node graph on the prefab and save the prefab settings.

**7. Place prefab and test gameplay in In-Game Editor**

Place the configured prefab in the scene and enter Test Mode to use this feature.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/f0f4dec571704ac5a1a2db2046253032_1758097000.gif)

_**For more information, please refer to [Comprehensive Guide - Node Graph Advanced Features - Dictionary]._

# Structure - A Composite Data Type That Integrates Multiple Variables of Different Types

## Feature Example 2: Crediting the corresponding attribute bonuses from picked-up equipment

### 1. Conceptual Overview

**Structure:**A special custom data type that can integrate multiple variables of different types together, commonly used to represent objects with multiple attribute types (e.g., equipment/items containing various attributes and stat bonuses).

### 2. Course Content

**Feature:**Create three pieces of equipment with different levels that grant the corresponding attribute values when picked up.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

_**The attributes obtained from picked-up equipment are displayed as UI text through the player interface control._

_Corresponding Attribute Values:_

> _Lv. 1 equipment: ATK +10, DEF +10, HP +100;_
> 
> 
> _Lv. 2 equipment: ATK +20, DEF +20, HP +200;_
> 
> 
> _Lv. 3 equipment: ATK +30, DEF +30, HP +300._

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/86eb812a524943d092bf634a16ae6e0d_1758097001.gif)

### 3. Operational Steps

**1. In In-Game Editor, create three objects as equipment of different levels.**

Create three prefabs as collectible equipment (due to current lack of object models, this tutorial uses "empty object + effects" as an example, and uses model scaling to represent different equipment levels).

_**The creation process for all three prefabs in this tutorial is identical, with only differences in "Custom Variable" and "Effects Zoom." Here, we'll use the Lv. 1 and Lv. 2 equipment as our examples._

① Add a variable in the Custom Variables component as a level identifier.

_Variable name: Level_

_Variable Type: Integer_

_Initial value: Based on the prefab settings (e.g., initial value of Lv.1 Greatsword = 1; initial value of Lv. 2 Greatsword = 2)_

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/c382243ff16d4ed49fe8cbc959dd0f88_1758096994.png)

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/15a2fe1e4dbc492f8b78dc7fd51e2487_1758096994.png)

② In the SFX Playing component, in "Looping Effects" select the corresponding effect, then configure scaling, offset, and rotation (for the purposes of distinction, maintain only differences in scaling and offset).

_Scale ratio: Based on the prefab settings (e.g.: Lv. 1 Greatsword = 1; Lv. 2 Greatsword = 1.5)._

_Offset: Based on the prefab settings (e.g., Lv. 1 Greatsword = 1.5; Lv. 2 Greatsword = 2)._

_Rotation: The rotation settings for all three prefabs are identical._

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/9ec2e767b86b460b97da66e167c01e5d_1758096994.png)

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/d621d2fc3bfe47f784dcdfe2265b562c_1758096995.png)

③ Add a Collision Trigger component to trigger the equipment acquisition event upon collision.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/15ed161f58f74b59bfb2cf0863621b42_1758096995.png)

**2. Add structure in In-Game Editor**

Click on the upper left corner of the in-game editor ![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/83c1e67069794a13b6bed16f1035162a_1758096995.png)(or simply press the ESC key) >>> In the lefthand side panel - ESC menu, click ![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/cdf131e23c8640fcb1995a71c6c17514_1758096995.png)>>> In the interface, click ![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/aa54b728c60b4c5a8ce710fd8be24076_1758096996.png)to add structure >>> Configure custom variables stored in the structure on the righthand side >>> Click ![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/8b8ceddee5084ddba324a5480b320629_1758096996.png)"Save Structure" to save.

To achieve the desired functionality, in this tutorial we're configuring it as follows:

_**The structure configured in this tutorial represents the initial values for equipment attributes, which are used for subsequent value calculations after equipment of different levels are acquired._

_[Equipment attributes at Lv. X] = "Lv. X" × [structure initial value]_

_Example: Lv. 2 equipment attributes = 2 × initial value_

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/6705dd8c9ba64463a73cff58112076ca_1758096996.png)

**3. Create score display effect in In-Game Editor**

① Add custom variables to "Player" with the following configuration:

_Variable-1, Name: Equipment Level; Type: Integer; Initial Value: 0_

_Variable-2, Name: ATK Bonus; Type: Float; Initial Value: 0_

_Variable-3, Name: DEF Bonus; Type: Float; Initial Value: 0_

_Variable-4, Name: HP Bonus; Type: Float; Initial Value: 0_

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/2ef4382de11d45d98d5e0ce4f95c63bc_1758096997.png)

② Create and add interface control "Text Box," set the text content to:

_Equipment Level: [Player Variable - Equipment Level]_

_ATK Bonus: [Player Variable - ATK Bonus]_

_DEF Bonus: [Player Self Variable - DEF Bonus]_

_HP Bonus: [Player Self Variable - HP Bonus]_

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/15cb6dd738814e72911c97fa09b6cc37_1758096997.png)

**4. Configure node graph in Miliastra Sandbox**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, in this tutorial we're configuring it as follows:

****This node graph is mounted on the three collectible prefabs.**

Features to Implement Corresponding Configuration Items
Feature

When player enters pickup range, picks up item and gains a score increase based on item value.Trigger Scenario Event triggers when player enters pickup range.Event Node: When entering collision trigger.
Condition//
Result 1 Modifies player's displayed equipment level.Execution Node: Use "Set Custom Variable."

Since the item's Custom Variable Level has been set, simply replace the player's variable with it.
Result 2 Modifies player's displayed ATK/DEF/HP Bonus.Execution Node: Use "Set Custom Variable."

Get the trigger entity's Custom Variable-Level, then calculate equipment attributes for each level using "Split Structure."
Result 3 Item disappears after pickup.Execution Node: Use "Destroy Entity" to destroy the picked-up item.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/31ed54f72012469b9edbae8ede6d6a45_1758096997.png)

**6. Mount node graph in In-Game Editor**

Mount the configured node graph on this prefab and save the prefab settings.

**7. Place prefabs and test gameplay in In-Game Editor**

Place the configured prefab in the scene and enter Test Mode to use this feature.

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/ab918bb8d8f54285ad86074d8703248f_1758096997.gif)

_**For more information, please refer to [Comprehensive Guide - Node Graph Advanced Features - Structure]._

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Based on the course content, try to replicate/expand on the following features:

> **Advanced Extension:**Create an equipment system for RPG gameplay by combining dictionaries and structures to set up various equipment types, names, levels, attributes, and other parameters.

**Course Review:**Learn how to use dictionaries and structures to create data structures with mapping relationships for complex variable storage and usage in functional logic.

### Supplementary Course Materials

We have provided relevant project files that can be studied with [Tutorial Files - Dictionaries and Structures].

![Image 25](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

DictionariesandStructures.gil

41.8 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh6h2k9naq3m/3d5eb17a78334a809502baaf8494b67f_1758096998.gil)

[3.12 Card Selector - Creating Selection Pop-ups and Option Tabs](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhfpf0rhlaeu)[3.14 Loot, Items, and Inventory: Creating a Droppable and Usable Item](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh1t3z9s7hne)
