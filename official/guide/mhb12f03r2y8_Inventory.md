---
id: mhb12f03r2y8
title: Inventory
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhogfq9bf86q
language: en
scope: guide
crawledAt: 2026-05-31T16:25:57.292Z
---

# Inventory

# I. Definition of Inventory

The inventory is a container for the entire resource system, managing all virtual items, equipment, and currency owned by the inventory owner

In the inventory interface, items are displayed in slots. Players can split, destroy, or discard items in the inventory during gameplay

# II. Editing Inventory

Open the system menu and click the [Currency and Inventory] button to enter the editing interface

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb12f03r2y8/6f3b1860-9e5a-4bf9-a521-66bd2a56bf9d.png)

Enter the Inventory tab to edit the inventory template's details

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb12f03r2y8/a51d1126-7472-4bdb-ac7d-c99af1c25ab3.png)

_Inventory Template Name_: ame defined by the creator (Craftsperson) for the inventory template

**Base Attributes**



_Inventory Slots_: Initial number of inventory slots, each slot can hold one type of item and may stack multiple copies of an item based on its stack limit



_Destruction Debris_: When the inventory owner is defeated, all items in the inventory will be batch processed according to this setting. When this configuration is not set to "Apply Item Loot Rules", this configuration will override the same field configured in the item template

_Loot_: When the owner is defeated, all items in the inventory are converted into loot entities and created in the scene

_Destroy_: When the owner is defeated, all items in the inventory are destroyed

_Save_: When the owner is defeated, all items in the inventory are saved in the inventory. This setting only takes effect when the owner is a character. For other types of entities, the logic is the same as "Destroy"

_Apply Item Drop Rules_: Follow the "Destruction Debris" configuration for individual items within the inventory



_Loot Drop Mechanics_: When an inventory is dropped, all items will be converted into a single entity that drops in the scene, rather than creating separate entities for each item

_Shared Reward_: All players share the same inventory loot entity. Once one player picks it up, other players can no longer pick it up

_Individualized Reward_: Each player will have their own independent loot entity corresponding to the inventory contents, and players' pickup actions do not interfere with each other



_Corresponding Loot Appearance_: Configure a _Loot Prefab_, which is a prefab with physical properties. When the inventory content is created in the scene, it will be displayed using the related loot model

# III. Inventory Runtime Instance

During actual gameplay, the inventory template definition is referenced and instantiated by the[Inventory](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh5y5001vqd4) entity

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb12f03r2y8/1ff88ba9-2222-4fa1-b430-5cb1b5330e1e.png)

[Currency](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2cr30yeak0)[Loot](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkfj1iilnck)
