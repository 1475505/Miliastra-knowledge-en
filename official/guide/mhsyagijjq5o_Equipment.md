---
id: mhsyagijjq5o
title: Equipment
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkl2yin0cxo
language: en
scope: guide
crawledAt: 2026-05-31T16:22:16.382Z
---

# Equipment

# I. Definition of Equipment

Equipment is a sub-type of items that is managed through the inventory like regular items. The difference is that equipment can be equipped in Equip Slots to provide attribute bonuses or additional logic functions for the wearer

# II. Editing Equipment

## 1. Create New Equipment

Similar to the item editing tab, click "New Item" as shown in the graph below

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/9225c6c0-7fe0-41a2-964c-bef3a379364b.png)

In the pop-up, scroll down to [Select Type] and choose Equipment to create a new equipment template

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/88a0f4c7-7fcf-4846-9a69-af22871a1300.png)

## 2. Basic Settings

The basic settings of equipment are similar to regular items, but stacking configuration is not supported. Refer to [Item](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhbgx0rspbqu)

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/dcd2ca67-98e1-483a-bd07-a5299105c8e2.png)

## 3. Interaction Settings

Interaction settings support additional settings for equipment types.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/30e73a97-85f1-42ce-a104-27f1b621e6d4.png)

_Equipment Type_: Equipment type can be defined in the Equipment Type tab. When attempting to equip an item, the _Equipment Slot_ must support that equipment type in order to equip

_Show Type in Details_: Whether to display the equipment type information on the interface during gameplay

_Show Tags in Details_: Whether to display the equipment's tag information on the interface during gameplay

_Select Tag_: Here you can select the _tags_ that this equipment should have from all pre-configured equipment tags

_Select Initial Affixes_: Here you can select the _initial affixes_ that the equipment should carry from all pre-configured equipment affixes

## 4. Equipment Type

Equipment type is an attribute of equipment that is referenced by two working functions:

_Equipment Template_: Defines the type of the equipment itself

_Equipment Slot Template_: Defines which types of equipment can be equipped in each Equipment Slot

When there is a non-empty intersection between the type list configured in the equipment template and the type list of Equipment Slots, i.e., when any type matches successfully, the equipment can be successfully equipped

Enter the editing interface via _Manage Equipment Data_ as shown in the image

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/ba4b798c-919d-4998-a155-8fdc53a21a79.png)

Enter the Equipment Type tab to edit and add equipment types

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/4187080c-b7f6-47ca-ae5b-3f060f236a04.png)

_Type Name_: Name defined by the user for the type

_Configuration ID_: Unique identifier for equipment type data

_Reference List_: View all equipment templates using this type

## 5. Equipment Tags

Tags are visible annotations for equipment that can be used by creators (Craftspeople) to convey the characteristics of the equipment to players

In the Tags tab of Manage Equipment Data, you can define equipment tags so they can be referenced by equipment templates:

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/32c938a4-ec10-4930-baa9-32cefcef823b.png)

_Tag Name_: Name defined by the creators (Craftspeople) for the tag

_Configuration ID_: The unique identifier of the equipment tag data

_Reference List_: View all equipment templates using this tag

## 6. Equipment Affixes

Equipment affixes are the only source of equipment attribute bonuses and mechanical bonuses. Each piece of equipment can have multiple affixes. Based on the affix configuration, when the equipment enters the inventory or is equipped, the bonuses provided by the affixes will be applied to the owner or wearer entity

In the Affixes tab of Manage Equipment Data, you can define equipment affixes that can be referenced by equipment templates:

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/c521fb53-2beb-4885-a2f5-3b1b79b49529.png)

_Affix Name_: Name defined by the user for the affix

_Configuration ID_: The unique identifier for equipment affix data

_Reference List_: View all equipment templates using this affix

**Affix Attributes**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/d2273fa7-3178-4c53-827c-36c4ca21c365.png)

_Effective Timing_: The timestamp when the affix's bonus effects will come into effect

_Effective When Obtained_: Takes effect on the inventory owner as soon as the equipment enters their inventory

_Effective When Equipped_: Only takes effect on the wearer when equipped in an Equipment Slot

Affixes are divided into different types, each providing different bonuses



_Base Attributes Bonus_: Provides basic combat attribute bonuses

_Select Attributes_: Choose a specific combat attribute to apply a bonus to. The bonus attribute type provided by each affix is unique

_Bonus Type_: There are two types — _Random Value_ and _Fixed Value_. Random value bonuses will randomly select a value within the creator-configured range as the final bonus, whereas fixed value bonus will use the specific value configured by the creator (Craftsperson) as the final bonus

_Random Value Range_: When the bonus type is set to random value, the creator (Craftsperson) can configure the upper and lower limits of the random range

_Fixed Bonus Value_: When the bonus type is set to fixed value, the creator (Craftsperson) can configure the specific bonus amount

