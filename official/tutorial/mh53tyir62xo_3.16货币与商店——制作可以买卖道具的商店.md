---
id: mh53tyir62xo
title: 3.16 Currency and Shops: Creating a Shop for Buying and Selling Items
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh53tyir62xo
language: en
scope: tutorial
crawledAt: 2026-05-31T15:51:20.506Z
---

# 3.16 Currency and Shops: Creating a Shop for Buying and Selling Items

# Introduction

## Course Description:

**Course Content:**This course primarily covers practical examples of how to create and use currency and shops.

**Learning Objectives:**Learn how to configure currency and shops, allowing players to open shops and trade items.

_**This course covers two interconnected modules:_ _[In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]_ _. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Courses] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(First-time users are recommended to study_**_[Prerequisite Courses]_**_for a smoother learning experience.)_

> [3.14 Loot, Items, and Inventory: Creating a Droppable and Usable Item](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh1t3z9s7hne)

Required Knowledge: The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_.)_

> [Currency](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh2cr30yeak0)
> 
> 
> [Shop](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhi9s7isvp50)
> 
> 
> [Shop Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mho6gviqhsqs)

* * *

# Currency and Shops: Creating a Shop for Buying and Selling Items

## Feature Example 1: Using the Shop Component to Create an Item Trading Shop

### 1. Concept Overview

**Currency:**A special customizable resource type used in item transactions such as purchases and sales in shops.

**Shop:**A preconfigured shop template that enables interaction for buying and selling item-type objects.

### 2. Course Content

**Feature:**Create a shop where items can be bought and sold.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/a67c2819d0bc4ba2b778bd9bdfe74580_1758097032.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Configure Currency**

To begin, configure the currency to be used in-game. Open the ESC menu, click "Currency and Inventory" to open the configuration page, and then click "Add Currency." In the currency details page, you can edit its basic properties.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/2adf77d81d86489580e5153fd9e2039a_1758097035.png)

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
The currency name is "Mora."Click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/5f95e57ae0df4ad684d5320bd527ba6b_1758097035.png) next to the name to rename it >>> Type "Mora"
The currency icon is "Mora."[Icon] >>> Select the image of "Mora"
Currency is not deducted or dropped upon death.[Item Handling When Owner Is Destroyed] >>> Select "Save"

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/7560606d74344f67b5914120d6ec5040_1758097035.png)

**2. [In-Game Editor] Configure Items and Corresponding Values**

① Create tradable items.

In the Combat Preset panel, click ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/33939bbbd8c14dba8e28eee05d565bf5_1758097036.png) to enter the item configuration page, click "New Item," select an appropriate item icon from the pop-up window, then set the basic information of the item, such as name, type, rarity, etc. (in this tutorial, item name is set as "Apple," type is set to "Equipment," and rarity is set to "Green"). Once all information is filled in, click "Save" to complete the creation.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/9a1c6726fef74925813e4e9c5f54e07f_1758097036.png)

**② Configure the item's value to make it tradable.**

Once the item is created, set its trade value via basic settings. To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
The item has monetary value.[Has Monetary Value] >>> Select "Enable"
The item's monetary value is displayed in its details panel.[Display Monetary Value] >>> Select "Enable"
The apple item is worth Mora ×5.[Add Monetary Value] >>> Select the previously configured currency "Mora" >>> Set "Monetary Value" to "×5"

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/1fcc27ab1f0b429da2d502780afada8b_1758097036.png)

Click "Save" to apply the settings. The item and its corresponding value are now configured.

**3. [In-Game Editor] Configure a Shop Template**

Next, create a shop template. In the ESC menu, click "Shop Template Management" to enter the currency and shop template management page, and then click "New Shop Template" to edit the newly created shop template (in this tutorial, the template name is set to "Shop Template 01").

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/97665cedac034277b7ead96b692667e4_1758097036.png)![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/dfc5d050645d421d892221bf6974bcc2_1758097036.png)

Once the shop template is created, configure its transaction features. To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
When the shop opens, open the player's inventory at the same time.[Open Inventory When Shop Opens] >>> Select "Enable"
Items are categorized under default type tabs.[Shop Item Tab Type] >>> Select "Default Tab"
The shop sells only apples, with a stock of 1.In the [Sale Settings] section, configure the following:

[Shop Item Source] >>> Select "Custom List"

[Price Settings] >>> Click "Edit" >>> Click "Add Shop Items" in the pop-up price list >>> Locate "Apple" under the materials tab >>> Set the quantity to "1" and the sell price to "10" >>> Click "Add Shop Items"
The shop also buys back apples at a price of Mora ×5 each.In the [Purchase Settings] section, configure the following:

[Purchase Range] >>> Select "All Items"

[Purchase Price Settings] >>> Click "Edit" >>> Set the purchase price for the "Apple" to "5"

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/f7d083a75c344da9940b9581d4a7325d_1758097030.gif)

**4. [In-Game Editor] Configure Inventory**

① Add an inventory component.

