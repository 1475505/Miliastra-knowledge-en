---
id: mh1lsn90mml6
title: Unit Status
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6rh59iil2i
language: en
scope: guide
crawledAt: 2026-05-31T16:38:36.361Z
---

# Unit Status

# I. Definition of Unit Status

_Unit Status_ is a status management module for managing additional functions and attributes of Entities during Stage runtime.

During Stage runtime, Entities can be applied with Unit Statuses. Each Unit Status must have a defined _Applier Entity_.

Entities can dynamically hold multiple Unit Statuses. Each status has a defined Runtime Duration that grants the Entity _Additional Effects_ and _Additional Node Graph_ functionality. Statuses must be predefined at the editing time to be enabled during runtime.

Each active Unit Status has independent _Stack Layers_, and some functions can scale in real time with the number of stacks.

A Unit Status ends when its _Runtime Duration_ expires or when all _Stack Layers_ are depleted.

## 1. Additional Effects

All _Additional Effects_ come from the predefined _Effect Pool_, such as functional effects like "Mount Looping Effects" or numerical effects like "Motion Speed Change".

Each Additional Effect has certain runtime limits on both its Effective Target and Effect Intensity —

_Effective Target_: Each effect can only apply to one or several among "Characters", "Creations", or "Objects". When a target entity tries to hold a Unit Status, if that status includes an effect that cannot apply to the entity’s type, the entity will fail to acquire the status. For example, the "Mount Screen Effect" is allowed only on "Characters", so any status using this effect can only be applied to character entities.

_Effect Intensity_: An entity may receive multiple Additional Effects of the same type at the same time, but the final effect cannot stack without limit — it is restricted to a valid range. For example, with "Motion Speed Change", since the change cannot be less than -40% or greater than 40%, whether an entity has one effect of +50% speed change or five effects of +10% each, the final Motion Speed will never exceed 140%.

Additionally, some effects cannot coexist within the same Unit Status. For example, a Unit Status can provide only one type of Elemental Effect. If multiple _Mutually Exclusive_ effects are configured, the last effect will take precedence.

## 2. Additional Node Graph

Each Unit Status can be related with a server Node Graph. When an Entity holds this status, the Node Graph is synchronously added to the corresponding Entity, and it is removed when the status ends.

The related Node Graph can only come from a _Status Node Graph_, where Composite Nodes can still be used.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/45e3f337-79d1-4092-9e93-cc894d71a085.png)

Unlike regular Node Graphs, if multiple Unit Statuses held by an Entity are related with the same Node Graph, it is considered related only once, and the Node Graph will lose relation only when the Entity has lost all related statuses.

# II. Editing Unit Statuses

After entering the Combat Preset page, select the Unit Status bar, create management Tabs as needed, and create the corresponding Unit Statuses within the Tabs.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/c9d64509-ee61-49f0-b2aa-44b80e981ee4.png)

Click the New Status, then click Confirm Create in the pop-up to create a new Unit Status

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/4c3d88bb-6f1f-46bb-8de1-e7a29c35af90.png)

## 1. Naming and Identification

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/1c19adcb-e596-435a-8d7d-b3453cf3d8e3.png)

Each predefined Unit Status _Name_ must be globally unique. A globally unique _Config ID_ is automatically generated for it.

You can use the Copy button to quickly duplicate this Config ID.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/5c854912-a234-4425-9039-46fea260f9f2.png)

You can also replace the _Icon_ for each status.

## 2. Stacking Rules

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/1213cb9b-c005-4a9b-b039-ccb2b7509606.png)

When a status is stacked onto an existing one, detailed stacking rules must be defined.

Each time stacking occurs, the new status's stack layers count is added to the existing status, but the total will not exceed the _Maximum Stack Layers_.

The maximum count of the stacks may vary depending on the situation.

When stacking may exceed the limit, you can choose whether to enable _Overlapping Data Update_.

If updated, the overlapping data will sequentially replace the earliest existing stack data. Otherwise, the overlapping data will be discarded.

If no change occurs to the stack data of the status, the stacking action is considered invalid, and the application of the status is also invalid.

