---
id: mh4ejirxhneu
title: Complex Creations
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhb8nl0w8cao
language: en
scope: guide
crawledAt: 2026-05-31T16:19:38.438Z
---

# Complex Creations

# I. Definition of Complex Creations

To meet the needs of Craftspeople who want greater freedom when customizing Creation models and behaviors, we have introduced some Creations that can have their autonomous logic edited and can have custom skills edited like characters. These Creations are referred to as _Complex Creations._

# II. Creating Complex Creations

Like other Entities, open the Entity Placement Interface, select a specific item under the Complex Creations tab, then click it or drag it into the Scene to create the Complex Creation

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/c17487b6-8c64-48bd-b848-a653e74c33b4.png)

# III. Differences Between Complex and Basic Creations

This section lists only the differences between Complex Creations and Basic Creations. For the definitions of all other parameters, refer to the [Creations](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhufqo0c0tqw).

## 1. Basic Information

### (1) Transformation

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/d1b41b68-3569-4a8f-b225-051f119763cc.png)

Complex Creations support scaling, with an adjustment rate of 0.5–3.0.

### (2) Model

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/bb15ac6b-b4e6-4c40-924d-5572676ac953.png)

Complex Creations can adjust Preset Status. Preset Status affects various aspects of a Complex Creation, including but not limited to initial actions

## 2. Specialized Settings

### (1) Creation Status Decision Node Graph

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/9c147dd0-999b-4586-a37e-81387e441197.png)

Complex creations can be configured with a _Creation Status Decision Node Graph_. Once configured here, Complex Creations will continuously access it and enter different autonomous logic statuses based on the configured conditions

In the _Creation Status Decision Node Graph_, you can reference the _Creation Status Node Graph_. In the Creation Status Node Graph, you can have Creations execute actual Skills and tactics.

### (2) Creation Skill Management

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/ebabc34e-191a-441c-9c15-58e9f3ddb21b.png)

Complex Creations can use Custom Skills. Skills must be defined before they can be used in the Creation Status Node Graph.

Complex Creation Skills are edited similarly to Character Skills. Refer to [Skills](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mho81frl33im).

The skill usage of Complex Creations is subject to three cooldown timers: _Global Skill CD, Skill CD, Skill Group CD_. A Skill can only be used when all three timers are ready

Click Details Editing to open the Skill Details Interface for Creations

#### a. Skills

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/02bb1ab7-c9c4-4484-bda3-967c0ffe0362.png)



**Basic Settings**

Configuration Parameters Description
_ID_ Referenced in the Status Node Graph. Used when calling this Skill for actual execution
_Referenced Skill_ Custom Skills for Complex Creations can only reference Skills that they can use



**CD Configuration**

Configuration Parameters Description
_Initial CD Start Point_ Available Options:

**In Battle**: The initial cooldown starts when entering battle.

**Out of Battle**: The initial cooldown starts when exiting battle.
_Initial CD Range (s)_ Configure a random time within the specified range to be the effective cooldown time. After the Creation is created, it will start using the skill only after the effective cooldown time has passed.
_Default_ _CD Range (s)_ Select a random time within the configured range as the Actual Cooldown Time.

After the Creation uses this Skill, it cannot use it again during the Actual Cooldown Time
_CD Group_ If a Skill is configured with a CD Group, it can only be used when its own Skill CD, Global Skill CD, and Skill Group CD are all ready
_CD Trigger Timing_ Select an enum value.

When Skill ends: Start counting CD after the Skill finishes.

When Skill starts: Start counting CD when the Skill starts
_Trigger Global Skill CD_ Whether this affects the Global Skill CD
_Ignore Global Skill CD_ If checked, ignore the Global Skill CD restriction in the skill usage conditions

#### b. Cooldown Time

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/3f4ea3f9-6331-441f-a5cf-87d438b95d1f.png)



**Basic Settings**

Configuration Parameters Description
_Global CD (s)_ All Skills for the current Complex Creation are affected by the Global Cooldown Time



**CD Group Configuration**

You can add CD Groups as needed by clicking [Add CD Group].

CD Group: Links the cooldown timers of multiple Skills. Skills in the same CD Group can only be used after their cooldown timers are ready

Configuration Parameters Description
_CD Group ID_ Can be referenced in Nodes at runtime
_CD Group Name_ Can be selected in the specified editor
_CD Range (s)_ Configure the cooldown time range

### (3)**Autonomous Logic Parameter Settings**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/b4c9e0ce-a5ad-462a-bcba-b6c6f5c92abf.png)

Complex creations require the definition of _Autonomous Logic Parameter Templates_, which can be applied in the Creation Status Node Graph

These parameters are the basic requirements for the combat behavior of Complex Creations

Configuration Parameters Description
_Initial Effective Autonomous Logic Parameter Template_ The _Autonomous Logic Parameter Template_ that is active by default at runtime. Maximum 1.

You can select an option from the dropdown enum to edit the active state. After editing, the active state is synced to the corresponding template's Editing Tab

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/9f46ed8e-0658-4008-9af5-bca1b4349318.png)![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/46d8ea0f-5eb3-4a8b-a508-7e92c6fc1a90.png)
_*Autonomous Logic Parameter Template List_ Lists all _Autonomous Logic Parameter Templates_ configured for this Complex Creation

Click Details Editing to open the Details Interface for _Autonomous Logic Parameter Templates_

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/828bd006-9167-4abe-afa8-50458289949d.png)



