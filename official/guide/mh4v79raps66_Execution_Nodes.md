---
id: mh4v79raps66
title: Execution Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhz064iplia4
language: en
scope: guide
crawledAt: 2026-05-31T16:22:50.277Z
---

# Execution Nodes

# I. Skills

## **1. Traverse Entity List**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/31efe191-c319-4868-b224-a6631801e572.png)

**Node Functions**

Iterates through each Entity in the input Entity List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity List Entity List
Output Parameter Current Entity Entity

## **2. Play Timed Effects**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/8ff15af7-601f-48d9-b2ea-0f46a65ffc27.png)

**Node Functions**

Plays Timed Effects at the specified World Location

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Special Effects Asset Configuration ID Configuration ID
Input Parameter Location 3D Vector
Input Parameter Rotate 3D Vector
Input Parameter Zoom Multiplier Floating Point Numbers
Input Parameter Play Default Sound Effect Boolean

## **3. Fixed-Point Projectile Launch**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/faaaa903-4a76-4f5e-a0cc-482fb6d02bf9.png)

**Node Functions**

Spawns a Local Projectile at the specified Location in the World Coordinate System

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Projectile's Prefab ID Prefab ID
Input Parameter Create Location 3D Vector
Input Parameter Create Rotation 3D Vector
Input Parameter Track Target Entity
Input Parameter Projectile Faction Faction

## **4. Complex Creation Directed Movement**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/30456093-4be4-43a1-a87d-07d33108ee3b.png)

**Node Functions**

Moves from the current Location to the Target Location

You can configure the Maximum Distance. If this value is too small, the object may not be able to move to the Target Location

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Location 3D Vector
Input Parameter Displacement Duration Floating Point Numbers
Input Parameter Max Distance Floating Point Numbers
Input Parameter Ignore Collision Boolean

## **5. Complex Creation Teleport**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/46a0aed2-ff76-4e12-903a-58f0db6256c5.png)

**Node Functions**

Teleport from your current location to the Target Location

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Location 3D Vector
Input Parameter Target Rotation 3D Vector

## **6. Recover HP**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/2864dded-81ef-4909-bd6c-ffc4962c0cc3.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/3abf88ad-d8d8-4a2d-afd6-44fee0717a8c.png)

**Node Functions**

The nodes above are only available in the Beyond Mode, and the nodes below are only available in the Classic Mode

Initiates a one-time HP restoration for the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Recovery Amount Floating Point Numbers
Input Parameter Ignore Recovery Adjustment Effect Boolean
Input Parameter Aggro Multiplier for this Healing Floating Point Numbers
Input Parameter Aggro Increment for this Healing Integer

## 7. Set the Global CD of the Creation

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/20004695-4360-4c8c-a7e2-04a403bb0db9.png)

**Node Functions**

Permanently changes the Creation's Global CD for this stage run

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Cooldown Floating Point Numbers

## **8. Set the Current CD of the Creation Skill**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/ef3fd7ec-705a-4dda-a59c-2f6bda74b7cb.png)

**Node Functions**

Adjusts only the CD for this Creation Skill for this use. This is a one-time change and will not be saved

Note: When this Node runs, if the Target Skill is currently casting and is configured to trigger its CD when the Skill ends, the CD will be reset to the Skill's configured CD at End. Even if this Node successfully sets the Current CD, it will be overwritten by the CD triggered at Skill End.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill ID Integer
Input Parameter Current Cooldown Floating Point Numbers

## **9. Set the CD of the Creation Skill**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/b6ee4245-edf6-47ae-be64-fa61cff787f3.png)

**Node Functions**

Permanently changes the Creation's Skill CD for this stage run

Note:

1.

When this Node runs, it does not change the Target Skill's current remaining CD. It only affects the CD the next time the Skill enters CD

2.

If the Target Skill is being cast and is configured to Trigger CD on Skill End, then when the Skill ends, the CD that starts will use the time set by this Node

3.

Instant Skills have no duration, so their CD always starts counting when the Skill begins

For example:

4.

Skill A has 5 seconds of CD remaining. At this moment, the Node's CD is set to 10 seconds. The Creation can use this Skill after 5 seconds, and after using it, this unit enters a 10-second CD

