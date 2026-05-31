---
id: mhmhbh9hp07e
title: Complex Creation Skill
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhftoirpwd46
language: en
scope: guide
crawledAt: 2026-05-31T16:19:28.918Z
---

# Complex Creation Skill

# I. Definition of Creation Skills

_Creation Skills_ are encapsulations that allow a Creation to execute the predefined behaviors. In the world of Teyvat, actions such as Hilichurls throwing Slimes or rocks are all considered skills.

Skills implement three core functions:



_Calling Creation Animations_: When editing a skill, Artificers can define the Creation animation effects that play after the skill is used



Trigger Client Node Graph: By editing events on the Skill Animation _Node Graph Event Track_, the specified Local Filter can be triggered at specific stages of the animation



Configuration _Skill Status_: During animation playback, specific time windows can be defined to apply persistent logic, such as playing special effects or setting Creation Orientation

# II. Editing Creation Skills

## 1. Entry Point for Editing

The Creation Skill Editor is located under the Skills Tab within the Combat Preset tab

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/7af42a85-2477-41a1-b8be-44e459a3fd0d.png)

Click ![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/bcba2442-e3bf-40cf-9a07-21c236916c69.png), then select which Creation to create the skill for in the pop-up window. This determines which skill animations are available during editing.

Finally, click [Confirm Create] to complete adding the new skill

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/13b5f17a-8e3b-4b62-8dd2-4dc712bc2c27.png)

## 2. Skill Parameters

The skill parameters are configured as shown below:

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/553c755e-7563-4917-aef1-25f5462c09de.png)

_Configuration ID_: The unique identifier of the skill. This ID is referenced when modifying the corresponding skill configuration in the node graph

_Skill Type_: Currently divided into two types

_Instant Skill_: Animation editing is not supported. Logic is triggered immediately upon input

_Normal Skill_: The standard skill type

### (1) Basic Settings

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/2e0aa7bd-eee7-48db-a181-a7b6ce700964.png)

_Model Attribution_: Different Creation models support different skill animations. Switching models clears all current Creation skill configurations

_Skill Notes_: Craftspeople can add custom notes to the skill

### (2) General Configuration

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/2061ff5e-1bdf-4e68-9cd1-4d1b746881a1.png)

Configuration Parameters Description
_Can Interrupt Other Skills_ When enabled, this skill can interrupt and override other skills while they are being used
_Automatically Face Target_ When enabled, the skill automatically faces the target when used
_Continue Casting After Defeating the Target_ When disabled, the skill will not be used if the target no longer exists
_Cast Skill When Target Is Reachable_ When enabled, the skill is used if the target's location can be reached through normal pathfinding
_Cast Skill When Target Is Unreachable_ When enabled, the skill is used if the target's location cannot be reached through normal pathfinding

# III. Animation Editing for Creation Skills

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/17257a1e-2194-4822-acb4-9ab7ec069df2.png)

After completing the general skill configuration, click Animation Editor to continue defining the logic executed after skill usage. Only Normal Skills support animation configuration

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/e5316f16-f56c-4a2b-9066-0a4fb285d416.png)

As shown above, configuration is performed using a timeline divided into an action track and a logic track. When the skill is used, animations on the action track and events on the logic track are triggered sequentially to produce the complete skill effect

### 1. Add Actions

First, add the required _actions_. The entry point is shown at position "1" in the graph above. Click to select from the currently available _Creation Animations_

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/160fa6cd-c9e9-4702-9991-58ecf0abafff.png)

The animation defines the scale of the entire _skill timeline_. The total length of the event track equals the sum of all animation durations. Adding events at the corresponding animation timestamps aligns visuals with logic

### 2. Editing Event Track

The event track is shown at position "2" in the graph above

_Event Track_ includes four types:

_Start Event Track_: Triggered immediately when the skill begins to be used

_End Event Track_: Triggered after all skill actions have finished playing

_Node Graph Event Track_: A track that allows events to be added based on animation progress. At a selected animation progress point, a _Local Filter_ can be added, as shown below. The Local Filter will be triggered when the animation reaches that point

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/0db318bd-1140-47ed-addd-fce95fe26c1f.png)

_Status Track_: Used to define non-triggered behaviors, such as continuous special effect playback. The start and end timestamps of the status can be freely configured

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/b254b591-bc66-43e4-b54f-eb28c312e117.png)

Note: If multiple [Set Creation Orientation] events on the status track overlap, they will conflict with each other logically, and overlapping events will not be executed. As shown below, the second event will not be executed; only the first and third [Set Creation Orientation] events will be executed

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/955f8fa3-4770-4a55-8ac3-80dc4a09f397.png)

### 3. Instant Skills

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/e1e889f5-3e18-447e-8e69-00f1d28ad098.png)

As shown above, all logic for Instant Skills is triggered at the moment of usage, and no animations are played. As a result, Instant Skills cannot add actions and only retain the Start Event Track

# IV. Adding Creation Skills

In the specialized settings for Complex Creations, open Creation Skill Management and click Details Editing to enter the Details Interface

Click "+" under the referenced skills, then select a pre-defined skill from the tab that appears in the lower-left corner to complete the addition

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhmhbh9hp07e/2438686e-800b-415b-b88a-a4e363be98aa.png)

[Skill Resources](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6ate95agb6)[Key Behaviors](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhapp3r8gkdq)
