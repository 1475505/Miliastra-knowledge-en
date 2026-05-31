---
id: mhb6mc085sjc
title: Interface Layout
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhozt0r74ng6
language: en
scope: guide
crawledAt: 2026-05-31T16:25:49.274Z
---

# Interface Layout

# I. Definition of Interface Layout

The Interface Layout is the screen players use to obtain information and perform interactions during stage runtime.

In addition to the _Default Layout_ with basic features, players can customize the Interface Layout.

The Interface Layout runs per player; during runtime, each player has exactly one active Interface Layout.

# **II. Interface Layout Management**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/37507c76-f8f3-4225-b2db-a90278bfae4a.png)

The Interface Layout is centrally managed via _Manage_ _UI Control Groups — Interface Layout_.

Only supports editing and referencing the interface that is displayed during stage runtime, and does not support editing the interfaces for essential processes such as matching and settlement

**1. Default Configuration**

The Interface Layout used by players during Stage gameplay must be configured via _Class_.



Open the "Class" editing Interface, then use _Select Layout_ to reference the Interface Layout.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/b551b7b6-fe94-4e95-9ea6-e71c48971e48.png)



The Interface Layout parameter configuration window can also transit directly to this editing interface.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/07332cb4-e92e-4547-b719-9f6ffb819570.png)

## 2. Manage with Node Graphs



Switch Current Interface Layout

Use the Layout ID to switch the Target Player's current Interface Layout as needed.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/68645d8f-c32b-4e96-89fd-3658fc494773.png)

Configuration Parameters Description
_Target Player_ The Player Entity that needs to switch the Interface Layout
_Layout Index_ The ID of the specified layout in the UI Layout Management Tool

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/10c3a88f-582b-4f36-b2f7-1b49d107cc7c.png)



Get Current Interface Layout

At runtime, get the player's current Interface Layout ID.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/00b5e1e6-f8d1-4c19-9a70-79f2bed7725f.png)

# **III. Interface Layout Adaptation Instructions**

## 1. Device Selection

Due to significant differences in Interface Layouts across devices (resolution and button arrangement), if you want to create Stages playable on _PC/Mobile/Console_, you need to adjust UI Controls' _Location, Size, and Waypoint_ for each device

There are two places where device settings can be adjusted:

(1) Top bar: Select device and resolution

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/622b0da3-444a-4eb7-911e-b75a78515383.png)

(2) UI Control Details — Transform: Click to select a device![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/b309cba9-87ff-40e9-9f96-fe3a17bc689d.png)

Main interface styles for different devices in 16:9 resolution:

Selected Device Icon Main Interface Diagram (16:9 Resolution)
PC![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/9925133c-fc29-4f90-980e-cc5bfbf5ede8.png)![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/be3be4a2-c102-4516-bf01-a42cc6d7f434.png)
Mobile![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/e54b65d1-103b-4379-8c83-0ab5143656e5.png)![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/8a4dbe10-9b31-4c8a-aa0e-f4224cbcdea5.png)
Console![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/96e7a778-aaaa-4318-8f9f-4db607299600.png)![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/12eef8fe-98c9-4b34-9398-0d4331e2db64.png)
Mobile Controller![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/aada263d-08ac-4f19-8247-7eea826414fd.png)![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/7b91db33-f229-46f4-afad-38e32f5db2bd.png)

## 2. Adjust Location and Size

### (1) Location

Using the bottom-left corner of the canvas as the origin, displays the relative location of the UI Controls' center point to the origin

Each device needs to be set up separately

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/942089d1-1e9c-4121-b7fe-4a3ab94d3094.png)

### (2) Size

Adjust the current size of the UI Control. Click the chain button in the top right corner to lock the current aspect ratio. Some UI Controls cannot be resized

Each device needs to be set up separately

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/94ee8998-4ad4-46b4-acea-e2117a1ebfbd.png)

## 3. Waypoints

### (1) Definition

