---
id: mhrm9yin7qsc
title: Query Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwbqlrw655q
language: en
scope: guide
crawledAt: 2026-05-31T16:32:36.882Z
---

# Query Nodes

# I. General

1.

## **Query Game Mode and Player Number**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/1e946aa2-4367-4b69-a494-dfea96b3b0c3.png)

**Node Functions**

Searches the theoretical number of players entering the match, including players via Matchmaking or Room creation, and the method of entry

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Count Integer
Output Parameter Gameplay Mode Enumeration Includes Playtest, Room Play, and Matchmaking Play

## **2. Get Local Variable**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/d16b125b-1793-4cdb-8891-5ef49a03b7dc.png)

**Node Functions**

Retrieves a Local Variable and optionally sets its [Initial Value]

After setting the [Initial Value], the [Value] output parameter will be equal to the input [Initial Value]

When the output [Local Variable] is connected to the [Set Local Variable] Execution Node's input [Local Variable], the input [Value] of [Set Local Variable] overwrites this Search Node's output [Value]. The next time you use [Get Local Variable], the output [Value] is the overwritten value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Initial Value Generic Allows you to set the default initial value for local variables
Output Parameter Local Variable Local Variable Container for data storage
Output Parameter Value Generic When not Overwritten, this value equals the Initial Value; after it is Overwritten, it equals the new value

# II. Math

## **1. Query Server Time Zone**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/1d2ff525-802d-41e5-a2c4-4114e41a2782.png)

**Node Functions**

Searches the Server's timezone

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Time Zone Integer

## **2. Query Timestamp (UTC+0)**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/284315ad-d823-441b-ab55-e75cd696a949.png)

**Node Functions**

Searches the current timestamp

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Timestamp Integer

## **3. Get Random Floating Point Number**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/966b8673-38c4-4765-83b8-1345d54eef42.png)

**Node Functions**

Returns a random Floating Point Number that is ≥ the lower limit and ≤ the upper limit. The range is inclusive

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Lower Limit Floating Point Numbers
Input Parameter Upper Limit Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **4. Get Random Integer**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a20462e0-1f20-4af9-8921-ff6a2bc9940a.png)

**Node Functions**

Returns a random Integer that is ≥ the lower limit and ≤ the upper limit. The range is inclusive

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Lower Limit Integer
Input Parameter Upper Limit Integer
Output Parameter Result Integer

## **5. Weighted Random**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/828430e4-f020-41a2-93a6-87fe04d7bbd6.png)

**Node Functions**

Takes a list of weights and randomly selects an ID based on the weight distribution

For example, with a weight list {10, 20, 66, 4}, this node outputs 0, 1, 2, or 3 with probabilities 10%, 20%, 66%, and 4% respectively

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Weight List Integer List
Output Parameter Weight ID Integer

## **6. 3D Vector: Backward**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/b7dab77e-564f-4feb-9605-86eaee731c0e.png)

**Node Functions**

Return (0,0,-1)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter(0,0,-1)3D Vector

## **7. 3D Vector: Zero Vector**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/b7b4e561-817b-4b62-9128-875467a3260f.png)

**Node Functions**

Return (0,0,0)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter(0,0,0)3D Vector

## **8. 3D Vector: Forward**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/3ab71aef-a8cf-4cc3-a86b-cca064af7e97.png)

**Node Functions**

Return (0,0,1)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter(0,0,1)3D Vector

## **9. 3D Vector: Up**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/db9c25ac-6787-48d3-a16c-abe04ad1cd14.png)

**Node Functions**

Return (0,1,0)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter(0,1,0)3D Vector

## **10. 3D Vector: Down**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/e586dc79-f15b-42cc-a1c5-d5ecfb9eb071.png)

**Node Functions**

Return (0,-1,0)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter(0,-1,0)3D Vector

## **11. 3D Vector: Right**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/16cc5a7a-e1e4-4e62-aa09-89d1d931c465.png)

**Node Functions**

Return (1,0,0)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter(1,0,0)3D Vector

## **12. 3D Vector: Left**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/e63b4936-f732-4b14-b770-37ce4a91712f.png)

**Node Functions**

Return (-1,0,0)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter(-1,0,0)3D Vector

## **13. Pi (π)**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/96bab496-8384-46a5-81b4-5849b51d1957.png)

**Node Functions**

Returns the approximate value of π (≈ 3.142)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Pi (π)Floating Point Numbers

# III. List Related

## **1. Search List and Return Value ID**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/78a74990-a047-480c-b43f-fc789ba9918b.png)

**Node Functions**

Find the specified value in the list and return a list of IDs where it appears

For example, if the target list is {1,2,3,2,1} and the value is 1, the returned ID list is {0,4}, meaning 1 appears at IDs 0 and 4 in the target list

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target List Generic
Input Parameter Value Generic
Output Parameter ID List Integer List Returns an empty list if not found

## **2. Get Corresponding Value From List**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/747de6a8-9e89-4e28-907d-0425aa41377d.png)

**Node Functions**

Returns the value at the specified ID in the list (0-based)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Input Parameter ID Integer
Output Parameter Value Generic

## **3. Get List Length**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/7abdadb6-2b7e-416c-a80d-98c444472efa.png)

**Node Functions**

Returns the length of the list (number of elements)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Length Integer

## **4. Get Maximum Value from List**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/02fda0bb-abc2-45de-9fe9-5bd4fdcd77aa.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the maximum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Maximum Value Generic

## **5. Get Minimum Value From List**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/31228a49-ef60-4f32-8ffb-51ad90b366d9.png)

**Node Functions**

Applies only to Floating Point Number or Integer lists; returns the minimum value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Output Parameter Minimum Value Generic

## **6. List Includes This Value**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/4a1db4bb-4175-440b-8334-df73ea10193b.png)

**Node Functions**

Returns whether the list contains the specified value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter List Generic
Input Parameter Value Generic
Output Parameter Include Boolean

# IV. Custom Variables

