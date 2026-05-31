---
id: mhzwpk9o4t4y
title: Aggro Configuration
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhw9ut96q96y
language: en
scope: guide
crawledAt: 2026-05-31T16:16:46.828Z
---

# Aggro Configuration

# I. What is Aggro

_Aggro_ is a function used by entities to select targets for their skills. The Aggro system selects a current skill target for creations based on certain rules (depending on the Aggro mode being used)

Generally speaking, creations will prioritize and continuously attack their current _Aggro Target_

# II. Aggro Modes

There are two Aggro modes for stage setting: _Default Aggro Mode_ and _Custom Aggro Mode_. As shown in the figure below

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/b28141d1-3385-40ae-a8e9-78f8b7aecc73.png)

## **1. Default Aggro Mode**



Consistent with the creation aggro rules in Classic mode, the aggro target is independent of damage taken, and the aggro target will switch according to rules during combat



Aggro value is related to attack frequency



The aggro value of the target decays over time



If two aggroed targets have similar attack frequencies, they may switch targets periodically

## **2. Custom Aggro Mode**



Creations will generate _aggro values_ based on factors such as damage dealt to them by other entities, healing done to allies, etc., and will select their aggroed target based on the ranking of these aggroed values.



Supports configuration of aggro-related parameters



Supports various operations on aggro values and aggro lists. Supports aggro-related behaviors like _taunt_



Allow objects to use aggro functionality

Please note that the functions of these two modes are completely isolated. The parameter configurations and nodes set in the Custom Aggro Mode cannot be used in the Default Aggro Mode

# III. Functions of Custom Aggro Mode

## 1. Basic Concepts of Custom Aggro System

### (1) Aggro Owner and Aggro Target

_Aggro Owners_:

Holds an _Aggro List_, can select entities from the Aggro List as aggroed targets and perform related actions

Creations are Aggro owners by default, and their actions will target Aggroed targets

Objects can also be set as aggro owners, and their behavior logic can be determined based on their aggro list

Characters cannot be aggro owners

_Aggro Targets_:

All characters, objects, and creations from _hostile factions_ relative to the aggro owner can become targets of their aggro

### (2) Aggro Value, Aggro List, and Aggro Target

Each Aggro owner maintains an Aggro list, which tracks all entities that have generated Aggro toward it, along with their respective Aggro values

When a battle begins, the Aggro owner sorts its Aggro list, designates the target with the highest Aggro as its primary target, and may switch targets later based on Aggro-transfer rules

For creation-type entities, the primary Aggro target is almost always their skill target, causing them to focus attacks on it

### (3) What Actions Generate Aggro Value

Generally speaking, there are four sources that generate Aggro value



Directly deal Damage to the aggro owner

