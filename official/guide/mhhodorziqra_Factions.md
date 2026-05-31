---
id: mhhodorziqra
title: Factions
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhe1ixri46ta
language: en
scope: guide
crawledAt: 2026-05-31T16:23:22.038Z
---

# Factions

In order to create competitive gameplay, entities are divided into different groups where players belonging to the same group share the same game objectives. This group is called a _faction_

In team-based competitive games, factions can serve as criteria for settlement objectives or score calculation

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/86e83246-8b7c-4785-9b2d-8a3524a2eead.png)

# I. Global Definition of Factions

Before selecting a faction in _Basic Info_, you need to first define the required factions in the faction tab of the stage settings

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/c3949bad-8647-4b2b-8f4b-6436f60321eb.png)

_Faction Name_: The name given to this faction

_Default Faction Unit_: New players/objects/creations will be categorized into the corresponding default faction

_Players Included_: A list of players representing who initially belong to this faction

_Entities Included_: A list of objects and creations that initially belong to this faction

# II. Faction Relations

Between any two factions, there must exist two types of relationships: _Hostile_ and _Friendly_, which can be configured through the _Faction Relations_ in the stage settings

Note that faction relations are one-way. Faction 1 may be hostile towards Faction 2, but Faction 2 isn't necessarily hostile towards Faction 1. There could be situations where Faction 2 is friendly towards Faction 1, in which case only entities from Faction 1 can attack Faction 2, while entities from Faction 2 cannot attack Faction 1

For example, as shown in the graph: The initial player faction is hostile towards both the initial object faction and initial creation faction, therefore they can directly attack entities (characters, creations or objects) belonging to these two factions

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/c4e5008d-cf80-4d93-bf34-527d0dd959cd.png)

In other systems, faction-related settings work according to the faction relations defined in the stage configuration. For example, the ability unit in the graph below will correctly target enemies from hostile factions

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/f84903d0-fb90-401b-87a4-d8070049ca2c.png)

# III. Default Faction Configuration

Each faction can be configured with a _default faction unit_. When an entity of this object type (such as players and objects shown in the image) is created with a default faction (faction value of 0), it will be assigned to the default faction for that entity type

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/21bb9a1c-3340-4bd4-99e8-b49fc6551c5a.png)

For example, in the graph above, if no faction is overridden for this Stone Ball prefab when it is created, it will be created with [Initial Object Faction] (because the default faction for objects is Initial Object Faction)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/c77215cf-d3e9-4dd9-8928-1df97ffc5145.png)

# IV. Using Node Graph to Control Player Factions

Entity Faction Change Events

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/fabca72f-ef63-4b1a-8458-48b64b64b84c.png)

Modify Entity Faction

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/c8812994-edf1-4b47-9115-f35b87e65640.png)

Query Entity Faction

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/5b1c70c4-31ff-4128-81d1-8c9b42405665.png)

# V.Factions in Classic Mode

Compared to Beyond Mode, factions in Classic Mode are subject to certain restrictions:

All players and their characters belong to the **Player Faction** and cannot be modified.

All creations belong to the **Creation Faction** and cannot be modified.

Objects can be configured to belong to the **Player Faction**, **Creation Faction**, **Object Faction 1**, **Object Faction 2**, or **Object Faction 3**.

All entities cannot dynamically change factions, so faction modification-related execution and event nodes cannot be used.

Relationships between factions cannot be modified.

**The relationships between factions in Classic Mode are as follows:**

Rows represent the initiating party, and columns represent the receiving party.

|  | Player Faction | Creation Faction | Object Faction 1 | Object Faction 2 | Object Faction 3 |
| --- | --- | --- | --- | --- | --- |
| **Player Faction** | Friendly | Hostile | Hostile | Hostile | Friendly |
| **Creation Faction** | Hostile | Friendly | Friendly | Friendly | Hostile |
| **Object Faction 1** | Hostile | Hostile | Friendly | Hostile | Friendly |
| **Object Faction 2** | Hostile | Hostile | Hostile | Friendly | Friendly |
| **Object Faction 3** | Friendly | Hostile | Friendly | Hostile | Friendly |

The hostile relationships between the various factions can be represented by the following directed graph.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhodorziqra/79882612-99cf-4814-a9af-5058c1c2ec07.png)

Object Faction 3 is typically used for objects that are friendly to the Player Faction and can assist characters in attacking constructs. Object Faction 1 is used for regular objects. If objects need to be hostile to Object Faction 1, Object Faction 2 is generally used for this purpose.

[Model](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhrutdio6904)[Unit Tag](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhzldmiwdgu4)