## 3. Timing Rules

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/402dff96-fdd5-4e50-b749-724eead613c4.png)

Each active Unit Status may have a defined Life Cycle. When the Life Cycle is exceeded, the status is automatically removed.

Enabling _Infinite Duration_ prevents the status from being removed when its Life Cycle expires, and any updates to the status will no longer affect its Initial Runtime Duration.

If the Initial Runtime Duration of a status is finite, when an Entity gains a new status, that status's Life Cycle is set to its _Initial Runtime Duration_.

If the Initial Runtime Duration is finite, you can enable _Stack Shared Duration_.

When disabled, each stack calculates its Runtime Duration independently. Once a stack exceeds its Runtime Duration, it is automatically removed, reducing the corresponding Stack Layers of the status

Stack Layers Count.

 In this case, the Maximum Stack Layers count is 10.

 When enabled, all stacks are removed together once the status exceeds its duration. However, each time a new stack is applied, the status's _Time Remaining_ may be extended based on specific rules.

 Each time a new stack is applied, the current Time Remaining of the status may be increased by an _Extended Duration_.

When _Maximum Extended Duration Limit_ is enabled, the extended Time Remaining cannot exceed the _Maximum Duration_, even if the original Time Remaining was greater.

 In this case, the Maximum Stack Layers count is 1000.

## 4. Related Node Graph

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/ad2ef7d5-fdd9-484d-9112-6d52f2a75a59.png)

The _Status Node Graph_ related with an Entity while it holds a status.

## 5. Status Coexistence

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/889ecdf0-13ce-4480-b8d6-51bd8bb9e260.png)

When the same Unit Status is repeatedly applied to an Entity, different handling can be configured based on the Applier Entity, and the most recent update time is recorded.

The same Applier cannot apply two instances of the same‑name Unit Status to a Target Entity; instead, it is added to the already applied status.

When different Appliers apply the same Unit Status to a Target Entity, you must decide whether these statuses can _stack from different Applier sources_:

If stackable, then after the stacking action is successfully completed, you can enable _Record Latest Applier_.

If stacking is not allowed, set a _Coexistence Limit_ for this status from different Appliers.

When the Coexistence Limit is reached, define a _Same Name Status Update Strategy_ to determine how new applications are handled: 

_Cannot Update_ — the status application fails and the action is terminated.

_Minimum Time Remaining_ — remove the status with the shortest Time Remaining, then apply the new one.

_Earliest Update Time_ — removes the status with the earliest last update time, then applies the new status. If the status has not been re-applied, its first application time is used.

_Earliest Application Time_ — remove the status applied earliest, even if its Time Remaining is not the shortest, then apply the new one.

## 6. Yielding and Replacement

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/a8b94954-1ad7-4e25-a994-3dbbd36de494.png)

When applying a status, the _Yielding Status List_ may affect the outcome of the application, and the _Replacement Status List_ may affect the statuses held by the target Entity.

If the target already holds any Unit Status from the Yielding Status List, the application is immediately terminated and fails.

If the target already holds any Unit Status from the Replacement Status List, all corresponding statuses are removed before the new status is applied.

# III. Unit Status Execution

## 1. Apply via Component

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/7467d8b9-1db8-4519-b39b-b5b23a14281d.png)

If a preset Unit Status is configured in the target Entity's _Unit Status Component_, the corresponding status is applied by the Stage Entity when the Entity is created.

The Stack Layers Count for the status can be configured in the component, and statuses are applied in the top-to-bottom order of the configuration.

The same status can only be applied once within the component.

For details, please refer to [Unit Statuses](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhd7nxrfa8im)

## 2. Manage with Server Nodes

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/e5426b81-b009-4300-a00d-432442bbefd2.png)![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/25da77f8-8b1d-4d1a-87cb-3163ab8cd44f.png)

When both the Applier Entity and the Target Entity are present, the system attempts to apply the corresponding Unit Status to the target and returns one of the following results:

_Failed: Unexpected error_ — failure due to special cases, such as the Applier or Target not being present in the scene

