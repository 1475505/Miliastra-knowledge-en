---
id: mh893x0weae8
title: Creations
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhufqo0c0tqw
language: en
scope: guide
crawledAt: 2026-05-31T16:20:51.775Z
---

# Creations

# I. Definition of Creations

Creations is a collective term for humanoid beings, elemental beings, abyssal monsters, mutant beasts, small animals, mechanical combat units, etc.

Creations can autonomously react to entities from hostile _factions_, including but not limited to entering battle or tracking.

See [Factions](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhe1ixri46ta)for more details on factions.

# II. Creation Features

The behavior logic of creation entities depends on the _behavior mode_ configured during editing and cannot be dynamically switched during runtime.

During runtime, a creation entity adheres to a single behavior mode, executing actions strictly based on that mode throughout its entire life cycle.

When a creation entity is running, it has a _hurtbox_ matching its model size by default, allowing it to receive battle information accurately.

Creation entities follow all general rules that apply to entities.

# III. Behavior Modes of Creations

The behavior modes of creation entities are all drawn from a predefined behavior pool. The number and the type of behavior modes configurable for each creation entity vary. Selection is supported during editing, but dynamic switching at runtime is not supported.

Each behavior mode is divided into two parts of logic: _Not in Battle_ and _Entering Battle_. Both parts provide corresponding pattern configurations, with different configuration parameters offered for each behavior mode.

### (1) Not-in-Battle

After a creation is created, it is in a Not-in-Battle state by default

When a creation enters battle and then leaves battle for various reasons, it will return to the Not-in-Battle state

### (2) Entering Battle

When a creation detects a character through _Range Detection_ or _FOV Detection_, it will target that character and switch from the Not-in-Battle state to the Entering Battle state

# IV. Editing Creations

## 1. Basic Information

The first section in the menu bar is for the _Basic Information_

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/72fb8580-682d-476a-8e2d-92e88c3a67ee.png)



**Transform**

Rotation on spatial X and Z axes is not supported, only Y-axis (horizontal orientation) editing is allowed

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/b89b0d49-5df6-496c-b594-ecaf658780fb.png)

## 2. Specialized Settings

The second section in the menu bar is for the _specialized settings_

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/a6a181ef-1048-4103-bb41-25e4e1638c0f.png)

### **(1) Basic Combat Attributes**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/dd09f327-a677-40c7-99eb-21d67915b47d.png)

From both level attributes and fixed attributes, support creators (Craftspeople) in adjusting parameters and planning growth curves for their creations. See [Base Combat Attributes](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhvyqz9xwu0q)for more details.

### (2) Aggro Configuration

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/a0622522-c8aa-45ed-aba0-587bd09b0d92.png)

See details in [Aggro Configuration](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhw9ut96q96y)

### (3) General Settings

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/ce7eae5d-088a-4c95-824d-9d84924b6e16.png)

See [General Settings](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh3rgo0c16c8)

## **3. Component**Functions

The third section in the menu bar is for the common components

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/8246a5c7-4f85-401d-9775-4c22076182de.png)

Use the "Add Components" button to mount components as needed.

Each component can only be mounted once.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/6dfc62d2-cbe9-4163-b5b2-2a9fcadbab90.png)

The Creation Entity supports adding multiple component functions, including



[Tab](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh5jko05fzyw)



[Collision Trigger](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh8w69rzuc3i)



[Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhso1b9wjica)



[Global Timer](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhawd6rl5kpy)



[Unit Status](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhd7nxrfa8im)



[VFX Playing](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh4ppo02m1o8)



[Unit Attachment Points](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhmshmimtegs)



[Collision Trigger Source](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhn95di01j84)



[Sound Effect Player](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwiv89yra02)



[Inventory](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh5y5001vqd4)



[Loots](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh63ox06afy8)



[Nameplate](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh5n160t2b6w)



[Text Bubble](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwtz297kp6a)



[Shop](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mho6gviqhsqs)



[Scan Tag](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhfc0lr1tcke)



[Mini-Map Marker](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0pppib5eyc)

## 4. Node Graph Functions

The fourth section in the menu bar is for the _Node Graph_ configuration

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh893x0weae8/3034ab72-2d65-4a1c-b71a-a661b562df94.png)

Reference pre-configured entity node graphs to add logical functions to creations

[Character](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3ecor1x5cm)[Objects](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhlh4n9m4i56)
