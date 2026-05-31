---
id: mh2ygorj0pna
title: Light Source
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhgkan9wgil6
language: en
scope: guide
crawledAt: 2026-05-31T16:26:44.596Z
---

# Light Source

# I. Light Source Component Functions

The Light Source component allows Creators (Craftspeople) to mount lights on Entities

Light sources provide basic illumination and can also be used to alter the environment's lighting and atmosphere

Multiple light sources can be active within a single Light Source Component at the same time

# II. Editing the Light Source Component

## **1. Adding Light Source** Component

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2ygorj0pna/6b5c935b-d8f8-452b-890b-9cdc2268cb48.png)

(1) In the Entity/Prefab Editing interface, open the Component Editing Tab

(2) Click "Add Common Component" below, select "Light Source," then click to add

(3) Click "Advanced Editing" to expand the editing tab

## **2. Light Source** Component Settings

The following parameters can be configured for each light source:

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2ygorj0pna/f19c4cee-406d-42b6-9dd6-7edba7aa0b0f.png)

_Initially Effective_: When enabled, the light source becomes effective when the entity is created

_Light Source ID_: Distinguishes this light source from others on the entity; cannot be edited

_Light Source Name_: Customizable; used for notes

_Light Source Type_: Currently supports Point Light and Spotlight.

_Color_: Sets the color shown on illuminated models

_Radius_: Illumination radius

_Intensity_: Degree of color or brightness change on the illuminated model

_Effective Range_: The light source is loaded only when a character enters this range. Used for performance optimization.

_Effect Range Preview_: When enabled, displays the active range of this light source in the Editing interface

_Attachment Point_: Specifies the Attachment Point the light source follows; defaults to the root node

_Location, Rotation_: Controls its Location and Rotation relative to the Attachment Point

Click [Add Light Source] to add a new light source

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2ygorj0pna/24f7c33d-2477-4559-8103-f27a16117489.png)

# III. Node Graph Related

Toggle Entity Light Source

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2ygorj0pna/c367e586-e0a9-431b-aa0a-53f8c56a26b9.png)

[Mini-Map Marker](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh0pppib5eyc)[Pathfinding Obstacle](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6c3uri84h2)
