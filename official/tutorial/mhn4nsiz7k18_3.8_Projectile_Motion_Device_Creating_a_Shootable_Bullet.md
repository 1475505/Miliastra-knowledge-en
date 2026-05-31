---
id: mhn4nsiz7k18
title: 3.8 Projectile Motion Device: Creating a Shootable Bullet
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhn4nsiz7k18
language: en
scope: tutorial
crawledAt: 2026-05-31T15:52:56.990Z
---

# 3.8 Projectile Motion Device: Creating a Shootable Bullet

# Introduction

## Course Description:

**Course Content:** Creation and applications of projectiles.

**Learning Objectives:** Learn how to configure projectile motion devices to create projectiles, and understand the differences between server-side and client-side projectiles.

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)
> 
> 
> [2.5 VFX: Enriching Your Effects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh055pi9lit0)
> 
> 
> [2.8 Skill Settings: Make Your Characters Attack](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0apmie08e4)

Prerequisite Courses: The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)_

> [Projectile Motion Device Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhsuvyiun4f0)
> 
> 
> [Local Projectile](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh3pi2989vwy)

* * *

# Projectile Motion Device: Creating Projectiles with Complex Movements

## Feature Example 1: Using Projectile Motion Device to Create Parabolic Trajectory Bullets

### 1. Concept Overview

**Projectile Motion Device:** By configuring projectile types, prefabs can perform complex movements (such as accelerated motion, parabolic motion, and tracking motion).

### 2. Course Content

**Feature:**Create a bullet with parabolic trajectory

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/1f959dfd8d0a476e9627b6b2a12429bb_1757675249.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Add components**

Create a prefab as the bullet (this tutorial uses an empty object as an example). In the panel, click on ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/8322bc78e7e64368abec6b4a692cb78f_1757675252.png) to enter the component page, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/6e449940b7884ef8a7ed5609d282ffa5_1757675252.png)>>> select [Projectile Motion Device] to add it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/c633ac44a22c4c2191d56e000881a20a_1757675253.png)

**2. [In-Game Editor] Configure projectile panel parameters**

Open [Components > Projectile Motion Device] basic settings and select the projectile type. Here, we choose [Parabolic Projectile].

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/d8d006a0a90e442090f3f32e99c2bd10_1757675253.png)

After defining the projectile type, you can drag the rotation axis in the preview with your mouse or manually input parameters to configure the motion settings in detail. To achieve the expected functionality, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
The trajectory begins at approximately 60 degrees from the ground, with a relatively short distance Set [Initial Velocity] to "x=0" "y=8" "z=4"

_**X-axis controls the horizontal angle at launch, Y-axis controls the launch height, Z-axis controls the launch distance._
The bullet firing speed is relatively slow[Speed] No adjustment needed

_**The speed will automatically convert based on initial velocity adjustments. If only the speed is adjusted, the initial velocity will also convert automatically. Adjust according to your needs during configuration._
[Gravitational Acceleration] No adjustment needed

_**Gravitational acceleration affects the trajectory and distance of objects under the same initial velocity/speed. Adjust according to your needs during configuration._

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/37e01d3044824d759f6706fdaae9473f_1757675253.png)

After configuration is complete, you can click [Preview Current Motion] to preview the motion effect.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/059d5679ace945c38ab1aa9a2daddc14_1757675253.gif)

_**Configuration Notes_

_① The projectile motion device takes effect immediately when the object is created by default._

_② For other projectile types of the projectile motion device (Linear Projectile and Following Projectile), please refer to the relevant chapters in the manual. These will not be repeated here._

**3. [In-Game Editor] Enhance bullet visual effects**

Since we are using an empty object, we need to configure some looping effects to make the bullet visible. For detailed configuration regarding [Effects], please refer to previous courses on [Effects]. Here we will only show the configuration parameters. During actual creation, you can choose the required prefab or effect configurations based on your needs.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/2938b9ff4d254ed3b9c61943157c3831_1757675254.png)

**4. [Miliastra Sandbox] Create Bullet After Clicking the Tab**

Before creating the bullet, relevant settings need to be configured for the turret that will fire them. In the tutorial demonstration, the turret's firing function is activated through the [Tab] component. For specific configuration of the [Tab], please refer to previous lessons on [Collision and Interaction].

After configuring the tab, we want the turret to fire the bullet we just created when a specific option is triggered. Here we'll use the [Create Projectile] node to generate the bullet. The specific logic and node connections are shown below, with the node graph mounted on the turret object:

Features to Implement Corresponding Configuration Items
Feature

