---
id: mhp5msi2uryk
title: Floating Interaction Page Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2u2e9o3jn6
language: en
scope: guide
crawledAt: 2026-05-31T16:23:45.580Z
---

# Floating Interaction Page Controls

# I. Floating Interaction Page Features

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/a5fdc2ab-56c0-4457-9f3d-81b8c4eb93bf.png)

_Floating Interaction Page_ UI controls provide a range of advanced configuration options, such as tabs and single-choice windows, making it easier for Craftspeople to configure more complex related interfaces. They also support adding various buttons and switches to enrich functionality and presentation

During stage runtime, the Floating Interaction Page can be triggered through Node Graphs

It supports player interaction and, based on the Craftsperson's static configuration, can trigger Server Node Graph Events when tabs or single-choice windows are opened or closed

If the Floating Interaction Page encounters an abnormal condition such as disconnection or reconnection, it will not be restored

# **II.**Editing the **Floating Interaction Page**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/e279c50b-adfd-4613-adf8-2b28ae0ac384.png)

## **1. Add a Floating Interaction Page**

In the _UI Control Group Editor window_, add the UI Control Template - Floating Interaction Page

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/6cc1204f-e915-458c-bdd3-2cef8a837d76.png)

## 2. Floating Interaction Page Settings

### (1) Basics

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/fcd53bc6-2d75-4b37-97e5-87799d5d005b.png)

### (2) Styles

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/d62abdb2-c15e-457b-b128-1b63ca5ac0ab.png)

_Use Preset Background_: When enabled, you can choose a preset background. When disabled, the default background is used

_Select Preset Style_: Select one of the preset styles

_Page Container_: A container is used to organize the information structure of UI controls within a Floating Interaction Page. Containers can be divided based on the interface's information structure, and each container can be treated as a separate page

_Initially Effective_: Determines which containers are initially effective

_Window Container List_: Displays all current containers

Click [Details Editing] to enter the _Floating Interaction Page editing interface_

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/cae33f16-806b-4281-bc7f-27ceffe42ac7.png)

### (3) Functions

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/1dd4c9d4-02a4-4a69-afe4-66b1f46eccbb.png)

_Pause Game on Page Open in Single-Player Mode:_ If enabled, opening the Floating Interaction Page in a single-player stage will pause the game while the page is being used

Note: When the game is paused, Sound Effect Assets in the Sound Effect Library under Environment, Creature & Enemy Sounds, Character Actions, Combat, and Objects will also pause with the game. However, Sound Effect Assets included in UI Sound Effects will not pause and will continue playing

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/ca659d64-0a07-41fd-b7d9-41a5085501c9.png)

_Controller Initial Selected Control_: Select one from the UI controls configured in the Floating Interaction Page editing interface

_Enable SFX_: The Sound Effect Asset triggered when the Floating Interaction Page is opened

_Disable SFX_: The Sound Effect Asset triggered when the Floating Interaction Page is closed

_Formal Variable Management_: Each Floating Interaction Page supports configuring a set of formal variables. If a corresponding formal variable is referenced in the Asset Library, the value configured in the current Floating Interaction Page will be used

For formal variable mapping, ensure that the data types match

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/a9abeff6-3d76-4545-a090-fc0c7203ace8.png)

# III. Floating Interaction Page Editing Interface

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/dc3561f5-c592-4ee9-b41d-9f651a60d30f.png)

A Floating Interaction Page functions as a new "UI Layout." You can add UI controls to this page and modify their settings accordingly

The difference is that some UI controls are exclusive to the Floating Interaction Page

## 1. Interaction Page Close Button

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/9a7211ba-75b5-4610-a568-2a880b60fcbd.png)

The Interaction Page Close Button is included by default in the Floating Interaction Page. Clicking it closes the entire Floating Interaction Page and all controls within it

The Interaction Page Close Button cannot be removed from the Inherent Container

If the Inherent Container is not enabled in the Floating Interaction Page, meaning the Close Button is not included, the page can still be closed with Esc on PC or the exit button on a controller. On mobile, the Floating Interaction Page must be closed through Node Graphs

### (1) Basics

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/3ffb2bcb-2b87-4911-b148-6432d70d4285.png)

### (2) Styles

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/43851ef8-88a7-4a8c-9889-02a1b2c58e0b.png)

_Style_: Available options are _Preset Style_ and _Custom_



**Preset Styles**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/2aae4a86-5429-4d2b-a1fe-dd2f1af2b130.png)

Choose from a variety of preset button styles. Some preset styles support customizing the icon, color, text, etc.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/d8c92a63-da19-405c-a5e0-1729ffa66622.png)

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/83809e7c-9546-466c-8acc-6109028d1640.png)



**Custom Styles**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/7664ac59-a0ed-405c-bbb4-0327645d27e2.png)

Assets for the Default, Hover, and Pressed states can be configured freely

### (3) Functions



**Key Settings**

These key settings cannot be modified. They correspond to the close function on PC and controller

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/2177a397-b2e6-40f4-9c57-19b747a18a08.png)



