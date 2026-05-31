---
id: mhakeo0qiy6w
title: Classes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhodlcrpht3q
language: en
scope: guide
crawledAt: 2026-05-31T16:18:12.362Z
---

# Classes

# I. Definition of Classes

_Class_ is a player attribute, but primarily affects the player's character. Class determines the initial attributes and skills of most player entities and character entities

Classes can be used to differentiate between player gameplay roles or categories, such as player abilities, character skills, and development paths

# II. Functions of Classes

The main function of a class is to coordinate and encapsulate the functionality of multiple modules. Simply put, it packages a complete set of configurations and uniformly modifies the configurations on both players and characters when switching classes. Except for the class level, other data will only be overwritten once during class switching. Creators (Craftspeople) can still use Node Graphs and other methods to modify player and character data afterward. For example: when Class 1 is activated for a player, the Normal Attack is replaced with Skill 1 by default, but you can still use Node Graphs to switch Skill 1 with other skills later

# III. Editing Classes

## 1. Entry Point for Editing

The entry point for editing classes can be found under the Class tab in Combat Preset, as shown in the graph:

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/0c7449cb-7c79-4ea8-8aa6-0f0cac4914dd.png)

## 2. Create New Class Templates

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/dd449365-47a5-4e31-988f-19f514fab463.png)![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/25f24afb-fb8b-4af9-854f-fd71d7fa8822.png)

Click the "Create Class" button and click Confirm in the pop-up to create a new class template

# IV. Class Parameter Settings

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/c76d2c2c-4216-404f-a3f6-d124d2cea043.png)

## 1. Basic Settings

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/8fe30e75-61af-4dba-8323-841053eeacbe.png)

_Select Camera_: Choose a camera template. When the player switches to this class, the camera will be replaced with the template set here

_Select Layout_: Select a main screen layout. When the player switches to this class, the main screen layout will be replaced with the template set here

_Scan Tag Recognition Rules_: Rules for filtering active units from all available scannable objects

Distance From Center of FOV: On-screen coordinate system, the closer to the screen center, the higher the priority

_Actual Position Distance_: In the world coordinate system, the closer to the local character's position, the higher the priority

_Allow Jump_: Whether the character of this class accepts jump inputs

_Allow Sprint_: Whether the character of this class accepts sprint inputs

_Allow Climb_: Whether the character of this class can climb. Note that when climbing is disabled for this class, the character cannot climb even if the collision of objects is set to climbable

_Allow Glide_: Whe ther characters of this class can deploy wind gliders and glide in the air

## 2. Level Settings

The class _level_ can be roughly considered as the character's level. When switching classes, the character's level will change accordingly. Class levels have the following characteristics:



Character level synchronizes with class level



During a single playthrough, players can switch between multiple classes. The levels of these classes will be recorded. For example: if Player 1's Class 1 is level 5, when switching to Class 2 and then back to Class 1, Class 1 will remain at level 5, and the class experience will be restored to its value before it was switched



The initial class creation level can be overwritten once on the player template, and this level will be set for the player during stage initialization

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/48bc4dec-416b-4d48-8d89-5e8356d835cb.png)

The level module defines the level cap for this class, as well as the EXP configuration required for each level up

_Level_: The character's class level when a player first switches to this class during gameplay

_Maximum Level:_ The highest level that this class can reach

_Level-up EXP_: Describes the experience required for each level up of the class. Supports two configuration methods

_Linear Formula_: Provides a fixed formula where EXP needed for a level = current level × constant 1 + constant 2, Constants 1 and 2 are configurable

_List Configuration_: Use a two-dimensional table to precisely define the EXP required for each level, as shown below:

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/2a2f7f29-3c34-4cbb-ae59-0eda78ddcadc.png)

## 3. Basic Battle Attributes

The class attributes will directly affect the corresponding player's character. Conversely, base combat attributes cannot be configured on player templates

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/6840d5da-1029-4a6c-a093-598d84693a4b.png)

_Base HP_: The default HP value without attribute growth stacking

_Base ATK_: The default ATK without attribute growth stacking

_Base DEF_: The default DEF without attribute growth stacking

_Attribute Growth_: Defines how much attributes increase with level ups. This currently supports three types:



_No Growth_: Attributes do not increase with level, meaning the attributes remain at their base values regardless of level



_Default Growth Curve_: Uses the default growth curve, which can be previewed by viewing the growth curve, but cannot be modified

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/b95fbdca-8909-471b-96a8-23393b4dc14b.png)

The growth curve formula is as follows:

Final HP = Base HP × Level HP Multiplier

Final ATK = Base ATK × Level ATK Multiplier

Final DEF = Base DEF × Level DEF Multiplier



