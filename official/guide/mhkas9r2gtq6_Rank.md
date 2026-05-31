---
id: mhkas9r2gtq6
title: Rank
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhf45sisuup8
language: en
scope: guide
crawledAt: 2026-05-31T16:33:20.146Z
---

# Rank

# I. Rank Functions

The _Rank_ Function allows creators (Craftspeople) to define player rank points within a stage. During stage settlement, players will receive different rank points based on different _settlement status_. The points for each state can be customized by the creator (Craftsperson).

When other players browse the stage information in the main hall, they can see recorded ranking information, as shown in the graph below:

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/a4a1b584-498f-4aae-b4a6-bd096eed4500.png)

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/ceb56855-b135-4125-ab5c-a70c2d17c73f.png)

At the end of the match, players' rank points will be calculated accordingly

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/6776542f-992b-43c0-a54e-382afebc6a56.png)

# II. Editing Score Groups

Click [Manage Peripheral System] in the System menu to enter the Peripheral System Settings interface

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/9fa6271b-d2f7-4bd9-b54e-2c304eae0c48.png)

In the Peripheral System Settings interface, go to the Rank tab to configure Rankings-related settings

Rank points are modified through preset score group templates, with each player in the match using one score group template. Click the "New Scoring Group" button in the bottom right to create a new score group template

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/0719dcdc-a3f2-465e-8222-18e86d7869d2.png)

_Enable competitive ranking?_: Choose to enable either the Leaderboard or Rank Function

_Enable in-room score calculation:_ Whether to allow rank points adjustments when players play this stage through room teams instead of matchmaking

_Craftsperson's Message_: Allows creators (Craftspeople) to write detailed Rank Points Scoring Rules that will be displayed in the stage information interface outside of matches

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/4a0750d0-e13b-4a6f-a7fb-8b779def076f.png)

_Score Group Settings_: Specific point value settings for each score group template

_Score Group Name_: Can be customized, used by creators (Craftspeople) to distinguish between different score groups

_ID_: The identifier for this score group, used to identify when modifying score group data within a node graph

_Victory Score_: Rank points earned when a player settles with the victory state

_Defeat Score_: Rank points earned when a player settles with the defeat state

_Undecided Score_: Rank points awarded when a player completes a stage in the undefined state

_Escape Score_: Rank points earned when a player settles with the escape state

_Players Included_: Which players this score group applies to

# III. Rank Score Template Configuration Suggestions

It is recommended to configure the scores according to the expected duration of the gameplay and the actual playing experience, referring to the following score table.

Expected Gameplay Duration (minutes)Victory Defeat Undefined Escape
0-2 20-5 0-20
2-4 40-10 0-40
4-6 60-15 0-60
6-8 80-20 0-80
8-10 100-25 0-100
10-15 120-30 0-120
15-20 140-35 0-140
20-30 160-40 0-160
30-40 180-45 0-180
40-999 200-50 0-200

# IV. Special Situations for Rank Score Handling

## 1. Fleeing Penalties in Special Circumstances

Players may flee for various reasons, such as a large number of teammates fleeing or AFK, disconnection due to network issues, or the match becoming unplayable due to a significant power imbalance in the later stages. Creators (Craftspeople) can handle fleeing penalties based on the actual situation of the stage.

## 2. Win Streak

When players achieve consecutive wins, they can be given additional score rewards based on a certain percentage of their victory points.

## 3. Consecutive Escapes

When players escape consecutively, additional penalties can be applied.

## 4. Rank Protection

It is recommended to implement a rank protection mechanism. For example, if a player reaches the Silver rank and losing points would cause them to drop to the Bronze rank, they should be protected from dropping.

If any of the above special handling measures are implemented, it is suggested that creators (Craftspeople) explain them in the rank-related announcements.

# V. Node Graph Management of Score Group Data



Switch the scoring group that affects playher's competitive rank

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/f9825363-3e25-4511-a10f-6a4abbdf1b2f.png)



Set Player Rank Score Change

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/40a682cf-36f8-43b0-a1ee-611441ae5775.png)



Get Player Rank Score Change

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/6cd58249-db74-4fd7-a967-4d9bebc91f5d.png)



Get Player Rank Info

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkas9r2gtq6/343d6422-6ce0-45ca-a394-3bb0f9ab6152.png)

[Leaderboard](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho2rt9ir6ay)[Achievements](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh65jrr2yj3i)
