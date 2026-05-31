---
id: mhs1f7ibtc6c
title: Message Queue Controls
url: https://act.mihoyo.com/ys/ugc/tutorial/detail/mhs1f7ibtc6c
sourceURL: https://act.mihoyo.com/ys/ugc/tutorial/detail/mhs1f7ibtc6c
language: en
scope: guide
translatedFrom: zh
translatedAt: 2026-06-01T00:00:00.000Z
note: No English equivalent published on act.hoyoverse.com. Translated from the Chinese official guide.
---

# Message Queue Controls

## I. Features of the Message Queue

The *Message Queue* can be configured in a UI layout and pushes messages in a specified style in real time via the node graph.

- Suitable for pushing and displaying various in-game information during gameplay, such as score updates, resource acquisition, and stage progress changes.
- The Message Queue control is for **information display only** and cannot be interacted with.
- When message items are added or removed from the queue, **additional animation effects** are played.

## II. Editing the Message Queue

### 1. Adding the Message Queue

In the *UI Control Group Editing Window*, add a UI control template — **Message Queue**.

### 2. Message Item Style Settings

Similar to Tab Controls and Single-Choice Viewport Controls, the style of message items can be customized in the style settings.

Craftspeople can click **[Detail Edit]** to add any asset to the message item's Asset Group. For example, you can add a UI animation so that every time a new message item is added to the display area, the animation plays to notify the player of the new message.

> **Note:** Messages default to fade-in and fade-out animations when updated. If a large number of messages are updated simultaneously, the animation may cause visible display delays.

### 3. Message Queue Function Settings

- **Initial Fill Point**: The initial fill position when the first message item is added to the queue.
- **Fill Direction**: The direction in which message items are filled.
- **New Message Insertion Position**: Can be combined with **Fill Direction** and **Initial Fill Point** to achieve different effects.

  **Example** (when Layout Limit = Auto Wrap):
  - Initial Fill Point = Top-Left, Fill Direction = Vertical, New Message Insertion = End of Queue → messages fill top to bottom.
  - Initial Fill Point = Bottom-Left, Fill Direction = Vertical, New Message Insertion = Start of Queue → messages fill bottom to top.

- **Alignment**: Similar to text box alignment. Sets the alignment of all message items relative to their parent control (top/bottom/left/right).

### 4. Notes

As illustrated, when the maximum number of messages in the Message Queue data exceeds the visible range of the Message Queue control, the UI animations added to the message item's Asset Group cannot be clipped.

> **Recommendation:** It is **not recommended** to configure the maximum message count to exceed the size of the Message Queue control.

## III. Updating the Message Queue

Use the server node **Update Message Queue** to push messages.

> **Note:** Message queue updates can only push data as a complete struct — one struct per push operation.
