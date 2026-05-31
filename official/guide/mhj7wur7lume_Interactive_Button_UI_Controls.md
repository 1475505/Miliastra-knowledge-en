---
id: mhj7wur7lume
title: Interactive Button UI Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwkfsitckrw
language: en
scope: guide
crawledAt: 2026-05-31T16:25:36.473Z
---

# Interactive Button UI Controls

# I. Interactive Button Functions

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/9652aee6-6937-492d-9d20-7a49d8dd6440.png)

During stage runtime, clicks or external device inputs can trigger UI control interactions.

Supports player interaction. When selecting "Interactive Event," send a _When UI Control Group Is Triggered_ event to the node graph after the interaction.

# **II. Editing Interactive Buttons**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/67b10b4f-6416-4e98-8933-d8a8b425f6c2.png)

_Key Mapping - Keyboard & Mouse_

Choose a numeric key for input. The selected key will be displayed below the button in the edit window

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/ba8c6c0b-754b-4f95-9a95-699100e16ff1.png)

_Key Mapping - Gamepad_

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/32374635-3c0a-40da-bcde-0f2b48707c1f.png)

_Size_

You can modify the size of the interactive buttons, with the larger ones being 64 x 64 and the smaller ones being 40.96 x 40.96.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/58b65a9b-1cf4-430b-9a65-0e8909d179e0.png)

_Type_

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/a7e507ff-1c00-47d8-a72e-06dadf9c850d.png)



_Button Skill_

You need to specify a skill. The corresponding icon and function details can be edited in the character skill editor. [Skills](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mho81frl33im)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/e0a80796-34e3-490d-b8cd-a702bb6f4d73.png)



_Interactive Event_

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/72f33cdb-14a7-4c78-9912-e4127c8499fc.png)

Interactive event will send triggers to the node graph

_Skill Icon_

By operating ![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/754d0e37-d538-4ac9-83d1-1ce4e23d9ab2.png) you can configure the button's display graphics, which will be shown in real-time in the edit window.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/0cbe42a5-24ba-47bf-be88-1ba6310ece9e.png)

_Button CD_

Once a skill is used, you must wait for its configured cooldown to expire before it can be used again. During this time, the skill button will be grayed out

_Button Usage Limit_

If enabled, activates the configuration and functionality for displaying the usage count.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/58f53acb-044e-465e-b03a-0894f5eedcac.png)

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/9fae0b90-b50b-437e-bdc2-dc2c167f52de.png)

_Hide When No Usages Left_

Enable this to hide the button when the configured custom variable reaches 0

_Usage_



Available only when the usage limit is enabled.



Different usage limits can be configured for each player, and these limits can only read the custom variables assigned to that player.



The default count you configure will be displayed on the button in the edit window.



To adjust the number of uses, modify the player's custom variable in the node graph. When this custom variable changes, the button's displayed usage count updates automatically.

_Use Items_

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/6fc087d8-12ca-478b-b384-1c6b0248f855.png)

_Select Variable_

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/e1bd7672-900b-45f6-a9c5-45031a7c848c.png)

You can choose variables associated with the player's own entity

_Behavior when there are no items_

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/605030f6-e239-46e5-a617-89a182019433.png)

Divided into three types: : Icon Grayed Out, Do not show icon, and Hide button

# III. Managing Interactive Buttons Through Node Graphs

**When UI Control Group Is Triggered**

During stage runtime, when a player interacts with a button UI control group, it triggers the "When UI Control Group Is Triggered" event in the node graph. This event is sent only to the node graph of the _player_ who performed the interaction

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhj7wur7lume/40ebe179-b549-4662-8fd7-56d90685164e.png)

[Item Display UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjja1ipq9ck)
