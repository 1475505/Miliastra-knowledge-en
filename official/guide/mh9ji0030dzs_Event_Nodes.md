---
id: mh9ji0030dzs
title: Event Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
language: en
scope: guide
crawledAt: 2026-05-31T16:22:23.080Z
---

# Event Nodes

# I. Custom Variables

## **1. When Node Graph Variable Changes**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/781dd23e-fedb-4a96-aef6-1fbbc1d14959.png)

**Node Functions**

This event is triggered when a Node Graph Variable in the current Node Graph changes

The previous and current values are Generic. Determine the Generic type to correctly receive events for Node Graph Variables of the corresponding type

Vessel-type Node Graph Variables do not provide before-value and after-value Output Parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity The Entity associated with this Node Graph
Output Parameter Event Source GUID GUID GUID of the Entity associated with this Node Graph
Output Parameter Variable Name String Name of the Variable that was changed
Output Parameter Pre-Change Value Generic The Variable's value before the change
Output Parameter Post-Change Value Generic The Variable's value after the change

## **2. When Custom Variable Changes**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/f49fc2ac-b344-401b-8253-62b16e3de71a.png)

**Node Functions**

This event is triggered when the Custom Variable of the Entity associated with the current Node Graph changes

The previous and current values are Generic. Determine the Generic type before you can correctly receive events for Custom Variables of the corresponding type

Vessel-type Custom Variables do not provide before-value and after-value Output Parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity The Entity associated with this Node Graph
Output Parameter Event Source GUID GUID GUID of the Entity associated with this Node Graph
Output Parameter Variable Name String Name of the Variable that was changed
Output Parameter Pre-Change Value Generic The Variable's value before the change
Output Parameter Post-Change Value Generic The Variable's value after the change

# II. Preset Status

## **1. When Preset Status Changes**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/8a3c1c85-529e-4f85-8053-94baaab36125.png)

**Node Functions**

This event is triggered when the Preset Status of the Entity associated with the Node Graph changes

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Preset Status ID Integer
Output Parameter Pre-Change Value Integer
Output Parameter Post-Change Value Integer

# III. Entity Related

## **1.**When Character Movement SPD Meets Condition

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/ba8d8c03-d1d4-4e42-ac94-37aa5687fee8.png)

**Node Functions**

Adds the Unit Status effect [Monitor Movement Speed] to the Character Entity. This event is triggered when the conditions are met

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Unit Status Config ID Config ID
Output Parameter Condition: Comparison Type Enumeration
Output Parameter Condition: Comparison Value Floating Point Numbers
Output Parameter Current Movement SPD Floating Point Numbers

## **2. When Entity Is Created**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/38a1dcbf-a019-4ed4-ac81-5ad451c5b426.png)

**Node Functions**

This event is triggered when an Entity is created

All types of Entities can trigger this event. Stage Entities, Character Entities, and Player Entities trigger this event when entering a Stage

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID

## **3. When Entity Is Destroyed**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/16f60047-8e7b-4820-a3a6-e989cd819173.png)

**Node Functions**

This event triggers when objects and creations within the stage are destroyed. This event can only trigger on stage entities.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity Destroyed Entity
Output Parameter Event Source GUID GUID
Output Parameter Location 3D Vector
Output Parameter Orientation 3D Vector
Output Parameter Entity Type Enumeration
Output Parameter Faction Faction
Output Parameter Damage Source Entity
Output Parameter Owner Entity Entity
Output Parameter Custom Variable Component Snapshot Custom Variable Snapshot On destroy, captures a snapshot of the Custom Variable component on this Entity. Use the Search Custom Variable Snapshot node to retrieve its Custom Variable values

## **4. When Entity Is Removed/Destroyed**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/c31a06cd-e7bd-4a69-89ce-cb70aefdc72c.png)

**Node Functions**

This event is triggered when any Entity in the Stage is removed or destroyed, and it can only be triggered on Stage Entities

