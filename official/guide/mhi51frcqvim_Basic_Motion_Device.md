---
id: mhi51frcqvim
title: Basic Motion Device
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnmcmipncrg
language: en
scope: guide
crawledAt: 2026-05-31T16:17:38.688Z
---

# Basic Motion Device

# I. Functions of Basic Motion Device Components

A _basic motion device component_ gives _object entities_ the ability to move according to set rules.

During Co-Op Mode, the basic motion device component prioritizes maintaining a consistent experience across all clients.

Basic motion device components support multiple basic motion devices working simultaneously. Their movements will be calculated simultaneously and stacked, although some basic motion devices are mutually exclusive.

# II. Editing Basic Motion Device Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/0582ce0f-7f6c-4bb2-adbe-2b7babee8d77.png)

(1) In the Entity/Prefab Editing interface, open the Edit Component tab.

(2) Click "Add Common Component" below, then select "Basic Motion Device" to add it.

(3) Press "Advanced Editing" to expand the editing page.

# III. Basic Motion Device Types

## 1. Uniform Linear Motion Device

_The_ _uniform linear motion device_ moves at a constant speed in a fixed direction based on the world coordinate system.

The parameters of the uniform linear motion device are shown in the figure below.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/8dc008fd-8329-4ef1-b421-5966b76d6574.png)

_Initially Effective_: When enabled, indicates that it takes place immediately once the entity is created.

_Effective Duration_: The motion device will automatically stop once the duration ends.

_Initial Speed_: Describes the entity's velocity along three axes.

_Velocity_: Initial speed after conversion to a 3D vector.

_*Relative Location_: Has no meaning during runtime. During editing, it predicts where the entity will be located once the elapsed effect duration has ended when this motion device is acting independently.

## 2. Uniform Rotational Motion Device

Rotates at a constant speed around a fixed axis based on the world coordinate system.

_Uniform rotational motion devices_ are shown in the figure below:

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/0032c1c5-a896-4c10-8f54-20167f2280df.png)

_Initially Effective_: When enabled, indicates that it takes place immediately once the entity is created.

_Effective Duration_: The motion device will automatically stop once the duration ends.

_Relative Rotation Axis Orientation_: Defines the axis of rotation.

_Angular Velocity_: Measured in degrees per second.

## 3. Target-Oriented Rotation-Based Motion Device

A motion device that rotates an object to a specified angle within a specified time.

_The parameters of the_ _Target-Oriented Rotation-Based Motion Device_ are shown in the figure below:

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/6b758624-bb52-4e2a-a083-ffc756a23655.png)

_Initially Effective_: When enabled, indicates that it takes place immediately once the entity is created.

_Effective Duration_: The motion device will automatically stop once the duration ends.

_Absolute Target Angle_: When the device takes effect independently, this is the expected orientation of the entity after the duration ends.

## 4. Pathing Motion Device

A device that moves objects along a specified path composed of multiple ordered waypoints.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/1c9de69b-590a-4e3f-9a1c-1aa68aaf30e4.png)

_Initially Effective_: When enabled, indicates that it takes place immediately once the entity is created.

_Loop Type_: Three loop types are provided:



_One-Way_: Stops moving upon reaching the path's endpoint and disables the motion device.



_Round Trip_: Reverses direction and returns to the starting point upon reaching the path's endpoint.



_Loop_: Upon reaching the path's endpoint, instantly teleport back to the starting point and restart the path.

_Waypoint List_:

_Time to Arrival_: Time required to move from the previous point to the current point.

_Movement Route_: Indicates the trajectory from the previous point to the current point.

_Relative Location_ _:_ Path Point Relative to Entity Position.

_Absolute Rotation_ _:_ Path Point Rotation Relative to World Coordinates.

_Notify Node Graph on Arrival_: When enabled, the object will send a "When Path Reaches Waypoint" event to its attached node graph upon reaching the corresponding waypoint.

## 5. Fixed-Point Motion Device

A motion device that moves an object to a specified position and rotates it.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/94c7a469-0c88-4536-9b7c-f12c3dd6332e.png)

_Initially Effective_: Takes effect immediately when the entity is created.

_Movement Type_: Provides the following two methods of motion.

_Uniform Linear Motion_: Moves to the target position and target rotation at a constant speed and turning rate.

_Arrive Immediately_: Ignores other motion description settings and immediately sets the object's coordinates and rotation to the target position and target rotation.

_Arrival Method_: Choose how to describe the movement rate.

_Fixed Speed_: Directly configure the specified rate.

_Motion Velocity (m/s)_: Enter the velocity value directly.

_Fixed Time_: Calculate the velocity based on the time required to reach the destination.

_Motion Duration (s)_: Enter the time required to reach the destination.

_Target Location_: The target position for the motion device.

_Target Rotation_: The target rotation for the motion device.

_Follow Rotation_: If configured, the motion device will not apply rotation changes to the object during motion unless set otherwise.

## 6. Stage Path Motion Device

