---
id: mh6riq9wvxqq
title: 3.19 Complex Creations: Trigger Custom Skills via Status Decision Node Graph
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh6riq9wvxqq
language: en
scope: tutorial
crawledAt: 2026-05-31T15:51:49.883Z
---

# 3.19 Complex Creations: Trigger Custom Skills via Status Decision Node Graph

# Introduction

## Course Description:

**Course Content:**This course walks through the full implementation workflow for complex creations, from skill and state logic design to autonomous behavior execution and dynamic pathfinding in evolving environments.

**Learning Objectives:**Learn how to build a complex creation by clearly understanding the relationships between Custom Creation Skills, Skill Settings, Creation Status Node Graph, and Creation Status Decision Node Graph, and ensure that custom skills are triggered and executed correctly. In addition, learn monster patrol and pathfinding systems, and use Pathfinding Blocker components to help creations avoid dynamic obstacles.

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox: Node Graphs]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If course details are unclear or you wish to understand further, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(First-time users are recommended to study_**_[Prerequisite Courses]_**_for a smoother learning experience.)_

> ​​[2.8 Skill Settings: Make Your Characters Attack](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh0apmie08e4)

**Required Knowledge:**The course involves the following basic concepts: _(Recommended to follow the course materials. If course details are unclear or you wish to understand further, please refer to the relevant chapters in the_**_[Comprehensive Guide]_**_.)_

> [Complex Creations](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhb8nl0w8cao)

* * *

# Complex Creations: Custom Monster Autonomous Logic and Skills for Smarter Behavior

## Feature Example 1: Creating a Complex Creation with Custom Skills

### 1. Concept Overview

**Complex Creation:**A specialized creation type that supports modular configuration of custom creation skills, pathfinding, targeting, patrol behavior, etc. These modules enable the creation to execute defined behaviors (such as charge attacks with continuous damage or casting fireballs).

**In both the editor and the Miliastra Sandbox, a complex creation is composed of four interlinked systems: Creation Skill Management (Custom Creation Skills), Autonomous Logic Parameter Settings, the Creation Status Decision Node Graph, and Patrol Settings. These systems are interdependent, so please follow the learning order strictly.**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/b8782425-7795-4d12-8677-430b1ba865be.png)

### 2. Course Content

**Feature:** Create the Frostarm Lawachurl's Normal Attack and have it repeatedly execute while the creation remains within player proximity.

**Effect Demonstration:**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/8305048d-4ea2-4b4e-9bc0-f828c1f4e5dd.gif)

_**If a creation (monster) cannot attack correctly or shows abnormal patrol behavior during test play, try rebuilding the navigation mesh via Stage Settings > Terrain Navigation > Render Navmesh._

### **3. Goal Breakdown**

## Function Logic

The following are the key functional steps required to create a complete custom creation. The course will cover these as a unified workflow:

① Create custom skills for the Frostarm Lawachurl

② Configure the Creation Status Node Graph

③ Configure the Creation Status Decision Node Graph

④ Bind the decision node graph and playtest to validate behavior

#### ① Create custom skills for the Frostarm Lawachurl

**Steps to Follow**

**1. [In-Game Editor] Create a Complex Creation >>> Frostarm Lawachurl**

Enter the Prefab Library >>> Select the ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/59ad1d92-18ed-42c8-85d6-e7f92740c5d5.png) icon on the left >>> Navigate to the Complex Creations tab >>> Select Hilichurls >>> Select Frostarm Lawachurl and create it.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/3bba6888-c7b6-4052-ab5e-547832a954c2.gif)

In the left information panel of the new creation, ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/a9d8a695-79d9-4e6f-bef6-6c0331a6bb96.png) you can preview four newly added modules. Each module will be explained in detail later.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/283e29eb-f1f6-4181-bcdd-756aff6c8175.png)

**2. [In-Game Editor] Add Custom Skills**

Go to the [Combat Presets] tab >>> Select ![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/8d66ddac-e8d3-463c-844a-5448f026d95e.png)>>> Enter skills page and select the Creation Custom Skill tab >>> Add a new skill ![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/1a29f9dc-6a40-4d8c-bad6-2f87a754444e.png)>>> Set the skill name and assign the creation skill primary model, then add the skill. (In this tutorial, the skill is named Normal Attack for demonstration purposes. Actual naming is fully customizable.)

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/2b6c79cc-5ca0-4006-a9ad-d9b84c360a6d.gif)

**3. [In-Game Editor] Configure [Skill Basic Settings]**

In this page, you can configure parameters such as Primary Model, Skill Interruption, and Cast Method.