5.

Skill A is configured to trigger its CD when the Skill ends, with a 5-second CD. If a Creation is casting Skill A and this Node changes the CD to 10 seconds, the Skill will enter a 10-second CD immediately after it ends

6.

Skill A is an Instant Skill with a 5-second cooldown. If a Creation uses this Node in the Node Graph Logic for casting Skill A and changes it to 10 seconds, then, as in Example 1, Skill A will be available after 5 seconds. After you use it, it enters a 10-second cooldown

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill ID Integer
Input Parameter Cooldown (CD)Floating Point Numbers
Input Parameter CD Variation Range Floating Point Numbers

## 10. Set the Current Time of the Creation Cooldown Group

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/629fece2-bd3c-47a4-b1ec-c267c0f0335f.png)

**Node Functions**

Adjusts only this Creation's Skill Group CD for this session; changes are not saved

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter CD Group ID Integer
Input Parameter Current Cooldown Floating Point Numbers

## 11. Set the Time of the Creation Cooldown Group

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/b06f712f-11dc-468a-88a2-880c13110c49.png)

**Node Functions**

Permanently changes the Creation's Skill Group CD for this stage run

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter CD Group ID Integer
Input Parameter Cooldown (CD)Floating Point Numbers
Input Parameter CD Variation Range Floating Point Numbers

## **12. Trigger Hitbox at Specific Location**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/8312b2de-e3fb-463f-bfa4-16584f356976.png)

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/0e8d765f-2bb8-4ea7-97ab-9147a3f9794d.png)

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/8468d8b4-c2ed-41b4-a085-daf10965e906.png)

**Node Functions**

Initiates a Hitbox Attack at the specified Location in the World Coordinate System, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Location 3D Vector
Input Parameter Rotate 3D Vector
Input Parameter Damage Coefficient Floating Point Numbers
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Faction List
Input Parameter Trigger Type Enumeration
Input Parameter On-Hit Scene Effects Integer
Input Parameter Hitbox Type Enumeration
Input Parameter Scale of Cuboid Hitbox 3D Vector
Input Parameter Radius of Sphere Hitbox Floating Point Numbers
Input Parameter Height of Sector Hitbox Floating Point Numbers
Input Parameter Sector Angle of Sector Hitbox Floating Point Numbers
Input Parameter Sector Radius of Sector Hitbox Floating Point Numbers
Input Parameter Inner Radius of Sector Hitbox Floating Point Numbers
Input Parameter Detection Direction of Sector Hitbox Enumeration
Input Parameter Attack Layer Filter Enumeration
Input Parameter Attack Tag List String List
Input Parameter Elemental Type Enumeration
Input Parameter Elemental Attack Potency Floating Point Numbers
Input Parameter Hit Type Enumeration
Input Parameter Attack Type Enumeration
Input Parameter Interrupt Value Floating Point Numbers
Input Parameter Absolute Damage Boolean
Input Parameter On-Hit Special Effects Integer
Input Parameter Knockback Orientation Enumeration
Input Parameter Block Damage Pop-Up Boolean
Input Parameter On-Hit Scene Effects Offset 3D Vector
Input Parameter On-Hit Scene Effects Rotation 3D Vector
Input Parameter On-Hit Scene Effects Zoom Floating Point Numbers
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Offset Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **13. Trigger Rectangular Hitbox at Specific Location**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/427233db-bb2b-4853-9bf7-0ac551ac62c2.png)

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/e5e5669f-e156-4935-8053-8b700406e9a4.png)

**Node Functions**