After player interaction, the turret fires bullets Trigger Scenario Tab is selected[Event Node]: When tab is selected
Condition The "Fire!" tab is selected[Flow Control Node]: Binary branch & [Operation Node]: Check if the selected option ID equals 1
Result Fire bullet from turret's position and orientation[Query Node]: Get entity position and rotation, get turret position and orientation;

[Operation Node]: 3D vector addition, additional calculation is needed due to the offset between model rotation and expected firing position.

[Execution Node]: Create projectile. Fill with the prefab ID we just created to generate the projectile.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/f493cf4f980e40a0bf829173ceff0951_1757675254.png)

**5. [In-Game Editor] Place the prefab and test gameplay**

Place the created turret prefabs into the scene and enter the test mode to test functionality. You can also create bullets with combat attributes by configuring the [Hit Detection] and [Ability Unit] of bullet prefabs.

# Local Projectiles: Projectiles Created Through Skills

## Feature Example 2: Creating a Skill that Launches Blade Waves Using Local Projectiles

### 1. Concept Overview

**Local Projectile:**Similar to the projectile motion device effect, it enables objects to perform complex projectile movements.

_**Note: Local projectiles calculate and render projectile movement effects and hit effects locally (client-side). In contrast, projectile motion device components are calculated by the server, so the behavior and implementation logic of the two will be different._

_For easier distinction, we can refer to "Local Projectiles" as [Client Bullets] and "Projectile Motion Device Objects" as [Server Bullets]. Server bullets can be dynamically created through server node graphs, while client bullets can only be created through skill configuration client node graphs._

### 2. Course Content

**Feature:**Create a skill that can emit blade waves

**Effect Demonstration:**![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/34d607da6c164594b6b46ddb5e4aece2_1757675247.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Create new projectile**

Create a prefab as a bullet (this tutorial uses an empty object as an example). In the ![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/e708263bc8da49389af731dcded0b045_1757675248.png) Combat panel, click ![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/9cd91f106a1b4b0db8830ef76074987d_1757675248.png) to enter Local Projectiles, then click ![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/e308b15abd144cdfb1fb12aeb2ede740_1757675248.png) to add it.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/bdbf36b56ec749c68475e1a7653fd187_1757675248.png)

**2. [In-Game Editor] Configure panel parameters**

On the right side, you can see the basic settings panel for local projectiles. First, we need to select the projectile base model. Since the blade wave used in this tutorial is a special effect, we'll select [Empty Model] here.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/d7907b92c0ec479e887d0075b6db3300_1757675248.png)

After setting up the base model, we need to define the projectile-related parameters. The specific functions and corresponding configuration items are shown in the table below:

Features to Implement Corresponding Configuration Items
Bullet combat parameters follow the creating character's[Combat Parameters] are not modified and are directly inherited from the creator
Bullets will not disappear on their own over time[Life Cycle Settings] > [Permanent] enabled
Bullets disappear beyond a certain range to optimize performance[XYZ Axis Destroy Distance] > "50.00"
No action when bullet disappears[Behavior Settings at End of Life Cycle] No adjustment.

**3. [In-Game Editor] Configure projectile panel parameters**

Next, click ![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/0a38d3d0c6ba406489c2d1d5eb2f4ebc_1757675248.png) to enter the component editing page. We can see that the local projectile comes with [Effects], [Projectile Motion Device], and [Hit Detection] by default. The configuration logic is consistent with feature example 1 above, so we will skip the detailed explanation here and only show the configurations here.

Features to Implement Corresponding Configuration Items
Bullet appearance uses blade wave effect[Effect] Select loop effect and the blade wave asset
The bullet trajectory is straight and accelerates[Projectile Motion Device] > [Projectile Type] is set to "Linear Projectile," with both acceleration rate and acceleration duration set to "5."
The bullet has hit detection and triggers a hit event for each object entering the detection area. The bullet does not check immediately upon creation to avoid including itself in the detection range.[Hit Detection]: Configure on-hit area consistent with the effect width;

[Trigger Type] set to non-repeatable;

[Detection Delay] set to "0.5"
When the bullet hits other objects, it calls the ability unit to initiate an attack[Ability Unit] Create a "Direct Attack" ability unit and configure damage values.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/f95a42615ac24c5abc742d3a811714db_1757675249.png)

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/718f8e4e15524d278920609903750184_1757675249.png)

_**It is not recommended to set the speed too high, as bullets moving too fast may pass through creations (monsters) without dealing damage._

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/cd521af110a94db6861b84ffe0b053fd_1757675249.png)

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/1ce1cae835f249d5a3e0e3ddd18c8235_1757675250.png)

