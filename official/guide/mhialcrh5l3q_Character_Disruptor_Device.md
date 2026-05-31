---
id: mhialcrh5l3q
title: Character Disruptor Device
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhstl890y7xe
language: en
scope: guide
crawledAt: 2026-05-31T16:17:59.925Z
---

# Character Disruptor Device

# I. Functions of Character Disruptor Device Component

The Character Disruptor Device grants dynamic objects the ability to apply simulated physical forces to characters that collide with them.

Supports configuring multiple character disruptor devices simultaneously, but only one can be active at a time.

Character Disruptor Devices support usage of _local filters_ to determine if they take effect

# **II. Editing Character Disruptor Device Components**

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/db99709b-40b9-4be0-a48a-dfc20a98e6a4.png)

(1) In the entity/prefab editing interface, open the Editing Components tab

(2) Click "Add Common Components" below, select and click "Character Disruptor Device" to add it

When "Character Disruptor Device" is selected, the entity being edited will display the current effective disturbance range of the "Character Disruptor Device" component in blue.

(3) Click "Advanced Editing" to expand the editing tab

## 2. Editing Character Disruptor Devices

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/7c9b7cbb-c8fa-4b1c-9bcc-33e70585b974.png)

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/2fbef837-eff3-4e10-84ce-d29f6c2e7b76.png)



Click ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/568fec50-2955-4e49-abf1-7f16fb2e01b2.png)to add "Character Disruptor Devices".

If the current "Character Disruptor Device" group is empty, the added "Character Disruptor Device" will be enabled by default when initially activated.



"ID X", where X is the "Character Disruptor Device ID", can be used as a node input to adjust the parameters of the disruptor device

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/91c183c3-dafa-4923-9921-49c81c72027e.png)



Basic Settings

Configuration Parameters Description
_Initially Effective_ Whether to enable when the object is created
_Device Type_ Type of character disruptor device
_Device Rules_ Different disturbance types support different configuration parameters for disturbance rules
_Local Filter_ Can reference the Local Filter node graph to determine whether the disturbance device is in effect. Please refer to [Node Graphs](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhjwjrr5n73i)to understand the distinction and usage of both filters.

_Ejector_: Local filter will perform one check when a character enters the effective range

_Traction Device_: Local filter will perform one check when a character enters the effective range

_Force Field Device_: Local filter will continuously perform checks when a character enters the effective range

Explains basic nodes in the corresponding local filter node graph



Obtain self entity

Output parameter is the entity with character disruptor device component



Obtain target entity

Output parameter is the character entity in the effecive range of the tab



Obtain current character

Output parameter is local character

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/d200308b-dd18-4128-aea4-1ca80363c988.png)



Trigger Areas

You can add basic shapes through "Add Trigger Areas". Multiple basic shapes form the trigger area of the Character Disruptor Device.

During editing, you can view the trigger area range on the edited entity in real-time in the editing interface.



Area Editing

Configuration Parameters Description
_Trigger Area Shape_ Supports three basic shapes: rectangle, sphere, and capsule
_Center_ Offset relative to the entity/prefab center
_Rotation_ Supports orientation adjustment along different axes based on the center position
_Zoom Multiplier_ The trigger area's shape supports defining scaling along different axes

## 3. Types of Character Disruptor Devices

### **(1) Ejector**

This force adds an additional configured value to the character's _velocity_ in the configured direction.

During the ejector application, if a collision is detected in a certain direction, the ejector force applied in that component will be removed.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/194ded84-581c-4d5e-8dfd-68f1acb5e903.png)

**Device Rules**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/27d49033-15bd-483c-af86-1a2074b28c6a.png)



When _Disturbance Direction_ is set to _Specified Direction_, an additional parameter _Direction Vector_ can be configured

By configuring this 3D vector, you can specify the direction of force applied by the ejector



When _Disturbance Direction_ is set to _Associate Character Disturbance Direction_, additional parameters can be configured as _Direction Settings_

Configuration Parameters Description
_Direction of Line From Character to Entity_ Line connecting the character and the entity center, pointing towards the entity center
_Direction of Line From Entity to Character_ Line connecting the character and the entity center, pointing towards the character

Other configurable parameters are described as follows:

Configuration Parameters Description
_Motion Velocity_ _(m/s)_ When the character collision range takes effect, an additional ejector that can generate this speed will be applied
_Stable Phase Duration (s)_ The duration for which the character is affected by the ejector, during which the ejector's size remains constant
_Decay Phase Duration (s)_ The time it takes for the ejector affecting the character to gradually decrease to 0 after the Stable Phase Duration (s) ends

**Local Filter Examples**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/ba635981-ffea-4c3e-9251-894a22440598.png)

### **(2) Traction Device**

This force transforms the character into a sphere effect, dragging them towards the _traction destination_ at the configured _speed_ during the disturbance period.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/7f9226f5-cf42-4e94-83d5-025849fbb7f9.png)

**Traction Destination**