Initiates a Rectangular HitBox Attack at a specified location in the World Coordinate System, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Location 3D Vector
Input Parameter Rotate 3D Vector
Input Parameter Damage Coefficient Floating Point Numbers
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Faction List
Input Parameter Trigger Type Enumeration
Input Parameter On-Hit Scene Effects Integer
Input Parameter Scale of Cuboid Hitbox 3D Vector
Input Parameter Attack Layer Filter Enumeration
Input Parameter Attack Tag List String List
Input Parameter Elemental Type Enumeration
Input Parameter Elemental Attack Potency Floating Point Numbers
Input Parameter Hit Type Enumeration
Input Parameter Attack Type Enumeration
Input Parameter Interrupt Value Floating Point Numbers
Input Parameter Absolute Damage Boolean
Input Parameter On-Hit Special Effects Integer
Input Parameter Knockback Orientation Enumeration
Input Parameter Block Damage Pop-Up Boolean
Input Parameter On-Hit Scene Effects Offset 3D Vector
Input Parameter On-Hit Scene Effects Rotation 3D Vector
Input Parameter On-Hit Scene Effects Zoom Floating Point Numbers
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Rotation 3D Vector
Input Parameter On-Hit Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **14. Trigger Spherical Hitbox at Specific Location**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/35bd002c-1579-4f41-8997-9e2094d8c940.png)

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/d78eb204-4810-4442-afa3-2d239667160b.png)

**Node Functions**

Initiates a Sphere Hitbox Attack at a specified location in the World Coordinate System, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Location 3D Vector
Input Parameter Rotate 3D Vector
Input Parameter Damage Coefficient Floating Point Numbers
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Faction List
Input Parameter Trigger Type Enumeration
Input Parameter On-Hit Scene Effects Integer
Input Parameter Radius of Sphere Hitbox Floating Point Numbers
Input Parameter Attack Layer Filter Enumeration
Input Parameter Attack Tag List String List
Input Parameter Elemental Type Enumeration
Input Parameter Elemental Attack Potency Floating Point Numbers
Input Parameter Hit Type Enumeration
Input Parameter Attack Type Enumeration
Input Parameter Interrupt Value Floating Point Numbers
Input Parameter Absolute Damage Boolean
Input Parameter On-Hit Special Effects Integer
Input Parameter Knockback Orientation Enumeration
Input Parameter Block Damage Pop-Up Boolean
Input Parameter On-Hit Scene Effects Offset 3D Vector
Input Parameter On-Hit Scene Effects Rotation 3D Vector
Input Parameter On-Hit Scene Effects Zoom Floating Point Numbers
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Rotation 3D Vector
Input Parameter On-Hit Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **15. Trigger Sector Hitbox at Specific Location**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/d3cfb440-9ea5-49d5-8b75-45a9a4d2b9e8.png)

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/0c094e82-bb2b-4eea-8193-81b29cfda994.png)

**Node Functions**

Initiates a Sector Hitbox Attack at a specified location in the World Coordinate System, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Location 3D Vector
Input Parameter Rotate 3D Vector
Input Parameter Damage Coefficient Floating Point Numbers
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Faction List
Input Parameter Trigger Type Enumeration
Input Parameter On-Hit Scene Effects Integer
Input Parameter Height of Sector Hitbox Floating Point Numbers
Input Parameter Sector Angle of Sector Hitbox Floating Point Numbers
Input Parameter Sector Radius of Sector Hitbox Floating Point Numbers
Input Parameter Inner Radius of Sector Hitbox Floating Point Numbers
Input Parameter Detection Direction of Sector Hitbox Enumeration
Input Parameter Attack Layer Filter Enumeration
Input Parameter Attack Tag List String List
Input Parameter Elemental Type Enumeration
Input Parameter Elemental Attack Potency Floating Point Numbers
Input Parameter Hit Type Enumeration
Input Parameter Attack Type Enumeration
Input Parameter Interrupt Value Floating Point Numbers
Input Parameter Absolute Damage Boolean
Input Parameter On-Hit Special Effects Integer
Input Parameter Knockback Orientation Enumeration
Input Parameter Block Damage Pop-Up Boolean
Input Parameter On-Hit Scene Effects Offset 3D Vector
Input Parameter On-Hit Scene Effects Rotation 3D Vector
Input Parameter On-Hit Scene Effects Zoom Floating Point Numbers
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Rotation 3D Vector
Input Parameter On-Hit Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **16. Add Unit Status**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/c9955b7f-6e0e-4d16-9ce6-4a438d87abdd.png)

**Node Functions**

Applies the Unit Status defined by the configuration ID to the Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Application Target Entity
Input Parameter Stacks Integer
Input Parameter Unit Status Config ID Config ID

