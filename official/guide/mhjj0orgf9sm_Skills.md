---
id: mhjj0orgf9sm
title: Skills
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho81frl33im
language: en
scope: guide
crawledAt: 2026-05-31T16:35:30.195Z
---

# Skills

# I. Definition of Skills

_Skills_ is an encapsulation that allows a character to perform a preset behavior in response to user input during gameplay. In the classic mode, character abilities such as Normal Attack, Elemental Skill, and Elemental Burst are all considered skills.

Skills primarily implement three basic functions:



Calling _character animations_: When editing skills, creators (Craftspeople) can define the character animation that plays after skill casting



Trigger _Client Node Graph_: By editing events on the skill animation _Node Graph Event Track_, specific client node graphs can be triggered at specific stages of the animation



Configure _Skill Statuses_: During animation playback, you can specify time windows to attach persistent logic, such as playing looping animations, etc

# II. Editing Skills

## 1. Entry Point for Editing

The Skill Editor can be accessed under the Skills tab in the Combat Preset tab

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/edb5e874-22db-4b75-b643-a2233db4616d.png)

Click [New Skill]![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/b268a27e-fa22-4beb-a108-c77d2e85e434.png)

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/49c7b411-1226-4144-b28b-c6c95ff7f89c.png)

Click [Confirm Create] in the pop-up to complete adding the new skill

## 2. Skill Parameters

The skill parameters are configured as shown in the graph below:

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/8790a5f7-6ce2-4250-9eac-9cb19133f9cc.png)

_Configuration ID_: The unique identifier of the skill, referenced when modifying the corresponding skill configuration in the Node Graph

_Skill Type_: Currently divided into seven types:

_Instant Skill_: Triggers immediately upon input; animation editing is not available

_Hold Skill_: Can provide skills with looping animation types. Players can enter the looping animation by holding down the corresponding input

_Normal Skill_: Basic skill type

_Combo Skill_: Can be configured as a series of consecutive actions, with transitions between actions possible upon receiving input at specific timestamps

_Aiming Skill_: Provides a set of aiming actions and puts the character into an aiming state when casting the skill

_Air Skill_: Can be cast while airborne

_Set Skill_: Uses a predefined animation set. Currently, only the Crouch set is supported

### (1) Basic Settings

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/7a03b215-f82f-4a90-bf9e-e7b0d59b748d.png)

_Enable Fall Protection:_ When enabled, the character will not fall off cliffs when casting skills that cause displacement

_Allow Cast in Mid Air_: Whether this skill can be used while the character is in an airborne status such as jumping, falling, or gliding

_Special Status Availability_: Used for skills such as recovery or counter skills. When enabled, the skill can be forcibly cast even in states where skills normally cannot be used

_Can be used when hit_: Whether the skill can be cast while the character is in a hit animation

_Can be used when hit in mid-air_: Whether the skill can be cast while the character is being launched or is in an airborne hit animation

_Can be used while swimming_: Whether the skill can be cast while the character is in a swimming animation. Only Instant Skills are supported

_Can be used while climbing_: Whether the skill can be cast while the character is in a climbing animation (If the skill is placed in the Normal Attack slot, this option is disabled by default and cannot be modified)

_*Skill Notes_: You can describe the general effect of this skill during editing

### (2) Numerical Configuration

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/8b0897a5-b06e-469d-8594-9c4539d7d475.png)

_With Cooldown_: Configure skill cooldown time when this is enabled

_Cooldown (s)_: The time required after casting a skill before it can be cast again

_Usage Limit_: The number of times a skill can be used can be configured when this is enabled

_Number of Uses_: The default number of times a skill can be used. When it reaches 0, the skill becomes unavailable. After each cooldown period, one use is restored, up to the configured maximum limit

_Resource Consumption_: When enabled, you can configure the consumption type and the amount consumed

_Consumption Type_: The type of _Skill Resource_ required to cast this skill. For details, check [Skill Resources](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh6ate95agb6)

_Consumption_: The amount of skill resources required to cast this skill

_Targeting Range_: Determines the area in which the skill searches for targets upon casting. Through the Local Node Graph, you can search nodes to retrieve the target unit. Currently, two search range types are available:

_Cylinder_: Described using _radius_ and _height_

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/fbd68e61-6f12-41d2-87d2-e04ae531a58c.png)

_Sector_: Can be considered as an upgraded version of a cylinder. In addition to _radius_ and _height_, you can also configure the filtering _angle_ and _rotation_

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/a92dea67-083f-4216-b379-b5ce26fe4916.png)

