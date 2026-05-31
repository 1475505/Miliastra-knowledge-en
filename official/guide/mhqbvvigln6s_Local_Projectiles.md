---
id: mhqbvvigln6s
title: Local Projectiles
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhciimiw86jg
language: en
scope: guide
crawledAt: 2026-05-31T16:27:04.520Z
---

# Local Projectiles

# 1. Definition of Local Projectiles

Local projectiles are entities that are computed and rendered locally to simulate projectile effects and on-hit effects

# II. Characteristics of Local Projectiles

Local projectiles need to be predefined during editing before they can be referenced and created by skill node graphs. For skill-related information, please refer to [Skills](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mho81frl33im)

During runtime, local projectile entities depend on the _projectile motion device_ to determine their runtime rules, and rely on _on-hit detection_ to determine their collision trigger rules and effects.

When a local projectile entity runs, it follows the configuration set in its "Life Cycle"

# **III. Editing the**Local Projectile

## 1. Create Local Projectiles

After entering the combat preset tab, you can select the local projectile tab, manage tabs as needed, and create corresponding local projectiles within the tab

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/f746e484-f4bd-4c8d-8e1a-d77b926f1a07.png)

Click _"Confirm Create"_ to create a new local projectile

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/c742960f-ef0e-42de-a36b-b60f1ab99b15.png)

## 2. Naming and Indexing

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/60fa7bfe-c95b-41ac-a1a8-fc96934ab8d2.png)

Each predefined local projectile _name_ must be globally unique and a globally unique _prefab ID_ will be automatically generated.

## **3. Base Attributes**

The first column is for the Base Attribute

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/3f8af5a3-b02a-41be-9290-812154a93298.png)

### (1) Basic Settings

The model configuration used by the local projectile during runtime. Selectable models are sourced from the projectile model library provided by the editor.

Supports adjusting the scaling along the X, Y, and Z axes. The zooming values are preserved after switching models

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/9d55803c-dfd3-4cea-804f-ecd6e0a7deb4.png)

### **(2) Combat Parameters**

![Image 7](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhciimiw86jg)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/f85a2665-1744-4d6b-9b6d-e75f473dc083.png)

Configuration Parameters Description
_Attribute Settings_ Provides 2 enumeration options, _Inherited from Creator_ and _Independent_. Corresponding parameters below will differ based on the option selected

Inherited from Creator by default

Inherited from Creator: HP, ATK, and DEF are identical to the creator's

Independent: Configure HP, ATK, and DEF as needed

Corresponding parameters below will differ based on the option selected
_Whether Subsequent Settings Are Influenced by the Creator_ If enabled, certain unit status effects on the creator will be synchronized to the projectile

Only status effects that affect HP, ATK, and DEF will be synchronized

### **(3) Life Cycle** Settings

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/78457e08-ca2f-4b27-b809-470bd61f026c.png)

Configuration Parameters Description
_Permanent Duration_ If not enabled, you need to specify the _duration time_
_Duration_ The maximum time from initialization to destruction of this local projectile without other influencing factors
_X/Z Axis Destruction Distance_ Except for _Ability Units_, this is the highest priority condition for destroying local projectiles during runtime

Local projectiles will self-destruct when exceeding the maximum destruction distance during runtime
_Y-Axis Destruction Distance_

### **(4) End of Life Cycle Behavior** Settings

When a local projectile's life cycle ends, it will execute the configured ability units in order from top to bottom.

The ability units referenced here are those defined within the local projectile's ability unit settings.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/5e107336-01a8-498a-9514-c09719d61ed6.png)

## **4. Common Components**

The second column is for common components

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/5672d1d8-15c3-4314-8821-a69c380560da.png)

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/f2c85e5b-11bd-4cec-9b83-16916f5beea0.png)

### **(1) VFX Playing** Component

For details, please see [VFX Playing](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh4ppo02m1o8)

### **(2) Projectile Motion Device** Components

For details, please see [Projectile Motion Device](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhaqt9rgqv4u)

### **(3) On-Hit Detection** Components

For details, please see [On-Hit Detection](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh2pir0hat1s)

## 5. Ability Units

The third column is for the ability units

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/e966ba08-8dcb-4b92-81a9-109614a8cb22.png)

Local projectiles can reference ability units, which require predefined editing. For details, please see [Ability Units](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0ucw9e76f6)

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqbvvigln6s/451bde11-cde4-4e63-9fd4-475db6b0a919.png)

Ability units can be adjusted through "Advanced Editing"

In the _On-Hit Detection component_, predefined ability units can be referenced and executed once hit detection is triggered

[Objects](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhlh4n9m4i56)[Stage](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3pgiraqkiu)
