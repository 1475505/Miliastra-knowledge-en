---
id: mh9p1x07f3kw
title: Query Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mholjx05ji8w
language: en
scope: guide
crawledAt: 2026-05-31T16:32:43.489Z
---

# Query Nodes

# I. List Related

## **1. Get Corresponding Value From List**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/b0ef5442-76f9-462e-9c25-f30055914229.png)

**Node Functions**

Returns the value at the specified ID in the List. IDs start at 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter ID Integer
Input Parameter Data List Generic
Output Parameter Result Generic

## **2. Get List Length**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/e19fd5e2-c0f9-4a2c-bd32-1cf34c20868f.png)

**Node Functions**

Returns the length of the list (number of elements)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input List Generic
Output Parameter Length Integer

## **3. Get Maximum Value From List**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/bb4a5b02-25ac-44bc-9479-1646d5b74200.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the maximum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Maximum Value Generic

## **4. Get Minimum Value From List**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/bfab8902-da9c-4788-bc09-e74acfe4a652.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the minimum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Minimum Value Generic

## **5. Get Ray Filter Type List**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/b839c851-0421-4c04-9cee-d44a0bf312f6.png)

**Node Functions**

Assembles the required Ray Filter types into a List. Available filters include Hurtbox, Scene, and Object Self-Collision

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter List Complete list

## **6. Get Entity Type List**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/367128e5-39b9-4574-9056-dc047c21bffe.png)

**Node Functions**

Assembles the required Entity types into a List. Types include Stages, Objects, Players, Characters, and Creations

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter List Complete list

## **7. List Includes This Value**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/9ae5c2b1-85b5-46f2-9312-3a57e47af274.png)

**Node Functions**

Returns whether the list contains the specified value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Generic
Input Parameter List Generic
Output Parameter Result Boolean

# II. Custom Variables

## **1. Get Custom Variable**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/76c76fe5-44b6-41e2-955e-b8829a51f853.png)

**Node Functions**

Returns the value of the specified Custom Variable from the Target Entity

If the variable does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Variable Name String
Output Parameter Variable Value Generic

# III. Preset Status

## **1. Get Preset Status**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/ee883426-181e-4e5f-86c7-467b1b7a3810.png)

**Node Functions**

Returns the Preset Status value of the specified Entity. Returns 0 if the Entity does not have the specified Preset Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

# IV. Entity Related

## **1. Query If Entity Is on the Field**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/121fff65-a572-4cdf-8029-7ff9814f41ce.png)

**Node Functions**

Searches whether the specified Entity is present

Note that Character Entities are still considered present even when Downed

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter On the Field Boolean

## **2. Get Unit Attack Target**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/136e0dc8-34a4-4bba-a592-f84611189a35.png)

**Node Functions**

Returns the Target Entity that the Unit Entity is currently attacking

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Unit Entity Entity
Output Parameter Attack Target Entity Entity

## **3. Get Target Attachment Point Location**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/1f9b86f0-41cf-41c0-bf57-05ce1e067c9c.png)

**Node Functions**

Returns the Attachment Point Location corresponding to the specified Attachment Point Name on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Attachment Point Name String
Output Parameter Attachment Point Location 3D Vector

## **4. Get Target Attachment Point Rotation**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/cc77cbf4-5b29-427a-932b-e6e00bd6824b.png)

**Node Functions**

Returns the Attachment Point Rotation corresponding to the specified Attachment Point Name on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Attachment Point Name String
Output Parameter Attachment Point Rotation 3D Vector

## **5. Get Target Entity**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/9311c5a0-6029-4d1e-8417-158b42891977.png)

**Node Functions**

Returns the Target Entity. The meaning of this output varies depending on the functional module that references the Filter Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Target Entity Entity

## **6. Get Entity‘s Type**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/f2083f98-0848-4ef7-b5a8-975995ae6af5.png)

**Node Functions**

Returns the type of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Entity Type Enumeration

## **7. Get Entity Location**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/361b33ab-6562-4d4f-8b8b-dfda858ea163.png)

**Node Functions**

Returns the Location of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter Location 3D Vector

## **8. Get Entity Rotation**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/7465e765-ae84-436e-bbd1-d2dc0cc4f272.png)

**Node Functions**

