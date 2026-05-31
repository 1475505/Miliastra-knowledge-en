---
id: mh7sg60j65mw
title: Stage Settings
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhn9vpia00qc
language: en
scope: guide
crawledAt: 2026-05-31T16:36:12.079Z
---

# Stage Settings

# I. Entry Point Location

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/4985a5d7-ec9d-41c5-acec-8641cc9ee408.png)

Click the System Menu button (top-left) to open the menu interface

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/9ed7825b-0b5e-479d-9312-f1f12c198023.png)

Click [Stage Settings] to open the Stage Settings interface for overall stage configuration

# II. Feature Details

## 1. Basic

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/b1cfd6d8-21c9-469b-85d0-0faf74f10db3.png)

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/5d3463f1-3b9c-4758-ab3a-f3217846a5c9.png)

The [Basic] interface provides common stage settings for configuration

### (1) Effective Scene Range After Activation

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/ba614fbd-7f27-4ca5-9ddb-9887ff20a490.png)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/b3bbd4d2-dfa3-4b45-8158-836f0c690dc0.png)

a. Edit the stage's effective range; content outside the range will not take effect

b. Click "Custom Range" to define the stage's effective range

### (2) Level of Stage Environment

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/3bfb0274-1fb8-400b-8b15-c7f9371a5858.png)

a. Environment Level affects the damage coefficient of Dendro/Electro Elemental Reactions triggered by non-Character sources — the higher the level, the higher the coefficient

b. Related Elemental Reactions include Overloaded, Superconduct, Electro-Charged, Burning, Bloom, Hyperbloom, Burgeon, Aggravate, and Spread

c. Range: 1 - 120. It's recommended to match Character Level and Monster Level

d. After enabling "Enable Full Bloom Damage", Bloom reactions will deal full damage to all units by default.

### (3) Current Number of Permitted Players

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/8b27adcc-38be-4bb0-a916-e44c83003dd1.png)

Jump to Player Count settings to configure how many players can enter the stage

### (4) Stage Entity

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/4d0bd489-103c-48a9-9e63-e9fe1ca8803a.png)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/8aa9c1ce-ac3d-485e-a875-562e0d7d9654.png)

a. Objects created together with the stage cannot be added or removed. They are the only objects that can monitor Down events.

b. Click [View] to jump to the stage entity's location in the scene and edit it there

### (5) Time Settings

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/fb13ac02-9bae-447b-a5d5-5ed988739599.png)

Configure the initial time and time flow rate when the stage starts; time affects the environment

The maximum flow rate is 1 second = 60 minutes

### (6) Load Optimization

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/53d75514-8635-41d3-b52f-d346ca28a4ff.png)

Used to determine load requirements for this Save; high load may prevent some devices from running normally

### (7) Do Not Run If Out Of Range

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/5e8326f2-d527-4603-b679-a90340ae90e7.png)

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/53d03680-495f-4ab8-a825-ad2f162b10e1.png)

a. While the stage is running, entities with [Load Optimization] enabled will stop running on the player's client when beyond a certain distance

b. Control whether an object is affected via [Object Editing] -> [Load Optimization]

c. For detailed rules, see [Load Optimization](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhlb1vivioys)

### (8) Aggro Type

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/0922d2e9-8243-4ce1-b61a-8a3ef3209e88.png)

a. Default: Follows classic aggro rules. Nodes cannot query or modify aggro parameters

b. Custom: Allows aggro settings for objects, creations, classes, and ability units; nodes can query and modify aggro parameters

### (9) Shield Settings

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/f02d6bf3-bc26-4436-a9c6-d1459c222f5f.png)

Shared Calculation: Damage is absorbed by each unit status.

Individual Calculation: Each unit status calculates absorption separately; the highest absorption applies

### (10) Early Exit Protection

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/fc6f6d45-4ffe-49fb-8251-dbabdb10eab5.png)

You can configure the corresponding exit protection based on gameplay requirements

Enter a value between 0-60 seconds, which will only take effect during actual gameplay

