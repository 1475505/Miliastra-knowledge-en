---
id: mhq6byic6xlo
title: Player
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhctmgi51lpo
language: en
scope: guide
crawledAt: 2026-05-31T16:31:17.765Z
---

# Player

# I. The Concept of Player

_Player_ is a special abstract entity type used to describe the "Character Ownership Concept" in the game, such as:

In Teyvat, multiple characters can be added to the player's team.

In Beyond Mode, each _player_ corresponds to only one _character_.

# II. Player Configuration

You can reference player-specific configurations through the player template. The entry point for template configuration is shown below:

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq6byic6xlo/2940019b-4730-48ca-9a7e-0e61099ab4ca.png)

Click _New Template_ to create a new player template

## 1. Basic Information

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq6byic6xlo/39af666e-e220-4315-a5b7-430310cab66a.png)

Basic Information Tab: Configure all available player basic information

_Effective Target_: Determines which players this template applies to

_Level_: Override the initial level of the class

_Spawn Point_: List of available spawn points for players, see preset points documentation[Preset Points](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhfvn30ctm9c)

_Initial Class_: The initial class for this player template, see class definitions in the Class document[Class](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhodlcrpht3q)

_Revive_: The revival rules that apply to the player, see the Revival Rules document[Revive](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh796lr44x0e)

_Special Knockdown Damage_: The percentage of HP deducted when a character is defeated due to special circumstances such as drowning or falling damage

## 2. Components

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq6byic6xlo/50bc8fa1-33fd-409d-b74a-152fd6e044e5.png)

Components Tab: Add or view components attached to the player entity

Overview of Available Components for Player Entity

[Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhso1b9wjica)

[Global Timer](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhawd6rl5kpy)

[Unit Status](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhd7nxrfa8im)

## 3. Node Graph

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhq6byic6xlo/627e7092-b9c2-4e89-b92d-106ce5d80b55.png)

Node Graph Configuration Tab: Add or view node graphs attached to the player entity

# III. Runtime Characteristics

## **1. Non-Physical Entity**

The player entity is a pure logical entity

## **2. No Placement Information**

Player entities are not directly placed in the scene, therefore there is no placement information

## **3. Life Cycle**

The player entity is created during stage initialization and removed when the stage is destroyed

When the user actively exits and returns to the lobby, the player entity will be removed

[Character](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3ecor1x5cm)
