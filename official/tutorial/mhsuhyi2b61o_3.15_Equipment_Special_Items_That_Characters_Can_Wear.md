---
id: mhsuhyi2b61o
title: 3.15 Equipment: Special Items That Characters Can Wear
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhsuhyi2b61o
language: en
scope: tutorial
crawledAt: 2026-05-31T15:51:07.794Z
---

# 3.15 Equipment: Special Items That Characters Can Wear

# Introduction

## Course Description:

**Course Content:**This course primarily covers practical examples of how to create and use equipment.

**Learning Objectives:**Learn how to configure equipment and create equippable items that can boost character attributes or apply special effects.

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Courses] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[_ _Comprehensive Guide_ _]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(First-time users are recommended to study_**_[Prerequisite Courses]_**_for a smoother learning experience.)_

> [3.14 Loot, Items, and Inventory: Creating a Droppable and Usable Item](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh1t3z9s7hne)

**Required Knowledge:**The course involves the following basic concepts: _(Recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_.)_

> [Item](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhbgx0rspbqu)
> 
> 
> [Inventory](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhogfq9bf86q)
> 
> 
> [Equipment](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhkl2yin0cxo)

* * *

# Equipment: Creating Wearable Equipment

## Feature Example 1: Creating Armor That Increases Max HP When Equipped

### 1. Concept Overview

**Equipment:**A special type of item that can be worn (requires the "Equipment Slot Components" to function). Equipment supports the following configurable bonus mechanics that activate when equipped:

> _1. Base stat bonuses, such as increased HP, ATK, etc._
> 
> 
> _2. Custom logic written through node graphs._
> 
> 
> _3. Unit status effects._

### 2. Course Content

**Feature:**Create armor that increases Max HP when equipped.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/5aef7bd69e6f42899952a20742978cc7_1758097020.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Attach an Equipment Slot Component to the Character**

Go to [Combat Preset > Player > Edit Character], click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/b06228eb06fc4158a9a5197172d225ce_1758097023.png) to enter the Component page, then click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/3722233243a34bfb8d139ed1842c156c_1758097023.png) and select "Equip Slot Components" to add it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/6b605a5bb0834219bdab14db3902c451_1758097023.png)

To complete the equipment slots setup, you'll need to configure an Equipment Slot Template. Click "Equip Slot Template" in the equipment slot component, click "Open Equipment Slot Template Editor," click "Add Template" to create a new template, and then click the "+" icon under "Equip Slot Style" to add equipment slots.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/8cc30fc418654e43b6638f0defcdfb25_1758097024.gif)

You can also access the equipment slot configuration screen via [ESC Panel > Currency and Inventory > Equipment Slot].

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/8e6f4fdb18b24ee788be485ab36d3be4_1758097024.gif)

**2. [In-Game Editor] Create Equipment Slots**

This tutorial uses a basic equipment slot configuration with two slots as an example, one for a weapon and the other for armor. In actual projects, you may adjust the equipment slot template as needed to suit your gameplay design.

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
The equipment panel includes two slots.In the "Equipment Slot Style" section, click the "+" icon to add two empty slots.
One equipment slot is designated for weapons, the other for armor.[Current Slot Name] >>> Label one slot as "Weapon" and the other as "Armor"
Both the weapon and armor slots have corresponding icons.[Icon] >>> Select the corresponding icons
The weapon slot only accepts items of the "Weapon" type, while the armor slot only accepts items of the "Armor" type.[Equippable Types] >>> Select "Equipment Type" >>> Open "Equipment Type Editor" >>> Select "Add Type" >>> Add two types: "Weapon" and "Armor" >>> Return to [Equipment Slot Template] >>> Set the weapon slot's equipable type to "Weapon" and the armor slot's equipable type to "Armor"

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/d60d8259e633434e9b2df758c501acae_1758097024.png)

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/d297e480b2194e6d83c6807c832f2d52_1758097025.png)

**3. [In-Game Editor] Create Equipment**

Creating equipment follows a process similar to creating items. In the Combat Preset panel, click ![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/8b9d0e6c4ee44f6e8585000c7d22796c_1758097025.png) to enter the item configuration page, click "New Item," select an appropriate item icon from the pop-up window, then set the basic information of the item, such as name, type, rarity, etc. (in this tutorial, item name is set as "Armor," type is set to "Equipment," and rarity is set to "Blue"). Once all information is filled in, click "Save" to complete the creation.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/1160c58846e2482b81f6bd3f2652afe2_1758097017.png)

**4. [In-Game Editor] Create and Configure Equipment Affixes**

On the item details page, click [Interaction Settings > Equip Settings]. You can configure the equipment's type, tags, and affixes here. Begin by adding the desired affixes.

In the item's interaction settings, locate "Equip Settings," click "Add Affix," click "Open Equipment Affix Editor" to create a new affix (in this tutorial, the affix name is set to HP Bonus). After creating the affix, you can edit its detailed stats. For this example, we'll configure it to increase the character's max HP upon equipping the item. To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
The armor takes effect immediately upon being equipped.[Effective Timing] >>> Select "Effective when equipped"
Apply a fixed Max HP increase of 100,000,000 to the character.[Select Attribute] >>> Select "HP Correction Value"

