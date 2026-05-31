---
id: mh9bzc0r99i0
title: Global Timer
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhawd6rl5kpy
language: en
scope: guide
crawledAt: 2026-05-31T16:25:02.908Z
---

# Global Timer

# I. Global Timer Component Functions

_The_ _global timer_ component provides timing capabilities. It supports pausing, restarting, and modifying timers, and can synchronize with UI controls to display the timer's time.

The global timer supports configuring multiple sets of static timer data.

Global timers run independently on different active entities.

# II. How to Use Global Timers

There are two ways to use the global timer:

1. The entity editing component can have a reference timer set, which will be activated when the entity is created.

2. A node graph execution node can activate the timer when it is executed..

# III. Global Timer Management Tool

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/989d102c-bf91-48c5-a399-23b406b66706.png)

You can predefine all global timers via the timer management tool.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/ba347073-e764-4bff-8900-0820a37385f8.png)



Global Timer List

Enumerates all predefined global timers in the current stage.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/3b6a1d82-e1b4-4151-98e5-39edac7b2f57.png)

# IV. Editing Global Timers



Add Timer

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/e121360a-5d96-4ddf-8009-c280adf16097.png)

Use the button shown above to add a new timer.



Name and ID

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/e3ff705e-8775-484c-9aeb-c0eaceb4f4a6.png)

Click ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/26f7b7e8-76d4-44b1-989c-25c808857daa.png) the icon to rename or delete the specified timer.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/fad7fd06-35c1-47a3-af1f-feb5e86ba107.png)

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/c6e18b1e-e4fc-404b-8470-119886a933e0.png)

This name is the global timer's reference.



Basic Information

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/51e3e0a8-6cdb-4684-b0f9-0b46c5b5f254.png)

Configuration Parameters Description
_Global Timer Type_ Provides two types: _countdown and stopwatch_.
_Duration (s)_ When the timer type is countdown, a duration needs to be set.

# V. Global Timer Reference

## **1. Referencing the Global Timer Through UI Controls**

Open[Interface Layout](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhozt0r74ng6)Management Tool, Select[Timer UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhnrdor7uyra) "Timer" to execute its logic.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/3b0e9084-350a-4dbc-94cc-852f678210ac.png)

Configuration Parameters Description
_Type_ Stopwatch, Countdown
_Specify Timer_ Will enumerate all predefined global timers that match the "Type".
_Source Entity_ Default configuration is stage entity. You can choose between stage entity or player entity



The selected source entity needs to be configured with a global timer component.



If the timer configured for the interface controls is not active when the source entity is running, the UI controls will display the default value 00:00.

When the source entity is running and the timer is active, the UI control shows the timer's current time.

## 2. Reference Global Timer Through Component

### (1) Add Component

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/57c8a822-ccc1-4a97-b285-e9b9e1cf1bfe.png)

a. In the entity prefab editing interface, open the Edit Component tab.

b. Click "Add Common Component", then select "Global Timer" to add it.

c. Press "Advanced Editing" to expand the editing page.

### (2) Reference Timer

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/4b8f7ae0-93a9-4df6-ae72-93b49a58ca28.png)

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/30caa299-0db7-4b37-b359-01918f217c02.png)

Click "Add Timer" to open a list of global timers, then you can select the desired global timer.

A global timer referenced by a component will be activated when the entity is created.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/3ae5182a-206f-4610-a8fd-2a93e2335182.png)

Click "Manage Timer" to open the global timer management tool.

# VI. Reference Global Timer by Node Graph



Start Global Timer

Use the node graph to reference a global timer, with the running entity as the carrier.

Only timers predefined in the global timer management tool are valid as a reference.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/e978d672-288f-4c61-b908-2466bdb211e4.png)



Stop Global Timer

Use the node graph to stop running a global timer early.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/17010d68-6488-49c3-b468-e0ba7e5ef968.png)



Pause Global Timer

Use the node graph to pause a running global timer.

When paused, the UI controls linked to the timer will also pause their display.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/b0ed7cd4-660c-4bba-9dbb-2d6017b773bd.png)



Recover Global Timer

You can resume a timer paused by "Pause Global Timer" via the node graph.

If a UI control references the timer, its display will resume as well.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/7f9109c9-106c-4991-abd0-ee114c8f6bc1.png)



Increase Global Timer Value

You can adjust a running global timer via the node graph.

_Increase Value_: If the timer is counting down, a positive number will increase its remaining time, and a negative number will decrease its remaining time. For stopwatch timers, positive values increase the accumulated time, and negative values decrease it.

If the timer is paused first and then modified to reduce the time, the modified time will be at least 0 seconds.

For countdown timers, pausing followed by modifying the time to 0s will trigger the [When the Global Timer Is Triggered] event upon resuming the timer.

If the timer is paused first, then modified to 0s, followed by modifying the time to increase it, and finally resumed, the [When the Global Timer Is Triggered] event will not be triggered.

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/8aaa28d8-bc36-4d5e-8675-e6fcbf813536.png)



When Global Timer Is Triggered

When the global timer's countdown ends, it will send an event to the node graph.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/f35358d1-954e-4c0a-b217-3a579171ccd1.png)



Get Current Global Timer Time

Use the node graph to get the current time of a running global timer.

_Current Time_ If the timer is counting down, returns the remaining time.

If the timer is a stopwatch, it returns the accumulated time.

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9bzc0r99i0/274ce40b-86b6-4d9f-9579-9b52dabbecbf.png)

[Unit Status](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhd7nxrfa8im)[Timer](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhufb90zbnts)