This event is triggered upon Entity destruction or removal. Therefore, when an Entity is destroyed, it triggers both the [On Entity Destroyed] and [On Entity Removed/Destroyed] events in sequence

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source GUID GUID

# IV. Faction Related

## **1. When Entity Faction Changes**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/c9be661c-4413-4bff-86fa-3399f878be35.png)

**Node Functions**

This event is triggered when an Entity's Faction changes

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Pre-Change Faction Faction
Output Parameter Post-Change Faction Faction

# V. Player and Character Related

## **1. When the Character Is Down**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/8dbb544a-27fe-43ed-9c90-b9f639ab551d.png)

**Node Functions**

When a Character is Downed, the Node Graph on the Character Entity can trigger this event

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Character Entity Entity
Output Parameter Reason Enumeration Node Graph caused: the Character was Downed by the Destroy Entity node in the Node Graph

Normal Down: the Character was Downed because HP reached 0

Abnormal Down: the character was downed due to drowning, falling into an abyss, etc.
Output Parameter Knockdown Entity Entity

## **2. When Character Revives**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/78d1e945-86cc-4a6f-a590-124e40ae67db.png)

**Node Functions**

When a Character is Revived, the Node Graph on the Character Entity can trigger this event

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Character Entity Entity

## **3. When Player Teleport Completes**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/bf246e2b-8ce4-459c-81ad-ef17b4692687.png)

**Node Functions**

This event is triggered on the Player Entity's Node Graph when the Player completes teleportation

This event is also triggered when a Player enters a Stage for the first time

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity
Output Parameter Player GUID GUID

## **4. When All Player's Characters Are Down**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/067ef1d8-fe07-490c-95d4-454f710fbac7.png)

**Node Functions**

This event is triggered on the Player Entity's Node Graph when all of the Player's Character Entities are Downed

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity
Output Parameter Reason Enumeration Node Graph caused: the Character was Downed by the Destroy Entity node in the Node Graph

Normal Down: the Character was Downed because HP reached 0

Abnormal Down: the character was downed due to drowning, falling into an abyss, etc.

## **5. When All Player's Characters Are Revived**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/e6ad7cf5-397f-417a-a477-a0d96f011a0f.png)

**Node Functions**

This event is triggered on the Player Entity's Node Graph when all of the Player's Characters are Revived

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity

## **6. When Player Is Abnormally Downed and Revives**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/f8a60e68-ad2e-4000-b124-98c0e20ff3b7.png)

**Node Functions**

This event is triggered on the Player Entity when a Character is Downed and then Revived due to drowning, falling into an abyss, or similar reasons

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity

## **7.**When the Active Character Changes

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/fe36e29c-073c-4a1e-9cab-4379d3c3d829.png)

**Node Functions**

Available only in Classic Mode. This event is triggered on the player entity when the active character changes.

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity
Output Parameter Player GUID GUID
Output Parameter Replaced Character Entity Entity
Output Parameter Current Active Character Entity Entity

# VI. Collision Trigger

## **1. When Entering Collision Trigger**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/1e7deef8-8cef-4c45-9f96-69a5ee452abf.png)

**Node Functions**

The "Collision Trigger Source" range of a runtime entity A enters the "Collision Trigger" range of another runtime entity B

Node graph events will be sent to the entity B configured with "Collision Trigger"

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Entering Entity Entity Entity A (referenced above)
Output Parameter Entering Entity GUID GUID
Output Parameter Trigger Entity Entity Entity B (mentioned above)
Output Parameter Trigger Entity GUID GUID
Output Parameter Trigger ID Integer The trigger with the corresponding ID in Entity B's Collision Trigger Component

## **2. When Exiting Collision Trigger**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/49158405-2871-436f-8cbd-c776d3233f8a.png)

**Node Functions**

When the "Collision Trigger Source" range of active Entity A leaves the "Collision Trigger" range of active Entity B