_Skill Attribute Group_: Can be modified to dynamically alter specific skill behaviors[Skill Attribute Group](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mh0inr0jak34)

### (3) Life Cycle Management

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/4d9b2306-dc1c-424f-8435-7e74896cf3df.png)

_Destroy the Skill When Reaching the Usage Limit_: When enabled, usage limit can be configured

_Usage Limit_: The maximum number of times this skill can be used during its entire life cycle. When the skill reaches its maximum usage count, it will be automatically removed

### (4) Combo Settings

Special configuration for combo skill types:

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/f379378d-a7e1-4e88-9a94-d0560ca5a7d1.png)

_Enable Charging branch?_: When enabled, you can define the logic for transition from combo animations to charge actions in the animation editor

_Charging Global Pre-movement_: When enabled, combo animation and charging animation will share the same pre-movement animation slot and all its configurations. When disabled, the animation in this slot will not play during runtime

### (5) Aiming Settings

Specific configuration for Aiming Skill types:

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/89d24f1c-4198-485a-9607-d7ec0c6ad4f9.png)

_Aiming State Activation_: Two options available - Hold and Tap Toggle

_Hold_: Click and hold the skill to enter the aiming mode, release to exit

_Toggle_: Tap the skill to enter the aiming mode, click again to exit

_Movement While Aiming_: Whether or not the character can move while in the aiming mode

_Aim & Fire Animation Duration_: After switching to the custom mode, you can modify the duration of the Aiming Skill's firing animation (this feature takes effect during gameplay but not in the preview mode)

# III. Editing Skill Animations

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/72c71a90-4a41-4ab7-b8b9-ab7229cc5966.png)

After defining the skill's casting conditions and logic, click Animation Editor to continue editing the specific logic after the skill is cast. Different skill types will have different configuration methods:

## 1. Normal Skills

Normal skills are the most common type of skills, with the most standard configuration method. Therefore, we will first use normal skills as an example to introduce the general configuration method for animation editing

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/9543ba67-3b7c-4d7f-8cea-733ca241fc1a.png)

As shown in the graph above, configuration is done in a timeline format, divided into an action track and a logic track. When the skill is cast, animations on the action track and events on the logic track are triggered sequentially based on the timeline to achieve the complete skill effect

### (1) Add Actions

First, we need to add the corresponding _actions_. The entry point is shown at position "A" in the graph above. Click to select the available _character animations_

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/7e4568d4-186f-4d4a-86ff-21e88997fff2.png)

Animation defines the scale of the entire _skill track_. The total length of the event timeline equals the sum of all animation durations. By adding events at corresponding animation timestamps, you can match visual effects with logic

### (2) Editing Event Track

The event track is located in position "B" shown in the graph above

The _Event Track_ is divided into four types:

_Start Event Track_: The timestamp that triggers immediately when a skill starts casting

_End Event Track_: The timestamp that triggers after all skill actions have been completely played

_Node Graph Event Track_: A track where you can mark points and add events based on action progress. Under this track, you can select specific animation progress positions and add a _Skill_ _Node Graph_, as shown below. When the animation reaches the configured progress point, the Skill Node Graph will be triggered

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/df167d9a-787a-457e-ba4f-000a42df2cfb.png)

_Status Track_: Used to define non-triggered behaviors, such as continuous special effect playback, as shown below. You can freely configure the start and end timestamps of this status

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/ca0e3c47-d050-4c85-b081-e656029a3d7e.png)

### (3) Special Notes

There is a very small probability that events will be skipped in the event track of a node graph, so some key logic should be written on the ending event track as a fallback.

### (4) Animation Clipping

Click a skill slot with an assigned animation to open the Animation Details panel

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/546bb163-6467-4c85-ae71-49e011d19e07.png)

Animation Details Configuration:

_Animation Resource_: Click to replace the current animation asset

_Slot_: Click to change the slot the animation is assigned to

_Animation Duration_: Allows for animation clipping

_Slot Duration_: Can be set to Follow Animation or Custom. A custom slot duration cannot exceed the animation duration

### (5) Animation Timeline Snapping

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/4354278d-635a-4d92-96bb-9bc18ca57d94.png)

Supports snapping to specific time points configured on the Node Graph Event track and Status track. This feature can be enabled or disabled using the settings button on the right side of the timeline

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/11c48a94-5c42-4241-9cb3-e48770590585.png)

