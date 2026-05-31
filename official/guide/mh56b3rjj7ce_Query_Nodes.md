---
id: mh56b3rjj7ce
title: Query Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk4furvds12
language: en
scope: guide
crawledAt: 2026-05-31T16:33:05.300Z
---

# Query Nodes

# I. General

## **1. Check Target Position Pathfinding Availability**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/5d1e84da-6c5e-4317-b41d-22d5463cbfbc.png)

**Node Functions**

Check whether a Creation can reach the current Target Point using normal pathfinding

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Is Pathfinding Achievable?Boolean

## **2. Check the Coordinates When Entering Battle**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/d446c295-e1e6-44ac-bca4-f3f6dfd490c9.png)

**Node Functions**

Query the Coordinate Points when a Creation enters battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Entering Battle Position 3D Vector
Output Parameter Entering Battle Rotation 3D Vector

## **3. Check If Entity Is on the Field**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/b98b38e3-1a2f-4699-8d41-deb265ecfa8e.png)

**Node Functions**

Check whether the Target Entity is present. Note: even if a Character Entity is in a Down state, it is still considered present

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter On the Field Boolean

## **4. Check the Vertical Angle From Self to Target**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/4cfe7d99-0aae-40bd-be46-22c17fc5d744.png)

**Node Functions**

Query the vertical angle between the Creation and the Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Vertical Angle Floating Point Numbers

## **5. Check the Vertical Distance From Self to Target**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/80625983-ee8b-4303-82ab-34419a2fb135.png)

**Node Functions**

Query the vertical distance from this Creation to its Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Vertical Distance Floating Point Numbers

## **6. Check the Distance From Self to Target**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/227eb9f4-0dcf-45b9-b5eb-da2fe7f84677.png)

**Node Functions**

Query the distance from this Creation to its Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Distance Floating Point Numbers

## **7. Check the Horizontal Angle From Self to Target**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/853f1156-1639-49ee-895e-3716a16f99f8.png)

**Node Functions**

Query the horizontal angle between this Creation and the Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Horizontal Angle Floating Point Numbers

## **8. Check the Horizontal Distance From Self to Target**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/fe8b8e8d-fa10-4aa6-b8b0-a7dd8f8fd725.png)

**Node Functions**

Query the horizontal distance from this Creation to the Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Horizontal Distance Floating Point Numbers

## **9. Check Whether Self Is in Battle**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/7c4751dc-c16d-4cfa-a599-5694c5e642f0.png)

**Node Functions**

Check whether the Creation is currently in battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Whether in Battle Boolean

## **10. Check if Self Is in the Territory**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/aaa2e14c-dfbc-45fb-8f2f-72f07e474540.png)

**Node Functions**

Check whether this Creation's current location is within the Territory

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Is in the Territory Boolean

## **11. Check Whether Self Is Using a Skill**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/ba0acbb9-c5f7-43ec-b6b7-5ebe3cb30e5a.png)

**Node Functions**

Check whether a Creation is currently casting a Skill. If so, returns the index of the Skill being cast

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Is the Unit Using a Skill?Boolean
Output Parameter Skill ID Integer

## **12. Get Spawn Point Location Information**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/a1b1d530-90c5-40f9-b77a-81ed90674005.png)

**Node Functions**

Obtain the Creation's own Spawn Point information

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Spawn Point Coordinates 3D Vector
Output Parameter Spawn Point Rotation 3D Vector

1.

## Get Stage Entity

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/fc5d3764-4386-4e61-a24d-e02c23bb4cd3.png)

**Node Functions**

Obtain Stage Entities

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Stage Entity Entity

## **14. Get Target Level**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/55582510-9e08-4fc5-b83b-ec6c6ffebbca.png)

**Node Functions**

Obtain the Target Entity's current level

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Current Level Integer

## **15. Get Target ATK**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/47d2fe28-21ab-4b13-abcd-1833e45acc03.png)

**Node Functions**

Obtain the Target Entity's ATK parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Base ATK Floating Point Numbers
Output Parameter Current ATK Floating Point Numbers

## **16. Get Target HP**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/d22d4e4f-fc82-4aa2-915c-cc160938f650.png)

**Node Functions**

Obtain HP-related parameters for the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Base HP Floating Point Numbers
Output Parameter Max HP Floating Point Numbers
Output Parameter Current HP Percentage Floating Point Numbers

## **17. Get Target Entity**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/3b6a1ae1-8fd0-4546-a9a0-b31af0806e4b.png)

**Node Functions**

Obtain the Creation's current Target Entity. Valid only when the Creation has a Target.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity

## **18. Get Previous Frame Execution Tactic**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/f4402d5f-43b9-4003-920d-82287c1aa079.png)

**Node Functions**

Obtain the Tactic executed by Creations in the previous frame

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Tactic Type Enumeration
Output Parameter Tactical Context String

## **19. Get Previous Frame Execution Status**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/d99a051d-e2b1-4d60-bad0-73bb14228a5f.png)

**Node Functions**