Node graph events will be sent to the entity B configured with "Collision Trigger"

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Exiting Entity Entity Entity A (referenced above)
Output Parameter Exiting Entity GUID GUID
Output Parameter Trigger Entity Entity Entity B (mentioned above)
Output Parameter Trigger Entity GUID GUID
Output Parameter Trigger ID Integer

# VII. Combat

## **1. When HP Is Recovered**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/6f347eb2-e29e-4379-8156-5562bbb1700a.png)

**Node Functions**

This event is triggered when an Entity's HP is restored

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Healer Entity Entity
Output Parameter Recovery Amount Floating Point Numbers Actual healing amount. If the Entity had not lost any HP prior to healing, the amount is 0
Output Parameter Recover Tag List String List

## **2. When Initiating HP Recovery**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/0a99e76a-30dc-4ac0-865e-1e43d5ca1a64.png)

**Node Functions**

This event is triggered on the initiating Entity when an Entity restores HP to other Entities

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Recover Target Entity Entity
Output Parameter Recovery Amount Floating Point Numbers Actual healing amount. If the Target Entity had not lost any HP prior to healing, the amount is 0
Output Parameter Recover Tag List String List

## **3. When Attack Hits**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/c93c2924-8661-4f56-9e94-c8212ac99ae0.png)

**Node Functions**

This event is triggered when an Entity's attack hits other Entities

