---
id: mh90vi0ifubs
title: Ability Units
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh0ucw9e76f6
language: en
scope: guide
crawledAt: 2026-05-31T16:16:15.568Z
---

# Ability Units

# I. Definition of Ability Unit

## 1. What is an Ability Unit

Ability Units are a set of ability data predefined by creators (Craftspeople) during editing, which can be called by multiple other functional modules at runtime, such as _node graphs_, _on-hit detection components_, and _local projectiles_

Includes the following types:

**Type****Description**
Hitbox Attack Initiates a hitbox attack based on a specified target or location. When the attack hitbox collides with an entity's _hurtbox_, it launches an attack against that entity
Direct Attack Perform a direct attack on the specified target
Play Special Effects Play a _timed effect_ based on a specified target or location
Create Local Projectiles Create a _local projectile_ based on a specified target or location
Add Unit Statuses Add _Unit Statuses_ to the specified target
Remove Unit Status Remove _Unit Status_ from the specified target
Destroy Self _Destroy_ self
Recover HP Restore a certain amount of HP for the target

## 2. How to Use Ability Units

Ability units are a set of pure data that has no functions on their own. Therefore, other systems are needed to call these ability units to achieve their corresponding effects

There are several entry points for ability unit call in the current mode. Note that each entry point has different types of ability units available

**Call Type****Description****Available Ability Unit Types**
Server Node Graph Direct Call Directly initiate an ability unit call from the _server node graph_, and can only use attack-related ability units.[Hitbox Attack]

[Direct Attack]

[Recover HP]
On-Hit Detection Component Hit Event Call[On-Hit Detection](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh2pir0hat1s)When hitting an entity or scene, Ability Unit call can be triggered once[Hitbox Attack]

[Direct Attack]

[Recover HP]
Local Projectile Hit Event Call[When local projectile](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhciimiw86jg)hits an entity or scene, Ability Unit call can be triggered once[Hitbox Attack]

[Direct Attack]

[Play Special Effects]

[Create Projectiles]

[Add Unit Status]

[Remove Unit Status]

[Destroy Self]

[Recover HP]
Local Projectile Destruction Event Call[When local projectile](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhciimiw86jg) is destroyed, Ability Unit call can be triggered once[Hitbox Attack]

[Direct Attack]

[Play Special Effects]

[Create Projectiles]

# II. Editing Ability Units

## 1. Entry Point for Ability Units Editing

### (1) Entry Point for Specialized Settings Tab Editing

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/f7bb4ad9-8a45-4f7a-8804-6a25519f65c6.png)

Click "Advanced Editing" to enter the details interface

### (2) Entry Point for Local Projectiles Tab Editing

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/40cced0c-6cec-46a5-842b-b5a1f0808296.png)

Click "Advanced Editing" to enter the details interface

## 2. Editing Ability Units

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/79ca9ebe-68b6-4ed1-be05-e6637232c853.png)

On the ability unit details editor tab, click the "+" icon to add a new ability unit setting

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/045630cc-d02b-46c0-a325-1dd15840804a.png)

You can then switch the ability unit type in the Ability Unit Type option

## 3. Ability Unit Effects

See [Ability Unit Effects](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhrvqvioautg)

## 4. Ability Unit Call

### (1) Server Node Graph Node Call

In the server node graph, you can call three ability units: [Hitbox Attack], [Direct Attack], and [Restore HP]

[Hitbox Attack] and [Direct Attack] are called using the [Initiate Attack] node

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/3a923f1d-cd89-4605-845c-fd4e1758aad5.png)

Call the [Recover HP] behavior by calling the [Recover HP] node

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/12179d03-2617-4f9e-88fc-ffb49db05158.png)

### (2) Called When On-Hit Detection Component Registers a Hit

The on-hit detection component can be configured with ability units that [Trigger on Hit]

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/6174e366-6cc4-456d-aa90-b1040141ad5d.png)

Click Details to enter the on-hit detection component details settings interface

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/12dc6484-13c3-4924-9c1a-669983fee277.png)

Click "Add Ability Units" to add pre-configured ability units

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/69423cbe-db1d-4bf3-9d39-c2542c9184c1.png)

When on-hit detection is successfully triggered, the configured ability unit will be called immediately

Compared to handling the same logic using the [When On-Hit Detection Is Triggered] event in the server node graph, configuring in [On-Hit Trigger Settings] allows ability units to trigger more quickly locally, reducing the impact of network latency

### (3) Called When Local Projectile Hits

In the [On-Hit Detection] component of local projectiles, you can also configure ability units that [Trigger on Hit]. Since local projectiles don't have node graph configurations, most of the logic for local projectiles needs to be written through hit trigger logic

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/475060d0-7b6d-40c8-b58e-c8ba28e68256.png)

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/1bb8f9cd-802e-4d8b-b039-77228b0280dd.png)

As shown in the graph below, this is a common ability unit configuration where a local projectile hits, plays VFX, and finally destroys itself

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/d19e444d-5c2f-49e4-b1bd-beedd6a0cf56.png)

Configure in order: the three ability units of Direct Attack - Play VFX - Destroy Self

Then configure in the On-Hit Trigger Settings to make the local projectile deal damage, play special effects, and finally make itself disappear upon impact

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/f7cb76ff-0508-4e8a-a552-330a89c9ad08.png)

### (4) Called When Local Projectile Is Destroyed

In the [Behavior Settings a t End of Life Cycle] on the base attributes tab of the local projectile, you can also reference a set of ability units

Typically used for behaviors executed when a local projectile is destroyed, such as initiating an attack upon destruction

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh90vi0ifubs/7da5df8c-c23d-49a4-b6a0-1e76e8130207.png)

[Combat Settings](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mha42r0cwx74)[General Settings](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3rgo0c16c8)

1
