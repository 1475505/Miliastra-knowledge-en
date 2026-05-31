---
id: mhiwt0rysfg6
title: Mini-Map Marker
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh0pppib5eyc
language: en
scope: guide
crawledAt: 2026-05-31T16:27:45.343Z
---

# Mini-Map Marker

# I. Mini-Map Marker Component Functions

The _Mini-Map Marker Component_ supports displaying entities on the **prefabricated Mini-Map UI Controls** through visual indicators such as icons/ranges

The Mini-Map Marker Component needs to be mounted on entities; it supports _players_, _objects_, and _creations_

Mini-Map Markers can be enabled/disabled through their default settings, or be controlled through _node graphs_

# **II.****Editing** Mini-Map Marker Components

## **1. Adding** Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/169e4c72-0d0b-4245-bdcc-4779eb00bd9a.png)

(1) In the Entity or Prefab editing interface, open the Component Editing Tab

(2) Click "Add Components" below, then select and click "Mini-map Marker" to add it

(3) Click "Advanced Editing" to expand the Editing Tab

## **2.**Basic Information of Mini-Map Marker **Components**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/86f08e1a-3860-4faa-b3fe-9f1e1e7184d0.png)

Configuration Parameters Description
_Initially Effective_ The drop-down menu provides a list of mini-map markers

Use the check box to toggle the marker's active state. Changes will be synchronized to the marker's Advanced Editing tab

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/be9a111e-ac4f-451e-b85e-31a3115011c1.png)![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/8733d1b7-b3c4-42e5-acd1-33e978c6e6f3.png)
_*Mini-Map Marker List_ Enumerates all mini-map markers for entity configuration

## 3. **Add Mini-Map Markers**

Click "Advanced Editing" to edit the Mini-Map Marker

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/1b44eb33-7c38-40d0-8193-89d7b58f6e7e.png)



Click ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/568fec50-2955-4e49-abf1-7f16fb2e01b2.png) to add mini-map markers.

The added mini-map marker is **initially effective** by default.



_Marker X_, where X is an ID, can be used as a node input to adjust the initial activation parameters of the mini-map marker.

## 4. Mini-Map Marker Parameter Descriptions

### (1) Display Settings

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/5316765d-192a-4ef9-bad6-d49d0226d8d2.png)

Configuration Parameters Description
_Initially Visible to All Players_ When enabled, the marker will be visible on the mini-map of all eligible players once it becomes active
_Follow Object Visibility_ If enabled, when the entity is hidden, the mini-map marker will be hidden as well
_Display Priority_ When Mini-Map Markers overlap at the same location, the marker with the higher priority will appear on top. A larger number indicates a higher priority

### (2) Marker Style

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/3abd9763-315b-48c7-b109-5e414998ec74.png)

Configuration Parameters Description
_Select Type_ It is divided into several types: icon, range, marker, player's marker, and creation icon. Each type will have different configuration parameters.
_Show Height Difference_ When enabled, entities with height differences exceeding 10m will be marked on the mini-map as well

### (3) Classification of Selection Types



Icons

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/07db1afe-a063-496e-9b69-4399487a0ac5.png)

Configuration Parameters Description
_Selec Icon_![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/39d344c2-b76f-4cca-a2db-5ac850a9096d.png)

Offers a variety of icons to choose from
_Background_![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/64fc5367-37a0-44a3-854f-351bbb871911.png)

Options: None, Circle
_Background Border Color_![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/a20cd2dc-ba6c-4c83-b558-9123ff655fa9.png)

Icon background color supports specific colors as well as logic-driven colors

Logic-driven colors include

[Hostility] Enemies in red, friends in green, and self in blue

[Follow Own Faction] Based on the current faction's colors

[Follow Owner's Faction] Based on the current entity owner's faction colors
_Clickable_ When enabled, open the map and click on the marker to display its settings information
_Text Content_![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/72038dd0-5e53-46ef-9213-4893eb573de7.png)

Click to set the text on the right



AoE

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/70358286-2474-421d-b8fa-6830e97d7b4d.png)

Configuration Parameters Description
_Area Style_![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/20dc143f-1075-476d-a849-3b193ae35e7b.png)

Area's border can be displayed as a solid line or a dotted line
_Color_![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/86dd627a-f6cf-46aa-bb5c-cc8f93c4a20e.png)

Icon background color supports specific colors as well as logic-driven colors

Logic-driven colors include:

[Hostility] Enemies in red, friends in green, and self in blue

[Follow Own Faction] Based on the current faction's colors

[Follow Owner's Faction] Based on the current entity owner's faction colors
_Area Size (m)_ Displays proportionally in the Mini-Map UI Controls according to the configured dimensions



Marker

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/9d0eef38-e855-421f-9c91-0ce623c181e7.png)

Configuration Parameters Description
_Style Preview_ Displays the point style which cannot be modified. Points are not clickable on the world map
_Color_![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/86dd627a-f6cf-46aa-bb5c-cc8f93c4a20e.png)

Icon background color supports specific colors as well as logic-driven colors

Logic-driven colors include:

[Hostility] Enemies in red, friends in green, and self in blue

[Follow Own Faction] Based on the current faction's colors

[Follow Owner's Faction] Based on the current entity owner's faction colors



Player's Marker

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/1ca8e7fc-4529-4ceb-af28-6f395d747d68.png)

Configuration Parameters Description
_Style Preview_ The preview icon shows the creator's (Craftsperson's) current icon. This icon needs to be passed through nodes. Player markers cannot be clicked on the world map
_Background Border Color_![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/5b779d45-86da-479f-a5e1-9519af6decdc.png)

Icon background color supports specific colors and logic-driven colors

Logic-driven colors include:

[Hostility] Enemies in red, friends in green, and self in blue

[Follow Own Faction] Based on the current faction's colors

[Follow Owner's Faction] Based on the current entity owner's faction colors



Creation Icon

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/735edfb9-c7f2-4f9f-aeb4-f45b481d6ff1.png)

_Icon Preview_ This can only be set for creations. Preview only, not editable
_Background Border Color_![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/86dd627a-f6cf-46aa-bb5c-cc8f93c4a20e.png)

Icon background color supports specific colors and logic-driven colors

Logic-driven colors include:

[Hostility] Enemies in red, friends in green, and self in blue

[Follow Own Faction] Based on the current faction's colors
_Clickable_ When enabled, open the map and click on the marker to display its settings information
_Marker Name_ Name of the marker
_Text Content_ Click to set the text on the right

# **III. Managing Mini-Map Markers Through Node Graphs**



**Modify Mini-Map Marker Activation Status**

Batch modify the Mini-Map Marker states of target entities through the input list of mini-map marker IDs.

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/58b4f45d-311c-45ab-9009-c9f465b69cdc.png)



**Modify Player List for Visible Mini-Map Markers**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/e5768d34-b3b7-42be-93b8-c7357f3c6f18.png)



**Modify Player Markers on the Mini-Map**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/68083a98-ada9-4248-a345-b0eb841bf4fd.png)



**Modify Mini-Map Zoom**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/6234f38a-9024-40ce-986d-73599d349215.png)



**Modify Player List for Tracking Mini-Map Markers**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/ada1fdbe-d1a5-4c69-a3fd-5f822736d80a.png)



**Query Specified Mini-Map Marker Information**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/42d95075-8983-4065-9eab-cd5854a06ed2.png)



**Get Entity's Mini-Map Marker Status**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhiwt0rysfg6/3aa3b2f5-8142-4063-a149-45a433c426ac.png)

[Scan Tag](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfc0lr1tcke)[Light Source](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhgkan9wgil6)