**Click Response Area**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/83da79df-a025-46c5-be5b-b9bd49bb0edf.png)

The click area can be configured only when the Style is set to Custom

The click area can be adjusted by dragging it directly in the editing window

The actual trigger area is determined by the configured range of the click area

Configuration Parameters Description
_Clickable_ If disabled, this button cannot be clicked
_Click Area Preview_ When enabled, the light yellow area in the corresponding control in the editing window indicates the click area

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/f02f9778-59ea-4c17-aaa3-b46c65c6843b.png)
_Location Offset_ Offset of the click area and its center point

Only available for Custom Buttons. The Close button cannot be modified
_Dimensions_ Size of the click area

Only available for Custom Buttons. The Close button cannot be modified



**Controller Navigation**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/1c95d248-b532-4a66-8362-fa70db267da2.png)

Supports configuring a navigation hint when a button is focused with the controller joystick

Configuration Parameters Description
_Selectable via Controller Joystick Navigation_ If enabled, the configured hint will be displayed when the button is focused through controller navigation
_Controller Navigation Hint Style_ Supports selecting a preset style
_Navigation Hint Target_ Can be set to Up, Down, Left, or Right. See below for the display effect:

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/9338c349-0c0e-44ec-8776-a4e848cacfee.png)
_Navigation Hint Offset_ Supports configuring X/Y offset values
_Left/Right/Up/Down_ When controller focus moves from this control in the selected direction, it will prioritize snapping to the configured target

By default, focus snaps to the nearest control

Supports selecting controls from all configured containers

## 2. Tab

### (1) Basics

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/2503436c-3d9e-4688-90eb-2e85c8e49dc5.png)

### (2) Styles

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/8a3aae0e-f5b6-466d-8bca-2897f750dfde.png)

_Style_: Available options are _Preset Style_ and _Custom_

Both styles require configuration of the scroll direction

**Horizontal**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/82007df2-4772-495d-b6bc-070739a559b2.png)

**Vertical**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/d8204c7a-37a4-43c6-be95-eff6180732b5.png)



**Preset Styles**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/1b59a7e8-5b03-44c4-b9a7-20abacfd02a7.png)

Different preset styles can be selected

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/9b8f8c9d-dd81-4e29-9573-cac56afa10fd.png)



**Custom Styles**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/24842639-29e1-41ce-9a45-ac5e19becb54.png)

Supports adding styles to preconfigure multiple tab item styles

Each style allows the assets for the Default, Hover, Pressed, and Selected states to be configured freely

### (3) Functions

#### **a. Tab Settings**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/c1bf7253-5f1c-48c3-816a-152971cc14b5.png)

Configuration Parameters Description
_Tab Item Size_ General settings for each tab item
_Spacing_ Spacing between tab items
_Padding_ Margin settings for the top, bottom, left, and right sides relative to the border
_Center If Content Doesn't Fill_ If enabled, the tab items will automatically be centered as a whole

#### **b. Tab Item Configuration**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/5f737f37-80ad-486d-ba21-fddab4967c16.png)

Supports preconfiguring tab items, statically linking associated tab items, and adjusting displayed content through Node Graphs during stage runtime

Tab items support click feedback configuration, including opening tabs and toggling control visibility

Tab item settings vary slightly depending on whether the selected style is Preset Style or Custom



**Add Tab Items**

In the Edit Details interface, click the plus sign to add a new Tab Item

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/89cbbcbb-97e5-46a6-9ddb-a9efa2bddc1c.png)

Configuration Parameters Description
_Tab Name_ Name of the Tab Item
_ID_ Unique Identifier for the T ab Item



**Basic Settings**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/1b9a8738-82cf-4b5b-a5eb-4948429ca27a.png)

Configuration Parameters Description
_Tab Name_ Name of the Tab Item
_Tab Style_ Select a style configured in the Tab Style settings at the previous layer
_Preview Selection State_ If enabled, the default display configuration will be shown in the editing window
_Return to Server Event_ During stage runtime, clicking this Tab Item triggers the [When Floating Interaction Page is Triggered] Server Node Graph Event



**Formal Variable Configuration**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/55410ccb-61fd-4273-bd9f-cf4a85421d2a.png)

Link formal variables to specified data or Player Custom Variables

If any assets in this tab item reference formal variables, they will use the real-time data of the corresponding configured custom variables



**Container Status Settings**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/60b48b1c-a5ff-4192-8710-d7cf0e32bf34.png)

Supports adding page containers and configuring whether each one is**shown or hidden**

When this tab item is selected, the configured page containers will be shown or hidden according to these settings



**Control Status Settings**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/988d2a9d-2da2-449e-84a3-c3d80ad9bc3d.png)

Supports adding controls to page containers and configuring whether each one is**shown or hidden**

When this tab item is selected, the configured controls will be shown or hidden according to these settings

#### c. Interaction Settings

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/10facd3a-d7ce-403e-bb8a-e61a496d7b4f.png)