## **17. Remove Unit Status**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/6bce0490-de24-4fbd-84b9-2e16732837a0.png)

**Node Functions**

Removes the Unit Status corresponding to the specified configuration ID from the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Removal Target Entity
Input Parameter Unit Status Config ID Config ID

## **18. Remove Specified Character Disruptor Device**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/efe4f52a-7e36-4d39-a696-c374627f3034.png)

**Node Functions**

Removes the specified type of Character Disruptor Device

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Disruptor Device Type Enumeration Includes: Force Field Device, Ejector, and Traction Device

## **19. Resets the Creation's Skill CD**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/baad8ada-8bdf-4760-bba5-0262ad87b4b3.png)

**Node Functions**

Resets the Skill CD to 0. If the conditions are met, the Skill can be cast immediately

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill ID Integer

## **20. Creation Turns to Face Set Direction**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/df47c119-cb02-4586-a285-2fd0abb1bc6a.png)

**Node Functions**

Rotates the Creation to face the orientation of the specified 3D Vector

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Orientation 3D Vector

## **21. Trigger Hitbox at Specified Attachment Point**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/e5f28401-b6b2-43ca-b2ab-c77a1663282d.png)

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/d9888002-d661-4578-b5ae-54f4defbf1ae.png)

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/a38df3fa-f5bd-4ffe-850b-826c763695cb.png)

**Node Functions**

Initiates a Hitbox Attack at a specified Attachment Point, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Attachment Point Name String
Input Parameter Attachment Point Offset 3D Vector
Input Parameter Attachment Point Rotation 3D Vector
Input Parameter Damage Coefficient Floating Point Numbers
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Faction List
Input Parameter Trigger Type Enumeration
Input Parameter On-Hit Scene Effects Integer
Input Parameter Hitbox Type Enumeration
Input Parameter Scale of Cuboid Hitbox 3D Vector
Input Parameter Radius of Sphere Hitbox Floating Point Numbers
Input Parameter Height of Sector Hitbox Floating Point Numbers
Input Parameter Sector Angle of Sector Hitbox Floating Point Numbers
Input Parameter Sector Radius of Sector Hitbox Floating Point Numbers
Input Parameter Inner Radius of Sector Hitbox Floating Point Numbers
Input Parameter Detection Direction of Sector Hitbox Enumeration
Input Parameter Attack Layer Filter Enumeration
Input Parameter Attack Tag List String List
Input Parameter Elemental Type Enumeration
Input Parameter Elemental Attack Potency Floating Point Numbers
Input Parameter Hit Type Enumeration
Input Parameter Attack Type Enumeration
Input Parameter Interrupt Value Floating Point Numbers
Input Parameter Absolute Damage Boolean
Input Parameter On-Hit Special Effects Integer
Input Parameter Knockback Orientation Enumeration
Input Parameter Block Damage Pop-Up Boolean
Input Parameter On-Hit Scene Effects Offset 3D Vector
Input Parameter On-Hit Scene Effects Rotation 3D Vector
Input Parameter On-Hit Scene Effects Zoom Floating Point Numbers
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Rotation 3D Vector
Input Parameter On-Hit Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **22. Trigger Rectangular Hitbox at Specified Attachment Point**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/65a98677-285c-4565-8f13-36c4b73104d1.png)

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/0c337b8d-9155-48eb-9c51-c313576f7610.png)

**Node Functions**

Initiates a Rectangular HitBox Attack from the Specified Attachment Point, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Attachment Point Name String
Input Parameter Attachment Point Offset 3D Vector
Input Parameter Attachment Point Rotation 3D Vector
Input Parameter Damage Coefficient Floating Point Numbers
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Faction List
Input Parameter Trigger Type Enumeration
Input Parameter On-Hit Scene Effects Integer
Input Parameter Scale of Cuboid Hitbox 3D Vector
Input Parameter Attack Layer Filter Enumeration
Input Parameter Attack Tag List String List
Input Parameter Elemental Type Enumeration
Input Parameter Elemental Attack Potency Floating Point Numbers
Input Parameter Hit Type Enumeration
Input Parameter Attack Type Enumeration
Input Parameter Interrupt Value Floating Point Numbers
Input Parameter Absolute Damage Boolean
Input Parameter On-Hit Special Effects Integer
Input Parameter Knockback Orientation Enumeration
Input Parameter Block Damage Pop-Up Boolean
Input Parameter On-Hit Scene Effects Offset 3D Vector
Input Parameter On-Hit Scene Effects Rotation 3D Vector
Input Parameter On-Hit Scene Effects Zoom Floating Point Numbers
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Rotation 3D Vector
Input Parameter On-Hit Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **23. Trigger Spherical Hitbox at Specified Attachment Point**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/b28826ae-564d-4cb0-a25c-c0abc6f217b1.png)

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/25de512e-713c-4110-9fdf-bf6225b67a75.png)

