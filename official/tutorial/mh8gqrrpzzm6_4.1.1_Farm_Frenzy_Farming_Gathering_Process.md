---
id: mh8gqrrpzzm6
title: 4.1.1 Farm Frenzy Farming: Gathering Process
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh8gqrrpzzm6
language: en
scope: tutorial
crawledAt: 2026-05-31T16:51:02.498Z
---

# 4.1.1 Farm Frenzy Farming: Gathering Process

# Introduction

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course]

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: _(First-time users are recommended to study [Prerequisite Courses] for a smoother learning experience._

> [3.1 Custom Variables: Switch Object Presentation Under Specific Conditions](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhflri07dzd4)
> 
> 
> [3.2 Timer: Events Triggered at Specific Times](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhq8ew91dx8i)

* * *

## Goal Breakdown

## Function Logic

Below are the gameplay features related to Farming - Collection. The tutorial will explain these features in combination:

① Land has 4 upgradeable states: "Uncultivated/Cultivated/Seeded/Watered"

② There are 3 basic tools: rake, seeds, and watering can. Players can only hold 1 tool at a time, and can switch to other tools or put down the current tool

③ Rake, seeds, and watering can are used for cultivating, sowing, and watering the land respectively. Tools must be held to perform corresponding actions; land levels must be increased in sequence without skipping

④ Rake and watering can have unlimited uses, each seed can only be used 5 times

⑤ Each team can only perform "cultivate", "sow", and "water" actions on their own land, not on enemy territory

⑥ Seeds have four stages: "Seed Stage/Seedling Stage/Growth Stage/Mature Stage". After planting and watering, seeds will automatically grow at regular intervals

⑦ Harvesting is possible during the Mature Stage. Players can harvest mature fruits from both their own and enemy fields, with a maximum of 3 at a time

⑧ Points can be earned by delivering fruits to the merchant

### ① Land has 4 upgradeable states: "Uncultivated/Cultivated/Seeded/Watered"

**Function Principle:**

In the tutorial, empty objects are used as operation objects, and new objects or effects are generated at the empty object positions to represent the land status.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/af3488e4-ad65-4506-9576-c266378e0671.gif)

**Steps:**

**1. [In-Game Editor] Create a prefab as plantable land (the tutorial uses an empty object as an example), and add [Components - Custom Variable] for managing the land's upgrade status.**

To achieve the desired functionality, the tutorial configures it as follows:

Features to Implement Corresponding Configuration Items
Variable name settings are used for node graph configuration Change [Variable Name] to "Land Level"

_**The variable name does not affect its function, as it is only used for node graph configuration and indexing. You can configure it with a name that is easy for you to remember._
Land has 4 levels: "Uncultivated→Cultivated→Seeded→Watered"Change [Variable Type] to "Integer"

_**Using "Float" or "String" would also work, and this is just for easier calculation. You can configure it according to your preference._
Land initially starts from the "Uncultivated" state Adjust [Initial Value] to 0.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/2b742b61f92d4b2e82cd93b4213f7c0d_1757675274.png)

**2. [In-Game Editor] Choose the effects of land upgrade.**

In the tutorial demonstration, different prefabs or special effects are generated at empty object positions to represent land upgrade effects. During actual production, you can choose the required prefabs or special effect configurations according to your needs.

_**Remember the_ prefab _ID and effect ID for subsequent node graph configurations._

Configuration reference in tutorial:

Land Level 0: Empty Objects Only

Land Level 1: Create Prefab - Generate Soil

Land Level 2: Create Prefab - Generate Seeds

Land Level 3: Add Effects - Watered State

### ② There are 3 basic tools: rake, seeds, and watering can. Players can only hold 1 tool at a time, and can switch to other tools.

**Function Principle:**

Picking up and switching tools is implemented through "Destroy Prefab" and "Create Prefab";

Whether an item can be picked up or not is determined by the custom variable "Has Item or Not";

After picking up an item, store "What Item Was Picked Up" in the player's custom variables, and when switching, create the corresponding item based on the current variables of the player.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/949d16e424364745bc11a5797b433263_1757675279.gif)