(In Classic Mode, due to the Craftsperson's settings, the actual damage may differ from other scenarios.)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Hit Target Entity Entity
Output Parameter Damage Floating Point Numbers Actual damage dealt. If no damage is dealt due to Invincible or other reasons, the amount is 0
Output Parameter Attack Tag List String List
Output Parameter Elemental Type Enumeration
Output Parameter Elemental Attack Potency Floating Point Numbers Elemental Gauge in the Attack

## **4. When Attacked**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/b9b71a1d-7397-44e2-923e-7bdfd91da0bc.png)

**Node Functions**

This event is triggered when the Entity is attacked

(In Classic Mode, due to the Craftsperson's settings, the actual damage may differ from other scenarios.)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Attacker Entity Entity
Output Parameter Damage Floating Point Numbers Actual damage dealt. If no damage is dealt due to Invincible or other reasons, the amount is 0
Output Parameter Attack Tag List String List
Output Parameter Elemental Type Enumeration
Output Parameter Elemental Attack Potency Floating Point Numbers Elemental Gauge in the Attack

## **5. When Entering an Interruptible State**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/cf24ea1d-eb1b-4d04-af1b-5eab37f2d5d6.png)

**Node Functions**

Available only in Beyond Mode.

This event is triggered when an Entity is attacked and enters the Vulnerable Status

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Attacker Entity

# VIII. Motion Device

## **1. When Basic Motion Device Stops**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/e2dbb7ec-2457-4cb3-aedf-6bebf73562cc.png)

**Node Functions**

This event is sent to the Component Owner when a Basic Motion Device on the Basic Motion Device Component completes its movement or is disabled

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity Component Owner
Output Parameter Event Source GUID GUID
Output Parameter Motion Device Name String

## **2. When Path Reaches Waypoint**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/9fc2a30d-0b8d-462a-8eb7-708dbd19768d.png)

**Node Functions**

When the Pathing Motion Device reaches a Waypoint, it sends this event to the Owner of the Basic Motion Device Component. This event is triggered only if "Send Event on Waypoint Arrival" is enabled in the Waypoint settings

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity Component Owner
Output Parameter Event Source GUID GUID
Output Parameter Motion Device Name String
Output Parameter Path Point ID Integer

# IX. Hit Detection

## **1. When On-Hit Detection Is Triggered**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/e4ff738a-5b0f-48a6-9602-db8783e375fd.png)

**Node Functions**

This event is triggered when the On-Hit Detection Component's Owner hits other Entities or the Scene

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter On-Hit Hurtbox Boolean If set to False: The environment was hit

If set to True: An Entity was hit. Retrieve values from the Hit Entity output parameter
Output Parameter On-Hit Entity Entity Hit Entity is only valid when a Hurtbox is hit
Output Parameter On-Hit Location 3D Vector

# X. Timer

## **1. When Timer Is Triggered**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/8fbe2bc2-2052-4848-8071-4faa9a0f97c9.png)

**Node Functions**

This event is triggered when the Timer reaches the specified time node

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Timer Name String
Output Parameter Timer Sequence ID Integer
Output Parameter Number of Loops Integer

# XI. Global Timer

## **1. When Global Timer Is Triggered**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/53efbf1d-62c7-419f-b044-90f7cdf3e299.png)

**Node Functions**

This event is triggered when the Global Countdown Timer reaches zero

The Global Stopwatch Timer does not trigger this event

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Timer Name String

# XII. UI Control Groups

## **1. When UI Control Group Is Triggered**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/504c2e6d-c2d9-489b-97e4-1f04be0e1cf9.png)

**Node Functions**

This event is triggered only by UI controls of the following types: Interactive Button, Item Display, Custom Button, and Custom Switch

This event can only be received by the Player Node Graph that triggered the interaction

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter UI Control Group Composite Index Integer If the UI control that triggered this event forms a multi-control UI group with other controls, this output parameter returns the corresponding group value
Output Parameter UI Control Group Index Integer If the triggering UI control is a single-control UI group, this value represents the ID of that UI control group

If the triggering UI control is part of a multi-control UI group, this value represents the ID of the control within that group

# XIII. Unit Status

## **1. When Unit Status Changes**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/4e25dbc4-0717-4126-9f8b-3b70dbd419a1.png)

**Node Functions**

This event is triggered when the Stack Count of a Unit Status changes

This event is triggered when Unit Status effects are applied or removed

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Unit Status Config ID Config ID
Output Parameter Applier Entity Entity
Output Parameter Infinite Duration Boolean
Output Parameter Remaining Status Duration Floating Point Numbers
Output Parameter Remaining Status Stacks Integer Edited Stack Count
Output Parameter Original Status Stacks Integer Previous Stack Count
Output Parameter Slot ID Integer ID of the Unit Status slot that changed

## **2. When Unit Status Ends**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/a6a00bec-ca5b-466b-bd62-0b259fb92f24.png)

**Node Functions**

This event is triggered when a Unit Status is removed for any reason or when its Runtime Duration expires

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Unit Status Config ID Config ID
Output Parameter Applier Entity Entity
Output Parameter Infinite Duration Boolean
Output Parameter Remaining Status Duration Floating Point Numbers
Output Parameter Remaining Status Stacks Integer
Output Parameter Remover Entity Entity
Output Parameter Removal Reason Enumeration Status Replacement: The Unit Status was removed because it was replaced by another status

Duration Exceeded: The Unit Status exceeded its runtime duration

Dispelled: The Unit Status was removed directly

Status Expired: The Unit Status became invalid due to other reasons

Class Changed: The Unit Status was removed due to a class change
Output Parameter Slot ID Integer ID of the Unit Status slot that changed

## **3. When Elemental Reaction Event Occurs**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/08964b2e-c33e-44ce-9284-d94b33046555.png)

**Node Functions**

Adds the Unit Status effect [Monitor Elemental Reaction] to the Entity. This event is triggered when the conditions are met

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Elemental Reaction Type Enumeration
Output Parameter Triggerer Entity Entity
Output Parameter Triggerer Entity GUID GUID

## **4. When Shield Is Attacked**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/776fdd19-3974-472b-ba7d-017f074ac951.png)

**Node Functions**

Adds the Unit Status effect [Add Shield] to the Entity. This event is triggered when the Shield takes damage

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Attacker Entity Entity
Output Parameter Attacker GUID GUID
Output Parameter Unit Status Config ID Config ID
Output Parameter Pre-Attack Layers Integer
Output Parameter Post-Attack Layers Integer
Output Parameter Shield Value of this Unit Status Before Attack Floating Point Numbers
Output Parameter Shield Value of this Unit Status After Attack Floating Point Numbers

# XIV. Tabs

## **1. When Tab Is Selected**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/840ee6c7-e7c6-461c-beaa-2bf795cd54a1.png)

**Node Functions**

When the active tab is selected, it will send an event to the node graph

The Entity Node Graph configured by the Tab Component will receive this event

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity Entity with the tab component mounted
Output Parameter Event Source GUID GUID GUID of the Entity with the tab component mounted; outputs 0 if none exists
Output Parameter Tab ID Integer ID of the tab
Output Parameter Selector Entity Entity Character Entity that triggers the tab

# XV. Creations

## **1. When Creation Enters Combat**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/4885b8bd-966a-44e3-884c-9b6c6b6ef064.png)

**Node Functions**

Only effective in Classic Aggro Mode

This event is triggered when a Creation enters battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID

## **2. When Creation Leaves Combat**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/92d5ab4c-5c18-4222-ac43-2302a008981f.png)

**Node Functions**

Only effective in Classic Aggro Mode

This event is triggered when a Creation leaves battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID

# XVI. Classes

## **1. When Player Class Level Changes**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/96c9c9a1-aa79-4c91-91f9-f759e38a56a2.png)

**Node Functions**

This event is triggered when a Player's Class Level changes and is sent to the corresponding Player. It can be received in that Class's Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity Active Player Entity
Output Parameter Event Source GUID GUID
Output Parameter Pre-Change Level Integer
Output Parameter Post-Change Level Integer

## **2. When Player Class Changes**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/c5c6b21e-6376-4297-9a67-88a769f1302c.png)

**Node Functions**

This event is triggered when a Player's Class changes and is sent to the corresponding Player. It can be received in the Node Graph of the new Class

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Pre-Modification Class Config ID Config ID
Output Parameter Post-Modification Config ID Config ID

## **3. When Player Class Is Removed**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/3337bd46-2063-47fe-b946-e2aec4fa293a.png)

**Node Functions**

This event is triggered when a Player's Class is removed and sent to the corresponding Player. It can be received in the Node Graph of the previous Class

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Pre-Modification Class Config ID Config ID
Output Parameter Post-Modification Config ID Config ID

# XVII. Skills

## **1. When Skill Node Is Called**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/dfcf40db-b364-4190-9140-0b604643fe2a.png)

**Node Functions**

This event is triggered by the [Notify Server Node Graph] Node in the Skill Node Graph. Up to three strings can be passed in

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Caller Entity Entity
Output Parameter Caller GUID GUID
Output Parameter Parameter 1 String
Output Parameter Parameter 2 String
Output Parameter Parameter 3 String

# XVIII. Custom Aggro

## **1. When Aggro Target Changes**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/6153ee42-2a47-4a96-bf50-9e37f49d6fa7.png)

**Node Functions**

Available only in Custom Aggro Mode

This event is triggered when the Aggro Target changes

This event can also be triggered when entering or leaving battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Pre-Change Aggro Target Entity
Output Parameter Post-Change Aggro Target Entity

## **2. When Self Enters Combat**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/248f1d96-a1d8-4c40-a1d3-038f62dc1980.png)

**Node Functions**

Available only in Custom Aggro Mode

This event is triggered when the Entity itself enters battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID

## **3. When Self Leaves Combat**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/46ce0870-e260-43ed-9a33-28fadc097644.png)

**Node Functions**

Available only in Custom Aggro Mode

This event is triggered when the Entity itself leaves battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID

# XIX. Signals

## **1. Monitor Signal**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/7d5de380-dcf5-4c68-9af3-423257259639.png)

**Node Functions**

Monitors Signal trigger events defined in the Signal Manager

The Signal name to monitor must be selected first

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity
Output Parameter Event Source GUID GUID
Output Parameter Signal Source Entity Entity The Entity that sent this signal using the Send Signal node

# XX. Deck Selector

## **1. When Deck Selector Is Complete**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/0fa39548-5ad8-40b5-b72c-a571d2f745c4.png)

**Node Functions**

This event is triggered on the Player's Node Graph when the Player completes the Deck Selector, or when it is forcibly closed due to time constraints

The output parameters report the Deck Selector's result and the corresponding reason

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Target Player Entity Active Player Entity
Output Parameter Selection Result List Integer List When a selection interaction is triggered, valid **selection results** are returned as this output parameter, and the completion reason is**Completed by Player**

When a **Full Refresh** pop-up selection is triggered, the complete **selection result list** is returned as this output parameter, and the completion reason is**Refresh All**

When a **Fixed-Quantity Refresh** pop-up selection is triggered, valid **selection results** are returned as this output parameter, and the completion reason is **Fixed-Quantity Refresh**

When the Deck Selector times out with no interaction, **the default selection is returned** is returned as this output parameter, and the completion reason is **Timeout**

When **Allow Discard Selection is enabled** and the Deck Selector is closed by the player, **the default selection is returned** as this output parameter, and the completion reason is **Closed****Manually**

When the Deck Selector is closed via the Node Graph, **the default selection is returned** as this output parameter, and the completion reason is**Closed by****Node Graph**
Output Parameter Completion Reason Enumeration Six reason enumerations

**Completed by Player**, **Refresh All**, **Fixed-Quantity Refresh**, Timeout, Closed Manually, Closed by Node Graph
Output Parameter Deck Selector Index Integer Referenced Deck Selector ID

# XXI. Text Bubbles

## **1. When Text Bubble Is Completed**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/574eeeb9-6ded-4ecb-9627-86cbc3d0874f.png)

**Node Functions**

This event can only be mounted by Text Bubble Components and is received by the Entity's Node Graph that completed the dialogue

Completion refers to when the final line of dialogue has finished playing

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Bubble Owner Entity Entity Runtime Entity with the Text Bubble component mounted
Output Parameter Character Entity Entity Target Character of the current Bubble dialogue
Output Parameter Text Bubble Configuration ID Config ID Currently active Text Bubble Config ID
Output Parameter Text Bubble Completion Count Integer Number of times the currently active Text Bubble has been fully played for this dialogue Character

# XXII. Shop

## **1. When Selling Inventory Items in the Shop**

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/7aa68b6c-4d14-4b85-83e4-78cbc211914c.png)

**Node Functions**

This event is triggered when Inventory items are sold in the Shop. The Owner of the Shop Component will receive it

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Shop Owner Entity
Output Parameter Shop Owner GUID GUID
Output Parameter Buyer Entity Entity
Output Parameter Shop ID Integer
Output Parameter Item Config ID Config ID
Output Parameter Purchase Quantity Integer

## **2. When Custom Shop Item Is Sold**

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/500224be-3e03-492a-a4d3-c09d9090c1de.png)