**Node Functions**

Initiates a Sphere HitBox Attack from the Specified Attachment Point, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Attachment Point Name String
Input Parameter Attachment Point Offset 3D Vector
Input Parameter Attachment Point Rotation 3D Vector
Input Parameter Damage Coefficient Floating Point Numbers
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Faction List
Input Parameter Trigger Type Enumeration
Input Parameter On-Hit Scene Effects Integer
Input Parameter Radius of Sphere Hitbox Floating Point Numbers
Input Parameter Attack Layer Filter Enumeration
Input Parameter Attack Tag List String List
Input Parameter Elemental Type Enumeration
Input Parameter Elemental Attack Potency Floating Point Numbers
Input Parameter Hit Type Enumeration
Input Parameter Attack Type Enumeration
Input Parameter Interrupt Value Floating Point Numbers
Input Parameter Absolute Damage Boolean
Input Parameter On-Hit Special Effects Integer
Input Parameter Knockback Orientation Enumeration
Input Parameter Block Damage Pop-Up Boolean
Input Parameter On-Hit Scene Effects Offset 3D Vector
Input Parameter On-Hit Scene Effects Rotation 3D Vector
Input Parameter On-Hit Scene Effects Zoom Floating Point Numbers
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Rotation 3D Vector
Input Parameter On-Hit Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **24. Trigger Sector Hitbox at Specified Attachment Point**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/b2330e9b-4684-49a7-83e1-b5df5e5b6de1.png)

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/079192ca-cc01-4eba-971e-b21b38876afb.png)

**Node Functions**

Initiates a Sector HitBox Attack from the Specified Attachment Point, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Attachment Point Name String
Input Parameter Attachment Point Offset 3D Vector
Input Parameter Attachment Point Rotation 3D Vector
Input Parameter Damage Coefficient Floating Point Numbers
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Faction List
Input Parameter Trigger Type Enumeration
Input Parameter On-Hit Scene Effects Integer
Input Parameter Height of Sector Hitbox Floating Point Numbers
Input Parameter Sector Angle of Sector Hitbox Floating Point Numbers
Input Parameter Sector Radius of Sector Hitbox Floating Point Numbers
Input Parameter Inner Radius of Sector Hitbox Floating Point Numbers
Input Parameter Detection Direction of Sector Hitbox Enumeration
Input Parameter Attack Layer Filter Enumeration
Input Parameter Attack Tag List String List
Input Parameter Elemental Type Enumeration
Input Parameter Elemental Attack Potency Floating Point Numbers
Input Parameter Hit Type Enumeration
Input Parameter Attack Type Enumeration
Input Parameter Interrupt Value Floating Point Numbers
Input Parameter Absolute Damage Boolean
Input Parameter On-Hit Special Effects Integer
Input Parameter Knockback Orientation Enumeration
Input Parameter Block Damage Pop-Up Boolean
Input Parameter On-Hit Scene Effects Offset 3D Vector
Input Parameter On-Hit Scene Effects Rotation 3D Vector
Input Parameter On-Hit Scene Effects Zoom Floating Point Numbers
Input Parameter On-Hit Special Effects Offset 3D Vector
Input Parameter On-Hit Special Effects Rotation 3D Vector
Input Parameter On-Hit Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

# II. General

## **1. Set Local Variable**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/d7b9161a-9a5a-4a30-b06a-34748272a1e0.png)

**Node Functions**

Sets the value of a Local Variable

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Variable Name String
Input Parameter Variable Value Generic

