---
id: mhw64cr51fue
title: 2.10 Environment Configuration: Sky Backgrounds, Filters, and Light Sources
url: https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhw64cr51fue
language: en
scope: tutorial
crawledAt: 2026-05-31T16:50:58.684Z
---

# 2.10 Environment Configuration: Sky Backgrounds, Filters, and Light Sources

# Introduction

## Course Description:

**Course Content:** This course mainly focuses on environment configuration for stages and its practical applications.

**Learning Objectives:** Learn how to configure skyboxes, filters, and point lights to enhance the overall atmosphere of your stages.

_**This course covers two interconnected modules: [In-Game Editor Panel Configuration] and [Miliastra Sandbox Node Graphs]. It is recommended to follow the course structure and read through all sections in sequence._

## Related Information:

**Recommended Learning Sequence:** [Prerequisite Courses] → [Current Course] → [Comprehensive Guide]

_**If you encounter unclear concepts or wish to explore related topics further, refer to the_**_[Comprehensive Guide]_**_as needed._

**Prerequisite Courses:** This course builds on functional knowledge covered in the following prerequisite courses._(When using for the first time, it is recommended to prioritize learning_**_[Prerequisite Courses]_**_for a smoother learning experience)_

> [2.1 Collision and Interaction: Triggering an Event](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhumsn9uap96)

**Related Key Concepts:** The course involves the following foundational concepts._(we recommend following the current course material first, if you encounter unclear concepts or wish to dive deeper, refer to the_**_[Comprehensive Guide]_**_for relevant sections.)_

> [Environment Configuration](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhdznsie9up8)

* * *

# Environment Configuration: Configure Sky Background Parameters

## Feature Example 1: Creating Night Scene Effects Through Environment Configuration

### 1. Concept Overview

**Environment Configuration:**You can configure the stage's Skybox, Filters, Light Source, and other settings

**Skybox:** Refers to the sky background within the stage, including lighting, color, angle and other parameters. See below for a visual example:

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/4c4b47cbb32f480fa155549503b49388_1761060723.png)

**Filters:** Refer to color grading filters that can be applied to stages to enhance visual quality. See below for a visual example:

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/c9ac3028ab7e4ab1b37740f06ff94f9e_1761060725.png)

**Light Sources:** Refer to illuminants that provide localized lighting within scenes, such as Point Lights and Spotlights. See below for a visual example:

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/788f4dad71914bf6b57d16cbc10b8c68_1761060725.png)

### 2. Course Content

**Functionality:** Create a Night Scene Using Environment Configuration

**Effect Demonstration:**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/d679997ecfe64e99957f633ab70d8b35_1761060725.gif)

### 3. Step-by-Step Guide

**1. Enter Environment Configuration in [In-Game Editor]**

In the![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/b272b174963044e493174762d7b94ede_1761060726.png) [Terrain Editing] panel, click on Environment Configuration on the left side![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/9609a3759e2a42759eacf203b7bf0837_1761060726.png)>>>to enter the detailed configuration page.

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/0b9c9b9d384643d9a114f4c625efed97_1761060726.png)

**2. [In-Game Editor] Set Time to Night**

You can![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/eb85f9479fe24b4d8b43bf465675a627_1761060726.png) configure Skybox parameters in the tab. To achieve the desired effect, the tutorial uses the following configuration:

Features to Implement Corresponding Configuration Items
Skybox is visible to all players[Effective Target] Select "All"
The sky background is set to its default color[Background Settings] Select "Normal"
During the stage, the day/night cycle will not change over time.[Auto switch with time] Set to "Off"

_**To configure a dynamic day/night cycle, enable this setting and then configure the stage's Initial Time Point and Time Passage Speed in the Esc Menu > Stage Settings > Basic. This is not covered in this tutorial._
Skybox Time: Night[Set Time Point] Set to "00:00"

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/8be8c9e463ca4268bae1bd8aa55f276f_1761060727.png)

**3. [In-Game Editor] Configure environmental element parameters to add stars and clouds**

After opening the environment configuration details page, you can fine-tune the settings for stars and clouds appearing in the sky under [Environmental Elements]. To achieve the desired effect, the tutorial uses the following configuration:

Features to Implement Corresponding Configuration Items
The sky contains bright stars with high density[Stars]: Enabled

[Density]: 100.0

[Intensity]: 0.5
Galaxy is visible in the sky[Galaxy]: Enabled

[Intensity]: 0.5

[Light Color]: Default
There are dense clouds in the sky[Clouds]: Enabled

[Intensity]: 1.00

[Type]: All

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/4ab1cb0d89e14ef280ae664ae3a4216f_1761060720.png)

**4. Create Lights With Light Source Configuration**

In the darkness, to enhance the environmental atmosphere, we can also add point lights. (In this tutorial demonstration, a static object — a Wooden Street Lamp — has been placed, and a point light is configured at its location. Creators can place objects according to their stage's needs or configure lights directly without placing any objects.)

After opening the environment configuration details page, you can set![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/ecf45b5a99824f4cb5233d6542671085_1761060721.png) Light Parameters in the tab. Click [Add Light Source]>>>[Open Light Source Tool]>>>[New Light Source] to configure the light source.

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/cc4439fa4c054ee6b66baaf5cb494d21_1761060721.png)

In Manage Light Source, you can make detailed settings for the light sources. To achieve the desired effect, the following configuration is used in the tutorial

