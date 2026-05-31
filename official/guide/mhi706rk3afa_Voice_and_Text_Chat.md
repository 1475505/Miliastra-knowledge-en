---
id: mhi706rk3afa
title: Voice and Text Chat
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhaneb9qnvay
language: en
scope: guide
crawledAt: 2026-05-31T16:39:32.449Z
---

# Voice and Text Chat

# I. Voice and Text Chat Features

The voice and text chat management provides gameplay-oriented chat features, supporting the configuration of multiple exclusive chat channels for different players or factions based on gameplay needs.

The same player can send messages in different chat channels simultaneously.

Supports real-time management of player chat channel permissions through node graphs.

# II. Voice and Text Chat Function Management

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/50a060b6-5cb9-4ecf-95f2-b2e62bcfb874.png)

You can manage the current level's chat channel through [System Menu] >[Manage Voice & Text Chat]

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/3109764c-9d88-4486-bddb-b64863497459.png)

### Global Settings: Manage the overall availability of voice and text chat features.

Enable Real-Time Voice Chat?: Determines whether the voice chat function is enabled.

Enable team voice chat in-game: Determines whether team voice chat is allowed during the game.

Enable Text Chat?: Determines whether the text chat function is enabled.

Enable team text chat in-game: Determines whether team text chat is allowed during the game.

# III. Chat Channel Editing



Add Chat Channel 

Click the [Add Channel] button to add new chat channels

The stage comes with a default global channel that applies to all players. While its configuration and name can be modified, it cannot be deleted.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/a0271104-915d-4da7-b9b9-9320746db805.png)

Press the icon ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/283cedfe-32df-40e7-be3c-e2b4fd5c741f.png) to rename or delete the channel



Basic Information 

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/deb33336-ba32-4533-ada8-650fd90e3f6b.png)

Parameter Description
_Index_ The unique identifier corresponding to the chat channel
_Text Chat Initially Active_ Determines whether the text chat function is enabled or disabled in the channel when the stage initially begins
_Channel Application Method_ Supports application by player/by faction

When the channel is applied by faction, chat channel membership can only be adjusted by switching player factions
_Apply to Player/Team_ Controls the initial coverage of the channel in the level, multiple selections allowed
_Display Priority_ Controls the display order of channels in the level chat system. Higher numbers appear at the top.
_Select Icon_ Controls the icon and color of the channel in the in-level chat system
_Voice Chat Initially Active_ Determines whether the voice chat function is enabled or disabled in the channel when the stage initially begins
_Limit Voice Chat Scope_ Determines whether the voice chat in the channel is restricted to a specific range
_Listening Radius (m)_ Sets the listening radius for voice chat in the channel, ranging from 1 to 100 meters



Quick Message

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/7c51162b-24a6-4596-96ca-4504034e69e0.png)

Control quick chat messages for corresponding channels within the level Click ![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/0f749cbc-2c10-4963-8b24-26310a60a919.png) to add quick text, click ![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/5ba5f5c3-4004-400c-828d-aaa9d99f3f56.png)to delete text. At least 1 default text must be kept

The corresponding in-game runtime display is shown in the figure below:

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/74537cc0-6b3f-4072-b1df-c644bf43d491.png)![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/4ee57df1-a5cd-4f71-a3fb-c4c5048db60a.png)

# **IV. Controlling Text Chat Channels with Node Graph**



Set Chat Channel Switch 

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/34252bb6-fc1c-4e88-ab93-8c97dcddf4e6.png)



Set Player's Current Channel 

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/0794a8f1-7534-43c6-aabb-739b9af202d6.png)



Modify Player Text Chat Permissions

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/47812d0c-bfdb-45e8-bb41-db739f5afec4.png)



Set Player Voice Chat Range

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/3c9ac03c-65ee-4565-ac25-5cb04614c409.png)



Set Player Voice Chat Permissions

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/92d39a9b-677a-4220-9e7e-581f5052de1e.png)



Modify Player Channel Permission

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/107efe22-b432-49e5-a803-712104604567.png)



Check if the player is currently in a voice chat

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/8d1f4e3e-37ae-4972-b44a-20841abeaaf5.png)

Note: This node is only functional within multiplayer sessions (Multiplayer Test Play or Multiplayer Play). It will not execute in single-player modes (Single-player Test Play or Single-player Play)

# **V. Additional Note**s

In the current version, voice chat-related features have been added, and buttons to control voice chat during the game have been included in the interface layout.

To address the issue whereby some Craftspeople may have used interface controls that obscure the voice chat buttons in their stage designs, leading to players being unable to use the voice chat feature in the current version, we would like to remind all Craftspeople to adjust the position of their interface controls appropriately to ensure the normal use of this function.

The specific locations of the voice chat buttons on PC and mobile platforms are as follows:

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/6657f05b-ba2a-4c89-bc9b-d5a2b2d5a26b.png)

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi706rk3afa/b2c71b92-83f9-4f89-8422-fc7740447836.png)

[Multi-language Text](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk59aiqtwyk)[Background Music](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhq9b601kh9k)