## **2. Break Loop**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/8d6d0136-81a1-49e3-bb8a-dac6277ac81c.png)

**Node Functions**

Break out of a Finite Loop. The output pin must connect to the [Break Loop] input parameter of the [Finite Loop] Node

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **3. Notify Server Node Graph**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/dd851c17-f5ba-4e80-a4f1-58d1b7c9b8ba.png)

**Node Functions**

Notifies the Server Node Graph; supports up to three String parameters

At runtime, forwards logic to the Server Node Graph and triggers the [On Skill Node Call] Event on the Server Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter String 1 String
Input Parameter String 2 String
Input Parameter String 3 String

## **4. Finite Loop**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/b39d8bd7-bcf7-4f72-8820-96cd41963a78.png)

**Node Functions**

From the [Loop Start Value] to the [Loop Termination Value], the loop iterates, incrementing the Integer by 1 each time. On each iteration, it executes the Nodes connected to [Loop Body]. After a full iteration, it executes the Nodes connected to [Loop Complete].

Use [Break Loop] to end the iteration early

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Loop Start Value Integer
Input Parameter Loop Termination Value Integer
Output Parameter Current Loop Value Integer

# III. Signals

## **1. Send Signal to Server Node Graph**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/a0d07ed1-ae39-4394-8497-e7562402fee3.png)

**Node Functions**

In the Skill Node Graph, you can send a signal to the Server Node Graph, and all Server Node Graphs can monitor that signal

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Signal Name String

# IV. Custom Aggro

## **1. Set the Aggro Value of the Specified Entity Proportionally**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/048e8bb2-2262-4a73-a6c4-fb611384949a.png)

**Node Functions**

Available only in Custom Aggro Mode

Set the Target Entity's Aggro Value toward the specified Aggro Owner proportionally

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Aggro Owner Entity Entity
Input Parameter Aggro Value Ratio Floating Point Numbers

## **2. Transfer the Aggro Value of the Specified Entity Proportionally**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/95bbffd6-7a4a-40c8-94b3-94540ee794a3.png)

**Node Functions**

Available only in Custom Aggro Mode

Transfers a percentage of Aggro on the Aggro Owner from the Source Entity to the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Transfer Target Entity Entity
Input Parameter Transfer Source Entity Entity
Input Parameter Aggro Owner Entity Entity
Input Parameter Transfer Ratio Floating Point Numbers

## **3. Taunt Target**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/0e6f2aad-79ac-49b3-8df4-97fcd1dc04fe.png)

**Node Functions**

Available only in Custom Aggro Mode

The Taunter Entity taunts the specified Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Taunter Entity Entity
Input Parameter Target Entity Entity

## **4. Remove Target Entity From Aggro List**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/64db87f3-40d3-4f78-bba3-0feb1e09c857.png)

**Node Functions**

Available only in Custom Aggro Mode

Removes the Target Entity from the Aggro Owner Entity's Aggro List; this may cause the Target Entity to leave battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Aggro Owner Entity Entity

## **5. Clear the Aggro List of the Specified Entity**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/ed061acf-7e6f-4d29-9599-731fd170a004.png)

**Node Functions**

Available only in Custom Aggro Mode

Clears the Aggro List of the specified Entity; this usually causes the Target to leave battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity

## **6. Set the Aggro Value of the Specified Entity**

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/3bed8b11-2a59-4c13-a682-9b524768bbdc.png)

**Node Functions**

Available only in Custom Aggro Mode

Sets the Aggro Value of the specified Entity on the Aggro Owner Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Aggro Owner Entity Entity
Input Parameter Aggro Value Integer

## **7. Increase the Aggro Value of the Specified Entity**

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh4v79raps66/a398bbae-3e3f-401b-a85e-e5c4eb0066d3.png)

**Node Functions**

Available only in Custom Aggro Mode

Edit the Aggro Value of the Specified Entity on the Aggro Owner, and the added value can be negative

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Aggro Owner Entity Entity
Input Parameter Increase Value Integer Edited Value = Original Value + Increase Value

[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh7ys59fhtvu)[Flow Control Node](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhq1k3rzp6oe)
