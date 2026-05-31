---
id: mh72uu0inf60
title: Custom Button Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhtpwgitsigc
language: en
scope: guide
crawledAt: 2026-05-31T16:21:16.069Z
---

# Custom Button Controls

# I. Custom Button Features

_Custom Buttons_ are a special type of Interactive Button whose icon and displayed text can be configured

The logic supported by Interactive Buttons also applies to Custom Buttons

# **II. Editing Custom** Button**s**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/547121a3-79eb-422a-9c8a-f95e7c4c3a96.png)

## **1. Add a Custom Button**

In the _UI Control Group Editor window_, add the UI Control Template - Custom Button

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/299512e0-38fa-4383-b6d6-88af045963e6.png)

## 2. Custom Button Settings

### (1) Basics

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/cb3574da-2083-45c7-8f62-312d61cea479.png)

### (2) Styles

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/1f9ae104-f628-47cd-88d0-5fbfe711d026.png)

_Style_: Available options are _Preset Style_ and _Custom_



**Preset Styles**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/f6ad4a5f-367c-49b2-a3a3-6923f0e0e139.png)

Choose from a variety of preset button styles. Some preset styles support customizing the icon, color, text, etc.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/1382e799-8ff5-4acc-9e41-42eaaf7714fb.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/a13ab11a-8e89-40fb-b724-7c688beaf379.png)



**Custom Styles**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/9d155b2e-4c6a-40af-8984-4a781304ab8f.png)

Assets for the Default, Hover, and Pressed states can be configured freely

U navailable Assets can only be configured when Skill is selected under Functions - Key Type

Status Description Style Features Example
Default Non-interactive state/![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/f869dad3-3728-419c-badc-46fb5844e1cf.png)
Hover When the cursor hovers over the button during keyboard and mouse input Typically indicated by an outline, a slightly brighter color, or a subtle increase in size to signal that the button is interactive![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/a5bef164-6ac4-41a5-abc7-0a554d1925c8.png)
Pressed When the button is pressed during keyboard and mouse or touch input Typically indicated by a color change and a slight decrease in size to show that the button is being interacted with. When released, it returns to the Default state![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/6e342391-4f61-4bfc-9e80-b6a839f5e430.png)

### (3) Functions



**Key Settings**

When the Style is set to Preset Style, the Key Type is locked to Interactive Event and cannot be edited

When the Style is set to Custom, you can choose 1 of 3 Key Types: Skill, Interactive Event, or Item

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/6897bde9-0d50-49ea-bd60-292e26961435.png)

Configuration Parameters Description
_Key Type_ Supports the following three options

Skill: Configure the corresponding skill slot

Interactive Event: Configure the cooldown time

Item: Configure the configuration ID of the corresponding item
_Key Mapping - Keyboard & Mouse_ Configure the PC shortcut mapped to this button
_Button Hint Offset - Keyboard & Mouse_ Configure the display offset of the hint shown when the cursor hovers over the button
_Key Mapping - Gamepad_ Configure the gamepad shortcut mapped to this button
_Button Hint Offset - Controller_ Configure the display offset of the hint shown when the button is focused with a controller
_Sound Effect_ Play the configured sound effect when the button is triggered



**Click Response Area**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/17936aa7-8b9e-40fc-9b94-976a28658f32.png)

The click area can be configured only when the Style is set to Custom

The click area can be adjusted by dragging it directly in the editing window

The actual trigger area is determined by the configured range of the click area

Configuration Parameters Description
_Clickable_ If disabled, this button cannot be clicked
_Click Area Preview_ When enabled, the light yellow area in the corresponding control in the editing window indicates the click area

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/f02f9778-59ea-4c17-aaa3-b46c65c6843b.png)
_Area Range_ Supports using Match Button Size or Custom Size
_Location Offset_ When **Area Size** is set to Custom Size, you can configure the offset of the click area's center location
_Dimensions_ When **Area Size** is set to Custom Size, you can configure the click area dimensions

### (4) Recommended Configuration

Button sizes can be defined based on functional priority. The recommended values are as follows:

Button Priority (Lower number = higher priority)Description Recommended Size Example
Level 1 Core actions in the interface, such as upgrading equipment or enhancing characters Width: As needed

Height: 48–52 (R ecommended Range)![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/50144e11-538e-4eeb-aff1-878a6cc5bc38.png)
Level 2 Secondary actions, such as viewing details Width: As needed

Height: 32–40 (Recommended Range)![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/6e3e4b49-5cbd-4614-a605-74caae782ded.png)
Level 3 Informational or hint buttons, such as [?]Width × Height: Recommended 32 × 32![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh72uu0inf60/c87daa56-1574-41a3-8f58-b7990fac02dd.png)

# **III. Additional Notes**

Custom Buttons cannot respond to multiple mappings that use the same key at the same time. By default, response priority is determined by creation order, with the most recently created button taking priority. If Custom Buttons are dynamically added or removed during stage runtime through Node Graph logic, this response priority will also change accordingly.

[Image Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2oih9jou22)[Custom Switch Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkrafr3w6um)