**Steps:**

**1. [In-Game Editor] Create 3 different prop objects, add [Components - Tab], configure options for "Pick Up" and "Switch", and set up suitable option trigger areas.**

**2. [Player] configures [Components > Custom Variable], and adds 2 custom variables with the following parameters:**

_Variable 1 - Has Tool or Not, used to determine whether the player can "Pick Up" or "Switch" items._

_Variable 2 - Currently equipped tool, used to determine the player's current item, after "Switch", the originally equipped item will be placed in its original position._

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/ce458bee7a3a436f867ef45a5d8401b8_1757675280.png)

**3. [Miliastra Sandbox] Configure "Pick Up"/"Switch" item effects in the entity node graph (settings reference below), save the prefab settings after completion.**

To achieve the desired functionality, the tutorial configures it as follows:

_**Since the logic for all 3 items is consistent, there is only the determination of the differences between the generated items and the switched equipped items in the player's inventory. This tutorial will use rake as an example._

The node graph is mounted on: each [Tool] (using a rake as an example below)

Features to Implement Corresponding Configurations
Function

Can pick up when there is no item; when an item has been picked up, only switches and puts down the original item Trigger Scene After interaction Event Node: When the Tab Is Selected (triggers when "any" interaction option is selected)
Condition 1 Determine player's action[Flow Control Node]: Use multiple branches to check "Option ID"

_**In this tutorial, option numbers correspond to:_

_Number 1 - Pick Up_

_Number 2 - Switch_
Condition 2 Check if player has picked up the item[Flow Control Node]: Use binary branch to check [Player] variable "Has Tool or Not".
Result 1 When there is no item held, picks up the item directly, and the item disappears after pickup[Execution Node]: Change [Player] variable "Has Tool or Not" to "Yes", and "Equipped Tool" to "Rake"

[Execution Node]：Destroy the item picked up
Condition 3 When switching, generates old items based on the items picked up by the player[Flow Control Node]: Use multiple branches to check [Player] variable "Currently Equipped Tool"
Result 2 When switching to a new item with an existing item, the current item disappears and the old item is generated in the original position[Execution Node]: Use [Create Prefab] to generate the prefab corresponding to the player's equipped tool in the original position

[Execution Node]: Change the [Player] variable "Equipped Tool" to "Rake"

[Execution Node]: Destroy the item picked up

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/7d68fb18682d49468e2f97a95df1cd41_1757675280.png)

### ③ Rake, seeds, and watering can are used for cultivating, sowing, and watering the land respectively. Tools must be held to perform corresponding actions, or you can put them down; land levels must be increased in sequence without skipping.

**Function Principle:**

After picking up the tool, new skills "Use Tool" and "Discard" are added to the player's character.

Tool effects correspond to three skills: cultivating, sowing, and watering;

A variable is set on the player to determine which "Interactive Land" is currently selected.

After entering the interactive area, set the corresponding land as the player's variable.

After using the tool, allow the player to operate on the selected land.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/104c8dee80b148f6b74f286a8c8e9716_1757675280.gif)

**Steps:**

**1. [In-Game Editor] Create 4 skills and configure their animations to respectively correspond to:**

Rake - Cultivate, normal skill, animation duration is 0.5s.

Seed - Plant, normal skill, animation duration is 0.5s.

Watering Can - Water, normal skill, animation duration is 0.5s.

Common - Put down the tool to instantly trigger the skill.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/2d87be24657e463081f0476d52c04846_1757675282.png)

**2. [Miliastra Sandbox] Client node graph - create skill effects in the skill node graph.**

_**Since there are no effects indicating the direct use of local skills, they only send skill usage signals, which are then handled by the server node graph._

Rake - Cultivation, Seed - Planting, Watering Can - Watering, the corresponding node graph is:

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/9121b7fdd498452ab672fae35d01111b_1757675282.png)

General - Put down tools, the corresponding node graph is:

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/5a2c8e69c05c45db873d7d04397e6f9d_1757675282.png)

**3. [Miliastra Sandbox] Create an effect that grants skills when players pick up tools.**

