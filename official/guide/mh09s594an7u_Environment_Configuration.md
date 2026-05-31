---
id: mh09s594an7u
title: Environment Configuration
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhdznsie9up8
language: en
scope: guide
crawledAt: 2026-05-31T16:22:08.087Z
---

# Environment Configuration

# I. Definition of Environment Configuration

Environment Configuration includes a series of environment-related parameters that enrich how elements in the Scene are presented

Environment Configurations must be predefined and applied to each player's client

# II. Editing Environment Configuration

Switch to the Terrain Editing tab to select Environment Configurations on the left.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/a718a52d-d5df-4085-8ddf-2090648510a2.png)

Click [New Environment] and [Confirm Create] to create a new Environment Configuration

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/ea542b3d-69e6-4ef1-9e6d-5286e747582c.png)

## 1. Environment Configuration

### (1) Effective Target

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/3aa29ef1-c2e3-42c4-8a5b-bce2d80797e7.png)

You can select which players this environment configuration will apply to

### (2) Background Preset

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/24a737e9-8a7a-45b5-ac84-5e0c3d084e8a.png)

Select a background preset to determine the general visual style of the scene

_Auto switch with time_: When enabled, all elements related to the background will transition dynamically over time. When disabled, these elements remain static at their current fixed values

_Set Time Point_: Defines the specific timepoint where current background settings are saved. Different settings can be saved at different timepoints, allowing for dynamic transitions as the in-game clock advances

_Dynamic Preview_: When "Auto switch with time" is enabled, you can toggle the dynamic preview to observe environmental transitions

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/808e68e1-b39e-4694-af5f-54c329fe7677.png)

_Reference Timepoint List_: Select any saved time point to view its specific background settings

_Weather Configuration_: Select a pre-configured weather configuration to associate with the current timepoint

_Time Elapsed Per Second (min)_: Defines how much in-game time passes for every one second of real-world time during a preview. A value of 24 matches Teyvat time. The configurable range is [0, 60]

_Current Preview Timepoint_: Displays the current timepoint during a preview

_Preview_: Click [Preview] to start the environment clock at the defined [Time Elapsed Per Second]. This allows you to observe dynamic environment transitions over a 24-hour cycle

### (3) Background Settings

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/84527bf3-d367-4ff6-ae95-da6643ce94ca.png)

_Background Rotation_: Adjusts the rotation of the background

_Direct Angle_: The incident angle of the primary ambient light source

_Intensity_: The brightness of the primary ambient light source. The higher the value, the brighter the light becomes

_Blur_: The diffusion of the primary ambient light source. The higher the value, the more blurred the light becomes

_Light Color_: The color of the light received by the environment

_Filter Style_: Adds a filter effect at the camera layer

_Halo Color_: Sets the halo color of the environment

_Halo Intensity_: Sets the halo intensity of the environment. The higher the intensity, the more visible the halo becomes

_Horizon Intensity_: Adjusts the visibility of the horizon. The higher the intensity, the more defined the horizon's silhouette

_Sky Background Color_: Adjusts the sky colors for both upper / lower sunny side sky background color

_Environment Color_: Adjusts the colors for the top / side / ground surfaces of the environment

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/6bf68efd-181f-433f-9a5a-07f73336399d.png)

Supports configurable color parameters. You can use color selector to adjust the color and transparency

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/78172f6c-344d-4e86-a06c-cc0b09870872.png)

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/1f78e931-4169-4005-a04f-9f8b0f8286b3.png)

When [Auto Switch with Time] is enabled, you can inspect the specific parameter values associated with the current timepoint

### (4) Environmental Elements

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/f7798973-7041-47d3-90f1-028adc215281.png)

_Sun_: Enabled by default. Configurable parameters include color, brightness, angle, orbit tile angle, and size

_Moon_:Enabled by default. Configurable parameters include color, brightness, angle, orbit tile angle, size and fullness

_Stars_: When enabled, you can adjust their density and intensity

_Galaxy_: When enabled, you can adjust its intensity and light color

_Clouds_: When enabled, you can set the type of the clouds, including high clouds, mid clouds, low clouds and faint clouds, along with their respective intensity and light color

## 2. Light Source List

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/f39b642a-9ede-42bd-b51d-8d2a96dfc374.png)

The light sources bound to this Environment Configuration are activated together with the Configuration.

### (1) Light Source Configuration Entry Point

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/98e59ac7-4379-4011-8f21-27cd88672278.png)



Click "Add Light Source" > "Open Light Source Manager" to access the Light Source Management Tool

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/8bc1a96b-0585-4bec-8a9f-ab90d903bbdf.png)



Click the system menu in the top left corner, then click Manage Light Source] to open the Light Source Management Tool

### (2) Light Source Configuration

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/c958f61a-e06e-47d9-a613-42f8d62af415.png)

Light Source Parameter Settings:

_Source File_: Indicates which Environment Configurations reference this light source

_Location, Rotation_: Controls its Location and Rotation in the Scene.

_Light Source Type_: Currently supports Point Light and Spotlight.

_Color_: Sets the color shown on illuminated models

_Radius_: Illumination radius

_Intensity_: Degree of color or brightness change on the illuminated model

_Effective Range_: The light source is loaded only when a character enters this range. Used for performance optimization.

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/3d5bdf11-750f-43df-b964-b6f3655ff251.png)

## 3. Weather

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/7d958cfa-ae8f-42e5-97d3-41988e86d410.png)

Multiple Weather configurations can be set within a single Environment Configuration and enabled together with it

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/7dc79d2c-9751-405f-ac48-3ec4c5754610.png)

_Initially Effective_: Defines whether this configuration is active upon startup

_Weather Type_: Currently only supports fog

_Auto Switch with Time_: When enabled, the weather will change over time. When disabled, the weather will remain locked to the current configuration's fixed values

_Distance Fog Settings_: Based on Camera Location, creates a fog effect that occludes distant models and the skybox.

_High Fog Settings_: Based on Scene height, creates a fog effect that occludes distant models and the skybox.

# III. Environment Time

Stage settings allow you to define the initial timepoint and the time passage speed, both of which can be adjusted via nodes

Environment time is a globally unique runtime value; the server continuously advances this clock regardless of individual player configurations. Visual transitions driven by time will only be visible when the "_Auto Switch with Time_" option is enabled in the environment configuration

Note: The time passage configuration in stage settings dictates the actual time passage speed during gameplay. In contrast, the same configuration in environment configuration is strictly for editor previews and does not affect the passage speed during gameplay

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/3340695d-c17e-43c9-bafa-5767881d2c10.png)

# IV. Manage Environment Configuration via Node Graphs

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/d8f47208-5c98-4395-b445-c4f1976b3654.png)

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/39df2575-e475-4448-8770-eeb9c04f1d7b.png)

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/50fdf5c0-faf5-4078-8b33-a6f3b8667b95.png)

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh09s594an7u/dc1280ab-7daf-4f7e-952f-5340d7568d40.png)

[Background Music](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhq9b601kh9k)[Prefab Group](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhzhzb9rw0uy)
