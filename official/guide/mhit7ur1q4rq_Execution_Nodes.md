---
id: mhit7ur1q4rq
title: Execution Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6obvipqv1g
language: en
scope: guide
crawledAt: 2026-05-31T16:22:42.187Z
---

# Execution Nodes

# I. Character Skills

## **1. Traverse Entity List**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/a1764fe9-e666-4ed5-8b35-6c8cec9f5a72.png)

**Node Functions**

Iterates through each Entity in the input Entity List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Entity List Entity List
Output Parameter Current Entity Entity

## **2. Play Timed Effects**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/9d9f99a2-538e-4c71-8891-36cc655c8bfe.png)

**Node Functions**

Plays Timed Effects at the specified World Location

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Special Effects Asset Configuration ID Config ID
Input Parameter Location 3D Vector
Input Parameter Rotate 3D Vector
Input Parameter Zoom Multiplier Floating Point Numbers
Input Parameter Play Default Sound Effects?Boolean

## **3. Fixed-Point Projectile Launch**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/6848f194-4a09-43a1-8931-de3a9da0087c.png)

**Node Functions**

Spawns a Local Projectile at the specified Location in the World Coordinate System

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Projectile's Prefab ID Prefab ID
Input Parameter Create Location 3D Vector
Input Parameter Create Rotation 3D Vector
Input Parameter Track Target Entity
Input Parameter Projectile Faction Faction

## **4. Fixed-Point Displacement**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/9f98a768-959b-4f44-b72d-80dffc660e64.png)

**Node Functions**

Moves from the current Location to the Target Location

Supports configuring movement duration and speed; if both are small, the movement may not reach the Target Location

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Displacement Duration Floating Point Numbers
Input Parameter Displacement Attenuation Duration Floating Point Numbers
Input Parameter Displacement Speed Floating Point Numbers
Input Parameter Displacement Target Location 3D Vector
Input Parameter Terminate Displacement on Collision Boolean

## **5. Recover HP**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/04ff6b6d-4df1-41d1-8244-ccc09db2160e.png)

**Node Functions**

Initiates a one-time HP restoration for the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Recovery Amount Floating Point Numbers
Input Parameter Ignore Recovery Adjustment Effect Boolean
Input Parameter Aggro Multiplier for This Healing Floating Point Numbers
Input Parameter Aggro Increment for This Healing Integer

## **6. Camera Orientation Detection Data**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/42fb8770-d7f1-41e6-8356-a4e210aa0b1b.png)

**Node Functions**

Casts a ray from the Camera to the emission Location and returns the Rotation and Location of valid Targets along the path

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Type Enumeration
Input Parameter Launch Location 3D Vector
Input Parameter Nearest Distance Floating Point Numbers
Input Parameter Furthest Distance Floating Point Numbers
Output Parameter Target Rotation 3D Vector
Output Parameter Target Location 3D Vector

## **7. Force Exit Aiming State**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/69892f47-a438-4f7c-850e-bae6a38725e1.png)

**Node Functions**

When the character is in the aiming state, they will be forced to exit the aiming state.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **8. Set Own Attack Target**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/c5d18832-eb2b-4d06-b581-6525367f03eb.png)

**Node Functions**

Sets the Target Entity as its Attack Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Whether to Turn Immediately Boolean

## **9. Trigger Hitbox at Specific Location**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/5faf6f3e-64fb-4575-86c7-65ce875e7818.png)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/46ae281b-280e-4fcb-b6a1-d4bb1e70f153.png)

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/3b8ee4f3-1ebc-4ab3-b5ae-10ef9851e9e3.png)

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/c863cb63-3dfa-4ced-9ed3-3e041c13c674.png)

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
Input Parameter Scale of Cuboid Hitbox Enumeration
Input Parameter Radius of Sphere Hitbox Boolean
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
Input Parameter On-Hit Scene Special Effects Offset 3D Vector
Input Parameter On-Hit Scene Special Effects Rotation 3D Vector
Input Parameter On-Hit Scene Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **10. Add Unit Status**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/69c3c66c-b958-48ec-9607-ba73b072a955.png)