## **1. Query Custom Variable Snapshot**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/78286b6d-e67f-4826-bba7-3a9c5d7443bd.png)

**Node Functions**

Searches the value of the specified Variable Name from the Custom Variable Component snapshot

Only available for the [On Entity Destroyed] event

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Custom Variable Component Snapshot Custom Variable Snapshot
Input Parameter Variable Name String
Output Parameter Variable Value Generic

## **2. Get Node Graph Variable**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/cdc49a42-43f4-4f86-8aa1-80ee0e9b0593.png)

**Node Functions**

Returns the value of the specified Node Graph Variable from the current Node Graph

If the variable does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Variable Name String
Output Parameter Variable Value Generic

## **3. Get Custom Variable**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/c0b1b449-497f-4702-a5b3-8fa6e4d7e660.png)

**Node Functions**

Returns the value of the specified Custom Variable from the Target Entity

If the variable does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Variable Name String
Output Parameter Variable Value Generic

# V. Preset Status

## **1. Get Preset Status**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a5d2ff87-049b-4000-ba7a-4c238121d6d6.png)

**Node Functions**

Returns the value of the specified Preset Status for the Target Entity. Returns 0 if the Entity does not have that Preset Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

# VI. Entity Related

## **1. Query Character's Current Movement SPD**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/4b1f73b1-58dc-4b5f-98fe-65ea02d2e165.png)

**Node Functions**

Can only be searched when the Character has the [Monitor Movement Speed] Unit Status effect

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Output Parameter Current Speed Floating Point Numbers
Output Parameter Velocity Vector 3D Vector

## **2. Query If Entity Is on the Field**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/af920c02-963f-4417-92d0-758451574088.png)

**Node Functions**

Searches whether the specified Entity is present

Note that Character Entities are still considered present even when Downed

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter On the Field Boolean

## **3. Get All Entities on the Field**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/2dea578b-fddb-4606-9796-e0a796fa9fa2.png)

**Node Functions**

Returns all Entities currently present in the scene. The number of Entities in this List may be large

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Entity List Entity List

## **4. Get Specified Type of Entities on the Field**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/ee3642fd-49ee-451c-97e3-3777d15cdba7.png)

**Node Functions**

Returns all Entities of the specified type currently in the scene. The number of Entities in this list may be large

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Type Enumeration Includes Stage, Object, Player, Character, Creation
Output Parameter Entity List Entity List

## **5. Get Entities With Specified Prefab on the Field**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/1bf496ba-bbad-4f3e-b1ba-0b1f3b354ed5.png)

**Node Functions**

Returns all Entities currently in the scene that were created by the specified Prefab ID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Prefab ID Prefab ID
Output Parameter Entity List Entity List

## **6. Get Character Attribute**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/5edb857e-d58b-4b70-8951-d75fa033ba01.png)

**Node Functions**

Returns the Base Attributes of the Character Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Level Integer
Output Parameter Current HP Floating Point Numbers
Output Parameter Max HP Floating Point Numbers
Output Parameter Current ATK Floating Point Numbers
Output Parameter Base ATK Floating Point Numbers
Output Parameter Current DEF Floating Point Numbers
Output Parameter Base DEF Floating Point Numbers
Output Parameter Interrupt Value Threshold Floating Point Numbers
Output Parameter Current Interrupt Value Floating Point Numbers
Output Parameter Current Interrupt Status Enumeration

## **7. Get Entity Advanced Attribute**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/fa1aa853-659a-4882-9b08-676cde989af1.png)

**Node Functions**

Returns the Advanced Attributes of the Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter CRIT Rate Floating Point Numbers
Output Parameter CRIT DMG Floating Point Numbers
Output Parameter Healing Bonus Floating Point Numbers
Output Parameter Incoming Healing Bonus Floating Point Numbers
Output Parameter Energy Recharge Floating Point Numbers
Output Parameter CD Reduction Floating Point Numbers
Output Parameter Shield Strength Floating Point Numbers

## **8. Get Entity Type**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/f0f0cad1-db4b-4c84-883e-53e462b94082.png)

**Node Functions**

Returns the Entity Type of the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Entity Type Enumeration Includes Player, Character, Stage, Object, Creation.

## **9. Get Entity Location and Rotation**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/32bdcc12-617c-4e4c-9b4b-49e7974af2c6.png)

**Node Functions**

Returns the Location and Rotation of the Target Entity

Not applicable to Player Entities or Stage Entities

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Location 3D Vector
Output Parameter Rotate 3D Vector

## **10. Get Entity Forward Vector**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/7d484cbc-7afa-435f-9e9d-fe928474e9df.png)

**Node Functions**

