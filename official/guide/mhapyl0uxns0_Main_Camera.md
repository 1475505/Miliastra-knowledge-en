---
id: mhapyl0uxns0
title: Main Camera
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfua005zpeg
language: en
scope: guide
crawledAt: 2026-05-31T16:27:25.239Z
---

# Main Camera

_Camera_ is the tool that renders the Player's perspective in the game. It defines what the Player sees on screen.

In Beyond Mode,it supports creators (Craftspeople) to define camera rules through the creation of camera templates. Each Template represents a distinct Camera State.

# I. Definition of Camera Templates

_Camera Templates_ available to Players during gameplay must be edited in Manage Main Camera. The entry point is shown below:

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/ca4b83d4-a446-40a8-9ab8-942ae8496b74.png)

At runtime, each Player always has one active Camera Template.

Active Templates can differ between Players. For example, in Co-Op Mode, Player A might use "Template 1" while Player B uses "Template 2" at the same time.

You can switch a specific Player Entity's active Camera Template at runtime through the Node Graph, but Template parameters themselves cannot be modified dynamically.

# II. Editing Camera Templates

Opening the main Camera editor displays the following Interface, divided into three sections:

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/0503d2fe-f6ad-4b12-a416-d23aaca18d20.png)

1.

Preview and configure parameters of the current Camera Template.

2.

Preview of camera position and character position relationship in the scene

3.

Preview of actual in-game screen during gameplay

# III. Camera Template Parameter Configuration

## 1. Template Name

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/a4baa5d4-72b6-4fce-a67c-3925290aecc7.png)

_Template Name_: The name of this Camera Template. It indicates the Template's role in gameplay and is also used as a reference when Node Graphs operate on a Player's main Camera Template

## 2. Location Information

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/69e5a4d0-9bbe-4162-a70a-ce152485f2b7.png)

Relative location between Camera and Character. These are editing parameters, collapsed by default. They display detailed values of the Camera-Character relationship in the current preview Interface, serving as a reference during editing

## 3. Basic Camera Configuration

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/80f08336-c8e3-4cb8-bdd5-3ed68e6abfa2.png)

_Movement Mode_: The current version only supports camera following character entities. Future updates will expand support to include other Entity Units such as vehicles, etc.

_Mode_: A key parameter that defines the Camera Template type. The mode determines the core Camera rules, and the adjustable parameters vary depending on the mode

_Default Effective Target_: The Camera Template is stored as a Player parameter. It can be modified at runtime for the corresponding Player. During initialization, however, it must be assigned through the Player's Class. This field specifies which Classes the Template initially applies to

## 4. Camera Detailed Settings

Available adjustable parameters differ depending on the selected mode

### (1) Classic Camera

The Classic Camera matches the Classic Mode. Parameters are grayed out. It supports preview only and cannot be edited, so it is not described further

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/bf07942b-3478-4acb-be96-1ab7bc7af2ad.png)

### (2) 3D Back Camera

The 3D Back Camera is an over-the-shoulder view. The Camera is positioned behind and to the right of the Character, as shown below:

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/262a9b22-d6ff-42ce-917d-23e159504963.png)

The detailed settings are shown in the graph below:

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/b51f910c-2d4a-4cc8-b2fa-6433fee393de.png)d

_Camera FOV Detection_: Field of view (FOV), represented by the viewing cone. Changing the FOV adjusts the range of the white cone shown in the graph

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/ceb42697-7c57-443b-8256-f368f43ec838.png)

_Viewpoint Offset_: An additional Location offset applied in the World Coordinate System after the Camera points to the target. The red box in the graph shows the viewpoint

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/4c6d9510-5e7b-4a8b-a715-829a55f62792.png)

_Viewpoint Follows Rotation_: Whether the Camera rotates along with Character rotation

_Default Line of Sight_: Initial distance between the Camera and the viewpoint

_Line of Sight Range_: The adjustable range of Line of Sight that can be modified through player input

_Horizontal Angle Range_: The left-right rotation range, in degrees, that Players can adjust by moving the Camera horizontally

_Pitch Angle Range_: The up-down rotation range, in degrees, that Players can adjust by moving the Camera vertically.

### (3) 2.5D Camera

The camera for traditional 2.5D games, as shown in the following reference:

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/c035c656-691b-4371-bf81-c135161ee4cc.png)

The detailed settings are shown in the graph below:

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/d6312660-1368-454b-aa88-54dfb4c5c131.png)

_Ignore Camera Collision_: When set to "No", the Camera may be pushed by collisions with Entities in the Scene, causing stutter or sudden shifts. When set to "Yes", the Camera ignores collisions, but its position may move inside models, leading to poor results. This setting should be customized by creators (Craftspeople) based on the actual gameplay scene

Other attributes: Already explained earlier and not repeated here

### (4) First-Person Camera

The Camera is positioned at the Character's eye level, simulating a first-person perspective view of the scene, as shown below:

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/8cc47e77-cb21-4a16-a65f-dd4b111a9ead.png)

The detailed settings are shown in the graph below:

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/aefb1ad7-58eb-4489-ad56-973aa021a950.png)

### (5) Third Person Camera

Similar to the Classic Mode, but with editable detailed settings available to the user:

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/e3359042-6e10-4f4c-9d8d-da611988d318.png)

The detailed settings are shown in the graph below:

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/5f00a098-2019-42d9-8e7a-1586b7ce9297.png)

# IV. Camera Templates Switching

You can use Node Graphs to dynamically switch Camera Templates at runtime. The Target Units are a _list of Player Entities_.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/a11d2e3d-a3fb-4a40-ad66-c018044d4fd8.png)

# V. Object Camera

## 1. Basic Camera Settings

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/94ee9051-6fed-47a1-bbab-ab97e77fda05.png)

_Mode_: Support has been added for Object Cameras to follow object/creation entities. Currently, only the Third-Person Camera is supported

_Movement Mode_: A crucial parameter that distinguishes camera template types. The mode determines the main camera rules, and the adjustable parameters for each camera will vary depending on the mode. Currently, only Follow Object/Creation is supported

## 2. Advanced Camera Settings

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/f84748af-9915-405d-a0b9-0ffac640e545.png)

_Automatic Camera Correction_: When disabled, the following parameters cannot be modified. When enabled, these parameters can be modified again

The ranges for Horizontal Correction Speed and Pitch Correction Speed are [0, 360], and the ranges for Horizontal Correction Reference and Pitch Correction Reference are [0, 180]

## 3. How to Use Object Cameras

Add the [Object Camera] general component to a dynamic object or creation, then choose a preconfigured object camera template in the Select Camera field

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/8c3572d6-6979-4347-9c97-6895797a64bd.png)

During stage runtime, use Node Graphs to switch to the corresponding camera

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/3ca61219-c0ed-4d89-bac7-f6e7e1854367.png)

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhapyl0uxns0/557cb3a6-4dff-4159-9c01-e8f54b292e0b.png)

[UI Control Groups Management](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhewyi0fjfvs)[Peripheral System](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjsw9rluwou)

1
