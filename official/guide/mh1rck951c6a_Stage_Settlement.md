---
id: mh1rck951c6a
title: Stage Settlement
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhx1du08nhwo
language: en
scope: guide
crawledAt: 2026-05-31T16:36:18.526Z
---

# Stage Settlement

# I. Definition of Stage Settlement

_Stage Settlement_ is an action triggered from the Node Graph. Once settlement is triggered, the entire stage will end, and the settlement result will be passed to the _Peripheral System_ to update the data related to the _Leaderboard_ and _Rank_

# II. Stage Settlement State

The stage settlement state can be dynamically updated during gameplay. After invoking the stage settlement node, results are settled based on each player’s current settlement state

The stage settlement state is a player attribute that consists of two fields

_Escape Validity_: When escape permitted is "False", the player's settlement state will be set to "Escape State"

_Settlement Status_: This field is only meaningful when escape permitted is "True". It has three possible states: "Victory", "Defeat", and "Undefined", which serve as the criteria for adding _rank points_

_Victory_: When settling a stage in this state, you will receive the victory points according to the corresponding scoring template

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/8340e650-0fea-4e88-9953-24311bddb431.png)

_Defeat_: When settling a stage in this state, receive the defeat score according to the corresponding scoring template

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/fa75220c-10de-4d6e-aa05-0aa0b4bdd6bf.png)

_Undefined_: The default state of players. Grants the undecided score defined by the corresponding scoring template when a stage is completed in this state

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/75d63d1c-298f-4977-b3cb-e7ad6076c312.png)

# III. Stage Settlement Display

The stage settlement display determines how the match results will be presented. This is only shown during a match and does not affect the peripheral system

Click [Stage Settings] in the system menu to enter the Stage Settings interface

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/3760d2ef-43e8-4187-b560-182c551f7aa3.png)

Configure stage settlement settings in the Stage Settings interface

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/b32ee7a1-649f-4e14-a28b-37274495f51c.png)

_Settlement Screen Type_: Determines the interface display style during stage settlement, divided into faction settlement and personal settlement

_Faction Settlement_: Stage results are settled by faction

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/69511215-1b6f-4142-82c1-1c0f5cdad12f.png)

_Personal Settlement_: Stage results are settled individually

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/cf34df81-93df-44d9-994a-51738eb9aa61.png)

_Enable In-Game Ranking_: When enabled, use the Ranking Settings node to edit the display order of individuals or factions during the settlement phase

_Ranking Value Comparison Order_: Determines the rule for displaying rankings, divided into ascending and descending order

_Low to High_: Lower ranking values are displayed at the top

_High to Low_: Higher ranking values are displayed at the top

# IV. Stage Settlement Management Using Node Graphs



Settle Stage

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/0dc39e5c-a331-4a1a-9bac-faf16eb8ea63.png)



Set Player Settlement Ranking Value

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/dfdae662-782c-4028-8046-9cbfad9d0900.png)



Set Faction Settlement Ranking Value

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/701a0431-d618-4148-85c1-8d95506bf11f.png)



Set Player Settlement Success Status

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/59606d8c-b990-486d-99d2-7d382578f0b6.png)



Set Faction Settlement Success Status

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1rck951c6a/7782e787-07a2-4e90-84f4-2ad3c16871fe.png)

[Achievements](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh65jrr2yj3i)[Wonderland Gift Box](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjdhpi4sd10)
