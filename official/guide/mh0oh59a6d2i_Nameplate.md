---
id: mh0oh59a6d2i
title: Nameplate
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh5n160t2b6w
language: en
scope: guide
crawledAt: 2026-05-31T16:28:15.903Z
---

# Nameplate

# 1. Functions of Nameplate Component

_Nameplate Components_ support displaying visual information for the specified entities during stage runtime, providing specific information such as entity _HP_, _level_, and other details, as well as directional guidance, distance display, and other visual indicators.

## **1. Overview**

The nameplate component needs to be mounted to entities. Supports usage of _characters_, _objects_, and _creations_.

The nameplate component allows multiple nameplates to be active at the same time.

Nameplates can be enabled or disabled via default configuration, or controlled individually through the _node graph_; the visibility of the specific nameplates can also be adjusted using the _local filter_.

## **2. Details**

**The actual nameplate display** includes both the _nameplate_ and the _navigation indicator_

**Nameplates**

Can be occluded by the environment

On the same physics layer as the entity

**Navigation Indicator**

Not occluded by the environment

Above Interface Layout layer

# **II. Editing** Nameplate Components

## **1. Add Components**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/b61dc046-aec7-4d2b-b6c1-ed941daf636a.png)

(1) In the entity/prefab editing interface, open the Editing Components tab

(2) Click **"**Add Components**"** below, select and click "Nameplate" to add it

When the nameplate is selected, the entity being edited will display all currently active nameplates of the nameplate component and their stacking behavior.

(3) Click **"**Advanced Editing**"** to expand the editing tab

## **2. Editing** Nameplate Components

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/63cbb5ae-0cb6-431e-a1c0-8fd182f3ff28.png)

Configuration Parameters Description
_Initially Effective Nameplate_ The dropdown menu provides nameplate enumeration

By modifying the checkbox behind, you can change the effective status. After modification, the effective status will be synchronized to the nameplate editing tab

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/b404aabd-1c28-49f9-abcb-35186ba3aecc.png)![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/1e7a9c9e-dad8-4f07-ace8-daad9780c860.png)
_*Nameplate List_ Enumerates all nameplates configured for the entity

# **III. Editing** Nameplates

## **1. Adding** Nameplates

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/2d7a1ce7-32ad-46f3-a57e-d0431bc02f53.png)



Click ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/568fec50-2955-4e49-abf1-7f16fb2e01b2.png)to add a nameplate.

The added nameplate is **initially effective** by default.



Nameplate X, where X is the nameplate ID, can be used as a node input to adjust the initial activation parameters of the nameplate.

## 2. Editing Nameplates

### (1) Select the Nameplate submenu

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/55d84e9f-a50b-4404-9630-c8fcf9296c36.png)

### (2) Basic Settings

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/cb5471fd-ec50-4639-89f5-04cc0c29ad7b.png)

Configuration Parameters Description
_Select Attachment Points_ Select the preset _attachment point_ of the entity, or a custom creator attachment point.

Can be selected from the dropdown menu. The nameplate position will be adjusted based on this point as its base location.
_Visible Radius (m)_ The effective range of the nameplate. The nameplate logic will only run when the character and the entity are within this configured distance.
_Filter Node Graph_ Can reference the local filter node graph to determine whether the nameplate is visible on the local client. For the specific distinctions and usage of the two filters, see [Node Graphs](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhjwjrr5n73i).
Selection Type: Boolean When the local filter returns a value of "true", the associated nameplate will be visible to the local client
Selection Type: Integer

Effective Integer Range: Configure an integer list as needed When the local filter returns a value within the effective integer range, the associated nameplate will be visible to the local client
Explains the basic nodes in the local filter node graph



Get Self Entity

Output parameter is the entity with nameplate component mounted



Get Self Entity

Output parameter is the character entity within effective range of nameplate

Retrieval succeeds only if the character entity is equal to the local client character



Get Current Character

Output parameter is the local character
_Initially Effective_ Whether to enable simultaneously with object creation

If multiple nameplates are enabled simultaneously, overlapping may occur.

### (3) Nameplate Content

The nameplate offers the following independent types of editable content and supports both individual and combined use of these content types, with adjustable position, size, and detailed data for each item.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/039c19ea-fb89-43ed-9fe5-9076e919699f.png)

You can add content items to the nameplate with **"Add Content"**.

Use ![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/95da5587-ff99-4f96-8623-b3f4641378aa.png)to adjust the visibility of the specified items in the edit mode.

