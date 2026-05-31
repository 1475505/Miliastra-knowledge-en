---
id: mhyoa89ov4g2
title: Entity Placement
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnffmieeqbg
language: en
scope: guide
crawledAt: 2026-05-31T16:22:02.408Z
---

# Entity Placement

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/e2d7e560-482d-4150-88e5-5f4f7b2da510.png)

# I. Function Overview

Create and place entities needed in a stage, and edit entity data. Shares the same scene as Terrain Editing

# II. Function Entry Point

Click the second icon in the top tab bar to switch to Entity Placement

Some features are available only on the Entity Placement tab.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/80b36365-1c79-4e52-9af9-1fbfd114bebb.png)

# III. Placement Process

## 1. Creating Object Entities from Assets Bar

Hold and drag an object from the Assets Bar with the left mouse button, then release to drop it into the scene; or left-click an object in the Assets Bar to create it at the center of the screen

(1) The dynamic units tab under the prefabricated tab creates dynamic entities. You can add components and node graphs to them; they are more performance-intensive and generally used for gameplay objects

(2) The static units tab under the prefabricated tab creates static entities. You cannot add components or node graphs to them, nor control them via node graphs; they are performance-efficient and generally used for scenery

(3) In the Custom tab, whether an object is dynamic or static depends on the type of Custom Prefab selected

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/e33f3faa-7b59-42b3-af85-b7a8564742c6.png)

Note: Dynamic Entities have GUIDs and can be controlled via node graphs; Static Entities do not have GUIDs

## 2. Basic Placement Actions

### (1) Single Selection

Left-click to select an object. The selected entity highlights with an outline, shows the Transform Tools and the toolbar, and expands the Details Panel on the right

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/345a7320-04df-48b4-9da5-e9f23ae3ad94.png)![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/77b7ea34-577c-424b-aa70-af8a5f90df99.png)

### (2) Multiple Selection

Hold the left mouse button and drag to box-select; hold Left Shift and left-click to add or remove from the selection

The Transform Tool appears at the center of all selected entities

Note: Some entities cannot be selected at the same time (e.g., Entity Models and Waypoint Models inside an Entity Motion Device Component)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/3552b975-67d6-45d3-bedd-96984282268e.png)

### (3) Cancel Selection

Click an empty area to deselect

### (4) Move, Rotate, Scale

Use the Transform Tool to move, rotate, and scale entities. Click Space to switch tool types (All-in-One, Move, Rotate, Scale)



All-in-One Transform Tool: Provides a subset of Move/Rotate/Scale and supports relative-coordinate transforms only

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/7f894076-0444-4146-b23c-bcdeda2a4ec8.png)



Motion Transform Tool: Changes an object's location; supports World coordinates or Entity (local) coordinates

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/f1a4e0b3-066e-4c0d-a87d-dadd2f4b139e.png)



Rotation Transform Tool: Changes an object's rotation; supports World coordinates or Entity (local) coordinates

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/6340110f-2c87-4bb7-b668-2c026b030c4b.png)



Scale Transform Tool: Allows you to change an object's scale, supports Entity (local) coordinates only

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/58729da0-92b3-402a-b977-1a50ca8a490d.png)

Use each Transform Tool's step increments to perform precise actions (Movement Stepping, Rotation Stepping, Scale Stepping)

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/f4c5d16c-0725-41a2-ae2f-0b069bc86c17.png)![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/bd29a043-1b7a-4bf9-9345-59caf166c342.png)![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/109bff73-01f0-4e9f-ba07-f3f8caf3d865.png)

### (5) Delete Entities

Click Delete to delete the selected entity

### (6) Copy and Paste Entities

Click Ctrl+C/Ctrl+V to copy and paste; the new entity appears at the cursor's position in the scene

Hold Alt and drag a Transform Tool axis to duplicate in place; the new object will appear at the original's scene position (copies per action can be set in Quick Settings → Other Settings → Alt Copy Quantity)

### (7) Copy and Paste Entity Data

Does not create new entities

Access this via the selected object's right-click menu

Pasting entity data overwrites the selected entity and updates its prefab reference; the entity's GUID does not change

You cannot paste entity data between objects and creations

### (8) Undo

Click Ctrl+Z to undo the previous action

Unavailable in some cases

### (9) Quick Save

Click Ctrl+S to save all data in the current stage. Unsaved data is not written to the Saving (save frequently)

Unavailable in some cases

## 3. Details Editing

Access this in the Details Panel on the right, under the Base Attributes tab (first on the left)

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/b9f2f26f-f1a4-4fac-b71a-fea6132429aa.png)

### a. Transform

Fine-tune location, rotation, and scale

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/ae404ab3-61a4-4e06-8664-a3759111cd3d.png)