Snappable time points include:

Animation Start & End Points (Red lines)

Animation Preview Points (Blue lines)

Endpoints of the Node Graph Event track and Status track

### (6) Skill Timeline Loop Segment

Functional: A loop segment allows logic within a specified time range to be executed repeatedly at a defined time interval

When an event track (Node Graph Event track or Status track) is selected, the track details panel is shown on the right

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/5a5964c4-451d-4ba6-9103-ad5029227494.png)

Loop Segment Configuration:

_Enable Loop Segment_: Enables loop segments for the current track. You can also create a loop track directly from the New Track options

_Loop Segment Start Time_: The start time of the loop segment

_Loop Segment Duration_: The duration of each loop segment

_Infinite Loop_: When enabled, the loop segment repeats until the end of the timeline

_Number of Loops_: The number of times the loop segment repeats. This can be configured only when Infinite Loop is disabled

The configured result is shown below:

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/c17837b8-924f-4ef2-9a44-15c19a84224d.png)

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/dda83944-d7b8-4f23-a1cc-4c003e780da5.png)

### (7) Adaptive Slots and Adding/Removing Slots

This feature is supported for the following skill types: Hold Skills, Normal Skills, and Air Skills

Adaptive Slots: Each slot supports both looping and non-looping animations

Add/Remove Slots: Click the + icon at the end of the slot list to add more slots. Right-click an existing slot to remove it

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/0daece71-140e-4b5f-919c-b45e6c4a1fb2.png)

## 2. Instant Skill

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/496ef5f0-368c-4f26-97bd-b26195a8c5e6.png)

As shown in the graph above, since all logics for instant skills are triggered at the moment of skill casting and no animation is called, instant skills cannot have actions added and only save the start event track

## 3. Hold Skills

_Hold Skills_ allows creators (Craftspeople) to reference loop animations on the animation timeline and execute different logic depending on whether the skill button continues to be held after the character enters the loop animation

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/7e203b07-c657-4e7b-a816-e59bd883d315.png)

After selecting an animation for the looping animation slot, you can adjust the _duration_ of the looping animation. When actually casting the skill:

If the character enters this animation and maintains a hold input state, the looping animation will continue playing up to the duration limit

If the character does not maintain the hold input after entering the animation, the animation will be immediately interrupted and transit to the corresponding branch based on the _branch track_ configuration

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/fd201b56-9cbc-4fc9-8db9-6cc4d231159e.png)

### (1) Branches

Click the buttons in the graph below to add or delete branches. Each branch represents multiple bundled animations. During actual skill casting, the skill will transit into a specific branch based on when you release the hold

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/29909315-ad94-4f5c-8887-c6fbcc031747.png)

Each branch can be configured with multiple animation clips, which will play in sequence after entering that branch

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/b501a81d-20b6-471a-81a2-d4cddab55866.png)

### (2) Branch Tracks

Branch tracks define specific rules for transiting to different branches. Click the branch track to open the branch event editing interface on the right side of the screen

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/6bcb05a1-e510-4b11-9ab8-7298505256f0.png)

_Number of Branch Transitions_: The number of branch transition scenarios this skill supports. This configuration will divide the branch track into the corresponding number of segments

_Response_: Allows creators (Craftspeople) to configure which specific branch each segment of the branch track transits to

On the branch track, creators (Craftspeople) can fine-tune the branch transition conditions by adjusting the length of each segment. During actual gameplay, when the player releases the hold, whichever response segment the current animation progress falls into will determine which configured branch the animation automatically transits to

## 4. Combo Skills

_Combo Skills_ allow creators (Craftspeople) to configure multiple independent actions and achieve "combo" effects through defined action transition rules and input windows. Meanwhile, combo skills also provide the functionality to transit into charge branches, with two tabs in the configuration: the combo skill animation tab and the charge branch animation tab



**Combo Skill Animation Editing Tab**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/8a48cabe-fff7-46ff-8d5f-6ee9b42606e4.png)



**Charge Branch Animation Editing Tab**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/23ec41d0-5b65-4563-bc37-1bdd35b7da72.png)

The configuration interface for combo skills is shown above. Unlike editing normal skills, the skill slots configured for combo skills will not play sequentially during skill cast, instead relying on the configuration of the combo track and the actual creator (Craftsperson) inputs for transitions

### (1) Combo Track

