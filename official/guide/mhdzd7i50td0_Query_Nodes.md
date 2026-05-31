---
id: mhdzd7i50td0
title: Query Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh1w3z96rpne
language: en
scope: guide
crawledAt: 2026-05-31T16:32:57.560Z
---

# Query Nodes

# I. General

## **1. Check Target Position Pathfinding Availability**

![Image 2](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/be43614f-1a89-4518-888d-c691a1f413f3.png)

**Node Functions**

Check whether a Creation can reach the current Target Point using normal pathfinding

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Is Pathfinding Achievable?Boolean

## **2. Check the Coordinates When Entering Battle**

![Image 3](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/b2c297f0-9df1-41a8-be73-a0016b2dc3d8.png)

**Node Functions**

Query the Coordinate Points when a Creation enters battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Entering Battle Position 3D Vector
Output Parameter Entering Battle Rotation 3D Vector

## **3. Check If Entity Is on the Field**

![Image 4](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/6148df0d-7109-4956-a2e1-629e6e40a638.png)

**Node Functions**

Check whether the Target Entity is present. Note: even if a Character Entity is in a Down state, it is still considered present

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter On the Field Boolean

## **4. Check the Vertical Angle From Self to Target**

![Image 5](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/f2a563cc-7532-4041-83fb-10f96b9301e3.png)

**Node Functions**

Query the vertical angle between the Creation and the Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Vertical Angle Floating Point Numbers

## **5. Check the Vertical Distance From Self to Target**

![Image 6](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/274ba676-7202-4c5c-bf54-0285f8a8a2ed.png)

**Node Functions**

Query the vertical distance from this Creation to its Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Vertical Distance Floating Point Numbers

## **6. Check the Distance From Self to Target**

![Image 7](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/446e27d6-0b45-4475-aedf-cee8bfe897d5.png)

**Node Functions**

Query the distance from this Creation to its Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Distance Floating Point Numbers

## **7. Check the Horizontal Angle From Self to Target**

![Image 8](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/21f03980-7524-4b56-9a59-3314019926e2.png)

**Node Functions**

Query the horizontal angle between this Creation and the Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Horizontal Angle Floating Point Numbers

## **8. Check the Horizontal Distance From Self to Target**

![Image 9](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/e34d31b0-58d1-48c6-b2a8-c1d0efbc9668.png)

**Node Functions**

Query the horizontal distance from this Creation to the Target Entity. Valid only when the Creation has a Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Horizontal Distance Floating Point Numbers

## **9. Check Whether Self Is in Battle**

![Image 10](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/fddc36da-bf3b-4309-9afd-038c9b2aa989.png)

**Node Functions**

Check whether the Creation is currently in battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Whether in Battle Boolean

## **10. Check If Self Is in the Territory**

![Image 11](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/b59ca641-330c-4d4c-aac2-bf7874a11e51.png)

**Node Functions**

Check whether this Creation's current location is within the Territory

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Is in the Territory Boolean

## **11. Check Whether Self Is Using a Skill**

![Image 12](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/50bfd75e-0c51-43fa-8bd9-c773dbd8afab.png)

**Node Functions**

Check whether a Creation is currently casting a Skill. If so, returns the index of the Skill being cast

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Is The Unit Using a Skill?Boolean
Output Parameter Skill ID Integer

## **12. Get Spawn Point Location Information**

![Image 13](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/b217d0d8-7dbf-4f87-a4f1-3716dc19c21c.png)

**Node Functions**

Obtain the Creation's own Spawn Point information

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Spawn Point Coordinates 3D Vector
Output Parameter Spawn Point Rotation 3D Vector

## **13. Get Stage Entity**

![Image 14](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/ace35cad-9cdd-469a-b081-4529347fe717.png)

**Node Functions**

Obtain Stage Entities

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Stage Entity Entity

## **14. Get Target Level**

![Image 15](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/0a688ea3-5fcc-458d-be60-41264151eaf2.png)

**Node Functions**

Obtain the Target Entity's current level

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Current Level Integer

## **15. Get Target ATK**

![Image 16](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/888d6235-0b08-4f30-bf83-429f216fe365.png)

**Node Functions**

Obtain the Target Entity's ATK parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Base ATK Floating Point Numbers
Output Parameter Current ATK Floating Point Numbers

## **16. Get Target HP**

![Image 17](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/fcb3c45d-2d7d-4965-ac99-fe08aa642c41.png)

**Node Functions**

Obtain HP-related parameters for the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Base HP Floating Point Numbers
Output Parameter Max HP Floating Point Numbers
Output Parameter Current HP Percentage Floating Point Numbers

## **17. Get Target Entity**

![Image 18](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/f9bbb9cf-e9fd-4a5a-b2fe-9c8616555d78.png)

**Node Functions**

Obtain the Creation's current Target Entity. Valid only when the Creation has a Target.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity

## **18. Get Previous Frame Execution Tactic**

![Image 19](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/fad1ef6f-bc93-4e58-ba4d-86f90838e10b.png)

**Node Functions**

Obtain the Tactic executed by Creations in the previous frame

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Tactic Type Enumeration
Output Parameter Tactical Context String

## **19. Get Previous Frame Execution Status**

![Image 20](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/281d17fa-b3d8-43d2-9eaa-8a63cba186fe.png)

**Node Functions**

Obtain the config ID of the [Creation Status Node Graph] executed in the previous frame before obtaining the Creation Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Status Node Graph Configuration ID Config ID