Returns the Rotation of the specified Entity in Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter Rotate 3D Vector

## **9. Get Self Entity**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/22c75b31-0e66-4f7f-9410-e63750dd183d.png)

**Node Functions**

Returns the Entity associated with this Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Self Entity Entity

## **10. Filter Entity List Within Square Range**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/6541a4f0-601e-4fe3-8714-597f8da7025f.png)

**Node Functions**

Filters Entities within a square range according to specified rules and a maximum count, and returns a list of Entities that meet the conditions

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Width Floating Point Numbers
Input Parameter Height Floating Point Numbers
Input Parameter Length Floating Point Numbers
Input Parameter Central Location 3D Vector
Input Parameter Maximum Filter Quantity Integer
Input Parameter Filter Rules Enumeration Options: Default, Random, or Nearest-to-Farthest order
Output Parameter Filter Results Entity List

## **11. Filter Entity List Within Spherical Range**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/e4226c97-ad1f-4e5e-a264-b6dd7139ad65.png)

**Node Functions**

Filters Entities within a spherical range according to specific rules and a maximum count, and returns a list of Entities that meet the conditions

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Parameter Radius Floating Point Numbers
Input Parameter Central Location 3D Vector
Input Parameter Maximum Filter Quantity Integer
Input Parameter Filter Rules Enumeration Options: Default, Random, or Nearest-to-Farthest order
Output Parameter Filter Results Entity List

## **12. Query Entity by GUID**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/c241f406-85b8-4c54-8df8-e6c04d55725d.png)

**Node Functions**

Searches for an Entity by GUID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter GUID GUID
Output Parameter Entity Entity

## **13. Check the Preset Status Value of the Complex Creation**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/fd89adfa-3cb5-4add-bc1e-e0926960b3d9.png)

**Node Functions**

Query the preset state value of the target creation corresponding to the preset state index.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Creation Entity
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

# V. Faction Related

## **1. Query Entity Faction**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/553e9663-f216-4dcf-8445-e09140d5ee56.png)

**Node Functions**

Searches Target Entity's Faction

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Faction Faction

## **2. Query If Faction Is Hostile**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/9dc3df8c-b175-48bb-866b-543e41014440.png)

**Node Functions**

Searches whether Faction 1 and Faction 2 are hostile

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Faction 1 Faction
Input Parameter Faction 2 Faction
Output Parameter Hostile Boolean

# VI. Player and Character Related

## **1. Query If Self Is in Combat**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/ffa5479f-8932-47b6-a80d-faad0b0cc729.png)

**Node Functions**

Searches whether the Entity associated with this Node Graph has entered battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter In Combat Boolean

## **2. Get Current Character**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/8830e660-c803-441a-9c35-3609fd0bd99b.png)

**Node Functions**

Returns the Character Entity currently controlled by this Player's client

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Character Entity Entity

## **3. Get Player Entity to Which the Character Belongs**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/ad9864da-773c-40cd-80b3-71e9ef368dc5.png)

**Node Functions**

Returns the Player Entity that owns the Character Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Output Parameter Affiliated Player Entity Entity

## **4. Get List of Player Entities on the Field**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/b38f20f7-4fda-4828-bde0-684faa4cc700.png)

**Node Functions**

Returns a list of all Player Entities present in the scene

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity List Entity List

## **5. Get Character Entity of Specified Player**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/f9d76d70-a196-4a58-97de-5a8410af13d5.png)

**Node Functions**

Returns the Character Entity of the specified Player Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Character Entity Entity

## **6. Query GUID by Entity**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/83067afb-7667-4758-a7e4-7baca80fd9c3.png)

**Node Functions**

Searches for the GUID of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter GUID GUID

## **7. Get Player Client Input Device Type**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/69ae708e-4413-4635-bfde-7df956fdcdd9.png)

**Node Functions**

Returns the Player's local input device type, as determined by the Interface mapping method

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Input Device Type Enumeration Includes keyboard/mouse, gamepad, touchscreen

## **8. Get Player Movement Input**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/2e5e1e1e-a41d-4d88-9c80-e3458b3b5e9c.png)

**Node Functions**

Returns the Input Direction and Input Strength of the current client player's movement.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Input Direction Floating Point Numbers
Output Parameter Input Strength Floating Point Numbers