**All parameters in this tutorial use default settings without modification. This is for demonstration only. You can adjust them according to skill effects in actual use.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/73e71cc6-4724-43f4-8271-d289b06c9120.png)

_**Configuration Item Description:_

> _Skill Types: Two types are currently supported, including Normal Skill and Instant Skill._
> 
> 
> _Instant Skill: Has no animation. All skill effects are executed immediately upon casting._
> 
> 
> _Normal Skill: Plays a one-time animation in sequence. Skill effects can be triggered at any specified frame within the animation (e.g., apply damage only at the weapon swing frame)._

**4. [Miliastra Sandbox] Configure Skill Effects in the Creation Skill Node Graph**

In the [Client Node Graph Resource Explorer > Creation Skill Node Graph], add and configure the skill's node graph (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

_**Note: The creation skill node graph does not require additional trigger scene configuration (the start always includes [Node Graph Starts]). Casting the skill represents it can be triggered, which will be explained further in the subsequent skill animation settings._

Features to Implement Corresponding Configuration Items
Feature

Deal AoE damage in a sector area with hit effects Trigger Scenario//
Condition//
Result Trigger attack[Execution Node]: Use [Trigger Hitbox at Specific Location] to create attack damage effect.

_**Hitbox Configuration Logic Description (Detailed information available in_ _[Comprehensive Guide - Ability Unit Effect]_ _):_

Damage Range Attack Position Obtain self location and rotation. Attack point is the character's current position after the player casts a skill.
Attack Range Select "Sector" in [Hitbox Type], and set the height, angle, radius, and other range parameters.
Damage Target and Form The attack target is everyone except self Select desired targets in [Target Faction Filter].
AoE Within Radius Select [Triggers Only Once per Entity] in [Trigger Type] per entity (damage will be dealt once to all units within radius).
DMG Attack deals certain damage.DMG = Damage Coefficient * ATK + Damage Increment (actual damage depends on DEF, not explained in detail here).

In this tutorial, only Damage Increment is set for demonstration purposes. This instance of damage is set as [Absolute Damage].

**Absolute Damage ignores DEF value and deals damage directly based on Damage Increment.
Other On-Hit Effects Special effect displayed when hit Configure an appropriate effect asset for [On-Hit Special Effects], and set suitable [Effects Zoom] and [Offset].
DMG Pop-Up[Block Damage Pop-Up] = No

Open the Client Node Graph Resource Explorer and create a new creation skill node graph:

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/a4ef5d26-ab81-41a0-b0b5-29fa4621ea82.gif)

Configure the required creation skill node graph content:

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/b0be2e2b-eece-42e0-98b3-e89e362ef392.png)

You can also use other skill nodes to create features (e.g., healing, turning, shooting bullets).

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/eae98524-abb1-4dbe-86fc-32a6b13eb83a.png)

**5. [In-Game Editor] Configure Creation Animation**

Click [Animation Editor] to enter the animation timeline editor. To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Frostarm Lawachurl Normal Attack Select appropriate animation assets. The tutorial uses "Frostarm Lawachurl_Melee Attack_01" as an example.
Damage is dealt during the sword swing (no damage when drawing the sword, damage is dealt only when swinging the sword)Find the specific frame of the required animation in [Node Graph Event Track] and add the skill node graph configured in step 4.
The creation has a swing animation Add a special effect on the [Status Track] and set the attachment point to [GI_WeaponR]

Available attachment points can be viewed under [Creation] > [Add Common Component] > [Custom Attachment Point]

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/43f190c6-c4f6-4aff-8933-caf0870b8197.png)

After completing the configuration, the skill animation and damage range effects can be viewed directly on the current interface.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/09f4d44c-398a-430c-a9cd-079e52e763d3.gif)

**6. [In-Game Editor] Configure [Skill Triggers] for Creation Skills**

Enter the Prefab Library >>> Select the newly created Frostarm Lawachurl >>> Select ![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/25ae779d-43e4-4b80-90dd-317602af61f3.png)>>> Open [Creation Skill Management] >>>![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/b897fb2b-0adb-45e4-a4c5-3a49004cd6e3.png) Add a new creation skill, then select and attach the created Normal Attack skill.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/ac6c2998-c7c3-4c73-a1e5-74c0820938fa.gif)

#### ② Configure the Creation Status Node Graph

**Steps to Follow:**

**1. [Miliastra Sandbox] Configure [Skill Triggers] in the Creation Status Node Graph**

Configure [Skill Triggers] in the creation status node graph (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature

Set Up Status for Creations Trigger Scenario//
Condition//
Result Enable the creation to move to the target as expected and execute its skill.[Execution Node]: Tactic: Move to the Target Entity > Execute Skill

Open the Client Node Graph Resource Explorer >Creation Status Node Graph and create a new creation status node graph:

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/fdc331e6-30c0-42ad-97d7-0df5909409f7.gif)