Returns the Forward Vector of the specified Entity (the positive Z-axis direction in the Entity's relative coordinate system)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Forward Vector 3D Vector

## **11. Get Entity Upward Vector**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/c5a89d57-676a-494d-bd55-ca787f4445e7.png)

**Node Functions**

Returns the Upward Vector of the specified Entity (the positive Y-axis direction in the Entity's relative coordinate system)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Upward Vector 3D Vector

## **12. Get Entity Right Vector**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/491835db-f818-4b45-a76e-95838f8543e4.png)

**Node Functions**

Returns the Right Vector of the specified Entity (the positive X-axis direction in the Entity's relative coordinate system)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Right Vector 3D Vector

## **13. Get List of Entities Owned by the Entity**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/29eb4f3b-a94a-4285-8f16-f4cc1943f4dc.png)

**Node Functions**

Returns a list of all Entities owned by the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Entity List Entity List

## **14. Get Entity Elemental Attribute**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/e452f3b0-05c5-4acc-bada-180c6d919c67.png)

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/8b9ecc2a-45fa-47c4-b279-72c977d92271.png)

**Node Functions**

Returns the Element Attributes of the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Pyro DMG Bonus Floating Point Numbers
Output Parameter Pyro RES Floating Point Numbers
Output Parameter Hydro DMG Bonus Floating Point Numbers
Output Parameter Hydro RES Floating Point Numbers
Output Parameter Dendro DMG Bonus Floating Point Numbers
Output Parameter Dendro RES Floating Point Numbers
Output Parameter Electro DMG Bonus Floating Point Numbers
Output Parameter Electro RES Floating Point Numbers
Output Parameter Anemo DMG Bonus Floating Point Numbers
Output Parameter Anemo RES Floating Point Numbers
Output Parameter Cryo DMG Bonus Floating Point Numbers
Output Parameter Cryo RES Floating Point Numbers
Output Parameter Geo DMG Bonus Floating Point Numbers
Output Parameter Geo RES Floating Point Numbers
Output Parameter Physical DMG Bonus Floating Point Numbers
Output Parameter Physical RES Floating Point Numbers

## **15. Get Object Attribute**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/7fa756ad-2c69-46fd-94e4-e65d29d4f942.png)

**Node Functions**

Returns the Base Attributes of the Object

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Object Entity Entity
Output Parameter Level Integer
Output Parameter Current HP Floating Point Numbers
Output Parameter Max HP Floating Point Numbers
Output Parameter Current ATK Floating Point Numbers
Output Parameter Base ATK Floating Point Numbers
Output Parameter Current DEF Floating Point Numbers
Output Parameter Base DEF Floating Point Numbers

## **16. Get Owner Entity**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/e27db519-7695-4a87-892f-66aa4277a9f9.png)

**Node Functions**

Returns the Owner Entity of the specified Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Owner Entity Entity

## **17. Get Entity List by Specified Range**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a7fdc7a9-ad2e-488f-b46e-fefef9969b93.png)

**Node Functions**

Returns a list of Entities within a specified spherical range from the Target Entity List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity List Entity List
Input Parameter Center Point 3D Vector
Input Parameter Radius Floating Point Numbers
Output Parameter Result List Entity List

## **18. Get Entity List by Specified Type**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/0c27339c-f5cb-426e-ac6c-3da12682a71e.png)

**Node Functions**

Returns a list of specified Entity types from the Target Entity List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity List Entity List
Input Parameter Entity Type Enumeration Includes Player, Character, Stage, Object, Creation.
Output Parameter Result List Entity List

## **19. Get Entity List by Specified Prefab ID**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/538dfbc1-7eab-4841-9782-7c7c8a64fdde.png)

**Node Functions**

Returns a list of Entities created with the specified Prefab ID from the Target Entity List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity List Entity List
Input Parameter Prefab ID Prefab ID
Output Parameter Result List Entity List

## **20. Get Entity List by Specified Faction**

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/0f562e83-f486-4257-9741-9a764f67693e.png)

**Node Functions**

Returns the list of Entities belonging to a specific Faction from the Target Entity List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity List Entity List
Input Parameter Faction Faction
Output Parameter Result List Entity List

## **21. Get Self Entity**

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/61ffeb99-7bdb-41f2-b66b-42759729509c.png)

**Node Functions**

Returns the Entity associated with this Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Self Entity Entity

## **22. Query GUID by Entity**

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/ed0975d4-68d3-43d4-8ba3-2a72acc1aea1.png)

**Node Functions**

Searches for the GUID of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity Entity
Output Parameter GUID GUID

## **23. Query Entity by GUID**

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/76f3c777-e62c-4916-bae9-58ca12740599.png)

**Node Functions**

Searches for an Entity by GUID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter GUID GUID
Output Parameter Entity Entity

## **24. Check Entity's Elemental Effect Status**

![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/d75e1135-689a-4276-9df2-235c96c8b153.png)

**Node Functions**

Check entity's elemental effect status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Affected by Hydro Boolean
Output Parameter Affected by Cryo Boolean
Output Parameter Affected by Electro Boolean
Output Parameter Affected by Pyro Boolean
Output Parameter Affected by Dendro Boolean
Output Parameter Affected by Anemo Boolean
Output Parameter Affected by Geo Boolean
Output Parameter Affected by Frozen Boolean
Output Parameter Affected by Electro-Charged Boolean Lunar-Charged is not considered as Electro-Charged
Output Parameter Affected by Burning Boolean
Output Parameter Affected by Petrification Boolean
Output Parameter Affected by Catalyze Boolean

# VII. Stage Related

## **1. Query Current Environment Time**

![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/11fe3f10-96f6-4b54-8323-d089004a4936.png)

**Node Functions**

Searches the current Environment Time, in the range [0, 24)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Current Environment Time Floating Point Numbers The value range is [0, 24)
Output Parameter Current Loop Day Integer Number of Loop Days elapsed

## **2. Query Game Time Elapsed**

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/b56f5d27-7484-48cf-b8bd-114bfa95a03f.png)

**Node Functions**

Searches how long the game has been running, in seconds

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Game Time Elapsed Integer

# VIII. Faction Related

## **1. Query Entity Faction**

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a851e6f7-c66d-450e-8666-69852825a692.png)

**Node Functions**

Searches the Faction of the specified Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Faction Faction

## **2. Query If Faction Is Hostile**

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/59e305b3-2643-49fe-89b0-2269ed56bce0.png)

**Node Functions**

Searches whether two Factions are hostile to each other

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Faction 1 Faction
Input Parameter Faction 2 Faction
Output Parameter Hostile Boolean

# IX. Player and Character Related

## **1. Query If All Player Characters Are Down**

![Image 56](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/749d1c55-eb7e-4729-a628-7f4fc3aaad00.png)

**Node Functions**

Check if all of the player's characters are downed

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Result Boolean

## **2. Get Player GUID by Player ID**

![Image 57](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/bf2cfd72-8201-4892-8e61-6927337e06cf.png)

**Node Functions**

Returns the Player GUID based on Player ID, where the ID indicates which Player they are

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player ID Integer
Output Parameter Player GUID GUID

## **3. Get Player ID by Player GUID**

![Image 58](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/fecbb084-c5e7-4cb1-a464-638a56590358.png)

**Node Functions**

