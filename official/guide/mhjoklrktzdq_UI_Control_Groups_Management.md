---
id: mhjoklrktzdq
title: UI Control Groups Management
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhewyi0fjfvs
language: en
scope: guide
crawledAt: 2026-05-31T16:38:02.364Z
---

# UI Control Groups Management

UI Control Groups Management provides unified management of _Interface Layouts_ and _UI Control Groups_.

# I. Entry Point

Click the System menu in the upper left corner and select [Manage UI Control Groups] to open the management interface

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/83f6a135-8f79-4318-9444-369d220a7f22.png)

It is divided into the Menu Bar, Library Window, Details Window, Preview Window, Editing Button Area, and Parameter Configuration Window

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/02a07b4b-202d-45e4-aca0-29b10153c99e.png)

# II. UI Layout Management Tool

## **1. Interface Layout**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/b8e8b9cc-0988-4df2-9665-8c8d5d5d1d08.png)

By default, it includes the "Default Layout" interface, which contains the essential UI Control Groups for Stage execution

The Interface Layout Library cannot be empty; it must contain at least one Interface Layout

When switching between Interface Layouts, you can view the changes simultaneously in the Layout Preview Window

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/76e5c780-a9b0-4e14-b5fe-aa3ac5b7303c.png)

Right-click to copy, paste, or rename

## **2. Interface Layout Details**

The currently selected Interface Layout lists its contents, enumerated based on UI Control Groups.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/ceb53034-3f54-4fdc-922b-ba8b84b4ac30.png)

You can add UI Control Groups to the current Interface Layout through [Add UI Control]

### (1) Inherent Content

This category includes UI Control Groups that are essential for processes and functions.

When managed through the Node Graph, only the display state can be modified; removal is not supported.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/d251b420-c665-4c19-b09e-ff3d1e33f0e0.png)

Position and size cannot be adjusted. Takes effect by default and cannot be changed.

Configuration Parameters Description
_Index_ Unique identifier for the current UI Control Group/UI Control
_Initially Visible_ Whether this UI Control Group is visible when the Stage runs and this Interface Layout takes effect

### **(2) Custom**

Custom or prefabricated UI Controls added through [Add UI Control] belong to this category

When managed through the Node Graph, only _display states_ can be modified; removal is not supported

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/ca0c9a35-e247-4311-9257-da4eaa16994a.png)

Position and size can be adjusted. Takes effect by default and cannot be changed.

Configuration Parameters Description
_Index_ Unique identifier for the current UI Control Group/UI Control
_Initially Visible_ Controls whether this UI Control Group is visible when the Interface Layout takes effect
_Text Box Settings_ Configure the color, font size, and content of the text box

## **3. Interface Layout Preview Window**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/6e1e1b02-79ab-4828-bf73-b01e3a8620b5.png)![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/75ffdd49-82fa-4891-86a9-3bb57232483d.png)

Preview the basic visual effects of the Interface Layout being edited

You can adjust devices for comparison

## 4. Parameter Configuration Window

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/73e34d45-5eaf-4eeb-aa5f-1e0c4ebf812b.png)

The default application configuration for the current Interface Layout, which serves as the default Interface after a Player runs the Stage

[Open Player Editor] will transit to the [Class](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhodlcrpht3q) configuration interface, where you can configure its default Interface Layout

# III. UI Control Groups Management Tool

## **1. UI Control Group Custom Templates**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/ecd11e1e-dca0-4372-9817-00b90bd5a724.png)

UI Control Groups saved as Custom Templates are enumerated here

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/1821975e-bed8-4bc4-b4c9-fdd4795bd726.png)

Right-click to perform operations on the selected custom template



Rename

Rename the custom template for UI Control Group



Delete Template

Delete Selected Template

Delete the template. If there are references, all references (Interface Layouts and UI Control Group Details) will be deleted together.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/ef306489-1fb2-43e4-92ee-f4d5fa815c37.png)

_UI Control Group Details Window_ After saving the UI Control Group being edited as a custom template, it will appear in the _UI Control Group Library_

When a custom template in the UI Control Group Library is selected



If there is no reference to a custom template in the UI Control Group Details, clicking a target in the library will create a reference in UI Control Group Details and select it by default for editing. After editing, you can overwrite the template content or save it as a new template.



If a reference to this template already exists in UI Control Group Details, a single click selects the corresponding reference in "UI Control Group Details" for overwriting and modifying the template content.

## **2. UI Control Group**Details

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/b1715f43-a5e0-46a5-b051-7c419e8275cc.png)

Display enumeration of UI Control Groups being edited

Only UI Control Groups within this window can be edited

Template references in this interface support modifying and saving by overwriting the template

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/287f294a-7224-429b-9346-2ff174859215.png)

Use [Add UI Control Template] to create a UI Control Group based on the prefabricated UI control assets

### (1) UI Control Group

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/2f14c762-5ebe-45b1-8ef4-1af857208521.png)



Select multiple UI Controls/UI Control Groups using the mouse or by holding Shift.



Right-click [Create Combination], or click [Create Combination] in the _Editing Button Area_ to generate a UI control group composite and create an Index.



An individual UI Control can also be directly [Saved] to generate a UI Control Group and generate an index.

### **(2) UI Control Group Preview** Window.



Preview the basic effects of the UI Control Group being edited.



You can adjust devices for comparison

## 3. Editing Button Area

The interaction below the preview window only affects the UI Control Group being edited

### (1) UI Control Group — Multiple UI Controls

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/e271e322-aba3-49c6-9850-c2d314b6280a.png)

Configuration Parameters Description
_Create Combination_ Packages the selected UI Controls into a combination
![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/1da39809-fbdd-4ba1-ab9a-00cf15abd348.png)Delete multiple selected UI Control Groups

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/8c44123b-83ec-4369-a534-207618b75aff.png)

Configuration Parameters Description
_Disband Combination_ Split the group into individual UI Control Groups and delete the combination
![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/1da39809-fbdd-4ba1-ab9a-00cf15abd348.png)Delete this UI Control Group
_Save Changes_ If the group content is modified, you will be prompted to save and overwrite
_Save as Template_ Save the current data as a new UI Control Group template

### (2) UI Control Group — Single UI Control

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/8039da4c-6fb0-4d87-8161-b62c147bce76.png)

Configuration Parameters Description
![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/1da39809-fbdd-4ba1-ab9a-00cf15abd348.png)Delete this UI Control Group
_Save Changes_ If the UI Control Group on this Interface changes, you will be prompted to save (overwrite)
_Save as Template_ Save the current data as a new UI Control Group template

## **4. Parameter Configuration Window**

### (1) UI Control Group — Multiple UI Controls

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/b087bbbf-cb57-4b81-9e6c-30d15e92199a.png)

Configuration Parameters Description
_Initially Visible_ Default display state when the UI Control Group template is activated
_Location_ Location on the Interface Layout
_Size_ Not editable. Represents the maximum bounds of the UI Control Group
_Layer_ Represents the display layer of the UI Control Group

### (2) UI Control Group — Single UI Control

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjoklrktzdq/e60c8355-8040-4491-902c-755cd5f8ee8d.png)

Configuration Parameters Description
_Initially Visible_ Default display state when the UI Control Group template is activated
_Location_ Location on the Interface Layout
_Size_ Not editable. Represents the maximum bounds of the UI Control Group
_Layer_ Represents the display layer of the UI Control Group

[Main Camera](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfua005zpeg)
