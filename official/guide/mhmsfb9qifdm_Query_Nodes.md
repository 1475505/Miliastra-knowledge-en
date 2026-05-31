---
id: mhmsfb9qifdm
title: Query Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhpw06rvah3a
language: en
scope: guide
crawledAt: 2026-05-31T16:32:50.730Z
---

# Query Nodes

# I. Skills

## **1.**Get the Complex Creation's Current Using Skill

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/9717a7ba-5519-4965-a091-6b6fdacb7cc7.png)

**Node Functions**

Return to the ID of the Skill currently being cast by the current Complex Creation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Skill ID Integer

# II. List Operations

## **1. Get Corresponding Value From List**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/8a2c121a-83a8-4ee6-a6a5-01e7969c6a98.png)

**Node Functions**

Returns the value at the specified ID in the List. IDs start at 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter ID Integer
Input Parameter Data List Generic
Output Parameter Result Generic

## **2. Get List Length**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/987c3816-7e65-46b1-8a1b-506da3c72fb7.png)

**Node Functions**

Returns the length of the list (number of elements)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input List Generic
Output Parameter Length Integer

## **3. Get Maximum Value From List**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/93065aa0-a97e-4133-88ba-42655836ab2a.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the maximum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Maximum Value Generic

## **4. Get Minimum Value From List**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/690f9c12-98fd-4bc0-bd94-e924a2a2e481.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the minimum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Minimum Value Generic

## **5. Get Ray Filter Type List**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/b336d578-f541-4dad-b42a-d668b777b2cf.png)

**Node Functions**

Assembles the required Ray Filter types into a List. Available filters include Hurtbox, Scene, and Object Self-Collision

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter List Enumeration List

## **6. Get Entity Type List**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/8b60ad8e-7cd5-410b-984b-d52baa0a9682.png)

**Node Functions**

Assembles the required Entity types into a List. Types include Stages, Objects, Players, Characters, and Creations

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter List Enumeration List

## **7. List Includes This Value**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/76237eac-f062-4167-a0eb-155ca2a59afc.png)

**Node Functions**

Returns whether the list contains the specified value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Generic
Input Parameter List Generic
Output Parameter Result Boolean

# III. Custom Variables

## **1. Get Custom Variable**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/e5e00025-e5d1-4803-8806-9e79502adcf9.png)

**Node Functions**

Returns the value of the specified Custom Variable from the Target Entity

If the variable does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Variable Name String
Output Parameter Variable Value Generic

# IV. Preset Status

## **1. Get Preset Status**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/00ff2f58-13d1-4751-b9f2-32c226b793a6.png)

**Node Functions**

Returns the Preset Status value of the specified Entity. Returns 0 if the Entity does not have the specified Preset Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

# V. Entity-Related

## **1. Check the preset status value of the complex creation**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/0f5d7c59-5907-4f3d-896a-cde79186a16b.png)

**Node Functions**

Query the Preset Status Value of the Target Creation under the corresponding Preset Status index

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Creation Entity
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

## **2. Query if Entity Is on the Field**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/670b152e-35af-43f6-a8b9-b6cc9e3ed7b0.png)

**Node Functions**

Check whether the specified Entity is present

Note that Character Entities are still considered present even when Downed

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter On the Field Boolean

## **3. Get Unit Attack Target**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/6f8c350b-9b56-4c9c-8fca-e52d5fb39f83.png)

**Node Functions**

Returns the Target Entity that the Unit Entity is currently attacking

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Unit Entity Entity
Output Parameter Attack Target Entity Entity

## **4. Get Target Attachment Point Location**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/b733dddb-5dd4-48b8-a169-4d2e7382659f.png)

**Node Functions**

Returns the Location of the specified Attachment Point on the Target Entity.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Attachment Point Name String
Output Parameter Attachment Point Location 3D Vector

## **5. Get Target Attachment Point Rotation**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/0a7d5a5e-e3af-4655-a321-ecefc5d41cd7.png)

**Node Functions**

Returns the Rotation of the specified Attachment Point on the Target Entity.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Attachment Point Name String
Output Parameter Attachment Point Rotation 3D Vector

## **6. Get Entity's Type**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/fdc76822-0824-48b5-ba94-4ba896bb85df.png)