**Function Principle:**

Player picks up tools — changes player custom variables based on obtained tools — obtains skills based on custom variables.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Player]

Features to Implement Corresponding Configurations
Feature 1

Player obtains corresponding tool skills after picking up tools Trigger Scene When player picks up a tool[Event Node]: When tab is selected
Condition Determine which tool the player picked up[Flow Control Node]: Use multiple branches to determine the changes in custom variable values
Result Character can use or discard tools[Execution Node]: Use [Add Skill] to add tool's basic skills and common "Discard" skill

_**Skills are added to [Character], not [Player]_

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/321a4f47b8d64dfbbea9882ef3b179f5_1757675267.png)

**4. [Miliastra Sandbox] Create effects for generating tools and removing skills after players put down tools.**

**Function Principle:**

Player discards tool — generate corresponding tool based on player's current custom variables — reset player's custom variables — remove all skills.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Character]

_**[When the Skill Node Is Called] needs to be mounted on the [Character] for monitoring._

Features to Implement Corresponding Configurations
Feature 2

When player puts down a tool, a tool is generated in the original position and the available skills are removed Trigger Scene When player uses tool skill[Event Node]: [When the Skill Node Is Called]

Monitor client node [Notify Server Node Graph]
Condition 1 Check if the skill used by the player is "Discard"[Flow Control Node]: Use multiple branches to check skill parameters.
Condition 2 Check what tool the player currently has[Flow Control Node]: Use multiple branches to check the player variable "Currently equipped tool"
Result 1 Put Down Tool[Execution Node]: Use [Create Prefab] to generate the tool currently held by the player
Result 2 Allow player to pick up tools afterwards[Execution Node]: Set custom variable, no value assigned
Result 3 Cannot continue using tool skills[Execution Node]: Use [Delete Character Skills by Slot] to remove skill

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/fea132412d854db4bad85a95cdf13ae7_1757675267.png)

**5. [In-Game Editor] Clarify which land plot the player is currently operating on.**

In [Player] - [Custom Variables], add "Currently operable land", with type set to Entity.

_*Note: Due to character limit, the full text is not shown in the example image._

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/bc5ab4043d634263b7e092dabbdbf5e6_1757675267.png)

**6. [In-Game Editor] Make the land operable when players enter within a certain range of the land area.**

Add [Components - Collision Trigger] to the land, and configure appropriate scaling size according to needs, and this effect only applies to the character.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/3ffd0e27f28848d4afb22a96a38a0eb1_1757675267.png)

**7. [Miliastra Sandbox] Create an effect to make the land operable after player enters the area.**

**Function Principle:**

Player enters the area - changes player custom variable - subsequent operations on this custom variable (entered land).

Player exits the area - resets player custom variables - unable to perform operations on the land.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Land]

Features to Implement Corresponding Configurations
Feature 1

Land becomes operable when player enters the area Trigger Scenario When player enters a specific land area[Event Node]: [When Entering Collision Trigger]
Condition//
Result Player can operate on this land[Execution Node]: Use [Set Custom Variable] to store this land entity.
Feature 2

Land becomes inoperable after player exits the area Trigger Scenario After player exits a specific area[Event Node]: [When Exiting the Collision Trigger]
Condition//
Result Player cannot operate on this land[Execution Node]: Use [Set Custom Variable] to set null value

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/2d13c297f0e44c538b82ec5bdf6ce876_1757675268.png)

**8. [Miliastra Sandbox] Create effects for player's use of different tools to operate on the land.**

**Function Principle:**

Player uses a tool — check player's custom variable - what tool is being held — check land level - match tool with usable land types (e.g.: rake can only cultivate uncultivated land, seeds can only be planted on cultivated land, etc.) — execute corresponding tool effect — increase land level variable.

_**Since the 3 items share the same functional logic, first check the items on the player (corresponding to different operations), then check the current land level (to avoid level skipping), and execute different effects. The tutorial demonstrates this by using rake as an example._

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Character]

Features to Implement Corresponding Configurations
Function

After player uses tools, perform level-up operations based on different tools and land levels Trigger Scenario When player uses tool skill[Event Node]: [When the Skill Node Is Called]

