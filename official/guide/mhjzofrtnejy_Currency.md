---
id: mhjzofrtnejy
title: Currency
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2cr30yeak0
language: en
scope: guide
crawledAt: 2026-05-31T16:21:04.292Z
---

# Currency

# I. Definition of Currency

Currency is a general item used in gameplay. It is used to determine the value of virtual items and evaluate whether trades can be completed. Currency can be held by units and will increase or decrease through trading or Node Graph logic

# II. Editing Currency

Enter the editing interface through the [Currency and Inventory] button

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjzofrtnejy/a155a145-2e73-439e-a08e-44542d7c13d1.png)

Enter the Currency tab to edit the currency details

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjzofrtnejy/4ecf877d-161e-4a6d-88b6-ee83b6183829.png)

_Currency Name_: Name defined by the creator (Craftsperson) for the currency

_Configuration ID_: Unique identifier for currency data

**Base Attributes**



_Icon_: The display style of currency during gameplay. You can click the icon to select one from prefabricated icons



_Destruction Debris_: The logic executed when the currency owner is defeated

_Loot_: Converted into loots and created in the scene

_Destroy_: Currency is destroyed

_Save_: Only applies to characters. Currency will be retained after character revival. For units other than characters, this is equivalent to Destroy



_Loot Drop Mechanics_: When currency drops, it will be converted into an entity that drops in the scene

_Shared Reward_: All players share the same currency loot entity. Once one player picks it up, other players can no longer pick it up

_Individualized Reward_: Each player will have their own independent currency loot entity generated locally, and players' pickup actions do not affect each other



_Corresponding Loot Appearance_: Configure a _loot prefab_, which is a prefab with physical properties. When a virtual item is created in the scene, it will be displayed using the related loot model



_Display Priority_ _:_ The higher the number, the higher the item will be displayed in the inventory

[Equipment](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkl2yin0cxo)[Inventory](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhogfq9bf86q)