**Node Functions**

Returns the type of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Entity Type Enumeration

## **7. Get Entity Location**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/e6a48af0-eb93-43a4-9526-13b1c65079b0.png)

**Node Functions**

Returns the Location of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter Location 3D Vector

## **8. Get Entity Rotation**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/357baf80-50b8-40f2-9aea-2806b983e9c7.png)

**Node Functions**

Returns the Rotation of the specified Entity in Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter Rotate 3D Vector

## **9. Get Creation's Current Target**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/658a0e56-48f6-424a-81f8-0321b9271c20.png)

**Node Functions**

Return to the specified Creation's current target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Creation Entity
Output Parameter Target Entity Entity

## **10. Get Self Entity**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/896a9fd2-959c-49c4-af64-4945f8bf473a.png)

**Node Functions**

Returns the Entity associated with this Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Self Entity Entity

## **11. Get Sub-Entity List**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/fe216af7-3a19-49ea-aef9-5eda4e24332d.png)

**Node Functions**

Return to the Target Entity's Sub-Entity List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Sub-Entity List Entity List

## **12. Filter Entity List Within Square Range**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/71780d2a-60e5-40ba-9651-8575dd591e07.png)

**Node Functions**

Filters Entities within a square range according to specified rules and a maximum count, and returns a list of Entities that meet the conditions

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Width Floating Point Numbers
Input Parameter Height Floating Point Numbers
Input Parameter Length Floating Point Numbers
Input Parameter Central Location 3D Vector
Input Parameter Maximum Filter Quantity Integer
Input Parameter Filter Rules Enumeration Options: Default, Random, or Sort From Near to Far
Output Parameter Filter Results Entity List

## **13. Filter Entity List Within Spherical Range**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/3b41d1f0-a6c1-43f0-a9c4-14efc17e7f00.png)

**Node Functions**

Filters Entities within a spherical range according to specific rules and a maximum count, and returns a list of Entities that meet the conditions

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Parameter Radius Floating Point Numbers
Input Parameter Central Location 3D Vector
Input Parameter Maximum Filter Quantity Integer
Input Parameter Filter Rules Enumeration Options: Default, Random, or Sort From Near to Far
Output Parameter Filter Results Entity List

## **14. Query Entity by GUID**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/ea906013-a74a-452e-b6f3-32302d16364e.png)

**Node Functions**

Search for an Entity by GUID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter GUID GUID
Output Parameter Entity Entity

## **15. Get Player Entity to Which the Character Belongs**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/0c9201a3-7077-46aa-b634-684c110fe282.png)

**Node Functions**

Returns the Player Entity that owns the Character Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Output Parameter Affiliated Player Entity Entity

## **16. Get List of Player Entities on the Field**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/85f9e5b7-4b6b-46fd-945d-38c8bc8b7e08.png)

**Node Functions**

Returns a list of all Player Entities present in the scene

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity List Entity List

## **17. Get Active Character of Specified Player**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/1676d7ad-a520-4350-9d12-a5949d808c16.png)

**Node Functions**

Available only in the Classic Mode. Obtains the on-field character in the player's team

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Character Entity Entity

## **18. Get Player's Character List**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/54973110-9045-4efc-afd8-393cd8b20fe3.png)

**Node Functions**

Available in the Classic Mode only. Returns to the Player's All Characters List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Character List Entity List

# VI. Faction-Related

## **1. Query Entity Faction**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/feec1044-594b-439b-a153-bc84ee1f9811.png)

**Node Functions**

Search for Target Entity's Faction

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Faction Faction

## **2. Query If Faction Is Hostile**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/a44cf817-fccf-49af-af6a-3e55b26976c1.png)

**Node Functions**

Check whether Faction 1 and Faction 2 are hostile

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Faction 1 Faction
Input Parameter Faction 2 Faction
Output Parameter Hostile Boolean

# VII. Tags

## **1. Get Entity List by Unit Tag**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/3d55c937-32f5-4afa-bc80-1f88b1842e3c.png)

**Node Functions**

Returns a list of all Entities in the scene that carry this Unit Tag

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Unit Tag Index Integer
Output Parameter Entity List Entity List

