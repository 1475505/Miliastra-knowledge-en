---
id: mht9eaisd5bw
title: Leaderboard
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho2rt9ir6ay
language: en
scope: guide
crawledAt: 2026-05-31T16:26:38.224Z
---

# Leaderboard

# I. Leaderboard Functions

The _Leaderboard_ Function allows creators (Craftspeople) to record certain in-game information to the peripheral system. When other players browse the stage information from the lobby, they can view this leaderboard information, as shown in the graph below:

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht9eaisd5bw/0165702a-df4a-4dc8-8a02-3055a05c5a91.png)

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht9eaisd5bw/67fe8863-9f78-4f53-941b-e8006a5fff23.png)

# II. Editing Leaderboard

Click [Manage Peripheral System] in the System menu to enter the Peripheral System Settings interface

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht9eaisd5bw/075f855f-c19e-4d6f-bc4a-e183f97ca83f.png)

In the leaderboard tab of the peripheral system settings interface, you can perform settings related to the leaderboard.

Only the Leaderboard Function or the _Competitive_ _Rank_ Feature can be enabled. A stage can support multiple leaderboard templates. When configuring the data, you need to specify the leaderboard template ID. Click the "New Leaderboard" button in the lower right corner of the interface to add a new leaderboard template

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht9eaisd5bw/7c27ecc3-2e88-4441-9c5f-20875b35980e.png)

_Leaderboard Settings_: Controls the overall logic and activation of Leaderboard Function

_Enable Leaderboard_: Choose to enable either the Leaderboard or Competitive Rank Function

_Enable In-Eoom Leaderboard Ranking_: Whether to allow setting leaderboard data when players play this stage through room teams rather than matchmaking

_Leaderboards_: Detailed settings for each leaderboard

_Leaderboard Name_: Can be customized, used by creators (Craftspeople) to distinguish between different leaderboards

_Index_: The identifier of this leaderboard, used for identifying when modifying leaderboard data via the node graph

_Display Priority_: When multiple leaderboards exist, those with higher priority are displayed closer to the top

_Display Format Selection_: Leaderboard scores are stored as numerical values on the server but can be displayed in different formats. The following formats are currently supported:

_Raw Numbers_: Display as a numerical value

_Time_: Display in duration format

_Percentage_: Display in percentage format

_Leaderboard Reset Type_: Rules for resetting leaderboards

_Do Not Reset_: The leaderboard remains persistent and will not be reset by external logic

_Reset With Season_: When a new season begins, the previous data will be reset

_Score Sorting Rule_: Defines how leaderboard values are sorted

_Lower Values First_: Players with lower values are ranked higher on the leaderboard

_Higher Values First_: Players with higher values are ranked higher on the leaderboard

Each leaderboard only records information for the top 1,000 players

# III. Node Graph Node Settings for Leaderboard Information

Leaderboard score settings are compatible with both floating point numbers and integer values



Set Player Leaderboard Score as Float

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht9eaisd5bw/bbc55f77-5b19-4fb5-aae7-1a9f81642473.png)



Set Player Leaderboard Score as Integer

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mht9eaisd5bw/168dfd1c-158a-4f41-8b7c-c0d13346f125.png)

[Rank](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhf45sisuup8)
