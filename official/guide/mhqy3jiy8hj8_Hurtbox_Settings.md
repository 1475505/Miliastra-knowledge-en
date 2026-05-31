---
id: mhqy3jiy8hj8
title: Hurtbox Settings
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhvg40rc5w9i
language: en
scope: guide
crawledAt: 2026-05-31T16:25:09.850Z
---

# Hurtbox Settings

# I. What is a Hurtbox?

The _hurtbox component_ is a _component_ used to perform hit detection, which can



When the _trigger area_ defined by the component is hit by another entity's attack, it sends a hit event to the node graph

The hurtbox component is typically used as the receiver for attack events, determining hit detection and handling post-hit actions (e.g., dealing DMG or playing special effects) in the node graph of the attacked entity.

# II. Editing Hurtboxes

In the Specialized Setting tab of an _entity/prefab_![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqy3jiy8hj8/483e903b-7b66-4fdf-8646-586f0fce88b7.png)

Has a non-deletable hurtbox component by default.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqy3jiy8hj8/8906cc8c-06c6-484c-adf5-8c904cc7d11b.png)

Click details to edit

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqy3jiy8hj8/c09d9b6d-ff68-424f-b3c9-1f1bf9268196.png)

Multiple hit triggers are allowed under hurtbox settings. Creators (Craftspeople) can press A to add more hit triggers.

**Parameter****Functions**
_Initially Effective_ Common component parameter used to set whether the component is initially effective.

For each independent hurtbox trigger, creators (Craftspeople) can set whether it's initially active and add hurtbox trigger areas by pressing B.



Multiple hurtbox trigger areas will be combined through a union operation.

Creators (Craftspeople) can set the _trigger area shape_, with different shapes having different configurable parameters.



Cuboid: configurable center offset, rotation offset and absolute scaling.



Sphere: configurable center offset and radius.



Capsule: configurable center offset, rotation offset, capsule radius, and height.

# III. Operation of the Hurtbox Component

**[Node Graph Node] When Attacked**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqy3jiy8hj8/4ea34ec7-f19c-4764-ab41-1b0a385030e4.png)

[Aggro Configuration](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhw9ut96q96y)[Combat Settings](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mha42r0cwx74)
