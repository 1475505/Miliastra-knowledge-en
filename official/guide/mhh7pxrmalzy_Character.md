---
id: mhh7pxrmalzy
title: Character
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3ecor1x5cm
language: en
scope: guide
crawledAt: 2026-05-31T16:17:52.291Z
---

# Character

Unlike _player entities_ _,_ _character entities_ refer to the actual units that players control during the game, such as walking, running, climbing, and flying units with physical presence

# 1. Character Template

In Beyond Mode, players and characters are mapped one-to-one, so the _template configuration_ of characters exists as part of the _player template_, which can be accessed under the character editing tab in the player template:

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhh7pxrmalzy/bddc4c76-d680-4a38-9c5f-b661a7172fd5.png)

Tab Overview:

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhh7pxrmalzy/3a73c88c-8943-4de7-91c1-0b825707a85d.png): Basic Information Tab, where the Character section contains only sound effect-related information compared to other entities.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhh7pxrmalzy/741c3c37-a3b3-487e-8f8e-3e08a0e7ffc3.png) Specialized Configuration Tab, where the Character section contains only combat-related parameters compared to other entities.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhh7pxrmalzy/a5828c7a-3e57-421a-b194-8aa6cf24d160.png): Components tab, where you can add components to character entities or view existing components

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhh7pxrmalzy/28bf8ec3-3fd9-48a6-9f8b-5ea57784f56f.png): Node graph configuration tab, where you can add node graphs to character entities or view the node graphs that have been added

# II. Overview of Available Components for Character Entities

[Collision Trigger](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh8w69rzuc3i)

[Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhso1b9wjica)

[Global Timer](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhawd6rl5kpy)

[Unit Status](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhd7nxrfa8im)

[VFX Playing](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh4ppo02m1o8)

[Custom Attachment Points](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhmshmimtegs)

[Collision Trigger Source](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhn95di01j84)

[Sound Effect Player](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwiv89yra02)

[Inventory](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh5y5001vqd4)

[Loots](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh63ox06afy8)

[Nameplate](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh5n160t2b6w)

[Text Bubble](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwtz297kp6a)

[Scan Tag](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhfc0lr1tcke)

[Mini-Map Marker](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0pppib5eyc)

Additionally, there are equipment slot components that can only be added to characters

For details, please see [Equipment](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhg766rur2va)

# III. Runtime Characteristics



During gameplay, characters are dynamically initialized based on template configurations, therefore character entities do not have corresponding _GUID_



Notably, when a character's HP reaches zero, the node graph on the character entity can receive both the _Entity Destroyed event_ and the _Entity Removed/Destroyed_ event. In contrast, when an object is destroyed, the event will be dispatched to the stage entity.



During the Co-Op Mode gameplay, if a player actively returns to the lobby, the stage will receive the character's removal event

[Player](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhctmgi51lpo)[Creations](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhufqo0c0tqw)
