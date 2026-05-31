---
id: mhxmm9r879a6
title: 1.5 Debugging
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhxmm9r879a6
language: en
scope: tutorial
crawledAt: 2026-05-31T15:48:33.668Z
---

# 1.5 Debugging

# Introduction

## Course Description:

**Course Content:** This course will explain the process and self-inspection thinking for playtesting and debugging in the Editor and Miliastra Sandbox

**Learning Objectives:** Understand the Editor and Miliastra Sandbox's playtest and debugging process and master basic debugging approaches

_**The "debugging" covered in this course only concerns node graph functionality debugging and does not concern panel configuration debugging (e.g., issues with configured panel coordinates/size parameters). Additionally, this course primarily teaches general debugging approaches applicable to most issues. For problems that cannot be self-diagnosed, please follow the guidelines for submitting feedback._

## Relevant Information:

**Recommended Learning Order:**[Prerequisite Courses] → [Current Course] → [Comprehensive Guide] (reference as needed)

_**If course details are unclear or if you'd like additional information, please refer to the_**_[Comprehensive Guide]_**_as needed._

**Prerequisite Courses:**This course requires knowledge of the features introduced in the following prerequisite courses _(It is recommended to go through_**_[Prerequisite Courses]_**_first for a smoother learning experience)_

> [1.2 Map Creation and Playtesting](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhcegrr5omvi)
> 
> 
> [1.4 Save Importing and Exporting](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhjuwpiubrh0)

**Required Knowledge:**The course involves the following basic concepts: _(It is recommended to follow the course materials. If course details are unclear or if you'd like additional information, please refer to the relevant chapters in the_**_[_ _Comprehensive Guide_ _]_**_)_

> [Node Graph Log](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhnkmfr2f92m)

# Debug Process

### Instructions

> **1. Open the [Log] page**
> 
> 
> Select [Window] in Miliastra Sandbox>>> select [Log]
> 
> 
> ![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/894304b406ec41498f607f26ee9ef252_1757675625.png)
> 
> 
> **2. Select the node graph to be tested**
> 
> 
> Checkmark the node graph to be tested on the [Log] page >>> click [Confirm Selection]
> 
> 
> ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/5f2778d4317f4af3aff66dbb0dc0e878_1757675626.png)
> 
> 
> **3. Playtest and check the log for runtime performance**
> 
> 
> Enter the stage to playtest >>> Trigger the node graph event to be tested >>> Check the log for runtime performance breakdown
> 
> 
> ![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/18b2d0df3eb14746a299c9aa69007741_1757675626.png)
> 
> 
> **4. Enter debug mode and inspect node graph runtime performance**
> 
> 
> Click the running node graph in the log to enter debug mode to check the data transferred during runtime and run active/inactive node graph logic
> 
> 
> _**For example, in the demonstration below, you can see the [Detailed Output Parameters] after event triggers through debug mode (Event Source Entity, Event Source GUID, Option ID, Selector); You can also see the [Active Logic Tree] of the node graph (Execution Flow - Orange-yellow line, Runtime Flow - Blue line), and the Inactive Logic Tree (grey line)_
> 
> 
> ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/1384df9c8bb94103a4121e9644fa69a9_1757675626.png)

_**For more information, please refer to [Comprehensive Guide > Node Graph Log]_

# Debug Approach

### Troubleshooting Approach

When the implemented functionality doesn't meet expectations, node graph debugging is necessary. Two major situations need to be checked:

> 1. [Blocked/Not Running]: Whether the node graph is blocked and not running;
> 
> 
> 2. [Running but Wrong Output]: Whether the node graph is running but outputting incorrect parameters

**Debugging Process:** Configure according to debugging flow → Confirm issue status → Modify and adjust, then test and debug again

Repeat the above process until the function performs as expected

_**Please note that currently [Client Node Graphs] and [Composite Node] do not support debugging. The following explanation focuses on server node graph debugging._

## Node Graph Blocked/Not Running

### Problem Overview

These problems commonly fall into the following 3 categories, which will be explained with examples:

> ① Node graph not mounted or the node graph mount object cannot monitor the corresponding node graph (incorrect object or related components not configured)
> 
> 
> Corresponding symptom: During debugging, after ticking the right node graph in [Log], the log remains empty after a playtest
> 
> 
> ② Wrong event node used or the event-triggering input during playtest does not match the configured event node
> 
> 
> Corresponding symptom: During debugging, after ticking the right node graph in [Log], the log remains empty after a playtest
> 
> 
> ③ Incorrect parameters were input, causing conditional errors and subsequent execution nodes to not run
> 
> 
> Corresponding symptom: Inactive logic trees exist in the node graph in debug mode

### Example Problem 1: Node Graph Not Mounted

**Case Study:**A node graph for option interaction features is created. [After interacting with the option tab], event xxx is triggered, but the node graph wasn't mounted to the corresponding interaction object

**Root Cause:**The entity node graph was created but not mounted to the corresponding entity

**Inspection & Resolution:**Inspect whether or not a node graph has been configurated for the entity that triggered the event → If not, configure the corresponding node graph for the entity

_**Dynamic prefabs will be used as examples for the demonstration below_

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/472d55ef28e842f890246e2e39f58b1c_1757675626.png)![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/997ff51f2ebb464383286430e3fc91c7_1757675626.png)

### Example Problem 2: Node Graph Mount Object Error

**Case Study:**A node graph for executing specific functions after UI button interaction is created. [When UI controls group is triggered], execute xxx, but the node graph was mounted to non-player units (this event can only be monitored by "players")

