---
id: mhs6ivixi684
title: UI Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnapxrumtzy
language: en
scope: guide
crawledAt: 2026-05-31T16:38:07.890Z
---

# UI Controls

# I. What are UI Controls?

UI controls are the basic assets used to design and implement various text boxes, icons, or special functions in the [UI Layout](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhozt0r74ng6)

# II. Characteristics of UI Controls

Each UI Control serves a specific purpose; details are provided in the sections below.

UI Controls can be configured directly in the Interface Layout to take effect by default, or edited into UI Control Group Templates for use.

A UI Control's runtime display depends on the UI layout.

# III. UI Control Categories

UI Controls are divided into _Built-in UI Controls_ and _Prefabricated UI Controls_

Built-in UI Controls are essential flow controls during stage runtime, or functional controls tied to game logic

Prefabricated UI controls deliver granular UI assets that can be edited and combined to form more customized controls groups

## 1. Built-in UI Controls

### (1) Built-in UI Controls Overview

Built-in UI Controls are default elements in the UI layout; most are tied to game logic. For example, tab controls are invoked via Tab components.

They can't be removed, moved, or resized, and only allow limited configuration edits.

Some Built-in UI Controls support visibility toggles.

### **(2) Reference to Built-in UI Controls**

UI Controls that exist by default in the UI layout; no manual addition needed

Some Built-in UI Controls persist at stage runtime by default, while others are invoked on demand by the game logic

### **(3) Built-in UI Control Assets**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/758bec7a-ba22-4965-a4a7-f70fabe3c744.png)



**Mini-map**

Located in the upper left corner of the UI layout

During stage runtime, if conditions are met, entities with[Mini-map Markers](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0pppib5eyc) will be displayed in the Mini-map UI Control, and content will be shown according to component configuration



**Skill Area**

Button used to activate character skills during stage runtim



**Team Info**

Displays information for the player characters running the same stage together



**Character HP Bar**

A UI Control that displays the current character's HP during stage runtime



**Joystick**

A UI Control that allows players to move their character on mobile devices during stage runtime



**Creation's HP Bar**

A UI Control that displays the creation's name and HP during stage runtime



**Exit Button**

Button used to interrupt/exit the stage during stage runtime



**Tab**

During stage runtime, it is linked with the [Tab](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh5jko05fzyw)components

When the component configuration conditions are met, the corresponding information will be displayed



**Chat Button**

Key used to open the chat window while the stage is running



**Network Status**

UI Controls that display real-time network status during stage runtime



**Struggle Button**

A UI Control that indicates the character is currently in a struggle state



**Voice Chat Button**

A UI Control used to access voice chat settings while the stage is running



**Voice Chat Hint Queue**

A UI Control used to display, in real time, which players are currently speaking over voice chat while the stage is running

## 2. Prefabricated UI Controls

### **(1) Prefabricated UI Controls Overview**

Prefabricated UI controls can be placed directly in the UI layout to take effect by default, or edited as reusable UI controls group templates.

### **(2) Using Prefabricated UI Controls**

In the UI Control Library, you can edit UI controls assets into UI controls group templates and invoke them through node graphs

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/40a3dc0b-7519-4afb-9538-17aa135c49b2.png)

In the UI layout, reference UI Control assets via [Add UI Controls] so they take effect with the layout

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/ee6689b7-cb67-4b04-8b56-ae0e36d9f40a.png)

### **(3) Prefabricated UI Control Assets**



**Interactive Button**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/4be67ded-80c4-4f2a-9ac5-0d069dc2eeec.png)

During stage runtime, clicks or external device inputs can trigger UI control interactions.

Supports Player interaction and, after the interaction, sends the following event to the Node Graphs:"On UI Control Group Triggered" event

For details, see [Interactive Button UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwkfsitckrw)



**Item Display**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/5f1ad5be-fe4f-4d90-abdb-42fd68bab5a0.png)

During stage runtime, clicks or external device inputs can trigger UI control interactions.

Supports Player interaction and, after the interaction, sends the following event to the Node Graphs:"On UI Control Group Triggered" event

For details, see [Item Display UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhjja1ipq9ck)



**Text Box**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/8d761ab6-19b1-4469-a8c0-c8b3a6e4291c.png)

During stage runtime, display pre-edited text content.

