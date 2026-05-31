---
id: mh0ddb91cxwa
title: On-Hit Detection
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2pir0hat1s
language: en
scope: guide
crawledAt: 2026-05-31T16:29:18.592Z
---

# On-Hit Detection

# I. Functions of On-Hit Detection Components

On-Hit Detection Components can send hit events to the server node graph when the hit area defined within the component encounters other entities or scene terrain (including water surfaces). In most cases, this can be used to handle the function of a projectile's hitbox

It can also immediately trigger an ability unit (attack only) locally when the hit area contacts other entities

On-Hit Detection Components support multiple on-Hit detection areas taking effect simultaneously, and their effective ranges will stack.

A typical use case is using this component as a projectile's On-Hit Detection Box. It determines when a projectile hits a target and processes post-hit events in the Node Graph (such as dealing damage or playing special effects)

# II. Editing On-Hit Detection Components

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0ddb91cxwa/00281628-f446-4e43-ab61-4c438e4dc6f5.png)

(1) In the Entity/Prefab Editing interface, open the Component Editing Tab

(2) Click "Add Common Components" below, then click "On-Hit Detection" to add it

(3) Click "Advanced Editing" to expand the editing tab

## 2. Editing Hit Rules

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0ddb91cxwa/81cbbd13-7792-4948-819e-c3fcba4a1e68.png)

The parameters and their functions are as follows:

**Parameter****Function**
_Trigger Type_ Single Trigger: On-Hit Detection triggers only once during the component's entire life cycle. This means a hit event is sent to the Node Graph at most once during its entire life cycle

Non-Repeating Trigger: For each hit entity, On-Hit Detection triggers at most once.

Repeating Trigger: Can trigger multiple times, subject to trigger interval restrictions. After each trigger, must wait for the trigger interval time before triggering again
_Trigger Interval_ Only configurable when trigger type is set to Repeating Trigger
_Detection Delay Time_ When an entity is created, it will delay On-Hit Detection for the time configured in [On-Hit Detection Delay Time].

Common use is to prevent projectile-type objects from hitting their own launcher when fired
_Enable Continuous Collision Detection_ When enabled, activates Continuous Collision Detection (CCD) for hit detection

Continuous Collision Detection: When an entity is moving at high speed, conventional collision mechanisms may result in "tunneling" (where the entity passes through the collision target without triggering a collision) due to large position differences between frames. Enabling CCD makes entity collisions more precise during high-speed movement

CCD has a significant performance cost, so it is only recommended for use in appropriate scenarios (high-speed movement requiring precise hits)
_Continuous Collision Detection Type_ Above Speed Threshold: CCD is only enabled when the projectile's velocity exceeds the threshold, helping optimize performance.

Continuously Effective: Continuously effective, more performance cost
_Speed Threshold_ Only effective when CCD type is set to "Above Speed Threshold". CCD will be enabled when the projectile's velocity exceeds this value, which helps optimize performance
_Detection Radius_ Continuous Collision Detection is implemented by generating a cylinder with a certain radius in consecutive frames to assist with collision detection. The detection radius determines the radius of this cylinder. It is recommended to keep it consistent with the actual radius of the projectile. When the value is 0, ray casting is used for detection instead
_Filter Node Graph_ _Refer to Local Filter Node Graph_: Used to determine whether the current hit is valid. For the specific distinctions and usage of the two filters, see [Node Graphs](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhjwjrr5n73i). If both the filter and the local filter are used together, the hit is considered valid only if both conditions are satisfied.

The local filter will execute once every time a hit occurs.

An explanation of the correspondence between the basic nodes in the local filter Node Graph



Get Self Entity

Output parameter is projectile entity.



Get Target Entity

Output parameter is the entity that was hit.



Get Current Character

Output parameter is local character.



