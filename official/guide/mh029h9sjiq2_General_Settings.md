---
id: mh029h9sjiq2
title: General Settings
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3rgo0c16c8
language: en
scope: guide
crawledAt: 2026-05-31T16:24:42.598Z
---

# General Settings

# I. Definition of General Settings

Creation-specific settings are divided into Behavior Modes, Not-in-Battle Behavior, and Battle Areas

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/2e256a5b-1157-4189-bd84-5b65cdb38adc.png)

# II. Edit General Settings

## 1. Behavior Mode

Supports Behavior Mode selection for Creation Entities. At runtime, Entities will autonomously perform actions such as movement, battle entry and exit based on the configured Behavior Mode

Creation Behavior Mode Full Enumeration Details: [Creation Behavior Mode Archive](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhyg4i0inazs)

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/455a6fba-293f-4ec1-b211-07d08668b153.png)



The Behavior Modes of Creation Entities can be configured and switched through enumeration selection

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/3d97da87-fa91-4550-bef3-cdee93c844e7.png)

Configuration Parameters Description
_Behavior Modes_ Can be selected from the enumerated options in the pre-provided behavior mode pool

Each Behavior Mode provides different optional actions for both in-battle and not-in-battle situations, causing the Creation to autonomously display different behaviors.

## 2. Not-in-Battle Behavior



After selecting a Behavior Mode, you can choose the _Not-in-Battle Behavior_.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/52261667-3a68-4688-b154-3c4d7d7a1fe9.png)

Configuration Parameters Description
_Not-in-Battle Behavior_ Rules for creations while out of battle..

Each mode has its own Not-in-Battle behavior pool

## 3. Battle Area



After selecting a Behavior Mode, you can choose the _Battle Area_.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/6be1ab83-b242-4111-9cb4-9fbbb25255d2.png)

Configuration Parameters Description
_Battle Area_ An entity's autonomous detection of hostile entities. If detection succeeds, it enters battle with the detected entity as its target

All behavior modes include: _Range Detection_ and _FOV Detection_
_*Preview Battle Area_ Enable to observe Horizontal Range of Battle Area
_*Behavior Description_ Behavior Mode Introduction

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/427e0f01-131a-43f7-b80c-7cc49c0facbb.png)

## 4. Details Editor



Through "Details Editor", you can adjust and configure more parameters for not-in-battle and battle behaviors.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/5ba8d6bb-57c4-4e51-b3e5-7aa0633b7232.png)

### (1) Details Editor - Not-in-battle

Rules to be followed when a Creation Entity is running but has not yet entered the battle

For all not-in-battle behaviors, please refer to [Not-in-Battle Behavior](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhpsmb91keka)

Editable Not-in-Battle behaviors include _Wandering_ _and_ _Patrolling_

#### a. Wandering

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/feeba29e-28da-4a86-bccf-65b049f86dcc.png)

A behavior supported by all Creations when not engaged in a battle

During stage runtime, when Creations are not in battle, they will move randomly within their _Territory_ Range

Configuration Parameters Description
_Movement Area_ A range centered on the creation's spawn coordinates

At runtime, the creation randomly moves to points within this range in its territory

Only spherical shapes are supported
_Area Radius (m)_ The radius of the spherical movement area
_*Preview Movement Area_ When enabled, the configured Wandering Area Range can be viewed in the Editor Window
_Movement Interval (s)_ Randomly selected within the configured time interval. After each movement, waits for this duration before moving again
_Single Movement Distance (m)_ Randomly selected within the configured distance for each movement

#### b. Patrol

Some Creations support configuring patrol behavior when not in battle

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/dab6efe9-b028-48de-834d-895d526ac5f6.png)

Configuration Parameters Description
_Initial Effective Patrol Template_ The drop-down menu enumerates patrol templates for this creation

Use the checkbox to toggle whether it's active; changes sync to the Patrol Template Details Editing Tab

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/8359fbad-00ce-468f-bda0-634deb5e1fc3.png)![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/35920012-3716-4d49-9666-530fcb57a6fe.png)
_*Patrol Template List_ Enumerates all _patrol templates_ configured for this creation

Open the _Details Editing Tab_ to create a new patrol template or edit the existing ones

**Add Patrol Templates**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/8524c19a-2717-4875-857e-4d7337b87a4a.png)



Click ![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/568fec50-2955-4e49-abf1-7f16fb2e01b2.png) to add a patrol template.

For newly added patrol templates, Initially Effective is off by default.



_Template X_, where X is the ID; use it as a node input to switch patrol templates.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/1304bf60-9771-4dd8-a3b3-2d94af9e6d30.png)

