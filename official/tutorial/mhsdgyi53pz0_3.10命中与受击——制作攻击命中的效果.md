---
id: mhsdgyi53pz0
title: 3.10 Hit and Impact: Creating Attack Hit Effects
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhsdgyi53pz0
language: en
scope: tutorial
crawledAt: 2026-05-31T15:50:31.414Z
---

# 3.10 Hit and Impact: Creating Attack Hit Effects

# Introduction

## Course Description:

**Course Content:** On-hit detection components and hurtbox configuration with application examples.

**Learning Objectives:** Learn how to configure on-hit detection components and hurtboxes to create attack hit effects.

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the [_ _Comprehensive Guide_ _]._

**Prerequisite Courses:**This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [3.8 Projectile Motion Device: Creating a Shootable Bullet](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhn4nsiz7k18)
> 
> 
> [3.9 Ability Unit: Combat Components with Preset Attributes](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh8wpr0h7ywg)

**Prerequisite Courses:**The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[Comprehensive Guide]_**_)_

> [On-Hit Detection Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwfg9r8oa66)
> 
> 
> [Hit Trigger Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhayek9me8bm)

* * *

# On-Hit Detection: Defining Entity On-Hit Areas

## Feature Example 1: Using On-Hit Detection to Create Damage-Dealing Bullets

### 1. Concept Overview

**On-Hit Detection Component:**Defines an entity's on-hit area, used to determine whether the defined area hits the scene or other entities, mostly commonly used for creating bullet on-hit detection.

### 2. Course Content

**Feature:**Create bullets that can hit creations (monsters)

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/a5ecdb32a0644c0d82924c1e168b8be3_1757675187.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Add components**

Create a prefab as the bullet (this tutorial uses an empty object as an example). In the panel, click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/e2597aa166e940f9b4df64621101b925_1757675190.png) to enter the component page, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/cc3b3848cd104720b3fe3335e1ce1907_1757675191.png) and select [On-Hit Detection] to add it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/16b9d78259324e3eb6dd2692e578f491_1757675191.png)

**2. [In-Game Editor] Configure panel data**

In the newly created on-hit detection component, click "Details" to configure the on-hit detection rules and areas in detail.

First, we will configure the on-hit area. Click on the "On-Hit Area" tab, then click "Add Trigger Zone" to configure the effective area.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/cca2a0be641149a19a232b51ded2cf0c_1757675191.png)

Next, configure the on-hit rules by clicking the "On-Hit Rules" tab. To achieve the expected functionality, the configuration in this tutorial is as follows.

Features to Implement Corresponding Configuration Items
On-Hit detection does not affect scene and water surface Enable [Ignore Scene and Water Surface]
Trigger on-hit detection 1 time for each entity entering the area Set [Trigger Type] to "No Repeated Trigger"
Delayed on-hit detection activation upon creation Adjust [Detection Delay] to "0.50"

After this configuration, when bullets hit non-scene entities and water surfaces, they will trigger on-hit detection events. However, they won't deal damage to the hit entities yet, as we haven't set up the "Execute Ability Unit When Hit" function. Therefore, we still need to configure the bullet's ability unit.

In the bullet panel, click ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/9ed5741a97564d8e9baaa86a4b35f645_1757675191.png)>>> Enter the Combat Attributes page, find [Ability Unit] >>> Select [Advanced Editing] >>> Click ![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/4a6ea0942b1d4953af35a710f663baca_1757675191.png) to add a new ability unit.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/2d5f15638d79437baccbf5da4ec3bcdc_1757675192.png)

Next, configure the ability units. To achieve the expected functionality, the configuration in the tutorial is as follows.

Features to Implement Corresponding Configuration Items
Name the Ability Unit Click the ![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/0d5d8f1e1f02440c8968c80df688798a_1757675192.png) button in the Details page and change the ability unit name to "Bullet Damage"
Deal Area Damage to the Hit Entity[Ability Unit Type] Set to Hitbox Attack

[Target Filter] "Filter Target Faction" select "All Except Self"

[Attack Parameters] Damage Coefficient is "1.00"; Damage Increment is "100.00"
Play explosion effects on hit entities[On-Hit Performance] Select "Explosion_Paving" for both scene effects and target effects on hit

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/0fa4f9bc3be74fe4be41eec336002896_1757675184.png)![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/8be040265b45412c8f1b545f5ef54c92_1757675184.png)

Now, the hit unit configuration is complete. Return to the "On-Hit Detection" component details page and click "Add Ability Unit" in the "On-Hit Trigger Settings" section to add the ability unit we just configured.

_**On-hit trigger settings can work independently from the node graph, directly calling ability units during on-hit detection; however, if there are special needs for map creation, you can also continue to monitor and repeat/additionally call ability units in the node graph — This tutorial won't cover the detailed applications._

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/c19cd67d1a794a01821c8012094615aa_1757675185.png)

Now the bullet's combat ability is ready, and when it hits non-scene entities or water bodies, it will trigger an on-hit event and deal damage.

