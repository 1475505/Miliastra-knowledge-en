---
id: mhbx2pi8x190
title: Sound Effect Player
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwiv89yra02
language: en
scope: guide
crawledAt: 2026-05-31T16:35:37.159Z
---

# Sound Effect Player

# I. Sound Effect Player Component Functions

_Sound Effect Player Component_ provides the ability for a Unit to play additional sound effects. The component supports two playback methods

1. When configured on the component by default, it plays automatically after the Unit that owns the component is created

2. Playback can be triggered via the Node Graph, but the Unit that plays the sound effect must have the Sound Effect Player component

# II. Editing the Sound Effect Player Component

## 1. Adding Sound Effect Player Component

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/f7948b54-40d0-4b9a-be44-d016b786c556.png)

(1) Switch to the Components tab of the entity or prefab

(2) Find or create a Sound Effect Player component

## 2. Adding Sound Effect Player

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/1509e6d5-141f-475a-8fbf-334f465eb556.png)

Click [Advanced Editing] to open the details editing tab

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/6692faa7-f79f-49cc-a650-50c96ceac5bb.png)

On the details tab of the Sound Effect player group, click [Add Sound Effect] to create a new sound effect configuration

## 3. Configuring Sound Effect Player

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/f2730c25-a932-45d8-8900-6f6e8480b18c.png)

_ID_: The identification ID of the Sound Effect Player

_Name_: Name of the player

_Sound Effect Assets_: Reference to the specific sound effect asset to play

_Volume_: Controls the playback volume of the sound effect

_Playback Speed_: The playback speed of the sound effect asset

_Loop Playback_: When enabled, the asset will play again after it finishes

_Loop Interval(s)_: Specifies the delay between the end of one playback and the start of the next when looping is enabled

_3D Sound_ _Effects_: Determines whether the sound is 3D. When enabled, related configuration options become available

_*Range Preview_: When enabled, shows the propagation range of the sound effect in the Scene

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/0aa52233-1896-42e6-868a-5340dc3f219a.png)

_Range Radius (m)_: Configures the propagation radius of the Sound Effect

_Attachment Point_: Specifies an Attachment Point Location used as the Sound Effect's source

_Attenuation Mode_: When using 3D sound effects, the farther the listener (usually the character) is from the source, the lower the volume becomes. Once the distance exceeds the range, the volume drops to 0. The attenuation mode determines how the volume decreases over distance

_Linear Attenuation_: Volume decreases linearly with the listener's distance from the sound source

_Fast Then Slow_: Attenuates quickly near the source, then more slowly as distance increases

_Slow Then Fast_: Attenuates slowly near the source, then faster as distance increases

_Offset_: Offsets the sound source's location

# III. Using Node Graph to Control Sound Effects

Add Sound Effect Player

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/0cede11c-4d6a-486e-9ccd-b8246005d8be.png)

Adjust Specified Sound Effect Player

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/dbf6a96d-24d9-4b4d-9e37-e77cad9d1ae8.png)

Close Specified Sound Effect Player

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/475be171-f122-4bfc-8ab5-99e79e8bc692.png)

Start/Pause Specified Sound Effect Player

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/b377a66c-0ee9-4888-a472-18bdb9bcfd61.png)

Player Plays One-Shot 2D Sound Effect

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbx2pi8x190/b4ca70ec-f1c7-40e4-9e5f-1a9378c3eceb.png)

[Collision Trigger Source](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhn95di01j84)[Nameplate](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh5n160t2b6w)