**Node Functions**

Applies the Unit Status defined by the configuration ID to the Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Application Target Entity
Input Parameter Stacks Integer
Input Parameter Unit Status Config ID Config ID

## **11. Notify Server Node Graph**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/519d9a18-d10a-449a-ae63-0420dbe098fb.png)

**Node Functions**

Notifies the Server Node Graph; supports up to three String parameters

At runtime, forwards logic to the Server Node Graph and triggers the [On Skill Node Call] Event on the Server Node Graph

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter String 1 String
Input Parameter String 2 String
Input Parameter String 3 String

## **12. Player Turning**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/1442a578-d8af-478c-9ada-f5263eceecf1.png)

**Node Functions**

Turns the Player using the configured turning mode

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Turning Mode Enumeration Includes: Target then Input, Input Direction, Target Direction, Target then Camera, Camera Direction, Input then Target

## **13. Player Turns to Face Set Direction**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/1b144cba-4276-44f8-8f9c-f048c4fc6947.png)

**Node Functions**

Turns the Player toward the direction specified by the 3D Vector configuration

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Orientation 3D Vector

## **14. Set Attack Weight**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/f85b99f3-3446-43ce-8710-807813d2fea4.png)

**Node Functions**

You can set the weight of the current attack target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Current Attack Target Weight Floating Point Numbers
Input Parameter Forcibly Select a Target Once Boolean

## **15. Remove Unit Status**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/b8e56b34-3d90-467d-8a26-37af9c60b460.png)

**Node Functions**

Removes the Unit Status corresponding to the specified configuration ID from the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Removal Target Entity
Input Parameter Unit Status Config ID Config ID

## **16. Remove Specified Character Disruptor Device**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/447e06ed-daf0-4033-b75c-6e1e8d9a5a18.png)

**Node Functions**

Removes the specified type of Character Disruptor Device

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Disruptor Device Type Enumeration Includes: Force Field Device, Ejector, and Traction Device

## **17. Trigger Hitbox at Specific Location**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/1e8ec793-d761-4ace-b6d1-258a792715c9.png)

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/516aed42-9a70-44d0-806b-762825b96c54.png)

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/08591c07-f46b-4663-b224-4038402069f4.png)

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/bd16ca81-1b7d-4dd8-8837-c3d619d55e10.png)

**Node Functions**

Initiates a Hitbox Attack at the specified Attachment Point, with configurable attack parameters

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Location String
Input Parameter Rotate 3D Vector
Input Parameter Damage Coefficient 3D Vector
Input Parameter Damage Increment Floating Point Numbers
Input Parameter Hitbox Entity Type Filter List Floating Point Numbers
Input Parameter Trigger Type Faction List
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
Input Parameter On-Hit Scene Special Effects Offset 3D Vector
Input Parameter On-Hit Scene Special Effects Rotation 3D Vector
Input Parameter On-Hit Scene Special Effects Zoom Floating Point Numbers
Input Parameter Aggro Multiplier for This Attack Floating Point Numbers
Input Parameter Aggro Increment for This Attack Integer
Input Parameter Hit Level Enumeration
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers
Input Pa rameter Hit Vertical Impulse String List

## **18. Reset Skill Target**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/488e4197-4990-43f5-a22d-7cac4d3a3f2a.png)

**Node Functions**

Resets the Skill Target and reruns the Skill selection logic to choose a new Target

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **19. Trigger Rectangular Hitbox at Specific Location**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/bf1869e2-75fc-4772-bdbc-703f5a350ecd.png)

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/dfa89a13-d760-47d4-b3f3-d3c54205fadb.png)

**Node Functions**

Initiate a rectangular hitbox at the specified position in the world coordinate system, and you can set various parameters for this attack.

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
Input Parameter Hit Level Integer
Input Parameter On-Hit Horizontal Impulse Floating Point Numbers
Input Parameter On-Hit Vertical Impulse Floating Point Numbers

