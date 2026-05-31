---
id: mhqmzpipf2d0
title: Model
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhrutdio6904
language: en
scope: guide
crawledAt: 2026-05-31T16:27:52.258Z
---

# Model

Indicates the features included in the unit model, including _preset status_, _unit attachment points_ and _decorations_

For different models, their included functionalities also vary

# I. Preset Status

_Preset Status_ is a unique attribute of objects, with each preset status representing a set of animation states for the object

Only some objects have preset status attributes

## 1. About Preset Status

### (1) Preset Status ID

_The preset status ID_ represents a set of status definitions, such as the "Open - Close" state of a chest, "Lit - Extinguished" state of a torch, etc., and has the following characteristics:



All sub-states under each status ID are mutually exclusive



Sub-states under each status ID can be switched between each other

### (2) Preset Status Value

Sub-states within each group of predefined states are referenced by _Status Values_. As shown in the graph, "0" represents the closed status of the floor spike trap, while "1" represents the open status of the floor spike trap

Each status value represents a specific animation state

When switching to different status values, the animation behavior will change, and some status value transitions will have corresponding animation transition effects

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/a10a336b-3230-4d34-80a8-ef79a3004a36.png)

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/e5c46f2d-1a8f-4b17-9357-dc86af53b639.png)

## 2. Node Graph Control Preset Status

When Preset Status Changes

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/637b1e2f-15ba-4c85-ad4e-0ce63ce650b9.png)

Set Preset Status

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/cd5f5f2d-bea3-4ab5-9aac-ba398618aef5.png)

Get Preset Status

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/674245b0-b621-4ca1-8c86-de36ccbe7b49.png)

# II. Unit Attachment Points

_Unit attachment points_ are specific positions designated on the skeleton or structure of an _entity_, used for attaching other _units_ or _special effects_.

## 1. View Default Attachment Points

You can view the preset _default attachment points_, including their names and positions, in the basic information bar of _prefab_ or entities

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/4b5af157-f4a4-49e4-a2f2-0e7890846d82.png)

Each entity comes with a default basic attachment point: _center origin_, and the position of this attachment point is equivalent to the entity's location in the scene

Additionally, creation-type and character-type entities will have corresponding default attachment points based on their skeletal structure. The characteristic of such attachment points is that they move along with the skeletal position when the entity's bones move: for example, a character's hand attachment point can be used as the creation point for _local projectiles_ in shooting actions

## 2. Adding Additional Attachment Points

Please refer to [Custom Attachment Points](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhmshmimtegs)

# III. Decorations

## 1. Concept of Decorations

### (1) Function of Decorations

Based on the creator's (Craftsperson's) needs, static object models can be attached to prefabs or entities to achieve more customized effects

### (2) Decoration Feature Definitions

a. Decorations are part of the basic information of prefabs (including objects and creations), and can also be used to modify entities in entity placement scenes

b. Decoration's configuration will not increase or decrease the number of prefabs or entities

## 2. Editing Decorations

### (1) Editing Interface Location

The entry point for "Decorations Editing" can be found under the "Model" section in the basic information of prefabs (or entities).

Under this section, you will see the main model, unit attachment points, and the decorations list editing interface.

Click "Decoration Editor" to open the decoration list.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/682e9fe9-f54d-40b6-896e-33b706b9cdf1.png)

Click to select model assets to open the model asset library

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/6b585a51-8051-430c-adb8-f84b6665f268.png)

Click on the model you want to add in the model asset library to add a decoration

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/b72d81a6-3c0d-4af4-b6e8-f964824603eb.png)

### (2) Decoration Attributes

a. Model

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/8077501b-e952-4ff2-8609-5180f3786188.png)

Select the model for this decoration

b. Transform

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/f35eb44c-f1d6-4cda-b53d-b4cb5a6d9faa.png)

Set which attachment point on the main model this decoration will follow, and configure additional position, rotation and zooming settings.

c. Native Collision

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqmzpipf2d0/8029844b-4b9a-45b8-9519-40296120bc78.png)

Set the collision toggle and whether it can be climbed.

[Transform, Native Collision, Visibility and Create Settings](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhuqbn9yn5bu)[Factions](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhe1ixri46ta)
