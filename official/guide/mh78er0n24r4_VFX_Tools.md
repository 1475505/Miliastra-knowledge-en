---
id: mh78er0n24r4
title: VFX Tools
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh4ejditwixg
language: en
scope: guide
crawledAt: 2026-05-31T16:39:26.232Z
---

# VFX Tools

# I. What Are VFX Tools?

_VFX Tools_ are composite assets consisting of visual effects (VFX) and sound effects (SFX) managed via a timeline. Craftspeople can Play or Mount them the same way as regular special effects

# II. Accessing the VFX Tool Editor

As shown in the image below, navigate to the Combat Preset tab, select VFX Tool and click [New VFX Tool]

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/e21730ea-1db1-470a-92e9-86c0f3e69059.png)

# III. Basic Concepts of VFX Tools

## 1. Classification of VFX Tools

Similar to standard special effects, VFX Tools are categorized into two types: Timed and Continuous

_Timed VFX Tools_ are VFX Tools with a fixed duration. Once the playback reaches the _Duration_, the VFX Tool will automatically destroy itself. Timed VFX Tools can only be triggered via the [Play Timed Effects] node

_Persistent VFX Tools_ are VFX Tools with an infinite duration and will not destroy itself. Similar to continuous effects, they can be destroyed in the Node Graph using either the Special Effects Asset Configuration ID or the Special Effect Instance ID. Persistent VFX Tools can only be mounted via the [Mount Looping Effects] node

Note: You must choose the VFX Tool type when you create it. It cannot be changed later

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/e0ff2069-e1ba-4b11-a2cb-a4dfe1e140b5.png)

After creating a Timed VFX Tool, you can enter the editing interface to adjust its duration

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/c250e13c-3d2d-4d22-9f5a-fb58c109c56f.png)

## 2. Effect Tracks

A VFX Tool can consist of multiple Effect Tracks. Click [New Track] to add a track to the timeline

You can configure visual effects (VFX) or sound effects (SFX) on any track. At runtime, the system will play these effects at their designated time points along the timeline

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/66e58904-c240-4b5c-b0be-f62315f92287.png)

Click a specific track to modify its properties

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/0039e2e0-d69c-4c18-9ee0-377113ea8663.png)

### **(1) Visibility Settings**

These settings determine whether the effects within a track are visible to each player. If any single condition is not met, all effects within that track will be hidden

Parameters Description
_Visible Faction List_ This parameter checks the faction relations between the effect owner and the local player:

Hostile Faction: The local player can see the effects on this track when they are hostile to the effect owner

Allied Faction: The local player can see the effects on this track when they are friendly to the effect owner

Own Faction: The local player can see the effects on this track when they are in the same faction as the effect owner

By default, all options are selected, so all players can see the effects on this track
_Local Filter_ The effect track updates the Local Filter on each player's client at a fixed frequency. When the filter returns "True," the effect is visible; When it returns "False," the effect is hidden

### **(2) Loop Segment Settings**

Parameters Description
_Enable Loop Segment_ When enabled, this track becomes a loop segment track. You can also create a loop segment track directly through [New Track]
_Loop Segment Start Time (s)_ Defines the start position of the loop segment on the timeline
_Loop Segment Duration (s)_ Defines the duration from the start position to the end position of the loop segment
_Infinite Loop_ When enabled, this loop segment will keep looping until the VFX Tool's Life Cycle ends
_Number of Loops_ Specifies the number of times this segement loops. This parameter can be configured when Infinite Loop is disabled

When a Loop Segment is enabled, a special area will appear on the effect track (marked by a blue box). This represents the loop segment area

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/de6dc5f7-cb4b-4f13-882e-25a40b1e50e6.png)

If Infinite Loop is disabled, you must specify the Number of Loops. This segment will repeat on the track for the specified number of times

The image below illustrates a loop repeated 3 times

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/dda88d83-29c2-41a8-a037-7af1d5a4f7af.png)

When Infinite Loop is enabled, this segment will keep looping until the VFX Tool's lifecycle ends

The image below illustrates an Infinite Loop configuration

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/68a98a59-1bab-4bbc-b725-d28e68e79692.png)

