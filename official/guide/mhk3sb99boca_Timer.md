---
id: mhk3sb99boca
title: Timer
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhufb90zbnts
language: en
scope: guide
crawledAt: 2026-05-31T16:37:18.844Z
---

# Timer

# I. Timer Functions

The _Timer_ provides timing capabilities; it supports starting, stopping, pausing, and resuming timing operations, and also supports synchronizing UI controls to display timing information

# II. How to Use the Timer

Can only be created and used through node graphs, and must be explicitly assigned to an entity when created.

Supports timing in intervals, and the node graph will send events at each interval.

# III. Managing Timers Through Node Graphs



Start Timer

Start a timer on the target entity.

The timer is uniquely identified by a timer name.

The timer consists of a _Timer Sequence_ that can be either looping or non-looping. The timer sequence should be a set of time points in seconds, arranged in ascending order (with a minimum interval of 0.03 seconds). When the timer reaches these time points, it triggers the [When Timer Is Triggered] event.

For example, [1, 3, 5, 7]: If such a timer sequence is provided, the [When Timer Is Triggered] event will be triggered at 1, 3, 5, and 7 seconds.

If the loop setting is "Yes," the timer will reset to 0 seconds after reaching the last time point and continue looping. For instance, with the timer sequence [1, 3, 5, 7], after reaching 7 seconds, the timer will reset to 0 seconds and start counting again.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk3sb99boca/89f5c2a3-315d-4849-8b46-536dcdf557a7.png)



Pause Timer

Pause an active timer at any time to temporarily stop its count

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk3sb99boca/ba1f6637-1f27-452e-a99e-185ae99b52a6.png)



Resume Timer

During timer operation, if there was a previous pause, you can resume as needed to continue timing

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk3sb99boca/3eddb793-3484-4832-a38d-130a74357229.png)



Stop Timer

You can also terminate the created timer as needed

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk3sb99boca/0d23f5d8-0234-4864-93e4-0c2761a741af.png)



When Timer Is Triggered

When the timer is running and reaches a time period in the sequence, it will send an When Timer Is Triggered event to the entity node graph where the said timer is mounted

Timer Sequence ID: Represents the index of the timer sequence.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhk3sb99boca/eda1f4f8-a10f-4ec3-ac2c-a4ddc53077a9.png)

[Global Timer](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhawd6rl5kpy)[On-Hit Detection](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2pir0hat1s)