Configuration Parameters Description
_Offset_ Position offset between the traction destination and the edited entity
_Radius_ When the character reaches within the radius distance of the traction destination, it is considered to have reached the destination

**Device Rules**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/b5b79fab-7d80-4d99-af61-4e85efe92949.png)

Configuration Parameters Description
_Motion Velocity_ _(m/s)_ When character collision is effective, an additional traction device that can generate this speed will be applied
_Stable Phase Duration (s)_ The duration for which the character is affected by the traction device, maintaining the speed during this period
_Decay Phase Duration (s)_ The time taken for the traction device's effect on the character to decay to zero after the disturbance period ends.
_Stop When Reaching the Destination_ If enabled, the force will end early when the character reaches the traction destination radius distance
_Can Be Interrupted by Jump_ If enabled, the character can end the force effect early by actively performing a jump during movement
_Ignore Scene Collision_ If set to Off, when the character collides with the scene during movement, the force effect can be terminated early

**Local Filter Examples**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/167b3965-be70-4c2b-9475-bb55878be5db.png)

### **(3) Force Field Device**

This force continuously affects characters within its effective range, with different force effects that can be configured for different ranges.

The character will continuously experience corresponding forces while in different areas of the configured effective range.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/4861c6e4-b6ed-40e4-bd13-a2ccdaf1f7fa.png)

**Logic Force Field Sphere**

The force field device is applied with this concentric sphere as the core

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/5da0d5ec-0e63-4594-bbda-fc30aa3ee674.png)

Configuration Parameters Description
_Inner Sphere Radius (m)_ Inner radius of the concentric sphere defining the force field's effective range
_Outer Sphere Radius (m)_ Outer radius of the concentric sphere defining the force field's effective range
_Offset_ Offset between the centre of the force field's logic effective sphere and the entity's position

**Device Rules**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/7fd8cb82-a5fe-4b85-b8b8-7de5f0677ca7.png)



When _Disturbance Direction_ is set to _Specified Direction_, an additional parameter _Direction Vector_ can be configured

By configuring this 3D vector, you can specify the direction of force applied by this force field device



When the _disturbance direction_ is set to _"_ _Line Connecting Sphere Center and the Trigger Area Center_ _"_, additional parameters can be configured as _Inner Diameter Orientation_ and _Outer Diameter Orientation_

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/aeab12e2-e44e-4307-9fdf-cb58ff6253e4.png)

Configuration Parameters Description
_Inner Diameter Orientation_ Force direction of the inner sphere in the logic force field
_Outer Diameter Orientation_ Force direction of forces outside the logic force field beyond the sphere

Each configurable parameter is divided into _towards the sphere center_ and _away from the sphere center_

Configuration Parameters Description
_Towards Sphere Center_ The line connecting the character and the sphere center of the logical force field, pointing towards the sphere center
_Away from Sphere Center_ The line connecting the character and the sphere center of the logical force field, pointing towards the character

Other configurable parameters are described as follows:

Configuration Parameters Description
_Inner Diameter Velocity (m/s)_ Additional force field device that can apply this speed within the inner sphere radius
_Outer Diameter Velocity (m/s)_ Additional force field device that can apply this speed outside the outer sphere radius

**Local Filter Examples**

When a character is within the force field device's effective range, the local filter will continuously monitor and any changes in results will take effect immediately

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/32712dc6-2d89-4043-a56a-d99c86dfbe3e.png)

**Force Field Device Effect Description**

Players will only be affected by the force field device effect when they enter the configured force field range.

The force effect and its configuration are related to the inner sphere radius and the outer sphere radius, with specific effects as follows

Let's explain in detail with a 3D graph

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/a66d38eb-8827-4807-8cc6-5e05c6f8d6f4.png)![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/43a8c3e0-acbc-4ff9-ac8b-b850d5b97caf.png)



The player within the inner radius range experiences the force effect configured for the inner sphere radius.



The player between the inner and outer radii experiences a transitional force effect between the inner and outer radii.



The player outside the outer radius experiences the force effect configured for beyond the outer sphere radius.

# III. Important Notes

When the character is in a flying state and under additional forces, they are not affected by gravity.

This feature can be used to create horizontal force fields.

For the upward force of the force field device to take effect, the character must be in a flying state.

Characters cannot jump in place and take off while in the force field device

The inner radius velocity within the force field device is too high, and when the direction is set to "Line Connecting Sphere Center and the Trigger Area Center - Towards Sphere Center", if a character enters the range while flying or falling, they may be unable to escape this state

# IV. Manage Character Disruptor Devices Through Node Graphs

During entity runtime, character disruptor devices can be managed through node graphs



Set Character Disruptor Device

Adjust character disruptor devices affecting running entities

If the ID is empty or configured with non-existent IDs, all character disruptor devices will not take effect

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhialcrh5l3q/2a24fdd5-ea53-405a-9674-f3bd4a9a602b.png)

[Projectile Motion Device](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhaqt9rgqv4u)[Unit Status](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhd7nxrfa8im)
