---
id: mhqdyt95smtm
title: 4.1.3 Farm Frenzy Gameplay Flow
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhqdyt95smtm
language: en
scope: tutorial
crawledAt: 2026-05-31T15:53:29.899Z
---

# 4.1.3 Farm Frenzy Gameplay Flow

# Introduction

## Related Information:

**Recommended Learning Sequence:**[Prerequisite Courses] → [Current Course]

**Prerequisite Courses:**This course involves features and information from the following prerequisite courses: (First-time users are recommended to study [Prerequisite Courses] for a smoother learning experience.

> [3.1 Custom Variables: Switch Object Presentation Under Specific Conditions](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhflri07dzd4)
> 
> 
> [3.3 Follow Motion Device: Create Items that Attach and Follow](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhz70x0ra8u8)
> 
> 
> [3.4 Custom Attachment Point: Preset Points That Can Follow Movement and Rotate](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh85mxrh6kfy)
> 
> 
> [4.1.1 Farming: Collection Process](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh8gqrrpzzm6)
> 
> 
> [4.1.2 Operation Hints and Feedback](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhhfcsifwb7w)

* * *

## Goal Breakdown

## Functional Logic

The following are gameplay features related to operation hints and feedback, which will be explained in combination during the course:

> ① After entering the game, all players prepare in the waiting area. The game officially starts after confirming all players are ready.
> 
> 
> ② Each game round lasts 5 minutes. When time ends, players are ranked based on their "score points", and the player with the highest score wins.

### ① After entering the game, all players get ready in the waiting area. The game officially starts after confirming all players are ready.

**Function Principle:**

Use one split location, with one serving as a preparation area and one as a game area; when players enter the game, their spawn points are all in the preparation area. After interacting with the mechanism and completing preparation, and when the system confirms there are enough players, players will be teleported to the game area to officially start the game.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/6d0bb431215c4e06a2dadb67ba7e4fc4_1757675303.gif)

**Steps:**

**1. [In-Game Editor] Add preset points in [Esc Panel - Preset Point Management], placing them in the "Preparation Area" and "Game Area" respectively.**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/fdd4397955c340e8864e236f5ea0e84b_1757675303.gif)

**2. [In-Game Editor] Bind the player's initial spawn point to the preset "Preparation Area" spawn point, so players will automatically spawn in the preparation area when they enter the game.**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/a46ea821331d41fdb73127f0ebf99501_1757675304.png)

**3. [In-Game Editor] Create 2 variables on the [Stage Entity] to check and determine the total number of players in the game and the number of players who are ready. When these two variable values are equal, the game officially begins.**

_Variable 1 - Type: Integer; Initial Value: 0_

_Variable 2 - Type: Integer; Initial value: 0_

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/8ddfbb5e4a194218adc9b741f9ab8912_1757675304.png)

**4. [In-Game Editor] Create a variable for [Player] to check and determine the player's readiness. Players who are already ready cannot ready up again.**

_Type: Boolean; Initial value: No_

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/9b31ad1197aa4282bacdb9bae3af44c5_1757675304.png)

**5. [In-Game Editor] Add a UI control to display information in a text box, informing players of their current readiness.**

_**The actual display information can be flexibly adjusted according to your needs._

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/1aa4891c5e574186bed036c289e72762_1757675304.png)

**6. [In-Game Editor] Create a preparation object and add [Components - Tab] for player to trigger preparation.**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/b35cd4d26f0c445eb0c059e925e0cda8_1757675305.png)

Additionally, effects can also be added to draw more player attention to this signpost guidance.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/639b2252310741ce800176f1af08d1a4_1757675305.png)

**7. [Miliastra Sandbox] Check all players' readiness after each player's preparation, and start the game when all players are ready.**

**Function Principle:**

When each player character is created, the stage variable "Total Number of Players in the Game" +1;

When each player is ready, the stage variable "Current Ready Players" +1 - Check if the two variables are equal - If equal, the game officially starts (Players are teleported to another location).

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Player]

Features to Implement Corresponding Configurations
Feature 1

When each player joins the game, the total player count for the stage increases by 1 Trigger Scenario When player joins the game[Event Node]: When Entity is created
Conditions//
Result Stage Total Player Count +1[Execution Node]: Use [Set Custom Variable] to make the stage variable "Total Number of Players in the Game" +1

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/4bf93cfa478e47eb86ae1cd4fbbe5eb8_1757675305.png)

The node graph is mounted on: [Preparation Platform]

Features to Implement Corresponding Configurations
Feature 2