**Node Functions**

This event is triggered when Custom items are sold in the Shop. The Owner of the Shop Component will receive it

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Shop Owner Entity
Output Parameter Shop Owner GUID GUID
Output Parameter Buyer Entity Entity
Output Parameter Shop ID Integer
Output Parameter Shop Item ID Integer
Output Parameter Purchase Quantity Integer

## **3. When selling items to the shop**

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/d5335861-02dc-4a99-b78d-504204ae96fc.png)

**Node Functions**

This event is triggered when items are purchased by the Shop. The Owner of the Shop Component will receive it

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Shop Owner Entity
Output Parameter Shop Owner GUID GUID
Output Parameter Seller Entity Entity
Output Parameter Shop ID Integer
Output Parameter Purchase Item Dictionary Dictionary

# XXIII. Equipment

## **1. When Equipment Is Equipped**

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/b21367ab-199f-4d2e-a9c4-dcbbd217fb11.png)

**Node Functions**

This event is triggered when Equipment is equipped. The Owner of the Equipment will receive it. Configure this in the Item Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Equipment Holder Entity Entity
Output Parameter Equipment Holder GUID GUID
Output Parameter Equipment Index Integer

## **2. When Equipment Is Unequipped**

![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/65d5c88a-37b0-4de1-b0a4-95e1c98e1a89.png)

