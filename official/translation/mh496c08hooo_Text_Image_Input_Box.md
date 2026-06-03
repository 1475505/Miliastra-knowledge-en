---
id: mh496c08hooo
title: Text/Image Input Box
url: https://act.mihoyo.com/ys/ugc/tutorial/detail/mh496c08hooo
sourceURL: https://act.mihoyo.com/ys/ugc/tutorial/detail/mh496c08hooo
language: en
scope: guide
translatedFrom: zh
translatedAt: 2026-06-01T00:00:00.000Z
note: No English equivalent published on act.hoyoverse.com. Translated from the Chinese official guide.
---

# Text/Image Input Box

## I. Features of the Text/Image Input Box

The *Text/Image Input Box* can be configured in a UI layout. It is suited for scenarios where images and text are used together in a mixed layout.

Within the text/image input box, images are dynamically adapted based on the actual length of the text content.

## II. Editing the Text/Image Input Box

### 1. Adding the Text/Image Input Box

In the *UI Control Group Editing Window*, add a UI control template — **Text/Image Input Box**.

### 2. Text Box Settings

- **Font Size**: The font size of the text inside the text/image input box.
- **Line Spacing**: The line height within the text/image input box. The unit is the control's font size — that is:
  > Actual line spacing = Current font size × Line spacing value

### 3. Image Settings

Inside the text/image input box, click **[Insert Image]** to add an image.

> **Note:**
> - Image colors cannot be modified.
> - When the image source is set to **Static Reference**, Asset Groups cannot be used.

- **Position**: The position of the image within the text/image input box. The unit is the control's font size — that is:
  > Actual offset = Current font size × Offset value