Configuration Parameters Description
_Initially Effective_ If enabled, this patrol template takes effect when the creation is created

Only one patrol template can be active per creation at a time
_Loop Type_![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/56ca49a3-cc35-4ffc-a5c7-6e393e049397.png)
_One-Way_ The creation follows the path to the final waypoint, then stops patrolling
_Round Trip_ Upon reaching the final waypoint, the creation reverses and returns along the path; it does the same when it reaches the first waypoint
_Loop_ After reaching the final waypoint, the creation loops back to the first waypoint and continues
_Patrol Start Position_![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/9519a330-e863-4221-84fc-2682ea40417a.png)

Choose which waypoint the creation uses to begin its patrol
_Nearest point_ The closest waypoint in the selected patrol template
_Starting point_ The first waypoint in the selected patrol template

**Patrol Path Configuration**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/944399c2-b449-4c93-bc8a-d291dccb4b30.png)



Select the pre-configured paths from[Path](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh333vim2h44)for reference.

**Editing Patrol Path Template**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/3fe1cdaa-be97-4c68-9dcb-281e0637324d.png)

Configuration Parameters Description
_Patrol Path_ Select the pre-configured paths from the path management tool
_*Open Path Management Tool_ Redirects to the Path Management Tool

**Patrol Path Waypoint Configuration**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/944399c2-b449-4c93-bc8a-d291dccb4b30.png)

Configuration Parameters Description
_*Waypoint_ Waypoint X: Use X as a node parameter to read the waypoint's position/rotation, or to compare against the arrival point.
_Travel Speed_![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/99eb93c3-ce71-424a-914e-d527bdabe18f.png)

Offers **Walk and Run**as movement speed options
_Arrival Detection Radius (m)_ If the creation is within the configured radius of a waypoint, it is considered to have arrived
_Stay Duration(s)_ How long the creation remains in place after reaching the waypoint
_Turn After Reaching Waypoint_ If enabled, the creation turns to match the waypoint's rotation upon arrival
_Notify Node Graph on Arrival_ If enabled, upon arrival the creation sends a [Creation Reached Patrol Waypoint Event] to its mounted Node Graph
_*Show Waypoint Information_![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/3e6b033a-b1f8-4845-a27f-8ae61161f51c.png)

If enabled, you can view the waypoint's position and rotation; editing is not allowed

### (2) Details Editor - Combat

Rules for Creation Entity behavior when targeting a Character and preparing for/engaging in a battle

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/6b455830-475b-4c41-a55b-4445ddba48ac.png)

The basic configuration is consistent across different Behavior Modes, and here we'll explain all the parameters that have appeared so far.

#### **a. Battle Entry Settings**

At runtime, configure a creation entity's rules fo r how to detect hostile entities, d etection distance, and relationship settings

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/26819304-794c-4d84-9a44-8de12ce3be1d.png)



**Detection Range**

Configuration Parameters Description
_Detection Range_ When hostile entities are within this range, the creation can obtain the corresponding entity information and target that entity to enter battle
_*Preview Range_ When enabled, you can view the Detection Range of the edited creation entity in the Edit Window



**FOV Detection**

Configuration Parameters Description
_FOV Type_ Provides _Full FOV_ and _FOV Cone_ enumerations, and shape editing parameters will change accordingly after selection

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/1f8bab1a-f18d-4d89-a9da-a6290ac0b442.png)

Configuration Parameters Description
_FOV Cone - Cone Distance_ Configure the radius distance of the FOV Cone
_Full FOV - FOV Detection Radius_ Configure the sphere radius
_*Preview Range_ When enabled, you can view the FOV Detection Range of the edited creation entity in the Edit Window
_Coordinated Engagement Distance (m)_ When a Creation enters a battle, other Creations within this distance that are not in battle will also join the battle

#### **b. Battle Exit Settings**

When the creation entity is running, and has entered battle with hostile entities, configure the creation's automatic out-of-battle rule settings

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/cf0d9f4c-eb74-4192-9453-7f930b1d4de2.png)

Configuration Parameters Description
_Out-of-Battle Distance (m)_ When a creation is in battle, if the distance to its target entity exceeds the configured distance, the creation will leave battle
_*Preview Out-of-Battle Distance_ When enabled, you can view the configured distance
_Leave Battle on Pathfinding Failure_ When a creation is in battle and there is no valid path to its target entity, the creation will leave battle
_Leaving Battle Delay (s)_ When a creation is in battle and there is no valid path to its target entity, it will leave battle after the configured Leaving Battle Delay

