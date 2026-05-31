---
id: mhqsjmittry4
title: Load Optimization
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhlb1vivioys
language: en
scope: guide
crawledAt: 2026-05-31T16:26:57.266Z
---

# Load Optimization

During gameplay, when there are too many _entities_ in the scene, it may cause the game load to exceed limits. When users encounter such issues, they can consider using _FOV Detection_ for _load optimization_.

In simple terms, users can designate certain non-critical entities to be unloaded locally when the character is at a considerable distance, thereby saving the cost of these objects

# I. FOV Detection Parameter Configuration

There are two entry points for FOV Detection configuration:

## 1. Global Load Optimization Settings

In the stage settings interface, you can see the load optimization options

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqsjmittry4/d9e6dfef-ae05-407d-aafe-db4a89a1eaaa.png)

FOV Detection Status:

_Follow Entity Configuration_: When this option is selected, this load optimization will take effect according to the attribute configuration on the prefab/entity

_Disable_: When this option is selected, this load optimization feature will be disabled

## 2. Load Optimization Attributes

In the object's Basic Information tab, you can see the load optimization attributes. If set to "Enable", the object's entity will be subject to load optimization logic, which may result in _local destruction_ when too far from the character

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqsjmittry4/0dc6f0aa-74bb-4bc4-b9fc-1ca00e74c493.png)

## 3. Creation-Specific Optimization Functions

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqsjmittry4/2bba5b0e-3752-44c5-8dcf-5b2d4611e544.png)

**Out-of-Range Frequency Reduction**: This is a creation-specific optimization function that is enabled by default.

**Enabled**: During level runtime, if the creation entity exceeds a certain range from the character, it will run at a reduced frequency on the client side of that character.

**Disabled**: During level runtime, if the creation entity exceeds a certain range from the character, it will still run with normal logic.

# II. Rules for FOV Detection

## 1. Local Destruction State

The aforementioned "Local Destruction" state is different from the destruction of the entity, which can be understood as merely being "Do Not Show" on the client side, while the entity's logic still exists:



It can still be indexed and controlled logically through the node graph nodes



When a player approaches a locally destroyed entity, the entity will be recreated locally



In Co-Op Mode, locally destroyed entities may differ between different users based on their distance from the local character



When a local entity does not exist, certain purely local logic may not run, such as playing special effects

## 2. Destruction Rules (FOV Detection Grid)

### (1) Grid-Based Planar Division

Under the FOV detection load optimization rules, the actual gameplay scene will be divided into multiple square areas of the equal size. During runtime, character units and other entities in the scene will be placed into a unique grid:

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqsjmittry4/24fa7156-db46-4865-a091-b170057641a8.png)

Taking the grid where the character unit is located as the center, multiple surrounding grids form the "_FOV Detection Range._" When FOV detection optimization is enabled, entities outside the vision detection range will be subject to "local destruction" and become invisible during gameplay. As shown in the graph below, assuming a FOV detection range of 3 × 3:

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqsjmittry4/cfce5509-96ce-46a2-b473-71dad33da139.png)

### (2) Character Cross-Grid

When the character's position changes, the FOV detection range will also change, and entities will be created or destroyed when entering/exiting the character's FOV detection range, as shown in the graph below:

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqsjmittry4/144b149d-1e78-4961-b2f7-1e53c00f6778.png)

### (3) Entity Cross-Grid

When entities cross grids through any Motion Device or Creation behavior, they will be created or destroyed if they trigger entering/exiting the character's FOV detection range:

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqsjmittry4/279b4907-b6ac-43da-9f6b-b7f3d0812db4.png)

# III. FOV Detection Specifications in Beyond Mode

## 1. Grid Size

The grid square size in Beyond Mode is 40m x 40m

## 2. FOV Detection Range

In Beyond Mode, the actual FOV detection range extends to three grid spaces around your own grid position, as shown in the following graph:

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhqsjmittry4/6959c3b2-7803-4b84-9d60-7e773a7be2fc.png)

[Entity Deployment Group](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhqmrlr6h58e)[Copy and Paste Data](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh6fj30p2cmo)