After each player is ready, the stage's ready player count increases by 1. When the ready player count equals the total player count, the game starts (players are teleported to another location)Trigger Scenario When player joins the game[Event Node]: when the entity is created.
Condition 1 Player not ready[Flow Control Node]: Check player variable "Ready or Not".
Result 1 Player cannot ready up again after being ready[Execute Node]: Use [Set Custom Variable] to change player variable "Ready or Not" to "Yes".
Result 2 Number of ready players increased[Execution Node]: Use [Set Custom Variable] to increase the stage variable "Current Ready Players Count" by 1.
Condition 2 The number of ready players equal the number of total players[Flow Control Node]: Check if the stage variable "Total Number of Players in the Game" equals "Current Ready Players Count".
Result 3 Game starts, teleport all players to the game area[Execution Node]: Use [List Loop Iteration] + [Teleport Player] to teleport all players on the field to the game area.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/f9675f98caa84f8a8143bc189213230b_1757675301.png)

### ② Each game round lasts 5 minutes. When time ends, players are ranked based on their "score points", and the player with the highest score wins.

**Function Principle:**

After the game starts (players are teleported to the game area) — a global timer is set to count down 5 minutes — after 5 minutes, the game ends, all players are teleported back to the preparation area — score rankings are displayed.

**Effect Demonstration:**

****Text Display in Demos:**The ability to customize text display is unlocked after reaching Craftsperson Level 3. In the demo, the focus is primarily on demonstrating the effects of this feature.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/6dd08cdbecbb43eeb5bf9e105c5dba23_1757675301.gif)

**Steps:**

**1. [In-Game Editor] In the ESC panel - Timer Management, add a 5-minute global timer for later use.**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/c14d774e60f8424ba4a11f7d33cb41d1_1757675302.png)

**2. [In-Game Editor] Add [Components - Global Timer] to the stage entity.**

_**Just add the component here without additional configuration. If added in the panel, the global timer will start by default when the entity is created._

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/560ad2ec2a984be08fb96e63efcdbd70_1757675302.png)

**3. [In-Game Editor] Add one UI control to display game time.**

Select the [Timer] in the prefab template and configure it as the previously created global timer, with the type set to: Countdown.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/6471b982930a40be825b122826240aa2_1757675302.png)

**4. [In-Game Editor] Add 1 interface layout for making game-over information panel.**

_**Interface layouts are independent UI control interfaces that can be used for completely different UI displays, reducing interference from other information._

In the prefab template, select [Scoreboard] to configure each player's score = the previously set variable [Score]. Other auxiliary text hints can be flexibly adjusted as needed.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/7932361b708c49ac8cd4bdbdfb2ae923_1757675302.png)

**5. [Miliastra Sandbox] Create game timer start effects.**

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Preparation Platform]

Features to Implement Corresponding Configurations
Feature

Start timing after game begins Trigger Scenario All players complete preparation/

_**No additional configuration needed, directly use the preparation platform node graph from step ①_
Condition All players complete preparation/

_**No additional configuration needed, directly use the preparation station node graph from step ①_
Result Start Timer[Execute Node]: Use [Start Global Timer] to start the timer on [Stage]

_**Name is the set global timer's name._

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/1dea2907d7004dd4aac02959835834f0_1757675303.png)

**6. [Miliastra Sandbox] Create game-over flow.**

**Function Logic:**

After the 5-minute countdown ends — teleport all players to the preparation area — display the final score ranking information.

To achieve the desired functionality, the tutorial configures it as follows:

The node graph is mounted on: [Stage]

Features to Implement Corresponding Configurations
Feature

After 5 minutes, end player teleport and display score rankings Trigger Scenario After 5 minutes[Event Node]: When global timer triggers.
Condition//
Result 1 Teleport all players to preparation area[Execution Node]: Use [List Loop Iteration] + [Teleport Player] to teleport all players on the field to the preparation area.
Result 2 Display score rankings to all players[Execution Node]: Use [List Loop Iteration] + [Switch Current Interface Layout] to display game-over information.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/e0aa06a363234ad48891c05340b185f1_1757675303.png)

* * *

# Supplementary Materials

### Supplementary Materials

We have provided relevant project files that can be studied with [Tutorial Files - Gameplay Flow].

![Image 19](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Gameplay Flow.gil

107.7 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhmm1rr68f3i/0c637655-dd22-42b0-8daf-103077b9dbf3.gil)

[4.1.2 Farm Frenzy Control Tips and Feedback](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhhfcsifwb7w)
