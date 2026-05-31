---
id: mhdipgirsolo
title: Scene Generation Templates
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjk3t996oiy
language: en
scope: guide
crawledAt: 2026-05-31T16:33:53.939Z
---

# Scene Generation Templates

# I. Function Overview

Scene Generation Templates let creators (Craftspeople) quickly generate large-scale scenes. These templates allow customization of what gets generated and their quantities, facilitating rapid construction of diverse scenes.

# II. Using Preset Templates

To facilitate direct use by creators (Craftspeople), we provide some preset templates.

## 1. Entry Point

Go to "Entity Placement". Open "Scene Generation Templates" → "Preset Templates", pick a template, then confirm to import.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/46f67299-8189-420e-b874-610cb63bab2b.png)

## 2. Generate Entities

In the "Uncategorized" tab (or any tab created), click or drag a template to place an entity in the scene.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/b9e58fce-1f77-4834-9d0d-1954c28b9f92.png)

## 3. Adjust Entity Parameters

Select the new entity. In "Base Attributes", its generation rules and generation range are configurable.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/dd331a90-02aa-43b0-97cc-4d860b06c704.png)

Open "Asset Configuration" to fine-tune what gets generated (asset types, density, etc.). For specific parameter descriptions, see Part IV "Parameters Introduction".

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/e0b0c558-2d58-405c-8e9e-929e1885da27.png)

## 4. Generate Scenes

After tuning parameters, click "Random Preview" to preview the result. If it looks good, click "Confirm Generation" to create the objects in the stage scene.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/e28772eb-79d6-49ed-b651-ecb0031fe82d.png)

## 5. Adjust Generated Objects

After generation, to move or delete everything together, use the upper-right button in the Scene Entity Group, then choose "Select All" or "Delete".

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/ef2cc687-aa79-43a8-96c5-6faf90164137.png)

# III. Creating Scene Generation Templates

To create a custom generation template, follow these steps:

## 1. Function Entry Point

Go to "Entity Placement", open the "Scene Generation Templates" tab, then click "Manage Template".

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/c9202736-3a22-4a39-860e-dd3ae022abf0.png)

Or open the system menu and click "Scene Generation Template Management".

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/aaf2ac4b-bc5f-4e3b-83dc-54c3835a0a21.png)

## 2. Create Templates

Click "New Scene Generation Template".

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/ff9a9790-81d4-4fd4-9747-dc993daa009b.png)

## 3. Configure Parameters

Click "Asset Configuration" to set the parameters.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/41b854d9-511a-4d98-aab9-ad2c44b59cfb.png)

## 4. Complete

After saving the template, it is available in the Asset panel under the "Scene Generation Templates" tab.

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/0dcc0e86-0440-4a56-ad76-f0e63a270781.png)

# IV. Parameters Introduction

## 1. Base Attributes Panel

The "Base Attributes" panel has two parts: Generation Rules and Generation Range.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/bbe48a2b-cdf5-47ca-845e-591f6aa16ffa.png)

### (1) Generation Rules



**Scatter Rule Preset List:** Click "Random Preview" to preview the scatter. If satisfactory, click "Save Scatter Rule". The saved rule can then be selected from the "Scatter Rule Preset List" for generation.

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/c1611b89-79d8-4c9d-b94c-35850e833388.png)



**Lock Generation Result:** When enabled, every generation repeats the previous result exactly.

### (2) Generation Range



**Spawn Area Shape:** Sets the shape of the spawn area. Two options: Cuboid and Cylinder.

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/afcdb7f3-d43a-4cc2-850e-79462333a38e.png)

## 2. Asset Configuration Panel

In "Asset Configuration", creators (Artificers) can edit the parameters for each spawn layer.

There are five default layers: Rock, Building, Tree, Vegetation, and Decoration. Additionally, custom layers can be added.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/0a5bffca-5922-48ed-8ad2-26aabbcea5bd.png)

### (1) Layer Parameters



**Generation Density:** Controls how crowded objects are in a layer. Lower values = sparser. Higher values = denser.

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/de04ef3a-da3b-48ef-9e6f-602bc0ab5cbd.png)![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/abbc2e0d-2cb0-4e27-80bf-405754dce392.png)



**Generation Randomness:** Controls sampling-point jitter for generated objects. 0 = more uniform. 1 = more chaotic.

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/c13305d1-0bf3-4cac-a07d-2d0b8ca6cfca.png)![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/93a4aac1-8e1e-448e-b1f3-baacaff8382b.png)



**Generate Based on Terrain:** Rock Layer only. Controls whether rocks generate based on the scene terrain.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/dffc612c-8008-4f7f-becf-61480f66d2fd.png)![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/da8a22e1-0546-4440-8679-0cbfb69be1e7.png)



**Associated Range:** Vegetation Layer only. Defines the effective generation radius of objects in the Vegetation Layer, using objects in the Tree Layer as the center. Outside this range, nothing spawns.

If the **Generate Interval Distance**for Tree-Layer objects is set too large, or the **Associated Range** for the Vegetation Layer is set too small, the Vegetation Layer may fail to spawn any visible objects. It is recommended to optimize through the following two ways: a. Reduce the **Generate Interval Distance** of Tree-Layer objects (negative values are allowed); b. Increase the **Associated Range** of the Vegetation Layer.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/af70daec-f9cf-4433-bbfa-d5abb5c6ee61.png)![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/515278c9-01ed-48fc-9e4c-a6c2f82a5d7e.png)

### (2) Detailed Layer Editing

To fine-tune a layer (asset types, weights, spawn interval distance, transform ranges), click "Details Editing" on that layer.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/23b1b5e1-80ec-4563-9c55-a3475249d913.png)![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/4e42cd9b-d0a4-43b9-9d9f-fabfdabf5845.png)



**Weight:** Controls how often each model is chosen within the same layer.

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/979d4b55-4353-4f53-99b1-06e31c64311f.png)![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/16cd157e-2eba-4741-a4e9-d059dc7aed43.png)



**Generate Interval Distance**: Controls the offset distance between the current model and the objects generated in the next layer, supporting both positive and negative values.

A circle is drawn with the current object's center as the origin, with a radius equal to the object's bounding box radius plus this value. Within the area defined by this circle, generation of objects in the next layer is prohibited.

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/b08e436c-a9c1-4acd-af29-c3412c9fb4ef.png)![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/0004c452-6e6b-4cfa-a180-8e7f4b706560.png)



**Model Assets:** Click "Add Assets" to add more assets. Choose asset types from the "Model Asset Library".

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/f3073dea-4fb0-4115-b482-f285183194de.png)



**Transform Range:** Sets the jitter range for location, rotation, and scale.

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdipgirsolo/fcf8ac37-1d85-4a2f-872d-a94d04d01f25.png)

# **V. Special Notes**

1.

Layers generate in order: Rock first, then Building, Tree, Vegetation, and so on. Except for Rock, layers follow the "Exclusion Rule": each layer generates only in empty space after excluding the previous layer's objects. (If a layer is too dense, later layers may have nowhere to spawn.)

2.

The Vegetation Layer is special. It follows the "Associated Rule" and spawns with the Tree Layer. If the Tree layer does not generate, then the Vegetation layer will not generate either.

[Prefab Group](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhzhzb9rw0uy)