Configure the required creation status node graph content:

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/9a4040e8-9b5f-45bd-9ff3-23fdf4e9f397.png)

#### ③ Configure the Creation Status Decision Node Graph

**Steps to Follow**

**1. [In-Game Editor] Configure Autonomous Logic Parameters Settings**

Enter the Prefab Library >>> Select the newly created Frostarm Lawachurl >>> Select ![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/25ae779d-43e4-4b80-90dd-317602af61f3.png)>>> Open [Autonomous Logic Parameter Settings] >>>![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/b897fb2b-0adb-45e4-a4c5-3a49004cd6e3.png) Add and set the autonomous parameters to be "Initially Effective."

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/62f2cfbc-bfe7-4ad9-92c8-d073d7e9bf18.gif)

In this page, you can configure parameters such as Entering Battle Settings, Leaving Battle Settings, and Territory Settings.

**All parameters in this tutorial use default settings without modification. This is for demonstration only. You can adjust them according to skill effects in actual use.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/60ff9e3c-5a44-4a55-9cbd-ec9b999570d9.png)

**2. [Miliastra Sandbox] Configure [Autonomous Logic Binding] in the Creation Status Decision Node Graph**

Configure [Autonomous Logic Binding] in the Creation Status Decision Node Graph (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature

Set Up Status for Creations Trigger Scenario//
Condition//
Result Enable the creation to search for enemies using defined autonomous logic and trigger the appropriate status.[Execution Node]: Switch to self execution status and bind the corresponding autonomous logic parameters for that status.

Open the Client Node Graph Resource Explorer >Creation Status Decision Node Graph and create a new creation status decision node graph:

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/6744fec8-2c64-4771-958e-f29f7390fb8c.gif)

Configure the required creation status decision node graph content:

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/5d00f14d-50a7-4744-ad7a-15bc74f1c132.png)

#### ④ Bind the decision node graph and playtest to validate the effect

**Steps to Follow:**

**1. [In-Game Editor] Bind the Creation Status Decision Node Graph to the Corresponding Creation**

Enter the Prefab Library >>> Select the newly created Frostarm Lawachurl >>> Select ![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/25ae779d-43e4-4b80-90dd-317602af61f3.png)>>> Open the Creation Status Decision Node Graph >>>![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/f824cc4b-806b-422c-99f7-dd3418249703.png) Select the configured status decision  node graph, then save it.

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/a4cd112d-85c5-4d23-bb10-a5ff19732b27.gif)

**2. [In-Game Editor] Place the Creation in the Scene and Playtest the Result**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/617294b2-9411-4c68-8313-068097a549b1.gif)

## Feature Example 2: Adding a Patrol System to a Complex Creation

### 1. Course Content

**Feature:** Create a Hilichurl Fighter that performs patrol behavior.

**Effect Demonstration:**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/89c84b65-468f-435e-9aa2-b3a3bf2eaca9.gif)

_**If a creation (monster) cannot attack correctly or shows abnormal patrol behavior during playtesting, try rebuilding the navigation mesh via Stage Settings > Terrain Navigation > Render Navmesh._

### 2. Steps to Follow

**1. [In-Game Editor] Create a Complex Creation >>> Hilichurl Fighter**

Enter the Prefab Library >>> Select the ![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/59ad1d92-18ed-42c8-85d6-e7f92740c5d5.png) icon on the left >>> Navigate to the Complex Creations tab >>> Select Hilichurls >>> Select Hilichurl Fighter and create it.

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/4d97ae2f-c7ff-41fd-8b06-3e8e07ee1221.gif)

**2. [In-Game Editor] Configure Patrol Settings**

Enter the Prefab Library >>> Select the newly created Hilichurl Fighter>>> Select ![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/25ae779d-43e4-4b80-90dd-317602af61f3.png)>>> Open Patrol Settings >>>![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/b897fb2b-0adb-45e4-a4c5-3a49004cd6e3.png)Add a new patrol template and add a patrol path in waypoints settings.

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/a849f8a9-c496-4213-9c42-9eb4760568ed.gif)

In this page, you can configure parameters such as loop type and patrol start point.

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/60875184-e5cb-457d-9b1b-1dfda5f2b163.png)

**3. [Miliastra Sandbox] Configure [Patrol Triggers] in the Creation Status Node Graph**

Configure [Skill Triggers] in the creation status node graph (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature

Set Up Creation Status Configuration Trigger Scenario//
Condition//
Result Enable the creation to enter the patrol status.[Execution Node]: Tactic: Move to the Target Entity > Execute Skill

Open the Client Node Graph Resource Explorer >Creation Status Node Graph and create a new creation status node graph:

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/a8c182a3-896a-49f0-aca3-7e1a0225d52c.gif)