**Node Functions**

This event is triggered when Equipment is unequipped. The Owner of the Equipment will receive it. Configure this in the Item Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Equipment Owner Entity Entity
Output Parameter Equipment Owner GUID GUID
Output Parameter Equipment Index Integer

## **3. When Equipment Is Initialized**

![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/ea6192cc-0942-48e6-9c10-ffb1d0f90a94.png)

**Node Functions**

When Equipment is first obtained and enters the Inventory, it is initialized. The event's output parameters return the unique ID of the Equipment instance. Use this ID to edit the Equipment dynamically. The Owner of the Equipment will receive this event. Configure this in the Item Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Equipment Owner Entity
Output Parameter Equipment Owner GUID GUID
Output Parameter Equipment Index Integer

## **4. When Equipment Affix Value Changes**

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/00e61c3b-a4a0-43f2-a8ff-fac2c51c088c.png)

**Node Functions**

This event is triggered when Equipment Affix values change. The Owner of the Equipment will receive it. Configure this in the Item Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Equipment Owner Entity
Output Parameter Equipment Owner GUID GUID
Output Parameter Equipment Index Integer
Output Parameter Affix ID Integer The corresponding ID of this Entry within the Equipment Affixes
Output Parameter Pre-Change Value Floating Point Numbers
Output Parameter Post-Change Value Floating Point Numbers