**Aggro generated = (Actual DMG dealt × Attack's Aggro multiplier × Entity/Class Aggro Multiplier) + Attack's Aggro bonus**



Restore HP to entities currently on the aggro list

**Aggro generated = (Actual healing amount × Healing's Aggro multiplier × Entity/Class Aggro Multiplier) + Healing's Aggro bonus**



Use the aggro value operation nodes in the node graph



When an aggro owner is not in battle and enters a battle through _FOV detection_, _range detection_ or other methods, they will record 1 point of aggro towards the target that triggered the battle

### (4) Example of Custom Aggro Mode

Suppose Player 1's Character deals 10 DMG to a Hilichurl, Player 2's Character deals 20 DMG to the Hilichurl, and Player 3's Character heals Player 1 for 15 HP.

At the same time:



Three characters have 0 aggro value in the Hilichurl's aggro list before dealing damage/healing



The three characters' _class aggro multipliers_ are 3.0, 2.0, and 1.0 respectively

Then the Hilichurl's Aggro list will record the following values:

**Aggro Targets****Aggro Value**
Character 1 30（10×3.0）
Character 2 40（20×2.0）
Character 3 15（15×1.0）

Since Character 2 has the highest Aggro value at this time, the Hilichurl will select Character 2 as the Aggro target (which is usually also the Hilichurl's skill target), until Aggro transfer or taunt-related actions occur

## 2. Aggro Transfer

In stage setting, you can set the global _Aggro Transfer Multiplier_

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/13e8dc31-7b8b-4c45-8ce1-688f2d4200e2.png)

When a target's Aggro value on the Aggro list is **≥ current target's Aggro value × Aggro transfer multiplier**, an _Aggro transfer_ occurs, and that target becomes the new focus

In the above example, after executing the aforementioned actions, Character 2 becomes the Hilichurl's Aggro target with an Aggro value of 40

After Character 3 deals 30 DMG, the Aggro list becomes the following:

**Aggro Targets****Aggro Value**
Character 1 30（10×3.0）
Character 2 (Current Aggro Target)40（20×2.0）
Character 3 15+30（30×1.0）

Since Character 3's Aggro value (45 points) exceeds the current target's Aggro value (Character 2, 40 points) × Global Aggro Transfer Multiplier (assumed to be 1.10), the Hilichurl will switch its target to Character 3

## 3. Taunt

Taunt is a specific entity behavior that can be initiated by _Server Node Graph_ or _Local Node Graph_

Taunting sets the taunter's aggro on the target's aggro holder to **current aggro target's aggro value × aggro transfer multiplier**. This triggers an aggro transfer, causing the taunted target to set the taunter as their aggro target, which typically results in creation attacking the taunter

Please note:



When the taunter is already the aggroed target, the taunt action will not cause any changes in aggro value



If the taunted is not in battle, the taunt action will generate 1 point of aggro for the taunter, causing both the taunter and the target to enter the battle

## 4. Battle Entry and Exit

### **(1) Entering Battle**

Certain actions will cause entities to enter the battle state. For creations, entering a battle usually switches them to the battle behavior mode



For characters, they are considered to be in battle when the **character appears in any other entitiy's aggro list** (for example, when a character attacks a creation, it will cause the character to enter the battle)



For objects/creations, when the **entity is the aggro owner and its aggro list is not empty**, it is considered to be in battle (for example, when a construct is attacked, the construct itself is considered to be in battle)

Any action that can generate aggro value may trigger battle entry, including:



Entering a battle when detected by creation's range detection or FOV detection (generates 1 point of aggro)



Enter a battle by attacking other entities



Restore health for entities in the aggro list



Taunt into a battle



Force battle entry by setting aggro value through node graph

### **(2) Leaving Battle**

Some actions can force entities to leave the battle. When creations leave the battle, they will instantly reset to their original positions and exit the battle mode

For any entity, it is considered to have left the battle when it is **not in any other entity's aggro list and its own aggro list (if it has one) is empty**

Certain actions can force battle exit, including:



The entity in the aggro list is not present (e.g., has been destroyed)



The creation's pathfinding fails or it moves away from its own tethered area



Used the [_Clear Aggro List_] node to clear the aggro list

Please note that you cannot leave the battle by setting aggro value to 0 using the [_Set Aggro Value_] related nodes (Aggro value during the battle must be at least 1, cannot be set to 0).

# III. Aggro System Configuration Entry

## 1. Global Aggro Configuration

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/db845788-9184-40f4-bf9f-547870218987.png)

In the stage settings, you can configure global aggro-related settings, including:

_Aggro Type_: Switch between Custom Aggro Mode or Default Aggro Mode. Note that after switching to Default Aggro Mode, custom Aggro-related features cannot be used

_Aggro Transfer Multiplier_: The Global Aggro Transfer Multiplier, default is 1.2 (meaning Aggro transfer occurs when exceeding 1.2 times the current target's Aggro value). This value cannot be less than or equal to 0

## 2. Aggro Parameter Configuration

### (1) Object Aggro Configuration

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/ba496233-d9e4-402d-a7b7-8ee1085ab7ab.png)

_Aggro Generation Multiplier_: The multiplier at which this object generates aggro through dealing damage and healing actions

_Enable Aggro Record_: When enabled, this object will become an aggro owner and can obtain target entities through the node graph

_Synchronize Aggro Value_: Whether to synchronize the aggro values in this entity's aggro list to the local side (by default, aggro values are not synchronized, only aggro targets are synchronized). This is typically used when displaying aggro values in the UI. This button is only available when [Enable Aggro Record] is turned on

### (2) Class Aggro Configuration

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/9d143612-0c3b-49eb-b230-d9e04bba1017.png)

