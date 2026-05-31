---
id: mhq0s1i7s80k
title: Units
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2xoxrop0la
language: en
scope: guide
crawledAt: 2026-05-31T16:38:59.914Z
---

# Units

_Units_ are individual entities that integrate data during both the editing process and stage runtime.

The in-game representation of a unit is called an _entity_.

Entities that can run complex logic during stage runtime are called _Dynamic Entities_, which have more _Attributes_ and _Components_, and can use _Node Graphs_.

Entities that can only be used for model placement and visibility settings are called _Static Entities_.

Each entity must be created based on predefined basic data, referred to as _Prefabs_.

Dynamic entities and static entities are composed of their corresponding types of prefabs.

# I. Basic Concepts

All entities originate from corresponding prefab data. You can create explicit entity data directly during the editing phase, or dynamically create _entities_ based on specified _prefabs_ during runtime.

In the Entity Placement tab, drag the _prefab_ from the assets bar into the scene to create an _editable entity_

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/be260e21-e2e1-4f13-a058-6602522d6c1c.png)

## 1. Entity

The essence of an entity is an individual that integrates data, the in-game representation of a unit, and is the minimal collection that carries functionality

During game runtime, entities can serve as _variable types_ for recording and passing

Besides _static entities_, entities can be edited with additional specialized settings, common components, and node graph functions

## 2. Entity GUID

For every editable entity in the editing scene (even those created from the same prefab), there is a unique GUID

GUID (Globally Unique Identifier) ensures that the entity can be precisely identified through its GUID

## 3. Prefabs

Prefabs are essentially preset entity data

All editable entities are created from prefabs

## **4. Prefabricated Components and Custom Prefabs**

We provide a series of pre-made dynamic, static and enemy prefabs

Additionally, players can modify prefabricated components and save them as custom prefabs

## 5. Prefab ID

All prefabs have a globally unique prefab ID, but only dynamic prefabs and enemy prefabs can generate runtime entities through node graph nodes

# **II. Unit Types**

There are six types of units. Click the link for more detailed information

[Players](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhctmgi51lpo)

[Characters](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh3ecor1x5cm)

[Creations](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhufqo0c0tqw)

[Objects](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhlh4n9m4i56)

[Local Projectiles](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhciimiw86jg)

[Stages](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh3pgiraqkiu)

# III. Entity Editing and Placement

## 1. Naming and Indexing of Editable Entities

In the entity placement tab, editable entities have globally unique entity names and GUIDs

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/c07bba66-774f-4a85-9411-7bde2a4d913f.png)

## **2. Runtime Entity** Naming and Indexing

During runtime, runtime entities can be generated from editable entity data

or by using node graphs with prefabricated components

## **3. Entity** Editing

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/40afa7d3-ee49-4fd1-bc75-1755671f3ae8.png)

After entering the Entity Placement tab (A),

in the current save file, the sidebar will display all _Custom Prefabs_ (B) and _Prefabricated Components_ (C)



You can drag and drop prefabricated components directly to create entities, edit them and build stages



You can also create custom prefabs in the prefab library first, then drag out your custom prefabs to create entities, and proceed with editing and stage building

You can drag prefabricated/custom prefabs from the "Dynamic," "Static," and "Enemy" tabs into the scene for editing

However, you cannot switch between static and dynamic types through the entity panel

When clicking on an editable entity, the following tabs will appear on the right. For static entities, only the basic information panel![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/5e8fa604-85d7-4347-9349-65faf5eecc12.png) can be edited. If you try to switch to other panels, you will receive a message that they cannot be edited

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/02079762-9d88-4a87-a4dc-678ab9712c9a.png)

## 4. Basic Information Panel

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/5e8fa604-85d7-4347-9349-65faf5eecc12.png)

This section displays a set of non-removable base attributes for this entity type. Attributes may vary across different entity types. You can only modify the attributes possessed by this entity type here.

## 5. Specialized Setting Panel

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/ec1918c0-195d-427d-ba96-c9907250be28.png)

Provides basic combat attributes, aggro configuration, hurtbox settings, combat settings, ability units and other content to add combat-related logic to entities

## 6. Common Component Panel

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/11747edb-dc51-457a-a853-a26a72b1b22a.png)

[Common Components](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhei6orvcbkm) are a primary way to add functions to entities. You can add, remove and edit components to give entities more functions during runtime

