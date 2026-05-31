---
id: mhreraibgmak
title: Extra Collisions
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhuiob9dg1dm
language: en
scope: guide
crawledAt: 2026-05-31T16:23:10.700Z
---

# Extra Collisions

# I. Functions of Extra Collision Component

Collision blocking, also known as collision detection, refers to the in-game functionality that simulates real-world physical object interactions.

In addition to _native collision_, the extra collision component supports flexible configuration of shapes, sizes and combinations, serving as the effective collision range during entity runtime, or as a climbable range.

Multiple _extra collision_ components can be active simultaneously, with their effective ranges stacking cumulatively.

Each _Extra Collision_ supports multiple collision ranges taking effect simultaneously, and their effective ranges will be stacked.

**Native Collision**

Native collision is the default collision that comes with prefabricated components.

You can configure whether the "native collision" is enabled through the "Initially Effective" setting

# II. Editing Extra Collision Components

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/080f3f8b-1dcc-4205-b1d5-de358573b133.png)

(1) In the entity/prefab editing interface, open the Editing Components tab

(2) Click "Add Common Components" below, select and click "Extra Collision" to add it

When the "Extra Collision Component" is selected, the entity being edited will display the current effective range of the "Extra Collision" component in blue.

(3) Click "Advanced Editing" to expand the editing tab



**Initially Effective Extra Collision**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/978198e7-5493-461c-9afa-03f2a5f0cd87.png)

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/d3c9c4e0-8eae-4f2e-86e3-879642bfb4b7.png)

Configuration Parameters Description
_Initially Effective Extra Collision_ Currently active extra collision configuration, corresponding to settings in the "Advanced Editing" tab
_Extra Collision Structure List_ Enumerated list of all extra collisions for editing the entity



**Native Collision**

Configuration Parameters Description
_Enable Native Collision_ Configure whether the "Native Collision" is enabled in the Base Attributes tab
*_Native Collision Preview_ If enabled, blue dots will display the native collision range

## 2. Editing Extra Collisions

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/65222e8d-43e8-4ff5-a0c4-90d6a2c480b0.png)



Click ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/568fec50-2955-4e49-abf1-7f16fb2e01b2.png)to add "Extra Collisions".



The newly added "Extra Collision" is Initially effective by default.



"ID: X", where X is the "Collision Area ID", can be used as a node input to adjust the parameters of extra collisions

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/72f12e85-9e93-4334-a2cf-3b68dfc21f14.png)

Configuration Parameters Description
_Initially Effective_ Whether the extra collision is enabled along with the creation of the entity
_Climbable_ Whether the extra collision climbing function is enabled as well
_*Native Collision_ Indicates whether native collision is active
_*Native Collision Preview_ Enable to view the range of native collision



Use "Add Extra Collisions" to add a basic shape

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/0b93567a-610e-4d7a-a899-4552f7509130.png)

Configuration Parameters Description
_Trigger Area Shape_ Supports three basic shapes: cuboid, sphere, and capsule

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/39553362-0476-4c7d-9f58-c7a0c19e0e86.png)
_Center_ Offset relative to the entity/prefab center
_Zoom Multiplier_ Supports configuring shape scaling along different axes
_Rotation_ Supports orientation adjustment along different axes based on the center position

# III. Managing Extra Collisions Through Node Graph



Activate/Disable Extra Collisions

Select an entity and enter the "Extra Collision ID" to adjust whether the extra collisions will take effect.

If ineffective, climbable attribute is also ineffective

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/9495a52f-9f97-4aa6-8178-64005d9a69da.png)



Activate/Disable Extra Collision Climbability

When extra collision is enabled, its climbing function can be adjusted separately

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhreraibgmak/16b9db37-a492-4f30-9d41-b816164dde00.png)

[On-Hit Detection](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2pir0hat1s)[Follow Motion Device](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhuts59m9gju)
