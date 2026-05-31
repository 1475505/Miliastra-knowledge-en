---
id: mhr3ngi2n74c
title: Tab
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh5jko05fzyw
language: en
scope: guide
crawledAt: 2026-05-31T16:36:43.848Z
---

# Tab

# 1. Tab Component Functions

The Tab component enables players to configure and interact with dynamic objects and creations

After adding this component to an entity, it supports configuring and applying multiple tabs simultaneously

Each tab supports using a local filter to determine visibility for each player

The entity type that triggers the tab function is _Character_

# II. Editing Tab Components

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/55861062-47ae-40ce-93b7-a262a3f34231.png)

(1) In the entity/prefab editing interface, open the Editing Components tab (A)

(2) Click "Add Common Components" below, select and click "Tab" to add (B), (C) successfully

When "Tab" is selected, the entity being edited will display the tab trigger area with a blue border

(3) Click "Advanced Editing" to expand the editing tab (D)

## 2. Editing Tabs

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/c91e9a26-febe-4098-bc1f-4e4684795de8.png)

### (1) Basic Tab Information

Configuration Parameters Description
_Initially Effective Tab_ The dropdown menu provides tab enumeration

By modifying the checkbox behind, you can change the effective status. After modification, the effective status will be synchronized to the tab editing page

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/86507c4b-a710-4b86-890e-2e69b5ec5b48.png)
_*Tab List_ Enumerate all tabs of entity configuration.

Click to![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/c9f2941b-4f43-4eb9-8d75-1e2a149bddad.png)![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/a58be6a4-b5b1-4d4e-9529-1b66d55453a7.png)toggle the visibility status of a tab in the editing window. Effective only during editing

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/02e1f09f-16d3-4e53-8904-1bf669f1594b.png)

Click "Advanced Editing" to enter the tab list and trigger area configuration interface

### (2) Tab List

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/d95ac7b6-db4e-47ec-9987-a121ca8b2fd6.png)



Add New Tabs

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/bd81175c-96f3-418c-a667-1aff47cd9105.png)

Click "Add Tabs" to create a new tab



Editing Tabs

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/16567ff9-859b-4cc5-8f5f-901c9b389750.png)

_Option ID_ _ID_ _X_. Can be used for node graph input parameter to adjust whether tab is in effect

_Option Tab Icon_ Click![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/2477403e-7cbf-4900-bd5b-2181b7d504f0.png) to switch the icon in front of the tab.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/f29949f7-176d-47bb-9dbd-58b6dd768a30.png)

_Initially Effective_ If enabled, this option tab takes effect immediately upon entity creation. An effective tab is visible and can be selected for operation

_Sort Level_ Controls the display order of option tabs. The higher the number, the further forward it appears

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/2da28309-e5fa-4f08-af7d-adf631cd95d2.png)

_Local Filter_ There are two types of filters: Boolean filters and integer filters. See [Node Graphs](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhjwjrr5n73i)for details.

Filter Node Graph You can refer to the filter node diagram of the above selection types to determine whether the tab meets the display conditions.

The following is an example using a Boolean filter:

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/4dbea031-376b-43ae-8b8b-11beec320cb1.png)

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/f79820df-2e3f-4e14-b988-b72c15279703.png)![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/549d2b04-c993-4f62-ab5d-1636629c931c.png)

The local filter continuously monitors while the character is within the effective range. If the result changes, it updates the display immediately.

Explains the basic nodes in the local filter node graph



Get self entity

The output parameter is the entity where the tab component is mounted



Get target entity

When the character is within range, this node outputs parameters for the character entity that is effective within the tab range



Get Current Character

Output parameter is the local character



Example

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/4883498a-7bb9-43c3-a1a4-0a2832ced923.png)

### (3) Trigger Option Area

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/85846155-c6cc-46a9-8075-0a6ae3301449.png)



Add Trigger Areas

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/b738ef92-11e6-4e9e-8eab-bb863a24f764.png)

Press the "Add Trigger Option Area" button to create a new trigger area



Trigger Areas

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/96003341-43e4-4a24-92cd-6ff2074b679b.png)

Configuration Parameters Description
_Trigger Area Shape_ Supports cuboid, sphere, and capsule shapes. Different size configuration parameters will be displayed based on the selected shape
_Center_ Offset relative to the entity/prefab center
_Rotation_ Supports orientation adjustment along different axes based on the center position
_Zoom Multiplier_ The trigger area's shape supports defining scaling along different axes

# III. Manage Tabs Through Node Graph



Activate/Disable Tab

Enter the Tab ID to control whether the tab is enabled or not

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/60e70058-c559-4800-a7fe-244954c61102.png)



When the tab is selected

When the active tab is selected, it will send an event to the node graph

The entity node graph configured by the tab component will receive this event

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/3f521998-c7e4-4bf3-80d2-16a326692648.png)

Configuration Parameters Description
_Event Source Entity_ The entity where the tab component is mounted
_Event Source GUID_ The entity with mounted tab components, outputs 0 if none exists
_Tab ID_ Tab ID

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr3ngi2n74c/431cb500-e441-4cf4-a669-4ac3870192e1.png)
_Selector Entity_ Character entity that triggers tab

[Basic Motion Device](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnmcmipncrg)