The actual duration of the exit protection is determined by the time when the stage is generated

## 2. Faction

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/89985f75-d639-4f63-bbb0-07c033d47e63.png)

Used to set the player's current faction. For details, see [Factions](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhe1ixri46ta)

## 3. Spawn Point

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/01194f2d-9b3b-4630-b808-c758a3c7e682.png)

Set the player's spawn point

### (1) Share Spawn Point

When enabled, different players may use the same spawn point

### (2) Spawn Point Name

You can customize the name of this spawn point to differentiate it from others

### (3) Apply to Character Template

Choose which player templates can use this spawn point

### (4) Select Point

Select a Preset Point in the stage and set it as the Spawn Point. For details, see [Preset Points](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhdyy7ico090)

### (5) Add Spawn Point

You can add additional Spawn Points; new Spawn Points function exactly the same as the default Spawn Point 1

## 4. Revive Point

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/32a4490e-5ed7-49e3-95c9-c5e906c510f4.png)

Set the player's Revive Point. The Revive Points interface is empty by default. Click [Add Revive Points] to add Revive Point 1

(1) Priority: Revive Points with higher priority are used first; larger numbers indicate higher priority

(2) Select Point: Choose a Preset Point in the stage and set it as a Revive Point

## 5. Player Count Settings

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/4b2d2a42-0129-4bcd-afe1-f8aaeb3abc83.png)

Purpose of grouping:

1.

During matchmaking, if a team exceeds the group's maximum player limit, the stage cannot be matched

2.

In a room, players must meet the required group size to start the game

Quick Apply Current Faction Data: After clicking Apply, groups are created based on the number of players in each faction

_Player Count Type_: Determines the player-count rule for this group

3.

_Fixed Player Count_: Th e group size is fixed

4.

_Custom Player Count_: The group size can vary

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/4cb32e1b-2acf-47c2-990e-48fdc5096256.png)

_Number of People_: The number of players in this group

_Players Included_: Configure players with the corresponding IDs for this group

_Required Group_: When disabled, the game can start even without this group

### Current Matching Strategy:



First, prioritize placing players into the necessary groups where the current number of players is closest to meeting the minimum player requirement.



Then, prioritize placing players into the necessary teams.



After all necessary teams are full, place players sequentially into the groups.

## 6. Loading Screen

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/7e66302c-b9ef-43ba-94b0-997eef355e65.png)

Edit what appears on the loading screen when entering the stage

_Select Resources:_ Upload an image to use as the loading interface background

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/1b3c689d-9acb-4a88-b938-b3c79cb4a98b.png)

_Title and Description_: Text displayed on the loading interface

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/baba2d10-6173-41a4-b60d-c3b077e36350.png)

## 7. Settlement

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/92772458-6d24-47e3-9faa-b7a7548ae6e7.png)

Configure the Settlement Screen

Settlement Screen Type:

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/68b88507-d227-4428-b6d4-2949af0ab290.png)

5.

Personal Settlement: The settlement screen uses an individual performance layout

6.

Faction Settlement: The settlement screen uses a faction score layout

_Enable In-Game Ranking_: Determines the display order for Personal/Faction Settlement; ranking values are set via nodes

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/48d62308-fd31-459f-b1cf-b4d221a9d626.png)

_Related Node Graphs_: If a node graph configures settlement-related nodes, you can jump to it here

## 8. Terrain Navigation

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/332fce21-18ba-4916-bc12-04bf945e8841.png)

The navmesh affects the pathfinding capabilities of creations. It is recommended to re-bake the navmesh whenever you modify the terrain or placement of static objects. 

If there is no need for creation pathfinding, you can disable the upload switch

## **9. Optimization Option**s

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7sg60j65mw/2ee13b99-6e5d-4c88-9499-da0b260de8f7.png)

Optimizes collision trigger detection for off-screen objects and unexpected player exits. This may increase overall system load

[Combat Preset](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhexhcr1qjh2)[Test Play](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhie54ik9ovg)

1
