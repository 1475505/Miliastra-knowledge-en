---
id: mhwd900y1lbs
title: Query Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2crq9jzueq
language: en
scope: guide
crawledAt: 2026-05-31T16:33:12.877Z
---

# Query Nodes

# I. List Related

## **1. Get Corresponding Value From List**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/8e5bfaaa-51b0-4afc-a94c-9b16c57fe5e5.png)

**Node Functions**

Returns the value at the specified ID in the List. IDs start at 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter ID Integer
Input Parameter Data List Generic
Output Parameter Result Generic

## **2. Get List Length**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/b2b7ea54-b27e-42c7-932f-4184b436a5ee.png)

**Node Functions**

Returns the length of the list (number of elements)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input List Generic
Output Parameter Length Integer

## **3. Get Maximum Value From List**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/153c2315-3ea6-4b02-ae54-95bf12665611.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the maximum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Maximum Value Generic

## **4. Get Minimum Value From List**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/aa3c41d7-5f59-4c1a-a57a-6ae0aa6ea154.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the minimum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Minimum Value Generic

## **5. Get Ray Filter Type List**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/7387d1b6-8350-40a5-9277-0d66da3bd0f6.png)

**Node Functions**

Assembles the required Ray Filter types into a List. Available filters include Hurtbox, Scene, and Object Self-Collision

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter List Enumerationd List

## **6. Get Entity Type List**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/e06ef6d8-beb5-4084-bbf4-2c0fe3a0988b.png)

**Node Functions**

Assembles the required Entity types into a List. Types include Stages, Objects, Players, Characters, and Creations

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter List Enumerationd List

## **7. List Includes This Value**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/c2485422-9403-4ee3-a51d-584ca198a5c2.png)

**Node Functions**

Returns whether the list contains the specified value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Generic
Input Parameter List Generic
Output Parameter Result Boolean

# II. Custom Variables

## **1. Get Custom Variable**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/e052a94d-bc17-4682-b953-91c0170b5867.png)

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

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/d537bc6b-563d-40d8-b2f7-8fdc63b3634a.png)

**Node Functions**

Returns the Preset Status value of the specified Entity. Returns 0 if the Entity does not have the specified Preset Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

# IV. Entity Related

## **1. Check the Preset Status Value of the Complex Creation**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/b1564827-f1aa-4bbb-98e6-4eab8fefb7da.png)

**Node Functions**

Query the Preset Status Value of the Target Creation under the corresponding Preset Status index

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Creation Entity
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

## **2. Query If Entity Is on the Field**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/50d301ef-cc61-4761-be87-af70d472f57b.png)

**Node Functions**

Check whether the specified Entity is present

Note that Character Entities are still considered present even when Downed

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter On the Field Boolean

## **3. Get Unit Attack Target**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/85f02bcf-014b-42f8-b65c-c63e91ddbf6a.png)

**Node Functions**

Returns the Target Entity that the Unit Entity is currently attacking

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Unit Entity Entity
Output Parameter Attack Target Entity Entity

## **4. Get Target Attachment Point Location**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/9577279a-31ee-43f2-9ef5-fb1594ada560.png)

**Node Functions**

Returns the Location of the specified Attachment Point on the Target Entity.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Attachment Point Name String
Output Parameter Attachment Point Location 3D Vector

## **5. Get Target Entity**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/a2de625f-5c25-4698-99c6-ff9e0c0f3ff0.png)

**Node Functions**

Returns the Target Entity. The meaning of this output varies depending on the functional module that references the Filter Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Target Entity Entity

## **6. Get Entity's Type**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/d215de3b-18dc-4b36-9477-ac4827bfb5ef.png)

**Node Functions**

Returns the type of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Entity Type Enumeration

## **7. Get Entity Location**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/252b68ef-9ea7-4017-bc37-1bbe5d1e06c4.png)

**Node Functions**

Returns the Location of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter Location 3D Vector

## **8. Get Entity Rotation**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/1b907d6d-c68a-4103-9a7b-62cfab57bb26.png)

**Node Functions**

