---
id: mhg1gur8jqrq
title: Image Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2oih9jou22
language: en
scope: guide
crawledAt: 2026-05-31T16:25:16.097Z
---

# Image Controls

# I. Image Features

_Images_ can be configured in the UI Layout to display the corresponding images in the UI Layout. They are a type of UI control used to beautify the interface and enrich its visual presentation

During stage runtime, Image Controls can be triggered through Node Graphs

# **II. Editing Images**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhg1gur8jqrq/3b4769d3-bbad-4d28-84fb-3a6ed854b612.png)

## **1. Add an Image**

In the _UI Control Group Editor window_, add the UI Control Template - Image

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhg1gur8jqrq/8237985f-2fd8-4452-8890-27fa300793bb.png)

## 2. Image Settings

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhg1gur8jqrq/04d6b94b-4324-437b-9af5-166ecc33fbe0.png)

Configuration Parameters Description
_Image Source_ Enumerate: Supports Static Reference, Dynamic Reference, Item, State, Skill, and Unit Status

The selected option affects the subsequent configuration parameters

### **(1) When the Image Source is set to Static Reference**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhg1gur8jqrq/84b273ce-bb11-467d-8891-fce45d742ff4.png)

_Reference Asset Resource:_ Select a preset asset. Some assets support color configuration.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhg1gur8jqrq/ba5288ca-811f-4eae-afed-608248482c91.png)

_Fill Color:_ Image assets are divided into monochrome and full-color types. Colors can be adjusted using the color selector. Monochrome assets generally produce better results when recolored.

_Image Type:_ Supports Basic and Stretch types. Some image assets support stretching and can be found through the filter options in the Image Asset Library.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhg1gur8jqrq/b1d357e2-ede1-48f1-b433-efec393f2275.png)

Image Attribute Property Common Uses
_Normal_ When the image is stretched, all four corners deform along with it Suitable for combining specific shapes or basic patterns
_3-panel layout_ When stretched in either the horizontal or vertical direction, the four corners retain their original shape Surface images for custom-styled buttons, tabs, and similar UI controls
_3 × 3 Grid_ When stretched in the horizontal or vertical direction, the four corners retain their original shape Surfaces for list items in single-choice windows, or for the background images of controls such as tabs and single-choice windows

### **(2) When the Image Source is set to other types**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhg1gur8jqrq/3a222549-d7da-4ff6-a868-e777995cad16.png)

Supports Craftspeople in configuring custom variables for use as identifiers for the corresponding images

[Fullscreen UI Animation Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhbn4i09l5ns)[Custom Button Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhtpwgitsigc)