## **20. Get Entity's Type**

![Image 21](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/43c73673-cdce-4ee9-9bf3-3272778fc189.png)

**Node Functions**

Obtain the Target Entity's Type

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Entity Type Enumeration

## **21. Get Entity Location**

![Image 22](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/efa64324-c9fb-484b-9b3d-8a2efac2b89e.png)

**Node Functions**

Obtain the Target Entity's Location

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Location 3D Vector

## **22. Get Entity Rotation**

![Image 23](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/a3e104c1-129b-49cb-b99a-559d24581eca.png)

**Node Functions**

Obtain the Target Entity's Rotation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Rotation 3D Vector

## **23. Get Object Preset Status**

![Image 24](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/6aad8d9f-6f95-4cf8-aa4f-e1118d448cb6.png)

**Node Functions**

Obtain the Preset Status Value at the specified Preset Status index from the Target Entity. If the Entity does not have the specified Preset Status, return 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

## **24. Get Custom Variable**

![Image 25](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/f66491f9-686f-4688-bf2f-8f7a96802815.png)

**Node Functions**

Obtain the Variable Value of the specified Custom Variable from the Target Entity. If the variable does not exist, returns the default value for that type

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Input Parameter Variable Name String
Output Parameter Variable Value Generic

## **25. Get Current Execution Status**

![Image 26](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/a52b2c18-d259-486b-b265-2cd1a0dfecf4.png)

**Node Functions**

Obtain the config ID of the [Creation Status Node Graph] currently being executed by this Creation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Status Node Graph Configuration ID Config ID

## **26. Get Self Entity**

![Image 27](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/c4f4d506-8d54-4e95-9dc8-02ed2a387b4b.png)

**Node Functions**

Returns the Entity associated with this Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Self Entity Entity

## **27. Get Self Preset Status Value**

![Image 28](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/a95613ab-7c3f-4cc0-a295-cb40708e8c3d.png)

**Node Functions**

Obtain the Preset Status Value at the specified Preset Status index for this Entity. If the Entity does not have the specified Preset Status index, return 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

# II. Faction

## **1. Check Entity Faction**

![Image 29](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/4ae80c68-5674-4aea-9819-1cb6da2ec437.png)

**Node Functions**

Search for Target Entity's Faction

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Enumeration
Output Parameter Faction Faction

## **2. Query If Faction Is Hostile**

![Image 30](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/be40812f-d3b6-4c61-af2f-406f3dae9244.png)

**Node Functions**

Check whether Faction 1 and Faction 2 are hostile

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Faction 1 Faction
Input Parameter Faction 2 Faction
Output Parameter Hostile Boolean

# III. Lists

## **1. Get Corresponding Value From List**

![Image 31](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/1dde3e4e-bc83-4e5b-ab89-0d3a593ef222.png)

**Node Functions**

Return the value at the specified index in the Data List. Indexes start at 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter ID Integer
Input Parameter Data List Generic
Output Parameter Result Generic

## **2. Get List Length**

![Image 32](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/f9c45a3d-b2ee-4ff9-840c-86dd74595adc.png)

**Node Functions**

Returns the length of the list (number of elements)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input List Generic
Output Parameter Length Integer

## **3. Get Maximum Value From List**

![Image 33](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/bfa23cbc-ae60-4322-b465-544baf16b29c.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the maximum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Maximum Value Generic

## **4. Get Minimum Value From List**

![Image 34](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/98d8e2c5-af32-4d0a-90e0-4cf12131a82e.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the minimum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Minimum Value Generic

## **5. List Includes This Value**

![Image 35](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/9081b0c4-9eb4-4d44-9882-4907edf99899.png)

**Node Functions**

Check whether the specified list contains a specific value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Generic
Input Parameter List Generic
Output Parameter Result Boolean

# IV. Dictionary

## **1. Query If Dictionary Contains Specific Key**

![Image 36](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/a04b7b74-5ac4-4c67-98fe-a58d5cc63617.png)

**Node Functions**

Check whether the specified Dictionary contains the specified Key

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Include Boolean

## **2. Query If Dictionary Contains Specific Value**

![Image 37](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/9b43aa7b-c653-421d-ab25-2d2d6834606b.png)

**Node Functions**

Check whether the specified Dictionary contains the specified Value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Value Generic
Output Parameter Include Boolean

## **3. Query Dictionary Length**

![Image 38](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/5875e7f1-3d08-43a4-afb6-28ffa423b07e.png)

**Node Functions**

Query the number of Key-Value Pairs in the Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Length Integer

## **4. Get List of Keys From Dictionary**

![Image 39](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/8607ec4b-1400-45dd-9040-ceaba8b76049.png)

**Node Functions**

Returns a list of all Keys in the Dictionary. Because Key-Value Pairs are unordered, the Keys may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Key List Generic

## **5. Query List of Values From Dictionary**

![Image 40](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/77432f02-a780-48d3-8298-d3b7d570bda5.png)

**Node Functions**

Returns a list of all Values in the Dictionary. Because Key-Value Pairs are unordered, the Values may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Value List Generic

## **6. Query Dictionary Value by Key**

![Image 41](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdzd7i50td0/3a5fc2ff-1377-4c43-8bbb-b161dd238077.png)

**Node Functions**

Query the corresponding Value in the Dictionary by Key. If the Key does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Value Generic

[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjyvxrqz2fy)
