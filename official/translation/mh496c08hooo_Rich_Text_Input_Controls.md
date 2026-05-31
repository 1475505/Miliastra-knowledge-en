---
id: mh496c08hooo
title: Rich Text Input Controls
url: https://act.mihoyo.com/ys/ugc/tutorial/detail/mh496c08hooo
sourceURL: https://act.mihoyo.com/ys/ugc/tutorial/detail/mh496c08hooo
language: en
scope: guide
translatedFrom: zh
translatedAt: 2026-06-01T00:00:00.000Z
note: No English equivalent published on act.hoyoverse.com. Translated from the Chinese official guide.
---

# Rich Text Input Controls

## I. Features of the Rich Text Input Control

The *Rich Text Input Control* can be configured in a UI layout. It is suited for scenarios where images and text are used together in a mixed layout.

Within the rich text input control, images are dynamically adapted based on the actual length of the text content.

## II. Editing the Rich Text Input Control

### 1. Adding the Rich Text Input Control

In the *UI Control Group Editing Window*, add a UI control template — **Rich Text Input**.

### 2. Text Box Settings

- **Font Size**: The font size of the text inside the rich text input control.
- **Line Spacing**: The line height within the rich text input control. The unit is the control's font size — that is:
  > Actual line spacing = Current font size × Line spacing value

### 3. Image Settings

Inside the rich text input control, click **[Insert Image]** to add an image.

> **Note:**
> - Image colors cannot be modified.
> - When the image source is set to **Static Reference**, Asset Groups cannot be used.

- **Position**: The position of the image within the rich text input control. The unit is the control's font size — that is:
  > Actual offset = Current font size × Offset value
