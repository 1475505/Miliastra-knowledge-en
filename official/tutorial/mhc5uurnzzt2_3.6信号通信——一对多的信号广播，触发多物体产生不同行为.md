---
id: mhc5uurnzzt2
title: 3.6 Signal Communication: Trigger Different Behaviors Across Multiple Objects
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhc5uurnzzt2
language: en
scope: tutorial
crawledAt: 2026-05-31T15:52:41.385Z
---

# 3.6 Signal Communication: Trigger Different Behaviors Across Multiple Objects

# Introduction

## Course Description:

**Course Content:**This course mainly covers the configuration and application cases of cross-node graph communication using signals.

**Learning Objectives:** Learn how to trigger node graphs on different objects through signal function configuration.

_**This course involves two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graph]. It is recommended to read the course in its entirety following the course order._

## Related Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you have any questions or want to learn more about the concepts in the course, please refer to the_**_[Comprehensive Guide]_**_._

**Prerequisite Courses:**This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [1.3 Node Graph Creation and Mounting](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhzu1vi0s3ms)

Prerequisite Courses: The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)_

> [Signal](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhc4iurdj092)
> 
> 
> [General Node Functions in Node Graph](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhvlwyi1vb5o)

* * *

# Signal Communication: Using Entity A's Events to Trigger Entity B's Behavioral Logic

## Feature Example 1: Using Signals for Global Broadcasting

### 1. Concept Overview

**Signal:**A signal is a globally customized structure that can broadcast globally and carry signal parameters of multiple data types.

### 2. Course Content

**Feature:**Create an effect where a single switch controls the display of multiple mechanism effects

**Effect Demonstration:**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/d74f6a73383c4349b666c31ce672f348_1757675233.gif)

### 3. Steps to Follow

**1. [In-Game Editor] Create switches and mechanism prefabs**

Create a prefab as a switch (using the Challenge Starting Point as an example), configure the collision trigger component so that when a character enters the trigger area, it will trigger the corresponding event.

At the same time, create three prefabs as triggered mechanisms (pillars are used as examples in the course). No additional configuration is needed.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/9cbebf3c133d47afb553dce69da3b320_1757675233.png)

**2. [Miliastra Sandbox] Send Global Signal When Entering Collision Trigger**

In the demonstration, when a character enters the collision trigger of the switch object, other mechanisms need to be notified of this event in order to respond accordingly.

Here we use [Signals] for global communication. The method to create a signal is:

Open Miliastra Sandbox >>> Create new node graph >>> In the node graph toolbar, click ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/622474d154d44eb1b917f9ddf3bf7913_1757675234.png)"Server Signal Manager" >>> Click "Add Signal" >>> Modify the signal name (renamed it to "Activate" in this tutorial) >>> Click "Apply Changes."

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/6a67ddc034cd48009938daaf4c1cdec0_1757675234.png)

And now, a custom signal has been created.

After the character enters the collision trigger of the switch object, the signal will be broadcasted globally. The specific logic and node graph connections are shown below, with the node graph mounted on the switch prefab:

Features to Implement Corresponding Configuration Items
Trigger Scenario Character enters the trigger box[Event Node]: When entering collision trigger
Condition//
Result Global Signal Send[Execution Node]: Send signal, select the signal name "Activate" that we just created

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/6bc4b7c169714112bf49840abe68071e_1757675234.png)

**3. [Miliastra Sandbox] Monitor signals on other objects to execute different behaviors.**

Next, configure signal reception on the triggered mechanisms (in this tutorial, different effects are played when the mechanisms receive signals; during actual creation, you can choose to create more diverse execution behaviors). The specific logic and node graph connections are shown below. Create 3 node graphs and mount them on the 3 triggered mechanisms. In the demonstration, the nodes in all 3 node graphs are identical, with only the effect assets being different.

Features to Implement Corresponding Configuration Items
Trigger Scenario Receive Global Signal[Event Node]: Monitor signal, select the "Activate" signal we just created
Condition//
Result Play effects on the mechanism itself[Execute Node]: Mount looped effects; Select different effects for each effect asset of the 3 node graphs to differentiate them.

[Query Node]: Get self entity

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/897ca23fbffb4b978f587494faa53545_1757675234.png)![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/d76e455411584a3fa85b3182c01c4d28_1757675234.png)![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/1bbee39a06204c71bbd814a56a9ffbc5_1757675234.png)

**4. [In-Game Editor] Drag objects into the scene and test play**

Drag the configured node graph prefabs into the scene and enter the Test Mode to experience the feature.

# Extended Applications

