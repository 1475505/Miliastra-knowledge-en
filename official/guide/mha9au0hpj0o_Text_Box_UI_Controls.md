---
id: mha9au0hpj0o
title: Text Box UI Controls
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnltrr3g966
language: en
scope: guide
crawledAt: 2026-05-31T16:37:04.098Z
---

# Text Box UI Controls

# I. Text Box Functions

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/5bf75bb5-bef2-492e-8fe6-7ade0001f029.png)

During stage runtime, display pre-edited _text content._

If the text content contains custom variable, it will update the display in real-time.

# **II. Editing the Text Box**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/8cace03a-8f34-4709-a1c7-6fe2fb1a8bdb.png)

_Background Color_

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/fc5afdb8-cfe8-4d6e-ba56-a817fc620b13.png)

Choose a transparent or semi-transparent black background

_Font Size_

Font Size Configuration

_Text Content_

Edit the text box's content; supports characters, text, numbers, and custom variables.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/ea66efa8-77ef-43ec-87db-306781858d5d.png)

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/71b799f8-2c52-42a8-93eb-7b9526720939.png)

By inserting variables, you can select _custom variables_ predefined on stage entities and player entities

When an inserted custom variable changes, the displayed text updates at runtime.

Insert the referenced custom variable in rich text format, with the following format:

**{Type:Prefix.VariableName}**

Type:

1 when referencing a custom variable

Prefix: See the table below

**Custom Variable Target****Prefix**
Players 1 – 8 p1~8
Stage Entity lv
Player's Own Entity ps

For example, if you need to insert a reference to a custom variable named "Test2" on Player 4, the rich text should be written as: {1:p4.Test2}

_Align_

Choose an appropriate alignment based on the position and content of the text

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/f18040c5-1876-4d3d-b090-6ec4d0d9a53d.png)

Alignment Method Description Diagram
![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/4b6a698f-d364-4d30-ba14-ab1d8a207061.png)Left Align![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/01c5eb93-c13c-4800-89c3-6b2a5b2c2978.png)
![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/c0d4ee46-ee9a-48c0-b174-45210ebe0631.png)Horizontal Center![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/dba45a23-012d-43e2-a5b6-ceda85c45577.png)
![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/6e94e044-f0bb-4df0-b5d9-1cff196d39bf.png)Right Align![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/100701b1-4063-4a7b-851f-f29fcab7a43e.png)
![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/58b2284f-62d0-47ec-9fed-dd51990f57e5.png)Top Align![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/dceb3dcd-9aba-4dec-80a5-e232147feb7f.png)
![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/f0b5c0cc-51f0-4cb5-902c-7d89fa0c1fc5.png)Vertical Center![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/5d433e9a-04fa-4c12-94ff-87bc854b72f5.png)
![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/6e044042-f610-46ab-98fa-cce6cfc5fe8e.png)Bottom Align![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/21a54982-aacd-459e-8f7b-0a008f1e2f30.png)

# III. Adjusting Text Box Layout in the UI

Resize the text box by dragging its borders in the edit window when the cursor changes to a resize arrow.

Its position and size update automatically after adjustment.

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mha9au0hpj0o/a80ef774-cca0-4963-a2d0-1f80a893960f.png)

[Item Display UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjja1ipq9ck)[Pop-Up UI Controls](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhen7r0djxkg)