Returns the Player ID based on Player GUID, where the ID indicates which Player they are

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player GUID GUID
Output Parameter Player ID Integer

## **4. Get Player Client Input Device Type**

![Image 59](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/953bda5e-848d-412f-a803-02f82837b1c5.png)

**Node Functions**

Returns the Player's local input device type, as determined by the Interface mapping method

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Input Device Type Enumeration Includes keyboard/mouse, gamepad, touchscreen

## **5.**Get Player Entity to Which the Character Belongs

![Image 60](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/9682b00c-83ef-4daa-9887-5ff4272ba957.png)

**Node Functions**

Returns the Player Entity that owns the Character Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Output Parameter Affiliated Player Entity Entity

## **6. Get Player Revive Time**

![Image 61](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/caba8113-4483-4378-a447-e65062844042.png)

**Node Functions**

Returns the revive duration of the specified Player Entity, in seconds

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Duration Integer

## **7. Get Player Nickname**

![Image 62](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a2deedc8-46fb-4ffd-bf04-f0a01cf419ca.png)

**Node Functions**

Returns the Player's nickname

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Player Nickname String

## **8. Get Player Remaining Revives**

![Image 63](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a850b588-7cc0-43b5-bdc9-1bd78f6ceb11.png)

**Node Functions**

Returns the remaining number of revives for the specified Player Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Remaining Times Integer

## **9. Get List of Player Entities on the Field**

![Image 64](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/48bbc5ee-26d2-4637-9d3b-1ae209b94c51.png)

**Node Functions**

Returns a list of all Player Entities present in the scene

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity List Entity List

## **10. Get All Character Entities of Specified Player**

![Image 65](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/6ead71f3-38d7-41b8-8997-47be8891d626.png)

**Node Functions**

Returns a list of all Character Entities for the specified Player Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Character Entity List Entity List

## **11. Get Active Character of Specified Player**

![Image 66](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/929008f6-804f-43c6-83cf-66fc759ac5bf.png)

**Node Functions**

Available only in Classic Mode, get the active character in the player's party.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Active Character Entity Entity

## **12. Check Classic Mode Character ID**

![Image 67](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/26639f53-be3d-482c-bccd-3fb1b5a401ea.png)

**Node Functions**

Available only in Classic Mode. You can search for the character ID of the target character to see the appendix for the specific character in [[[mh4imrrhzdzi]] Classic Mode Character ID List](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh4imrrhzdzi)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Character Entity
Output Parameter Character ID Integer

# X. Follow Motion Device

## **1. Get Follow Motion Device Target**

![Image 68](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/0648672e-8c4d-4814-82c9-76a2b92f21c8.png)

**Node Functions**

Returns the Target of the Follow Motion Device, including the Target Entity and its GUID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Follow Target Entity Entity
Output Parameter Follow Target GUID GUID

# XI. Global Timer

## **1. Get Current Global Timer Time**

![Image 69](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/de403d84-8334-41bc-8457-dd80f4e99cd3.png)

**Node Functions**

Returns the current time of the specified Global Timer on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Timer Name String
Output Parameter Current Time Floating Point Numbers

# XII. UI Control Groups

## **1. Get Player's Current UI Layout**

![Image 70](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/fb1fa991-8356-46ed-be09-51a28e04be56.png)

**Node Functions**

Returns the ID of the currently active Interface Layout on the specified Player Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Layout Index Integer

# XIII. Creation

## **1. Get Creation's Current Target**

![Image 71](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/45c85e70-addd-4562-8d25-9ef63448100f.png)

**Node Functions**

The Target Entity varies with the Creation's current behavior

For example, when a Creation is attacking, its Target is the specified enemy Entity

For example, when a Creation is healing allies, its Target is the specified allied Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Creation Entity Entity Runtime Creation Entity
Output Parameter Target Entity Entity Current intelligently selected Target Entity of the Creation

## **2. Get Aggro List of Creation in Default Mode**

![Image 72](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/34115790-7376-4fa6-87c0-ea7b92b4dff0.png)

**Node Functions**

Returns the Aggro List in Classic Mode. This Node only outputs a valid list when the Aggro Configuration is set to [Default Type]

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Creation Entity Entity Runtime Creation Entity
Output Parameter Aggro List Entity List Unordered list of Entities this Creation currently has Aggro against

## **3. Get Creation Attribute**

![Image 73](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/651a5490-4c5e-490a-a1f8-90a6dfcb3cfa.png)

**Node Functions**

Returns the Attributes of the specified Creation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Creation Entity Entity
Output Parameter Level Integer
Output Parameter Current HP Floating Point Numbers
Output Parameter Max HP Floating Point Numbers
Output Parameter Current ATK Floating Point Numbers
Output Parameter Base ATK Floating Point Numbers
Output Parameter Interrupt Value Threshold Floating Point Numbers
Output Parameter Current Interrupt Value Floating Point Numbers
Output Parameter Current Interrupt Status Enumeration

# XIV. Class

## **1. Query Player Class Level**

![Image 74](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/8ed02495-c017-4b2b-945e-faf97fe8e5d8.png)

**Node Functions**

Searches the Player's Level of the specified Class

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Input Parameter Class Config ID Config ID
Output Parameter Level Integer

## **2. Query Player Class**

![Image 75](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/54e6e963-3483-4796-818e-95a18a2ac016.png)

**Node Functions**

Searches the Player's current Class; outputs the Config ID of that Class

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Class Config ID Config ID

# XV. Skills

## **1. Query Character Skill**

![Image 76](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/5a5c3e5f-a0c9-4266-8ce0-dc01915b304d.png)

**Node Functions**

Searches the Skill in the specified slot of a Character; outputs that Skill's Config ID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Input Parameter Character Skill Slot Enumeration
Output Parameter Skill Config ID Config ID

## **2. Query Skill Config ID by Skill Instance ID**

![Image 77](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/dc44dddc-af21-4ff1-85bc-df7d7f1fd698.png)

**Node Functions**