Enumerate all _Autonomous Logic Parameter Templates_ defined for this Complex Creation



Click ![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/568fec50-2955-4e49-abf1-7f16fb2e01b2.png) to add an _Autonomous Logic Parameter Template_. It is inactive by default



"Template_X", where X is the _Autonomous Logic Parameter Template_ ID. As a Node input, different Autonomous Logic Parameter Templates can be used to adjust states

#### a. Basic Settings

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/ea25be49-3f6b-46e6-af8d-e109edd43968.png)

Configuration Parameters Description
_Initially Effective_ If enabled, this _Autonomous Logic Parameter Template_ takes effect immediately when the Complex Creation is Created

#### b. Battle Settings

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/1574942c-c837-4e65-8240-436652202d9c.png)



Range Detection

Configuration Parameters Description
_Detection Range_ When Hostile Entities are within this range, the Creation can get their information and enter battle with them as Targets
_*Preview Range_ When enabled, you can view the Detection Range of the Creation Entity in the Editing Interface



FOV Detection

Configuration Parameters Description
_FOV Type_ Provides enums for FOV Cone and Full FOV. Selecting one also updates the range editing parameters
_FOV Cone - Cone Distance_ Configure the radius distance of the FOV Cone
_Full FOV - FOV Detection Radius_ Configure the sphere radius
_*Preview Range_ When enabled, you can view the FOV Detection Range of the edited Creation Entity in the Editing Interface

_Chain Battle Distance (m)_: When a Creation Entity enters battle, other Creation Entities within this area that are not in battle will also enter battle

_*Preview Chain Battle Distance_: When enabled, you can view the chain battle area of the edited Creation Entity in the Editing Interface

#### c. Out-of-Battle Settings

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/5dbf1de6-eeda-4923-ad43-5ac320462215.png)

Rules that define when a Creation automatically leaves battle after engaging a hostile Entity during runtime

Configuration Parameters Description
_Out-of-Battle Distance (m)_ When the distance between a Creation in combat and its target Entity exceeds the configured value, the Creation leaves battle
_*Preview Out-of-Battle Distance_ When enabled, the editing interface displays the Out-of-Battle Distance of the Creation Entity currently being edited
_Leave Battle on Pathfinding Failure_ If no valid path exists between a Creation in combat and its target Entity, the Creation leaves battle
_Leaving Battle Delay (s)_ When there is no valid path between a Creation in combat and its target Entity, the Creation will leave battle following the specified delay

#### d. Territory Settings

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/a545d7b1-8a03-49d3-9dda-f153660ccae1.png)

Configuration Parameters Description
_Territory_ Supports None, Sphere, and Cylinder configurations. Size parameters are required.

The Territory is centered on the Creation's spawn location and does not move with the Creation.

The Creation's movement range is constrained within the Territory. This restriction can be adjusted via Nodes.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/21a11e41-571b-43bd-b61c-6ff765f90a57.png)

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/261aff45-1316-497b-bb43-4c0a1c70aa5d.png)

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/b69945dd-f33f-4257-afc9-dbeb3b794f28.png)
_*Preview Territory Range_ When enabled, the configured Territory range is displayed in the Editing interface
_Leave Battle When Player Leaves Area_ When enabled, the Creation leaves battle when the target Entity leaves the specified area
_Leaving Battle Delay (s)_ After the target Entity leaves the Territory range, the Creation leaves battle following the specified delay

### (4) Patrol**Settings**

Please refer to the Patrol section under [General Settings](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh3rgo0c16c8)

# IV. Managing Complex Creation Behaviors Through Local Filter

## 1. Creation Status Decision Node Graph

The Construct State Decision Node Graph starts with the**Execute only by sequence**node. Each output pin connects to the **Switch to self execution status** node to execute different behaviors as needed. If the entry conditions of the preceding state are not met, it will first attempt to enter _Failed Execution_. If the conditions are still not met, it will try to execute the state of the next output angle. The Creation Status Decision Node Graph continuously executes. If the conditions of the preceding states are met, the complex creation will immediately switch execution states and execute the preceding state's node graph. If the conditions are not met, the complex creation may not execute any state node graph.

**Example**: During runtime, start from branch 1 and first evaluate node A. If node A's conditions are met and it executes successfully, nodes B and C will not be executed subsequently. If node A's conditions are not met, continue evaluating node B. If neither nodes A nor B meet the conditions, start evaluating node C from branch 2.

If the creation is currently executing the status node graph within node C, but the execution conditions of node A are met, the complex creation will immediately switch to executing the state node graph within node A.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/46a18cc1-92d1-4ccc-b242-9c27775bc2ca.png)

Execute only by sequence

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/c3057827-cc56-40c4-b94f-941cddfdc683.png)

Switch to self execution status

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/3e819959-41fc-43f1-b033-bccb8717df0a.png)

## 2. Creation Status Node Graph

The input and output pins of the Creation Status Node Graph support only single-line connections

The Creation Status Node Graph represents continuous behavior. While a Complex Creation remains in a given execution state and is not switched by the Status Decision Node Graph, it continuously executes the configured behavior in the Creation Status Node Graph

For example, when a Complex Creation switches to the Creation Status Node Graph shown below via the Status Decision Node Graph, this Node Graph will continue its execution

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4ejirxhneu/026ce2aa-b985-4abf-9efd-763f9ed7d8b7.png)
