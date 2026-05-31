---
id: mhr97di71wpg
title: Projectile Motion Device
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhaqt9rgqv4u
language: en
scope: guide
crawledAt: 2026-05-31T16:46:35.373Z
---

# Projectile Motion Device

# I. Functions of Projectile Motion Device Component

The Projectile Motion Device component enables entities to perform complex movements

Only one projectile motion device can be active on a component at a time

The position of the _projectile motion device_ may vary at each end, therefore it is recommended for use with _projectiles_ or motion-based effects

If a disconnection or reconnection occurs, the projectile motion device's position may reset

# II. Add Projectile Motion Devices

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr97di71wpg/1297d759-aebd-41ec-958a-0551e8be4186.png)

(1) In the entity/prefab editing interface, open the Editing Components tab

(2) Click "Add Common Components" below, select and click "Projectile Motion Device" to add it

(3) Click "Advanced Editing" to expand the editing tab

# III. Projectile Motion Device Types

The Projectile Motion Device currently supports four types

## 1. Linear Projectile

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr97di71wpg/f7c7e8d9-859e-4139-b2e5-507ed6d87e26.png)

_Initial Speed_: The velocity direction when the component gets initialized

_Speed_: Speed value

_Acceleration_: The increase in velocity per second

_Acceleration Duration_: The duration for which the acceleration rate takes effect

_Ground Hugging Movement_: Whether the movement is attached to the ground

## 2. Parabolic Projectile

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr97di71wpg/60ea7294-3c07-4fbe-bdc3-fb17d23c51a6.png)

_Initial Speed_: The velocity direction when the component gets initialized

_Speed_: Speed value

_Gravitational Acceleration_: Vertical downward direction, speed increase value per second

## 3. Tracking Projectile

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr97di71wpg/4d85257c-f418-4b1d-b916-d96b57c438dc.png)

_Tracking Object:_ The target to track.

_Track Target Attachment Point:_ Tracks attachment point on the target.

_Initial Speed_: The velocity direction when the component gets initialized

_Speed_: Speed value

_Acceleration_: The increase in velocity per second

_Acceleration Duration_: The duration for which the acceleration rate takes effect

_Tracking Angular Velocity:_ The projectile will turn towards the tracking target at the specified tracking angular velocity from its initial direction. If this value is small, the projectile may not be able to hit the target directly due to the slow turning speed.

_Tracking Final Phase:_ This can be set to one of three types:

_None_: No final stage settings. After reaching the tracking target, the projectile will continue to attempt to track the target, which may cause it to oscillate around the target.

_Cancel Tracking_: When the projectile is within a certain range of the tracking target (configured by _Stop Tracking Range_), it will stop the tracking function and continue in a straight line with the direction it had at that moment. This means the tracking projectile will not hit the target directly. It can be used to create projectiles that players can dodge by moving.

_Stop Tracking Range_: Configures the distance from the tracking target at which the tracking will stop.

_Adsorption Tracking_: When the projectile is within a certain range of the tracking target (configured by _Adsorption Range_), it will try to attach to the target over a fixed period (_Adsorption Time_). After this period, it will move stably with the target. Common tracking projectiles can use this configuration.

_Adsorption Range_: The distance from the tracking target at which the projectile will start to attract.

_Adsorption Time_: The fixed time it takes for the projectile to attach to the tracking target and then move stably with it.

## 4. Radial Fire

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr97di71wpg/dfe9c861-90ba-4bd1-8a03-30dcb9535c15.png)

_Around Object_: The object to orbit around.

_Track Target Attachment Point_: Which attachment point on the circular motion target.

_Rotate Clockwise_: When enabled, the object rotates clockwise; when disabled, it rotates counterclockwise.

_Circumradius_: The radius of the circular motion.

_Angular Velocity_: The angular velocity of the circular motion.

# IV. Node Graph Related

Create Projectile

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhr97di71wpg/95bdbe64-5e71-4e5e-9f1d-7207b306ee6f.png)

[Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhso1b9wjica)[Character Disruptor Device](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhstl890y7xe)