After enabling Lock Transform, the locked entity's position, rotation, and scale cannot be changed via Transform Tools, preventing accidental edits

### b. Model

Replace the main object's model, view attachment points, and add decorations

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/0320a1f7-9397-471a-a6d4-28d2474dc4d8.png)

### c. Native Collision

Initially Effective: When enabled, the object's Native Collision box is enabled

Climbable: When enabled, the entity can be climbed

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/c8319feb-c8ee-4c7b-988f-0baa651f688c.png)

### d. Visibility

Model visibility affects only the model's display and does not impact the entity's other logic

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/208e2a51-17c3-42db-836c-c161d9acd0fd.png)

### e. Create Settings

When Initial Create is disabled, the entity is not created at the start and can be created dynamically via node graphs

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/598faa5b-500b-4f48-95e5-e273c9f2c056.png)

### f. Faction

You can set the entity's faction

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/16eace20-0b9a-4816-9f99-4bc9e6995f93.png)

### g. Unit Tags Management

Add tags and search for tagged entities within the node graph

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/f74b0282-2995-4f42-ac91-b157a0c30d2e.png)

### h. Entity Deployment Group Management

Manage an object's Entity Deployment Group

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/453a8724-6fa3-4f08-b931-f289e72b3d42.png)

### i. Load Optimization

Controls whether an object runs on the owning player's Local when it is far from the character

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/c62ef9ea-bc93-45ce-b67f-7261a36960db.png)

### j. Sound Effects

Determine whether the entity plays its own sound effects

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/c306625f-7cd2-46f4-8e73-f8590b98114d.png)

### k. Reference Source

View the prefab referenced by the entity

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/a7b7b34b-7b61-4e87-9cca-ae34ef407b9d.png)

### l. Notes

For inputting text notes

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/de8fbb86-2266-4dda-afd9-2c37d4d75757.png)

## 4. Quick Placement

Use Quick Settings (gear icon, top bar) to toggle related options

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/d768fd68-ee68-4c33-9248-eb0e4d01b95e.png)

### (1) Camera Settings

Adjust camera horizontal and vertical speed; click Reset to restore defaults

When Horizontal Lock is enabled, camera height can be adjusted only with E and Q.

### (2) Ground-Level Placement

When Ground Placement is enabled, drag the Transform Tool's pivot to place objects on the ground

### (3) Surface Adhesion

Snap objects to any of the six faces of their bounding box

### (4) Normalize Position After Surface Adhesion

Corrects an object's orientation after Surface Adhesion to align objects neatly

Adjusts the angle between objects to one of 0°, 90°, 180°, and 270°

### (5) Center Align

Aligns the centers of two objects

### (6) Show Distance When Moving

Displays the current movement distance while dragging with the Motion Transform Tool

### (7) Display Settings

Toggle persistent display of Creations Entering Battle Range, Preset Points, Empty Objects, and Path Waypoints

### (8) Alt Copy Quantity

Sets the number of objects created when copying with Alt

### (9) Environment Settings

Change the preview environment while editing

### (10) Edit Hotkeys

View the hotkeys for the editing interface

# IV. Entities, Prefabs, and Overwrites

## 1. Entities and Prefabs

Objects dragged from the Object Placement panel are entities. View the linked prefab via [Details Panel > Object Attributes > Reference Source]

Entity data references the prefab; edits made on the entity overwrite the referenced data

Deleting a prefab removes all of its entities

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/41629010-c241-4916-8905-9f1d549d425a.png)

## 2. Overwrite Prefab Data on an Entity

Non-overwritten fields receive updates pushed from the prefab (after clicking Overwrite Save)

Overwritten fields do not receive pushed updates (these fields are highlighted in blue in the Details Panel)

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/6b3f07a5-2dc4-4879-998b-94719569bcf9.png)

## 3. Modify Prefabs

Prefabs can be edited directly in [Prefab Library][Prefab Library](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhwp5h9d4h3e)

Entities in the Entity Placement panel can push data back to the prefab and overwrite prefab data via the right-click menu [Overwrite and Save Prefab]

[Save As Prefab] creates a corresponding new prefab

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/e2439d62-0a6f-40d5-831a-88dee75034fc.png)

## 4. Restore Entity to Prefab Data

### (1) Restore All

Click the objects icon on the top bar to open more options, then choose [Restore to Prefab Data] to revert all entity data — except location and rotation — to match the prefab

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/dd97acad-c43d-4f98-b53b-8240fbe183b3.png)

### (2) Partial Restore

Each attribute card supports restoring its values individually

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhyoa89ov4g2/75e80dec-c40e-4ef6-afcc-5d78b60773e0.png)

[Terrain Editing](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwe1n94b1x6)[Prefab Library](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwp5h9d4h3e)
