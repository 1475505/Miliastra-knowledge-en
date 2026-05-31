---
id: mhtzuo0t4e1k
title: Item Display UI Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjja1ipq9ck
language: en
scope: guide
crawledAt: 2026-05-31T16:26:23.484Z
---

# Item Display UI Controls

# I. Item Display Functions

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/4d592acc-dd48-4fb8-90c2-bab755d9a278.png)

During stage runtime, clicks or external device inputs can trigger UI control interactions.

Supports player interaction. When selecting "Player's Current Equipment" or "Template Item," send a _When UI Control Group Is Triggered_ event to the node graph after the interaction.

# **II. Editing Item Display**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/7fb4896a-e098-4b66-9e0a-eaa0e69d00ff.png)

_Interactable?_

When enabled, configures the interaction method

_Key Mapping - Keyboard & Mouse_

Provides PC key options to use as input interaction items. The selected key will be displayed below the key in the Edit window

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/f2ff9dc2-879a-4d80-b099-de4bc5669ac7.png)

_Key Mapping - Gamepad_

Provides controller button options to use as input interaction items. After selection, they will be displayed below the button in the Edit window

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/c412d0c3-44b1-4781-ac10-3061ad0ae747.png)

_Type_

Divided into three types: player's current equipment, template item, and items in inventory

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/60e21db5-7143-456b-9f2c-fcd1982a8b18.png)



_Player's Current Equipment_

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/a6756da9-2a8d-48c4-92a2-d224f13f60f7.png)

_Equipment Config ID Variable_

Allows selecting variables from the player

_Behavior When Unequipped_

Defines how this UI control behaves when no equipment is equipped

Two display modes are available: show empty slots or hide them

_Slot Cooldown (s)_

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/219f3a29-b923-474e-8141-a11a8d658de1.png)

Allows selecting the player, Players 1–8, or a custom variable from the Stage

_Slot Usage Count_

When enabled, allows configuring whether to hide the control when the count is zero and set the usage count

_Hide When No Usages Left_

When enabled, hides this control when no uses remain

_Usage_

Allows selecting the player, Players 1–8, or a custom variable from the Stage

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/f6b2dfb9-02c1-456f-8ee7-a1ebe1d3ed07.png)



Template Item

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/1415150a-1fbe-4c40-b6a8-30745a0148ac.png)

_Item Config ID Variable_

Allows selecting the player, Players 1–8, or a custom variable from the Stage

_Item Quantity Display_

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/91c15628-2956-4ae3-8097-74b93af247c3.png)

When enabled, displays the current item quantity below the icon (shown as 00 in the image)

_Hide When Quantity Is Zero_

When enabled, hides the control when the item quantity is zero

_Item Quantity Variable_

Allows selecting the player, Players 1–8, or a custom variable from the Stage

_Slot Cooldown (s)_

Allows selecting the player, Players 1–8, or a custom variable from the Stage



Items in Inventory

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/b91bac3c-7210-4cab-b02d-81620254f127.png)

_Item Config ID Variable_

Allows selecting a custom variable from the player

_Behavior When There Are No Items_

Defines how this control behaves when no items are present

Two display modes are available: show empty slots or hide them

# III. Managing Item Display Through Node Graph

**When UI Control Group Is Triggered**

During stage runtime, when a player interacts with a button UI control group, it triggers the "When UI Control Group Is Triggered" event in the node graph. This event is sent only to the node graph of the _player_ who performed the interaction

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhtzuo0t4e1k/17584fc3-06bc-424f-988f-e634fecb0271.png)

[Interactive Button UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwkfsitckrw)[Text Box UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnltrr3g966)

1
