---
id: mhilp6rpz09y
title: Collision Trigger Source
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhn95di01j84
language: en
scope: guide
crawledAt: 2026-05-31T16:46:07.042Z
---

# Collision Trigger Source

# I. Functions of Collision Trigger Source Component

The Collision Trigger Source component provides collision detection trigger sources during stage runtime and serves as a tool for determining logical range contact.

The collision trigger source component can only have one collision trigger source enabled at a time.

## 1. Collision Detection between Collision Trigger Source and **Collision Triggers**

During stage runtime, the “Collision Trigger” continuously monitors other entities carrying "Collision Trigger Source Components".

When the runtime entity's "Collision Trigger Source" enters or exits the range of another entity with a "Collision Trigger Component", a collision between the two component ranges will send a node graph event to the entity configured with the "Collision Trigger"

This type of collision does not create physical collision barriers.

## 2. Collision Trigger Components

[Collision Trigger](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh8w69rzuc3i)

# II. Editing Collision Trigger Source Components

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhilp6rpz09y/12985fac-22ea-4fa8-8ffc-6c2a1a3ebfad.png)

(1) In the entity/prefab editing interface, open the Editing Components tab

(2) Click "Add Common Components" below, select and click "Collision Trigger Source Components" to add it

(3) Click "Advanced Editing" to expand the editing tab

## 2. Editing Collision Trigger Source Components

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhilp6rpz09y/133b0862-86a6-4416-a6c2-3f0b509332cb.png)

Use "Advanced Editing" to adjust the shape and size parameters of the collision trigger source

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhilp6rpz09y/7a69d440-d3fd-4312-b704-12a7f5ef770c.png)

Configuration Parameters Description
_Initially Effective_ Whether to enable when the object is created
_Trigger Area Shape_ Supports cuboid, sphere, and capsule shapes. Different size configuration parameters will be displayed based on the selected shape
_Center_ Offset relative to the entity/prefab center
_Rotation_ Supports orientation adjustment along different axes based on the center position
_Zoom Multiplier_ The trigger area's shape supports defining scaling along different axes

# III. Managing Collision Triggers Through Node Graph

You can manage the collision trigger for runtime entities via the node graph during its runtime



**When Entering Collision Trigger**

The active entity's "Collision Trigger Source" range enters the "Collision Trigger" range of another active entity.

Node graph events will be sent to the entity configured with "Collision Trigger"

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhilp6rpz09y/a39a3929-8bd4-4a0f-8bcb-5b2bedebe5d0.png)



**When Exiting Collision Trigger**

The "Collision Trigger Source" range of a runtime entity exits the "Collision Trigger" range of another runtime entity.

Node graph events will be sent to the entity configured with "Collision Trigger"

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhilp6rpz09y/a90aa228-0c54-4d4c-bdc0-707b8fd9dca7.png)



**Activate/Disable Collision Trigger Source**

The "Collision Trigger Source" component supports dynamic adjustment of the enabled parameters through node graphs

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhilp6rpz09y/ea8bac40-ed11-4120-92ab-ae3dad11659e.png)

# IV. Examples

For entities that do not contain _collision trigger sources_, they cannot generate entry/collision range events through contact with _collision triggers_

Creations and character entities contain collision trigger sources by default, no additional editing required.

As shown in the graph,



Add a collision trigger source component to the "wooden box" and configure its size to match the box dimensions



Add a collision trigger to the "Spiky Platform" and place it on the paving

In the graph below, an empty object is used to demonstrate the range for clarity. This does not represent the actual appearance in the editor and is only meant as a visual guide



The collision trigger source of the wooden box<->the collision trigger of the spiky platform. When they make contact, the spike platform will receive an _collision trigger entry event_



If there are logical requirements, you can edit in the node graph. For example, if you want the wooden box to take damage when it hits the spiky platform, you can edit it through this example

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhilp6rpz09y/d5f75775-abee-4bce-8259-adafde6fc8a0.png)

[Custom Attachment Points](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhmshmimtegs)[Sound Effect Player](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwiv89yra02)
