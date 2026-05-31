---
id: mh8vbl0e14qo
title: Basic Battle Attributes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhvyqz9xwu0q
language: en
scope: guide
crawledAt: 2026-05-31T16:17:25.049Z
---

# Basic Battle Attributes

_Attributes_ required for combat validation, such as ATK/DEF/HP, which may have different definitions depending on the entity type.

# I. Basic Battle Attributes for Objects

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/d15731a8-c3ce-4e7b-a7c3-351e7d2c0890.png)

_Level_: Default object level as set on its _prefab_/_entity_. This value can also be reassigned when creating objects using node graphs.

_Base HP_: The object's HP value. When HP is reduced to 0, the entity will be defeated, triggering destruction and removal events.

_Base ATK_: The base ATK of the object.

_Base DEF_: The base DEF of the object

.

# II. Creation Base Battle Attributes

Unlike objects, from both level attributes and fixed attributes, it supports creators (Craftspeople) in adjusting parameters and planning growth curves for their creations.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/f3a9cce1-a962-4743-a567-49fcbdcbcfc8.png)

## 1. Level Attributes

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/17f1be7e-3794-48f8-8cdb-6df4674838a8.png)

Configuration Parameters Description
_Level_ The level at which the creation is created
_Base HP_ The creation's base HP. The actual HP is calculated by multiplying this value with the multiplier provided by _Attribute Growth_
_Base ATK_ The creation's base ATK. The actual ATK is calculated by multiplying this value with the growth rate provided by attribute growth.
_Base DEF_ The creation's base DEF. The actual DEF is calculated by multiplying this value with the growth rate provided by attribute growth.
_Attribute Growth_ A level-based numerical curve is an attribute curve that provides multipliers for health and attack power.

Provides three templates: _No Growth_, _Default_ _Growth Curve_, _Custom Growth Curve_

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/0f2507f1-83f5-4dcd-8cd5-714defa056aa.png)

**(1) Attribute Growth Settings**

Attribute Growth Curve Enumeration Description

No Growth - All multiplier parameters are 1, meaning base attributes do not change with level.

Default Growth Curve - This curve is a predefined numerical curve. You can view the specific _growth multipliers_ in the curve interface, but they cannot be modified.

Custom Growth Curve - Use a custom growth curve created by the creator (Craftsperson). You can click 'Edit Curve' to manually modify it, and it also supports importing and exporting curve properties.

Attribute Growth Curve Calculation Instructions

1.

Take HP calculation as an example. Initial level is set to 1, base HP is changed to 200, select the Default Growth Curve.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/d28c81a4-bf97-4742-89f7-b11d320a79b8.png)

Select "View Curve" to determine that when the level is 1, the _health multiplier_ equals 5.938. Therefore, the actual health value of the creation during runtime should be 200 * 5.938 = 1078.76.

In the top-right corner, select _"_ _Preview Result Values_ _"_ to see the actual health value of 1078.76, which matches the calculated result.

The same principle applies to the calculation of other parameters.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/9f8af075-fdc5-4d44-aaef-9c4759c5ec29.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/983ae3d2-a4b8-4f74-b208-e490e21b17e2.png)

## (2) Attribute Growth Rules

_Actual HP_ = Current Level HP Multiplier × Base HP

_Actual ATK_ = Level ATK Multiplier × Base ATK

The base HP and base ATK are the values configured by the creator (Craftsperson) in the basic battle attributes.

The actual HP and actual ATK are the values that take effect during gameplay and may vary due to equipment, unit status, or other functionalities.

2.

**Level Attributes**

The following fixed attribute parameters support overriding and will take effect for the creation during stage runtime. The configurable range for each parameter differs, as explained in the table below.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/59b77cdc-1cc8-4852-871c-97d944fe635f.png)

Configuration Parameters Supports Configuring a Lower Limit Supports Configuring an Upper Limit
_Elemental Mastery_ 0 3000
_Various RES_ 0 3

# III. Node Graph

You can use the node graph to query the base combat attributes of creations or objects.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/cf0bd13a-49f2-4037-a26f-f158414f14af.png)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8vbl0e14qo/925a44e5-50f7-4e94-bd03-db5b4632f88d.png)

[Aggro Configuration](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhw9ut96q96y)
