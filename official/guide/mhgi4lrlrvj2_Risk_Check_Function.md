---
id: mhgi4lrlrvj2
title: Risk Check Function
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh0xm3ryh9hq
language: en
scope: guide
crawledAt: 2026-05-31T16:33:41.334Z
---

# Risk Check Function

# I. What Is the Risk Check Function

The _Risk Check function_ can be used to check the Wonderland that the Craftsperson is curremtly working on. If the check reveals that the Wonderland has been set up with methods that are discouraged, or has violated certain hidden rules, warnings and explanations will be displayed.

The differences between the Risk Check function and _Playtest Verification_ are as follows: Errors found in Playtest Verification will prevent the playtest from running normally. These are relatively serious errors that can cause features to stop working properly. In contrast, warnings from Risk Check generally relate to data errors and will not block the playtest or affect normal operations.

# II. How to Use the Risk Check Function

## 1. How to Enter

Click "Risk Check" in the System Menu to open the Risk Check interface.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhgi4lrlrvj2/6960f2f2-156a-4514-b0a6-84ddf9d36661.png)

## 2. Interface Guide

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhgi4lrlrvj2/66cf4341-90f0-4997-878f-29df05201e11.png)

Click "Run Check" to check the current Wonderland.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhgi4lrlrvj2/5544201d-4fc1-482f-b0e9-8b23258edf3a.png)

The time on the left shows when that check was started.

The maximum number of check records that can be saved in the history is 5. If there are more than 5, the newest record will replace the oldest check record. Check records are saved only for the current edit session. Reloading a save will clear previous records.

The right side shows all risk items found in the current Wonderland.

# III. Special Notes

The message "Operation flow connections crosses logical sub-graphs" refers to the case shown in the red box below: operation flow data from the lower logic sub-graph is linked to the operation flow in the upper logic sub-graph, which will cause data transfer errors.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhgi4lrlrvj2/c3ab443d-0a22-4ca4-97fa-263fe06679af.png)

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhgi4lrlrvj2/d847329c-97a2-49bf-8a13-869303dc922d.png)

[Load Calculation Function](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho2hirgodxi)
