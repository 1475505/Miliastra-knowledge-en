---
id: mhw2560p865k
title: Execution Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhb09x012qu8
language: en
scope: guide
crawledAt: 2026-05-31T16:22:56.319Z
---

# Execution Nodes

# I. General

## **1. Continue Executing Previous Frame Behavior**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/36707861-18aa-4157-94a8-ff389accd4b8.png)

**Node Functions**

If the Tactic executed in the previous frame has not finished, execution will continue until it completes

If the skill was executed in the previous frame, no process will happen

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **2. Execute Skill**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/0a741a39-5885-4614-ab09-8107e862a53b.png)

**Node Functions**

Execute the skill with the specified skill sequence number

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Enumeration
Input Parameter Skill ID Integer

# II. Tactics

## **1. Tactic: Ground Confrontation**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/1a0490c4-c1f3-4daa-bade-12ad4a00fa09.png)

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/5f57c267-99b3-4ae2-b41d-88a806137356.png)

**Node Functions**

The Creation executes a Paving Standoff. It uses four-direction Motion Tactics, with five directions: idle/forward/backward/left/right. Use this to simulate a sustained face-off with the Player.

You can use probability settings to create motion behaviors such as moving left and right around the Player, or preferring to move forward and avoiding moving backward. It also includes settings for adjusting distance to the Player and for obstacle avoidance.

Essentially, it just decides a direction; there is no specific Target Point

Execution Conditions:



Requires the unit or the target to be within the Territory Range



If _Reachable via Pathfinding_ is enabled and the unit is not airborne, Tactics will end when Pathfinding fails

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Inner Radius of Confrontation Distance Floating Point Numbers
Input Parameter Outer Radius of Confrontation Distance Floating Point Numbers
Input Parameter Direction Change Interval Floating Point Numbers Transition Time when changing directions. Default is 0. Each time the direction changes, the Creation stays still for the configured time, then switches to the new direction

Switching from another direction to Rest, or from Rest to another direction, does not count as an direction change
Input Parameter Minimum Rest Interval Floating Point Numbers
Input Parameter Maximum Rest Interval Floating Point Numbers
Input Parameter Is Pathfinding Always Achievable?Boolean
Input Parameter Whether Restricted by Territory Boolean If set to Yes and there are no valid points within the Territory, this Tactic will end immediately
Input Parameter Cancel Trigger Weight by Movement Floating Point Numbers
Input Parameter Forward Movement Weight Floating Point Numbers Affects Motion weights only in the Normal Mode. Even if you set the direction's weight to 0, the character may still move in that direction due to obstacle avoidance or unexpected conditions
Input Parameter Backward Movement Weight Floating Point Numbers Same as above
Input Parameter Leftward Movement Weight Floating Point Numbers Same as above
Input Parameter Rightward Movement Weight Floating Point Numbers Same as above
Input Parameter Lateral Obstacle Avoidance Distance Floating Point Numbers If the configured value is less than 0, the obstacle avoidance function will not run
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **2. Tactic: Ground Escape**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/3206611d-eb2e-4b6e-8619-67056a118048.png)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/1e3449b8-9f79-4f2c-8b47-c2f5027e97aa.png)

**Node Functions**

The Creation executes a Paving Escape, a tactic for fleeing from the Target. It attempts to turn its back to the Target and move farther away.

Allows you to configure multiple segments of Escape Motion. Each segment/run calculates one escape point.

Execution Conditions:



When the Creation is not in CD, and is inside its Territory, it will trigger fleeing behavior once their distance to the Target is less than _Flee Trigger Distance_

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Escape Trigger Distance Floating Point Numbers
Input Parameter Movement Speed Enumeration Walk and Run
Input Parameter Maximum Escape Angle Floating Point Numbers Uses twice the absolute value of the configured value as the actual flee point selection range
Input Parameter Minimum Escape Segments Integer
Input Parameter Maximum Escape Segments Integer
Input Parameter Minimum Escape Distance Floating Point Numbers
Input Parameter Maximum Escape Distance Floating Point Numbers
Input Parameter Escape Trigger CD Floating Point Numbers
Input Parameter Clear Aggro and Cancel Tactic After Countdown Floating Point Numbers If the value is less than 0, the Tactic will not be executed.

