---
id: mhpb6pi79hjo
title: Key Behaviors
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhapp3r8gkdq
language: en
scope: guide
crawledAt: 2026-05-31T16:26:31.975Z
---

# Key Behaviors

# I. Definition of Key Behaviours

_Key Behaviors_ are purely client-side data. Craftspeople can actively define and record them through Node Graphs during skill casting. The system stores the recorded Key Behavior list and the client-side trigger time of each entry in the _Info Board_, and the recorded Key Behavior list can also be retrieved through Node Graphs

Key Behaviors can be treated as a simplified instruction sequence. Based on this, Craftspeople can implement time-sensitive skill chains or combo skills

# II. Basic Concepts of Key Behaviors

_Key Behavior ID_: The unique identifier for a Key Behavior. This ID is used when calling it through Node Graphs

_Client Time_: The time on the client when the Key Behavior is added

# III. Setting Key Behaviors via the Node Graph

Add Key Behavior

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhpb6pi79hjo/5689e8b0-37ea-4111-b73d-67a0d25dda79.png)

Clear Key Behavior Log Panel

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhpb6pi79hjo/1f6d2ad4-352e-4935-9d4d-36e66fb461e9.png)

Get Current Key Behavior

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhpb6pi79hjo/274fe1f4-0d2e-41b9-a258-edbf95c547ec.png)

Get Current Key Behavior (High Precision)

Client time is affected by floating-point precision. If higher precision is required, it is recommended to use the high-precision version of the node

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhpb6pi79hjo/1969f21e-6388-44ba-9868-8c09f61a6b71.png)

[Complex Creation Skill](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhftoirpwd46)[Skill Variables](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhhzqw98264i)
