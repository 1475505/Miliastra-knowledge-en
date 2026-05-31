---
id: mh8enu00szzc
title: Revive
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh796lr44x0e
language: en
scope: guide
crawledAt: 2026-05-31T16:33:34.509Z
---

# Revive

# I. Character Defeat and Revive Description

During gameplay, when all of a _player's_ _character entities_ are _defeated_ (known as the _When All Player's Characters Are Down_ state), the revive process will begin.

For player and character entities, the following downed and revive mechanics apply:

_When the Character Is Down_: When a character's HP drops to 0 or when it is forcibly defeated. In Beyond Mode, this also means all player characters are down (because the player only has one character).

_When Character Revives_: A character is revived from the downed state. When all of a player's characters are down, reviving any character will release that player from the downed state.

_When All Player's Characters Are Down_: While the player entity itself cannot be defeated, there exists a concept of all of a player's character entities being downed. In Beyond Mode, having a single character down is the same as all characters being down (as mentioned above, this is because the player only has one character).

Similarly, since the player entity cannot be defeated, there is no concept of reviving the player entity.

# II. Character Revive Process

A typical revive process in Beyond Mode is shown as follows:

1. When a character's HP drops to 0 or it is defeated by other means, the When All Player's Characters Are Down state is triggered.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/1ec4dfe1-e1f1-44ce-bd2f-f3730afbd41f.png)

2. Revive Interface

The functions of the interface are as follows:

[Revive After ()s] / [Revive at Revive Point]: When a _revive duration_ is set in Revive Settings, you can click the [Revive] button after waiting for the specified number of seconds to revive your character at the _revive point._.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/b1f4286c-e8d5-4c78-b8c8-236d49806d79.png)

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/2a531ee5-87b0-4df3-a96b-e8d4a417e767.png)

3. Characters will revive at the revive point after clicking the [Revive] button, when an auto revive is triggered, or when forcibly revived via the server node graph.

At that time, HP will be set to the _HP Percentage After Revive (%)_ configured in Revive Settings.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/dfc5ce59-35bf-4c33-acc9-620cde782e0c.png)

# III. Revive-Related Settings

## 1. Revive Settings Entry-Point

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/fdd3832e-8522-4974-9584-507a26d25433.png)

Please note that revive settings are set in the [Player Template], and because player entities are generated from player templates, this means different players can have different revive settings.

Example: Player 1 may have a limit of 3 revives, while Player 2 may have no revive limit but must wait 30 seconds between each revive.

## 2. Revive-Related Settings Options

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/a2992563-031d-4113-879e-9c582912e8d2.png)

**Setting Options****Descriptions**
_Allow Revive_ When set to [No], this player cannot be revived.

Can be toggled dynamically using [Allow/Forbid Player to Revive] in the server node graph.
_Show Revive Screen_ When set to [No], the revive interface will not pop up when the player is down.

Note! This means the player cannot be revived through the game's built-in logic and will need custom logic to be revived (e.g., assistance from other characters). Otherwise, they cannot be revived and can only exit the current stage.
_Revive Duration (s)_ The time required for the player to revive. After being downed, players must wait for the configured revive duration before they can be revived.

When set to [Auto-Revive]: the player will be revived immediately once the revive duration has elapsed.

The next revive duration can be adjusted through the node graph's [Set Player Revive Duration] node.
_Auto Revive_ After being downed, automatically revive after the configured [Revive Duration] without requiring the player to press the [Revive] button.
_Revive Limit_ The maximum number of times this player can be revived. When the number of revives exceeds this limit, further revives will not be possible.

The remaining number of revives can be adjusted through the node graph's [Set Player's Remaining Revive Count] node.
_Revive Point List_ The default list of viable revive points for this player. When reviving, a revive point will be selected from this list according to the [Revive Point Selection Rules].

The player's revive point list can be dynamically adjusted via the [Activate Revive Point] and [Deactivate Revive Point] nodes in the node graph.
_Revive Point Selection Rules_ Determines the rules for selecting a revive point from the current [Revive Point List].

Available options:

Nearest Revive Point: Selects the nearest viable revive point from the downed location.

Most Recently Activated Revive Point: The most recently activated revive point. You can refresh a revive point's activation time by reactivating an already activated point.

Highest Priority Revive Point: Uses the viable revive point with the highest priority in the revive point list. Priority can be configured at each revive point. If multiple points share the same priority, one will be randomly selected.

Random Revive Point: Randomly selects a viable revive point from the revive point list as the revive location.
_HP Percentage After Revive (%)_ Character's HP percentage after revive; this value cannot be 0.
_Special Knockdown Damage - Max HP Deduction Percentage (%)_ HP percentage deducted when drowning or falling into a bottomless pit. These types of revives do not follow the standard revive process and will not consume revive attempts.

# IV. Revive-Related Function Nodes

**Revive Character**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/78388ad6-f75a-47e6-9080-8d6a06c06457.png)

**Node Type**: Execution

**Node Function**



Revive a specified character