Retrieve the Skill Config ID that corresponds to the specified Character Entity and Skill Instance ID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Input Parameter Skill Instance ID Integer
Output Parameter Skill Config ID Config ID

## **3. Query All Skill Instance IDs by Skill Config ID**

![Image 78](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/aa0f1a57-4770-4ceb-ac82-3a29a32144ae.png)

**Node Functions**

Retrieve the Skill Instance ID List that corresponds to the specified Character Entity and Skill Config ID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Input Parameter Skill Config ID Config ID
Output Parameter Skill Instance ID List Integer List

## **4. Query All Skill Instance IDs by Skill Slot**

![Image 79](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/22244644-7a07-406f-8c52-dcfdff446e57.png)

**Node Functions**

Retrieve all Skill Instance IDs present in a specified Skill Slot for the given Character Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Input Parameter Skill Slot Enumeration
Output Parameter Skill Instance ID List Integer List

## **5. Query Skill Instance ID by Skill Slot and Skill Config ID**

![Image 80](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/070b6802-a829-448a-90b5-7b225d4f85de.png)

**Node Functions**

Retrieve the Skill Instance ID in a specified Skill Slot that corresponds to a given Skill Config ID for the Character Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Input Parameter Skill Slot Enumeration
Input Parameter Skill Config ID Config ID
Output Parameter Skill Instance ID Integer

## **6. Query Skill Attribute Group Value**

![Image 81](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/ebef3005-7e4b-4116-abd7-c6926ce1eaec.png)

**Node Functions**

Retrieve the value of a Skill Group for a Character Entity, based on the specified Skill Group Config ID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity
Input Parameter Skill Group Config ID Configuration ID
Output Parameter Skill Group Value Floating Point Numbers

# XVI. Unit Status

## **1. List of Slot IDs Querying Unit Status**

![Image 82](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/ada1d590-1ba7-4d6a-bf5b-674c60c07647.png)

**Node Functions**

Searches the list of all Slot IDs for the Unit Status with the specified Config ID on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Query Target Entity Entity
Input Parameter Unit Status Config ID Config ID
Output Parameter Slot ID List Integer List

## **2. Query If Entity Has Unit Status**

![Image 83](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/64125249-9614-42a1-9d4b-25dddbf6dda5.png)

**Node Functions**

Searches whether the specified Entity has a Unit Status with the given Config ID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Unit Status Config ID Config ID
Output Parameter Has Boolean

## **3. Query Unit Status Stacks by Slot ID**

![Image 84](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/d7beda01-26de-4221-864b-2986113f6641.png)

**Node Functions**

Searches the Stack Count of the specified Unit Status on the Target Entity's designated Slot

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Query Target Entity Entity
Input Parameter Unit Status Config ID Config ID
Input Parameter Slot ID Integer
Output Parameter Stacks Integer

## **4. Query Unit Status Applier by Slot ID**

![Image 85](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/28ba9acd-89c3-44d0-b794-cb84f35b3def.png)

**Node Functions**

Searches the Applier of the specified Unit Status on the Target Entity's designated Slot

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Query Target Entity Entity
Input Parameter Unit Status Config ID Config ID
Input Parameter Slot ID Integer
Output Parameter Applier Entity Entity

# XVII. Unit Tags

## **1. Get Entity List by Unit Tag**

![Image 86](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/6b0baf3a-ad9e-4827-818b-72d655263476.png)

**Node Functions**

Returns a list of all Entities in the scene that carry this Unit Tag

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Unit Tag Index Integer
Output Parameter Entity List Entity List

## **2. Get Entity Unit Tag List**

![Image 87](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/3b6b4792-0c71-4bf6-9b97-101bafd12ee2.png)

**Node Functions**

Returns a list of all Unit Tags carried by the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Unit Tag List Integer List

# XVIII. Custom Aggro

## **1. Query Global Aggro Transfer Multiplier**

![Image 88](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/abace1d1-03a4-4219-8ff5-ac7a660e70f3.png)

**Node Functions**

Searches the Global Aggro Transfer Multiplier; it can be configured in [Stage Settings]

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Global Aggro Transfer Multiplier Floating Point Numbers

## **2. Query the Aggro Multiplier of the Specified Entity**

![Image 89](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/c0c946d5-78ef-4348-a559-cf89b3337903.png)

**Node Functions**

Query Aggro Multiplier of Specific Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Query Target Entity
Output Parameter Aggro Multiplier Float

## **3. Query the Aggro Value of the Specified Entity**

![Image 90](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/2070d5fa-3e55-4d29-bb9d-d91fd9b72e86.png)

**Node Functions**

Searches the Aggro Value of the Target Entity on its Aggro Owners

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Query Target Entity
Input Parameter Aggro Owner Entity
Output Parameter Aggro Value Integer

## **4. Query if Specified Entity Is in Combat**

![Image 91](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a70c503e-01a6-4518-b685-75f6a33927b0.png)

**Node Functions**

Searches whether the specified Entity has entered battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Query Target Entity
Output Parameter In Combat Boolean

## **5.**Get List of Owners Who Have the Target in Their Aggro List

![Image 92](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/5b18ace0-e335-4c54-957d-ec9fc5a1ec1b.png)

**Node Functions**

Searches which Entities' Aggro Lists include the specified Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Query Target Entity
Output Parameter Aggro Owner List Entity List

## **6.**Get List of Owners That Have the Target As Their Aggro Target

![Image 93](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/19c03718-1c8a-4cd3-ad70-8a0f6f4d3748.png)

**Node Functions**

Searches which Entities have the Target Entity as their Aggro Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Aggro Owner List Entity List

## **7. Get the Aggro List of the Specified Entity**

![Image 94](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/e3f7c9a4-6c0b-4f89-8640-630dbfefc273.png)

**Node Functions**

Get Specific Entity's Aggro List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Aggro List Entity List

## **8. Get the Aggro Target of the Specified Entity**

![Image 95](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/86571c4b-9553-4ccb-a14e-ee884f9d099f.png)

