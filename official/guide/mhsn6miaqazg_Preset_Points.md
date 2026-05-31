---
id: mhsn6miaqazg
title: Preset Points
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfvn30ctm9c
language: en
scope: guide
crawledAt: 2026-05-31T16:31:48.486Z
---

# Preset Points

# I. What is a Preset Point?

A Preset Point is a data record of location and orientation within a Scene.

Preset Points can be referenced by features that require points data, such as Spawn Points, Revive Points, and Node Graph retrieval points.

# II. Editing Preset Points

## 1. Entry Point for Editing

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/1fd6e6c1-ea38-4828-8ed3-6b655635fc1f.png)

## **2. Overall Editing Interface**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/44fcffcd-3fca-4153-ab0d-5c37d64d3e56.png)

### (1) Preset Point Library

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/b300c4f9-d312-48e4-8e18-6f54b0f9a69a.png)

All Preset Points are listed in this window.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/e368d923-398f-4c7c-bd0a-e592a2fc0733.png)Manage the visibility of the corresponding Preset Point in the Layout Scene

### **(2) Preset Point Visibility** in the Edit Window

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/4b5cc09e-6269-40a2-9ff4-cfb17516af38.png)

_Persistent Display Toggle On_ Even if the Preset Point management tool is disabled, all Preset Points remain visible in the Edit Window

_Persistent Display Toggle Off_ If the Preset Point management tool is disabled, all Preset Points become invisible

### **(3) Create Preset** Point

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/a70078f9-8371-4826-a14b-4f6913d0180c.png)

By clicking "Create Preset Point", a new Preset Point is generated at the center of the current Edit Window, with naming editing mode enabled automatically.

### **(4) Preset Point Parameters**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/1a5e58d4-8b81-4a8e-94a3-185fc46aabfa.png)

_Preset Point Name_ The name of the Preset Point, which can be modified

_Preset Point Index_ Used as an input parameter for Nodes and serves as the unique identifier of the Preset Point

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/a8b98cc1-0c34-4285-b1ed-e2f01385eea2.png)

Configuration Parameters Description
_Lock Transform_ When checked, the Preset Point's position and rotation cannot be adjusted
_Display in Scene_ When unchecked, only the coordinate axes remain visible, and the Preset Point model will be hidden
_Location_ The Location data of the Preset Point
_Rotation_ The orientation data of the Preset Point
_Unit Tags_ Add units tags to preset points. See [Unit Tag](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhzldmiwdgu4) for more details.
_*_ _Reference Relationship_![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/6f9fc618-1601-41a6-a3cb-a47e4a13545d.png)

# III. Referencing Preset Points

## 1. Spawn Point

In "Stage Settings" — Spawn Point configuration, you can _Select Point_ to reference a Preset Point as the Spawn Point

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/ece97ace-1329-497b-ae2d-41b3996a1242.png)

## 2. Revive Points

In "Stage Settings" — Revive Point configuration, you can _Select Point_ to reference a Preset Point as the Revive Point

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/55c88e77-01ef-4dd5-9b56-9db478af742e.png)

## 3. Node Graph



**Query Preset Point Position Rotation**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/99674ce6-a31a-4f2f-a41e-e234a3acfee2.png)

Through the Preset Point Index, you can search for its location and rotation data

Click ![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/b670f37d-12e0-4a00-87dc-fb0ec94ce538.png)to expand all Preset Point enumerations for selection as input parameters

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/bdf0f2fb-4942-46ae-a495-fcba2dd1262d.png)



**Get Preset Point List by Unit Tag**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhsn6miaqazg/5979f66d-5ef7-4b9d-a870-ea76176a7037.png)

[Unit Status](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6rh59iil2i)[Shield](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhhl0gire830)