If the text content contains _Custom Variable_, it will update the display in real-time.

For details, see[Text Box UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhnltrr3g966)



**Pop-up**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/41a78c17-db08-4196-b476-376a8db35c4f.png)

An interface that appears during stage runtime through logic triggers, used to provide players with important information, hints, options, or interactive functions.

For details, see [Pop-up UI Control](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhen7r0djxkg)



**Progress Bar**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/64c442c6-ba5b-4d4c-9d4e-95d10aea0150.png)

During stage runtime, displays a real-time fill percentage of the tracked variable within its default configured range.

For details, see [Progress Bar UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwpzpixrad0)



**Timer**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/4e17dcfa-4a76-4866-b75e-055af80ea720.png)

An interface for displaying time progress, with two modes: countdown and stopwatch.

For details, see [Timer UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhnrdor7uyra)



**Scoreboard**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/595a3478-3abb-46d5-919d-48c83371dc95.png)

Displays the player's custom variables during stage runtime and ranks them based on those values

For details, see [Scoreboard UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhesro0hyn5k)



**Deck Selector**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/a9685cce-e4bf-404d-876f-0ef479bd3cd9.png)

The Selector Panel provides a simple interface for editing decision interactions

Supports editing of decision content, including decision timing, presentation of decision options, and decision interaction methods

For details, see [Deck Selector UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh2teu0bmfbc)



**UI Animation**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/a2acb4dd-4ddf-4ba1-9f48-f322fc32f63d.png)

A type of UI Control that can be configured in the UI Layout, and display the corresponding special effects in the UI Layout. It is used to beautify the interface and enrich its visual presentation

For details, see [Interface Special Effects UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh2iyk9fa4gy)



**Fullscreen UI Animation**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/7a27ad5f-c7ca-48c5-b492-41c6ad304210.png)

A type of UI Control that can be configured in the UI Layout, and display the corresponding special effects in the UI Layout. It is used to beautify the interface and enrich its visual presentation

For details, see [Full-Screen Special Effects UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhbn4i09l5ns)



**Image**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/8cabb294-7012-4a2d-91a9-15de0e847fa8.png)

A type of UI Control that can be configured in the UI Layout, and display the corresponding special effects in the UI Layout. It is used to beautify the interface and enrich its visual presentation

For details, see [Image UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh2oih9jou22)



**Custom Button**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/cb0ac831-3bc1-477e-b804-60ab8acff039.png)

A special interactive button whose icon and displayed text can be configured

For details, see [Custom Button UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhtpwgitsigc)



**Custom Switch**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/6c68471b-2065-40f1-b8c6-8676bc908059.png)

A switch that can toggle between on and off states through clicks or its mapped custom variable, thereby triggering different functional logic

For details, see [Custom Switch UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhkrafr3w6um)



**Floating Interaction Page**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/d8d5fa01-3421-4563-970b-35388a982773.png)

Offers a range of advanced configuration options, including tabs and single-choice windows, to help Craftspeople configure more complex related interfaces. Supports adding various buttons and switches to enrich functionality and presentation

For details, see [Floating Interaction Page UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh2u2e9o3jn6)



**Special Number**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/7bbfa2ce-1572-4fe5-a4de-7e4ca8da07b5.png)

Can be configured in the UI Layout and supports displaying a variety of skill-related data

For details, see [Special Numeric Values UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhkwucr8awfq)

### **(4) General Data Configuration for Prefabricated UI Controls**

#### a. Index

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/419eb9f9-a26c-49a6-853a-92da3e163e89.png)

When a UI Control is saved as a UI Control Template, it is assigned an index so it can be referenced in Node Graphs

Configuration Parameters Description
_Index_ The unique identifier for this UI Control Template, used to reference it in Node Graphs

#### b. Transform

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/6bed3194-5aac-4cc8-83da-3a135989627c.png)

Configuration Parameters Description
_Device_ Includes keyboard and mouse, mobile touchscreen, console controller, and mobile controller
_Location_ Supports manually entering the UI Control's location