**Node Functions**

Get Aggro Target of Specific Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Aggro Owner Entity
Output Parameter Aggro Target Entity

# XIX. Global Path

## **1. Get the Number of Waypoints in the Global Path**

![Image 96](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/f1edc3b6-616f-4009-b6d9-8d4e4a3f8bdb.png)

**Node Functions**

Get the number of Waypoints in the Global Path

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Path Index Integer
Output Parameter Number of Waypoints Integer

## **2. Get Specified Waypoint Info**

![Image 97](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/f0295562-6a0b-4f2c-b8a7-d5ab23b4a04c.png)

**Node Functions**

Searches the specified Waypoint information for the given Path

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Path Index Integer
Input Parameter Path Waypoint ID Integer
Output Parameter Waypoint Location 3D Vector
Output Parameter Waypoint Orientation 3D Vector

# XX. Preset Points

## **1. Get Preset Point List by Unit Tag**

![Image 98](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/d5e456b7-a7fd-43ab-bc7d-4d574e3e4a2c.png)

**Node Functions**

Searches all Preset Points that carry the Unit Tag by its ID; outputs each Preset Point's ID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Unit Tag ID Integer
Output Parameter Point Index List Integer List

## **2. Query Preset Point Position Rotation**

![Image 99](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/2dc7377d-89f9-4748-8839-f179fe8b5cdc.png)

**Node Functions**

Searches the Location and Rotation of the specified Preset Point

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Point Index Integer
Output Parameter Location 3D Vector
Output Parameter Rotate 3D Vector

# XXI. Stage Settlement

## **1. Get Player Settlement Success Status**

![Image 100](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/d9c322b1-0cdc-4a08-9e89-7fac91994232.png)

**Node Functions**

Get Player Settlement Success Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Settlement Status Enumeration Includes: Undetermined, Victory, Defeat

## **2. Get Player Settlement Ranking Valu**e

![Image 101](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/659d7e36-b16b-446d-a03d-a41ec5aeeb08.png)

**Node Functions**

Returns the Settlement ranking value for the specified Player Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Ranking Value Integer

## **3. Get Faction Settlement Success Status**

![Image 102](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/c558ea93-3f3a-48e8-9272-6145082bf3d0.png)

**Node Functions**

Get Faction Settlement Success Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Faction Faction
Output Parameter Settlement Status Enumeration Includes: Undetermined, Victory, Defeat

## **4. Get Faction Settlement** Ranking Value

![Image 103](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/7a812362-1e3a-424c-9153-4eeccde96dda.png)

**Node Functions**

Returns the Settlement ranking value for the specified Faction

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Faction Faction
Output Parameter Ranking Value Integer

# XXII. Dictionary

## **1. Query If Dictionary Contains Specific Key**

![Image 104](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/e76049b7-26b8-4f25-830e-283d3459f333.png)

**Node Functions**

Searches whether the specified Dictionary contains the specified Key

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Include Boolean

## **2. Query If Dictionary Contains Specific Value**

![Image 105](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/d18fd9fe-1749-4c86-ac14-c3b2bf99defd.png)

**Node Functions**

Searches whether the specified Dictionary contains the specified Value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Value Generic
Output Parameter Include Boolean

## **3. Query Dictionary's Length**

![Image 106](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/b7a56d50-b78b-4dcf-bb52-067bcd2d02b0.png)

**Node Functions**

Searches the number of Key-Value Pairs in the Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Length Integer

## **4. Query Dictionary Value by Key**

![Image 107](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/00744790-7e4e-4f42-9a2b-48551bc82074.png)

**Node Functions**

Searches the corresponding Value in the Dictionary by Key. If the Key does not exist, returns the type's default value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Input Parameter Key Generic
Output Parameter Value Generic

## **5. Get List of Keys from Dictionary**

![Image 108](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/b6fce772-d45b-4fd7-a5f6-915f9fbe6932.png)

**Node Functions**

Returns a list of all Keys in the Dictionary. Because Key-Value Pairs are unordered, the Keys may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Key List Generic

## **6. Get List of Values from Dictionary**

![Image 109](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/4b97f5bd-aefa-4ab0-ad8b-d20b8311c69a.png)

**Node Functions**

Returns a list of all Values in the Dictionary. Because Key-Value Pairs are unordered, the Values may not be returned in insertion order

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dictionary Generic
Output Parameter Value List Generic

# XXIII. Shop

## **1. Query Inventory Shop Item Sales Info**

![Image 110](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/fe9b5c13-c35f-4db9-8c48-aa0b4d4e9e48.png)

**Node Functions**

Searches sale information for a specified Item in the Inventory Shop

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Shop Owner Entity Entity
Input Parameter Shop ID Integer
Input Parameter Item Config ID Config ID
Output Parameter Sell Currency Dictionary Dictionary
Output Parameter Sort Priority Integer
Output Parameter Can Be Sold Boolean

## **2. Query Inventory Shop Item Sales List**

![Image 111](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/523c5afa-e026-4eb6-82c9-83dd7bedebc3.png)

**Node Functions**

Search the inventory shop's sales list

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Shop Owner Entity Entity
Input Parameter Shop ID Integer
Output Parameter Item Config ID List Config ID List

## **3. Query Shop Purchase Item List**

![Image 112](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/9c5f5a98-a0f9-4f24-8259-28f78b91d8a8.png)

**Node Functions**

Search the shop's purchase list

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Shop Owner Entity Entity
Input Parameter Shop ID Integer
Output Parameter Item Config ID List Config ID List

## **4. Query Shop Item Purchase Info**

![Image 113](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/d1b34450-93c0-4c62-990a-5d6f238be8ed.png)

**Node Functions**

Searches purchase information for a specified Item in the Shop

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Shop Owner Entity Entity
Input Parameter Shop ID Integer
Input Parameter Item Config ID Config ID
Output Parameter Purchase Currency Dictionary Dictionary
Output Parameter Purchasable Boolean

