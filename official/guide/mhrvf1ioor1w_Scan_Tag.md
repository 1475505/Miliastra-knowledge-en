---
id: mhrvf1ioor1w
title: Scan Tag
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfc0lr1tcke
language: en
scope: guide
crawledAt: 2026-05-31T16:33:47.712Z
---

# Scan Tag

# I. What is the Scan Function

The scan function allows players to select an entity during gameplay by using the camera.

The scanned target can be configured to display special effects, such as unique icons or special effects.

In skill usage logic, scanned targets can also be retrieved via nodes from the relevant node graph, allowing selection of specific skill targets.

Whether an entity can be scanned and its status display after being scanned can be defined through _scan tags_ and implemented through _scan components_ to assign logic to prefabs and entities.

# II. Editing Scan Tags

A _scan tag_ defines the filtering logic and display settings for a scannable object. It must be defined globally in advance. Access the scan tag definition interface via "Scan Tag Management" in the system menu

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/62448dae-9c50-4fe5-b05d-2f3f6241cb75.png)

After entering the Scan Tag Definition interface, the editing interface will be divided into three main sections:

1. Scan Tag List

2. Scan Tag Effect Preview

3. Scan Tag Logic Configuration

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/6b20387c-6abe-4d9c-a586-0f11ba00e78b.png)

## 1. Scan Tag List

All defined scan tags can be found in this interface, making it convenient for creators (Craftspeople) to filter and search globally

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/68355bda-dd36-4ed1-b375-b3d9726710ed.png)

Click the "Create New Scan Tag Templat e" button to add a new scan tag

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/72a902e7-25b6-4d86-a692-617fd1b4d4a4.png)

## 2. Scan Tag Logic Configuration

The configuration section determines the rules by which prefabs and entities with this tag will be scanned during gameplay, and their behaviors when scanned. It is divided into two tabs: "Status Performance" and "Effective Conditions"

### (1) Basic Definition

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/98d050aa-e0a2-4a14-8867-97c52dc493c1.png)

_Scan Tag Name_: The name of the scan tag, used for identification only

_Configuration ID_: Data type serves as the configuration ID, which is the unique identifier of this scan tag, used to index this scan tag within the node graph

### (2) Status Performance

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/ce90c993-2bc4-4ef2-bb6d-7a6b8e1f386c.png)

_Icon Settings_: When a prefab or entity with this scan tag is selected by the scan logic, a hint icon will appear. This section configures the related display properties of that icon

_Select Icon_: Configure an icon resource group corresponding to different selection states. This field can be left empty, in which case no icon will be displayed. Up to two icons can appear on-screen simultaneously

_Attachment Point_: The icon is displayed at the attachment point of the corresponding entity's name

_Offset_: The offset position of the icon

_Selection State_: For a scannable entity, there are three selection states. The icon display differs for each state

_Active State_: The state when currently selected by the scan function. Only one entity can be in the active state at any given moment

_Available State_: The state when active state conditions are met but not yet activated, usually due to the existence of other higher-priority targets that are already active

_Disabled State_: The state when effective conditions are not yet met

The corresponding runtime behavior is illustrated in the graph below:

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/0f04a803-4238-44b3-a48f-f84fa98f4f0d.png)![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/3ae901ad-88da-4b9d-90ba-532d2f9f39c7.png)![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/7da68aaa-f9b2-41e5-9d7c-9703cb8d6bd1.png)

**Special Effects Settings**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/edb3852e-0275-4126-83b5-eebd4430323d.png)

_Activated Status Effects_: Effect configuration that will be applied when an entity carrying the scan tag component is in the active state

_VFX Assets_: Creators (Craftspeople) can select a suitable special effect asset here to apply as the effect

_Attachment Point_: The effect is applied at the corresponding unit's attachment point and automatically follows its position and rotation

_Zoom Factor_: The actual scale at which the effect asset is played

_Offset_: Additional offset based on the above attachment point position

_Rotation_: Additional rotation applied relative to the attachment point above

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/86e0c379-925a-4a48-bd59-7d1faffeb5a9.png)

_Available Status Effects_: Effect setting that will be applied when an entity carrying the scan component is in the available state

The configurable parameters are consistent with the activated status effects

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/ff252424-6f4b-4a70-b251-5eb16f36d163.png)

_Disable Status Effects_: Effect configuration that will be applied when an entity carrying the scan component is in a disabled state

The configurable parameters are consistent with the activated status effects

### (3) Effective Conditions

The effective conditions describe the conditions which must be met to put a scannable entity into the available state

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/ec6e0e5e-7d34-43ce-84c5-d2b0d688a018.png)

_Local Filter_: B oolean filter and integer filter can be selected

_Filter Node Graph:_:Can be associated with a local filter node graph of the selected type. If the return value of the local filter does not meet the conditions, the entity will not participate in the state calculation and will be considered as a non-scannable object.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/f7c064bb-697f-4469-986c-8f8ea48f7ef5.png)

