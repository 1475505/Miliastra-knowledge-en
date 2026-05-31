---
id: mhkgc6r6vjba
title: Ability Unit Effect
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhrvqvioautg
language: en
scope: guide
crawledAt: 2026-05-31T16:16:05.734Z
---

# Ability Unit Effect

## 1. Hitbox

Initiates a Hitbox: Performs one attack against the entity that owns the Hurtbox colliding with the Hitbox



**Hitbox Configuration**

Configure Hitbox settings for this attack

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/33bc57f3-d9d5-443f-8269-e7164826cc18.png)

**Parameter Name****Description**
_Reference Position_ When set to Self, selects the entity's Attachment Point and performs an attack — commonly used for attacks initiated by the entity itself. When set to On-Hit Location, this is only meaningful when called from a Projectile's On-Hit Detection component; an attack is performed at the On-Hit Location
_Hitbox Shape_ Hitbox shape. Supports Cuboid, Sphere, and Cylinder
_Zoom_ Hitbox size (Cuboid: length/width/height; Sphere: radius; Cylinder: radius and height)
_Location_ Offset of the Hitbox relative to the Reference Position
_Rotate_ Rotation of the Hitbox relative to the Reference Position



**Target Filter Configuration**

Filter targets hit by the Hitbox; Only Targets that meet the filter conditions are affected by the attack

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/658bcf0a-d3de-466a-95ca-2f17750b072b.png)

**Parameter Name****Description****Notes**
_Filter Target Faction_ An attack usable only when the Target hit by the Hitbox meets the faction filter conditions.

**Options**

Don't Find Target: Cannot hit any Target

Allied Faction: Hits only entities in friendly factions, excluding the entity's own faction

Hostile Faction: Hits only entities in hostile factions

Self: Hits only self.

Own Faction: Hits entities in the entity's own faction

All: Hits all entities

All Except Self: Hits all entities except self

Allied Faction Self Included: Hits friendly factions and the entity's own faction**Combat Faction Relationships**

Target Faction Filter uses _Combat Factions_, rather than the entity's [Faction] attribute

In Beyond Mode, factions follow these relationships:

Character->Creation: Hostile

Character->Object: Hostile

Creation->Object: Friendly

Object->Creation: Hostile

Creation->Character: Hostile

Object->Character: Hostile
_Entity Type Filter_ An attack usable only when the target hit by the Hitbox matches the selected entity type

**Options**

Object, Character, Creation
_Attack Layer Filter_ An attack usable only when the Hitbox hits the specified Attack Layer

**Options**

Only On-Hit Hurtbox: Usable only when hitting a Hurtbox

Only On-Hit Scene: Usable only when hitting the Scene

Hit All: Hi ts Hurtboxes, the Scene, and water and grass surfaces
_Trigger Type_**Options**

Trigger Only Once per Lifecycle: Only one entity is affected regardless of how many entities the Hitbox hits. Commonly used for single-target attacks.

Triggers Only Once per entity: Affects all entities hit by the Hitbox



**Attack Parameters**

Attack parameter configuration. Affects Damage and other values for this attack

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/6b1b8d0f-b159-42a7-b705-9c92e3cb5ebe.png)

**Parameter Name****Description****Notes**
_Damage Coefficient_ Coefficient used in damage calculation
_Damage Increment_ The incremental value used in damage calculation
_Elemental Type_ Includes seven _elements_ and elementless type (i.e., _Physical_ damage)
_Elemental Attack Potency_ The _Elemental Attack Potency_ applied by this attack
_Hit Type_ The Hit Type of this attack affects:

- The hit _sound effect_.

- The base hit _visual effect_.

- Smash attacks additionally reduce _Geo_ shields and trigger the _Shatter_ reaction.

**Options**

None, Default, Slash, Smash, Projectile, Pierce
_Attack Type_ Attack Type for this attack; can be used as a condition in the _node graph_.