Note: If the duration of a Timed VFX Tool is reached, any active effects within the loop segment will be cut off at the end of the Timed VFX Tool's lifecycle

## 3. Effect (SFX) Blocks

You can place Effect (SFX) Blocks anywhere along an effect track. Each block references a effect asset (sound asset) and configure its duration (Life Cycle) within the track

The effect asset can be either a Timed Effect or a Continuous Effect

### **(1) Life Cycle Settings for Effect (SFX) Block**s

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/da7a3a1e-a6ef-40d1-bd9f-c3c125517cd8.png)

When Continuous Playback is enabled, the effect will play until it naturally finishes (Timed Effect) or until the VFX Tool is destroyed.

When Continuous Playback is disabled, you must configure the Duration. The effect will be destroyed once the duration is reached. However, if the VFX Tool is destroyed before the duration ends, the effect will be destroyed immediately

After selecting the Effect Asset and clicking [Set to Asset Duration], you can set the effect's duration to the Effect Asset's duration. (Because the effect's actual playback duration can vary somewhat randomly, this setting cannot guarantee that the effect won't be reclaimed earlier before its presentation concludes)

### **(2) Behaviors of Effects on Destroy / on Hide**

Both Regular and Warning Effects can be configured for their behavior when they are Destroyed or Hidden

_Behavior When Destroyed_: Defines the behavior of the effect asset when the VFX Tool is destroyed (for example, when it is removed through the Node Graph or when the VFX Tool's owner is destroyed)

_Behavior When Hidden_: Defines the behavior of the effect asset when the VFX Tool is hidden (for example, when Unit Status - Hidden Character causes all VFX Tools mounted on the owner to be hidden)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/9c345e7b-629a-4e2d-963d-1098d4b9bf04.png)

The configurable settings for this option depend on the type of effect asset selected:



**Timed Effects**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/d667ebcb-9faa-4a71-9d8c-0e5b7afd2094.png)

When "Has Behavior on Destruction" is enabled, the available options for "Behavior When Destroyed" are: Stop Particle Emission and Stop and Clear Effects

_Stop Particle Emission_: Stops particle emission for the current effect, but particles that have already been emitted will continue until the end of their Life Cycle. This is typically used to create a natural fade-out for some effects. Note that this option only affects effect assets containing particles. Otherwise, this option functions the same as Stop and Clear Effects

_Stop and Clear Effects_: Stops particle emission for the current effect and removes all visual presentation. It allows you to instantly remove all visual presentation

When "Has Behavior on Destruction" is disabled, the Timed Effect is not affected when the VFX Tool is destroyed and will continue playing until it completes its configured lifecycle

Special Notes: In all of the cases above where an effect is triggered to be destroyed, the system only attempts to destroy it. If the effect is a Timed Effect and its "Has Behavior on Destruction" is disabled, that Timed Effect cannot be destroyed. As a result, it may continue to play according to its Life Cycle settings even after the VFX Tool is destroyed

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/ecfb7891-f06e-44c9-a3ac-0f96c5822b9d.png)

The available options for "Behavior When Hidden" are: None and Destroy Effect

_None_: When the VFX Tool is hidden, the effect is not affected

_Destroy Effect_: When the VFX Tool is hidden, the effect is destroyed. When the VFX Tool is visible again, the effect will not resume or restart



**Looping Effects**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/6779cd54-2bac-4e40-89e8-75ae77a7b9aa.png)

You must configure a Behavior When Destroyed for looping effects: Stop Particle Emission or Stop and Clear Effects

_Stop Particle Emission_: Stops particle emission for the current effect, but particles that have already been emitted will continue until the end of their Life Cycle. This is typically used to create a natural fade-out for some effects. Note that this option only affects effect assets containing particles. Otherwise, this option functions the same as Stop and Clear Effects

_Stop and Clear Effects_: Stops particle emission for the current effect and removes all visual presentation. It allows you to instantly remove all visual presentation

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/fdcd1fde-23b2-49b9-a91a-5b977cadcb81.png)

The available options for "Behavior When Hidden" are: None and Sync Hidden Effects

_None_: When the VFX Tool is hidden, the effect is not affected

_Sync Hidden Effects_: When the VFX Tool is hidden, this looping effect is hidden automatically. It will reappear when the VFX Tool is visible again