Returns the Rotation of the specified Entity in Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter Rotate 3D Vector

## **9. Get Self Entity**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/b657845e-5268-41d2-854e-6094f36d7b6a.png)

**Node Functions**

Returns the Entity associated with this Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Self Entity Entity

## **10. Filter Entity List Within Square Range**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/11798ec6-18cb-4c9f-a9db-b5a5eb74b840.png)

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

## **11. Filter Entity List Within Spherical Range**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/930067b2-41d7-4c1c-ad4c-5b43f3ec369a.png)

**Node Functions**

Filters Entities within a spherical range according to specific rules and a maximum count, and returns a list of Entities that meet the conditions

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Parameter Radius Floating Point Numbers
Input Parameter Central Location 3D Vector
Input Parameter Maximum Filter Quantity Integer
Input Parameter Filter Rules Enumeration Options: Default, Random, or Sort From Near to Far
Output Parameter Filter Results Entity List

## **12. Query Entity by GUID**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/3ed3221f-ba2d-43cc-8173-f8104a2d8a7b.png)

**Node Functions**

Search for an Entity by GUID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter GUID GUID
Output Parameter Entity Entity

# V. Faction Related

## **1. Query Entity Faction**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/2983433e-e419-47df-b3ef-1bcc70d15691.png)

**Node Functions**

Search for Target Entity's Faction

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Faction Faction

## **2. Query If Faction Is Hostile**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/f6adb26a-6527-4e82-8037-c0ce35a47d9b.png)

**Node Functions**

Check whether Faction 1 and Faction 2 are hostile

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Faction 1 Faction
Input Parameter Faction 2 Faction
Output Parameter Hostile Boolean

# VI. Player and Character Related

## **1. Query If Self Is in Combat**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/4fe715c3-a4b2-4e7c-b013-169107d5c016.png)

**Node Functions**

Check whether the Entity associated with this Node Graph has entered battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter In Combat Boolean

## **2. Get Player Client Input Device Type**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/a79a3e2f-ab71-487f-9476-68e6570bce29.png)

**Node Functions**

Returns the Player's local input device type, as determined by the Interface mapping method

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Input Device Type Enumeration Includes keyboard/mouse, gamepad, touchscreen

## **3. Get Current Character**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/0fe1bf8f-df03-4bfc-b149-e9037626baba.png)

**Node Functions**

Returns the Character Entity currently controlled by this Player's client

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Character Entity Entity

## **4. Get Player Entity to Which the Character Belongs**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/1e7f5b00-676f-49da-b82c-44e1a65b5e08.png)

**Node Functions**

Returns the Player Entity that owns the Character Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Output Parameter Affliated Player Entity Entity

## **5. Get List of Player Entities on the Field**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/6006d9e7-2de5-4369-82c9-db06212fae7b.png)

**Node Functions**

Returns a list of all Player Entities present in the scene

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity List Entity List

## **6. Get Character Entity of Specified Player**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/1cfcf090-d314-4e26-8f8f-25daba982280.png)

**Node Functions**

Returns the Character Entity of the specified Player Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Character Entity Entity

## **7. Query GUID by Entity**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/988f9b1b-23e2-450a-bfcf-4c930fda2ee4.png)

**Node Functions**

Search for the GUID of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter GUID GUID

## **8. Get Active Character of Specified Player**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/5acc4107-3cbb-4259-aa6f-4cd892c50e82.png)

**Node Functions**

Available only in the Classic Mode. Obtains the on-field character in the player's team

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Character Entity Entity

## **9. Check Classic Mode Character IDs**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/0e20c2f3-c059-4f07-9a74-1865b2ff6468.png)

**Node Functions**

Only available in the Classic Mode. Query the character ID of the Target Character. Check the appendix to see which Character it corresponds to[Classic Mode Character ID List](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh4imrrhzdzi)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Character Entity
Output Parameter Character ID Integer

## **10.****Get Player's Character List**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/3893ad1f-bac2-4bc4-a3bc-c37f1beadd3d.png)

**Node Functions**