This module only serves as an introduction to the extended applications of the course. It involves multi-module interactions and **demonstrates them step-by-step. A basic understanding of advanced applications is sufficient.**

## Feature Example 2: Using Signals with Custom Parameters

**Feature:**When entering the trigger area, the object follows the character that entered the trigger area.

**Effect Demonstration:**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/0c9a8740061c415fbee2acb2c74b2054_1757675235.gif)

**Implementation Steps:**

**1. [In-Game Editor] Create switches and mechanism prefabs**

Create a prefab as a switch (using the Challenge Starting Point as an example), configure the collision trigger component so that when a character enters the trigger area, it will trigger the corresponding event.

Create a prefab as a triggered mechanism (in this tutorial, we'll use a Construction Value Absorber as an example), then configure the Follow Motion component. The specific parameter configuration for the following in the tutorial is shown below:

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/0edf426eb30e43a9aab6d65ed990f468_1757675232.png)

**2. [Miliastra Sandbox] Send Global Signal When Entering Collision Trigger**

Same as Feature Example 1, we need to create a signal:

Open Miliastra Sandbox>>> Create new node graph >>> In the node graph toolbar, click ![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/f86bab4c9c914d11bbba24325d011950_1757675233.png)"Server Signal Manager" >>> Click "Add Signal" >>> Modify the signal name (renamed it to "Send Follow Target" in this tutorial)

In addition to broadcasting a custom event globally, signals can also carry multiple custom parameters. In this example, besides emitting the signal event, we also need to use the signal to inform the mechanism about the target it needs to follow:

In the "Send Follow Target" signal, click "Add Parameter" >>> Modify the parameter name to "Trigger Player GUID" >>> Modify the parameter data type to "GUID" >>> Click "Apply Changes"

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/05cdebc08ef643a3a50351018c352ab6_1757675233.png)

Now we can see that after selecting "Send Follow Target" in the [Send Signal] execution node, an additional pin for our configured "Enter Player GUID" appears. This allows us to pass parameters and communicate through this pin.

After the character enters the collision trigger of the switch object, the signal will be broadcast globally. The specific logic and node graph connections are shown below, with the node graph mounted on the switch prefab:

Features to Implement Corresponding Configuration Items
Trigger Scenario Character enters trigger box[Event Node]: When entering collision trigger
Condition//
Result Send global signal with player GUID parameter[Execute Node]: Send signal, select the "Send Follow Target" signal we just created

[Query Node]: Get the player entity that owns the character to query GUID from entity; obtain the GUID by getting the player entity that owns the character that entered

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/3b934ba2258e468eb182d1c767e2beb2_1757675233.png)

**3. [Miliastra Sandbox] Monitor signals on mechanism objects and execute the following behavior based on parameters.**

Next, configure signal reception on the triggered mechanism (in this demonstration, the mechanism tracks specific targets based on parameters after receiving the signal; in actual creation, you can choose to create more diverse execution behaviors). The specific logic and node graph connections are shown below. Create a new node graph and mount it on the triggered mechanism.

Features to Implement Corresponding Configuration Items
Trigger Scenario Receive Global Signal[Event Node]: Monitor signal, select the "Send Follow Target" signal we just created
Condition//
Result Activate the follow mechanism, make it follow the specified character[Execute Node]: Activate/Deactivate Follow Motion component > Activate > Yes;

[Execute Node]: Switch Follow Motion component target; Connect the "Follow Target GUID" pin with our created "Enter Player GUID" pin

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/d6385c5968ae480a8209bfc8f127f0d8_1757675233.png)

**4. [In-Game Editor] Drag objects into the scene and test play**

Drag the configured node graph prefabs into the scene, and enter the Test Mode to experience the feature.

_**For more information, please refer to [Comprehensive Guide > Node Graph]_

* * *

# Course Summary and Supplementary Materials

**Course Assignment:**Based on the course content, try to replicate the following features

> Feature Replication: Create a switch that can control the movement of multiple mechanisms.

**Course Review:**Learn how to implement cross-node graph communication through signal creation to produce more diverse object interaction effects.

### Supplementary Materials

We have provided relevant project files that can be studied with **[Tutorial Files > Signal Communication]**.

![Image 16](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Signal Communication.gil

27.2 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mh485z9d7n4q/941ee24d-5e4b-4736-b98f-a79939f2d735.gil)

[3.5 Unit Status: Applying Buff and Debuff Effects to Objects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhtbbb9hr32y)[3.7 Filter Node Graph: Filter Different Objects for Different Effects](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhm1sdi4ckxg)

1
