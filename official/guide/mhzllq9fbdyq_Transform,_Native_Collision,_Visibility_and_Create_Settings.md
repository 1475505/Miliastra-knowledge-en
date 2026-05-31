---
id: mhzllq9fbdyq
title: Transform, Native Collision, Visibility and Create Settings
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhuqbn9yn5bu
language: en
scope: guide
crawledAt: 2026-05-31T16:37:31.029Z
---

# Transform, Native Collision, Visibility and Create Settings

# I. Transformation

## 1. Transform Definition

Describes the geometric information of units in the scene, generally including location, rotation and zoom

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/7ef8ed0c-9baa-4c2a-b3c8-3b353fcc9c17.png)

_Location_: Position in world coordinate system

_Rotation_: Rotation in world coordinate system

_Zooming_: The magnification ratio of the object

_*Lock Transform_: An editing attribute. If this attribute is "enabled", the transform information of the entity cannot be modified

## 2. Node Graph Related

Location information can be obtained through node graph query

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/6395e699-ee7b-491b-af91-3e2a2add579b.png)

# II. Native Collision

## 1. Definition of Native Collision

_Native collision_ refers to the basic collision of objects, which fits the model more precisely compared to collisions added by _extra collision components_.

Conversely, as _basic information_, the shape of native collision cannot be modified, and players can only control the _initial effective_ and _climbable_ toggles.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/83d7e674-87b5-4136-8d80-1637d4b4e76c.png)

_Initially Effective_: Whether native collision is enabled when the unit is initialized

_Climbable_: Whether the native collision can be climbed by characters, requiring the character to have climbing ability

_*Native Collision Preview_: An editing feature that, when checked, allows you to preview the collision shape in the editor interface, see image above

## 2. Node Graph Related

Modify Collision Switch

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/4132ed7d-41da-49d6-94fe-91493be72417.png)

Modify Collision Climbability

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/80ddad4a-db68-48d4-81e4-27e106982b83.png)

# III. Visibility

## 1. Definition of Visibility

This _basic information_ determines whether the _entity_'s _model_ is visible to players during runtime. It only affects the model, and does not impact _collisions_, _triggers_, _node graphs_, or other logic

It is recommended to create some functions related to hidden entities

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/0db5274c-0503-48b2-90aa-db4c1645fe19.png)

## 2. Node Graph Related

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/9e3425fc-7bd1-4478-9224-e1e337a9cf72.png)

# 4. Create Settings

## 1. Create Settings Definition

Indicates whether the _entity_ is created during stage initialization after being placed in the scene. If this toggle is "Disable," it must be dynamically created later via the node graph.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/bad0adf8-5329-47a8-a098-b68722dcb8d9.png)

## 2. Node Graph Related

If an entity is destroyed or removed, this node can be used to recreate it

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzllq9fbdyq/1c56648a-4a83-4e21-b1ac-757056361987.png)

[Model](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhrutdio6904)