Monitor client node [Notify Server Node Graph]
Condition 1 Check if the player's skill used is "Operation Tool"[Flow Control Node]: Use multiple branches to check skill parameters
Condition 2 Check what tool the player currently has[Flow Control Node]: Use multiple branches to check the player variable "Currently equipped tool"
Result 1 Land Level-up Effect[Execution Node]: Use [Create Prefab] to generate objects/effects

_**Steps: ① Set land level-up effect_
Result 2 Restrict different tool operations after land is levelled up[Execution Node]: Set custom variable, increase land level by 1

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/632fc9e72c904a7d929eba11aa118a64_1757675268.png)

### ④ Rake and watering can can be used infinitely, while each seed can only be used 5 times.

**Function Principle:**

Items with unlimited uses require no additional configuration.

Control the number of uses through custom variables, decrease the custom variable with each use, and destroy the item to make it unusable when it reaches a certain value.

**Effect Demonstration:**

_**For demonstration purposes, the tutorial has added a UI display showing how many times the seeds can be used (this will not be expanded here, but will be explained in subsequent lessons)._

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/981e84550dcf4a55839f760cff93bdbc_1757675268.gif)

**Steps:**

**1. [In-Game Editor] Players set custom variables to determine the number of uses remaining for currently collected seeds.**

_Variable Type: Integer_

_Initial Value: 0_

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/1587f73ee6604e29a401e17bda1e517e_1757675270.png)

**2. [In-Game Editor] Tools - Seed Setting Custom Variables, used to determine the current number of available uses.**

_Variable Type: Integer_

_Initial Value: 5_

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/1f6a34526ade482a88ef67086995bf2a_1757675270.png)

**3. [Miliastra Sandbox] Create seed use restriction effects.**

**Function Principle:**

Unused seeds have an initial "5" uses variable - this variable is transferred to the [Player] when picking up the item - each time the player uses it, the variable decreases by 1 - when the player puts down or switches tools, the variable on the player is transferred to the newly generated seed - if the variable equals 0 after player use, the seed has reached its usage limit, removing the tool and seed-related variables from the player.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: each [Tool]

Features to Implement Corresponding Configurations
Feature 1

When player picks up tools, pass the number of uses of the seed picked up to the player Trigger Scene When player picks up seeds/

_**No additional configuration needed, directly use the pickup switch node graph from step ③_
Condition Can pickup/switch/

_**No additional configuration needed, directly use the pickup switch node graph from step ③_
Result Pass variable to player[Execution Node]: Use [Set Custom Variable] to pass the variable from the seed to the [Player].

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/a83797a7cde041ffac308ae95e29e860_1757675270.png)

The node graph is mounted on: [Character]

Features to Implement Corresponding Configurations
Feature 2

After using a seed, the number of uses decreases Trigger Scene Use seed tool/

_**No additional configuration needed, directly use the tool usage node graph from step ③_
Condition Usability/

_**No additional configuration needed, directly use the tool usage node graph from step ③_
Result Reduce player's available seed usage count by 1[Execution Node]: Use [Set Custom Variable] to decrease the custom variable recorded on player by 1

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/0f6ae7dbfb54438eac06409de694dc60_1757675270.png)

Since the logic is consistent when switching/putting down items, you only need to configure all related node graphs. The related node graphs:

Switching from "Watering Can"/"Seed"/"Rake" to "Seed" — This node graph is mounted on: each [Tool]

Player actively puts down "Seed" — This node graph is mounted on: [Character]

_The tutorial only uses tool switching to Seed as an example._

The node graph is mounted on: each [Tool]

Features to Implement Corresponding Configurations
Feature 3

When player switches/puts down seeds, the number of uses for newly generated seeds is the same as the number of uses for seeds in player's hand Trigger Scene Switches/Puts Down Seeds/

_**No additional configuration needed, directly use the pickup switch node graph from step ③_
Condition Can switch/put down/

