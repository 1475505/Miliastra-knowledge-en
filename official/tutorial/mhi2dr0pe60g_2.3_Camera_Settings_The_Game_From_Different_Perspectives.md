---
id: mhi2dr0pe60g
title: 2.3 Camera Settings: The Game From Different Perspectives
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhi2dr0pe60g
language: en
scope: tutorial
crawledAt: 2026-05-31T15:49:36.269Z
---

# 2.3 Camera Settings: The Game From Different Perspectives

# Introduction

## Course Description:

**Course Content:** Configuration methods for game camera

**Learning Objectives:** Learn how to adjust camera settings through panel configuration or node graph to switch to other perspectives (e.g., 2.5D top-down, first-person, third-person)

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read fully in sequence for better understanding._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have_ _any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves the feature knowledge taught by the following prerequisite courses: _(First-time users are recommended to study_**_[Prerequisite Courses]_**_first for a smoother learning experience.)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)
> 
> 
> [2.2 Character Settings: Enhance Character Attributes to Enable Running and Jumping](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr0zrrfahm6)

**Required Knowledge:** The course involves the following basic concepts: _(It is recommended to follow the course materials, but if you have any questions or want to learn more, you can refer to the related chapters in the_**_[Comprehensive Guide]_**_.)_

> [Main Camera](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhfua005zpeg)

# Main Camera: Changing Game Perspectives

## Feature Example 1: Creating Game Cameras in Different Perspectives

### 1. Concept Overview

**Main Camera Editor:** A tool used in-game to present the player's perspective; you can define camera rules by defining camera templates (e.g., switching between first-person/third-person/top-down views by changing camera modes)

### 2. Course Content

**Function:**Create different camera angles for gaming in different perspectives (the tutorial demonstrates using a top-down view)

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/17e5a4daee9744db941899c4955d435c_1757675670.gif)

### 3. Steps to Follow

**Using [In-Game Editor] to Modify Camera Parameters**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/c76fe398-b7e8-4179-8ec7-62665d0e3c24.gif)

Click on the top-left corner of the in-game editor (or press the ESC key) to bring up the left panel and the ESC menu bar, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/6a781d676c4c4949b8aecb1f5d0c813e_1757675671.png) to enter the main camera editing interface, where you can modify camera attributes (you can quickly adjust using official preset camera modes)

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Creating Top-down View Set [Basic Settings - Mode] to 2.5D camera
Apply to Class X Set [Default Target] to the class that needs to be modified

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/2448b8a34e3942e794aaf7474e4a8198_1757675671.png)

In addition, you can configure the camera in [Class] (the results of configuring it in both places are the same, so you can choose either one).

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/780e4ac0d68447f7b8fdacdfe44c0991_1757675671.png)

_**For more information, please refer to [Comprehensive Guide > Camera]._

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.

## Feature Example 2: Switching Camera After Interaction

**Feature Description:** Create a camera switching mechanism that allows players to switch between first-person and top-down views by interacting with it

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/06c6d218cf824c68abb1cf205d3b4a6e_1757675672.gif)

**Implementation Steps:**

1. Configure 2 main cameras, with modes set to [First-Person Camera] and [2.5D Camera] respectively (camera names can be customized for use in subsequent node graph configuration)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/46b7615f91bb4b8caa08cd613e128cbc_1757675673.gif)

2. Create a prefab as an interactive object

3. Add [Component > Tab] and configure options and the trigger area

4. Configure node graph (see recommended settings in the image below)

**The [Camera Template Name] shown in the image is the customized camera name from Step 1

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/9272cbaac6e848688dc2cbb4b51a3a03_1757675674.png)

5. Mount the node graph on the prefab and save the settings

6. Place the prefab in the scene

7. Enter Test Play to experience this feature

* * *

# Course Summary and Supplementary Materials

**Course Assignment:** Based on the course content, try to replicate/innovate the following features

> Feature Replication: Create the scope zoom in first-person shooters through camera control switching

**Course Review:** Learn to create different game perspectives (such as over-the-shoulder, 2.5D top-down, first-person, etc.) by modifying camera settings

### Supplementary Materials

We have provided the project files related to the above lessons, which can be studied in conjunction with **[Tutorial File > Camera Settings]**.

![Image 10](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Camera Settings.gil

27.6 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh3ri89zzide/bac1145d-172f-46fd-802d-89f96a9c4a94.gil)

[2.2 Character Settings: Enhance Character Attributes to Enable Running and Jumping](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhr0zrrfahm6)[2.4 Basic Motion: Making Objects Move](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh93rq9zhueq)
