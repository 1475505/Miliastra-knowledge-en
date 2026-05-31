---
id: mh22ge9durci
title: Loot
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkfj1iilnck
language: en
scope: guide
crawledAt: 2026-05-31T16:27:10.456Z
---

# Loot

# I. Definition of Loots

When all virtual _items_ (including items, equipment, currency, and inventory) are dropped in the scene, they will be converted into a prefab entity, which is the _Loot_

When editing the templates of the aforementioned virtual items, you need to relate them with a Loot prefab. If no relation is established, the drop logic will be blocked

Loots are special prefabs that, compared to standard dynamic unit prefabs, additionally carry a _Loot Content Component_ each, and furthermore, some components available to dynamic unit prefabs are not available for loots

# II. Functions of Loot Content Components

All loot-type prefabs will permanently carry a Loot Content component that cannot be removed

The Loot Content component defines the drop behavior and pickup rules of loots

The Loot Content component supports configuring multiple pickup ranges simultaneously, and their effective ranges will stack

# III. Editing Loot Content Components

## 1. Location of the Loot Content Component

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/6b023af7-c293-424a-afcc-3ee843b5a96a.png)

Enter the prefab library editor to view the corresponding Loot tab

Click "Advanced Editing" to expand the editing tab

## 2. Loot Settings

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/540d5709-f622-4dbc-8162-aead6f52ede5.png)

When loots are created in the scene due to drop logic, this defines their drop behavior and pickup rules

_Pickup Rules_: How players collect loots during gameplay

_Interactive Pickup_: When the character is within pickup range of the loot, an interaction button will appear. Clicking the button will pick up the item directly

_Auto Pickup_: When the character is within pickup range of the loot, pickup will be automatically triggered

_Open Pickup Interface_: When the character is within pickup range of the loot, an interaction button will appear. Clicking the interaction button will open the loot pickup interface, where players need to select the corresponding loot to pick up. This is recommended when there are multiple items in the loot list

_Auto-Attract Pickup_: Requires additional configuration of "Auto-Attract Range". When the character enters the snap range, the dropped loot will move toward the character and automatically trigger pickup when they enter the pickup range

_Auto-Attract Pickup Range (m)_: The distance at which "Auto-Attract Pickup" triggers loots movement

_Local Filter_: There are two types of filters: Boolean filters and integer filters. For more details, see [Node Graphs](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhjwjrr5n73i)

_Filter Node Graph_: You can reference the filter nodes of the aforementioned selection types in the node graph to determine whether the conditions are met

_Loot Content_: Supports configuring a dictionary of virtual items contained in a loot within the component. When the loot is directly placed in the scene and spawned through prefab entities, it will contain all virtual items configured in the component. However, when the loot is created as loot drop/trophies, it will only contain the dropped virtual items, and the default data in the component will be overwritten

## 3. Pickup Range

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/17bfa5d1-88cc-4b26-8b17-fa2cd0613483.png)

_Pickup Range_: Defines the range within which players can collect loots. The structure is defined with common shapes, supporting three basic ones: cuboid, sphere, and capsule

# IV. Loot Pickup Instance

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/6a17c723-a58f-496e-8c3f-e5fc22ebfc83.png)

# V. Node Graph Operations for Loot Components

## 1. Loot Component-Related Execution Nodes



Increase Loot Component Item Quantity

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/525e7b42-a349-42cf-b0d1-49dee351d64c.png)



Increase Loot Component Currency Quantity

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/704b8b3d-1191-4b2d-9383-4fd9ad1c7b6d.png)

## 2. Loot Component-Related Query Nodes



Get Loot Item Component Quantity

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/24fa1e49-a89b-4fb8-8465-173b1ab107f6.png)



Get All Equipment from Loot Component

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/b7b35505-df73-4b4b-98a7-9f1b96765059.png)



Get loot item component currency quantity

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh22ge9durci/386dc1bd-c4c1-4089-b523-66edef3d0c00.png)

[Inventory](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhogfq9bf86q)[Shop](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhi9s7isvp50)