Returns a list of characters in the player's team. Available only in Classic Mode.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Character List Entity List

## **11. Get Player Movement Input**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/30998881-7f95-4382-89b5-6d5d914f980b.png)

**Node Functions**

Returns the Input Direction and Input Strength of the player's movement on the current client.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Direction Floating Point Numbers
Output Parameter Input Strength Floating Point Numbers

## **12. Query Skill Variable Value**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/fd1cf692-9fff-41d7-896b-827f0faff6bd.png)

**Node Functions**

Queries the corresponding Variable Value based on the Skill Variable Config ID.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Variable Config ID Config ID
Output Parameter Variable Value Floating Point Numbers

## **13. Get Current Key Behavior**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/c4449fa6-7d03-4560-8604-ca0d88218b46.png)

**Node Functions**

Returns all Key Behavior IDs on the current Info Board and their corresponding entry times.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Behavior ID List Integer List
Output Parameter Entry Time List Floating Point List

## **14. Get Current Key Behavior (High Precision)**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/c63d8ba4-d954-4d3a-a58f-968ccd5b23a8.png)

**Node Functions**

Returns all Key Behavior IDs on the current Info Board and their corresponding entry times. Due to floating-point precision issues, use this node if you require greater granularity for the entry times.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Behavior ID List Integer List
Output Parameter Entry Time List (s)Integer List
Output Parameter Entry Time List (ms)Integer List

## **15. Get Current Client Time**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/ef38b4db-9f5d-436c-9d42-751b8036735b.png)

**Node Functions**

Returns the current client time.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Client Time Floating Point Numbers

## **16. Get Current Client Time (High Precision)**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/31c12cf0-1955-4739-b33c-b8c657f2a11a.png)

**Node Functions**

Returns the current client time. Due to floating-point precision issues, use this node if you need greater granularity for the client time.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Client Time (s)Integer
Output Parameter Client Time (ms)Integer

## **17. Query Whether Player Is Currently in Voice Chat**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/f573c8c2-bd1a-47c9-a8f1-8b4eaaf8c93a.png)

**Node Functions**

Returns "Yes" when microphone input is detected from this player's client.

Note: This node only takes effect in multiplayer games (multiplayer test play, actual multiplayer play). It will not work in single-player games (single-player test play, actual single-player play).

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Currently in Voice Chat?Boolean

## **18. Get Skill Config ID by Skill Instance ID**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/93c534f2-8dc5-4dc4-9248-50578ea02977.png)

**Node Functions**

Returns the corresponding Skill Config ID based on the Skill Instance ID provided.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Instance ID Integer
Output Parameter Skill Config ID Config ID

## **19. Query Skill Instance List by Specified Slot**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/941aa9e3-b885-4bd0-891e-0cf7265b0a7b.png)

**Node Functions**

Returns a list of all skill instances in the slot specified.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Slot Enumeration
Output Parameter Skill Instance ID List Integer List

## **20. Query Active Skill Instance List of Specified Slot**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/f9717544-357e-487d-8018-b2f7875d21d6.png)

**Node Functions**

Gets the skill instance currently in the foreground for the slot specified.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Slot Enumeration
Output Parameter Skill Instance ID List Integer

## **21. Query Skill Instance ID by Skill Slot and Skill Config ID**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/762e7588-f0e1-4477-b54f-f1bad8be089e.png)

**Node Functions**

Returns the corresponding skill instance based on the skill slot and Skill Config ID provided.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Slot Enumeration
Input Parameter Skill Config ID Config ID
Output Parameter Skill Instance ID List Integer

# VII. Attachment Points

## **1. Get Target Attachment Point Rotation**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/5a0e9476-7135-4a27-bf56-a0899e036f6e.png)

**Node Functions**

Returns the Rotation of the specified Attachment Point on the Target Entity.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Attachment Point Name String
Output Parameter Attachment Point Rotation 3D Vector

# VIII. Triggers

## **1. Get All Entities Within the Collision Trigger**

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/7d98bcfa-50cd-41ec-bfae-21a0fd4d9df6.png)

