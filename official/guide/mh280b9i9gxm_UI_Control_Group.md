---
id: mh280b9i9gxm
title: UI Control Group
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhg1700h8bug
language: en
scope: guide
crawledAt: 2026-05-31T16:37:55.543Z
---

# UI Control Group

# I. Definition of UI Control Groups

_UI Control Groups_ are custom data for UI controls created by creators (Craftspeople).

A UI Control Group is data saved after combining and editing parameters for single or multiple prefab _UI Controls_.

UI Control Groups include two types: individual UI Controls and combined UI Controls.

[UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhnapxrumtzy) refer to the various assets used to design and implement the [Interface Layout](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhozt0r74ng6)

# II. Editing UI Control Groups

UI Control Group templates can be directly referenced in _Interface Layout_ configurations or managed through Node Graphs.

UI Control Groups can be managed uniformly through the UI Control Group Composite, or the states of individual UI Controls within can be managed separately.

## 1. Naming and ID

In the _UI Control Library Management Tool_, each UI Control Group has its own ID, which serves as an input parameter for the Node Graph

UI Control template combinations, and combined UI controls each have their own identifying ID

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/b54f20c6-85de-4c72-a0bf-061b83120d58.png)

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/a57cd3c9-7b19-42e3-a6f9-4e5b2cbef109.png)![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/796608e8-b169-4515-83d4-5bc7bb78291f.png)![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/d3467e90-ba44-4175-a417-b0f361fe0431.png)![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/4bb5f333-a1b1-4071-867b-63471303c73e.png)

## **2. UI Control Group Statuses**

(1) UI Control Group _Statuses_: **Active, Inactive**



Active Exists in the Interface Layout, with its display state managed through the node graph



Inactive Does not exist in the Interface Layout, and its display state cannot be manipulated

(2) _Display_ _states_ of the activated UI Control Groups: **Enabled, Disabled, Hidden**



Enabled: The UI Control Group visibility is turned on.

From the Hidden state to the Enabled state: The UI Control Group visibility is turned on.

From the Disabled state to the Enabled state: The UI Control Group is reinitialized and its visibility is enabled



Disabled: The UI Control Group visibility is turned off, and dynamically modified information is not saved

After reopening a Disabled UI Control Group, both its display and data are reinitialized



Hidden: The UI Control Group visibility is turned off while preserving dynamically modified information

After reopening a Hidden UI Control Group, both its display and data remain consistent with the state before hiding

# III. UI Control Group Management

## 1. Reference by Interface Layout

UI Control Group templates referenced in the Interface Layout are activated by default along with the Interface Layout. Their statuses cannot be modified. Only their display state can be adjusted.

## 2. Manage with Node Graphs



**Activate UI Control Group in Control Group Library**

During runtime, UI Control Groups can be created in the Player's current Interface Layout.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/a88db317-611f-44d0-8934-81dac6d17ef9.png)



**Remove UI Control Group From Control Group Library**

At runtime, you can remove the UI Control Group created by the "**Activate UI Control Group in Control Group Library**" node from the Player's current Interface Layout

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/1ca704fb-1400-428c-8f14-30a9f3d19be4.png)



**Modify UI Control Status Within the Interface Layout**

For an activated UI Control Group, you can adjust its display state.

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/aa4f5cef-bcc0-421d-9ee7-1395cc989086.png)



**When UI Control Group Is Triggered**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/6f8f4fdc-c497-4a59-a6c7-6d5d0bc0a874.png)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/dc7f7bea-f8ca-42c9-b503-8496cc0f79cc.png)

[Interactive Button UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwkfsitckrw), [Item Display UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhjja1ipq9ck)when executed during Stage gameplay, will send a Node Graph Event: "When UI Control Group Is Triggered"

 This Event is only received by the Node Graph of the _Player_ who triggered the Button.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh280b9i9gxm/5f92c6cd-c199-493f-bf05-6f66534ef539.png)

[Interface Layout](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhozt0r74ng6)