## **20. Trigger Spherical Hitbox at Specific Location**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/09c2d4bd-e00d-4f0d-9760-4161f1adfdc5.png)

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/c70cf513-faa0-4d6f-bac7-afd5a1b061ed.png)

**Node Functions**

Initiate a spherical hitbox at the specified position in the world coordinate system, and you can set various parameters for this attack.

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

## **21. Trigger Sector Hitbox at Specific Location**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/d3787685-557a-4a72-8a65-1e2fd22e0de0.png)

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/31c387e3-743a-47dd-ad12-44b10eefd4be.png)

**Node Functions**

Initiate a sector hitbox at the specified position in the world coordinate system, and you can set various parameters for this attack.

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

## **22. Trigger Rectangular Hitbox at Specified Attachment Point**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/4e886928-a648-4b45-8b1d-bb7017c06de2.png)

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/dffacfed-9865-40aa-9751-de402451519d.png)

**Node Functions**

Initiate a rectangular hitbox at the specified attachment point, and you can set various parameters for this attack.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Attachment Point Name String List
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

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/89d7df87-227d-442b-9a51-544cae6c2043.png)

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/b63b9f4d-bbea-4203-b1af-66c6dbea5041.png)

**Node Functions**

Initiate a spherical hitbox at the specified attachment point, and you can set various parameters for this attack.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Attachment Point Name String List
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

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/aae41c53-655e-4e63-b6a8-3530a7195057.png)

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/11f237e9-95cd-4b81-a73b-b0cbe882c689.png)

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/b9759573-18fa-499b-b9a8-e3efd198263d.png)

**Node Functions**

Initiate a sector hitbox at the specified attachment point, and you can set various parameters for this attack.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Faction Filter Enumeration
Input Parameter Attachment Point Name String List
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

## **25. Interrupt Current Skil**l

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/1e8a70ae-ae45-491a-b8c7-17122dd70bcc.png)

**Node Functions**

Interrupts the skill currently being officially cast by the character..

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **26. Set Skill Variable**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/06bbb55d-6954-4f5f-bc43-74dafb4547c8.png)

**Node Functions**

Sets the value of the specified skill variable..

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Variable Config ID Config ID
Input Parameter Set Value Floating Point Numbers The modified value

## **27. Increase Skill Variable Value**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/fa8b5032-5708-41e8-9308-0919e0fdf9c9.png)

**Node Functions**

Increases the value of the specified skill variable. The increment can be a negative value.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Variable Config ID Config ID
Input Parameter Set Value Floating Point Numbers Modified Value = Original Value + Increase Value

## **28. Character Blink**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/b3196576-11a7-426a-857a-1be3caf4bf06.png)

**Node Functions**

Makes the character blink to the target position, with the direction they are facing post-blink adjustable. The maximum blink distance is 200 meters.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Location 3D Vector
Input Parameter Target Orientation 3D Vector

## **29. Add Key Behavior**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/a328269d-a430-4abb-90e3-a4d0f668481b.png)

**Node Functions**

Adds a key behavior with the corresponding ID to the Key Behavior Log Panel, and records the current time along with it. The maximum number of key behaviors that can be recorded is 20.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key Behavior ID Integer

## **30. Key Behavior Log Panel**

图

**Node Functions**

Clears all recorded key behaviors from the Key Behavior Log Panel.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **31. Cast Skill From Specified Slot**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/84dd0b58-24ef-4609-a746-2b7525b56d25.png)

**Node Functions**

Makes the character cast the skill corresponding to the specified Skill Instance ID.

For the button to be usable, the skill must be bound to a button and currently be in the foreground

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Instance ID Integer
Input Parameter Check Key Availability Boolean Yes: The skill will only be cast when the current button is usable.

No: The skill will be cast regardless of whether the current button is usable.

## **32. Cast Skill From Specified Slot**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/6f12758c-a89d-4bec-8aa9-3149dfe9feae.png)