_**No additional configuration needed, directly use the pickup switch node graph from step ③_
Result 1 The number of uses for the newly generated seeds matches the number of uses for the seeds in player's hand[Execution Node]: Use [Set Custom Variable] to transfer the custom variable recorded on the player to the newly generated seed
Result 2 Refresh player's custom variable[Execution Node]: Use [Set Custom Variable] to clear the "Seed Usage Count" custom variable on the player

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/4d2d66305b694829b7f848f0257f4ea5_1757675270.png)

The node graph is mounted on: [Player]

Features to Implement Corresponding Configurations
Feature 4

When the number of uses for seeds in player's hand reaches 0, the seed tool becomes ineffective Trigger Scene Player uses seed[Event Node]: Decrease player's seed usage count custom variable by 1

_**When using seed as prerequisite, custom variable -1, so use this node graph directly_
Condition Can switch/put down/

_**No additional configuration needed, directly use the pickup/switch node graph from step ③_
Result 1 The number of uses for the newly generated seeds matches the number of uses for the seeds in player's hand[Execution Node]: Use [Set Custom Variable] to transfer the custom variable recorded on the player to the newly generated seed
Result 2 Refresh player's custom variable[Execution Node]: Use [Set Custom Variable] to clear the "Seed Usage Count" custom variable on the player

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/fedd723e33bb427e8f7f2d527d5499d6_1757675271.png)

### ⑤ Seeds go through "Seed Stage/Seedling Stage/Growth Stage/Mature Stage". After planting and watering the seed, it will automatically grow at regular intervals.

**Function Principle:**

After successfully watering the seed, a timer can be mounted to trigger plant level-up once at fixed intervals.

Destroy and create new prefabs to represent the plant level-up effect.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/7bdeae753bc14b9aa873cae596a611dd_1757675271.gif)

**Steps:**

**1. [In-Game Editor] Create effects for 3 different seed growth stages.**

The tutorial demonstration shows how to generate different prefabs at empty object positions to represent plant growth effects. During actual production, you can choose and configure the required prefabs according to your needs.

_**Remember the component ID for subsequent node graph configurations._

Tutorial settings reference as follows:

Plant - Seedling Stage: Only prefab models are different

Plant - Growth Stage: Only prefab models are different

Plants - Mature Stage: Different model prefabs, with added looping effects to indicate that the fruit is ripe.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/f790bab9c31346bc95587a3d901775e7_1757675272.png)

**2. [In-Game Editor] Add custom variables to manage plants on the land.**

Since the tutorial will use "Delete old plants and generate new plants" to create plant growth effects, we need to add [Component - Custom Variable] to store the old plants in the planting grid.

_Type: Entity_

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/b4abbe08c131438e93361bb258a8bd84_1757675273.png)

**3. [Miliastra Sandbox] Configure plant level-up effect node graph.**

**Function Principle:**

When player uses seeds for planting - the generated plant-seed stage will be stored as a variable of the land.

After successful seed watering - mount a timer to trigger seed level-up.

Use a timer to trigger level-up every 2s - represent plant growth by destroying the old one and generating a new one.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Character]

Features to Implement Corresponding Configurations
Feature 1

After planting, save the plant as a land variable Trigger Scene Player uses seed/

_**No additional configuration needed, directly use the tool usage node graph from step ③_
Condition The tool used is a seed, and the land is plantable/

_**No additional configuration needed, directly use the tool usage node graph from step ③_
Result Confirm which plant is planted (used for growth performance)[Execution Node]: Use Set Custom Variable to store the generated entity as a variable for the current operable land

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/742685fc95d341c58e5dd3d7fcd7e3bc_1757675273.png)

The node graph is mounted on: [Land]

Features to Implement Correspondings
Feature 2

Trigger growth after successful watering Trigger Scenario After watering[Event Node]: When custom variable changes

_**Watering changes the land level, so use "When Custom Variable Changes" as the trigger event_
Condition Land watering/
Result 1 Plant Seeding[Execution Node]: Use [Create Prefab] to generate a seed-stage plant at the land's position
Result 3 Plant starts growing[Execution Node]: Use [Start Timer] and mount it on the planting grid. Configure timer sequence as: 2, 4, 6.

