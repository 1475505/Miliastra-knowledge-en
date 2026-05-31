---
id: mh1g8q9w7x02
title: Deck Selector UI Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2teu0bmfbc
language: en
scope: guide
crawledAt: 2026-05-31T16:21:37.425Z
---

# Deck Selector UI Controls

The Deck Selector provides a simple interface for editing decision interactions

Supports editing of decision-making content, including decision time, presentation of decision options, interaction methods for decisions, etc.

# **I. Deck Selector** Functions

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/d9407272-8745-499f-a283-b317ce14c87e.png)

During stage runtime, the _Deck_ _Selector_ can be invoked through default configurations or the node graph.

Supports player interaction, and send a _Decision Pop-up Completion Event_ to the node graph upon timeout or after interaction.

# **II. Editing Deck Selector**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/1ee24b8c-be31-410f-a646-f6aaf2908e53.png)

## **1. Add Deck Selectors**



In the _UI Control Group Editor Window_, add the UI control template - Deck Selector



The Deck Selector is a default UI controls group

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/16d6efa7-5e33-4725-b068-ebcda7eaed6b.png)

## **2. Interface** Configuration - Deck Selector

This section configures the Deck Selector's overall appearance and usage rules, allowing players to customize its display style

### (1) Visibility

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/694652a7-d9df-4af3-bc15-b462e587db64.png)

Configuration Parameters Description
_Index_ Parameters used to invoke the Deck Selector node
_Initially Visible_ If unchecked, the UI control will not be visible when activated.

This parameter can be adjusted through the Node Graph - _Modify UI Control Group Status_.

### (2) Transform

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/600dafc3-9310-4b9e-81fd-1ae426f02d67.png)

Configuration Parameters Description
_Location_ Supports manually entering the UI Control's location

You can also adjust it by dragging the UI Control in the editing tab
_*Size_ Configuration not supported
_Layer_ The higher the number, the higher the display layer

## **3. Interface Configuration** - Decision Panel

### (1) Page Settings

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/e3abfafe-a96a-4f30-bc91-04b5dc987afc.png)

#### a. Visibility

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/ddd5e177-06a0-433b-a4b2-ff410d19414a.png)

#### b. Deck Selector

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/b08864ae-2aa1-4ba3-ae12-3b519b3b3581.png)

Configuration Parameters Description
_Show Title_ When checked, the current Deck Selector will have an editable title at the top
_Title Text_ Supports editing the display title
_Interface Layout_ Provides two style options to choose from
List![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/239f1d02-10cb-484b-b061-8c115f4038fd.png)
Grid![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/770740b0-82e8-48da-9abf-1e0d4f20ffe3.png)

#### **c. Show selected quantity**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/abb34176-682d-4497-b70b-6ef6d6f3f0e5.png)

Configuration Parameters Description
_Show Selected Quantity_ Determines whether to show the current number of selected items in the Deck Selector interface

#### **d. Show reset count limit**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/7026ceed-509a-40a7-aa14-d2d2af042464.png)

Configuration Parameters Description
_Show Reset Count Limit_ Determines whether to show the minimum and maximum number of resettable options in the Deck Selector interface

#### **e. Show Remaining Time(s)**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/c998503d-8490-4343-8246-b5f2524193cf.png)

Configuration Parameters Description
_Show Remaining Time (s)_ If checked, the Deck Selector will automatically close when the countdown timer ends without requiring manual input

If the player completes the interaction before the countdown ends, whether the interface remains visible depends on _Decision Completion Style_ and _Decision Completion Style Duration_ settings
_Pre-End Warning Time (s)_ When the countdown reaches the configured time, the time display interface will show a flashing red warning effect

#### **f. Other Settings**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/4e74e0a1-7321-4d15-a6de-f4cb6fb82db3.png)

Configuration Parameters Description
_Pause Game on Page Open in Single-Player Mode_ If checked, the game will pause during the selection process when the stage is a single-player stage.
_Controls can collapse_ If checked, the deck selector can be manually collapsed.

You can choose to postpone handling, process it later, or wait until it times out.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/386032a1-4efd-427c-8e64-3d0da2ac4e39.png)
_Selection can be canceled_ If checked, the Deck Selector can be manually closed. The Deck Selector will add a UI control for closing, and it will support interactions.

If closed, it triggers the node graph's Decision Completion - Closed manually event

### (2) Option Configuration

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/058ddf5f-eba4-45e5-883c-62521d9d5435.png)

#### **a. Known Deck Settings**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/69f4f1da-3135-4154-bb9d-2307e0903cf6.png)

Configuration Parameters Description
_Display Deck Icon_ Whether the displayed card includes an icon. If it does, the icon can be configured in the settings
_Display Deck Title_ Whether the displayed card includes a title. If it does, the icon can be configured in the settings
_Display Deck Description_ Whether the displayed card includes a description. If it does, the icon can be configured in the settings

#### **b. Unknown Deck Settings**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/6e319202-1a53-41b8-9782-91d02c412623.png)

Configuration Parameters Description
_Reveal result after Selection_ After the decision is made, determine whether to play an animation and switch the display to the option's actual return value
_Result Page Closing Method_ Closes after the countdown ends Additional configuration of **countdown duration (s)**
Closed Manually Requires manually closing the pop-up to end it
_Countdown(s)_ After the decision is complete, the deck selector will automatically close after the configured time

#### **c. Deck Settings**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/c6a93cb2-42eb-43c8-a995-035cbf3873bd.png)

Use Edit Details to configure deck display

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/e8e1d2db-f486-453d-a141-f282d8ab3c96.png)

Configuration Parameters Description
_Deck ID_ Used for displaying the cards when invoking the Deck Selector in the node graph.

Increments sequentially starting from 1, cannot be modified
_Deck Types_ Known Deck Provides a clearly configurable icon
Unknown Deck Provides only a question mark icon. Recommended to use together with **Reveal Result After Selection** and **Closes after the countdown ends**
_Deck Icon_ This configuration will only be available when icon configuration is enabled in general settings
_Deck Title_ Text Configuration
_Deck Description_ Text Configuration
_Tag Color_ Text Color
_Tag Description_ Text Configuration

# **III. Managing Deck Selector Through Node Graphs**



**Invoke Deck Selector**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/de694c2d-9f94-4ba9-b735-39baad4b6b46.png)



**Close Deck Selector**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/354802c7-ab4b-4c18-8b26-cbbd28a7ef69.png)



**When Deck Selector Is Complete**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/d1d43b5b-6d88-4510-b307-2568fb977ca8.png)



**Random Deck Selector Selection List**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh1g8q9w7x02/a509a8d6-acae-4a73-9803-d713ffe4fa37.png)

[Scoreboard UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhesro0hyn5k)[UI Animation Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2iyk9fa4gy)