_Custom Growth Curve_: The calculation rules for custom growth curves are the same as the default curve, but creators (Craftspeople) can freely configure them through the growth curve editing button

_Max Stamina_: The maximum value that this class's stamina can reach

## 4. Aggro Configuration

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/e9765e2a-30b3-4c76-aed8-a51aa3438964.png)![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/f4620219-f346-4525-b953-2c3aeae823b8.png)

If "Custom" is selected as the aggro type in stage settings, you can configure the aggro multiplier

## 5. Unit Status

The _unit status_ added by the class automatically applies the configured unit status to the corresponding character when the player switches to that class. For details about unit status and related configurations, please refer to the [Unit Statuses](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh6rh59iil2i) documentation

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/e8714922-0c36-4fdd-897f-2c591549b37e.png)

## 6. **Interrupt Resistance** Configuration

Characters have three Hyperarmor-related statuses: **Interrupt Resistance Status, Interrupt-Vulnerable State,** and **Protected Status**, as well as an _Interrupt Threshold_ that affects status changes



**Interrupt Resistance Status**

When not hit, the character's Interrupt Threshold starts at 0, and they are in a Interrupt Resistance Status

While in the Interrupt Resistance Status, when hit by any Interrupt attack (attacks with Interrupt Threshold greater than 0) that does not exceed the Interrupt Threshold limit, the character will only show hit reactions without being knocked back or launched. Meanwhile, the current Interrupt Threshold increases by the incoming attack's interrupt value (the actual increase is also affected by the Interrupt Resistance multiplier of the unit's current status)

While in the Interrupt Resistance Status, the Interrupt Threshold will decrease according to the Interrupt Threshold decay rate per second until it reaches 0



**Interrupt-Vulnerable State**

When the Interrupt Threshold reaches its maximum, enters into a Interrupt-Vulnerable State

In the Interrupt-Vulnerable State, the Interrupt Threshold remains at its maximum threshold and will neither increase nor decrease

When hit by a Interrupt a ttack, the target may be knocked back or launched (depending on the launch force of that attack). The attack that causes the Interrupt Threshold to reach its maximum will also cause a knockback or launch effect

The Interrupt-Vulnerable State lasts for several seconds, as set by the Interrupt-Vulnerable State recovery time



**Protected Status**

After the Interrupt-Vulnerable State ends, enter the Protected Status

While in the Protected Status, the Interrupt Threshold remains at 0 and will not increase or decrease

When hit by Interrupt Attacks, you will not be knocked back or launched

The Protected Status lasts for several seconds, as set in the Protection duration

After the Protected Status ends, enter the Interrupt Resistance Status, then begin a new cycle of being in the Interrupt Resistance Status

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/d58e7441-cfa4-4c73-98b9-ed85d8d7fa40.png)

_Interrupt Value Threshold_: Determines how much Interrupt Value Damage can be taken before entering the Interrupt-Vulnerable State

_Interrupt Intake Decay Rate_: The amount of Interrupt Value that decays per second while in the Interrupt Resistance Status

_Interrupt Vulnerability Duration_: The duration of the Interrupt-Vulnerable State, after which it enters the Protected Status. Can be 0

_Protected Duration_: The duration of the Protected Status, after which it will enter the Interrupt Resistance Status. Can be 0

# V. Class Skills

The class-specific skills attached to the class. When players switch to this class, the character's skills will automatically switch to the skills set for that class

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/d41c1b4c-4ced-48d8-9be5-b3c2162c39a7.png)

It should be noted that the skills configured in the class template will be considered as the class's default skills. After switching the class, you can still replace skills with other skills through Node Graph nodes. When using the "Initialize Character Skills" node, the character's skills will be restored to those configured in the class template

# VI. Class Node Graph

The class Node Graph. When switching to this class, the system will automatically apply the pre-configured node graphs to both the player and character, as defined in the template. The editing interface is located under the Node Graph tab:

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/a5cb0072-e7e7-4d4f-8070-6dd98466804b.png)

Class Node Graphs apply unit support for players and characters

# VII. Using Node Graphs to Modify Classes

Related Event Nodes

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/0b1aecf1-8fcd-4c94-9841-692cc403b151.png)

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/c8c617d7-14ad-49be-bc79-b7a0e1abe364.png)

Modify Class Experience

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/bd443b05-ab4e-4560-9a6e-f47e2111b966.png)

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/2b38d46a-88ac-40e4-8f7d-c30eb32af3c6.png)

Modify Player's Class

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/c11c5b00-23dd-4290-b57c-40de82352cbc.png)

Query Class

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/624cd7d7-70a6-4000-a976-afaeefd695fe.png)

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhakeo0qiy6w/76f21528-ffc3-4c79-a848-508625068196.png)

[Skills](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho81frl33im)[Unit Status](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6rh59iil2i)

1
