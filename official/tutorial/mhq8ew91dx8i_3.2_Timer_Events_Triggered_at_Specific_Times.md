---
id: mhq8ew91dx8i
title: 3.2 Timer: Events Triggered at Specific Times
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhq8ew91dx8i
language: en
scope: tutorial
crawledAt: 2026-05-31T15:52:07.212Z
---

# 3.2 Timer: Events Triggered at Specific Times

# Introduction

## Course Description:

Course Content: How to use timers

Learning Objective: Understand how to use timers to trigger events, which can be used to create delayed trigger mechanisms (triggering effects at intervals) and plant growth effects (growing at specific time intervals).

**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course materials in sequence for better understanding.

## Relevant Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide】

_**If course details are_ _unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: (First-time users are recommended to study [Prerequisite Courses] for a smoother learning experience.)

> [1. Custom Variables: Switch Object Presentation Under Specific Conditions](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhflri07dzd4)

**Required Knowledge:**The course involves the following basic concepts: _(Recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[Comprehensive Guide]_**_)._

> [Timer Components](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwxmk9rczky)

* * *

# Timer: Trigger Events at Specific Times Through Custom Timing

## Feature Example 1: Plant Upgrades at Regular Intervals

### 1. Concept Overview

**Timer:** Events triggered at specified times based on a configured time list

_**Timer does not need to be configured through the in-game editor. It is entirely controlled through the node graph._

### 2. Course Content

**Function:**Create plants that grow once every 2s after placement

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh42m298sxjm/0d502456f803405a8aca2ec16f6cf00e_1757675204.gif)

#### 3. Steps to Follow

**1. [In-Game Editor] Creation of Planting Grid for Plant Trigger Events**

Create a prefab as an interactive object (This tutorial uses an empty object as an example). Add [Component - Tab] to configure the tab and option trigger areas.

_**The empty object and [Component - Tab] in this tutorial are used only for demonstration purposes. When creating your own, you can adjust to other trigger events accordingly._

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh42m298sxjm/b722ec618e0d43d0a04f7d2d97021df2_1757675205.png)

Since the tutorial will use "Delete old plants and generate new plants" to create plant growth effects, we need to add [Component - Custom Variable] of type [Entity] to store the old plants in the planting grid.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh42m298sxjm/bfd904c826a9416d9f87204b66974992_1757675205.png)

**2. [In-Game Editor] Selection of Visual Effects for Plant Growth**

The tutorial demonstration shows how to generate different prefabs at empty object positions to represent plant growth effects. During actual production, you can choose and configure the required prefabs according to your needs.

_**Remember the prefab ID for subsequent node graph configurations._

Configuration reference in tutorial:

Plant - Seed Stage ~ Growth Stage: Only prefab models are different.

Plants - Mature Stage: Different model prefabs, with added looping effects to indicate that fruit is ripe.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh42m298sxjm/c48ba2b9d4434c68ad5a5467b3b519da_1757675205.png)

**3. [Miliastra Sandbox] Node Graph Configuration**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Feature 1

After performing planting operation, plant is placed and starts to grow.Trigger Scene After performing planting operation Event Node: When the Tab Is Selected
Condition//
Result 1 Plant crop[Execution Node]: Use [Create Prefab] to plant a seed stage plant on the planting grid.
Result 2 Determine which plant was planted (used for growth animation).[Execution Node]: Use [Set Custom Variable] to save the generated seed stage plant as a variable.
Result 3 Plant begins to grow[Execution Node]: Use [Start Timer] and mount it on the planting grid. Configure timer sequence as: 2, 4, 6.

_**Timer sequence indicates when the timer will trigger a time event. Since plant growth is one-time and non-cyclic, the configuration is set to grow once at 2/4/6s._
Feature 2

Plant grows once every 2s.Trigger Scene At regular intervals[Event Node]: When timer is triggered
Result 1 Destroy the currently planted plant (In the tutorial, the plant growth effect is created by destroying the old plant and generating a new one)[Execution Node]: Use [Destroy Entity] to destroy the currently saved planted plant variable.
Condition Different plant growth states at 2s, 4s, and 6s.[Flow Control Node]: Use [Multiple Branches] to determine timer stages and trigger different growth levels at specific times.
Result 2 Plant changes from growing[Execution Node]: Use [Create Prefab] to create plant growth effects.
Result 3 Confirm which plant was planted (for creating growth animation)[Execution Node]: Use [Set Custom Variable] to save the generated plant as a variable.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh42m298sxjm/e6227d1e697745488e6054e4bbe1e612_1757675205.png)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh42m298sxjm/6a47f83605fc46eda59404a4f0664c7c_1757675205.png)

_**The timer runs with the mounted target. If the mounted target is removed/destroyed, the timer will be terminated by default._

**4. Using [In-Game Editor] to Mount Node Graph**

Mount the configured node graph on this prefab and save the prefab settings.

**5. Using [In-Game Editor] to Place the Prefab and Test Gameplay**

Place the modified prefab in the scene and enter Test Mode to experience this feature.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh42m298sxjm/8a70d2f6951e453e84811890488aca14_1757675206.gif)

_**For more information, please refer to [Comprehensive Guide - Timer Components]._

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following features based on the course content.

> **Feature Replication:**Create interactive items that can be interacted with at regular intervals, with different effects for different states.

**Course Review:**Learn how to configure timers, which can be used to create various delayed mechanism items (looping or non-looping) or trigger specific events (triggering XX effect every X seconds).

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Timer].

![Image 9](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Timer.gil

26.9 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh42m298sxjm/3251e47a990544108d981f6b7c26f87b_1757675206.gil)

[3.1 Custom Variables: Switch Object Presentation Under Specific Conditions](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhflri07dzd4)[3.3 Follow Motion Device: Create Items that Attach and Follow](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhz70x0ra8u8)
