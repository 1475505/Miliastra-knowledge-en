---
id: mht3udinyfqs
title: Shop
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhi9s7isvp50
language: en
scope: guide
crawledAt: 2026-05-31T16:34:21.599Z
---

# Shop

# I. Definition of Shop

The shop is a module that provides virtual item trading functionality, mounted onto entities as a component

Creators (Craftspeople) can customize the types of virtual items available for trade in a shop (supporting items, equipment, and currency), and configure corresponding selling and buying prices. During gameplay, players can perform buying and selling actions through the shop interface

# II. Types of Shops

There are two basic types of shops:

_Custom Items Shop_: This type of shop can operate independently from the shop owner's inventory, allowing free configuration of a shop template. Buyers will trade with the template data. This does not affect the actual inventory data of the shop owner

_Self Inventory Shop_: When a purchase occurs, the customer and the shop owner will perform an actual exchange of virtual items from their inventories. The shop cannot sell virtual items that the owner does not possess

# III. Editing Shops

The shop template is a complete shop information configuration. Open the system menu and click [Shop Template Management] at the location shown in the graph below to access the shop template editing interface.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/024d4d0c-82b1-4ed9-bb56-ec3d67dcfb77.png)

## 1. Basic Settings

Open the shop configuration interface and click "New Shop Template" to add and edit a template.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/24b7d191-8f78-4fa2-ac5a-33eade8f36a9.png)

_Shop Name_: Shop name as defined by the creators (Craftspeople) during editing, meaningless during runtime.

_Configuration ID_: The unique identifier of the shop template, referenced by Shop components

## 2. Display Settings

This section defines the display information of the shop interface

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/6844d908-67f8-45e8-9463-8b84b0b68a2d.png)

_Open Inventory When Shop Opens_: When enabled, the inventory interface will open simultaneously when players open the shop interface.

_Shop Item Tab Type_: Determines how tabs are categorized in this shop

_No Tab_: No separate tab configuration, all virtual items are displayed under a single tab

_Default Tab_: Items will be automatically categorized according to their preset types

_Custom Tab_: Tab categorization configured by the creators (Craftspeople)

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/efe4ad3f-4d78-40d3-b047-96bfea1e6caf.png)

_*New Tab_: Click to add a new custom tab. When using custom tabs, you can redefine item tabs later when configuring the shop sales list

## 3. Sale Settings

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/ec3106e8-89e4-49fc-92c7-9e2450742587.png)

_Shop Item Source_: Refers to the shop types described above, divided into personal inventory and custom list

_Self Inventory_: Virtual items for sale come from the shop owner's inventory. Only the selling price of each type of item can be redefined, and items that are not in the inventory cannot be sold

_*Sale Range_: Divided into all items and select items, which determines whether all creator-defined items will be added by default when initializing the Sale Settings List

_Custom List_: Freely define the types and quantities of items for sale. This exists as a data template and does not affect the inventory data of the shop owner

_Price Settings_: Define the price list for this shop template

When the item source is from your own inventory, the table structure is shown in the graph below:

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/823e2b96-383b-4c44-bd8d-99d21baac70d.png)

_Items_: List of all items that can be sold

_Affiliated Tab_: Defines which tab the item will be categorized under in the shop interface. When using custom tabs, creators (Craftspeople) can configure which tab each item belongs to

_Sort Priority_: Defines the sorting order of items in the shop interface. Items with higher priority will appear first

_Purchasable_: Only items marked as "True" will appear in the trading interface. This can be modified dynamically during gameplay to achieve the effect of unlocking new items

_Sell Price_: The amount of currency the buyer needs to purchase one of these items during a trade

When custom items are used, the list structure is shown in the graph below:

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/31f7f5ed-9f0a-4688-b741-9a4c929bada7.png)

Most fields are consistent with the inventory item sales list. This section will cover the parts that differ

_Item ID_: When using node graphs to dynamically modify the sales list, the ID is used to identify specific entries for modification. Since multiple identical items may appear in the template shop, different IDs can be used to locate the specific entry that needs to be modified

_Limited Stock_: If set to "No", items can be purchased infinitely. If set to "Yes", you can define the total quantity of this item available for sale in this shop

## 4. Purchase Settings

Purchase settings define the types of items and their prices that players can sell to the shop during trade

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/9649c62a-5519-4a42-a4ce-2f8740372a18.png)

_*Purchase Range_: Defines the types of items that can be sold to the shop

_Not Purchasable_: Unable to sell items, the purchase list is empty

_All Items_: The purchase list includes all item types globally defined by the creator (Craftsperson)

_Select Items_: Creators (Craftspeople) can customize which items are available for purchase in the purchase list

_Purchase Price Settings_: Click the edit button to enter price list editing

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/9825688b-1894-4802-92dd-7fc0ae654e7b.png)

_Items_: List of all purchasable items

_Sort Priority_: Defines the sorting order of items in the shop interface. Items with higher priority will appear first

_Can be purchased_: Set to "Yes" for items that can be sold to the shop, can be modified dynamically during gameplay

_Purchase Price_: The amount of currency the shop will pay when purchasing one of these items during a trade

# IV. Runtime Instance of the Shop

During gameplay, the shop template is referenced and instantiated by the [Shop Component](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mho6gviqhsqs)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht3udinyfqs/787844be-1581-4c35-bf36-1eaa6f3ca293.png)

[Loot](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkfj1iilnck)