The combo track is a dedicated track for combo skills. On the combo track, creators (Craftspeople) can configure combo response events. A combo response event consists of a pre-input phase and multiple response phases:

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/c18e0557-79c1-43ee-89b5-d4780f3d69c6.png)

_Pre-input Phase_: During the pre-input phase, pre-input will be accepted when tapping a skill and trigger the corresponding animation transition when entering the first response phase. During the pre-input phase, holding on a skill will immediately transit to the charge branch animation if the _successful charge duration_ is met

_Response Phase_: During the response phase, tapping a skill will immediately trigger the response and transit to the corresponding animation

The specific editing interface for a combo response event is shown below:

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/24ef9c51-1f45-4654-a53c-22d1fa804948.png)

_Transition Settings_: Configuration rules for transitions between combo animations

_Number of Response Phases_: Defines how many response phases exist for this action

_Response Transition Animation_: The target animation slot to transit to when receiving input at each response phase

_Charge Settings_: Logic configuration for transiting to the charge branch during the pre-input phase

_Current Pre-input Can Transition to Charge Branch_: Switch for transiting to the charge branch

_Successful Charge Duration_: When the duration of holding to charge during the pre-input phase reaches this configured value, it will immediately transit to the charge branch

### (2) Global Pre-movement

Global pre-movement is a special animation slot:

1. When a character first enters a combo skill animation from the idle animation by tapping a skill, the action configured in the global pre-movement slot will be played first

2. When a character enters the charge branch animation directly from the idle animation by holding on a skill, the action configured in the global pre-movement slot will also be played first

### (3) Special Notes on Charging Branch Animation

In the animation slots for the Charging Branch, there is an extra slot (#2) between the Global Pre-movement (#1) and the Loop Animation (#3)

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/7ffbab3d-70c8-4cba-827f-74bc22437b6c.png)

The animation in this slot is only played when transitioning from the main branch. If holding the skill button from the idle animation causes the Charging Branch Animation to be entered directly, the animation in this slot will be skipped and will not be played

## 5. Aiming Skills

_Aiming Skills_ correspond to a bow character's charging and aiming action, with the following characteristics:



The Aiming Skill provides three animation slots, but they cannot be configured separately. Instead, they use a complete animation set configuration approach: when creators (Craftspeople) select one animation set, it will simultaneously fill all three animation slots

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/54fc98ec-3dcc-46c4-8cef-6f97ed7e5d39.png)



The Aiming Skill also provides branches and branch tracks, but each branch only provides one animation slot



Unlike Hold skills where the animation exits and transits to the corresponding branch when the looping animation duration reaches the cycle time, the charging animation of Aiming Skills will hold at the last frame of the animation, i.e., at the end of the track, after reaching the duration. Only when the player actively releases the skill will it transit to the corresponding branch

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/79314caf-373f-436e-8c1c-93fe0a3ed849.png)

Apart from the above characteristics, the event track and branch track configuration of Aiming Skills are the same as other skills. There are two status events on the status track that need to be used in tandem: entering the aiming status and enabling crosshairs

### (1) Enter Aiming State

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/362f18be-3022-4c46-96d4-882e531458b5.png)

_Camera FOV_: The field of view range when entering the aiming status

_Aiming Camera Offset_: Camera position offset when entering the aiming state

_Pitch Angle Range_: The player-adjustable camera pitch angle range when entering the aiming state

_Enter Transition Duration (s)_: The transition duration when switching from the original camera to the aiming camera

_Exit Transition Duration (s)_: The transition duration when switching from the aiming camera back to the original camera

Compare whether the Aiming Skill effect is applied:



Use Aiming State:

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/cf8e68eb-9c08-42b8-a3bd-6706049d5fd9.png)



Don't Use Aiming State

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/b9bd8b34-486f-4ded-a36d-a04f0e43861a.png)

### (2) Show Crosshair

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/177ff77a-39de-45b4-9a2a-298fdd3cc797.png)

No configurable parameters. After enabling, the effect is:

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/9dbc8c50-8a19-4358-9c67-92f033f76d53.png)

## 6. Air Skills

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/5838feaf-85ca-4458-aba6-53769c4146a9.png)

A new Air Skill slot has been added under Combat Preset - Player - Class - Configure Skills

When the character meets certain airborne conditions (reaching a certain height above the ground), the skill in the designated slot is forcibly replaced with an Air Skill. Air Skills can be cast in the air by default

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/18115d88-41cc-4eff-a031-640564ae139b.png)