**Options**

None, Melee Attack, Ranged Attack, Default
_Interrupt Value_ The _Interrupt_ _Value_ of this attack
_Is It True Damage_ Whether this attack deals True Damage.

True Damage is calculated from Damage Increment and ignores the attacker's ATK and the defender's relevant Defense attributes
_Damage Variation Curve_ The Damage Variation Curve is a distance-damage multiplier curve used for effects like long-range projectile damage falloff. The multiplier between any two distance nodes is linear

No Variation: Current damage does not use the Damage Variation Curve

Custom Variation Curve: Creators (Craftspeople) can define a custom curve

Preset Falloff Curve: A pre-made falloff curve for bow-and-arrow projectiles; linear falloff starts at 35 meters

Preset Growth Curve: A pre-made damage growth curve for reverse damage-increase attacks
_Damage Variation Distance Calculation Method_ Determines how distance is computed for the Damage Variation Curve

Distance from Current Position: Applicable to direct-damage falloff, such as some instant-hit ranged weapons

Distance from Creation Position: Applicable to projectile entities with a flight path
_Additional Shield Break_ Removes the target's _shield_ _value_ before shield calculations for this attack.
_Shield Pierce Rate_ The target's shield [DMG Taken Ratio] is reduced by [Shield Pierce Rate] to produce the final [DMG Taken Ratio], with a minimum of 0



**Aggro Configuration**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/9425368f-ffc2-4d9c-9aca-c0fdfab96d15.png)

Enable this setting when Aggro Type in Stage Settings is set to Custom



**On-Hit Performance**

Configures parameters for effects when this attack hits entities or the Scene

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/f50cd76a-4f8f-463c-99b8-53355201da33.png)

**Parameter Name****Description****Notes**
_On-Hit Scene Effects_ Configures effects when the Hitbox hits the Scene. Supports offset, rotation, and scale Only _Timed Effects_ can be used
_On-Hit Target Effects_ Configures effects when the Hitbox hits an entity. Supports offset, rotation, and scale Only _Timed Effects_ can be used
_Hit Reaction_ Select the type of Hit Performance; it affects _Hit Level_, _Horizontal Impulse_, and _Vertical Impulse_
_Hit Level_ Hit Performance Level produced when this attack lands, affected by the creation's _Super Armor_.
_Horizontal Impulse_ Affected by the selected Hit Performance type; can also be customized
_Vertical Impulse_ Affected by the selected Hit Performance type; can also be customized
_Knockback Orientation_ Direction in which the target is knocked back

Includes: Line Connecting Attacker and Hit Point; Hitbox On-Hit Orientation; Line Connecting Attacker's Owner and Hit Point; Tangent Line Between Attacker and Hit Point; Hit Orientation Reversed; Attacker's Facing Orientation; Opposite Orientation of the Line Connecting the Attacker and the Hit Point
_Mute Damage Pop-Up_ When checked, Damage Pop-Ups are not displayed for this attack



**Attack Tags**

Configure tags carried by this attack. Tags have no inherent functionality; but can be used to implement custom logic by obtaining the attack's tags in the node graph

For example:

Here's how to implement instant monster elimination when it is hit by Explosive Barrel damage:

The Explosive Barrel's attack carries the tag "Explosive Barrel Explosion"

Some monsters check in their node graph's [When Attacked] event whether the Attack Tag equals "Explosive Barrel Explosion". If [Yes], immediately [Destroy Self]

Click to add multiple tags

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/c20fd2cd-7fb2-4d26-96d5-6f21dca6e091.png)

On the target's node graph, use the [Attack Tag List] parameter to obtain the tags configured here

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/fb5a5897-c350-47db-b3fa-2094e2558d95.png)

## 2. Direct Attack

Launch a direct attack against the specified target

Compared to Hitbox Attacks, Direct Attacks have fewer parameters; the configurations for [Attack Parameters], [Aggro Configuration], [On-Hit Performance], and [Attack Tags] are largely consistent