Use ![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/67948bc5-89ac-40fc-9d9f-54377f8798a8.png) to copy, paste, delete and perform other operations on the selected items.

#### **a. Text Box**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/87340ecb-6e7b-48a1-ba31-fa52501eaf48.png)

Configuration Parameters Description
_Offset_ Adjustable offset based on the attachment point selected in basic settings
_Size_ Adjust the size of text box
_Background Color_![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/37afb8a9-e12c-4090-8033-9a54e1ef5777.png)

Supports setting a transparent or black semi-transparent background color
_Font Size_ Font size configuration
_Text Content_ Display text editing

Supports adjusting the alignment of the text content

Supports **variable insertion**. Selecting a custom variable for the specified entity will update it in real time within the text box

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/c1d9fdf0-b8f2-432a-8fdf-dc16668e6dc3.png)

If the configured text content exceeds text box range, it will not be displayed

Insert the referenced custom variables in rich text format, using the following format:

**{Type:Prefix.VariableName}**

Type:

1: When referencing a custom variable of the entity itself.

2: When referencing an attribute of the entity.

Prefix:

s: When the billboard is attached to a non-character/player entity.

a: When the billboard is attached to a character entity.

p: When the billboard is attached to a player entity.

Variable Name:

When referencing a custom variable, use the name of the custom variable you want to reference.

When referencing an entity's attribute, use the following variable names:

Current HP: HpCur

Maximum HP: HpMax

Current ATK: AtkCur

Current DEF: DefCur

Current Level: LvCur

Player Nickname: PName

Distance to Player: PDist

#### **b. Icons**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/9784537f-fd83-41ca-9f08-a661dc93dcd1.png)

Configuration Parameters Description
_Offset_ Adjustable offset based on the attachment point selected in basic settings
_Size_ Adjust the size of the icon
_Icon Type_ Custom Icon Icon must be additionally selected for usage

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/b314f54b-4941-46e1-ad83-1caa564f4ada.png)
Use Faction Icon Repeated icon selection unnecessary. The entity's Faction Icon will be read and applied accordingly

#### **c. Progress Bar**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/da7eec1a-6e3b-4878-b3d9-6569ee421f60.png)

Configuration Parameters Description
_Offset_ Adjustable offset based on the attachment point selected in basic settings
_Shape_ Horizontal![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/75166945-c5a1-4a25-8e69-3d651642867a.png)

Supports setting width and height
Vertical![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/4e790d7f-05ab-40d3-af6f-0fdb440b72d0.png)

Supports width and height configuration
Ring![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/ad9acd05-deb6-44a9-9ec8-0d74b7fa353d.png)

Supports diameter configuration
_Size_ Progress bar size adjustment
_Progress Bar Style_ Percentage Displays progress as a percentage based on 1:1 scale, with integer precision

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/1f8e39c5-a883-4b4c-8053-6e7467a117e9.png)
Do Not Show Hide progress hint text

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/7e9bac3e-bb9a-467d-a623-746ba31b9e6d.png)
Current Value Display current value in real-time

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/4f0c7ad0-5833-40d4-b88b-2d605ee73775.png)
1:1 Scale Display actual ratio in real-time

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/b2d765ce-18d2-457b-893a-5bc06bd83edc.png)
_Color_ Can be selected from preset colors
_Current Progress Value_![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/e85a92ac-26ce-4437-b7a0-2ae79ae90daf.png)

Supports selection of custom variables for the mounted entities and stages
_Minimum Value_ Supports selection of custom variables for the mounted entities and stages
_Maximum Value_ Supports selection of custom variables for the mounted entities and stages
_Progress Bar Smooth Transition_ When enabled, the progress value change will be animated over the transition duration.
_Transition Duration (s)_ When the current progress value changes, the visual transition will be complete within the configured time.

#### **d. Timer**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/e4e4efc8-347d-480e-abb1-d76751b09df8.png)

Configuration Parameters Description
_Offset_ Adjustable offset based on the attachment point selected in basic settings
_Type_ Stopwatch, Countdown
_Specify Timer_ Enumerates all predefined global timers that match the specified type

#### **e. HP and Shield**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/fa5d72d3-2967-452f-8f6d-355ca94d091c.png)

Configuration Parameters Description
_Offset_ Adjustable offset based on the attachment point selected in basic settings
_Size_ Adjust HP bar size
_HP Display Style_ Do Not Show Hide HP bar
Progress Bar![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/7e9bac3e-bb9a-467d-a623-746ba31b9e6d.png)
Progress Bar + Value![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/b2d765ce-18d2-457b-893a-5bc06bd83edc.png)