## **2. Get Entity's Unit Tag List**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/81286de5-3227-4c69-b97b-3ba4e7d2c388.png)

**Node Functions**

Returns a list of all Unit Tags carried by the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter List Integer List

# VIII. General

## **1. Get Local Variable**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/6b99e904-7235-4bfd-808d-05fef9fa8c20.png)

**Node Functions**

Returns the value of a specific local variable

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Variable Name String
Output Parameter Variable Value Generic

# IX. Custom Aggro

## **1. Query If Specified Entity Is in Combat**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/05c437f0-17c9-4427-9dfc-a014990414b9.png)

**Node Functions**

Available only in Custom Aggro Mode

Check whether the specified Entity has entered battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter In Combat Boolean

## **2. Get the Aggro List of the Specified Entity**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/76ff758f-fe26-4c10-aa56-8900f0ccd106.png)

**Node Functions**

Available only in Custom Aggro Mode

Get Specified Entity's Aggro List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Specified Entity Entity
Output Parameter Aggro List Entity List

## **3. Get the Aggro Target of the Specified Entity**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/c205a567-17d1-4d7d-88c2-982b1c1b0f54.png)

**Node Functions**

Available only in Custom Aggro Mode

Get Aggro Target of Specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Specified Entity Entity
Output Parameter Aggro Target Entity

# X. Triggers

## **1. Get All Entities Within the Collision Trigger**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/051d7a8e-40f7-494c-88b2-b34585fb5ec2.png)

**Node Functions**

Returns all Entities within the Collision Trigger corresponding to a specific ID in the Collision Trigger Component on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Trigger ID Integer
Output Parameter Entity List Entity List

# XI. Ray

## **1. Get Ray Detection Result**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/02dd51ab-3e8b-4194-b83c-28f85f25f493.png)

**Node Functions**

Returns the first Target or On-Hit Location that meets the Filter criteria, ordered from nearest to farthest along the ray

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Detection Initiator Entity Entity
Input Parameter Launch Location 3D Vector
Input Parameter Launch Direction 3D Vector
Input Parameter Max Ray Length Floating Point Numbers
Input Parameter Faction Filter Enumeration
Input Parameter Entity Type Filter Enumeration Includes Stage, Object, Player, Character, Creation
Input Parameter Hit Layer Filter Enumeration Options: Hurtbox, Scene, and Object Self-Collision
Output Parameter On-Hit Location 3D Vector
Output Parameter On-Hit Entity Entity

# XII. Dictionary

## **1. Query If Dictionary Contains Specific Key**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/03411ad2-b838-44c9-a6cc-9d88affe2297.png)

**Node Functions**

Check whether the specified Dictionary contains the specified Key

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Include Boolean

## **2. Query If Dictionary Contains Specific Value**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/91f013ea-6ef9-4694-b29b-550f6b037865.png)

**Node Functions**

Check whether the specified Dictionary contains the specified Value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Value Generic
Output Parameter Include Boolean

## **3. Check Dictionary Length**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/1f1bad5f-0544-4a75-91a0-44cf34b235e3.png)

**Node Functions**

Query the number of Key-Value Pairs in the Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Length Integer

## **4. Get List of Keys From Dictionary**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/93d34971-8a0a-4931-9d6e-cb9b865dfa16.png)

**Node Functions**

Returns a list of all Keys in the Dictionary. Because Key-Value Pairs are unordered, the Keys may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Key List Generic

## **5. Get List of Values From Dictionary**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/8834eaf2-8cac-4d96-966e-285472003b93.png)

**Node Functions**

Returns a list of all Values in the Dictionary. Because Key-Value Pairs are unordered, the Values may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Value List Generic

## **6. Query Dictionary Value by Key**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/e3e01964-e67b-4792-91a5-aeb7d74f02a0.png)

**Node Functions**

Query the corresponding Value in the Dictionary by Key. If the Key does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Value Generic

# **XIII**. Unit Status

## **1. Whether the Entity Has the Specified Unit Status**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmsfb9qifdm/6911489f-0835-4ffa-ac87-85ed5b20a9a3.png)

**Node Functions**

Check whether the Target Entity has the specified Unit Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Unit Status Configuration ID
Output Parameter Has the Status Boolean

[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh7ys59fhtvu)