Some entity types come with pre-mounted components in the component panel. These can be freely added, removed, or edited as needed

## 7. Node Graph Panel

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/638cfaf0-aa49-4fbb-9402-9252a69330ca.png)

Node graphs are custom logic scripts created by creators (Craftspeople). You can use this panel to add, delete, and edit node graphs to enable additional functions for running entities

# IV. Prefab **Editing**

Select (A) to enter the prefab library interface

In the prefab library, you can create custom prefabs to assist with stage building

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/99bd6231-d050-4728-bc75-c2ff15eed623.png)

After entering the prefab library (A),

click the Object Icon (B) on the status bar to access the object prefab panel; click the Creations Icon (C) to access the creations prefab panel; click the Loot Icon (D) to access the loot prefab panel

You can organize your tabs based on personal preferences to manage the prefabs you've created

You can drag prefabricated components from the Dynamic and Static tabs (E) into the scene for editing

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/0c2d4880-077a-4dc3-a7a9-7b17f725af34.png)

## 1. Naming and Indexing

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/d90ed322-fb0d-4ad0-b25a-c8ae945ea140.png)

Prefabs must have globally unique names (F) when being saved

After saving, the prefab will generate a globally unique prefab ID (G)

You can change the prefab to dynamic or static via the dropdown menu (H)

The prefab provides four tabs for adding functions (I), arranged from left to right:

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/e65ee7b8-97e4-4714-a6b7-434226c3c51a.png)

## 2. Basic Information Panel

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/5e8fa604-85d7-4347-9349-65faf5eecc12.png)

This section displays a set of non-removable attributes for this prefab type. Attributes may vary across different prefab types. You can only modify the attributes specific to this prefab type here

## 3. Specialized Setting Panel

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/ec1918c0-195d-427d-ba96-c9907250be28.png)

Add combat-related logic to prefabs by providing basic combat attributes, aggro configuration, hurtbox settings, combat settings, and ability units

## 4. Common Component Panel

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/11747edb-dc51-457a-a853-a26a72b1b22a.png)

[Common Components](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhei6orvcbkm) are a primary way to add functions to entities. You can add, remove and edit components to give prefabs more functionality

Some prefab types come with pre-mounted components in the component panel. These can be freely added, deleted, and edited

## 5. Node Graph Panel

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/638cfaf0-aa49-4fbb-9402-9252a69330ca.png)

Node graphs are custom logic scripts created by creators (Craftspeople). You can add, remove, or edit node graphs in this panel to enable additional functions for prefabs

## 6. Saving Prefabs

After modifying the prefabricated component, you can click the Save button at the bottom of the screen to store it as a custom prefab and place it under the specified tab

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/841a7c08-881b-4176-8a7e-26db9db1eb06.png)

If you are modifying a custom prefab you can click _Overwrite and Save Prefab_ to update the original custom prefab, or click _Save As Prefab_ to save it as a new custom prefab

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/32813b9d-5134-41dc-b30d-bcf9ee62828f.png)



Prefabs can be created as editable entities by dragging them into the scene from the Entity Placement tab



Through the node graph node [Create Prefab], you can create dynamic entities or monster entities during runtime

Both dynamic and static prefabs can be dragged into the scene as editable entities on the entity placement tab, after which runtime entities can be created during runtime

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/14cf4218-69f5-46d7-be6d-3968f56e0059.png)

Specifically, dynamic prefabs and creation prefabs can be created as runtime entities directly through the node graph node [Create Prefab] during runtime

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq0s1i7s80k/ae479c0e-dfa1-448d-b4c2-68cc72697641.png)

In most cases, editable objects placed in the scene are called editable entities

They are created by dragging prefabs into the scene under the entity placement tab



After dragging a prefab into the scene and successfully creating an entity from it, any modifications made to the entity will be completely independent of the prefab that created it

# V. Creating Temporary Entities

Use the [Create Prefab] node in the node graph to create running entities directly from prefabs during gameplay

These are called temporary entities. Unlike regular entities, they lack an editor-based GUID but otherwise function the same

# VI. Concept and Placement of Static Entities

_Static entities_ are entities that cannot be edited with additional attributes, components, or node graph functions. Players cannot access them during runtime and can only use them for decoration and scene layout

Static entities cannot be created as temporary entities via the [Create Prefab] node. They can only be created by making static prefabs first and then dragging them into the scene under the entity placement tab

[Functions](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjx2miruaos)