**4. [In-Game Editor] Creating skill animation**

Next, create the corresponding animation for the blade wave skill. For detailed configuration regarding [Skills], please refer to previous [Skill Settings] courses. Here we will only show the configuration parameters. During actual creation, you can choose the animations or configure special effects based on your needs.

Features to Implement Corresponding Configuration Items
Bullet requires skill activation[Combat Preset] > [Skill Editor] > New Skill
Skills require attack actions[Animation Editor] > Select "Sword Normal Attack" for animation slot 1.
Character holds weapon during attack[Status Track] Add "VFX Playing" and set the effect to "Sword";

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/4a13bab336fe4daaa02e33725dec0274_1757675250.png)

**5. [Miliastra Sandbox] Edit Skill Node Graph**

The editing logic and functionality of the skill node graph is similar to Example 1. Use the [Fixed-Point Projectile Launch] node to create the local projectile we have prepared.

Features to Implement Corresponding Configuration Items
Feature

After pressing the skill, the character shoots a bullet forward Trigger Scenario Skill is pressed/

_**Has default node [Node Graph Begins]. No configuration needed_
Condition--
Result Fire bullets at specific attachment points and orientations in front of the character[Query Node]: Get attach point position and rotation. Get the position and orientation of character attach points

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/d6e092e096574a4d97c3566a154cc6be_1757675250.png)

It's important to note that in the tutorial demonstration, we used the [Custom Attach Point] component to create an attach point called "FirePoint" in front of the character. The position and rotation of bullet generations in the demonstration all use this custom attach point. This setup ensures that when bullets are fired, they always align with the direction the player's facing.

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/91fc11633dbc4881a613b88f78ff0c02_1757675250.png)

After editing the node graph, simply insert the logic into the node graph event track at the corresponding frame in the animation timeline and save.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/e552618a79874551855fb6f4a403f718_1757675251.png)

**6. [In-Game Editor] Equip skill and test gameplay**

Next, equip the newly created skill in the class interface, and try it out.

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/1d7460651478459e8fbaa856d29dbab9_1757675251.gif)

* * *

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions, and **demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.**

## Feature Example 3: Using Projectile Motion Device Component to Create Loot Drop Visuals After Opening a Chest

**Feature Description:**Item Trajectory Drop

**Effect Demonstration:**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/4952d7bda94d47a1875879e60768e033_1757675251.gif)

**Solution Analysis:** Essentially, this works by using projectile A's object hit event to obtain the coordinates where the projectile lands on the ground, then generating a new entity B at that ground position. Since both objects have the same appearance, this creates the visual effect of an item dropping after a parabolic trajectory.

**Implementation Steps:**

1. Create a prefab A, add a projectile component, and configure projectile motion — the purpose is to create a parabolic trajectory effect for objects.

2. Configure hit detection for the prefab, disable scene and water surface ignoring — this is to obtain the coordinates of where the projectile hits the scene.

3. Create a new prefab B and configure its pickup logic. While A and B share the same visual appearance, their logic differs — the purpose is to allow players to pick up this item. The specific item effects can be customized according to actual need and won't be demonstrated here.

4. Configure the chest logic to generate 5 prefab A when entering the collision box.

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/e75925ff10ed4bb189a3fcd3a78e9a84_1757675252.png)

5. In the node graph of prefab A, use [When Hit Detection Triggers] to get the hit position and determine whether the hit entity is a scene. The purpose is to generate an identical prefab B at prefab A's landing position.

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/f7bdd2f91de242788d2f4bdd6fa4190f_1757675252.png)

6. Place the created chest into the scene and test the gameplay.

_**For more information, please refer to [Comprehensive Guide > Projectile Motion Device Component] [Comprehensive Guide > Units > Local Projectiles]_

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following feature based on the course content.

> Feature Replication: A throwable bomb that deals area damage.
> 
> 
> Advanced Application: Create a skill that fires bullets in the direction the character's facing.

**Course Review:**Learn how to create various projectiles through basic settings and node graph creation, and create different bullet damage effects.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files > Projectile Motion Device]**.

![Image 30](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Projectile Motion Device.gil

30.6 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmaxxrxezxa/0e4e3e5d45394a91b94e7be53770f30e_1757675252.gil)

[3.7 Filter Node Graph: Filter Different Objects for Different Effects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhm1sdi4ckxg)[3.9 Ability Unit: Combat Components with Preset Attributes](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh8wpr0h7ywg)