Local filter example:

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0ddb91cxwa/e97281d3-0a94-4e93-8ff7-c8bd3a315827.png)
_Enable Filters Below_ When enabled, the filtering parameters below will be activated. When disabled, no filtering will be applied and all entities that can pass through the filter will be hit
_Faction Filter_ None: Does not hit entities of any faction.

Hostile Faction: Only hits entities hostile to the projectile.

Allied Faction: Only hits entities friendly to the projectile, excluding self.

Allied Faction Self Entity Included: Only hits entities friendly to the projectile, including self.

Own Faction: Only hits the faction the projectile belongs to.

All Factions: Hits all factions, including self.

All Factions Self Entity Excluded: Hits all factions, excluding self
_Entity Type Filter_ Multiple selectable options, including Objects, Characters and Creations
_Hit Layer Filter_ Multiple options can be selected. When multiple options are selected, multiple hits may occur (for example, when hitting an object with a hurtbox, two hit events may occur due to hitting both the object's collider and the hurtbox.)

Hurtbox: Only hits entities with hurtboxes.

Scene: Hits scene colliders, in this case the _On Hit Detection Triggered_ node's _On-Hit_ _Hurtbox_ value is False

Object Self-Collision: On-Hit Detection triggered by collision with the object itself. Note that in this case, the hit hurtbox value in the node graph's On-Hit Detection Triggered is False, and no hit entity will be returned
_Execute Ability Unit When Hit_ References a group of ability units, see [Ability Units](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0ucw9e76f6)

When on-hit detection is triggered, this group of ability units will be activated

## 3. Editing Hit Areas

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0ddb91cxwa/7fe0b64d-7aa9-4c95-bdc3-4269990c4dab.png)

Click [Add Trigger Area] to add a new hit area configuration

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0ddb91cxwa/8708ea3c-ebd7-4351-a167-fc12abf19b71.png)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0ddb91cxwa/8a0cf981-f52e-4ffb-abd7-d9fddb027834.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0ddb91cxwa/c5221e25-508d-4aa6-9c20-4557d0ef5e86.png)

The On-Hit Detection Area is similar to the [Collision Trigger](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh8w69rzuc3i). Multiple detection areas can be configured, and when any detection area collides with an entity or scene, it will trigger a on-hit detection event

**Parameter****Function**
_Trigger Area Shape_ Currently supports cuboid, sphere, and capsule detection areas
_Center_ Offset relative to the entity/prefab center
_Rotation_ Only configurable when a cuboid area is selected, the Euler angle rotation of the cuboid detection area
_Zoom Multiplier_ Only configurable when a cuboid area is selected, for scaling the length, width and height of the cuboid
_Radius_ Radius of the sphere/capsule
_Angle_ Can only be configured when a capsule area is selected, represents the angle of the capsule
_Height_ Can only be configured when a capsule area is selected, represents the height of the capsule

# III. Using On-Hit Detection Functions in Node Graphs



**When On-Hit Detection Is Triggered**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0ddb91cxwa/6637d5da-7715-4275-8dde-56b2ecdd6a10.png)

**Node Type**: Event

**Node Functions**



When the on-hit detection component collides with an entity or scene, it pushes a [When On-Hit Detection Is Triggered] event to the component owner's node graph



Based on the [Trigger Type] configuration in the on-hit detection component, this event may be triggered once or multiple times

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity Common event parameter, the entity that triggered the event
Output Parameter Event Source GUID GUID Common event parameter, GUID of the event trigger
Output Parameter On-Hit Hurtbox Boolean Returns whether the entity's hurtbox was hit.

Returns [Yes] when hitting an entity's hurtbox, returns [No] when hitting scenes or colliding with itself
Output Parameter On-Hit Entity Entity When hitting an entity's hurtbox, returns the hit entity. Returns null when hitting scenes or colliding with itself
Output Parameter On-Hit Location 3D Vector Returns the on-hit location, regardless of whether an entity is hit

[Timer](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhufb90zbnts)[Extra Collisions](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhuiob9dg1dm)