Otherwise, the timer starts from when the Tactics are entered. If it times out, battle will be forcibly ended.

After the Tactics execution ends, battle will be immediately ended
Input Parameter Whether Restricted by Territory Boolean If set to Yes and there are no valid points within the Territory, this Tactic will end immediately
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **3. Tactic: Ground Idle Roaming**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/2ef55102-8a02-4f33-a038-274d5477f087.png)

**Node Functions**

The Creation executes a Paving Roam, walking randomly within the AoE

Execution Conditions:



Affected by _Creation Underclock_, Creations that are too far from the Character will not enter this Tactic



Select a suitable Target Point

Point Selection Rules:



Unlike most tactics, the point-selection logic for the _Paving Roam_ tactic runs when it is **potentially** possible to execute _Paving Roam_, but before you Enter it

Because choosing the right Target Point is one of the requirements for entering this Tactic



Upon entering a Tactic, execute the Motion quest immediately. Keep it running until the Motion stops (when you reach the destination or hit an obstacle). Then apply the CD and exit the Tactic



If a Creation's current Location is already outside the _Roaming Radius_ AoE, the _Paving Roam_ Tactic selects a point in the direction from the current location toward the Spawn Point, at a distance equal to the _Roaming Radius_, as the Target Point



If Pathfinding is supported, it will be used to check whether the Target Point is valid

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Speed Enumeration Walk and Run
Input Parameter Idle Roaming Radius Floating Point Numbers Farthest distance you can roam from the Spawn Point
Input Parameter Minimum Idle Roaming Interval Floating Point Numbers The cooldown time between roaming behaviors. Each time roaming ends, the system randomly selects a CD between [Minimum Idle Roaming Interval, Maximum Idle Roaming Interval] and uses it as the new CD. This Tactic will not be executed during cooldown periods
Input Parameter Maximum Idle Roaming Interval Floating Point Numbers
Input Parameter Single Minimum Idle Roaming Distance Floating Point Numbers Roam Distance from Current Point
Input Parameter Single Maximum Idle Roaming Distance Floating Point Numbers Roam Distance from Current Point
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **4. Tactic: Ground Pursuit**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/c63e95b2-14c6-4c5f-83bb-97ca512c2bf3.png)

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/e5893f8b-3784-4e64-a9ec-6ebd2c4573a8.png)

**Node Functions**

The Creation executes a Paving Pursuit

Target Pursuit Tactic automatically selects a suitable location near the Target as the Target Point

Execution Conditions:

[Required]

1.

Has a Target

2.

Not airborne

3.

This unit or the target is within the Territory Range

[Meet any one of the Conditions]

1.

If this unit is not currently in this Tactic and the distance between the unit and the Target is within [_Minimum Pursuit Trigger Distance_, _Maximum Pursuit Trigger Distance_], the unit will enter this Tactic

2.

When already in the Tactic, the unit will continue to execute the Tactic only if the distance between this unit and the Target is greater than the _Stop Pursuit Distance_

**Node Parameters**

**Parameter Type****Parameter Type****Type****Description**
Input Parameter Execute Boolean
Input Parameter Minimum Pursuit Trigger Distance Floating Point Numbers
Input Parameter Maximum Pursuit Trigger Distance Floating Point Numbers
Input Parameter Stop Pursuit Distance Floating Point Numbers
Input Parameter Outer Ring Pursuit Speed Enumeration Walk and Run
Input Parameter Inner Ring Radius Floating Point Numbers Inner Ring Boundary Radius
Input Parameter Inner Ring Pursuit Speed Enumeration Walk and Run
Input Parameter Single Pursuit Duration Floating Point Numbers If value less than 0, do not execute the Tactic
Input Parameter Tactical Instance CD Floating Point Numbers
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **5. Tactic: Stand Still**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/38ca11a1-ada1-4fd5-97cd-9b817978861f.png)

**Node Functions**

The Creation executes the Idle behavior

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **6. Tactic: Return to Spawn Point After Leaving Battle**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/70a3f7bd-5965-42ef-997f-470f7800bff0.png)

**Node Functions**

The Creation returns to the Spawn Point after leaving battle

A tactic that makes a unit return to the initial point when leaving battle. While this tactic is running, the Aggro system is disabled and will not be re-enabled until the tactic ends.

Execution Conditions:

