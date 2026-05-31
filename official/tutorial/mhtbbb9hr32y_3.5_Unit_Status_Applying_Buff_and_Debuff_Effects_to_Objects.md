---
id: mhtbbb9hr32y
title: 3.5 Unit Status: Applying Buff and Debuff Effects to Objects
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhtbbb9hr32y
language: en
scope: tutorial
crawledAt: 2026-05-31T15:52:28.575Z
---

# 3.5 Unit Status: Applying Buff and Debuff Effects to Objects

# Introduction

## Course Description:

**Course Content:**Creation and application of unit status effects

**Learning Objectives:**Learn to create different unit status effects and how to add/remove them through various events (e.g., gaining buffs from casting skills, gaining effects when entering areas, etc.)

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)
> 
> 
> [2.8 Skill Settings: Make Your Characters Attack](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0apmie08e4)

Prerequisite Courses: The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)_

> [Unit Status](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhmfaz91z3i2)
> 
> 
> [Unit Status Effect Pool](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh3n2n9xv8nu)

* * *

# Unit Status: Buff and Debuff Effects

## Feature Example 1: Gaining Buff Effects from Casting Skills

### 1. Concept Overview

**Unit Status:** a preset buff effect that can enhance or hinder attributes or feature

_**For details on the currently available unit status effects, see [_ Comprehensive Guide _> Unit Status Effect Pool]_

### 2. Course Content

**Feature:**Create a unit status that increases maximum HP and stack up to 5 times, with infinite duration

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/c0ef6d20ea854ac8a00e82c7ff886403_1757675226.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Add status**

Create a status to be the buff effect that increases HP. Click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/9a754753a11d4b84a239aa8e2ed4893a_1757675227.png)on the panel >>> Enter battle preset and click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/60dcd3236f1f4573809eca80c2676adc_1757675227.png)>>> Select ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/68913e84a461451780434a514bbe6e77_1757675227.png) to add it.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/27dc15643c3f445ea7a003182a863e3b_1757675227.png)

**2. [In-Game Editor] Configure panel parameters**

After adding a status, you can adjust its name, maximum stack count, duration, status rules, and other parameters. To achieve the desired functionality, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
General Information Status can stack up to 5 times Change [Maximum Stack Layers] to "5"
Status has infinite duration Enable [Infinite Duration] option
Effect Details Each stack increases maximum HP by "1000"Select the effect [Max HP Correction Value] and set it to "1000"

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/f457b85add5540d48b0df04e8e3c68ca_1757675228.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/560da73306e942aba356bf96bc400cab_1757675228.png)

_**Note on Important Configuration Items:_

_Yield Status List: If the target has already gained any of the listed unit statuses, the current application action will be terminated and fail immediately_

_Replacement Status List: If the target has already gained any of the listed unit statuses, [All] statuses on the list will be removed before this status is applied_

**3. [Miliastra Sandbox] Node Graph Configuration, Creating Skill Effects**

In the [Client > Skill Node Graph], add and configure the node graph (settings reference below). To achieve the expected functionality, the tutorial configuration is as follows:

**This node graph is mounted on [Skill]

Features to Implement Corresponding Configurations
Feature

When the player casts a skill, add 1 stack of status to self Trigger Scenario When casting skill/
Condition//
Result Add 1 stack of Max HP increase status to self[Execute Node]: Use [Apply Unit Status] to add 1 stack of corresponding status to self

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/8d5f1272ee2a45e8aa13f37f62b3f6da_1757675228.png)

**4. [In-Game Editor] Adding skill, configuring node graph**

Create a skill, mount the skill node graph to the skill, and configure the skill for the corresponding class

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/f2ab969031f04f74816dd98da36654c8_1757675228.gif)

**5. [In-Game Editor] Playtest feature**

Enter Test Mode to try this feature

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/709deca5ed3b4cc0b3c411c750d0382e_1757675226.gif)

_**For more information, please refer to [_ _Comprehensive Guide_ _> Unit Status]_

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following feature based on the course content.

> Feature Replication: Create a safe zone invincibility effect where entering the zone grants invincibility and exiting removes the effect.
> 
> 
> Advanced Application: Create an area aura effect where, after obtaining a special item, players can cast a skill that grants buff effects to friendly units within a certain range around the character. The buff expires when units exits the range.

**Course Review:**Learn how to create unit statuses and trigger their addition or removal based on actual need, such as: infinite stamina for parkour gameplay, super jump for puzzle-solving gameplay, and damage and elemental reaction multiplier bonuses for various RPG gameplay mechanics.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files > Unit Status]**.

![Image 12](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Unit Status.gil

16.4 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhd6s0033yqg/1cd5f9700c9d4edbb85cba0992629636_1757675226.gil)

[3.4 Custom Attachment Point: Preset Points That Can Follow Movement and Rotate](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh85mxrh6kfy)[3.6 Signal Communication: Trigger Different Behaviors Across Multiple Objects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhc5uurnzzt2)