## **9. Query Skill Variable Value**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/7603a919-90e3-47d7-b4b3-43085fb95b02.png)

**Node Functions**

Searches for the corresponding variable value based on the Skill Variable Config ID.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Variable Config ID Config ID
Output Parameter Variable Value Floating Point Numbers

## **10. Get Current Key Behavior**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/fe64889e-cbfc-461b-874e-61bc90c2dee5.png)

**Node Functions**

Returns all Key Behavior IDs and their corresponding entry times from the current Key Behavior Log Panel.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Behavior ID List Integer List
Output Parameter Entry Time List Floating Point List

## **11. Get Current Key Behavior (High Precision)**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/03b0e03b-b00b-4be4-a713-1b12a8ea5177.png)

**Node Functions**

Returns all Key Behavior IDs and their corresponding entry times from the current Key Behavior Log Panel. Due to floating-point precision issues, use this node if you require greater granularity for the entry times.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Behavior ID List Integer List
Output Parameter Entry Time List (s)Integer List
Output Parameter Entry Time List (ms)Integer List

## **12. Get Current Client Time**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/c8fa8858-c4fd-43cf-a20d-ee65c43b3ec3.png)

**Node Functions**

Returns the current client time.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Client Time Floating Point Numbers

## **13. Get Current Client Time (High Precision)**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/b6d77deb-9f23-4fbe-ab1e-dfaaa55c0b29.png)

**Node Functions**

Returns the current client time. Due to floating-point precision issues, use this node if you requite greater granularity for the client time.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Client Time (s)Integer
Output Parameter Client Time (ms)Integer

## **14. Query Whether Player Is Currently in Voice Chat**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/65f4bf1b-432a-4fc1-a4b3-de86d968f366.png)

**Node Functions**

Returns "Yes" when microphone input is detected from this player's client.

Note: This node only takes effect during multiplayer games (multiplayer test play, actual multiplayer play). It will not work in single-player games (single-player test play, actual single-player play).

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Currently in Voice Chat?Boolean

## **15. Get Skill Config ID by Skill Instance ID**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/15e3da7a-5dee-4741-9ddb-4bb5284e4d6b.png)

**Node Functions**

Returns the corresponding Skill Config ID based on the Skill Instance ID provided.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Instance ID Integer
Output Parameter Skill Config ID Config ID

## **16. Query Skill Instance List by Specified Slot**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/92276dd3-a6c9-41ca-b9cc-087721ba80ed.png)

**Node Functions**

Searches for all skill instances in the slot specified.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Slot Enumeration
Output Parameter Skill Instance ID List Integer List

## **17. Query Active Skill Instance List of Specified Slot**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/aabccd09-d169-45bb-9c3a-d1534fbd39c8.png)

**Node Functions**

Returns the skill instance(s) currently in the foreground for the slot specified.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Slot Enumeration
Output Parameter Skill Instance ID List Integer

## **18. Query Skill Instance ID by Skill Slot and Skill Config ID**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/9b4397fa-0cbb-4b28-ac0a-653ea8cea0ca.png)

**Node Functions**

Returns the corresponding skill instance based on the skill slot and Skill Config ID provided.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Slot Enumeration
Input Parameter Skill Config ID Config ID
Output Parameter Skill Instance ID List Integer

# VII. Unit Tags

## **1. Get Entity List by Unit Tag**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/c6d9d627-1247-477c-b085-5c5b2836c3c3.png)

**Node Functions**

Returns a list of all Entities in the scene that carry this Unit Tag

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Unit Tag Index Integer
Output Parameter Entity List Entity List

## **2. Get Entity's Unit Tag List**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/4d0953da-5f58-4a91-9c39-d45b512b7570.png)

**Node Functions**

Returns a list of all Unit Tags carried by the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter List Integer List

# VIII. General

## **1. Get Local Variable**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/55e6f403-2cc8-45da-8aa0-b6ca75b0e650.png)

**Node Functions**

Returns the value of a specific local variable

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Variable Name String
Output Parameter Variable Value Generic

# IX. Custom Aggro

## **1. Query if Specified Entity is in Combat**

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/a07faee5-8221-4b2e-80e8-49c1ed56fcaa.png)

**Node Functions**