When the corresponding hotkey is enabled, this tab can be interacted with using the hotkey

Interacting with this tab triggers the configured sound effect

#### d. Controller Navigation

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/5b9afd78-8fcb-4135-bbac-0fec9e84451b.png)

When controller hotkeys are enabled for a tab, Controller Navigation cannot be triggered

If controller hotkeys are not enabled, refer to the corresponding configuration description for the Interaction Page Close Button

## (3) Single-Choice Window

### (1) Basics

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/d497340d-99b8-401b-adcf-e8f66af3d3ea.png)

### (2) Styles

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/c30384ec-3c0e-48eb-a312-de5259a9bb19.png)

Single-choice windows support only Custom Style

Styles can be added to preconfigure multiple tab item styles

Each style supports freely configuring the assets for the Default, Hover, Pressed, and Selected states

### (3) Functions

#### **a. List Settings**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/d1e51a64-5854-41e8-8d71-cdc8f5b9eb74.png)

Configuration Parameters Description
_Scroll Direction_ Horizontal or Vertical
_List Item Size_ General settings for each list item
_List Item Spacing_ Spacing between list items
_Padding_ Margin settings for the top, bottom, left, and right sides relative to the border
_Center Align_ If enabled, the tab items will automatically be centered as a whole
_Layout Constraint_ Auto Wrap or Fixed Rows

#### **b. List Item Configuration**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/525a3fd1-496d-40f7-a1a3-44af4812e5dc.png)

Supports preconfiguring list items, statically linking associated list items, and adjusting displayed content through Node Graphs during stage runtime

List items support click feedback configuration, including opening tabs and toggling control visibility



**Add List Items**

In the Edit Details interface, click the plus sign to add a new List Item

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/7724aa43-04af-4ab4-a04f-b761a37d4e4f.png)

Configuration Parameters Description
_List Item Name_ Name of the List Item
_ID_ Unique Identifier for the List Item



**Basic Settings**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/ffd5a899-00f1-442a-a9ad-bd7b5e909cc6.png)

Configuration Parameters Description
_List Item Name_ Name of the List Item
_List Item Style_ Select a style configured in the List Style settings at the previous layer
_Preview Selection State_ If enabled, the default display configuration will be shown in the editing window
_Return to Server Event_ During stage runtime, clicking this List Item triggers the [When Floating Interaction Page is Triggered] Server Node Graph Event



**Formal Variable Configuration**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/6182d457-6616-40dd-8e73-8ec2dc8805ab.png)

Link formal variables to specified data or Player Custom Variables

If any assets in this tab item reference formal variables, they will use the real-time data of the corresponding configured custom variables



**Container Status Settings**

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/c323fd01-908e-4ce3-aa5a-03f641fe7456.png)

Supports adding page containers and configuring whether each one is**shown or hidden**

When this tab item is selected, the configured page containers will be shown or hidden according to these settings



**Control Status Settings**

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/94623cad-3c34-4d9c-b6bd-a2f458a2a623.png)

Supports adding controls to page containers and configuring whether each one is**shown or hidden**

When this tab item is selected, the configured controls will be shown or hidden according to these settings

#### c. Interaction Settings

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/4e437029-4813-4459-917e-538cade22481.png)

Interacting with this single-choice window triggers the configured sound effect

#### d. Controller Navigation

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/493963b2-531a-4704-946e-37123badb5f5.png)

When the controller joystick hovers over a button, you can configure a navigation hint

Configuration Parameters Description
_Selectable via Controller Joystick Navigation_ If enabled, the configured hint will be displayed when the button is focused through controller navigation
_Controller Selection Behavior_ Supports selecting **on focus change or after pressing Confirm**
_Controller Navigation Hint Style_ Supports selecting a preset style
_Navigation Hint Target_ Can be set to Up, Down, Left, or Right. See below for the display effect:

![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/9338c349-0c0e-44ec-8776-a4e848cacfee.png)
_Navigation Hint Offset_ Supports configuring X/Y offset values
_Left/Right/Up/Down_ When controller focus moves from this control in the selected direction, it will prioritize snapping to the configured target

By default, focus snaps to the nearest control

Supports selecting controls from all configured containers

# IV. Manage Floating Interaction Pages with Node Graphs

The Floating Interaction Page includes some special controls. Among them, tabs and single-choice windows have similar features, and their parameters are managed in the same way. Therefore, when referenced in Nodes or Output Parameters, tabs and single-choice windows are collectively referred to as [List].

Show Floating Interaction Page

![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/56a815dc-e648-460f-8e95-cf282d6f6316.png)

Close Floating Interaction Page

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/0f98e508-5875-43fe-a5d4-8bd7fd987e09.png)

Update Floating Interaction Page List Data

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/ec3e7484-bb09-44ed-a6ee-9e0f9fa97180.png)

When Floating Interaction Page is Triggered

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhp5msi2uryk/ab49d27a-8d01-471b-8796-31f40ba29a97.png)

[Custom Switch Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkrafr3w6um)[Special Number Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkwucr8awfq)

1
