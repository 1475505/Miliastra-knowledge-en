---
id: mh1t3z9s7hne
title: 3.14 Loot, Items, and Inventory: Creating a Droppable and Usable Item
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh1t3z9s7hne
language: en
scope: tutorial
crawledAt: 2026-05-31T15:51:01.310Z
---

# 3.14 Loot, Items, and Inventory: Creating a Droppable and Usable Item

# Introduction

## Course Description:

**Course Content:**This course mainly covers the creation and use cases of loot, items, and inventory systems.

**Learning Objectives:**Learn how to configure loot, items, and inventory to create items that can be picked up and stored in the inventory and used directly from it.

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Courses] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(First-time users are recommended to study_**_[Prerequisite Courses]_**_for a smoother learning experience.)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)

Required Knowledge: The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_.)_

> [Loot](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhkfj1iilnck)
> 
> 
> [Items](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhbgx0rspbqu)
> 
> 
> [Inventory](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhogfq9bf86q)

* * *

# Loot and Items: Creating a Droppable Item

## Feature Example 1: Creating a Destructible Mechanism That Drops Items

### 1. Concept Overview

**Loot:**Virtual objects that can be dropped into the scene, typically used to create pickable items such as equipment, consumables, currency, etc.

**Items:**Virtual objects that can be obtained, used, and traded by characters.

### 2. Course Content

**Feature:**Create a destructible mechanism that drops fowl when destroyed.

**Effect Demonstration:**![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/219289e65e1140b3af2bb7de1984eb55_1758097008.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Create a Loot Item**

Create a preset loot item to use as a dropped item (This tutorial uses "Fowl" as an example). In the Prefab Library screen, click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/d4dd36e216fc49e299a5b69997f383a0_1758097011.png) to enter the Loot page, go to "Preset," click "Challenge Coin Loot" > "Models," select "Fowl" to switch the loot model, and then click "Save" to add a new loot item.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/fcfa6d8ffe9a439ab22440007d5d9df6_1758097012.png)

The loot item comes with a "Loot Component" by default. In the panel, click ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/796d8c9da1d9485598318e38f62191db_1758097012.png)to enter the Component page to view the "Loot Component." To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
The loot item is picked up via interaction.[Pickup Rules] >>> Select "Interactive Pickup"
A landing animation is triggered when the item is dropped.[Enable Drop Animation] >>> Select "Enable"
The loot item will drop upon the destruction of another object rather than being preset in the stage.[Loot Content] >>> Configuration optional

If a loot item is directly placed into a stage, make sure to configure its [Loot Content] to enable interaction.

For loot that drops from an object when it is destroyed, use the [Fixed Loot Component] on the source object to configure the loot content. Refer to the section below for configuration steps.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/a89318d869eb44e99748c041a01236e3_1758097012.png)

**2. [In-Game Editor] Create an Item**

While the loot's model has been configured, it has not yet been linked to an actual item. To establish this connection, we must now configure the item corresponding to "Fowl."

In the Combat Preset panel, click ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/c5bd666ab76741468c996db691f3609a_1758097012.png)to enter the item configuration page, click "New Item," select the corresponding item icon in the pop-up window, then set the basic information of the item, such as name, type, rarity, etc. (in this tutorial, fowl is set as a normal item with green rarity). Once all information is filled in, confirm to complete the creation.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/ee15ff595eb1471786677a1e07270aa6_1758097012.png)

After creating the item, go to its Item Details page, find [Loot Settings > Corresponding Loot > Click to configure loot], and then select the "Fowl" item we just created.

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
The item can be consumed.[Inventory Category] >>> Select "Consumable"
When the entity carrying the item is destroyed, it will drop the item into the scene.[Item Handling When Owner Is Destroyed] >>> Select "Drop"
The item can only be picked up by a single player. Others won't be able to collect it afterward.[Loot Type] >>> Select "Shared Loot"

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/bc85c149880f4425a34b6d08368bb23a_1758097012.png)

**3. [In-Game Editor] Create a Mechanism That Drops Items Upon Destruction**

In the Prefab Library, create an entity to serve as the destructible mechanism (this tutorial uses a "Finchball" as an example). In the panel, click ![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/86039d0e973d4e63b577645b616d642d_1758097013.png)to enter the Component page and click ![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/3440ce38ffc34170b22646114bfb18a2_1758097006.png). Then select "Fixed Loot Component" to add it.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/f61a493a0a0c4b00872096e1acb0dfaa_1758097006.png)

Click "Advanced Editing" in the [Fixed Loot Component] to configure its settings. To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Drops 3 fowl items, but only displays 1 fowl loot item model.[Item Handling When Owner Is Destroyed] >>> Select "Group Drop"
The fowl item can only be picked up by a single player. Others won't be able to collect it afterward.[Loot Type] >>> Select "Shared Loot"
The loot item model is the fowl asset we configured earlier.[Corresponding Loot] >>> Select the previously created loot item "Fowl"
Upon destruction, the object will drop fowl ×3.[Fixed Loot Configuration] >>> Select the previously created item "Fowl" and set the quantity to "3"

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/54578e79a3834d9cb418a5b83b054d6a_1758097007.png)

**4. [In-Game Editor] Configuring the Mechanism's Destruction Logic**

Add destruction logic to the mechanism configured with drop logic (this tutorial uses a "Finchball" as an example). To quickly demonstrate the effect in this tutorial, the finchball is set to be destroyed immediately when an entity enters its collision trigger area. In actual projects, you can implement other destruction triggers as needed to suit your gameplay design.

① Configure the finchball with a [Collision Trigger Component] and specify its trigger area.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/d5908a54e6ea477e8e8126be9d0697cf_1758097007.png)