**Attack Parameters**

Attack parameter configuration is identical to [Hitbox Attack]

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/3a09878c-d227-4555-9af1-80ebd863bf10.png)



**Aggro Configuration**

Same as [Hitbox Attack]

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/97b31625-03e8-4925-9483-0e0ecd41e7b8.png)



**On-Hit Performance**

Compared to [Hitbox Attack], it lacks [On-Hit Scene Effects] related parameters (because direct attacks are aimed at entities and won't hit the scene)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/fb2ce461-4d7e-4568-b20f-08ddade40b9a.png)



**Attack Tags**

Same with the [Hitbox Attack] configuration

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/c35a2886-754b-4ab5-af80-9df4149f4788.png)

## 3. VFX Playing

Play a Timed Effect at Self, or at the On-Hit Location.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/49c97d96-c123-4c59-b7b0-773278849d7b.png)

**Parameter Name****Description****Notes**
_Special Effects Asset_ Select a Timed Effect asset
_Play VFX asset sound effects?_ Turning it on will play the sound effects associated with the asset simultaneously
_Create Location_ Options: Self, On-Hit Location

Self: Play the effect at Self

On-Hit Location: Only meaningful when called in a Projectile's On-Hit Detection component; plays the effect at the On-Hit Location
_Zoom Factor_ Zoom Factor of the special effect when played
_Offset_ Relative offset of the special effect playback
_Rotate_ Relative rotation of the special effect playback

## 4. Create Projectiles

Create a projectile entity at Self or at the On-Hit Location

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/bddab811-bcf8-4e33-961a-80f07e0e12bc.png)

**Parameter Name****Description****Notes**
_Projectile Asset_ Select a predefined Projectile
_Create Location_ Options:

Self: Create the Projectile at Self.

On-Hit Location: Only valid when it is called within a Projectile's On-Hit Detection component; creates the Projectile at the On-Hit Location
_Offset_ Relative offset for the projectile's creation position.
_Rotate_ Relative rotation for the projectile's creation position.

## 5. Add Unit Status

Add a unit status to entities hit by the Projectile.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/4ab5f7f3-8575-493c-808a-ba3b8db51796.png)

**Parameter Name****Description****Notes**
_Unit Status Asset_ Select a predefined _unit status_.
_Stacks_ Number of unit status stacks to apply

## 6. Remove Unit Status

Remove the specified unit status from the entity hit by the projectile.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/c1ce5840-613a-42fc-babe-4df551e36ba0.png)

**Parameter Name****Description****Notes**
_Unit Status Asset_ Remove the specified _unit status_

## 7. Destroy Self

Destroy Self. Available only for Local Projectiles.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/d15c27c5-3f38-4093-a7a6-0aee3231b2e0.png)

**Parameter Name****Description****Notes**
_Delay Time_ After this Ability Unit is triggered, destroy self after the specified delay.

Typically used to allow VFX and other time-dependent elements to finish playing

## 8. Recover HP

Restore a specified amount of HP to the target

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkgc6r6vjba/05e7cc2f-f7de-4a0e-aebc-3c4042c0bfeb.png)

**Parameter Name****Description****Notes**
_Percentage Recovery Base Method_ HP recovery method

Includes Based on Target's Max HP, Based on Target's Current HP, Based on Caster's Max HP, and Based on Caster's ATK
_Percentage_ Percentage of HP restored based on the selected Percentage Recovery Base Method
_Additional Fixed Recovery Amount_ The fixed amount of HP restored to the target
_Ignore Recovery Adjustment_ Whether this recovery is affected by [Recovery Effect Adjustment Rate] and [Healing Effect Adjustment] in _Unit Status_.
_Healing Tag_ Healing Tag that can be obtained in the Server Node Graph to identify a specific healing instance

[Creation Behavior Archive](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhyg4i0inazs)
