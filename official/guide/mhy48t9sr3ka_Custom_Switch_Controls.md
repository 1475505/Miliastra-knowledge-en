---
id: mhy48t9sr3ka
title: Custom Switch Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkrafr3w6um
language: en
scope: guide
crawledAt: 2026-05-31T16:21:22.881Z
---

# Custom Switch Controls

# I. Custom Switch Features

_Custom Switches_ can be toggled on and off either by clicking them or through their mapped custom variables, thereby triggering different functional logic

# **II. Editing Custom Switches**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/dad47e0c-7984-479b-8fb5-3358572d13eb.png)

## **1. Add a Custom Switch**

In the _UI Control Group Editor window_, add the UI Control Template - Custom Switch

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/adb16f49-2e10-4a19-a02d-21fdb181b3e1.png)

## 2. Custom Switch Settings

### (1) Basics

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/bab74fb9-188d-4730-a7cd-87946b736c8f.png)

### (2) Styles

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/2c204498-5e42-4e3b-ad5b-a79389b42a17.png)

_Style_: Available options are _Preset Style_ and _Custom_



**Preset Styles**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/d6554ff4-2bea-482b-b797-41ed09ea06a2.png)

Choose from a variety of preset button styles. Some preset styles support customizing the icon, color, text, etc.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/c1404f31-83ad-4271-8897-d6f4ef9da284.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/5c21ab3f-3203-43b2-a081-3fa5a1b1d260.png)



**Custom Styles**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/b22153a7-c2c4-46c3-b110-70e29313dc7f.png)

Assets for the Default, Hover, and Pressed states can be configured freely

State Description Style Features Example
On – Default Non-interactive state/![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/0af45990-d196-4100-b75b-33b6b0f67475.png)
On – Hover When the cursor hovers over the button during keyboard and mouse input Typically indicated by an outline, a slightly brighter color, or a subtle increase in size to signal that the button is interactive![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/a687f4a6-5690-4695-b883-c3be28302a64.png)
On – Pressed When the button is pressed during keyboard and mouse or touch input Typically indicated by a color change and a slight decrease in size to show that the button is being interacted with. When released, it returns to the Default state![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/8e3cc308-044a-4ab3-8397-43271f20588d.png)
Off – Default Non-interactive state/![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/34b12f94-3d71-4b66-a9ec-c80a8f0f3c09.png)
Off – Hover When the cursor hovers over the button during keyboard and mouse input Typically indicated by an outline, a slightly brighter color, or a subtle increase in size to signal that the button is interactive![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/7c528f00-27e4-479a-baa9-62fba40b65ac.png)
Off – Pressed When the button is pressed during keyboard and mouse or touch input Typically indicated by a color change and a slight decrease in size to show that the button is being interacted with. When released, it returns to the Default state![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/c58ac11d-92ad-4164-af27-85c730b2e7ef.png)

### (3) Functions



**Key Settings**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/f18a4d8e-1b0f-4e1f-b206-81001cafcd1d.png)

Configuration Parameters Description
_Switch Custom Variable Mapping_ Supports configuring a mapped Player Boolean Custom Variable

When the Custom Variable changes, the switch updates accordingly
_Key Mapping - Keyboard & Mouse_ Configure the PC shortcut mapped to this switch
_Button Hint Offset - Keyboard & Mouse_ Configure the display offset of the hint shown when the cursor hovers over the switch
_Key Mapping - Gamepad_ Configure the gamepad shortcut mapped to this switch
_Button Hint Offset - Controller_ Configure the display offset of the hint shown when the switch is focused with a controller
_Enable SFX_ Plays the configured sound effect when the switch is turned on
_Disable SFX_ Plays the configured sound effect when the switch is turned off



**Click Response Area**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/ddd223ce-5c89-48a8-824c-c5b397c576e2.png)

The click area can be configured only when the Style is set to Custom

The click area can be adjusted by dragging it directly in the editing window

The actual trigger area is determined by the configured range of the click area

Configuration Parameters Description
_Clickable_ If disabled, this button cannot be clicked
_Click Area Preview_ When enabled, the light yellow area in the corresponding control in the editing window indicates the click area

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhy48t9sr3ka/f02f9778-59ea-4c17-aaa3-b46c65c6843b.png)
_Area Range_ Supports using Match Button Size or Custom Size
_Location Offset_ When **Area Size** is set to Custom Size, you can configure the offset of the click area's center location
_Dimensions_ When **Area Size** is set to Custom Size, you can configure the click area dimensions

[Custom Button Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhtpwgitsigc)[Floating Interaction Page Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2u2e9o3jn6)

1