_Obstacle Detection_: Obstacle detection is used to verify line-of-sight between the local-controlled character and scanned entities. It determines whether there are obstructions between the character and the scanned object. When enabled, if the ray detection fails, the entity will be disabled.

_Obstacle Detection Point_: The name of the unit attachment point on the scanned object. This serves as the target point for ray detection

_Ignore Water Surface_: When enabled, if a water surface collider is detected between the player and entity, it will be ignored and treated as if there is no obstruction

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/4a5611a7-8845-48f5-9986-9647da8b431c.png)

_Distance Detection_: Used to define the available range of a scannable entity. This determines the distance within which the scannable object and local character are available

_Distance Detection Point_: Distance detection evaluation is based on the position of the configured unit attachment point

_Detection Range_: If the scanned entity is not within the configured range, it will be disabled. The range can be previewed directly in the scene

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/295aa81f-9fba-4b37-8374-acbdd07a6bf2.png)

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/937244f8-f345-4399-9117-c14ed77e1636.png)

_Line of Sight Detection_: Line of sight detection is used to determine whether there are any obstacles between the local camera and the scanned object. When enabled, if the ray detection fails, the entity will be disabled.

_Line of Sight Detection Point_: The unit attachment point on the scanned object used as the target for ray detection

_Ignore Water Surface_: When enabled, if a water surface is detected between the local camera and entity, it will be ignored and treated as if there is no obstruction

_Ignore Obstacles_: When enabled, line of sight detection ignores all obstacles

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/826812bd-ad88-4193-9341-4084ea0eb2eb.png)

_FOV Range Settings_: Requires that the scanned entity must be within an elliptical area at the center of the screen, otherwise the entity will be disabled

_FOV Detection Point_: Detection is based on the unit attachment point position as set on the entity

_Ellipse Horizontal Axis Ratio_: The ratio of the ellipse's left and right borders relative to the screen width

_Ellipse Vertical Axis Ratio_: The ratio of the ellipse's top and bottom borders to the screen height

Click "Preview FOV" below to visually preview the effective range, as shown in the following graph:

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/34c6f218-185b-4a03-8189-49e52056422e.png)

# III. Editing Scan Tag Components

## **1. Adding** Components

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/04d27ada-3419-4544-88c2-ea51f550f082.png)

(1) In the Entity or Prefab editing interface, open the Component Editing Tab

(2) Click "Add Components" below, then select and click "Scan Tag" to add it

## **2.**Scan Tag Component Settings

The scan tag component can be configured with multiple alternative scan tag templates, but only one scan tag can take effect during gameplay. This can be dynamically switched using node graphs

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/bb8ba572-d88f-4455-86ee-40b8a2a53c7e.png)

_Initially Effective_: Default active scan tag

_Scan Tag List_: All scan tags contained in this component

Click Advanced Editing to enter the editing interface

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/396cb7d5-c790-413f-8e0a-3d8460afe1d2.png)

In this interface, click the Add button to add a new scan tag and set its scan tag template reference

_Scan Tag ID_: Used as an identifier when switching node graphs dynamically

_Initially Effective_: Determines whether the scan tag is active initially. Only one scan tag can be active at a time

_Reference Scan Tag_: Select and reference pre-defined global scan tags

# IV. Scan Tag Filtering Logic

The previous section on Scan Tag Logic Configuration introduced under what conditions a single scan object would be considered available. When multiple available scan objects are present simultaneously, only one scan object will be set to the active state. The filtering rules are defined by the class attribute "Scan Tag Recognition Rules"

For more class information, please check [Classes](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhodlcrpht3q)

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/c152f9cd-04c7-40cc-8486-dd6f6501fa29.png)

_Scan Tag Recognition Rules_: Rules for filtering active units from all available Scanned Objects

_Distance From Center of FOV_: Scan tags closest to the center of the view are prioritized for activation

_Actual Position Distance_: Gives priority to activating scan tags nearest to the player character

# V. Scan Tag Node Graph Nodes

## Server Nodes



Set Scan Tag Rules

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/e21a08d8-4caa-4fcf-bb3a-a50fb7f24e3f.png)



Set Scan Component's Active Scan Tag ID

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/88f45b2a-900f-42a6-bdf1-81d184ac7ff8.png)



Get Current Active Scan Tag Config ID

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/b8d1895f-74fc-4f77-a923-fd696341c518.png)

## Client Node



Get All Valid Entities That Are Scannable by Scan Component

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/b084346b-1c45-4751-a4ae-394854275d6c.png)



Get Entity Currently Scanned by Scan Component

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/ccef5852-8148-4a80-ad6a-c57f478bbb55.png)



Get Entity's Current Active Scan Tags

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/af72a3b6-61c9-4549-bb1e-1aedf88a06bd.png)



Get Entity's Scan Status

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrvf1ioor1w/b5b1c652-2ecb-405a-af9b-42c2b090b33c.png)

[Shop Component](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho6gviqhsqs)[Mini-Map Marker](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh0pppib5eyc)

1
