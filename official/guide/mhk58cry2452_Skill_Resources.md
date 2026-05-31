---
id: mhk58cry2452
title: Skill Resources
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6ate95agb6
language: en
scope: guide
crawledAt: 2026-05-31T16:35:08.020Z
---

# Skill Resources

# I. Definition of Skill Resources

_Skill Resources_ are resources that need to be consumed when specific skills are cast. For example, "Elemental Energy" in the Classic Mode is a type of skill resource. The Miliastra Sandbox supports creators (Craftspeople) in defining their own types of skill resources and specifying which skill resources their skills require

# II. Editing Skill Resources

## 1. Entry Point for Editing

Enter through the _Skill Resource Management_ button in the system menu bar

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk58cry2452/de041862-b16f-487c-9e09-b5a09cef2d2d.png)

Open the interface to edit globally available skill resource types

## 2. Parameters Introduction

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk58cry2452/190660f9-d46a-4456-810c-8cc3358fdd9b.png)



_Skill Resource Name_: Name of skill resource



_Configuration ID_: The unique identifier for the skill resource, which is required when calling it from the Node Graph



_Growth Type_: The growth type determines the actual growth rules when external logic attempts to increase the quantity of skill resources. Currently, three types are supported

_Unconditional Growth_: When not exceeding the maximum obtainable value, this skill resource amount will grow unconditionally

_Follow Skill (Retaining Value)_: When attempting to change the skill resource amount, it will only succeed if the player currently has a skill that requires this resource. Otherwise, it will not take effect. When no skills require a certain skill resource, the resource amount will be saved

_Follow Skill (Not Retaining Value)_: Same rules as above, but when no skills require a certain skill resource, the resource amount will be reset to zero



_Maximum Obtainable Value_: The maximum value of skill resources. The amount of skill resources that a character can obtain cannot exceed this value



_Reference Information_: Indicates which skills reference this skill resource

# III. Modifying Skill Resources in Node Graphs

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk58cry2452/14d408f7-d594-4277-93e6-4c19e02dd294.png)

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk58cry2452/37a2cc0d-0d5a-4370-b1e5-711dd34a47da.png)

[Complex Creation Skill](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhftoirpwd46)
