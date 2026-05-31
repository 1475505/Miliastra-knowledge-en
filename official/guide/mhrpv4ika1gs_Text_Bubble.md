---
id: mhrpv4ika1gs
title: Text Bubble
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwtz297kp6a
language: en
scope: guide
crawledAt: 2026-05-31T16:37:11.548Z
---

# Text Bubble

# I. Functions of Text Bubble Component

_Text Bubble Component_ provides text bubble functionality mounted on entities. It can reference _custom variable_ data to display configured content during stage runtime.

The text bubble component needs to be mounted on entities. Supports usage of _objects_ and _creations_.

The Text Bubble component can be configured with multiple text bubbles, but only supports one text bubble being active at a time.

Text bubbles can be enabled or disabled through default configuration, and can also be controlled through _node graphs_ to switch specific active text bubbles; additionally, the visibility of specific text bubbles can be adjusted through _local filters_.

# **II. Editing** Text Bubble Components

## **1. Add Components**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/ccf84461-31ac-4dc7-85a0-48713804f64b.png)

(1) In the entity/prefab editing interface, open the Editing Components tab

(2) Click **Add Components** below, select and click on the text bubble to add it successfully

When the text bubble component is selected, the entity being edited will display the current active text bubble effect.

(3) Click **Advanced Editing** to expand the editing tab

## **2. Editing** Text Bubble Components

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/1bbe67c0-8fab-404f-9a14-f274b9984879.png)

Configuration Parameters Description
_Initially Effective Text Bubble_ The dropdown menu provides text bubble enumeration

By modifying the checkbox behind, you can change the effective status. After modification, the effective status will be synchronized to the text bubble editing page

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/41be2994-cd28-4cdd-89f7-d7795a11628f.png)![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/9868c388-cbe9-4ef1-a45b-96a355611c7a.png)
_*Text Bubble List_ Enumerates all text bubbles configured for the entity

# **III. Editing** Text Bubbles

## 1. **Add Text Bubbles**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/8a8b47af-84e2-484a-955b-275e844fd685.png)



Click ![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/568fec50-2955-4e49-abf1-7f16fb2e01b2.png)to add a text bubble.

The added text bubble is **initially effective** by default



Bubble X, where X is the bubble **ID**, serves as a node input to adjust the initial activation parameters of the text bubble

## 2. Editing Text Bubbles

### (1) Basic Settings

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/ff4e5b4e-1a20-404f-9057-872a7585faa9.png)

Configuration Parameters Description
_Select Attach Point_ Select the preset _attachment point_ of the entity, or a custom creator attachment point.

Can be selected from the dropdown menu. The text bubble position will be adjusted based on this point as its base location
_Offset_ Offset can be adjusted relative to the attachment point selected in basic settings
_Font Size_ Font size configuration
_Visible Radius (m)_ The effective distance of text bubbles. The text bubble logic will only run when the character and entity distance meets the configuration
_Filter Node Graph_ Can reference local filter node graph to determine whether text bubbles are visible locally
Selection Type: Boolean When the local filter returns a value of "true", the text bubble will be visible locally
Selection Type: Integer

Effective Integer Range: Configure an integer list as needed When the local filter returns a value within the effective integer range, the text bubble will be visible to the local client
Explains the basic nodes in the local filter node graph



Get Self Entity

Output parameter is the entity mounted with text bubble component



Get Target Entity

Output parameter is the character entity within active range of text bubble

Retrieval succeeds only if the character entity is the local character



Get Current Character

Output parameter is the local character
_Loop Playback_ If enabled, the text bubble will play in a loop; if disabled, it will only play once.
_Send End Event_ When enabled, an event will be sent to the node graph after the last dialogue line is completed

Only the entity node graph with this text bubble component mounted can receive it

When and only when this option is checked, the server will record the completion of bubble events by different characters. If a character re-enters the range or reconnects after a disconnect, the bubble will not be triggered again.

If this option is not checked, the bubble dialogue will be re-triggered when a character re-enters the component's trigger range, and it will also be re-triggered after a disconnect and reconnection.

### (2) Editing Text Bubble Text

#### **a. Add Text**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/44c93d25-3d3f-415e-ad83-f03de55737a4.png)

By adding text, you can increase the number of configuration entries. The text bubble supports configuring multiple lines of text, which will be played in sequence.

#### **b. Editing Bubble Text**

Use ![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/67948bc5-89ac-40fc-9d9f-54377f8798a8.png) to copy, paste, delete and perform other operations on the selected items.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/39b28ae2-7544-4565-a1f3-08259ca45d05.png)

Configuration Parameters Description
_Duration_ Display time for the current bubble text content
_Text Content_ Display text editing

Supports **variable insertion**, select custom variables from the specified entity, which will update in real-time in the text box

Text size depends on the font size in basic configuration

The actual size of the bubble adapts according to the text amount and font size

#### **c. Preview Bubble Text**

Click **Preview** to use the current text bubble as reference (regardless of whether the configuration is initially effective).

In preview, the display will correctly display the text bubble's configured position, font size, duration of each text line, and loop playback setting![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/759d5383-58f9-4cc1-8257-94f0b21c99b2.png)

# **IV. Managing Text Bubbles Through Node Graph**

During entity runtime, its active text bubbles can be managed through the node graph



**Switch Active Text Bubble**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/8aa853a7-fa31-4a8a-b336-272907eba999.png)



**When Text Bubble Is Completed**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhrpv4ika1gs/fefa0891-92e2-4233-a3d4-0dbd2f837be0.png)

[Nameplate](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh5n160t2b6w)[Inventory Component](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh5y5001vqd4)