_**Timer sequence indicates when the timer will trigger a time event. Since plant growth is one-time and non-cyclic, the configuration is set to grow once at 2/4/6s._
Function 3

Plant grows once every 2s Trigger Scenario At regular intervals[Event Node]: When timer triggers
Result 1 Destroy the currently planted plant (In the tutorial, the plant growth effect is created by destroying the old plant and generating a new one).[Execution Node]: Use [Destroy Entity] to destroy the currently saved planted plant variable.
Condition Different plant growth states at 2s, 4s, and 6s.[Flow Control Node]: Use [Multiple Branches] to determine timer stages and trigger different growth levels at specific times.
Result 2 Plant changes from growing.[Execution Node]: Use [Create Prefab] to create plant growth effects.
Result 3 Confirm which plant was planted (for creating growth animation).[Execution Node]: Use [Set Custom Variable] to save the generated plant as a variable.

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/02d6587fc2ef48b0be8e720da8a2a5af_1757675273.png)

### ⑥ Harvesting is possible during the Mature Stage. Players can harvest mature fruits from both their own and enemy fields, with a maximum of 3 at a time.

**Function Principle:**

Use custom variable "Can be harvested" - when plant grows to the final level - modify custom variable.

When player enters a certain area — check custom variable "Can be harvested" — check if player's "Current harvest count" < 3 — if successful, execute harvesting process.

During collection - restore land level - clear planted items - add collected items to player inventory (for subsequent use based on collection quantity).

**Effect Demonstration:**

_**For demonstration purposes, the tutorial has added a UI display showing how many fruits have been collected (this will not be expanded here, but will be explained in subsequent lessons)._

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/406fdf0b4513406093034a3d6d0b1ff9_1757675273.gif)

**Implementation Steps:**

**1. [In-Game Editor] Add a variable to the land to manage its harvest state.**

_Type: Boolean;_

_Initial Value: No_

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/8bf61a50b75c43de84a1cf89daed529c_1757675274.png)

**2. [In-Game Editor] Add a custom variable to [Player] to track the current collection amount.**

_Type: Integer_

_Initial Value: 0_

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/d4604c0cff84416abce25926d109dec2_1757675274.png)

**3. [Miliastra Sandbox] When the plant grows to its maximum level, change the land's custom variable "Can be harvested" to make the land harvestable.**

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Land]

Features to Implement Correspondings
Feature 1

Plants can be harvested when grown to maturity Trigger Scenario Plant Growth/

_**No additional configuration needed, directly use the plant growth node graph from step ⑤_
Condition Grown to maximum level/

_**No additional configuration needed, directly use the plant growth node graph from step ⑤_
Result Make land harvestable[Execution Node]: Use Set Custom Variable to change the land to harvestable state.

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/057a66c55a1a45c7820ee1805c90a866_1757675275.png)

**4. [Miliastra Sandbox] When the plant grows to its maximum level, change the land's custom variable "Can be harvested" to make the land harvestable.**

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Land]

Features to Implement Correspondings
Feature 2

After planting, save the plant as a land variable Trigger Scenario Player enters land area[Event Node]: Enter land's collision trigger area.
Condition 1 Land is harvestable[Flow Control Node]: Use double branch to check if the land is currently harvestable.
Condition 2 Player's current collection count is less than 3[Flow Control Node]: Use double branch to check player's current collection count.
Result 1 Increase player's collection amount[Execution Node]: Use Set Custom Variable to increase player's collection amount.
Result 2 Restore land to cultivated state[Execution Node]: Use Set Custom Variable to modify land level.
Result 3 Land cannot be harvested[Execution Node]: Use Set Custom Variable to set as non-harvestable.
Result 4 Delete plants and watering status on the land[Execution Node]: Use Destroy Entity + Set Custom Variable to delete plants on the land

[Execution Node]: Use Delete Effect to remove the watering status of the land.

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/e7894ddb69294d75b23666f6f6bad9cd_1757675275.png)

### ⑦ Submit fruits to the merchant to earn points.

**Function Principle:**