### **(3) Regular Effect Blocks**

To add a Regular Effect Block, right-click the track and select [Add Event], then choose [VFX Effect]

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/52a19b58-485e-4029-a2b2-5b57f5859e3d.png)

The available configuration parameters may vary slightly depending on the specific Effect Asset selected

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/8af60cc7-c0f3-4d6d-80a9-e40faa09ff1b.png)

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/ce3636bd-80f4-4635-b17f-a15b67920713.png)

Parameters Description
_Effect Asset_ You can select any Regular Effect Asset (Timed Effect / Looping Effect)
_Play VFX Default Sound Effect_ When enabled, the effect's built-in default sound effect will play simultaneously when the effect plays. When disabled, the default sound effect will not play
_Additional Element Type_ Only available for some effects

Modifies the visual style of the effect to match a specific Elemental Type

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/067d8384-0dfc-4bab-a32e-ecbaaa6e0ad6.png)![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/472eaff7-9076-4cf7-88f8-11cf3cd15fb8.png)
_Effect Playback Speed_ Only available for some effects

Adjusts the playback speed multiplier for this effect. The default is 1 (plays at its original speed)

Note: Adjusting this value does not affect the playback speed of the effect's default audio
_Offset_ A general effect parameter. Adjusts the location offset relative to the VFX Tool's origin
_Rotation_ A general effect parameter. Adjusts the rotation offset relative to the VFX Tool's origin
_Zoom_ A general effect parameter. Adjusts the scale of the effect relative to the VFX Tool. Only uniform scaling is supported

### **(4) Warning Effect Blocks**

To add an Warning Effect Block, right-click the track and select [Add Event], then choose [VFX Effect]

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/a033b336-3047-4a3b-bc2b-34c92909a1e8.png)

Warning effects are a category of effects that allow for the free configuration of static parameters. They are available in three shapes: circular, rectangular, and sector.

All warning effects are timed effects, and you can also call them directly as timed effects



**Circular warning effects**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/18bc4671-bd27-4840-906e-2c8dfbbd03f2.png)

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/34ed8703-163f-49a1-b746-ac5564f7aad5.png)

Parameters Description
_Outer Radius (m)_ The outer radius of the circular warning area (when Zoom is set to 1)
_Inner Radius (m)_ The inner radius of the circular warning area (when Zoom is set to 1). If set to 0, the effect will expand outward from the center point
_Fill Time (s)_ The time required for the effect to expand from the inner radius to the full circular area
_Duration_ The amount of time the warning effect remains fully filled after the expansion is complete
_Ground Height_ If the distance between the effect and any surface below it is less than this value, the effect will snap onto that surface

If there is no valid surface below the effect within this range, the effect will not be shown
_Fill Color_ The color of this warning effect
_Offset_ A general effect parameter. Adjusts the location offset relative to the VFX Tool's origin
_Rotation_ A general effect parameter. Adjusts the rotation offset relative to the VFX Tool's origin
_Zoom_ A general effect parameter. Adjusts the scale of the effect relative to the VFX Tool. Only uniform scaling is supported



**Rectangular warning effects**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/934d5076-eac4-4baa-8b1a-025c7a9039fa.png)

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/983c3d8d-9ed0-4508-ac7e-e9af5f288f36.png)

Parameters Description
_X-Axis Length (m)_ The length of the rectangle along the X-axis (when Rotation is (0,0,0) and Zoom is 1)
_Z-Axis Length (m)_ The length of the rectangle along the X-axis (when Rotation is (0,0,0) and Zoom is 1)
_Fill Direction_ Linear Fill: Fills alongs the negative Z-axis

Inside Out: Fills outward along the X-axis from the center
_Fill Time (s)_ The time required to fill the entire rectangle
_Duration_ The amount of time the warning effect remains fully filled after the expansion is complete
_Ground Height_ If the distance between the effect and any surface below it is less than this value, the effect will snap onto that surface

If there is no valid surface below the effect within this range, the effect will not be shown
_Fill Color_ The color of this warning effect
_Offset_ A general effect parameter. Adjusts the location offset relative to the VFX Tool's origin
_Rotation_ A general effect parameter. Adjusts the rotation offset relative to the VFX Tool's origin
_Zoom_ A general effect parameter. Adjusts the scale of the effect relative to the VFX Tool. Only uniform scaling is supported