## **5. When Equipment is purchased**

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/e4302848-792d-4ac0-a743-84add30f3f92.png)

**Node Functions**

The Inventory Owner Entity receives this event when it purchases equipment

This node is triggered only by item exchanges in the Inventory Shop. Custom shops do not trigger it. The Item Node Graph bound to the purchased equipment also receives this event

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Purchasing Inventory Owner Entity Entity
Output Parameter Purchasing Inventory Owner GUID GUID
Output Parameter Equipment Index List Integer List List of Indices of the Purchased Equipment

## **6. When Equipment is sold**

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/66cae6dd-c19a-495c-8551-cfe8ab079af4.png)

**Node Functions**

The Inventory Owner Entity receives this event when it sells equipment

This node is triggered only by item exchanges in the Inventory Shop. Custom shops do not trigger it. The Item Node Graph bound to the purchased equipment also receives this event

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Purchasing Inventory Owner Entity Entity
Output Parameter Purchasing Inventory Owner GUID GUID
Output Parameter Equipment Index List Integer List List of Indices of the Sold Equipment

# XXIV. Items

## **1. When Item Is Lost From Inventory**

![Image 56](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/5b6f57f6-6eae-4aae-a386-8cee6272179b.png)

**Node Functions**

This event is triggered when an Item is removed from the Inventory (its quantity becomes 0). The Owner of the Inventory Component will receive it

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Item Owner Entity Entity
Output Parameter Item Owner GUID GUID
Output Parameter Item Config ID Config ID
Output Parameter Quantity Lost Integer

## **2. When the Quantity of Inventory Item Changes**

![Image 57](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/b9aa558c-6b02-4da4-9dab-0b94d2b3a4ff.png)

**Node Functions**

This event is triggered when the quantity of Items in the Inventory changes. The Owner of the Inventory Component will receive it

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Item Owner Entity Entity
Output Parameter Item Owner GUID GUID
Output Parameter Item Config ID Config ID
Output Parameter Pre-Change Quantity Integer
Output Parameter Post-Change Quantity Integer
Output Parameter Reason for Change Enumeration

## **3. When Item Is Added to Inventory**

![Image 58](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/33079a5e-d908-4c49-8fa8-d4e081b27d4b.png)

**Node Functions**

