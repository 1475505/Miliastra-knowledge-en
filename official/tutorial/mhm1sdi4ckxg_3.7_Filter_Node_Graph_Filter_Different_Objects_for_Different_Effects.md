---
id: mhm1sdi4ckxg
title: 3.7 Filter Node Graph: Filter Different Objects for Different Effects
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhm1sdi4ckxg
language: en
scope: tutorial
crawledAt: 2026-05-31T15:52:50.008Z
---

# 3.7 Filter Node Graph: Filter Different Objects for Different Effects

# Introduction

## Course Description:

**Course Content:**Basic logic and usage of filter node graphs

**Learning Objectives:**Understand how to configure filter node graphs for screening and filtering to achieve different effects on different objects

_**This course involves two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

Prerequisite Courses: This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)
> 
> 
> [2.9 Character Disruptor Device: Apply Continuous or Instantaneous Forces to Characters](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh09qf0mc628)

Prerequisite Courses: The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)_

> [Summary](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhi4kw9mur0i)

* * *

# Filter Node Graph: Screening and Filtering Objects

## Feature Example 1: Tab Display Filtering, View Different Interactive Items Under Specific Conditions

### 1. Concept Overview

**Filter Node Graph:** Through customized filter rules, specific tags/targets can be used to achieve filtering of different objects, resulting in different effects.

**Special:** Unlike other node graphs, filter node graphs only return a boolean value (True/False), with the boolean value of [True] indicating a successful validation

Currently, the filter node graph is commonly used in the following three scenarios:

> [Tab] When boolean value is [Yes], options are displayed. This is used to show different interactive items (for creating hints/interactive effects for different objects);
> 
> 
> [Hit Detection] Can be hit when boolean value is [Yes]. This is used for hit/miss detection on specific units (for creating effects like sniper rifle bullets penetrating walls);
> 
> 
> [Character Disruptor Device] Can be disrupted When boolean value is [Yes]. This is used to apply different effects to characters with different tags.

****Filter node graph is configured in the [Client Node Graph]**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/25f85b5c30c74ae682b675622d79a88e_1757675241.gif)

### 2. Course Content

**Feature:**Create interactive mechanisms and provide hints for the key to players when they don't have the key. Allow players to open the door after obtaining the key

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/517a643e6841486799dadacf65522a2b_1757675241.gif)

### 3. Steps to Follow

**Feature Principle:**

> The filter node graph determines whether the [Player] variable has a [Key] and displays different options accordingly. When there's no key, it guides the player to obtain one; when there is a key, ooption for opening the door becomes available;
> 
> 
> The [Player] has a preset custom variable [Has Key], type: Boolean, initial value: No, which changes to true after obtaining the key;
> 
> 
> After opening the door, the door's basic motion device is activated.

**1. [In-Game Editor] Create objects and add components**

① Create a prefab as an interactive object (using a lever as an example in this tutorial). Add [Components > Tab].

② Create a prefab as the key. Add [Components > Collision Trigger].

③ Create a prefab as the door. Add [Components > Basic Motion Device].

**2. [In-Game Editor] Configure panel parameters**

① After adding the tab component to the interactive object, add 2 tabs and set different text content

Features to Implement Corresponding Configuration Items
There are 2 different interaction items, corresponding to [Hint] and [Open Door]Set different text for the two tabs
Has a trigger area Adjust the [Trigger Option Area] to an appropriate size

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/e6ad27b1dcb443e9a6078fa2c9197eb2_1757675241.png)

② Add a collision trigger to the key and adjust trigger rules

Features to Implement Corresponding Configuration Items
Only characters can trigger pickup action Set [Effective Target] to characters only
Has a trigger area Adjust the [Trigger Area] to the appropriate shape and size

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/324e2559cb974851a2f4919655c5e6b2_1757675242.png)

③ After adding a basic motion device to the door

Features to Implement Corresponding Configuration Items
Not initially active, activated by opening the door[Initially Effective] option turned off
Open the door upwards[Movement Type] Use uniform linear motion

[Detailed Settings] Adjust motion parameters to the appropriate speed

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/699160f0a5794be486da6d4da77e73d9_1757675242.png)

**3. [In-Game Editor] Adding custom variables**

Add custom variables to [Player] to determine the number of keys owned

Features to Implement Corresponding Configuration Items
Set variable name for node graph configuration Change [Variable Name] to "Has Key"

_**The variable name doesn't affect its function, it's only used for node graph configuration and indexing. You can name it however you find easy to remember._
The key has 2 states: "Owned" and "Not Owned"[Variable Type] is set to "Boolean"