Searches whether the specified Entity has entered battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter In Combat Boolean

## **2. Get the Aggro List of the Specified Entity**

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/ebf84bfa-46df-4fd0-b82c-f5ac24b25f58.png)

**Node Functions**

Get Specific Entity's Aggro List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Specified Entity Entity
Output Parameter Aggro List Entity List

## **3. Get the Aggro Target of the Specified Entity**

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/24fb5437-7683-4ff6-85f6-39cd5b37db39.png)

**Node Functions**

Get Aggro Target of Specific Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Specified Entity Entity
Output Parameter Aggro Target Entity

# X. Triggers

## **1. Get All Entities Within the Collision Trigger**

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/9287f6cf-eaa3-411e-865a-44706d261d26.png)

**Node Functions**

Returns all Entities within the Collision Trigger corresponding to a specific ID in the Collision Trigger Component on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Trigger ID Integer
Output Parameter Entity List Entity List

# XI. Ray

## **1. Get Ray Detection Result**

![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/65a5a417-d19f-4d62-a115-e31f701c9481.png)

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

# XII. Scanning

## **1.**Get All Valid Entities That Are Scannable by Scan Component

![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/1a070b01-efa7-4600-9c1e-411f54f8d3b9.png)

**Node Functions**

Returns all Units carrying a Scan Component whose Filter returns True, regardless of the Unit's scannable status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Object List Entity List

## **2.**Get Entity Currently Scanned by Scan Component

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/7e6365bc-ef4e-4889-9402-c381eb9f44d7.png)

**Node Functions**

Returns Entities currently detected by the Scan Component; these are Entities in the Active State

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Corresponding Entity Entity
Output Parameter Scan Tag Config ID Config ID

## **3.**Get Entity's Current Active Scan Tags

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/bda68a3e-7e86-4263-acdd-f1ec98ed7d8e.png)

**Node Functions**

Returns the Target Entity's Current Active Scan Tags

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Scan Tag Config ID Config ID

## **4. Get Entity's Scan Status**

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/f6000d9e-832f-440a-b8db-83edba639b92.png)

**Node Functions**

Get Entity Scan Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Scan Status Enumeration Options: Invisible, Current Scan Target, Candidate Target, Not Eligible

# XIII. Dictionary

## **1. Query If Dictionary Contains Specific Key**

![Image 56](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/e7bfb0b3-56c7-4e23-a9df-0a60cb978637.png)

**Node Functions**

Query if the specified dictionary contains a specific key

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Include Boolean

## **2. Query If Dictionary Contains Specific Value**

![Image 57](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/0a4d123f-e70c-44d7-8853-efc2d2842cfe.png)

**Node Functions**

Query if the specified dictionary contains a specific value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Value Generic
Output Parameter Include Boolean

## **3. Check Dictionary Length**

![Image 58](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/7febb38f-6002-4b5e-81f4-0103cff34472.png)

**Node Functions**

Query the number of key-value pairs in a dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Length Integer

## **4. Get List of Keys From Dictionary**

![Image 59](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/325433d8-2d42-4b0b-a4fd-c03a3fac11a6.png)

**Node Functions**

Get a list of all keys in the dictionary. Since the key-value pairs in the dictionary are unordered, the list of keys retrieved may not be in the order they were inserted.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Key List Generic

## **5. Get List of Values From Dictionary**

![Image 60](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/69a33468-2d54-4b21-b723-26c2e0e3403c.png)

**Node Functions**

Get a list of all values in the dictionary. Since the key-value pairs in the dictionary are unordered, the list of values retrieved may not be in the order they were inserted.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Value List Generic

## **6. Query Dictionary Value by Key**

![Image 61](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/047ee564-8e36-43b9-a71b-1d4edc8ceca9.png)

**Node Functions**

Query the value corresponding to a key in the dictionary, and return the default value of the type if the key does not exist.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Value Generic

# XIV. Unit Status

## **1. Whether the Entity Has the Specified Unit Status**

![Image 62](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9p1x07f3kw/a0146547-a95a-4be9-8bca-0bdb24898099.png)

**Node Functions**

Query whether the entity has the specified unit status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Unit Status Configuration ID
Output Parameter Has the Status Boolean

[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfmxw9fn6n6)
