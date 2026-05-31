---
id: mhzr5n9jq3ju
title: Entity Deployment Group
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhqmrlr6h58e
language: en
scope: guide
crawledAt: 2026-05-31T16:46:17.824Z
---

# Entity Deployment Group

# I. Functions of Entity Deployment Groups

_Entity Deployment Groups_ can be used to quickly manage of multiple entities, and can batch create and batch destroy entities through related nodes.

You can use Entity Deployment Groups to quickly locate all units belonging to that Entity Deployment Group.

All unit types with physical entities in the scene can be assigned to an Entity Deployment Group, including: _Creations, Characters, and Objects_

Additionally, _terrains_ can also be assigned to Entity Deployment Groups

The same entity can belong to multiple Entity Deployment Groups.

# II. Global Definition of Entity Deployment Groups

Before using the Entity Deployment Group, you need to define it globally in the Entity Deployment Groups Management Tool

In the system menu, click [Manage Entity Deployment Groups] to open the Entity Deployment Groups Management Tool

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/85a5119f-e049-4fd6-8144-752fc43738e8.png)

The left side shows the Entity Deployment Groups Management bar, where you can browse existing Entity Deployment Groups or Click [Add Entity Deployment Groups] to create a new one.

After selecting an Entity Deployment Group, you can configure its settings in the details panel on the right and view the content list of that Entity Deployment Group

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/6b5423f6-8120-4478-8e14-7597680faf36.png)

The Entity Deployment Groups Management bar allows you to create new tabs and categorize Entity Deployment Groups by tabs

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/1692199e-3aea-4d7c-9fce-e19931aef25c.png)![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/a957c2f3-f035-4fef-9220-572f9b4b1bea.png)

# III. Managing Entity Deployment Groups

## 1. Add Entities to Entity Deployment Group



In the Terrain Editing tab, right-click on the terrain to add it to the Entity Deployment Group from the pop-up menu.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/def2e6ab-3b5a-4fc2-815b-f84be0868e6c.png)



In the Entity Placement tab, right-click an entity (hold Shift and left-click to select multiple entities) and choose Add to Entity Deployment Group from the pop-up menu.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/420ebc5a-33bf-4784-824c-c5e4630f2c98.png)



In the Entity Deployment Group Details interface, click [Select in Scene] in the bottom right corner to enter selection mode. You can quickly add entities to the current group by left-clicking to box select or clicking directly.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/350a6bbe-3750-478f-b667-4997c995d693.png)

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/f4d5c2a2-913b-442b-81ba-2966517b19a5.png)

## 2. Entity Deployment Group Details Interface Settings

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/913a3b8f-fa48-4d45-8dfc-c6034c103b07.png)

_Entity Deployment Group Name_: Can be customized to distinguish between different Entity Deployment Groups

_Index_: The unique identifier of this Entity Deployment Group, used for identification when modifying Entity Deployment Group data in a Node Graph

_Initial Create_: Determines whether the terrain and static objects within this Deployment Group are created alongside the stage.

Note: If either an Entity Group or an individual entity has **Initial Create**enabled, that entity will be created at the start of the stage.

Example: Entities A and B are both in Entity Group G. Entity A has **Initial Create**enabled, while Entity B does not.

If Entity Group G has **Initial Create**enabled, both A and B will be created alongside the stage.

If Entity Group G does not have **Initial Create**enabled, only Entity A will be created alongside the stage.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/a27f01e6-52aa-45d1-a0ed-ce8971fd9d69.png)

_Content List_: Lists all units contained within an Entity Deployment Group

Right-click on a unit to remove it from the group or swap it to a different group

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/ad54c3b1-47a6-4904-a823-d5b4e02aa66a.png)

# IV. Managing Entity Deployment Groups from the Node Graph



Get Currently Active Entity Deployment Group List

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/1fdcf496-4c24-4aa7-a424-7c025d078098.png)



Activate/Disable Entity Deployment Group

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzr5n9jq3ju/af1eb6cc-0a75-4665-af03-6dad3e43ed4e.png)

[Unit Tag](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhzldmiwdgu4)[Load Optimization](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhlb1vivioys)
