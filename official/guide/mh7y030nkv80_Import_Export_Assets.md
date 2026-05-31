---
id: mh7y030nkv80
title: Import/Export Assets
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhxbd59urbfu
language: en
scope: guide
crawledAt: 2026-05-31T16:25:23.691Z
---

# Import/Export Assets

# I. Function Overview

The Import/Export Assets feature allows you to convert selected created content or content collections into a data archive that can be imported and reused later by yourself or others.

# II. Export Method 1 - Select in Stage

## 1. Entry Point

### (1) Right-click Menu

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/60052765-a3c6-4d91-bbe9-631e20f7996d.png)



Terrain Editing - Terrain Entities, Object Entities, Creation Entities.



Entity Placement - Object Entities, Creation Entities.



Prefab Library - Object Prefabs, Creation Prefabs.



Miliastra Sandbox - Server Node Graph, Composite Nodes.

### (2) Right-click in Assets Bar

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/6973d6fb-1edc-40b6-8196-e7024427fcb2.png)



Prefab Library - Object Prefabs, Creation Prefabs.



Combat Presets - Skills, Status, Items

## 2. Function Logic

Generate an archive file (.gia) from the selected content.

## 3. Export Related Items



When exporting prefabs



Mounted Node Graphs are exported synchronously with the file



When exporting entities



Associated prefabs (if any) and mounted node graphs are exported synchronously

## 4. Action Flow



Select the content you want to export, then click Assets Exporting.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/f42abfe9-9348-4049-ab63-1924440dc27c.png)



Choose a local folder for export and enter a file name.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/f1ce2380-203a-48a8-b9e3-efbebf97461b.png)



Wait for the file to be generated.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/dc9b6035-d0ff-40ca-accb-998335be5dbd.png)



When the export finishes, the archive file is created at the chosen file path.

# III. Export Method 2 - Multi-Select Export in Stage

## **1. Entry Point**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/881da533-7e06-4a3f-84af-0e636af370b4.png)



Terrain Editing - Terrain Entities, Object Entities, Creation Entities.



Entity Placement - Object Entities, Creation Entities.



Prefab Library - Object Prefabs, Creation Prefabs.

## **2. Function Logic**

When exporting multiple selections, they are exported as a combined asset into a single (.gia) file. After loading external assets, the package appears as a combined package on the [Import and Transfer] interface.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/8539f7d8-5614-4b3a-b7f8-a1c09d44390b.png)

After transferring assets, the combined asset appears in the [Import Asset] section of the Assets Bar and is available for use.

## **3. Action Flow**

Its behavior is consistent with single-selection export in the stage

## **4. Export Related Items**



When exporting prefabs



Mounted Node Graphs are exported synchronously with the file.



When exporting entities



Associated prefabs (if any) and mounted node graphs are exported synchronously.

# IV. Export Method 3 - UI Single/Multiple Selection Export

## **1. Entry Point**

System Menu - Asset Import/Export Tool

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/e53db50e-6c39-463c-bdd7-00452b0563e9.png)

## **2. Main Interface**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/b4071ddf-4cee-420a-83ff-8407ad0e56df.png)

## **3. Function Logic**

This feature lets you quickly select and export multiple assets. You can choose from any asset type that supports individual export. Logic matches in-stage selection: when exporting multiple assets, they are combined into a single (.gia) file and remain usable as a combined asset unit thereafter.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/8539f7d8-5614-4b3a-b7f8-a1c09d44390b.png)

## **4. Action Flow**



Click to select/deselect the assets you want to export.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/a0de7fa5-8d1f-40ca-bf72-a93ccf201043.png)



Click the button to open the [Selected Content Management] panel.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/51fb89f4-3e3f-43e6-a3ec-7ffa8f7a297f.png)



After completing content selection, click the Export Assets button.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/6187d4e1-1019-41e6-94af-f2735160c908.png)



Review the prompt, then click Confirm.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/f4e33377-3ac9-4b5a-99b0-b35ad4daed02.png)



