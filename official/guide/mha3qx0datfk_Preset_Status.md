---
id: mha3qx0datfk
title: Preset Status
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhw3s1ig4g0k
language: en
scope: guide
crawledAt: 2026-05-31T16:32:10.410Z
---

# Preset Status

# I. Definition of Preset Status

A Preset Status defines a dynamic object's runtime behavior.

Different performance animations are packaged as distinct Preset Statuses.

# II. Characteristics of Preset Statuses

Preset Statuses are runtime animations for dynamic objects; statuses in the same category are distinguished by their Status Values.

Each dynamic object has its own set of Preset Statuses.

A dynamic object's preset status comes from its Preset Status pool; different objects use different pools.

Supports editing and managing dynamic objects with multiple Preset Statuses.

Preset Statuses can be switched via node graphs at runtime.

# III. Editing Preset Statuses

## 1. Setting Initial Preset Status When Editing Dynamic Objects

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha3qx0datfk/66a21ceb-65a2-4592-823f-02ed7cd69287.png)

## 2. Managing Preset Statuses with Node Graphs



**Get Preset Status**

Get the Preset Status Value of the specified entity during stage runtime

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha3qx0datfk/7c550fed-8fdd-48a6-bde1-ff5faaaaa363.png)



**Set Preset Status**

Configure the Preset Status and Status Values that take effect for entities at stage runtime

If the specified Status Value doesn't exist, the Preset Status won't change

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha3qx0datfk/904465d3-694f-4abd-971d-ca48da60cb92.png)



**When Preset Status Changes**

When a runtime entity's Preset Status and specific Status Values change, events will be sent to the node graph

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha3qx0datfk/3eb544a0-1a21-4c35-84ea-f7a5be90f363.png)

[Special Effects](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhe1030vx380)[Skill Animation](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh57xz9afh7e)
