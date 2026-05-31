---
id: mhhd9urqpbl2
title: Stage
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3pgiraqkiu
language: en
scope: guide
crawledAt: 2026-05-31T16:36:02.591Z
---

# Stage

_Stages_ are special entities recommended for handling stage-specific logic.

# I. Creating a Stage Entity

When a new stage is created, a stage entity is automatically generated in the scene and represented by a unique icon.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhd9urqpbl2/7933b5f4-16ab-4092-a910-71ccf8e2f9eb.png)

# II. Edit Stage Entities

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhd9urqpbl2/6916b4c3-49b8-444d-8bbb-1fe38550f24f.png)

Switch to the Entity editing tab.

Editing stage entities is similar to other types of entities, but the configurable _basic information_ and _components_ will be different.

## 1. Basic Information

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhd9urqpbl2/e4020150-d73f-4020-8dff-6edb29874f0b.png)

Basic Information tab, where you can configure all available attributes for the stage entity.

## 2. Common Components

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhd9urqpbl2/986ab926-83f2-4c0b-8931-676c4f879900.png)

Common Components tab, where you can add common component settings to stage entities.

Overview of Available Components for Stage Entities:

[Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhso1b9wjica)

[Global Timer](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhawd6rl5kpy)

## 3. Node Graph

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhd9urqpbl2/577d372f-f98b-4247-af1d-bc4e336f8230.png)

Node Graph Settings Tab, where you can add node graphs to stage entities or view existing node graphs.

# III. Stage Characteristics

Unlike other entity types, stage entities have the following unique characteristics:

## **1. Can Receive Special Events**

Some special events can only be received by stage entities, including:

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhd9urqpbl2/7f566d34-0f4e-4f0c-b6db-37396472ab4d.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhhd9urqpbl2/4a3e047f-c726-4a27-a515-842dc8f8a752.png)

When _object_ or _creation_-type entities are removed/destroyed, those entities cannot receive the corresponding events, which will instead be forwarded to the stage entity.

The subsequent logic will be processed by the stage entity as well.

## **2. Non-Physical Entity**

The stage entity is a purely logical entity.

## **3. Incomplete Placement Information**

Stage entities only have _position information_. They lack _rotation and scale information_.

## **4. Life Cycle**

Stage entities are created when the stage initializes and destroyed when the stage is removed.

[Local Projectiles](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhciimiw86jg)