**5. [Miliastra Sandbox] Node Graph for Writing Destruction Logic**

We need to create a node graph to destroy the corresponding entity, which will be triggered by a collision trigger. The completed node graph should be mounted on the "Finchball" prefab.

Features to Implement Corresponding Configuration Items
Function

Enter the Collision Trigger Area to summon the Shop Trigger Scenario Enter Trigger Area[Event Node]: When Entering Collision Trigger
Condition//
Result Destroy Entity[Query Node]: D etermine that the entity being destroyed is an entity bound to the corresponding node graph.

[Execution Node]: Destroy Entity.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/3bb665528c964b77a77c1ddd69c644db_1758097007.png)

**6. [In-Game Editor] Place the Prefab and Test Gameplay**

Place the completed "Finchball" mechanism prefab into the scene, then click "Play" to try it out.

_**Please note: The fowl cannot be picked up at this stage, as the inventory component has not yet been configured. For detailed setup instructions, refer to Feature Example 2 below._

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/7443c3e9437f4cc690a1f8a442cd19da_1758097007.gif)

# Inventory: Picking Up Items and Using Them via Inventory

## Feature Example 2: Picking Up Loot into Inventory and Using Them to Restore HP

### 1. Concept Overview

**Inventory:**Stores items owned by players, such as equipment, consumables, materials, etc.

### 2. Course Content

**Feature:**Pick up the dropped fowl, store it in the inventory, and use it to restore HP.

**Effect Demonstration:**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/1f52ab77-36ae-4543-941e-7b510c436fe1.gif)

**1. [In-Game Editor] Add an Inventory Component and Template**

To ensure that loot items can be picked up properly, the character interacting with them must have the [Inventory Component] mounted. Click ![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/e3b92efdda084af380ddad9dfc8f4cfd_1758097008.png)to enter the Combat Preset screen, click ![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/cde63504c76f4e0eaa6cacde0a621827_1758097008.png) via the [Edit Character] panel to enter the Component page, click ![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/c8cda0da49e442d99f2d2708059775d8_1758097008.png), and then select "Inventory Component" to add it.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/a692b00121d54ad19bf4efb56f4b478d_1758097009.png)

For the inventory feature to function correctly, the corresponding [Inventory Template] must be configured. Click "Advanced Editing" in the inventory component, click "Please select the template" in the inventory template, click "Open Inventory Template Editor," and then click "Add Template" to add a new template.

_In this tutorial, the default configuration is used, as there are no specific requirements. In actual projects, you may adjust the parameters of the inventory template as needed._

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/9c3300972ca043d0908b98a0f999509c_1758097009.gif)

Once the appropriate inventory template has been configured, return to the basic settings of the inventory component and ensure the previously created template is properly selected.

If needed, you can also assign starting items to a character by configuring them in the [Starting Item List] screen. As this tutorial has no special requirements, this step will be omitted.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/1d1127c257244a11a7e845064248e9fc_1758097009.png)

Once the inventory configuration is complete, the assigned character will be able to collect loot items into their inventory. Press [B] to quickly open the inventory during gameplay.

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/53a3711cf869431d981cf108d5a7856e_1758097009.gif)

**2. [Miliastra Wonderland] Configure Item Usage Logic**

Our goal is to have the character restore HP upon using the "Fowl" item, so we'll need to mount a node graph logic to the item. Open [Auxiliary Editor], find the [Item Node Graph] tab in the server node graph, create a new blank node graph, and then name it "Fowl: Restores HP."

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/d7872d108deb449f954ed96727a06d06_1758097010.png)

Our goal is to have the character restore HP upon using the "Fowl" item. The specific logic and node graph connections are shown below:

Features to Implement Corresponding Configuration Items
Feature

Player restores HP after using "Fowl"Trigger Scenario When item is used[Event Node]: When items are used
Condition The used item is Fowl[Flow Control Node]: Binary branch & [Operation Node]: Check if the used item's ID matches that of "Fowl"
Result Restore player's HP[Query Node]: Identify the inventory owner as the healing target, and assign the item being used as the initiator entity

[Operation Node]: To support multi-item usage within one event, apply a

multiplication operation using the item quantity to calculate the total restoration value and convert the result to a float

[Execution Node]: Directly restore HP

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/dc32366b9d73447f99bb2d60303b2152_1758097010.png)

Next, return to the in-game editor, open the Combat Preset screen, enter the item editing page, select "Fowl," click the associated item node graph in the basic settings, select the "Fowl: Restores HP" node graph we just created, and then mount it to the item.

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/8c4552be568c41cb98fe84670b9eefcf_1758097010.png)

**3. [In-Game Editor] Test Gameplay**

You can now start a test run to pick up and use the item to restore HP.

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/6d101d45f12b4c43a4ff023c4b8008bd_1758097010.gif)

_**For more information, please refer to [Comprehensive Guide - Resource System - Inventory], [Comprehensive Guide - Resource System - Items], [Comprehensive Guide - Resource System - Loot], [Comprehensive Guide - Inventory Component], [Comprehensive Guide - Loot Component], [Comprehensive Guide - Fixed Loot Component]_

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Based on the course content, try to replicate the following features.

> **Feature Replication:**Create creations (monsters)that drop items when defeated.

**Course Review:**Learn how to create droppable items through basic settings, and how to use node graph logic to enable their usage from the inventory and trigger corresponding logic.

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Loot, Items, and Inventory]

![Image 29](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Loot, Items, and Inventory.gil

22.7 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhxigjixeehw/f4e8a5fb-7149-42f0-845b-aec514735fef.gil)

[3.13 Dictionaries and Structures - Data Structures with Mapping Relationships](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhg6ak9g62oy)[3.15 Equipment: Special Items That Characters Can Wear](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhsuhyi2b61o)