Items involved in shop transactions must be stored in the inventory. Therefore, ensure that the character has an inventory component configured to complete trades successfully. Click ![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/b989d24442014724a97a92e90770468d_1758097030.png) to open the Combat Preset screen, go to the [Edit Character] panel and click ![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/8de08e7471eb49709c79126443246447_1758097030.png) to enter the Component page, click ![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/5cbcb52a63b145d9868485ecb2aa1961_1758097030.png) and select "Inventory Component" to add it.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/c6622f261848445395448ce02f70556f_1758097030.png)

② Configure an inventory template.

For the inventory feature to function correctly, the corresponding "Inventory Template" must be configured. Click "Advanced Editing" in the inventory component, click "Please select the template" in the inventory template, click "Open Inventory Template Editor," and then click "Add Template" to add a new template. In this tutorial, the default configuration is used, as there are no specific requirements. In actual projects, you may adjust the parameters of the inventory template as needed.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/fafa62c27f68440c969064abf74a5316_1758097031.gif)

**5. [In-Game Editor] Create a Prefab, Mount a Shop Component and Configure It**

Next, we need a prefab to serve as the shop. When a player enters the collision box area, the shop screen will open. To create a prefab to function as the shop (in this tutorial, we'll use a stall as an example), we need to open the panel, click ![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/ff79fc6bd8f546f3a8b13ceeb32f6d83_1758097031.png) to open the Component page, click ![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/cc8addc465f149f8a90264b1bc5e36ca_1758097031.png) and then select "Shop Component" to add it.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/7b4167aeada7445fad0b26fb5beec364_1758097031.png)

In the shop component, click "Advanced Editing" to enter the details page. In the [Shop Template] section, select the previously created "Shop Template 01."

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/df2c6270045f43b580fcee5da2fa83ab_1758097032.png)

**6. [Miliastra Sandbox] Trigger a Shop Interface When Entering the Collision Trigger Box**

Additionally, an event is required to trigger the previously created shop interface. In actual projects, you may choose an event type as needed to suit your gameplay design. For the this tutorial, we'll use a collision trigger box to open the shop. The completed logic will be mounted to the "Stall" prefab.

Features to Implement Corresponding Configuration Items
Feature

Bring up the shop when entering the collision trigger area Trigger Scenario Enter the trigger area[Event Node]: When entering collision trigger
Condition//
Result Open the shop[Query Node]: Identify the player entity that entered the collision trigger as the one opening the shop

Note: Since both the trigger component and shop component are mounted to the same prefab "Stall," the trigger entity = the shop entity, in this case.

[Execution Node]: Open the shop

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/fc65fd440c444bf888589670bf9ef9a7_1758097033.png)

**7. [In-Game Editor] Configure Loot Items**

Finally, create a corresponding loot item for the "Apple." After picking it up, players can sell the item to the shop for currency and use that currency to buy other items in the shop. For detailed steps, please refer to the previous course: "Loot, Items, and Inventory." This section presents a simplified workflow for demonstration purposes only:

To create a preset loot item (this tutorial uses a "Fruit Pile" as an example), open the Prefab Library, click ![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/4721c98121cc414088df001930f132f2_1758097033.png) to enter the Loot page, go to "Preset," click "Challenge Coin Loot" > "Models," select "Fruit Pile" to switch the loot model, and then click "Save" to add a new loot item.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/72a93ef544884a6099e4f4c0043df11d_1758097033.png)

The loot item comes with a loot component by default. In the panel, click ![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/ff6654205513427588ebafb11428aef4_1758097034.png) to enter the Component page to view the "Loot Component." To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
The loot item is picked up via interaction option.[Pickup Rules] >>> Select "Interactive Pickup"
A landing animation is triggered when the item is dropped.[Enable Drop Animation] >>> Select "Enable"
The loot appears directly in the stage, representing 5 units of the "Apple" item.[Loot Content] >>> "Add Items" >>> Select "Apple" >>> Set the quantity to "5"

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/16b5efe373f746a5922650087042f7c0_1758097034.png)

**8. [In-Game Editor] Test Gameplay**

You can now start a test run to pick up and trade items in the shop.

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/3c426fc2e8cf4692929a9cb45239bb09_1758097034.gif)

_**For more information, please refer to [Comprehensive Guide - Resource System - Shop], [Comprehensive Guide - Resource System - Currency], [Comprehensive Guide - Shop Component]_

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Based on the course content, try to replicate the following features.

> Feature Replication: Create a shop where items and equipment can be bought and sold.

**Course Review:**Learn how to create shops and currency through basic settings.

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Currency and Shops]

![Image 27](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Currency and Shops.gil

20.1 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhno47i6tnd0/25242979c9ec466c8e83f61d289cfe22_1758097035.gil)

[3.15 Equipment: Special Items That Characters Can Wear](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhsuhyi2b61o)[3.17 Mini-Map Markers: Dedicated Markers for Displaying Entity Locations on the Map](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhw6purbjsrq)
