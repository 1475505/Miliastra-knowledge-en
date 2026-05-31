---
id: mhw6purbjsrq
title: 3.17 Mini-Map Markers: Dedicated Markers for Displaying Entity Locations on the Map
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhw6purbjsrq
language: en
scope: tutorial
crawledAt: 2026-05-31T15:51:26.916Z
---

# 3.17 Mini-Map Markers: Dedicated Markers for Displaying Entity Locations on the Map

# Introduction

## Course Description:

**Course Content:**This course primarily covers practical examples of how to create and use mini-map markers.

**Learning Objectives:**Learn how to configure mini-map marker components and create guidance markers that can display locations on the mini-map.

_**This course covers two interconnected modules: In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(if you're using this for the first time, it is recommended that you first learn_**_[Prerequisite Courses]_**_for a smoother learning experience.)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)

**Required Knowledge:**The course involves the following basic concepts: _(It is recommended that you follow the course materials. If the course details are unclear or you wish to understand further, please refer to the relevant chapters in_**_[_ _Comprehensive Guide_ _]_**_.)_

> [Mini-Map Marker](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0pppib5eyc)

* * *

# Mini-Map Markers: Create Indicators Displayed on the Mini-Map

## Feature Example 1: Display quest objectives on the mini-map

### 1. Concept Overview

**Mini-Map Markers:** Display entity locations on the default mini-map widget using icons, areas, or other indicators.

### 2. Course Content

**Feature:**Create a mechanism and display its icon and location on the mini-map.

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/00434e88d8d94565955ad5e552f841c5_1758097043.gif)

### 3. Steps to Follow

**1. Add a mini-map marker component in In-Game Editor**

Create a prefab to act as the target mechanism (this tutorial uses an Enhanced Mechanism as an example), then, in the panel click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/1425bacdd9354d19acbf20ff881c9799_1758097043.png)>>> Inside the component page, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/67d6422f9a8d46889d28fcfc536f2f8d_1758097043.png)>>> Select "Mini-Map Marker" to add.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/fe802225205945848ffff6b36d74909e_1758097044.png)

**2. Add a marker in In-Game Editor**

After opening [Component > Mini-Map Marker], there are no markers by default. Click ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/f1a3f838cc94438f8307d69d88be7387_1758097044.png) to add a new marker (multiple markers can be added simultaneously to switch between different marker effects).

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/a250cdc79efd4cafbd598a27fb5009a6_1758097044.png)

**3. Configure panel parameters in In-Game Editor**

To achieve the desired functionality, in this tutorial we're configuring it as follows (once the configuration is complete, click to save the prefab settings):

Features to Implement Corresponding Configuration Items
The mechanism is displayed on the mini-map and is visible to all players.Display Settings: Initially visible to all players
The mechanism is displayed on the mini-map as an icon.Select Icon: Select your desired icon
Display the height difference between the icon and the player on the mini-map.Show height difference: Enabled
Set the marker name to "Mechanism" and the description to "A common mechanism."Marker Name: Customize as "Mechanism."

Marker Description: Customize as "A common mechanism."

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/f42d22ad8ef741a596c2295a443ed918_1758097044.png)

**4. Place the prefab and test gameplay in In-Game Editor**

Place the configured prefab in the scene and enter Test Mode to use this feature.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/95acad0959754f599014e24eb8b0d27e_1758097045.gif)

## Feature Example 2: Track the location of a target object on the mini-map through interaction

### 1. Course Content

**Feature:**Walking up to the mechanism enables tracking of the creation's icon and location on the mini-map.

**Effect Demonstration:** Icon details are shown on the mini-map in the top-left. Entering a specific range reveals the creation (monster). Pay attention to how the mini-map changes.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/06e56f5b8b8c4b51a0145896b40c4114_1758097045.gif)

### 2. Steps to Follow

**1. Add a mini-map marker component in In-Game Editor**

Create a prefab to act as the target creation (this tutorial uses a Ruin Grader as an example), then, in the panel click ![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/b5f7b91c0ac4422a8a92f5715897764a_1758097041.png)>>> Inside the creation component page, click ![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/bf48a05c0806423b9d84feacdc6c8c9c_1758097041.png)>>> Select "Mini-Map Marker" to add >>> Click ![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/989ca142c53747359ae3c9ce59ae4c12_1758097041.png) to add a new marker (same flow as Example 1).

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/2922dfebc8e34b8db0dc468d3073d48e_1758097041.png)

**2. Configure panel parameters in In-Game Editor**

To achieve the desired functionality, in this tutorial we're configuring it as follows:

Features to Implement Corresponding Configuration Items
The creation is displayed on the mini-map and is visible to all players.Display Settings: Initially visible to all players
The creation is displayed on the mini-map as an icon.Select Type: Select "Creation Icon"
Display the height difference between the icon and the player on the mini-map.Show height difference: Enabled

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/553af26a45614ac6851a8e6c3ad19c64_1758097042.png)

**3. Add a collision trigger component to the mechanism in In-Game Editor**

The tracking feature relies on events. In this tutorial, we use a collision trigger added to the mechanism object as the trigger. For detailed configuration steps, refer to the earlier tutorial "Collision and Interaction: Triggering an Event." It will be omitted here for brevity. The specific configuration for this tutorial is as follows:

Features to Implement Corresponding Configuration Items
Triggers the event when the character enters the area.Initially Effective: Enabled

Effective on: Characters, Objects, Creations
Enlarge the trigger area.Zoom Ratio: "x=3.00," "y=3.00," "z=3.00"

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/5b7c6c23354745e6904ab3a1b212cabd_1758097042.png)

**4. Configure node graph in Miliastra Sandbox**

Features to Implement Corresponding Configuration Items
Feature

Opens the chest upon interaction.Trigger Scenario Triggers when the character enters the collision area.Event Node: When Entering Collision Trigger
Condition//
Result 1 Highlight the creation icon on the mini-map.Execution Node: Use "Modify List of Players Tracking Mini-Map Markers" to create a tracking effect.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/582eaa472e014d06a2b200ad9aac4559_1758097042.png)

**5. Mount node graph in In-Game Editor**

Mount the configured node graph on the mechanism prefab and save the prefab settings.

**6. Place the prefab and test gameplay in In-Game Editor**

Place the configured creation and prefab in the scene and enter Test Mode to use this feature.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/dbcd95c8b3c2433daed2ad796050ad21_1758097042.gif)

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Based on the course content, try to replicate the following features.

> **Feature Replication:**Create a teleport point that displays an icon on the mini-map.
> 
> 
> **Advanced Application:**Create a marker visible to selected players, with the ability to toggle it dynamically in the node graph.

**Course Review:**Learn how to display entity locations on the mini-map through basic mini-map marker component settings.

### Supplementary Course Materials

We have provided relevant project files that can be studied with [Tutorial Files - Mini-Map Marker].

![Image 19](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Mini-Map Marker.gil

29.2 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh2j8o0wxr2w/f44c41c7fb8b4d4faad290d6ed6f8030_1758097043.gil)

[3.16 Currency and Shops: Creating a Shop for Buying and Selling Items](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh53tyir62xo)[3.18 Outline and Transparency Effect: Richer Guidance Effects for Entities](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhhe9ji9ysn8)
