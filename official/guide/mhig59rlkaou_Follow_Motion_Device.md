---
id: mhig59rlkaou
title: Follow Motion Device
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhuts59m9gju
language: en
scope: guide
crawledAt: 2026-05-31T16:24:29.736Z
---

# Follow Motion Device

# I. Functions of the Follow Motion Device Component

The Follow Motion Device component gives an entity the ability to follow the movement of another entity

Only one Follow Motion Device can be active on a Follow Motion Device component at a time

# II. Editing Follow Motion Device Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/b7ffa5d8-45a8-43c0-b3e4-a3be19df7544.png)

(1) In the entity/prefab editing interface, open the Editing Components tab

(2) Click "Add Common Components" below, select and click "Follow Motion Device" to add it

(3) Click "Advanced Editing" to expand the editing tab

# III. Parameter Configuration

The parameters of the Follow Motion Device are as follows:

## 1. Basic Settings

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/59e58379-fd51-4b4c-9aaa-9740f63f21f3.png)

_Initially Effective_: Whether it takes effect immediately after the entity is created

_Track Target_:You can choose the follow target for the follow motion device. Initially, it can be left unset, and later dynamically specified through a node graph.

_Follow Type_: Three follow types are currently provided



Completely Follow: Follow both locations and orientations



Follow Location: Only follow the target's location while maintaining the original orientation



Follow Rotation: Only follow the target's orientation while maintaining the original location

_Follow Attachment Point_: Specify which attachment point to follow on the target

## 2. Follow Mode

_Follow Mode_ defines the detailed behavior of tracking performance when the Follow Motion Device component on an entity executes tracking logic. Currently, three behavioral performances are provided:

### (1) Adsorption Tracking

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/a34f2084-11f0-479f-8a55-cf1e58408e50.png)

This method will strictly adhere to the configured following location settings

### (2) Delayed Tracking

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/3f0b05bd-6ff3-443a-a6b1-9e63a0920b6e.png)

A tracking method with transition time. When the target's location changes, the Follow Motion Device will gradually move to the designated follow location within the configured transition time

_Transition Time_: The duration required to reach the target follow location

### (3) Constant Speed Tracking

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/030aa600-a3ce-45c3-9471-25312909294a.png)

A tracking method that follows at a specified speed. When the target's location changes, the Follow Motion Device will track it at the designated speed.

_Initial Speed_: The initial speed of the follow motion device

_Acceleration_: The speed increase value per second

_Acceleration Duration_: Duration of the acceleration behavior

_Correct Orientation to Movement Direction_: When set to "Yes", it will automatically adjust the forward orientation of the entity to match the velocity orientation

_Destination Target Radius_: In tracking behavior, when the distance between the following entity and the followed entity is less than the arrival target radius, the tracking is considered complete. After tracking finishes, the behavior will be the same as "adsorption".

## 3. Initial Following Location

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/e86d0341-6137-4216-9dde-7387001bc0bd.png)

_Coordinate System Type_: Determines whether the follow offset is based on the target's world coordinate system or relative coordinate system

_Offset_: Location offset based on the follow target

_Rotation_: Orientation offset based on the follow target

# 4. Using Node Graph to Control Follow Motion Device

Activate/Disable Follow Motion Device

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/1954f23c-49cf-4c33-85a3-e081fbf517e0.png)

Switch Follow Motion Device Target by Entity

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/e6da5901-bef9-49d8-9b54-d6bfbe9886ae.png)

Switch Follow Motion Device Target by GUID

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/e502c9ab-0522-474d-b3de-3a80eedb8e03.png)

Get Follow Motion Device Target

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhig59rlkaou/7ed57a0b-ce46-4d26-8962-cf16828215e9.png)

### V. Special Notes

When a n entity with a Follow Motion Device f ollows an objec t, if the object is destroyed during the follow process, the entity will immediately stop following and remain in its current position.

When an entity with a Follow Motion Device follows a player, if the character falls during the follow process, the entity will continue to move towards the location where the character fell. When the character revives, it is equivalent to re-entering the scene, and at this point, the entity will be reset to its creation position and will start following from the creation position again.

[Extra Collisions](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhuiob9dg1dm)[VFX Playing](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh4ppo02m1o8)