**Node Functions**

Returns all Entities within the Collision Trigger corresponding to a specific ID in the Collision Trigger Component on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Trigger ID Integer
Output Parameter Entity List Entity List

# IX. Rays

## **1. Get Ray Detection Result**

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/409eb5c3-1965-43d8-871d-7fe076dbdbff.png)

**Node Functions**

Returns the first Target or On-Hit Location that meets the Filter criteria, ordered from nearest to farthest along the ray

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Detect Initiator Entity Entity
Input Parameter Launch Location 3D Vector
Input Parameter Launch Direction 3D Vector
Input Parameter Max Ray Length Floating Point Numbers
Input Parameter Faction Filter Enumeration
Input Parameter Entity Type Filter Enumeration Includes Stage, Object, Player, Character, Creation
Input Parameter Hit Layer Filter Enumeration Options: Hurtbox, Scene, and Object Self-Collision
Output Parameter On-Hit Location 3D Vector
Output Parameter On-Hit Entity Entity

# X. Scanning

1.

## Get All Valid Entities That Are Scannable by Scan Component

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/df986426-24da-4d32-ad24-bc9c71cb878b.png)

**Node Functions**

Returns all Units carrying a Scan Component whose Filter returns True, regardless of the Unit's scannable status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Object List Entity List

2.

## Get Entity Currently Scanned by Scan Component

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/1b8a9a9e-9e1d-4fa7-88d5-43651848fb40.png)

**Node Functions**

Returns Entities currently detected by the Scan Component; these are Entities in the Active State

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Corresponding Entity Entity
Output Parameter Scan Tag Config ID Config ID

3.

## Get Entity's Current Active Scan Tags

![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/e278158b-1f41-4187-b8fc-f3b138c1e085.png)

**Node Functions**

Returns the Target Entity's Current Active Scan Tags

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Scan Tag Config ID Config ID

## **4. Get Entity's Scan Status**

![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/29df3e73-94d0-4b85-b00c-e29a4b3600e1.png)

**Node Functions**

Get Entity Scan Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Scan Status Enumeration Options: Invisible, Current Scan Target, Candidate Target, Criteria Not Met

# **XI**. Dictionary

## **1. Query If Dictionary Contains Specific Key**

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/a38c9a36-e1da-4fc6-99dd-0a01a76e22f1.png)

**Node Functions**

Check whether the specified Dictionary contains the specified Key

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Include Boolean

## **2. Query If Dictionary Contains Specific Value**

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/4db02a4b-4d53-41c7-93d2-a6836b07a558.png)

**Node Functions**

Check whether the specified Dictionary contains the specified Value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Value Generic
Output Parameter Include Boolean

## **3. Check Dictionary Length**

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/c5f5b7a5-323b-4a83-ab6a-deac9b91f520.png)

**Node Functions**

Query the number of Key-Value Pairs in the Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Length Integer

## **4. Get List of Keys From Dictionary**

![Image 56](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/4837ead4-6962-477d-b9e3-aa35074722e8.png)

**Node Functions**

Returns a list of all Keys in the Dictionary. Because Key-Value Pairs are unordered, the Keys may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Key List Generic

## **5. Get List of Values From Dictionary**

![Image 57](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/a95f3fac-d2e4-4147-95af-7e10414193a5.png)

**Node Functions**

Returns a list of all Values in the Dictionary. Because Key-Value Pairs are unordered, the Values may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Value List Generic

## **6. Query Dictionary Value by Key**

![Image 58](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/7e9e5c23-5435-4f63-bfe2-ec47a9af06c3.png)

**Node Functions**

Query the corresponding Value in the Dictionary by Key. If the Key does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Value Generic

# **XII**. Unit Status

## **1. Whether the Entity has the Specified Unit Status**

![Image 59](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhwd900y1lbs/126d70d7-3821-436e-831f-4e5e7e24932e.png)

**Node Functions**

Check whether the Target Entity has the specified Unit Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Unit Status Config ID
Output Parameter Has the Status Boolean

[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhte5piu3it0)