Use custom variable "Points" to manage player's points after selling fruits — Players enter the fruit merchant area to sell fruits they carry — Points are awarded based on the number of fruits the player has.

**Effect Demonstration:**

_**For demonstration purposes, the tutorial has added a UI display showing points (this will not be expanded here, but will be explained in subsequent lessons)._

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/1a8a8fc06b884d5da2784f97394219f7_1757675275.gif)

**Steps:**

**1. [In-Game Editor] Create a fruit merchant for selling fruits; add [Components - Collision Trigger] to detect when players enter to sell fruits.**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/e47d84950d08446ca7f22ae01094f207_1757675277.png)

**2. [In-Game Editor] Add a custom variable to [Player] to track the current points.**

_Type: Integer_

_Initial Value: 0_

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/f86d11d2-f6fe-4b69-aec7-af67a035f1b1.png)

**3. [Miliastra Sandbox] Create the effects of selling fruits.**

**Function Principle:**

When players enter the area — gain points based on the number of fruits they have — clear the current player's fruit count.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Fruit Merchant]

Points calculation formula: new points = old points + number of collected items * 10

Features to Implement Corresponding Configurations
Feature

When players enter the fruit merchant area, they can sell their fruits to earn points Trigger Scenario Player enters fruit merchant area[Event Node]: Enter the collision trigger area of the fruit merchant
Conditions//
Result 1 Increase player's score[Execution Node]: Use Set Custom Variable to increase player's score

_**In this tutorial, 1 fruit = 10 points, but this can be configured freely._
Result 2 Player sells all fruits[Execution Node]: Use Set Custom Variable to clear the player's fruit count.

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/c1494334e93442529a204c0a091fe08b_1757675277.png)

### ⑧ Each team of players can only perform "Cultivation", "Seeding", and "Watering" on their own area, and cannot perform operations on enemy area.

**Function Principle:**

Players are divided into different factions, and the land tiles are also allocated to different factions;

When placing, land tiles of the same faction should be placed in the same location;

When determining if a player can operate on land tiles, only tiles of the same faction can be operated on.

**Effect Demonstration:**

_**Different faction lands have been placed in 2 areas._

****Text Display in Demos:**The ability to customize text display is unlocked after reaching a specific Craftsperson Level. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/f0ef90816e58485d90b4f715b3914dc8_1757675277.gif)

**Steps:**

**1. [In-Game Editor] Assign player teams**

_**Since this gameplay mode only involves 4 players and teams, [Factions] are used for configuration._

In [Stage Settings - Faction], add multiple factions and assign players 1-4 to different factions.

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/e05fa40d061148e89e9c9e2af4fac4b7_1757675278.png)

In faction relationship settings, all teams can be set as friendly.

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/c5d2d84c202847dbb220194791cee0ca_1757675278.png)

**2. [In-Game Editor] Create 4 land prefabs, corresponding to teams 1 to 4.**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/6af576264b544d3d991ae8f0e8fb7648_1757675279.png)

**3. [Miliastra Sandbox] Create land faction matching tags, only lands of the same faction can be operated.**

**Function Principle:**

When a player enters the operable area of the land - the system checks if the land faction matches the player's faction - if they match, the land can be operated.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Land]

Features to Implement Corresponding Configurations
Feature 1

Land becomes operable when player enters their faction land Trigger Scenario When player enters a specific land area/

_**No additional configuration needed, directly use the land operable node graph from step ③_
Condition Whether the land belongs to the same faction[Flow Control Node]: Use Double Branch to compare land faction and player faction, proceed if they match.
Result Player can operate on this land/

_**No additional configuration needed, directly use the land operation node graph from step ③_

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/6b41661423cb4561a9077246d54ff14d_1757675280.png)

* * *

# Supplementary Materials

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Farming - Collection Process].

![Image 43](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Farming - Collection Process.gil

85.4 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh4j9t9m12ay/e1e7994a-f70f-408e-8d99-f6b53f4eb877.gil)

[4.1 Party Game: "Farm Frenzy"](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhzi4r003o0g)[4.1.2 Farm Frenzy Control Tips and Feedback](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhhfcsifwb7w)