This event is triggered when a new Item is added to the Inventory. The Owner of the Inventory Component will receive it. This event is not triggered by quantity-only changes

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Item Owner Entity Entity
Output Parameter Item Owner GUID GUID
Output Parameter Item Config ID Config ID
Output Parameter Quantity Obtained Integer

## **4. When the Quantity of Inventory Currency Changes**

![Image 59](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/56d70493-4d8f-4036-9b2c-dd2ba481d366.png)

**Node Functions**

This event is triggered when the amount of Inventory Currency changes. The Owner of the Inventory Component will receive it

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Currency Owner Entity Entity
Output Parameter Currency Owner GUID GUID
Output Parameter Currency Config ID Config ID
Output Parameter Currency Change Value Integer

## **5. When Items in the Inventory Are Used**

![Image 60](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/d6765959-075d-4611-b7d9-18bab31646aa.png)

**Node Functions**

This event is triggered when an Item in the Inventory is used. The Owner of the Inventory Component will receive it

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Item Owner Entity Entity
Output Parameter Item Owner GUID GUID
Output Parameter Item Config ID Config ID
Output Parameter Amount to Use Integer

# XXV. Creation Patrol

## **1. When Creation Reaches Patrol Waypoint**

![Image 61](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/9fe5e83e-b1a5-4672-a6e1-8926358f4ab3.png)

**Node Functions**

When the **Send Node Graph Event on Arrival** option is enabled for a waypoint in the Patrol template, a Node Graph Event is triggered once the specified conditions are met

This Node Graph Event can only be received by the creation's node graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Creation Entity Entity Runtime Creation Entity
Output Parameter Creation GUID GUID The GUID of the Creation. If it was not an initially placed Creation, the output is empty
Output Parameter Current Patrol Template ID Integer The Patrol Template ID currently active on this Creation
Output Parameter Current Path Index Integer The Path ID referenced by the Creation's currently active Patrol Template
Output Parameter Current Reached Waypoint ID Integer The Waypoint ID the Creation has currently reached
Output Parameter Next Waypoint ID Integer The Waypoint ID the Creation will move to next

# XXVI. Creation Preset Status

1.

## When Complex Creation Preset Status Changes

![Image 62](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/aee82862-ac8d-4116-ae5f-25ffc0c469ec.png)

**Node Functions**

This event is triggered when the preset state of a complex creation is changed using the "Set the preset status value of the complex creation" node (the modified and unmodified values ​​must be different for this event to trigger).

This node graph event can only be received by the node graph of the complex creation.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity Complex Creation Entity
Output Parameter Event Source Entity GUID GUID Complex Creation GUID
Output Parameter Preset Status Index Integer
Output Parameter Pre-Change Value Integer
Output Parameter Post-Change Value Integer

# XXVII. Floating Interaction Page

## **1. When Floating Interaction Page is Triggered**

![Image 63](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9ji0030dzs/aae39fa1-7fa5-4c11-9cb9-b82043952e3e.png)

**Node Functions**

When the [Return to Server Event] option is enabled for a tab or single-choice window, confirming the interaction will trigger this event on the corresponding Player Entity's Server Node Graph

If the interaction is with an Interaction Page Close Button, Interactive Button, Item Display, or Custom utton in the floating interaction page, confirming it will also trigger this event on the corresponding Player Entity's Server Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity Active Player Entity
Output Parameter Player GUID GUID GUID of the Active Player Entity
Output Parameter Floating Interaction Page Index Integer Unique Identifier for the Floating Interaction Page
Output Parameter Interactive Item Index Integer Index of the control that triggered this event
Output Parameter List Index Integer List List of indices for the tabs or single-choice windows. Each List Index output parameter corresponds to a Selected List Item output parameter
Output Parameter Selected List Item Integer List Each tab or single-choice window can have at most one selected item. Each Selected List Item output parameter corresponds to a List Index output parameter

[Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhw66orrrfkm)[Flow Control Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhe8yn9bysd6)