_Aggro Generation Multiplier_: The multiplier for Aggro generated through attacks and healing actions by characters of this class

### (3) Creation Aggro Configuration

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/44314fa9-0586-49d2-8012-868ebb77cdd9.png)

_Aggro Generation Multiplier_: The multiplier at which this creation generates aggro through dealing damage and healing actions

_Synchronize Aggro Value_: Whether to synchronize the aggro values in this entity's aggro list to the local side (by default, aggro values are not synchronized, only aggro targets are synchronized). This is typically used when displaying aggro values in the UI.

Please note that since aggro values are calculated on the server side, direct access to aggro values from any local side will be inaccurate

# IV. Aggro-Related Nodes

## 1. Server Nodes

**Taunt Target**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/123256ae-68e5-46cd-a5dc-93c96bb38465.png)

**Remove Target Entity From Aggro List**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/c3126361-1d6b-4ae5-954e-961a3e044825.png)

**Clear Specified Target's Aggro List**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/0d45141a-2f31-41f8-b754-18ddd70111ff.png)

**Set the Aggro Value of the Specified Entity**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/ca3e3681-04b2-40d2-9743-835ffc96f3b1.png)

**When Aggro Target Changes**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/f31b367e-d606-49fa-88ed-944c28cb53f7.png)

**When Self Enters Combat**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/e1e83d2a-7e0f-4f7c-aad0-bbdf995cf60c.png)

**When Self Leaves Combat**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/ad1bb94a-355d-4ba7-a75b-77830ee22118.png)

**Query Global Aggro Transfer Multiplier**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/27be08f5-bd88-47e3-8de9-1f1997bc50b5.png)

**Query the Aggro Multiplier of the Specified Entity**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/6b665f73-0076-4da8-856f-5e887a5d74ce.png)

**Query the Aggro Value of the Specified Entity**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/c0d49852-3433-4379-9ad1-889c3c5975ac.png)

**Query If Specified Entity Is in Combat**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/e2db69ff-b30f-43cc-99ab-ef7da799c0ef.png)

**Get List of Owners Who Have the Target in Their Aggro List**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/b93b7719-61c3-4881-9d37-ff2722597f64.png)

**Get List of Owners That Have the Target As Their Aggro Target**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/0d1727af-457e-43ba-85f5-e0bd57b3c3c6.png)

**Get the Aggro List of the Specified Entity**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/1dfac9c5-e919-4706-8f38-09262db8318e.png)

**Get the Aggro Target of the Specified Entity**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/cb0301dc-d690-4c7a-8829-600e9da76f2f.png)

## 2. Client Nodes

**Modify the Aggro Value of the Specified Entity**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/64a1e30d-3c0d-41ff-a301-582bb4b34ebd.png)

**Transfer the Aggro Value of the Specified Entity Proportionally**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/5298823a-7dc6-4fd2-86b0-55f860031185.png)

**Taunt Target**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/5675e707-90de-434a-ad26-a7a1748ea079.png)

**Remove Target Entity From Aggro List**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/5b948112-0035-48d8-92ab-ba7fe4cc0d0e.png)

**Clear the Aggro List of the Specified Entity**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/b48f5477-f127-45ec-845e-ba53b587861b.png)

**Set the Aggro Value of the Specified Entity**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/46543d92-c596-4776-a247-2320995a619d.png)

**Modify the Aggro Value of the Specified Entity**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/3adb7ae0-92d1-4392-a033-d7fc086734b1.png)

**Query If Specified Entity Is in Combat**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/84ddb7f2-ae6d-4e96-8859-0ef46a0a42e6.png)

**Get the Aggro List of the Specified Entity**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/43c8c058-3866-44bc-86aa-7f7024c280d7.png)

**Get the Aggro Target of the Specified Entity**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhzwpk9o4t4y/e061fbc7-8871-4737-8fc3-ead70cb0f9b8.png)

[Basic Battle Attributes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhvyqz9xwu0q)[Hurtbox Settings](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhvg40rc5w9i)