**3. [In-Game Editor] Complete bullet effects**

We also need to add [Effects] and [Projectile Motion Device] components to the bullet to make its appearance and movement more characteristic of a bullet. For information about the [Projectile Motion Device] component, please refer to our previous tutorial [Projectile Motion Device: Creating a Shootable Bullet]. Here we'll simply list the relevant configuration items.

Features to Implement Corresponding Configuration Items
Make bullet visible In [Effects] component, add "Pyro Hilichurl Shooter_Bomb_Trail" effect
Make bullet move in a straight line Set [Projectile Motion Device] to "Linear Projectile"

Set initial velocity to "x=0.00, y=0.00, z=15.00," speed to "15.00," acceleration rate "10.00", ground hugging movement off.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/8943d958d486424eba3ee41c642591ce_1757675185.png)![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/98b4cce86c8548c0a55b0cc4de5c8546_1757675185.png)

**4. [In-Game Editor & Miliastra Sandbox] Create a turret that can fire bullets**

The bullets need to be fired, so we need to create a turret that can shoot bullets. For the turret creation method, please refer to the previous tutorial [Projectile Motion - Creating a Shootable Bullet]. Here we'll simply list the corresponding configuration items.

Features to Implement Corresponding Configuration Items
Turret Model In the prefab library, select "Cannon" as the turret prefab.
Turret can be interacted with Add a [Tab] component and add an option renamed to "Fire!"

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/6eee9081622f444d86c9f621eb471bd0_1757675185.png)

Enter Miliastra Sandbox to create a node graph. When the tab is clicked, create and fire bullets from the barrel. The node graph is mounted on the turret.

Features to Implement Corresponding Configuration Items
Feature

After selecting the option tab, the turret fires bullets Trigger Scenario Tab is selected[Event Node]: When tab is selected
Condition//
Result Fire bullets from the turret's position and orientation[Query Nodes]: Get entity position and rotation, get turret position and orientation;

[Operation Nodes]: 3D vector addition, additional calculation is needed due to the offset between model rotation and expected firing position.

[Execution Nodes]: Create projectile, fill in the bullet prefab ID we just created to spawn the projectile.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/7e641a5b95b14579a4762cc4d035a4c1_1757675186.png)

**5. [In-Game Editor] Drag objects into the scene and add creations (monsters) to test the gameplay**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/6b3a11d252b84b6aa8a366873a58d6ce_1757675186.gif)

# Hurtbox: Makes Entities Attackable

## Feature Example 2: Creating Attackable Targets Using Hurtboxes

### 1. Concept Overview

**Hurtbox Component:**Defines the hurt area of an entity, allowing it to be attacked; non-creation (monster)/character units do not have hurtboxes by default, so they need to be added separately to make them attackable.

### 2. Course Content

**Feature:**Create an attackable target

**Effect Demonstration:**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/af56c7a1890f4c1da35a080602670613_1757675186.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Configure hurtbox panel parameters**

Create a prefab to be the target (the tutorial uses a Wicked Warlock Target as example). In the panel, click ![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/7f9971f0aa83481ab77c1b524dd616bf_1757675187.png) to enter Combat Preset page >>> Find [Hurtbox Settings] and select "Advanced Editing" >>> Click ![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/b951a79899c24ad4a998d2f63d158a4a_1757675189.png), and then click "Add Hurtbox" to configure the hurtbox area.

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/ac84e480776144a7bd49bae4e43ddd3f_1757675189.gif)

**2. [In-Game Editor] Configure hit effects**

After configuring the hurtbox, the entity can now be attacked. To enhance the hurt effect, we can add hit effects to the target.

In the panel, click ![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/700d20c4b75c4a6ea106aecc07869895_1757675189.png)>>> Enter the Combat Preset page >>> Find [Combat Settings] and select "Advanced Editing" >>> Select the asset from "Hit Effect" to complete.

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/9597567b2cd845afb8bfa7cf5b4c9f91_1757675189.png)![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/8e5d156d621e4192b609884e4b3d8286_1757675189.png)

**3. [In-Game Editor] Drag objects into the scene and test gameplay**

Drag the completed target into the scene to test the gameplay.

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/72ceb288cd04406c9c79a5ef2b03c524_1757675190.gif)

_**For more information, please refer to [Comprehensive Guide > Ability Unit]_

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following features based on the course content.

> Feature Replication: Create objects that can deal damage and be attacked

**Course Review:** Learn how to create more diverse combat units through on-hit detection components and hurtbox components.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files > Hit and Impact]**.

![Image 27](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Hit and Impact.gil

23.4 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhvf3virq144/8a21093391de48cbb2545f1ff49424f6_1757675190.gil)

[3.9 Ability Unit: Combat Components with Preset Attributes](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh8wpr0h7ywg)[3.11 Nameplates and Speech Bubbles: Richer Information Display Styles in Scenes](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0mrr0c4xps)