_Failed: Operation paused for another process_ — the target already holds one or more statuses from the Yielding Status List; the application does not proceed

_Failed: Maximum coexistence limit reached_ — the target has already reached the coexistence limit for statuses from other Appliers, and replacement is not allowed

_Failed: Unable to add additional stack_ — when attaching to the target's existing status, all stacks are full and updates are not accepted

_Success: New status applied_ — a new status is applied to the target

_Success: Slot stacking_ — an existing status on the target is updated

**Usage of Unit Status Parameter Dictionary**

Some unit statuses can be pre-defined with override tags. In the actual use of the [Add Unit Status] node, a parameter dictionary can be dynamically passed in. If the dictionary contains a key that matches the override tag, the unit status configuration value will take effect according to the value associated with that key. Note: Dynamic property modifications cannot coexist with the original version; only one can be set.

**Example**: The initial configuration value for attack power correction is 10, and an override tag `delta` is defined. If the configuration value is modified using a parameter dictionary in the node graph, the ATK correction value will become 20 after the node logic takes effect.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/eafaa996-d5ce-4fa7-b04d-95f60e771e78.png)

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/22bc452c-a269-41d8-a15a-6f357406a667.png)![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/2160a761-0a30-4676-9476-7944e8921ff1.png)![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/b2bae63f-036b-49d4-9178-df14a4e6be57.png)

When the Remover Entity is present, the system attempts to remove the corresponding status from the Target Entity.

When the removal target holds one or more coexisting statuses, you can choose:

_All Coexisting Statuses With the Same Name_ — regardless of whether the Applier is self, all statuses with the same name held by the target are removed

_Status With Fastest Stack Loss_ — if stacks are timed independently, remove the status whose first stack has the shortest Time Remaining; if stacks are not timed independently, remove the status with the shortest Time Remaining

(Not available) statuses applied by self — if the target holds a status whose Applier matches self, remove it

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/950cc6d0-6f39-4b30-803a-bc20f33c233c.png)

When the target entity gains a new unit status or an existing unit status is updated, this event will be triggered.

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/ee929060-e954-4343-958f-78438197ea31.png)![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/93aa4223-3cde-4d1e-a89e-0c77595ac96f.png)

When the Target Entity loses an existing Unit Status, this Event is dispatched.

If multiple coexisting statuses on the target are removed, the same number of Events is received.

Removal reasons include:

_Replaced by other Unit Status_ — a new status was applied, replacing this status

_Duration exceeded_ — the status exceeded its Initial Runtime Duration, or all stacks exceeded their Initial Runtime Duration and ended naturally

_Dispelled_ — the status was forcibly terminated by a Skill, an Ability Unit, or a fully reacted Element

_Status expired_ — the status removed itself because some of its effects ended

_Class changed_ — the Player switched Class, removing statuses attached to the previous Class

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/16165618-e53a-478f-bdad-30269cb36ca8.png)

You can search whether the Target Entity present in the scene already holds a given Unit Status

## 3. Manage with Ability Units

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/f07c2b19-5d00-42aa-9313-ba9352bc0e36.png)

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/a136e558-ecb1-44b8-8553-c1f84caef9ba.png)

Add or remove specified Unit Statuses in the Local Projectile's Ability Unit.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/52471ce4-bd8b-4d7c-9420-957c7b4345db.png)

When the Local Projectile hits the Target, use the Ability Unit to add or remove Unit Statuses on the Target

For details, see [Ability Units](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0ucw9e76f6)

## 4. Manage with Skill Node Graphs

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/491ddb6c-3de1-4367-a09e-aa4e143f39e6.png)

When both the Applier Entity and the Target Entity are present, attempt to apply the corresponding Unit Status to the Target, but the final result cannot be determined.

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1lsn90mml6/5de6d7a0-95f0-4093-a575-35488a6df93f.png)

Regardless of whether the Remover Entity is present, attempt to remove the corresponding Unit Status from the Target. If the Remover Entity is not present, the removal is treated as source-less.

Regardless of the Applier, all statuses with the same Config ID are removed.

[Classes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhodlcrpht3q)[Preset Points](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfvn30ctm9c)