It can also be adjusted by dragging the UI Control in the editing interface
_Size_ Only some UI Controls support this setting
_Zoom Factor_ Supports adjusting the scale ratio on the X and Y axes
_Rotate_ Supports mirroring, flipping, and rotation on the Z axis
_Waypoint Settings_ Click to expand and select the desired waypoint location. When the screen resolution changes, the relative location will be maintained based on the waypoint

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/89c33d39-fada-4fc5-81d3-b4d9ee82c4cd.png)
_Center_ Supports configuring the rotation center point location. During rotation, this point is used as the center

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/7494a79c-cdc0-4f38-9b11-2301a3d01af1.png)
_Layer_ The higher the value, the higher the display order
_Initial Visibility_ If unchecked, the UI Control will not be visible after activation

This parameter can be adjusted through the node [Modify UI Control Group Status]

## 3. Asset Library

The Asset Library is a referenced resource that supports Craftspeople in freely combining UI Controls. This resource can also be directly referenced by functions as an image asset

The Asset Library can be referenced in **Custom Switches, Custom Buttons, Floating Interaction Pages, Tabs, single-choice windows, and Image Controls**

### **(1) Overview of Controls in the Asset Library**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/65291a6b-f9b7-4056-aede-d17d66580c8b.png)

The Asset Library supports the following UI control templates: Text Box, UI Animation, Image, and Special Number

The Text Box used in the Asset Library is slightly different from a regular Text Box

#### a. Special Asset Library UI Control - Text Box

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/2cc2a280-9bcd-4c9c-9251-8140628d1f9b.png)

The Insert Variable feature of the Text Box supports configuring both basic player custom variables and formal variables declared in the Floating Interaction Page

If formal variables are configured, their values will be assigned based on the custom variables linked at the actual reference point in each Floating Interaction Page, so they do not need to be configured repeatedly

### **(2) Asset Library - Asset Group Mask Feature**

Asset groups support mask configuration, so that only the portion within the mask is retained for use

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/b214f97f-16eb-47b9-845a-1853aaf43269.png)

Configuration Parameters Description
_Enable Mask_ Other settings become available only after this option is enabled. When enabled, only the masked area is displayed.
_Mask Shape_ Available options are Rectangle and Circle

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/e71a926d-58be-467d-8383-7966a2a660b7.png)

For example, setting the shape to Circle produces the following effect:

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/40918789-a7d8-4a61-90e3-e0d2368c0497.png)![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/6341a665-50d0-4030-a511-ed3b219fcd0c.png)
_Location_ Center Position of the Mask
_Size_ Size of the Mask

# IV. Rendering Modes for UI Controls

In Version Luna V and earlier, the rendering of UI controls depended solely on creation order, and the Layer parameter did not take effect. This issue was fixed in Version Luna VI, and two rendering modes are now provided: "Sequential Rendering (Legacy)" and "Layered Rendering (New)." You can click the location shown in the illustration in the Manage UI Control Groups panel to switch between them.

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhs6ivixi684/66d2b917-4ee6-48d8-8bc5-6a0f46570c7c.png)

**Sequential Rendering (Legacy):**Uses the original rendering logic. In this mode, UI controls are rendered based on their creation order. Stage saves created before the Version Luna VI update, as well as published stages, default to this mode. If you need to modify the controls, newly added controls may have display layer issues, so it is recommended to switch to Layered Rendering Mode (New). If no changes to the controls are needed, you can keep using this mode.

**Layered Rendering (New):**A new rendering logic introduced in Version Luna VI. In this mode, UI controls are rendered according to their configured layer order, and the layer order of UI controls can be adjusted. Stage saves newly created after the Version Luna VI update default to this mode. This mode is recommended if you need to modify controls in old saves or create new saves.

In addition, please note that future versions will no longer maintain the behavior of newly added controls in Sequential Rendering Mode (Legacy). Craftspeople are advised to use Layered Rendering Mode (New) for creation after the Version Luna VI update.

Recommended Fixes When Switching from Sequential Rendering (Legacy) to Layered Rendering (New)



Check layer settings: controls with higher layer values are rendered on top. If multiple controls share the same layer, they are rendered in creation order, with later-created controls appearing above earlier ones.



In Layered Rendering mode, if a control in the UI layout has a lower layer than an active control in the UI Control Library, and the original behavior relied on creation order (for example, ensuring main screen controls appear above template controls), it is recommended to convert those controls into templates and manage their display order through layer settings instead.

[Skill Animation](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh57xz9afh7e)