[Bonus Type] >>> Select "Fixed Value"

[Fixed Bonus Value] >>> Set the value to "100,000,000"

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/795c2cfcd294405895f04bc87fb640bc_1758097018.png)

Once the affix has been configured, return to the armor item's interaction settings, click "Add Affix," and then select the "HP Bonus" option we previously created.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/375f2a6793ec44d3bdc2cf0bdae2e44d_1758097018.png)

As the equipment slots' equippable types have been set to "Weapon" and "Armor," make sure to select "Armor" as the item's equipment type in the [Equipment Settings]. Otherwise, it won't equip correctly.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/247d44ca559d45c0bed48c6d3be19b40_1758097018.png)

**5. [In-Game Editor] Add Inventory**

To enable equipment pickup and usage, we'll also need to add an inventory component and assign an inventory template to the character. For detailed steps, please refer to the previous course: "Loot, Items, and Inventory."

Click ![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/9477388d9d824d5bb8a601bf5c3bc785_1758097018.png) to open the Combat Preset screen, go to the [Edit Character] panel and click ![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/f0e8da7c31bc4ec5ac3271c5d6766916_1758097018.png) to enter the Component page, click ![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/6c2a882ca51a41ffbee78529e2b0bb79_1758097018.png), and then select "Inventory Component" to add it.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/de5a9ca8c0774dd8935d287f2783adde_1758097019.png)

For the inventory feature to function correctly, an "Inventory Template" must be configured. Click "Advanced Editing" in the inventory component, click "Please select the template" in the inventory template, click "Open Inventory Template Editor," and then click "Add Template" to add a new template.

In this tutorial, the default configuration is used, as there are no specific requirements. In actual projects, you may adjust the parameters of the inventory template as needed.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/27c9b5946bb5450baf566a2c6cf00925_1758097019.gif)

Once the appropriate inventory template has been configured, return to the basic settings of the inventory component and ensure the previously created template is properly selected.

To make it easier to demonstrate the equipment effect, the character will be configured to start with an "Armor" item in their inventory. In the inventory component, click "Starting Items," click "Add Starting Items," and then select "Armor."

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/0737974444634e54a5976a9d2a406b22_1758097020.png)

**6. [In-Game Editor] Test Gameplay**

Once configuration is complete, click "Play" to enter the stage for a test run. You can press [C] to quickly open the equipment slots (or [B] to open the inventory), and then equip the "Armor" item. After equipping, the character's HP will increase accordingly.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/b7bae976a4684313800e65054f94a393_1758097021.gif)

_**For more information, please refer to [Comprehensive Guide - Equipment]_

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

### Feature Example 2: Creating Equipment That Applies Custom Logic When Equipped

**Feature Description:**When the weapon Sword is equipped, its model will appear in the character's hand.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/dbeb75c596b84bacbaeeaa767246af6a_1758097021.gif)

**Implementation Steps:**

**Solution Analysis: Equipment functions as an item. By configuring the associated item node graph for the item Sword, equipping the item can execute the logic to generate a visual effect of the weapon model at the character's designated attachment point.**

1. Create a new item, name it "Sword," and set its category in the inventory to equipment. This completes the process of creating an equipment item called "Sword."

2. Configure both the equipment slot and the inventory to enable the use and equipping of the sword.

3.

In the interaction settings of the item sword, create and add a new tag named "Sword." This allows the item node graph to identify the equipped item as "Sword."

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/6c46635d8db54892b7812914393a26bb_1758097022.png)

4. Configure the item's node graph logic. Use the event triggered upon equipping to check whether the item's tag is "Sword." If true, attach a looping effect of a sword model to the equipment holder.

Features to Implement Corresponding Configuration Items
Feature

Apply a special effect when the equipment is equipped Trigger Scenario When player equips the equipment[Event Node]: When equipment is equipped
Condition Check if the equipment item has the tag "Sword"Get the event's [Equipment Index] >>> Use the [Query equipment tag list] node >>> Use the [Get the Corresponding Value in the List] node to retrieve the tag ID of the equipment

Use a [Double Branch] node to check whether the tag ID matches the tag ID of "Sword"
Result Mount a weapon model effect to the character's hand[Execution Node]: Mount a looping effect to the character

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/b50c920a87004a50ba5bee1d8bb858a1_1758097023.png)

5. Return to the basic Settings of the item "Sword." In the "Associated Item Node Graph" section, select the previously created node graph, and then click "Save" to apply the changes.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/0e2ef19f95114ca0956aa183fa9aeb2d_1758097023.png)

6. Enter the trial to experience this feature.

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Based on the course content, try to replicate the following features.

> **Feature Replication:**Create an attachment that increases ATK when equipped.
> 
> 
> **Advanced Application:**Create a weapon that applies special effects and abilities when equipped.

**Course Review:**Learn how to create equipment through basic settings and equip it from the inventory to boost character stats.

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Equipment]

![Image 26](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Equipment.gil

18.2 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhojuir7i2w6/922f74b7fe0e452693f4f6f6a7a8e38d_1758097023.gil)

[3.14 Loot, Items, and Inventory: Creating a Droppable and Usable Item](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh1t3z9s7hne)[3.16 Currency and Shops: Creating a Shop for Buying and Selling Items](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh53tyir62xo)

1