In Beyond Mode, similar to the [Revive All Player's Characters] function, this will revive the player's characters and remove the Down status from all player characters. This revive will not consume the player's revive uses.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Character Entity Entity The specified character entity that needs to be revived

**Revive All Player's Characters**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/d134521d-518e-463c-be02-b200e5eec235.png)

**Node Type**: Execution

**Node Function**



Revive all of the player's characters.



In Beyond Mode, similar to the [Revive Character] function, it will revive the player's characters and remove all characters' Down statuses. You can choose whether to deduct the player's revive uses.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity Player entity that needs all characters to be revived.
Input Parameter Deduct Revive Count Boolean If [Yes], deducts 1 revive count when reviving. If the revive count is less than 1, this node cannot be executed.

**Defeat All Player's Characters**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/65fb9d6c-ca27-436e-9d11-ccd652b245f9.png)

**Node Type**: Execution

**Node Function**



Defeating all of a player's characters will put the player in a "When All Player's Characters Are Down" state.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity Target Player Entity

**Set Player Revive Time**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/c2f800b1-6ce9-4436-94d4-321e1e5fc7fb.png)

**Node Type**: Execution

**Node Function**



Modify the specified player's **next revive** time.



If the player is currently in the Revive Phase, the current revive duration will not be modified.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity Target Player Entity
Input Parameter Duration Floating Point Numbers Set revive duration in seconds.

**Set Player Remaining Revives**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/bb8d6c48-9aa1-455a-997a-fe7cd5715bed.png)

**Node Type**: Execution

**Node Function**



Modify the remaining number of revives for the specified player.



Setting it to 0 will prevent this player from reviving.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity Target Player Entity
Input Parameter Remaining Amount Integer Set remaining revive uses.

**Allow/Forbid Player to Revive**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/8a800982-4376-49d8-b512-52e39f203d75.png)

**Node Type**: Execution

**Node Function**



Modify whether a specified player is allowed to revive.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity Target Player Entity
Input Parameter Allow Boolean Set whether or not reviving is allowed.

**When All Player's Characters Are Revived**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/a6a2ba9c-d521-4837-b504-e26545edb97d.png)

**Node Type**: Event

**Node Function**



Triggered when all of the player's characters are no longer in the Down state and have revived. Note that this event will not be triggered if the player's Down state is removed due to character revival.



Since the player's recovery from the Down state and revive will also cause characters to recover from the Down state and revive, the [When Character Revives] event will also trigger after this event.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity Revived player entity.

**When All Player's Characters Are Down**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/5a80299c-b974-4e40-a890-06b7e4b3c795.png)

**Node Type**: Event

**Node Function**



Triggered when all of the player's characters are downed.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity Player entity with all characters down.
Output Parameter Cause Enumeration Cause of all player characters being downed.

Including the following reasons

-Node Graph: Defeated by nodes in the node graph.

-Normal Defeat: All of a player's characters downed due to their HP being reduced to 0.

-Abnormal Defeat: Downed due to falling into a bottomless pit, drowning, or other similar reasons.

**When Player is Abnormally Downed and Revives**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/2d1d33e1-795e-4b72-ad0c-34c3cb6d2c39.png)

**Node Type**: Event

**Node Function**



When players are defeated and revived due to falling into a bottomless pit, drowning, or other reasons.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Player Entity Entity Player entity that's defeated due to drowning, falling into a bottomless pit, or similar reasons.

**When the Character Is Down**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/86f90997-a295-4f69-a945-9a4028d232ed.png)

**Node Type**: Event

**Node Function**



Event triggered when a character is downed.



Because the player only has one character in Beyond Mode, it will subsequently trigger [When All Player's Characters Are Down]

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Character Entity Entity Character entity that has been defeated due to drowning, falling into a bottomless pit, or similar reasons.
Output Parameter Cause Enumeration Causes of Character Down

Includes the following reasons:

-Node Graph: Defeated by nodes in the node graph.

-Normal Defeat: All characters in player team are defeated due to HP reaching 0.

-Abnormal Defeat: Downed due to falling into a bottomless pit, drowning, etc.
Output Parameter Knockdown Entity Entity Entity that defeated this character

**When Character Revives**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/ec215145-ae7c-405a-81f3-2a55cc836403.png)

**Node Type**: Event

**Node Function**



Events triggered when a character revives.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Character Entity Entity Revived Character Entity

**Query If All Player Characters Are Down**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/79d038a0-28fa-4cb9-86b0-51b1c8a23c6d.png)

**Node Type**: Query

**Node Function**



Check if all of the player's characters are downed.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity Target Player Entity Queried
Output Parameter Result Boolean Whether Full Team Down

**Get Player Revive Time**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/87352bb1-89b5-48fc-bcbc-765a7fe5a55f.png)

**Node Type**: Query

**Node Function**



Get the specified player's revive duration.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity Target Player Entity Queried
Output Parameter Duration Floating Point Numbers Get revive duration.

**Get Player Remaining Revives**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh8enu00szzc/d1d7cc4a-2aa1-4d6a-a504-2d069fb7039d.png)

**Node Type**: Query

**Node Function**



Query the player's remaining revive uses.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Player Entity Entity Target Player Entity Queried
Output Parameter Remaining Uses Integer Get remaining number of revive uses.