**Root Cause:**The entity node graph was created but mounted to a target that cannot monitor the events of this node graph

**Inspection & Resolution:**Confirm the [event node] used in the node graph → Confirm whether the target mounted with the node graph can monitor the event → If not, change to the correct mount target

_**This issue references monitoring rules of different event nodes. We will skip the detailed explanation here and stick to just showcasing the bug type_

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/d90570030ba14f139dd585f7a903f52e_1757675626.png)

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/2f9bfb4c967949068d466eb93678c2b5_1757675627.png)

### Example Problem 3: Node Graph Mount Object Missing Required Components

**Case Study:**A node graph for executing specific functions after collision against an area is created. [When entering the collision trigger], execute xxx, but the [collision trigger] component was mounted to the corresponding interaction object

**Root Cause:**The entity node graph was created but relevant components weren't configurated on the mount target, thus the event cannot be triggered

**Inspection & Resolution:**Confirm the [event node] used in the node graph → Confirm whether the event references special components (such as option tab/collision trigger area/on-hit detection) → If components are referenced but not configured, configure the corresponding component for the entity

_**This issue is a panel configuration issue and does not involve node graph changes. Below serves only as an example_

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/af253996ede044818f88e8924420c73b_1757675627.png)

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/322a0ad1e5394dc69d5462b94099940f_1757675624.png)

### Example Problem 4: Incorrect Event Nodes Used

**Case Study:**The desired function to realize is [after selecting the option tab, execute xxx]. The event configured in the node graph is not the [when option tab is selected] event node

**Root Cause:**The event node used does not match the one required for the actual function

**Inspection & Resolution:**Confirm the [event node] used in the node graph → Confirm whether the event matches the trigger event of the expected function → If not, change the corresponding event node (e.g. to trigger xxx after selecting the option, use [when option tab is selected]; to trigger xxx after entering the collision area, use [when entering the collision trigger])

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/e60c9ca38d4248b9ade751aa16e59538_1757675624.png)

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/7aa1a8b60f404c45be6fc99d94c33809_1757675624.png)

### Example Problem 5: Inconsistency Between Event-Triggering Input and Configured Event Nodes During Playtesting

**Case Study:** Expected functionality is [After selecting Option 2, execute xxx], but Option 2 was not selected during playtesting

**Root Cause:** The input during playtesting did not properly trigger the configured event node

_**This issue is caused by incorrect controls during playtesting (not panel configuration/node graph error), so no additional demonstration is provided here, only debugging and troubleshooting direction is given_

### Example Problem 6: Incorrect parameters were input, causing conditional errors and subsequent execution nodes to not run

**Case Study:** The intended functionality is [After selecting an option, checks player variables and execute xxx if conditions are met], but incorrect variable input leads to wrong conditional judgment, preventing normal execution (expected to follow the [Yes] branch)

**Root Cause:** Errors in node graph writing resulted in unexpected input/output results during execution

**Inspection & Resolution:** Select the triggered event in [Log] to enter debug mode → Check input/output parameters in the operational flow one by one → If errors are found, modify relevant configurations in the node graph

_**This problem type relates to the output errors in the course below and will be elaborated later; this is only a simple example to provide troubleshooting guidance_

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/6ed49e9f651e42349a2b1082df2dd9b4_1757675624.png)

## Node Graph Runs But Outputs Incorrect Results

### Problem Overview

These problems commonly fall into the following 2 categories:

> ① Variable type errors resulting in incorrect output
> 
> 
> ② Computational issues resulting in incorrect output
> 
> 
> Both types of problems manifest as incorrect parameter output in debug mode (type errors, value errors)

### Example Problem 1: Variable Type Errors Leading to Incorrect Output

**Case Study:**The variable type set is [Integer], but [Floating Point Numbers] was used in the node graph. The output result of the actual calculation flow is wrong

**Root Cause:**Incompatible variable type was used, the output result does not meet expectations and cannot execute normally

**Inspection & Solution:**Select the triggered event in the log to enter debug mode → Inspect whether the pre-input/output parameters not executed in the calculation flow meets expectations → If there's an error, modify the corresponding settings in the node graph

_**The node graph is a [strongly typed] language which will strictly perform calculations and decisions based on the variable type, which means if the type configured in the node graph does not match the one on the actual panel, an error will occur._

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/5f8a58e3b7be4853ae2e0619829123f8_1757675624.png)

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/6cffbc7b03eb495c9dfba12863c18762_1757675625.png)

### Example Problem 2: Computational Issues Leading to Incorrect Output

**Case Study:** Expected functionality is [After interacting, Player Variable +1, if Play Variable =5, execute xxx], but incorrect parameters were input while connecting the node graph, and the feature executes when the player score is only 4

**Root Cause:**The node graph is written with errors, so a run produces undesired input/output results.

**Inspection & Resolution:**Select the triggered event in [Log] to enter debug mode → Check input/output parameters in the operational flow one by one → If errors are found, modify relevant configurations in the node graph

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/16fc20e2103a438ea4d5343032c219e2_1757675625.png)

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/f1a506b190e1447eab39d8a80d55fa9e_1757675625.png)

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhuncai5oh6k/5a1ee895e2d14dfe9cdad3f4bf003c6f_1757675625.png)

[1.4 Importing and Exporting Saves](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhjuwpiubrh0)[1.6 Wonderland Resource Center](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhgf8i0hvzag)
