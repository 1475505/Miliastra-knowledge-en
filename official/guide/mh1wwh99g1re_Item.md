---
id: mh1wwh99g1re
title: Item
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhbgx0rspbqu
language: en
scope: guide
crawledAt: 2026-05-31T16:26:11.892Z
---

# Item

# I. Definition of Items

_Items_ are virtual objects that players can obtain, use, or equip during gameplay. In Miliastra Wonderland, items are categorized into multiple types and are managed uniformly through the _inventory_

# II. Item Classification

Items are categorized into Equipment, Materials, Consumables, and Very Special Items

# III. Editing Items

In the item tab shown below, you can edit items

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1wwh99g1re/a91ef085-0f65-4836-bf3c-bd44d6c535ab.png)

Click the "New Item" button and click Confirm in the Pop-Up to create a new item template

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1wwh99g1re/b2af0abe-c6b0-4417-bd55-0d5146512f78.png)

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1wwh99g1re/a8e3ba00-7d96-4831-bad2-5ca464a96830.png)

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1wwh99g1re/e1ffde67-3efe-47f3-847f-d5bc2ba7dcd3.png)

_Item Name_: The name of the item displayed in the interface during gameplay

_Item Icon_: The icon displayed in the interface during gameplay

_Configuration ID_: The unique identifier of the item template, which can be used in Node Graphs

## 1. Basic Settings

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1wwh99g1re/907a95a0-bfe9-4cbc-8364-0085bd85236a.png)

Basic settings primarily define an item's displayed information and how it appears in the inventory

_Rarity_: Rarity determines the background color of the item icon, currently available in gray, green, blue, purple, and orange

_Stack Limit_: The maximum number of items that can be stored in a single inventory slot within the inventory

_Associated Item Node Graph_: When an item enters the character's inventory, the related Node Graph will be attached to the character unit

_Inventory Ownership Tab_: Determines which tab the item will be sorted into when it enters the inventory

_Description_: The item's description that will be displayed in the interface during gameplay

_Has Currency Value_: Select "True" to relate a _currency value_ to a single item, which serves as a value anchor for transactions in the _shop module_

_Display Currency Value:_ Enable this to display the currency value of the item in the inventory

_Currency Value_:When the item has a currency value, clicking [Add Currency Value] allows you to configure the specific amount

## 2. Drop Settings

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1wwh99g1re/bb2479de-3b55-4b78-8b26-ecb4cc81126f.png)

Items can drop into the scene from the inventory in multiple ways, including when the owner is defeated or through Node Graph triggers. The drop settings section defines the specific logic executed when a drop event occurs

_Destruction Debris_: The process executed when the item owner is defeated

_Loot_: When the owner is defeated, items are converted into loot entities and created in the scene

_Destroy_: When the owner is defeated, the items are destroyed

_Save_: When the owner is defeated, items are saved in the inventory. This setting is only meaningful when the owner is a character. For other types of entities, the logic is the same as Destroy

_Loot Drop Mechanics_: Divided into Shared Reward and Individualized Reward

_Shared Reward_: All players share the same loot. Once one player picks it up, other players cannot pick it up

_Individualized Reward_: Each player will receive their own independent copy of the dropped item, and players' pickup actions do not affect each other

_Corresponding Loot Appearance_: Configure a _loot prefab_, which is a physical entity component. When the virtual item is created in the scene, it will be displayed using the corresponding loot model

## 3. Interaction Settings

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1wwh99g1re/da8f3d5c-f479-421e-ae1c-3497383d0548.png)

Interaction settings define what players can do with an item in their inventory

_Destructible_: Whether players can destroy this item in their inventory through interface actions

_Tradable_: Whether the item can be sold in the shop

_Usable_: Whether players can use an item through interface actions

_Allow Bulk Use_: Whether multiple items can be used in a single operation

_Auto Use Upon Pickup_: When set to "Yes", the item will be automatically used upon acquisition

_Cooldown (s)_: After using the item, it will enter cooldown and cannot be used again during this period

_Group Cooldown (s)_: When this item enters cooldown, all items related with the Linked Cooldown Group will enter cooldown simultaneously, with a duration equal to this value

_Linked Cooldown Group_: Configure a list of items that defines all items within the cooldown group

[Equipment](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkl2yin0cxo)