**Sector warning effects**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/7e3b58d6-7cd0-4c4a-95ea-ec6eb9f602b9.png)

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/84604694-4491-44ac-892b-d4d3341c7368.png)

**Parameters****Description**
_Outer Radius (m)_ The outer radius of the sector (when Zoom is 1)
_Inner Radius (m)_ The inner radius of the sector (when Zoom is 1)
_Sector Angle_ The angle of the sector
_Fill Direction_ Clockwise: Fills in a clockwise sweep. The sweep starts from the negative X-axis and ends at a position determined by the sector angle

Counterclockwise: Fills in a counterclockwise sweep. The sweep starts at a position determined by the sector angle and ends at the negative X-axis

Inside Out: Fills outward from the inner radius to the outer radius
_Fill Time (s)_ The time required to fill the entire sector
_Duration_ The amount of time the warning effect remains fully filled after the expansion is complete
_Ground Height_ If the distance between the effect and any surface below it is less than this value, the effect will snap onto that surface

If there is no valid surface below the effect within this range, the effect will not be shown
_Fill Color_ The color of this warning effect
_Offset_ A general effect parameter. Adjusts the location offset relative to the VFX Tool's origin
_Rotation_ A general effect parameter. Adjusts the rotation offset relative to the VFX Tool's origin
_Zoom_ A general effect parameter. Adjusts the scale of the effect relative to the VFX Tool. Only uniform scaling is supported

### **(5) SFX Blocks**

To add an audio block, right-click the track and select [Add Event], then choose [SFX]

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/7a6d3382-1a29-4ff0-9ba9-4c39caf036e3.png)

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/03ffa11e-c823-42a4-ad73-8e7e1d38dd86.png)

Parameters Description
_Sound Effect Asset_ References a sound effect asset
_Volume_ Adjusts the playback volume of this sound effect
_Playback Speed_ Adjusts the playback speed of the sound effect
_Loop Playback_ When enabled, after the sound effect finishes playing, it will restart from the beginning after the loop interval
_Loop Interval (s)_ The interval between two loop cycles
_3D Sound Effect_ When enabled, this sound effect is a 3D sound effect based on the VFX Tool's origin
_Range Radius (m)_ The radius within which this sound effect can be heard
_Attenuation Mode_ Determines how the sound effect attenuates over distance
_Offset_ A general effect parameter. Adjusts the location offset relative to the VFX Tool's origin

# III. How to Use VFX Tools

VFX Tools are used in exactly the same way as regular effects. You can play a VFX Tool anywhere that supports regular effects

Take the [Play Timed Effects] node as an example:

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/9a02fcd4-a66e-428b-b04e-6d5b6df4fee1.png)

In the effect asset selection box, you can enter the configuration ID of the VFX Tool

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/50988fbf-ead5-4408-9602-7add1a7da9a1.png)

Or use the search box to find a configured Timed VFX Tool

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh78er0n24r4/e64514e6-0306-4e5a-9344-7147f7fef20d.png)

When the effect asset is a VFX Tool, the [Play Timed Effects] node supports the following features:

**Parameters****Description**
_Effect Asset_ Select a VFX Tool
_Target Entity_ The owner entity of the VFX Tool
_Attachment Point Name_ The attachment point used by the VFX Tool. Its origin will be placed at the corresponding attachment point position
_Move With the Target_ Determines whether all effects within the VFX Tool follow the target's motion
_Rotate With the Target_ Determines whether all effects within the VFX Tool follow the target's rotation
_Location Offset_ The offset of the VFX Tool's origin relative to the attachment point
_Rotation Offset_ The rotation of the VFX Tool relative to the attachment point
_Zoom Ration_ Applied together with the zoom rotation in the VFX Tool
_Play Built-In Sound Effect_ When set to Yes, each effect in the VFX Tool uses its own [Play VFX Default Sound Effect] setting to determine whether to play its default sound effect

When set to No, no effects in the VFX Tool will play their default sound effects

[Path](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh333vim2h44)

1