## **5. Query Custom Shop Item Sales List**

![Image 114](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/c5e3de7a-8018-44d6-a6b9-bd9f92f262f1.png)

**Node Functions**

Searches the Custom Shop sale list; the output parameter is a list of Item IDs

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Shop Owner Entity Entity
Input Parameter Shop ID Integer
Output Parameter Shop Item ID List Integer List

## **6. Query Custom Shop Item Sales Info**

![Image 115](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/01476ccc-e9ff-49f2-a939-6f1f8e90d0a1.png)

**Node Functions**

Searches sale information for a specified Item in the Custom Shop

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Shop Owner Entity Entity
Input Parameter Shop ID Integer
Input Parameter Shop Item ID Integer
Output Parameter Item Config ID Config ID
Output Parameter Sell Currency Dictionary Dictionary
Output Parameter Affiliated Tab ID Integer
Output Parameter Limit Purchase Boolean
Output Parameter Purchase Limit Integer
Output Parameter Sort Priority Integer
Output Parameter Can Be Sold Boolean

# XXIV. Equipment

## **1. Query Equipment Tag List**

![Image 116](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/11c9daa8-60e6-4a34-990b-3508809b5939.png)

**Node Functions**

Searches the list of all Tags on this Equipment instance

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Equipment Index Integer
Output Parameter Tag List Config ID List

## **2. Query Equipment Config ID by Equipment ID**

![Image 117](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/5ef928c3-d6b7-4151-935c-7412214d2a16.png)

**Node Functions**

Searches the Equipment Config ID by Equipment ID. The Equipment Instance ID can be obtained in the [Equipment Initialization] event

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Equipment Index Integer
Output Parameter Equipment Config ID Config ID

## **3. Get Equipment Affix List**

![Image 118](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/74d72d4b-74d1-494d-9211-5c188d814800.png)

**Node Functions**

Returns a list of all Affixes on this Equipment instance

When Equipment is initialized, Affix values are randomized, so the Equipment Affixes on the Equipment instance also generate corresponding instances. Therefore, the data type is Integer rather than Config ID

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Equipment Index Integer
Output Parameter Equipment Affix List Integer List

## **4. Get Equipment Affix Config ID**

![Image 119](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/ffd81274-f4d5-4ddb-a3ef-f0827f2c219a.png)

**Node Functions**

Returns the Config ID of an Equipment Affix by its ID on the Equipment instance

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Equipment Index Integer
Input Parameter Affix ID Integer
Output Parameter Affix Config ID Config ID

## **5. Get Equipment Affix Value**

![Image 120](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/13da7af6-02d2-4bd9-acdf-d9ac46f5a8dd.png)

**Node Functions**

Returns the value of the Affix at the specified ID on the Equipment instance

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Equipment Index Integer
Input Parameter Affix ID Integer
Output Parameter Affix Value Floating Point Numbers

## **6. Get the Equipment Index of the Specified Equipment Slot**

![Image 121](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/5c6f5434-0554-409b-9a71-f151d7a14e5b.png)

**Node Functions**

Get the equipment index of the specified equipment slot

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Row Integer
Input Parameter Column Integer
Output Parameter Equipment Index Integer

# XXV. Items

## **1. Get Inventory Item Quantity**

![Image 122](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/af4727e4-346d-44f0-aa56-6ec9f5b2e4a1.png)

**Node Functions**

Returns the quantity of the Item with the specified Config ID in the Inventory

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Inventory Owner Entity Entity
Input Parameter Item Config ID Config ID
Output Parameter Item Quantity Integer

## **2. Get Inventory Currency Quantity**

![Image 123](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/0f76380d-79fe-4610-8eee-526e91497e2b.png)

**Node Functions**

Returns the amount of Currency with the specified Config ID in the Inventory

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Inventory Owner Entity Entity
Input Parameter Currency Config ID Config ID
Output Parameter Resource Quantity Integer

## **3. Get Inventory Capacity**

![Image 124](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a1391b52-ea96-460a-bce4-6700d6b0bdfd.png)

**Node Functions**

Get Inventory Capacity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Inventory Owner Entity Entity
Output Parameter Inventory Capacity Integer

## **4. Get All Currency From Inventory**

![Image 125](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/fe1db3de-ffd9-4a55-a0dd-ab9c83875b82.png)

**Node Functions**

Returns all Currencies in the Inventory, including types and corresponding amounts

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Inventory Owner Entity Entity
Output Parameter Currency Dictionary Dictionary

## **5. Get all basic items from Inventory**

![Image 126](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/0e8601ad-0a86-4f6a-950f-be5cb4e3aee9.png)

**Node Functions**

Returns all Basic Items in the Inventory, including Item types and their quantities

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Inventory Owner Entity Entity
Output Parameter Basic Item Dictionary Dictionary

## **6. Get all equipment from Inventory**

![Image 127](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/2d7c0b7f-5a0a-4ebc-88b4-18199740fa4e.png)

**Node Functions**

Returns all Equipment in the Inventory; the output parameter is a list of all Equipment IDs

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Inventory Owner Entity Entity
Output Parameter Equipment Index List Integer List

## **7. Get Loot Component Item Quantity**

![Image 128](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/3cfb537f-581c-47fb-ad82-9ab0ff1165df.png)

**Node Functions**

Returns the quantity of Items with the specified Config ID from the Loot Component on the Loot Prefab

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Loot Entity Entity
Input Parameter Item Config ID Config ID
Output Parameter Item Quantity Integer

## **8. Get Loot Component Currency Quantity**

![Image 129](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/98e82e7d-b09a-453b-9ce6-50ff03bf406b.png)

**Node Functions**

Returns the amount of Currency with the specified Config ID from the Loot Component on the Loot Prefab

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Loot Entity Entity
Input Parameter Currency Config ID Config ID
Output Parameter Currency Amount Integer

## **9. Get All Equipment from Loot Component**

![Image 130](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/6ce51ecc-0f5f-4f58-a572-3702c75f738c.png)