**Node Functions**

Makes the character cast the skill that is currently in the foreground for the corresponding skill slot.

For the button to be usable, the skill must be bound to a button and currently be in the foreground

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Skill Slot Enumeration
Input Parameter Check Key Availability Boolean Yes: The skill will only be cast when the current button is usable.

No: The skill will be cast regardless of whether the current button is usable.

# II. General

## **1. Set Local Variable**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/4d3f2985-476c-4eb4-b314-4d0fd8a89889.png)

**Node Functions**

Sets the value of a local variable

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Variable Name String
Input Parameter Variable Value Generic

## **2. Break Loop**

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/a36ba83b-172c-4b68-bdfd-e34646637122.png)

**Node Functions**

Break out of a Finite Loop. The output pin must connect to the [Break Loop] input parameter of the [Finite Loop] Node

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **3. Finite Loop**

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/bb7d7312-442d-4179-ab19-59de6519666d.png)

**Node Functions**

From the [Loop Start Value] to the [Loop End Value], the loop iterates, incrementing the Integer by 1 each time. On each iteration, it executes the Nodes connected to [Loop Body]. After a full iteration, it executes the Nodes connected to [Loop Complete].

Use [Break Loop] to end the iteration early

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Loop Start Value Integer
Input Parameter Loop Termination Value Integer
Output Parameter Current Loop Value Integer

# III. Custom Aggro

## **1. Set the Aggro Value of the Specified Entity Proportionally**

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/ded4ccff-cdaf-4ad8-856b-f37db67c4ef3.png)

**Node Functions**

Available only in Custom Aggro Mode

Set the aggro value of the target entity for the specified aggro owner proportionally.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Aggro Owner Entity Entity
Input Parameter Aggro Value Ratio Floating Point Numbers

## **2. Transfer the Aggro Value of the Specified Entity Proportionally**

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/348e3186-ae4c-4f0f-8ea7-39ac67c62917.png)

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

![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/70bbf21c-3025-4dfa-ab17-c1df6a08824b.png)

**Node Functions**

Available only in Custom Aggro Mode

The Taunter Entity taunts the specified Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Taunter Entity Entity
Input Parameter Target Entity Entity

## **4. Remove Target Entity From Aggro List**

![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/235e12ab-d72c-42dc-a268-906648cc4446.png)

**Node Functions**

Available only in Custom Aggro Mode

Removes the Target Entity from the Aggro Owner Entity's Aggro List; this may cause the Target Entity to leave battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Aggro Owner Entity Entity

## **5. Clear the Aggro List of the Specified Entity**

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/ae9a22cd-5e44-436d-b8a7-b10134d8a6fe.png)

**Node Functions**

Available only in Custom Aggro Mode

Clears the Aggro List of the specified Entity; this usually causes the Target to leave battle

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity

## **6. Set the Aggro Value of the Specified Entity**

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/3c8edbd6-4339-47fa-834f-0d3ffc498537.png)

**Node Functions**

Available only in Custom Aggro Mode

Sets the Aggro Value of the specified Entity on the Aggro Owner Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Aggro Owner Entity Entity
Input Parameter Aggro Value Integer

## **7. Increase the Aggro Value of the Specified Entity**

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/8fc004f4-83dc-423e-92f7-26f488517fb2.png)

**Node Functions**

Available only in Custom Aggro Mode

Modify the aggro value of the specified entity for the aggro owner entity; the increase value can be negative.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity
Input Parameter Aggro Owner Entity Entity
Input Parameter Increase Value Integer Changed value = original value + increase value

# IV. Signal

## **1.****Send Signal to Server Node Graph**

![Image 56](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhit7ur1q4rq/39c40840-3ad8-41ad-b54e-74e6fbd6dc78.png)

**Node Functions**

Within the skill node graph, signals can be sent to the server node graph, and all server node graphs can listen for this signal.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Signal Name String

[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfmxw9fn6n6)[Flow Control Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhxppurzujfq)
