---
id: mhyfcn91kiqi
title: Skill Attribute Groups
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh0inr0jak34
language: en
scope: guide
crawledAt: 2026-05-31T16:35:01.581Z
---

# Skill Attribute Groups

# I. What Are Skill Attribute Groups?

_Skill Attribute Groups_ can be associated with skills. By modifying the values in an attribute group, certain skill behaviors can be changed dynamically

# II. Editing Skill Attribute Groups

Click [Skill Resource Management] in the System Menu to open the Skill Resource Management interface

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyfcn91kiqi/56db084d-1f9e-4039-ab1b-1b29e3000b38.png)

In this interface, select the [Skill Attribute Group] tab to edit globally available attribute group settings

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyfcn91kiqi/deab4ed8-4aef-479a-a898-29e356370557.png)

_Attribute Group Name_: The name of the attribute group configuration

_Configuration ID_: The unique identifier for the Skill Attribute Group. Used when referencing it from external systems

_Attribute Type_: Skill Attribute Groups support different attribute types. The current version supports only two

_Animation Speed Multiplier_: Adds an additional modifier to base animation playback speed, making the animation play faster or slower. This also affects the trigger timing of the corresponding Skill Node Graph

_Cooldown Time Multiplier_: Adds an additional modifier to a skill's base cooldown time, making the skill cool down faster or slower

# III. Calculation Formula for Attribute Types

The stacking rules for additional Skill Attributes follow the formula below:

**Final Animation Speed = Initial Skill Attribute Group Value + Σ(Unit Status Modifier × Stacks) + Σ(Skill Track Modifier)**

_Initial Skill Attribute Group Value_: Initial value configured in the skill settings

_Unit Status Modifier_: Modifier added through Unit Status

_Stacks_: Total number of Unit Status stacks

_Skill Track Modifier_: Modifier applied through the Skill Track

**Final Skill Cooldown = Base Skill Cooldown × (Initial Skill Attribute Group Value + Σ(Unit Status Modifier × Stacks))**

_Base Skill Cooldown_: Initial value configured in the skill settings

_Initial Skill Attribute Group Value_: Initial value configured in the skill settings

_Unit Status Modifier_: Modifier added through Unit Status

_Stacks_: Total number of Unit Status stacks

# IV. How to Modify Skill Attribute Groups

## 1. Skill Configuration Referencing

In the Skill Editor, locate the "Skill Attribute Group" field under Numerical Configuration and click [Edit] to open the Attribute Group Editor

Use the dropdown menu to select a preconfigured Skill Attribute Group and associate it with the skill. The initial value of the attribute group will use the globally defined default value

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyfcn91kiqi/d476cb96-3beb-4022-bd9f-f97baf7cc293.png)

## 2. Unit Status Modification

By using the [Adjust Animation Speed] and [Adjust Cooldown] Unit Status options, Craftspeople can dynamically modify the values of a specific Skill Attribute Group during runtime

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyfcn91kiqi/7cc3c340-ee6c-4454-8b2d-01836a1879d0.png)

## 3. Skill Track Modification

By adding an "Adjust Animation Speed" event to the [Status Track] in the Skill Animation Editor, you can modify the animation speed of specific animation phases during skill execution. This method supports only fixed parameters and is typically used to improve animation presentation

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyfcn91kiqi/27a944be-e523-475a-a5d0-b7abf4ef3e23.png)

# V. Node Graph

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyfcn91kiqi/048731f4-dc06-4304-a045-3cb8f41a12f3.png)

[Skill Variables](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhhzqw98264i)