#### **c. Territory Settings**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/3f5692ab-a053-4b14-be44-63e9082fbb12.png)

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/76453d29-fc6c-4c67-bca5-36334ad873fa.png)

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/7aa1fb77-5d8e-4e4e-a11a-437e675af40c.png)

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/6934b6c5-df9a-444b-98f8-9a16c0802b3f.png)

Configuration Parameters Description
_Territory_ Supports configuration of none, sphere, or cylinder, with size parameters required

The Territory is centered at the created Location of the Creation and does not change the Location with Creation movement

The Creation's movement range is restricted within the Territory
_*Preview Territory Range_ When enabled, you can view the configured Territory Range
_Leave Battle When Player Leaves Area_ When enabled, if the target entity leaves this area, the creation will leave battle
_Leaving Battle Delay (s)_ After the target entity leaves the territory range, the creation will leave battle after the specified delay

### (3) Details Editor - Skills



**Basic Settings**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/ba2004d1-f17b-4f2c-9c04-3c7a2d84d2ad.png)

Some of the logic parameters of certain creations can be configured by the creator (Craftsperson) to adjust the behavior and logic during runtime.

For example, as shown in the figure for the [Abyss Mage], the _Powerful Elemental Ward_ parameter is provided. By modifying this parameter, the creator can adjust the elemental value of the creation's Ward.

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/3f8558a8-470d-447e-8b29-d1b133c066ec.png)



**Skill Settings**

Enumerates some of the Creation's skills, which support a certain degree of adjustment to their cooldown times.

Configuration Parameters Description
_*Skill Name_ Currently provides editing for some melee skills, ranged skills, and special skills
_Enable This Skill_ When enabled, if the Creation's Behavior Mode includes this skill, it will be used; otherwise, this skill will not be used
_Initial CD Range (s)_ A random time within the configured range will be set as the Effective Cooldown Time

After the creation is created, it will start using this skill only after the Effective Cooldown Time has elapsed
_Default CD Range (s)_ A random time within the configured range will be set as the actual cooldown time

After the Creation uses this skill, it cannot use it again during the actual cooldown time

Complete enumeration details of Creation Skills:[Creation Skills Description](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhzys1ic5eok)

# III. Managing Creation Patrol via Node Graphs

1.

### **When Creation Reaches Patrol Waypoint**

If, in Patrol Template editing, the **Send Node Graph Event on Arrival Event** option is checked for a specified waypoint, the Node Graph Event will be received when the conditions are met

This Node Graph Event can only be received by the creation's node graph

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/743646cf-0d1a-4cac-9535-02ddf43801bb.png)

Configuration Parameters Data Type Description
_Creation Entity_ Entity The creation entity during runtime
_Creation GUID_ GUID The GUID of the creation, outputs empty if not initially placed
_Current Patrol Template ID_ Integer The currently active patrol template ID for the creation
_Current Global Path ID_ Integer The Global Path ID referenced by the creation's currently active patrol template
_Current Waypoint ID_ Integer The current waypoint ID reached by the creation
_Next Waypoint ID_ Integer The waypoint ID the creation will move to next

2.

### **Switch Creation Patrol Template**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/0876b9b9-ddae-419b-801c-dc0b1d31ab7a.png)

Configuration Parameters Data Type Description
_Creation Entity_ Entity The creation entity during runtime
_Patrol Template ID_ Integer The configured patrol template ID for the creation. If the template with the input ID does not exist, it will not take effect

3.

### **Get Current Creation's Patrol Template**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/6cc315c8-72cb-4da1-aa9f-159a2de12603.png)

Configuration Parameters Data Type Description
_Creation Entity_ Entity The creation entity during runtime
_Patrol Template ID_ Integer Currently active patrol template ID for the creation
_Global Path ID_ Integer Global Path ID referenced by the creation's currently active patrol template
_Target Waypoint ID_ Integer The waypoint ID the creation will move to next

4.

### Get Aggro List of Creation in Default Mode

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/ef14f7dc-62d7-4b48-b41c-91ddc906cc75.png)

Output lists for this node are only correct when the hostility configuration is set to [Default Type].

Configuration Parameters Data Type Description
_Creation Entity_ Entity The creation entity during runtime
_Aggro List_ Entity List Which entities the creation currently has hostility towards; this list is unordered.

5.

### Get Creation's Current Target

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh029h9sjiq2/f51d9318-0710-4816-bf56-ea651de8f294.png)

Depending on the creation's current behavior, the target entities may differ.

For example, when the creation is attacking an enemy, the target is a specified enemy entity.

For example, when the creation is healing an ally, the target is a specified allied entity.

Configuration Parameters Data Type Description
_Creation Entity_ Entity The creation entity during runtime
_Target Entity_ Entity The creation's current AI selects the target entity

[Ability Units](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh0ucw9e76f6)