Value is precise to two decimal places
_HP Color_![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/f071a732-0ff3-4a64-b7a6-795930868d44.png)

The progress bar will display with the color configured in the settings.
_Shield Display_ Do Not Show Only show HP bar
Display Separately![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/0f9b3786-e703-4349-9b2f-95180218ec87.png)![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/7c63927c-f3ab-48e0-b9c7-d4e2949e76f9.png)

If the shield is configured to display separately, the shield bar control will appear below the health bar.
Mixed Display![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/14dfb636-03c6-4b1e-8404-e333a785f995.png)![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/58ef9015-e262-463c-9050-8ecc5d1d00db.png)

If configured for mixed display, the progress bar will show both the HP value and the shield value simultaneously, with the shield value displayed to the right and the HP value to the left, according to the deduction priority.
Show Shield Display Maximum Value If checked, when the shield value exceeds the configured maximum, the shield bar will always display as full.
Shield Display Maximum Value This configuration is only available when **Show Shield Display Maximum Value** is checked.

The shield display maximum value will be adjusted to the configured limit value. Any shield value exceeding this limit will continue to display as full.

The shield bar will show the deduction only when the shield value is less than the configured limit value.

#### **f. Interrupt Intake Value**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/bc086afe-f58b-447b-8d11-2cf68c87f516.png)

Configuration Parameters Description
_Offset_ Offset can be adjusted relative to the attachment point selected in Basic Settings
_Size_ Adjust the size of the Interruption Gauge
_Interrupt Intake Value Calculation_ Can be increased or decreased
_Interrupt Intake Color_ Can select from preset colors

## 3. Editing Navigation Indicators

### (1) Select the Navigation Indicator submenu

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/bcd37fa3-a728-4f7e-904a-c398562191dd.png)

### (2) Basic Settings

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/3f1a323d-94ea-45f6-b684-27485102f11d.png)

Configuration Parameters Description
_Offset_ Adjustable offset based on the attachment point selected in basic settings
_Maximum Visible Radius (m)_ Maximum effective range of indicator
_Minimum Visible Radius (m)_ Minimum effective range of indicator
_Hide Indicators When Nameplate Is Displayed_ When enabled, the indicator will not be displayed when the nameplate is in effect, allowing for a smooth transition between nameplate and indicator display.

### (3) Navigation Indicator Content

The navigation indicator provides two independent types of editable content, which can be used separately or in combination. Each type supports adjustments to position, size, and detailed data.

Use **Add Content**![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/f23a370d-aa31-4f03-8223-48171e81ad94.png) to add items to the navigation indicator.

Use ![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/95da5587-ff99-4f96-8623-b3f4641378aa.png)to adjust the visibility of the specified items in the edit mode.

Use ![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/67948bc5-89ac-40fc-9d9f-54377f8798a8.png) to copy, paste, delete and perform other operations on the selected items.

#### **a. Text Box**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/1e5ccadc-4e5e-41ef-b9b7-dc9c6e8391e7.png)

Configuration Parameters Description
_Size_ Adjust the size of text box
_Background Color_![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/8e442a76-b52d-4ee6-88e3-81a35b530d69.png)

Supports setting a transparent or black semi-transparent background color
_Font Size_ Font size configuration
_Text Content_ Display text editing

Supports **variable insertion**, select custom variables for the specified entities, which will update in real-time in the text box

Supports adjusting text alignment effects

If the configured text content exceeds the text box range, it will not be displayed

#### **b. Icons**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/0fb86824-8e82-4e0c-9cf4-dfad7ec328a6.png)

Configuration Parameters Description
_Size_ Adjust the size of the icon
_Icon Type_ Custom Icon Icon must be additionally selected for usage

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/181bb9de-da3f-4c42-9985-73180e83ec8b.png)
Use Faction Icon Repeated icon selection unnecessary. The entity's Faction Icon will be read and applied accordingly

# **IV. Managing Nameplates Through Node Graph**

During entity runtime, its active nameplates can be managed through the node graph



**Set Entity Active Nameplate**

The Nameplate Config ID List entered through the node will completely override the target entity's active nameplate

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0oh59a6d2i/0052b1fe-7e42-428c-8fb6-9dfc63895208.png)

Configuration Parameters Data Type Description
_Target Entity_ Entity Runtime entity
_Nameplate Config ID List_ Configuration ID List

[Sound Effect Player](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwiv89yra02)[Text Bubble](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwtz297kp6a)