Obtain the config ID of the [Creation Status Node Graph] executed in the previous frame before obtaining the Creation Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Status Node Graph Configuration ID Config ID

## **20. Get Entity's Type**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/1665649d-60b7-44d4-baec-202a22827853.png)

**Node Functions**

Obtain the Target Entity's Type

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Entity Type Enumeration

## **21. Get Entity Location**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/59e6db30-7ab3-48de-a781-b39b7e00d3b3.png)

**Node Functions**

Obtain the Target Entity's Location

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Location 3D Vector

## **22. Get Entity Rotation**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/37785260-880e-4708-b5b7-8bcb2ae55b09.png)

**Node Functions**

Obtain the Target Entity's Rotation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Rotatation 3D Vector

## **23. Get Object Preset Status**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/e5eb3b63-dfda-4521-9ff3-bbae52b5e9db.png)

**Node Functions**

Obtain the Preset Status Value at the specified Preset Status index from the Target Entity. If the Entity does not have the specified Preset Status, return 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

## **24. Get Custom Variable**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/45798593-beee-4c05-9994-1f134f5f382b.png)

**Node Functions**

Obtain the Variable Value of the specified Custom Variable from the Target Entity. If the variable does not exist, returns the default value for that type

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Input Parameter Variable Name String
Output Parameter Variable Value Generic

## **25. Get Current Execution Status**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/c8872a9b-8ddd-4a67-8472-fd24783288ba.png)

**Node Functions**

Obtain the config ID of the [Creation Status Node Graph] currently being executed by this Creation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Status Node Graph Configuration ID Config ID

## **26. Get Self Entity**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/11ef28e2-83ae-4319-8648-c40f196d7e5a.png)

**Node Functions**

Returns the Entity associated with this Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Self Entity Entity

## **27. Get Self Preset Status Value**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/576ff888-c53b-465e-95f0-c10228b48276.png)

**Node Functions**

Obtain the Preset Status Value at the specified Preset Status index for this Entity. If the Entity does not have the specified Preset Status index, return 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

# II. Faction

## **1. Check Entity Faction**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/d9cf1821-c2ff-4bb7-8fb2-58b471e0655e.png)

**Node Functions**

Search for Target Entity's Faction

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Faction Faction

## **2. Query If Faction Is Hostile**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/8f21e786-98f8-464e-91d5-da34235ca0e1.png)

**Node Functions**

Check whether Faction 1 and Faction 2 are hostile

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Faction 1 Faction
Input Parameter Faction 2 Faction
Output Parameter Hostile Boolean

# III. Lists

## **1. Get Corresponding Value From List**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/02348aef-5e0e-4f66-95f8-8c186e33acd2.png)

**Node Functions**

Return the value at the specified index in the Data List. Indexes start at 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter ID Integer
Input Parameter Data List Generic
Output Parameter Result Generic

## **2. Get List Length**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/634dadc7-4070-41fe-b23c-c115d398afbb.png)

**Node Functions**

Returns the length of the list (number of elements)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input List Generic
Output Parameter Length Integer

## **3. Get Maximum Value From List**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/e4711220-3e72-4eec-8c3b-a3dc733f8469.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the maximum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Maximum Value Generic

## **4. Get Minimum Value From List**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/54af4948-7277-4dca-b3a3-89ef4edd4476.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the minimum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Minimum Value Generic

## **5. List Includes This Value**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/057a329e-56ea-4f6e-b45f-eb3aa3aabe18.png)

**Node Functions**

Check whether the specified list contains a specific value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Generic
Input Parameter List Generic
Output Parameter Result Boolean

# IV. Dictionary

## **1. Query If Dictionary Contains Specific Key**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/68708a6e-826e-4337-bd96-50d50cc561ac.png)

**Node Functions**

Check whether the specified Dictionary contains the specified Key

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Include Boolean

## **2. Query If Dictionary Contains Specific Value**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/7b70237d-19d0-4089-954a-768d0a8afc6a.png)

**Node Functions**

Check whether the specified Dictionary contains the specified Value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Value Generic
Output Parameter Include Boolean

## **3. Query Dictionary Length**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/16f8bf74-0cc4-43ce-a28e-eae382a5537c.png)

**Node Functions**

Query the number of Key-Value Pairs in the Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Length Integer

## **4. Get List of Keys From Dictionary**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/df57e699-9de8-4c2e-94c5-2132720618e4.png)

**Node Functions**

Returns a list of all Keys in the Dictionary. Because Key-Value Pairs are unordered, the Keys may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Key List Generic

## **5. Query List of Values From Dictionary**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/e1cb6d29-4d10-4dea-8c63-f8a08af84242.png)

**Node Functions**

Returns a list of all Values in the Dictionary. Because Key-Value Pairs are unordered, the Values may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Value List Generic

## **6. Query Dictionary Value by Key**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh56b3rjj7ce/8c4d9ba2-2205-45a5-ab65-5db10ea8730c.png)

**Node Functions**

Query the corresponding Value in the Dictionary by Key. If the Key does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Value Generic

[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhb5tu05hgfc)