_**Using "Float" or "String" would also work. The current setting is just for ease of calculation. Feel free to adjust the setting to your preference._
Initially state is "Not Owned"Set [Initial Value] to "No"

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/9dafaceac7b647b9b3464c44c7f234d8_1757675242.png)

**4. [Miliastra Sandbox] Server Node Graph Configuration**

① Configure [Interactive Object] node graph:

****This node graph is mounted on the [Interactive Object]**

Features to Implement Corresponding Configuration Items
Feature

After the player interaction hint, add a guide effect to the key; open the door after interaction Trigger Scenario Trigger event after selecting the option tab[Event Node]: When option tab is selected
Condition Execute different effects based on different operations[Flow Control Node]: Use multiple branches to determine "Option ID"

_**In this tutorial, option IDs correspond to:_

_ID 1 > Open the door_

_ID 2 > Hint guidance_
Result 1 Lever changes and door opens[Execute Node]: Use [Set Preset State] to create simple lever changes for visual emphasis

[Execute Node]: Use [Activate Basic Motion Device] to enable the preset motion device on the door
Result 2 Add an effect to the key to serve as guidance and hint[Execution Node]: Use [Mount Loop Effect] to configure a simple effect on the key for player guidance and acquisition

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/e97b6120acbe4445b462864389615114_1757675242.png)

② Configure the [Key] node graph:

****This node graph is mounted on the [Key]**

Features to Implement Corresponding Configuration Items
Feature

Player can pick up the key when entering the collection range Trigger Scenario Player enters specific area[Event Node]: When entering collision trigger
Condition//
Result 1 Allow player to obtain the key[Execution Node]: Use [Set Custom Variable] to change the player's custom variable to [Yes]
Result 2 Key disappears and cannot be picked up again[Execution Node]: Use [Destroy Entity] to destroy the key

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/d2501e2ff4e84808a65471d2f37bd0f5_1757675243.png)

**5. [Miliastra Sandbox] Client Node Graph Configuration**

In the [Client > Filter Node Graph], add and configure the node graph (see recommended settings in the image below). To achieve the desired functionality, the tutorial configuration is as follows:

Features to Implement Corresponding Configuration Items
Feature 1

Display when player [Has Key]Trigger Target Query custom variables of the entity entering the tab trigger area[Target Entity] = Entity entering the tab trigger area

_**This entity is a character, switch to player before querying custom variables_
Condition Check if the player entering the tab trigger area [Has Key]Operation node: [Equal to] Check if target entity's custom variable is [True]

_**Make sure to check if the variable type is [Boolean]_
Result//

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/85bd983a218348b5a8fb2b2da7adb155_1757675243.png)

Features to Implement Corresponding Configuration Items
Feature 2

Display when player has [No Key]Trigger Target Query custom variables of the entity entering the tab trigger area[Target Entity] = Entity entering the tab trigger area

_**This entity is a character, switch to player before querying custom variables_
Condition Check if the player entering the tab trigger area has [No Key]Operation node: [Equals] Check if target entity's custom variable is [No]

_**Make sure to check if the variable type is [Boolean]_
Result//

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/c5537592f314477d9f815cf9a8ed69c1_1757675240.png)

**6. [In-Game Editor] Add filter node graph in tab component**

Add corresponding filter node graphs based on different interaction items

The open door option should correspond to the filter node graph visible when [Has Key]

The guide option should correspond to the filter node graph visible when [No Key] is selected

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/973bf6cd0d2f4a748e7d4c19b0672686_1757675240.png)

**7. [In-Game Editor] Mount node graph**

Mount the server node graph configured elsewhere on this prefab and save the prefab settings.

**8. [In-Game Editor] Place prefabs and test gameplay**

Place the modified prefab in the scene and enter Test Mode to experience this feature.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/386ec9f17df54ef09d8ff595a438c315_1757675240.gif)

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Try to replicate/expand the following feature based on the course content.

> Feature Replication 1: Create a chest that can only be opened by specific factions.
> 
> 
> Feature Replication 2: Create wall-penetrating bullet effects for specific weapons.

**Course Review:**Learn to create specific filter node graphs based on what's needed for the scenario to filter objects with different tags.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files > Filter Node Graph]**.

![Image 14](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Filter Node Graph.gil

23.2 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhv9jyinbbj0/768b6fb6d12c4c83879a661b34d1b980_1757675241.gil)

[3.6 Signal Communication: Trigger Different Behaviors Across Multiple Objects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhc5uurnzzt2)[3.8 Projectile Motion Device: Creating a Shootable Bullet](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhn4nsiz7k18)

1
