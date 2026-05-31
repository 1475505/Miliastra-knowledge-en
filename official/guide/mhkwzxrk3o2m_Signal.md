---
id: mhkwzxrk3o2m
title: Signal
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhlaj0r9bldi
language: en
scope: guide
crawledAt: 2026-05-31T16:34:35.738Z
---

# Signal

# I. What is a Signal?

When building Node Graphs, you'll often encounter scenarios that require Global communication.

For example, when a mechanism is triggered, the following events may occur:



A certain gate opens



Several torches light up with flames



A new Skill is added to the Character

If you implement the related logic directly on the mechanism, you'll need to construct it as shown in the graph below

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/df5317cd-10e6-4fb5-881e-a5f912d45e6b.png)

When iterating on this logic (e.g. if you need to add [Editing _Custom Variables_ on Hilichurls] before igniting the flame), you would need to edit the mechanism's Node Graph each time, which is hardly an efficient implementation

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/798e16ff-aa77-4c24-82ab-015579d9dfaf.png)

_Signals_ are designed to address the issues described above

# **II. Signal Functions**



A Signal is a global custom structure. You can add multiple _Signal Parameters_ of any type to it



Each Signal is identified by a _Signal Name_.



You can _send Signals_ from any Entity's Server Node Graph. Sending Signals is a global action



You can _receive Signals_ from any Entity's Server Node Graph. Note that both sending and receiving are global actions. This means that when Entity 1 sends a Signal, any Entity within the Stage can monitor and receive it

With Signals, the logic from the above example can be implemented directly on each Entity

When the mechanism is triggered, send the Signal [Mechanism Trigger Signal]

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/f3e39dc7-cb07-45e9-b384-c7da8073e698.png)

The gate receives the [Mechanism Trigger Signal] and updates its Preset Status (gate opens)

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/ad39c5ef-ac9e-4455-b36a-71bde32da659.png)

The torch receives the [Mechanism Trigger Signal] and plays a flame effect

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/7a4d491a-93ef-4c1b-8fc1-187576d8e065.png)

The Character receives the [Mechanism Trigger Signal] and adds a Skill to itself

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/c3518e1a-4ba3-492d-919e-08de79a7c44a.png)

At this point, if you need to add logics such as [Editing Custom Variables on Hilichurls], you can edit the Hilichurl's Node Graph directly:

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/6d1d7708-269a-4e69-81fe-51cf706b0440.png)

As you can see, even when adding or adjusting logics, you only need to edit the Node Graph of the relevant Entity, without changing the Node Graphs of other Entities.

In game logic development, this principle — **each Entity only handles logic for the Events it cares about, rather than directly manipulating other Entities** — is an important **decoupling** concept. It helps separate complex interaction logic between Entities

# III. Signal Configuration

In _Miliastra Sandbox_, you can configure Signals

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/b7274efd-569f-4b57-bcbf-d4f273ef8400.png)

Open the Signal Manager Interface to add and edit Signals

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/fcff0206-c9f1-40de-89f4-e0fb720b02fa.png)

Each Signal is uniquely identified by its [Signal Name]. Signals with different names are treated as distinct, even if their parameters are identical

Each Signal can declare any number of Custom Parameters, which may be any valid Node Graph data type

As shown in the graph above, this Signal is named [Signal_1] and contains three parameters

Parameter_1: Type is Integer

Parameter_2: Type is String

Parameter_3: Type is Entity List

# IV. Using Signals

In a Node Graph, you can use [Send Signal] and [Receive Signal] Nodes to send or receive Signals

**Send Signal (Server Node Graph)**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/a12f2455-cdbb-481e-883e-63af62c666ae.png)

After placing a [Send Signal] Node in a Node Graph, you must first choose a [Signal Name]

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/a6cbd23b-8c2c-458a-bb29-719bfc00636a.png)

Once a [Signal Name] is chosen, the Node's Input Parameters expand to include all parameters defined for that Signal. You can then pass values into the Signal here, which will then be received on the Signal listener side

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/a84960b0-47d8-44cf-b739-d076eeb44000.png)

**Send Signal to Server Node Graph (Client Node Graph)**

In skill node graphs, you can also use predefined signals to send to the server node graph. All server node graphs can listen for this signal.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/1a4f5170-8924-4861-a033-247796a203cd.png)

**Monitor Signal**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/47381324-09c9-4e99-8fc9-5ed004784e4e.png)

Signals can be received on any Entity, but you must first select a [Signal Name]

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/f5a35194-b69e-4bd6-bf08-e44a2438b95d.png)

After selecting a [Signal Name], the Node's Output Parameters will include all parameters defined for that Signal, letting you retrieve the values passed from the [Send Signal] Node

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkwzxrk3o2m/00971c3e-6f3b-49a8-aca1-a0866e9f71db.png)

[Composite Node Graph Logs](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhip8yit341o)[Dictionary](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhubgk9yy8gy)
