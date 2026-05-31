---
id: mhju4irp8oyu
title: Shield
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhhl0gire830
language: en
scope: guide
crawledAt: 2026-05-31T16:34:15.579Z
---

# Shield

# I. Definition of Shield

A shield is an additional protective layer stacked on top of the unit's base HP which can absorb or block incoming damage

Shields can be added to objects, characters, creations, and other entities

Shield templates must be predefined before they can be applied to units

# II. Editing Shields

In the System menu, click [Shield Management] to open the shield management tool.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhju4irp8oyu/ec173381-aa4e-44f0-82aa-f6761a42099b.png)

Click [Add Shield] to create a new shield template

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhju4irp8oyu/9540bccd-024a-44b3-9bc2-4825e2680bb6.png)

_Shield Name_: Can be customized, used by creators (Craftspeople) to distinguish between different shield templates

_Configuration ID_: The unique identifier of this shield, which can be used in node graphs

_Elemental Damage Absorption Type_: Default is all; all types of damage will be absorbed.

_Remove when shield points are depleted_: Enabled by default. When disabled, even if the shield value is depleted, the unit status will retain at least 1 stack

_Show UI_: The shield bar will be displayed on the entity's nameplate component

_UI Color_: Shield bar color

_DMG Taken Ratio_: The proportion of damage applied to this shield when taking damage.

_Override Tags:_ When adding unit status using nodes, if the key passed in the dictionary matches the overwrite label, the damage ratio should be overwritten with the value from the dictionary.

_Shield Point(s)_: The shield value provided by each stack of the unit status

_Ignore Shield Strength_: When adding shield value, determines whether to ignore the target entity's [Shield Strength Adjustment Rate] attribute

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhju4irp8oyu/164f5e4b-51b4-4e63-9efe-5a807b93cb0a.png)

_Infinite Absorption_: When enabled, the absorption ratio becomes infinite (i.e., only 1 shield point is deducted each time damage is absorbed)

_Absorption Ratio_: Damage absorbed per shield point

_Calculation Priority:_ The priority order in which damage is absorbed when multiple shield unit statuses exist

_Effect applies to each stack_: If multiple unit status layers exist, only the shield value from the earliest layer takes effect.

_Absorb overflow damage_: Reduces unblocked shield damage to zero

_Attack Tags_: If not configured, this represents that the shield applies to all attacks. When configured, the shield only applies to attacks with the specified tags.

# III. Shield Usage

Shields must be added as unit status effects, with only one shield effect allowed per unit status

The shield configuration references the pre-configured shield template defined earlier

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhju4irp8oyu/157e470e-70ae-4ec0-a2ec-129248080756.png)

# IV. Shield Settlement Mode

## 1. Shield Calculation Process for Single Unit Status

(1) The damage received by the unit is divided into [Shield Absorbed Portion] and [Shield-ignoring Portion] according to the [Damage Distribution Ratio].

(2) The [Shield Absorbed Portion] determines how much damage can be absorbed based on the effective [Shield Value] and [Absorption Ratio]. Any unabsorbed damage becomes [Overflow Damage].

(3) The [Shield-ignoring Portion] from step (1) and the [Overflow Damage] from step (2) above will be summed up as the final HP to be deducted (or absorbed by another shield, or set to zero according to the configuration)

## 2. Shield Settlement Mode

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhju4irp8oyu/6e2a3c00-9cad-4206-9f03-62dd67240f8d.png)

Two types of stage global configuration

_Shared Calculation_: When multiple unit statuses have shields, they will absorb damage according to their settlement priority.

_Individual Calculation_: Damage is calculated separately for shields under each unit status, and the shield that absorbs the most damage is used.

# V. Shield Node Graph

[When Shield is Attacked] The following node graphs will receive this event:



Status Node Graph of the unit that owns the shield



Entity Node Graph



Player Node Graph (when the target is a character)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhju4irp8oyu/9ab64aca-302f-4886-ba88-c82ada6f22c8.png)

[Preset Points](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfvn30ctm9c)[Path](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh333vim2h44)