Features to Implement Corresponding Configuration Items
Creating a light source for a Street Lamp【Position】Adjust to match the street lamp entity's location
Light source activates during night environment【Source File】Select "Environment Configuration" (the night file configured above)

Scope determines in which environment the light source takes effect. If not configured, the light source remains inactive by default.
Light source is a circular orange point light[Light Source Type] Select "Point Light"

[Color] Set to "Orange"

[Radius] Set to "10.0"

[Intensity] Set to "3.0"

**Light source effects can be adjusted flexibly according to your needs during actual production
Light source remains visible at a distance[Effective Range] Set to "100.00"

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/6264dbc8c2f141db95175ac65b698c07_1761060721.png)

**5. [In-Game Editor] Test Play**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/f819a44f2bb143c5972f36409cf88bfa_1761060721.gif)

## Feature Example 2: Quickly Switch Environment Settings Switch Through Node Graph Events

### 1. Course Content

**Functionality:**Quickly switch environment settings through events.

**Effect Demonstration:**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/0b7d6304bbf543f6b121885963921216_1761060722.gif)

### 2. Step-by-Step Guide

**1. [In-Game Editor] Create New Environment Setting**

In the![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/36f119a425b14341b2c51ea122eb47d6_1761060722.png) [Terrain Editing] panel, click on Environment Configuration on the left side![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/cfebd521d46f4901bfb6297a91bd5e12_1761060722.png)>>>click![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/12184f5cf784436db1ce9db1028bf1d6_1761060723.png) to create a new environment and enter its details configuration page.

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/e251673fb48f4b788baca70cb6275cfc_1761060723.png)

**2. [In-Game Editor] Configure Background and Environmental Elements**

The overall configuration method is identical to Feature Example 1. In this tutorial, you need to set up 2 separate environments for switching between them.

The configuration for Environment 1 is identical to Feature Example 1 above and therefore will not be repeated. For Environment 2, to achieve the desired effect, the tutorial uses the following configuration:

Features to Implement Corresponding Configuration Items
Initially Inactive[Effective Target] Select "None"
Purple sky background[Background Settings] Select "Blue"
During the stage, the day/night cycle will not change over time.[Auto switch with time] Set to "Off"
Skybox Time: Noon[Set Time Point] Set to "12:00"
There are dense clouds in the sky[Clouds]: Select "Enabled"

[Intensity]: Select "1"

[Type]: Select "All"

**Environmental effects can be adjusted flexibly according to your needs during actual production

_**After configuration, please ensure you have two environment configurations available for switching, as shown in the figure below:_

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/3f6a93b17d4543c4b97383e1b80f2b69_1761060723.png)

**3. [In-Game Editor] Configure Dynamic Prefabs with Trigger Components**

Next, you need to configure a dynamic component to emit events (using a Stone Functional Platform as an example in this tutorial). After creating the component in the Prefab Library, mount the trigger component. For specific configuration methods, you can refer to the previous tutorial: Collision and Interaction. To achieve the desired effect, the tutorial uses the following configuration:

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/f7c3f699f96045738679da7b255694d3_1761060723.png)

**4. [Miliastra Sandbox] Node Graph Configuration**

In the entity node graph, add and configure the node graph for this prefab (see recommended settings in the image below). To achieve the desired functionality, in this tutorial we're configuring it as follows:

Features to Implement Corresponding Configuration Items
Function

Open Treasure Chest After Interaction Trigger Condition Triggered upon entering collision area[Event Node]: When entering collision trigger
Condition//
Result 1 Switch Environment Configuration[Query Node]: Use [Get List of Player Entities on the Field] to obtain all present players

[Execution Node]: Use [Modify Environment Configuration] to create environment switching effects

_**Environment configuration indices can be found in the Environment Configuration details page_

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/f945a516510742a5b1f2947f6ec08be9_1761060724.png)

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/1ff6c69e0a44477db24d8d137d4fe1dc_1761060724.png)

**5. [In-Game Editor] Mount Node Graph**

Mount the configured node graph on the mechanism prefab and save the prefab settings.

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/6cbd841608a349869bc94a71ff7d03b1_1761060724.png)

**6. [In-Game Editor] Place Prefabs and Test Play**

Place the modified prefab in the scene and enter Play Test Mode to experience this feature.

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/0f9eedafa40a46adb5e00982975aed9c_1761060724.gif)

* * *

# Course Summary and Supplementary Materials

**Course Assignment:** Try to recreate the following functionalities based on the course content

> **Function Replication:** Create a stage with dawn or dusk environment
> 
> 
> **Advanced Extension:** Create dynamically switchable environments via Node Graph.

**Course Review:** Learn how to configure environment settings to enhance the overall stage atmosphere.

### Supplementary Materials

We provide project files related to the above course content. You can use the **[Teaching Archive: Environment Configuration]** for comparative study.

![Image 27](https://webstatic.mihoyo.com/upload/static-resource/2022/10/14/64e71b8a5e28fbdbc3d3df5d311e4154_847866555738962172.svg)

Environment Configuration.gil

20 KB

[](https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/en-us/mhl6sk97ms0y/8eac11653e164f33909efb7a4ba2c4b6_1761060724.gil)

[2.9 Character Disruptor Device: Apply Continuous/Instantaneous Forces to Characters](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mh09qf0mc628)[2.11 Stage Settlement: Game Over and Finalizing Results for All Players](https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/mhv3ufrgotny)