3.

This is only available in the pre-battle and out-of-battle phases. Place it first in your pre-battle Tactics so the Aggro system switches to it as soon as the battle ends

Select Target Points:

The Target Point is selected on the frame you enter the Tactic, and it will not be edited while the Tactic is being executed

Check the following conditions in order. When a condition is met, set the Target Point based on that item.

a.

When the [Execute a Patrol] Tactic is performed and _Set End Point to Spawn Point_ is enabled, the new Spawn Point will be used as the Target Point

b.

Set the Spawn Point as the Target Point

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Movement Speed Enumeration
Input Parameter Teleport Back to Spawn Point?Boolean
Input Parameter Force Teleport Trigger Distance Floating Point Numbers Prerequisite: Set _Teleport Back to Spawn Point_ to Yes

When this unit's distance from the Spawn Point is greater than or equal to the configured distance, a teleport will be forcibly triggered
Input Parameter Force Teleport Trigger Time Floating Point Numbers Prerequisite: _Teleport Back to the Spawn Point_ must be set to Yes

If the Tactic duration exceeds the configured timer and this unit has not yet returned to the Spawn Point, a teleport will be forcibly triggered
Input Parameter Disable HP Recovery After Leaving Battle Boolean
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **7. Tactic: Rotate to the Target Entity**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/ba96e3cf-df11-44b2-99b6-11961c6810af.png)

**Node Functions**

The Creation rotates to face the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Target Entity Entity
Input Parameter Horizontal Rotation Angular Velocity Floating Point Numbers
Input Parameter Use Rotation Animation Boolean
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **8. Tactic: Rotate to the Specified Direction**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/7e68337c-0146-4476-a48f-a7fb6ffd464c.png)

**Node Functions**

The Creation rotates to the Specified Orientation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Target Orientation 3D Vector
Input Parameter Horizontal Rotation Angular Velocity Floating Point Numbers
Input Parameter Use Rotation Animation?Boolean
Input Parameter Rotation Direction Enumeration Default: use the shortest angle

Clockwise

Counterclockwise
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **9. Tactic: Rotate by Specified Angle**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/3317100a-c47e-4992-b514-da6fb4cefeb1.png)

**Node Functions**

The Creation rotates by the specified angle, and the Angular Velocity may have minor deviations during actual operation

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Specified Angle Floating Point Numbers
Input Parameter Horizontal Rotation Angular Velocity Floating Point Numbers If set to a positive value, rotates clockwise;

if set to a negative value, rotates counterclockwise;
Input Parameter Use Rotation Animation?Boolean
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **10. Tactic: Move to the Target Position**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/bb3d87f7-b46a-495b-8797-a3f096b72fb5.png)

**Node Functions**

The Creation moves to the Target Point

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Target Position 3D Vector
Input Parameter Arrival Detection Range Floating Point Numbers
Input Parameter Movement Speed Enumeration Walk and Run
Input Parameter Turn Speed Floating Point Numbers
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **11. Tactic: Move to the Target Entity**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/47ef61b8-1ecb-46eb-9678-cbcb30fa4116.png)

**Node Functions**

The Creation moves to the Target Entity

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Target Entity Entity
Input Parameter Arrival Detection Range Floating Point Numbers If the Distance to the Target Entity is less than or equal to the configured value, it is considered arrived
Input Parameter Movement Speed Enumeration Walk and Run
Input Parameter Turn Speed Floating Point Numbers
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

## **12. Tactic: Execute Patrol**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw2560p865k/a6754386-bb8c-4b78-901b-460f618a1d3a.png)

**Node Functions**

A tactic setting where the Creation executes its patrol , using its configured Patrol Template to drive its motion.

Execution Conditions:

4.

The Creation is configured with a Patrol Template

5.

Patrol Template referenced by Tactics; the referenced path data is not empty

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Execute Boolean
Input Parameter Patrol Template ID Integer
Input Parameter Start From the Nearest Waypoint?Boolean
Input Parameter Set End Point as Spawn Point Boolean Affects the _Return to Spawn Point After Leaving Battle_ Tactic
Input Parameter Tactical Context String
Input Parameter Can Skill be Interrupted Boolean Default: No

[Operation Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjyvxrqz2fy)[Flow Control Node](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh21nw9b6f8i)