Choose a local folder for export and enter a file name.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/f1ce2380-203a-48a8-b9e3-efbebf97461b.png)



Wait for the file to be generated.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/85f84fb9-c88d-46c1-bf81-9d41a99c3f5d.png)

# V. Local Asset Import/Loading Process

## 1. Entry Point

System Menu - Asset Import/Export Tool

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/e53db50e-6c39-463c-bdd7-00452b0563e9.png)

## 2. Function Logic

Load save files from the specified local folder into the Asset Library tab in Miliastra Sandbox for use during creation.

Each time local assets are imported, all content in the Asset Library tabs in Miliastra Sandbox is cleared and replaced with the newly imported content.

## 3. Auto Import

When opening the Miliastra Sandbox for the first time during an app session (resets after closing), local files are automatically loaded.

## 4. Action Flow



Switch to the Import and Transfer tab.



Click Load External Assets in the bottom-right corner.



In the prompt, click Load External Assets.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/1fa05f2f-05b1-4fe7-90f3-8ce8bae0b4ab.png)



Wait for external assets to finish loading.

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/32542308-f807-4ed7-9f5c-50af8a9d05eb.png)



A white text prompt will appear, indicating that all files were added successfully.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/c9a436a9-ebc8-4fbe-9167-32a12886adaf.png)

## 5. View Assets

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/9eae9da6-d0f1-46f3-bdc7-82c8426d279f.png)

Creators (Craftspeople) can right-click an asset bundle to view all assets inside it.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/df6de0c2-3033-4094-b2a0-18dbaf351449.png)

# VI. Asset Usage Process

## 1. Entry Point



Asset Types - Assets Bar - Asset Library



Node Graph Manager/Node Explore r - Folders - Node Graph External Assets/Node External Assets

## 2. Function Logic



Prefab Asset Usage - Add Prefab assets to the specified Custom Assets Bar tab.



Entity Asset Usage - Add entity assets to the stage.

## 3. Import Related Items

When using assets, related node graphs and prefabs are synchronously added to the default categorized tab or the Import Asset tab.

## 4. Action Flow



Left-click or select Transfer Assets from the right-click menu.

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/49dee4d1-33e2-447f-90e5-865360a1d3e2.png)



A tab selection confirmation pop-up appears.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/84654f66-d921-4226-b2e9-7640dbf32c72.png)



A white text prompt will appear, indicating the asset was used successfully.

# VII. Asset Usage Method - Combined Content

## **1. Entry Point**

Combined content appears simultaneously in the Assets Bar of all asset types contained within the [Combined Assets].

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/35d3fef4-1d38-4d0a-bb0e-35a845e2d99d.png)

## **2. Function Logic**

When using combined assets, all assets within (e.g., prefabs, entities, and node graphs) are added synchronously.

## **3. Action Flow**

When using combined assets, you can choose to add all assets simultaneously to the [Default Tab] or the [Import Asset] tab. (Note: If the Import Assets tab does not exist, the system will create it automatically.)

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh7y030nkv80/d5924a7a-d7bb-41c8-8414-001f03c33f66.png)

# VIII. Reference Relationship Recovery

## **1. Function Logic**

When exporting combined assets via [Import/Export Assets - III. Export Method 2](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhxbd59urbfu#NvCw4TM8-sd3mDnaaUspEK)/ [Import/Export Assets - IV. Export Method 3](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhxbd59urbfu#NcnPkUoM7qQNDjgY8BgnKE), all reference relationships between assets within the combination are recorded. When the combined assets are used, the relationships formed by GUIDs are preserved via replacement. (That is, as long as the combined assets belong to the same batch, the relative reference relationships between assets remain consistent before import and after use)

## **2. Important Notes**



To ensure correct preservation of reference relationships, assets with references should be exported together as a combined asset before use.

[Miliastra Sandbox](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho777i0ga90)[Undo and Restore](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhq6wdimcd84)
