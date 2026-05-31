---
id: mhj2cxr3751a
title: Special Effects
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhe1030vx380
language: en
scope: guide
crawledAt: 2026-05-31T16:35:43.489Z
---

# Special Effects

# I. Definition of Special Effects

_Special effects_ are art assets that can be used to enhance visual effects during gameplay.

Special effects must be attached to an entity, with each effect having a designated mount entity.

When a special effect plays, it uses the entity's _Attachment Point_ as its origin and follows that point's position at runtime.

Referencing a special effect requires a VFX Player component.[VFX Playing](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh4ppo02m1o8).

# II. Classification of Special Effects

Based on the playback duration of special effect assets, timed effects pools and looping effects pools are provided

## **1. Timed Effects**

Timed special effects have an effective duration.

Timed effects will only play once when triggered, and will not repeat.

## **2. Looping Effects**

Looping effects have no fixed duration and continue playing until stopped or removed.

# **III. Using Special Effects**

## 1. Component Mounting

Supports mounting effects via the VFX Playing Component during prefab/entity editing. These effects are created alongside the entity

For editing details, please refer to [VFX Playing](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh4ppo02m1o8) for use.

## 2. Usage in Node Graphs

Supports creating and deleting special effect assets via effect-related nodes in the node graph.

Different reference special effect asset nodes are provided for different special effect types.



**Play Timed Effects**

Effects from the timed effect pool can be referenced by selecting entities with the "VFX Playing Component" and configuring _Attachment Points_.

If the Attachment Point is incorrect, the special effect will not play

If no Attachment Point is specified, it defaults to the GI_RootNode

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj2cxr3751a/f8ec702e-730f-4fea-8dc3-faad5bcb66a6.png)



**Mount Looping Special Effect**

Effects from the looping effects pool can be referenced by selecting entities with the "VFX Playing Component" and configuring Attachment Points.

If the Attachment Point is incorrect, the special effect will not play

If no Attachment Point is specified, it defaults to the GI_RootNode

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj2cxr3751a/6ae8b156-e50d-4d70-9550-72543d2e6d47.png)



**Clear Looping Special Effect**

Looping effects created by the "Mount Looping Special Effect" node can be cleared using this node

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj2cxr3751a/20f84269-75b3-4520-97e0-11ed996ae472.png)



**Clear Special Effects Based on Special Effect Assets**

Clear the specified special effect assets from the selected runtime entity

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj2cxr3751a/ef6e7c3f-831c-4233-a1a8-1de21f6e7b31.png)

Click the ![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj2cxr3751a/c4edbbe9-b43b-404b-9780-56f6108564e2.png) icon to view all special effect enumerations and select the specified special effect asset

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj2cxr3751a/83510ffe-0665-483a-8127-acc7b5a938d1.png)

[Preset Status](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhw3s1ig4g0k)