A motion device that moves an object along a specified path, where the path is composed of multiple ordered waypoints. Unlike a regular path motion device, a stage path motion device references a stage path stored in a path management tool. When the motion starts, the object first moves to the first point of the path according to the configured method, and then continues along the path.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/d1d1236f-ef44-4d1e-a0b4-b85dc1cdf53d.png)

Most of the configurations for the S tage Path Motion Device are the same as those for the Path Motion Device. The following focuses on the differences:

_Stage Path_: The referenced path. After selecting a path, the waypoint information will be automatically generated based on the waypoints configured in the path management tool.

_To Waypoint 1_: Unlike the Path Motion Device, the S tage Path Motion Device needs to describe how to move to the first waypoint.

_Movement Type_: Provides two methods of motion.

_Uniform Linear Motion_: Moves to the target position and target rotation at a constant speed and turning rate.

_Arrive Immediately_: Ignores other motion description settings and immediately sets the object's coordinates and rotation to the target position and target rotation.

_Arrival Method_: Choose how to describe the movement rate.

_Fixed Speed_: Directly configure the specified rate.

_Motion Velocity (m/s)_: Enter the velocity value directly.

_Fixed Time_: Calculate the velocity based on the time required to reach the destination.

_Motion Duration (s)_: Enter the time required to reach the destination.

_Notify Node Graph on Arrival_: When enabled, the object will send a "When Path Reaches Waypoint" event to its attached node graph upon reaching the corresponding waypoint. _*Show Waypoint Information_: When enabled, detailed data for the waypoints will be displayed, but this information cannot be modified within the motion device.

# IV. Basic Motion Device States

The basic motion device has the following three states:



_Inactive_**:** The default state of the basic motion device when initially configured on a component but not yet activated.



_Running_**:** The state when the basic motion device is functioning normally.



_Paused_**:** The state when the basic motion device is paused. Different from stopping, a paused motion device will record the current motion progress and continue the motion once resumed.

# V. Basic Motion Device Stacking Rules

## 1. Stacking of Same Type

When using basic motion devices of the same type, multiple movement motion devices can operate simultaneously and their effects will stack.

Only one basic motion device of other types can be active at a time.

## 2. Stacking Different Types

Different types of motion devices can stack.

Special Note: Rotational Motion Devices, Orientation Motion Devices, and Fixed Point Motion Devices cannot be stacked together.

Path Motion Devices and Stage Path Motion Devices cannot be stacked together.

For more detailed stacking rules, refer to the following 2D table.

Uniform Linear Motion Uniform Rotational Motion Rotate Towards Target Path Movement Fixed-Point Motion Stage Path Movement
Uniform Linear Motion Can Stack Can Stack Can Stack Can Stack Can Stack Can Stack
Uniform Rotational Motion Can Stack Cannot Stack Cannot Stack Cannot Stack Can Stack Cannot Stack
Rotate Towards Target Can Stack Cannot Stack Cannot Stack Cannot Stack Can Stack Cannot Stack
Path Movement Can Stack Cannot Stack Cannot Stack Cannot Stack Can Stack Cannot Stack
Fixed-Point Motion Can Stack Can Stack Can Stack Can Stack Cannot Stack Cannot Stack
Stage Path Movement Can Stack Cannot Stack Cannot Stack Cannot Stack Cannot Stack Cannot Stack

# VI. Conflict Rules for Basic Motion Devices

Basic motion devices use the _name_ field as a unique reference method. Basic motion devices managed by a basic motion device component cannot have duplicate names. Conflicts occur when:



Enabled a motion device with the same name.



The activated motion device type does not follow the stacking rules.

When checking for conflicts between basic motion devices, only devices that are running or paused will be considered. Inactive devices will not be taken into account.

When a newly activated motion device conflicts with an existing motion device, the existing device will be stopped (not paused), then the new device will be activated.

# VII. Using Node Graph to Control Basic Motion Devices



Activate Basic Motion Device

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/8fc2bf0b-31f3-44f5-91aa-ce73417cdeaa.png)



Create Motion Device

Different nodes are available depending on the type of motion device.

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/e8b5a18b-9cb2-4fd3-9f75-04487dcf95a4.png)![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/47be6899-ed70-4af1-a9b2-2c6d6bf06ad4.png)![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/70fb53b7-99bd-4e76-9fba-3d95daf5c234.png)



Stop and Delete Basic Motion Device

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/95bd09c8-2bc1-4092-bd37-68aaf3703a0e.png)



Pause Basic Motion Device

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/6b8d48f4-0969-48c4-97f8-be59cc9de00d.png)



Recover Basic Motion Device

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/2ff6d01f-a021-486e-b0b2-802e3cc832ee.png)



Event Node

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/6d033ef3-d7e4-4017-9427-67f489e46b24.png)

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhi51frcqvim/70d0acb7-aa0d-49d4-b8de-90b4a2c9366b.png)

[Tab](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh5jko05fzyw)[Collision Trigger](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh8w69rzuc3i)