When resolution changes, UI Controls automatically adapt their location while maintaining their relative location to the set waypoint

Take the selected quest text in the following graph as an example:

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/e86c58a5-f3bb-40e4-8d80-d1584d567e2f.png)

Selected Waypoint After changing resolution to 21:9
![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/3ebed359-ce35-472d-9df4-c076a2171e83.png)![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/950481b3-3ad4-4c51-b5d2-016005b71ab4.png)
![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/f9a1e6bb-5af8-4d13-9b2d-dc0c2327a2a3.png)![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/7a7c42a3-5c10-46e2-a1b4-7066beda4c01.png)

### (2) **Waypoint Selection Guidelines**



Based on UI Control Location: Select the waypoint corresponding to the section of the nine-grid where the element is placed.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/1a574630-d88e-420a-ab13-71922431d261.png)



Based on functional areas: For example, waypoint selections for quest descriptions and multiple text boxes should remain consistent.

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/4939496f-0d1a-42d3-96df-e5d75a95bd77.png)

## 4. Interface Dead Zone

The mobile Interface has the smallest screen. Use the 16:9 mobile adaptation as the baseline to ensure clickable UI Controls remain within the red area

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/8f5a4a74-6b44-4872-a545-f2cf91547da1.png)

# IV. Interface Specification Reference

## 1. Text Reference

### (1) Font Size

When entering text, please refer to the graph below to select font size. Size 20 is typically used

Type Recommended Font Size
Large Title 36-32
Subtitle/Button Text 24
Body Text (Most Common)20
Secondary Text 18
Recommended Minimum Font Size 16

### (2) Text Color

Use _<color=#FFFFFF>Text Content</color>_ command to change the color of the text in between, where #FFFFFF can be replaced with the following color codes

Dark background (in pop-ups/main interface)
Title/Secondary Text#D3BC8E
Normal Text#FFFFFF
Keyword 1#FFCC33
Keyword 2#37FFFF
Warning Text#FF5E41

Light Background (Tips etc.)
Normal Text#4A5366
Secondary text (75% opacity)#4A5366BF
Keyword 1#F39000
Keyword 2#3399CC
Warning Text#FF5E41

Other special colors:

Elemental Type Colors
Hydro#80C0FF
Pyro#FF9999
Anemo#80FFD7
Electro#FFACFF
Dendro#99FF88
Cryo#99FFFF
Geo#FFE699

Pop-up:

Subtitle — Font color #D3BC8E

Content — For emphasized text, preferably use yellow (#FFCC33). Leave one line break before starting a new paragraph

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/0304af53-82af-4926-8456-0a8d61bd45a5.png)

## 2. Interface Layout Reference

### (1) Main Interface Quest

Quest: Main Quest Text Box font size 20. Side Quest font size 18. Waypoint at top left



Multiple side quests:

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/21964070-197d-41c9-824c-703970e345db.png)



Side quest success/failure conditions: Success text color #ACFF44, Failure text color #FFFFFFBF

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/1a38611a-3965-4e83-81be-bbd65d75514e.png)



Quest Description: Text size 18, consider using size 16 if there is too much text

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/71d4f9cc-de66-498b-bd14-173a84db7060.png)



Quest with tracking distance: The Distance display must insert a _Custom Variable_ in the text

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/7df11f3c-f832-4ec0-811f-7cd78fa9d6c7.png)

### (2) Hint

Text Box font size 20, center-aligned, length 5,000 (adapts to various screen sizes without showing the Boundary). Waypoint at the top

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/6ec07d1e-3b24-47a0-a731-2abc07d995c8.png)

### (3) Window

Pop-up:

Subtitle — Font color #D3BC8E

Content — For emphasized text, preferably use yellow (#FFCC33). Leave one line break before starting a new paragraph

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhb6mc085sjc/0304af53-82af-4926-8456-0a8d61bd45a5.png)

[UI Control Group](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhg1700h8bug)