Configure the required creation status node graph content:

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/05678401-7228-4bd0-92b9-d7a9a0dfe0cb.png)

**3. [In-Game Editor] Configure Autonomous Logic Parameter Settings**

Enter the Prefab Library >>> Select the newly created Hilichurl Fighter >>> Select ![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/25ae779d-43e4-4b80-90dd-317602af61f3.png)>>> Open [Autonomous Logic Parameter Settings] >>>![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/b897fb2b-0adb-45e4-a4c5-3a49004cd6e3.png) Add and set the autonomous parameters to be "Initially Effective."

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/6f4136d0-4fae-458a-b8f9-4d40575436e7.gif)

**4. [Miliastra Sandbox] Configure [Autonomous Logic Binding] in the Creation Status Decision Node Graph**

Configure [Autonomous Logic Binding] in the Creation Status Decision Node Graph (settings reference below). To achieve the expected function effect, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature

Set Up Creation Status Configuration Trigger Scenario//
Condition//
Result The creation is in a patrol status.[Execution Node]: Switch to self execution status and bind the corresponding autonomous logic parameters for that status.

Open Client Node Graph Resource Explorer >Creation Status Decision Node Graph and create a new creation status decision node graph:

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/b3fe4cb3-868c-4833-8a8f-fac286a20cbb.gif)

Configure the required creation status decision node graph content:

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/2a0ac359-5d72-4b70-99d0-21f237829a25.png)

**5. [In-Game Editor] Bind the Creation Status Decision Node Graph to the Corresponding Creation**

Enter the Prefab Library >>> Select the newly created Hilichurl Fighter >>> Select ![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/25ae779d-43e4-4b80-90dd-317602af61f3.png)>>> Open the Creation Status Decision Node Graph >>>![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/f824cc4b-806b-422c-99f7-dd3418249703.png) Select the configured status decision  node graph and save it.

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/7a9864e9-6e9b-432b-b67b-a579d1cf99cb.gif)

**6. [In-Game Editor] Place the Hilichurl in the Scene and Enter Test Mode to Verify Behavior**

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/89c84b65-468f-435e-9aa2-b3a3bf2eaca9.gif)

## Feature Example 3: Dynamic Obstacle Avoidance in Creation Pathfinding/Patrol

### 1. Course Content

**Feature:** While patrolling, the Hilichurl Fighter will automatically avoid dynamic objects that have Pathfinding Blocker components.

**Effect Demonstration:**

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/d3d287eb-9ce3-421b-8598-c11ff8cbdb29.gif)

_**If a creation (monster) cannot attack correctly or shows abnormal patrol behavior during playtesting, try rebuilding the navigation mesh via Stage Settings > Terrain Navigation > Render Navmesh._

### 2. Steps to Follow

**1. [In-Game Editor] Add Component**

Create a prefab as an interactive object (this tutorial uses a stone functional platform as an example) by selecting ![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/fe1c6bff-2a9c-46de-915b-6105bc1d316f.png) on the panel >>> Enter the [Component] page ![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/98ca309b-5ddc-4ef5-88b7-8645054cd00c.png)>>> Select [Pathfinding Obstacle] >>> Modify the corresponding parameters.

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/bf1e4afd-fec0-4621-ace5-3e56d5a492b0.gif)

**2. [In-Game Editor] Add Dynamic Object to the Scene**

Place the target object along the path created in Feature Example 2, and add a stone functional platform without a pathfinding obstacle as a comparison.

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/0cdc3706-613d-4eb8-8106-c8f2a23a4a5c.png)

**3. [In-Game Editor] Enter Test Play**

Place the modified prefab in the scene and enter Test Play to experience this feature.

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/d3d287eb-9ce3-421b-8598-c11ff8cbdb29.gif)

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following features based on the course content.

> Feature Replication: Create targeted projectile firing for a creation.
> 
> 
> Advanced Extension: Build a complete monster autonomous logic system that performs pathfinding first, then detects nearby enemy units and executes skills such as Normal Attacks and projectile firing.

**Course Review:** Learn the basic logic and configuration of custom creation skills, creation statuses, and creation status decisions for complex creations, as well as how pathfinding obstacle components added to dynamic objects affect creation navigation.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files - Complex Creations]**.

![Image 56](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Complex Creations .gil

43 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh5gal0zn600/738a41a3-b593-4cf9-8216-b5ea2c7559b2.gil)

[2.12 Scene Generation Template Management: Fast Stage Scene Generation](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhz6s29zzonm)