_Description Type_: When viewing equipment during gameplay, the specific description of the affix will be displayed on the interface. Creators (Craftspeople) can use preset description text or edit the affix description by themselves

_Fixed Description_: Use preset description text, which can only be used on affixes with base attribute bonus types

_Display Random Value Range in Description_: When enabled, the configured random value range will be shown at the end of the fixed description

_Custom Description_: Creator-defined description. After selecting this, you can input text in the text box below

_Insert Variable_: Insert placeholders in the affix description text to display the bonus range and actual bonus values



_Apply Node Graph_: Provides creator-defined node graph logic

_Related Node Graph_: When the entry type is "Assign Node Graph", you can select the Node Graph to be assigned



_Apply Unit Status_: Affixes can be bound to a unit status

_Corresponding Unit Status_: When the affix type is Apply Unit Status, you can select the unit status to be related

# III. Equipment Entities

When equipment is not picked up, it exists as a template in the loot component. When the equipment template is first obtained and enters the inventory, it will be initialized. At this time, the affix values will be randomized, and a _When_ _Equipment Is Initialized_ event will be triggered. The event output parameter will return the unique index of the equipment entity, through which the equipment's attribute affixes can be dynamically modified. If Creators (Craftspeople) have custom equipment initialization rules, they can also write their own logic in this event to override the preset random rules

# IV. Equipment Slots

Equipment Slots are containers for equipment. Equipment affixes trigger depending on equipment behavior

## 1. Equipment Slot Template

Used to define the style, quantity, and equipment tags for each Equipment Slot. Enter the editing interface through the [Currency and Inventory] button

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/e8290c81-8ee8-4087-b846-b17ebbae783e.png)

Enter the Equipment Slots tab to edit templates

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/f0529038-e2b9-4f9c-a2b1-3a236b788799.png)

_Template Name_: Name defined by the creators (Craftspeople) for the equipment slot template

_Configuration ID_: Unique identifier for Equip Slot template data

_Equipment Slot Style_: By clicking the "+" icon, you can dynamically stack Equipment Slots. After adding, you can configure detailed settings for each Equipment Slot

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/8e072b2d-8c55-4bd0-ba42-6587175f84ee.png)

_Slot Settings_: Settings for individual Equip Slots

_Current Slot Name_: Creators (Craftspeople) can name the slot, which will be displayed at the bottom of the slot interface

_Equippable Types_: Select the types of equipment that can be equipped in this slot

_Icon_: The background graph displayed in the slot when no equipment is equipped

After configuration, an Equipment Slot will appear as shown in the graph below:

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/c025a983-f4f2-4616-96a4-15141685897b.png)

## 2. Equipment Slot Component

Equipment Slot Components can only be added to characters

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/3b395fad-5218-4b55-98a2-e70bae85b5d6.png)

Select Add Common Component > Add Equipmet Slot Component to add

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/a4e7b70a-d1e8-449f-9132-347915c7e834.png)

The component interface is shown below

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/2849e23a-4afc-4fbf-849d-261ea803b59d.png)

_Equipment Slot Template_: References pre-defined Equip Slot templates

# V. Modifying Equipment Attributes in Node Graphs

## 1. Equipment Related Execution Nodes



Modify Equipment Affix Value

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/81a11b3c-a989-4fb5-932c-513638b3e3ab.png)



Remove Equipment Affix

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/836bfb98-98d0-49f2-840e-cedc5af3ef6d.png)



Add Affix to Equipment

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/96127115-3eb0-4deb-8011-d5efca222534.png)



Add Affix to Equipment at Specified ID

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/b8e6e5c9-d073-4a4f-8dcb-210ee8b63173.png)

## 2. Equipment Related Event Nodes



When Equipment Is Initialized

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/58457929-52ef-42b1-bd4b-84105cb5abab.png)



When Equipment Affix Value Changes

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/aea9ff22-394b-4873-9fdf-84fcbdf2d2b8.png)



When Equipment Is Unequipped

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/cd101b2f-a8dc-4d3d-bdcf-6c95c1b4099f.png)



When Equipment Is Equipped

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/0ed4222f-e2af-4959-be12-e7000baeee28.png)

## 3. Equipment-Related Search Nodes



Query Equipment Tag List

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/d8f92f49-64e2-4632-93f3-40d446188ecf.png)



Get Equipment Affix Config ID

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/b36b0b2f-1af7-4f37-acfa-c19699d04f0f.png)



Get Equipment Affix List

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/99c01455-51c6-4441-a48f-08fd9a8acdf8.png)



Get Equipment Affix Value

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsyagijjq5o/ec048306-d33e-43d8-8016-d657d77c4054.png)

[Item](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhbgx0rspbqu)[Currency](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2cr30yeak0)

1
