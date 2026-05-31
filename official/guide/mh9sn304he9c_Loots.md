---
id: mh9sn304he9c
title: Loots
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh63ox06afy8
language: en
scope: guide
crawledAt: 2026-05-31T16:27:17.031Z
---

# Loots

# 1. Functions of Loot Components

The Loot Component allows creators (Craftspeople) to configure a fixed Loot collection template data, which creates Loot based on this data template when the component holder is defeated

In design, it is recommended for implementing Loot-related concepts

The Loot component only supports configuring one set of Loot template data

# II. Editing the Loot Components

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9sn304he9c/5a6ec4a9-b386-464e-85a3-0d4b59770b5a.png)

(1) In the Entity or Prefab editing interface, open the Component Editing Tab

(2) Click "Add Common Components" below, then click "Loot" to add it.

(3) Click "Advanced Editing" to expand the editing tab

## 2. Basic Concepts

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9sn304he9c/29bb1b6e-7dc0-4668-b675-b63f21235f1f.png)

### (1) Basic Settings

Configuration for Drop Behavior and Drop Methods

_Destruction Debris_: Defines how the drop configuration is handled when the component's owner is defeated

_Individual Drops_: Each virtual item in the Loot Content is converted into a corresponding Loot item and dropped separately

_Combined Drops_: Virtual items in the Loot Content are converted into a single Loot item and dropped

_Loot Drop Mechanics_: Divided into Shared Reward and Individualized Reward

_Shared Reward_: All players share the same loot. Once a player picks it up, other players cannot pick it up again

_Individualized Reward_: Each player's client will generate their own independent copy of the item, and players' looting actions do not affect each other

_Corresponding Loot Appearance_: Configure a _Loot_ prefab, which is a physical entity prefab. When a virtual item is created in the scene, it will be displayed using the model of the associated drop prefab. This setting only takes effect when combined drops are selected; if individual drops are chosen, each drop will use the associated drop prefab configured in its own item or currency template

### (2) Loot Content

Configure virtual Loot data. Click "Add Items" to configure a list of virtual items

_Item List_: You can select all defined items, currency templates and quantities

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9sn304he9c/960132d6-dbc8-481a-9bbe-6ea7a3ce2362.png)

# III. Loot Collection Examples

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9sn304he9c/eb863767-e44c-4589-a461-db35bce07195.png)

# IV. Node Graph Operations for Loot Components

### Loot Component Execution Nodes



Trigger Loot Drop

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9sn304he9c/89747e08-f526-4686-b570-074d50c1245f.png)



Set Loot Drop Content

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9sn304he9c/02b47980-90ab-49ce-8e4f-8351aa32ad1e.png)

[Inventory Component](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh5y5001vqd4)[Shop Component](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho6gviqhsqs)