Once an Air Skill is cast and its animation enters the [Infinite Loop] slot, it will remain looping in that animation slot until the conditions for entering the [Landing Branch] are met

Conditions for entering the Landing Branch: While the skill is within the duration of an "Enter Landing Branch" state block, landing will trigger a transition to the subsequent Landing Branch. Multiple "Enter Landing Branch" nodes can be configured on the Landing Branch track of an Air Skill

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/9c1515fb-b3be-47c2-a78b-0795e25e5e3b.png)

Event blocks on event tracks can be configured to [Follow Infinite Loop Slot]. When this option is enabled, any event block whose timeline position falls within the time range of the Infinite Loop slot will repeat indefinitely along with the animation

## 7. Set Skills

Certain animation sets with fixed, non-editable functionality are provided as packaged skill modules, such as Crouch. In actual use, they function similarly to Aiming Skills

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/833bfb33-9c27-4f87-be34-04c3ea30e365.png)

# IV. Skill Slots

_Skill slots_ determine where skills will be displayed on the UI and what input should be made to activate them. Currently five skill slots are available:



_Normal Attack_: Corresponds to the left mouse button on PC



_Skill 1_: Corresponds to the E key on PC keyboard



_Skill 2_: Corresponds to the Q key on PC keyboard



_Skill 3_: Corresponds to the R key on PC keyboard



_Skill 4_: Corresponds to the T key on PC keyboard

# V. Skill Instances

When a skill is added to a unit, a corresponding _Skill Instance_ is created. Each Skill Instance has its own unique integer ID.

A single unit can have multiple Skill Instances with the same skill configuration ID. A player can use the UI button for the corresponding slot to provide input and cast the skill only after the Skill Instance is linked to a skill slot. If a Skill Instance is not linked to a slot, it can only be triggered through Execution Nodes.

A single skill slot can contain multiple Skill Instances, which are stored in a stack structure. The most recently added skill is displayed with priority. When the current active skill is destroyed or removed from the slot, the previously added skill is mapped to the UI as the new active skill.

Air Skills and Ground Skills (that is, the other six skill types) use independent storage structures. When the character is on the ground or in the air, the active skill is determined based on the corresponding storage structure.

Through Node Graphs, players can bind and unbind Skill Instances to and from slots. Unbound Skill Instances remain on the character, and their remaining uses and cooldown time are still recorded. Cooldown time also continues to be calculated in the background.

# VI. Adding Skills

There are two main ways to add skills. The first is through the default class configuration. For detailed instructions, please refer to the [Classes](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhodlcrpht3q) documentation

The second way is to add via the Node Graph

## 1. Modify Skills via Server Node Graphs

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/727550f0-d918-40e9-8e2b-c0874ab4d7fd.png)

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/4d375683-5621-4e8b-803d-040b683626ad.png)

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/0c3c40ae-23fc-43f4-bf1f-c36320075437.png)

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/d06b960b-a60d-4865-b878-000520fd77e6.png)

![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/66836019-3e38-49e6-9eb0-c291acbbdc29.png)

## 2. Bind/Unbind Skills via Server Nodes

![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/1bdd11e6-6765-4e8f-9622-d1b653d1fdc5.png)

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/71a9f938-f13a-4672-90fe-22398a894d4c.png)

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/06634fb7-a24a-4698-be73-5ab197fbbd14.png)

## 3. Cast Skills via Server Node Graphs

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/8c934048-419e-4c1b-8387-32242a43bad4.png)

![Image 56](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/987a0314-409d-46b0-b768-bf98675a7387.png)

## 4. Query Character Skills on Both Client and Server

![Image 57](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/860f6000-fa99-4d15-96e1-c9672fd22043.png)

![Image 58](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/db0606af-84c6-4d07-a8fb-0d4ab5a653b0.png)

![Image 59](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/64a51170-4571-4fc6-82ca-1229a09b6d52.png)

![Image 60](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/1267c9a3-d07a-4cde-91ef-1b6e7d0ded6b.png)

![Image 61](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/017729d0-a955-41cc-a4f7-6029ae248d61.png)

## 5. Cast Skills via Client Nodes

![Image 62](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/44a92300-990e-4e03-9342-9d3618f17c0f.png)

![Image 63](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhjj0orgf9sm/6f43f888-15e4-43b8-a6f4-80709ce2e8a3.png)

[Resource System](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mht8l59439d6)[Classes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhodlcrpht3q)
