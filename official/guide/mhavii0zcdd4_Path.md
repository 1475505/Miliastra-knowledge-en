---
id: mhavii0zcdd4
title: Path
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh333vim2h44
language: en
scope: guide
crawledAt: 2026-05-31T16:30:56.231Z
---

# Path

# I. Path Functions

Path is a feature that combines one or more _waypoints_, which contain only position and rotation information, into a set of path information.

The waypoint information in the path consists of world coordinates and rotation. Its data content will not be adjusted when referenced.

Paths can be referenced by any supported functionality, which currently includes the _Not-in-Battle - Patrol_ feature of _creations_ a nd the stage path movement of the basic motion device component.

# II. Path Management Tool Functions

_Paths_ are managed uniformly through the Path Management Tool

Add or delete paths and edit the data within them

Manage the tabs that organize paths

# **III. Editing Paths**

## 1. Entry Points

Open the System menu in the top left corner and select _Path Management_ to open the Path Management Tool

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/32eba705-cb62-4544-9abc-689c4edd5d39.png)

## 2. Tool Display Interface

Divided into the path management bar and the path configuration bar

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/3818a5b6-726e-447d-9bf3-c776c423f5aa.png)

### **(1) Path Management Bar**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/dffcea21-e442-4060-8720-745a70db3509.png)



New Path

Create a new path by ![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/95dce37a-269d-4e7d-b7b5-858ef53111a1.png) creating a path

Newly created paths are assigned to the _*Uncategorized tab_ by default

It uses the screen center point as the first waypoint of the path

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/50fc4fdf-d5c9-4e2a-98ad-4ac59ab7908d.png)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/e3681666-65ba-4daf-bbd4-3f1d29857681.png)



Management Tabs

Select the _*Uncategorized tab_'s ![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/ee54ec91-4201-4784-ae70-18df57d07e86.png) to add a new tab and name it

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/7df2b6b6-00a5-4e45-b1a9-6b322f346249.png)

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/9108e863-528c-4818-92c2-f38ebc8775a9.png)

New tabs are empty by default. Assign paths to a tab and right-click _*Change Tab_ to adjust tabs where paths are located in for easier management

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/4923ee46-c315-41ee-9bcc-f8003524780f.png)

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/be8f8cd6-33db-4652-9da6-8aeccd975e2c.png)![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/dcb33913-6eab-45f8-a4a3-a69d4f2a22d7.png)

### **(2) Path Configuration Bar**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/3b3d339f-bf02-49c6-873d-63d948ee0b35.png)



Index and Name

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/1f58fbcc-4812-4f02-b839-f664b61c88c6.png)

Configuration Parameters Description
_*Name_ The path name used for identification must be unique and can be modified
_Index_ Unique identifier for the path, can be used as a node graph input parameter



Basic Configuration

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/128dd23f-9636-41f6-8214-e4893c0ce666.png)

Configuration Parameters Description
_*Lock Transform_ When enabled, waypoints on this path can only be added or deleted; their information cannot be adjusted
_*Display in Scene_![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/2f31783c-0d95-4f74-a321-96dea6029236.png)

When enabled, all of a path's waypoints and their connection order will be shown in the scene
_*Path Center Point Location_ The center point position of the path. This position maintains a constant relative distance to all waypoints. Therefore, modifying this position will affect the positions of all waypoints on the path
_*Path Center Point Rotation_ The center point rotation of the path. This rotation maintains a constant relative angle to all waypoints. Therefore, modifying this rotation will affect the rotations of all waypoints on the path



Waypoint List

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/c7369521-8a1f-4aea-873c-c186a6936aed.png)

Configuration Parameters Description
_Location_ Parameters can be manually adjusted to adjust waypoint position
_Rotation_ Parameters can be manually adjusted to adjust waypoint rotation
_*Add Waypoint_ Click to create a new waypoint

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/c9fee39b-3bf9-4cad-b712-bcdf5743eb5c.png)
_*Free Placement_ Clicking clears the interface. Place new waypoints in the scene using the left mouse button

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/72b42b0c-9485-4a20-b753-581c39b53011.png)Use![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/1e1f00e0-53d5-4436-9072-1c612ae79b83.png) to end placement

Click the button on the right side of the waypoint![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/28722cb7-c3d1-4779-8e55-1d30e7eaaba4.png) to expand auxiliary editing

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/49e19549-4674-4840-b32b-1f44c3050354.png)

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/9e63928f-1368-47c0-aee7-d14c840c12a8.png)

Configuration Parameters Description
_Tangent pointing to the destination_ Adjust waypoint rotation to point to the next waypoint
_Tangent pointing to the starting point_ Adjust waypoint rotation to point to the previous waypoint
_Select All Waypoints on Path_ Select all path points on this path. Disabled if no path points exist
_Add Waypoint toward the destination_ Adds a new waypoint after the selected point's number.

For example, adding a waypoint after waypoint 2 will create waypoint 3, and the previous waypoint 3 will become waypoint 4
_Add Waypoint toward the starting point_ Adds a waypoint before the current point's number.

For example, when adding a preceding waypoint at waypoint 2, the new waypoint becomes waypoint 2, and the previous waypoint 2 becomes waypoint 3
_Copy_ Copy the waypoint's coordinates and rotation information
_Paste_ Paste the copied waypoint's coordinates and rotation information
_Delete this waypoint_ Delete the specified waypoint



Reference Source

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/c2e1ecbc-b7e3-49b7-b81a-4871700a9ff9.png)

Configuration Parameters Description
_*Creation Reference_ Displays the number of references to this path

Can locate creations that reference this path
_*Object Reference_ Displays the number of references to this path

Can locate objects that reference this path

# III. Managing Paths Through Node Graphs



**Get Specified Waypoint Info**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhavii0zcdd4/e026ebde-92d9-4edb-99e7-4962a263eb07.png)

[Shield](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhhl0gire830)[VFX Tools](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh4ejditwixg)