**Node Functions**

Returns all Equipment from the Loot Component on the Loot Prefab

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Loot Entity Entity
Output Parameter Equipment Index List Integer List

## **10.**Get All Items from Loot Component

![Image 131](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/42f8a1a8-1a36-4b11-b9d0-e47c288f2d02.png)

**Node Functions**

Returns all Items from the Loot Component on the Loot Prefab

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dropper Entity Entity
Output Parameter Item Dictionary Dictionary

## **11.**Get All Currency from Loot Component

![Image 132](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/17998466-7333-46c4-9f75-6aa47544d419.png)

**Node Functions**

Returns all Currencies from the Loot Component on the Loot Prefab

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Dropper Entity Entity
Output Parameter Currency Dictionary Dictionary

# XXVI. Collision Trigger

## **1. Get All Entities Within the Collision Trigger**

![Image 133](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/3500b766-88df-44d4-937a-9b21d86f4c46.png)

**Node Functions**

Returns all Entities within the Collision Trigger corresponding to a specific ID in the Collision Trigger Component on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Trigger ID Integer
Output Parameter Entity List Entity List

# XXVII. Mini-Map Marker Component

## **1. Query Specified Mini-Map Marker Information**

![Image 134](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/4b2d12fa-c66f-4601-a0af-215ed4f21544.png)

**Node Functions**

Searches the information of the Mini-map Marker with the specified ID in the Mini-map Marker Component on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity Runtime Entity
Input Parameter Mini-Map Marker ID Integer The Mini-map Marker ID to search
Output Parameter Activation Staet Boolean The active state of the searched Mini-map Marker
Output Parameter List of Players With Visible Markers Entity List Returns the list of Players who can see this Marker
Output Parameter List of Players Tracking Markers Entity List Returns the list of Players tracking this Marker

## **2. Get Entity's Mini-Map Marker Status**

![Image 135](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/4d45dbb1-9daa-4841-922e-ceef12e8f08a.png)

**Node Functions**

Searches the configuration and activation status of the Entity's current Mini-map Marker

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity Runtime Entity
Output Parameter Full Mini-Map Marker ID List Integer List Complete list of Mini-map Marker IDs for this Entity
Output Parameter Active Mini-Map Marker ID List Integer List Complete list of active Mini-map Marker IDs for this Entity
Output Parameter Inactive Mini-Map Marker ID List Integer List Complete list of inactive Mini-map Marker IDs for this Entity

# XXVIII. Creature Patrol

## **1. Get Current Creation's Patrol Template**

![Image 136](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/d588060b-5a0a-433e-828d-9c955249ac60.png)

**Node Functions**

Returns the Patrol Template information of the specified Creation Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Creation Entity Entity Runtime Creation Entity
Output Parameter Patrol Template ID Integer The Patrol Template ID currently active on this Creation
Output Parameter Path Index Integer The Path ID referenced by the Creation's currently active Patrol Template
Output Parameter Target Waypoint Index Integer The Waypoint ID the Creation will move to next

# XXIX. Achievements

## **1. Query If Achievement Is Completed**

![Image 137](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/251d3a23-08f5-4555-8b31-802dce3ca7d3.png)

**Node Functions**

Searches whether the Achievement corresponding to a specific ID on the Target Entity is complete

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Achievement ID Integer
Output Parameter Completed Boolean

# XXX. Scan Tags

## **1. Get the Currently Active Scan Tag Config ID**

![Image 138](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/3bb34255-cf07-4ff6-9e28-354cafa3297e.png)

**Node Functions**

Returns the Configuration ID of the currently active Scan Tags on the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Output Parameter Scan Tag Config ID Config ID

# XXXI. Rank Tier

## **1. Get Player Rank Score Change**

![Image 139](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/4213b057-4fda-4cb8-9644-90bb28755ab9.png)

**Node Functions**

Returns the Rank change score for the Player Entity under different Settlement states

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Input Parameter Settlement Status Enumeration
Output Parameter Score Integer

## **2. Get Player Ranking Info**

![Image 140](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/a70279b4-10e8-4328-9640-8be072f3b31e.png)

**Node Functions**

Returns the Player's Rank-related information

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Player Rank Total Score Integer
Output Parameter Player Win Streak Integer
Output Parameter Player Lose Streak Integer
Output Parameter Player Consecutive Escapes Integer

## **3. Get Player Escape Validity**

![Image 141](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/fe37f672-146f-4a00-9c9c-a34fcf23a665.png)

**Node Functions**

Get Player Escape Permission

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Output Parameter Valid Boolean

# XXXII. Entity Layout Group

## **1. Get Currently Active Entity Deployment Groups**

![Image 142](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/2cad7480-1fd8-4183-972c-1743ef4ae6b9.png)

**Node Functions**

Searches the list of Entity Layout Groups currently active in the Stage

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Entity Deployment Group Index List Integer List

# XXXIII. Wonderland Gift Box Related

## **1. Query Corresponding Gift Box Quantity**

![Image 143](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/c54caf84-4ced-4b7f-910e-680878332baf.png)

**Node Functions**

Searches the quantity of the specified Gift Box on the Player Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Input Parameter Gift Box Index Integer
Output Parameter Quantity Integer

## **2. Query Corresponding Gift Box Consumption**

![Image 144](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/1ca9ddb8-c605-44cd-b2ef-81e85f477674.png)

**Node Functions**

Searches the consumed quantity of the specified Gift Box on the Player Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity
Input Parameter Gift Box Index Integer
Output Parameter Quantity Integer

# XXXIV. Creation Preset Status

## **1. Get the Preset Status Value of the Complex Creation**

![Image 145](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrm9yin7qsc/616cc202-5bf6-428f-96f5-f7e504922769.png)

**Node Functions**

Get the preset status value of the complex creation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity 复杂造物实体
Input Parameter Preset Status Index Integer
Output Parameter Preset Status Value Integer

[Flow Control Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhe8yn9bysd6)[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnd4l069tk0)
