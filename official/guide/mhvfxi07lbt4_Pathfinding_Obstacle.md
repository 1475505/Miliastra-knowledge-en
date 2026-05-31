---
id: mhvfxi07lbt4
title: Pathfinding Obstacle
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6c3uri84h2
language: en
scope: guide
crawledAt: 2026-05-31T16:31:03.031Z
---

# Pathfinding Obstacle

# I. Functions of the Pathfinding Obstacle Component

The navigation system uses a navigation mesh to define walkable areas in the scene

Pathfinding obstacles are objects in the scene that block navigation mesh generation or obstruct Creation movement

The Area settings in the Pathfinding Obstacle component mark regions that Creations cannot traverse

# II. Editing Pathfinding Obstacle Components

## **1. Adding Components**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/8b21b137-b785-4df1-9459-6c73cc49ff2d.png)

(1) In the Entity or Prefab editing interface, open the Component Editing Tab

(2) Click "Add Common Component", then select and click "Pathfinding Obstacle" to add it

(3) Click "Edit Details" to expand the Editing Tab

## **2. Editing Pathfinding Obstacle Components**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/754071f0-4ab5-49b7-8622-db6cfb38eb76.png)

Configuration Parameters Description
_Initially Effective Pathfinding Obstacle_ Use the dropdown menu to select a Pathfinding Obstacle type.

Toggle the checkbox to control whether the obstacle is active. The active state syncs with the Pathfinding Obstacle Editing Tab.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/9082ff78-7a72-48ea-955b-2a55ab0f9643.png)![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/77fbe0be-3950-44e8-b88a-95f7e7e4936f.png)
_*Pathfinding Obstacle List_ Lists all Pathfinding Obstacles configured on the Entity

# **III. Editing Pathfinding Obstacles**

## 1. **Add Pathfinding Obstacles**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/2da1d8f3-6c6a-47dd-ae5e-51655824895b.png)



Click ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/568fec50-2955-4e49-abf1-7f16fb2e01b2.png) to add a Pathfinding Obstacle.

Newly added Pathfinding Obstacles are **initially effective** by default



ID: X, where X is the obstacle's **sequence ID**. This value can be used as a Node input to control whether the Pathfinding Obstacle is enabled.

## 2. Related Parameters

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/d7b60fa4-5df0-433c-9d35-8f3fdd3f6bfa.png)

Pathfinding Obstacles can be configured to be initially enabled or disabled

Multiple areas can be added to a single Pathfinding Obstacle using the [Add Pathfinding Obstacle] button

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/e1813746-4d5d-404c-8c87-ad96fd2ccc68.png)![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/1d05db3c-dfa6-4856-a797-12365fac148f.png)

When the Pathfinding Obstacle shape is a Cuboid:

_Center_: The offset of the area's center relative to the object's position

_Rotation_: The rotation applied to this area

_Zoom Multiplier_: Controls the size scaling of this area

_Runtime Effective Size_: The actual size of the obstacle applied at runtime. This value is read-only and serves only as reference. It is calculated based on both the object itself and its area scaling. If the scaling of the object or the area exceeds the obstacle's limits, the preview may differ from the effective runtime range. The runtime value takes precedence

Cuboid minimum effective size: 0.5*0.5*0.5. Maximum effective size: 30*30*30.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/6e1fdde1-7092-43eb-9468-023a72bcf345.png)![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/5c648f02-ddb5-4c0a-8bb7-b03bcb448be0.png)

When the Pathfinding Obstacle shape is a Cylinder:

_Center_: The offset of the area's center relative to the object's position

_Angle_: The rotation angle of this area

_Radius_: The radius size of this area

_Height_: The height of this area

_Runtime Effective Size_: The actual size of the obstacle applied at runtime. This value is read-only and serves only as reference. It is calculated based on both the object itself and its area scaling. If the scaling of the object or the area exceeds the obstacle's limits, the preview may differ from the effective runtime range. The runtime value takes precedence

Cylinder minimum effective size: 0.25*0.5. Maximum effective size: 15*30.

# **IV. Managing Pathfinding Obstacles Through Node Graph**

## 1. Enable/Disable Pathfinding Obstacle

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/5a35358c-58d0-4110-ba42-04a3fa6998aa.png)

## 2. Enable/Disable Pathfinding Obstacle Feature

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhvfxi07lbt4/a730a996-37bf-4b53-82fa-48a0ff977b7d.png)

[Light Source](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhgkan9wgil6)[Object Camera](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhx9b60or59k)
