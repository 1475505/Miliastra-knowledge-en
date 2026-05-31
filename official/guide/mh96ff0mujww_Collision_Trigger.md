---
id: mh96ff0mujww
title: Collision Trigger
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh8w69rzuc3i
language: en
scope: guide
crawledAt: 2026-05-31T16:18:40.012Z
---

# Collision Trigger

# I. Functions of Collision Trigger Component

The collision trigger component provides a detection range for collision detection during stage runtime and serves as a tool for contact determination.

The collision trigger component supports multiple collision triggers to be active simultaneously.

## 1. Collision Detection between Collision Triggers and **Collision Trigger Source**

During stage runtime, the "Collision Trigger" continuously monitors other entities carrying "Collision Trigger Source Components."

When the runtime entity's "Collision Trigger Source" enters or exits the range of another entity with a "Collision Trigger Component," a collision between the two component ranges will send a node graph event to the entity configured with the "Collision Trigger."

This type of collision does not create physical collision barriers.

When a "Collision Trigger Source" collides with different "Collision Triggers," the collision detection between them is calculated independently

Example: When a "Collision Trigger Source" collides with "Collision Trigger 1" and "Collision Trigger 2," node graph events will be sent separately without affecting each other

## 2. Collision Trigger Source Components

[Collision Trigger Source](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhn95di01j84)

# II. Editing Collision Trigger Components

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/18f06c0c-8818-43c7-9761-212f1d9ee1d0.png)

(1) In the entity/prefab editing interface, open the Editing Components tab

(2) Click "Add Common Components" below, select and click "Collision Trigger" to add it

(3) Click "Advanced Editing" to expand the editing tab

## 2. Editing Collision Trigger Components

Configuration Parameters Description
_Initially Effective Trigger_ Enumerates the collision triggers that are effective by default during entity runtime

Supports editing of the trigger's default effective state by using the dropdown arrow to adjust the enumeration checkbox after the trigger. The edited effective state will be synchronized to the corresponding trigger's "Advanced Editing" tab

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/df7801b9-4c18-4aa9-a816-f7310c924b0c.png)![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/853ff8f0-29a0-4902-a842-dd5ccda69219.png)
_*Trigger List_ Enumerates all collision triggers configured for the entities

## **3. Editing Collision Triggers**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/d1102460-2e34-4d0f-a44f-52552de55fa2.png)

In the stage editor window, the entity will display the range of the currently selected collision trigger.

### **(1) Collision Trigger Group**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/e2c2b445-00c9-4acd-9cd5-1a102ff01037.png)



Enumerate all predefined collision triggers for this entity



Click ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/568fec50-2955-4e49-abf1-7f16fb2e01b2.png)to add a collision trigger



"ID: X", where X is the "Trigger ID", serves as a node input that allows you to adjust the collision trigger parameters

### (2) Basic Information of Collision Trigger

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/7e1044ef-33d9-4e48-b5a9-6ada40df051f.png)

Configuration Parameters Description
_Initially Effective_ If enabled, the collision trigger takes effect immediately upon the entity creation
_Effective Target_ Collision trigger source detection only applies to the configured entity types

Provides enums for _characters, objects, and creations_

### (3) Collision Trigger Range

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/39f26aa6-626c-4eef-94e9-14b8268311b8.png)

Click "Add Trigger Area" to add new trigger areas. The ranges under the same collision trigger will be merged and take effect as a combined range

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/02e821fe-0752-4537-90e7-b7b64f38d617.png)

Configuration Parameters Description
_Trigger Area Shape_ Supports cuboid, sphere, and capsule shapes. Different size configuration parameters will be displayed based on the selected shape
_Center_ Offset relative to the entity/prefab center
_Rotation_ Supports orientation adjustment along different axes based on the center position
_Zoom Multiplier_ The trigger area's shape supports defining scaling along different axes

# III. Managing Collision Triggers Through Node Graph

You can manage the collision trigger for runtime entities via the node graph during its runtime



**When Entering Collision Trigger**

The "Collision Trigger Source" range of a runtime entity enters the "Collision Trigger" range of another runtime entity.

Node graph events will be sent to the entity configured with "Collision Trigger"

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/223e57b6-9748-4210-b684-de2507f945bf.png)



**When Exiting Collision Trigger**

The "Collision Trigger Source" range of a runtime entity exits the "Collision Trigger" range of another runtime entity.

Node graph events will be sent to the entity configured with "Collision Trigger"

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/21bf25cb-ba98-4b7d-a42d-d6ded3072d87.png)



**Activate/Disable Collision Trigger**

The "Collision Trigger" component function supports dynamic adjustment of the activation parameter through node graphs

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh96ff0mujww/68390ddf-62e2-48f7-a176-f108d350345b.png)

[Basic Motion Device](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnmcmipncrg)[Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhso1b9wjica)
