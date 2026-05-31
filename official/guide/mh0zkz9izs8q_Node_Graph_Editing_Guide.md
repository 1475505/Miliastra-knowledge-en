---
id: mh0zkz9izs8q
title: Node Graph Editing Guide
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhb3ho0k5l2w
language: en
scope: guide
crawledAt: 2026-05-31T16:28:30.967Z
---

# Node Graph Editing Guide

# I. Entry Point for Node Graph Editing

Node graph editing must be done in the _Miliastra Sandbox_. Please locate the Miliastra Sandbox entry point as shown in the graph below

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/a314730c-2eae-4d4b-ba2b-06c6f03e4a1f.png)

The main window of the Miliastra Sandbox is shown in the graph below

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/288fc9dd-58e7-4251-9e2c-9f7f0c9e6d92.png)



Server Node Graph (Graph A)



Created Node Graph (Graph B)

# II. Creating a New Node Graph

## 1. Server Node Graphs

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/78fd16bb-5dc0-4705-a876-d6f3544520fb.png)



In the Node Graph Management interface on the left (A), choose the type you want to create: Entity Node Graph, Status Node Graph, Class Node Graph, or Item Node Graph



In the menu on the right, Select [Create Node Graph]

Double-click the newly created node graph to open the Editing Tab

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/0105682c-7fa6-498b-b681-054928c071d5.png)

You can also right-click a node graph to rename it and perform other common file operations

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/4f8bf5c3-4a4f-41b6-bb93-74ab7e596bab.png)

## 2. Client Serve Node Graphs

The Client Node Graph Resource Explorer is closed by default. To open it, choose Window >Client Node Graph Resource Explorer (top-left)

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/cf4444cc-8b7d-46f0-a50d-ea5a1b0b1d80.png)

The Client Node Graph Resource Explorer works like the Server Node Graph Resource Explore r. In the Asset Management panel on the left, select the node graph type you need, then right-click in the right panel to create a new node graph

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/60ef4533-847d-46e6-bd03-704076d000fc.png)

# III. Node Graph Actions

After entering the node graph editing tab (as shown below):

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/fc60bb17-4858-4a48-920d-fb7fdb341a76.png)

## 1. Create Nodes



**Create via menu**

The most common way to create a node is to right-click in the editing area to open the node menu

You can find specific nodes by searching through node categories

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/bf121544-68dd-4435-bc5a-a237a7631c0e.png)

Shown below is the [When Custom Variable Changes] node. You can find this node under [Event Node] >[Custom Variable]

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/4863ba97-5935-4b8d-912a-bad1e8c27595.png)

Click to create a new node in the editing area

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/8f8a5bbb-553f-4485-8225-4c9087b22bc7.png)



**Quick Creation by Connecting**

Another common way to create nodes is through quick connections

To do this, drag a connection from a pin outward and release without connecting to any other node. This will bring up the node creation menu.

This menu will automatically filter all nodes that match the pin **type** (i. e., those that can be directly connected)

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/5b95fd33-2c1c-4f13-9547-5dc54355f1cd.png)

## 2. Node Connections

Hold and drag outward from a pin to create a connection line

Connect it to a valid pin on another node to complete the connection

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/3f0cca31-4627-40db-890b-18204dcc68e3.png)

## 3. Other Node Graph Operations



**Connection Details**

Hover over a pin or connection to highlight the connection and its endpoints. This is especially useful in complex graphs

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/d19d01be-2d92-4d0b-a026-5a7454bb47b4.png)



**Right-Click Menu Actions (Nodes)**

Delete: Delete nodes

Cut: Cut the node, then you can paste with (Ctrl + V)

Copy: Copy the node, then you can paste with (Ctrl + V)

Disconnect Node Connection: Remove all connections to this node

Notes: Add a comment on this node

Generate Composite Node: See [Composite Nodes](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhty17iqeht0)

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/45c6bba3-d22d-40de-a418-e5cbf94f5447.png)



**Right-Click Menu Actions (Pins)**

Jump to Next Node: Jump to the next node connected to this pin

Disconnect Link: Remove the pin's connection

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/f38c4333-40ad-4f29-817c-10ffbd44bbb2.png)



**Node Graph Shortcut Menu Actions**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/e3a71c2a-2aa4-4e32-a617-6044cee572ad.png)

Collapse Menu: Collapse the shortcut menu

Enter Comment: Add a comment to the node. Click to add a new comment when clicking on a node

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/364b27e6-f9e0-4cdd-ba25-56db173ee7e7.png)

Search Nodes: Click to open the node search tab

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/8ef7c6d2-ffca-4af6-8157-8b5d1173c18e.png)

Node Graph Variables: Click to open the node graph variables tab

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/93a24981-9711-4f10-ac1b-7b720b80c6dd.png)

Signal Management: Click to open the Server Signal Explorer

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/c024ece0-de6e-4ccb-91d1-85fb4c8e3200.png)

Editing Area Zoom: Zoom in/out of the edit area. You can also use the mouse wheel to zoom

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/a9a19ede-748b-4373-89f6-bbfb50fb1150.png)

Operation Log: V iew the operations in the current node graph

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0zkz9izs8q/1bd0681b-57eb-4e8a-b452-5f6c55f58d10.png)

Undo: U ndo a single step of an operation

Restore: After undoing an operation, you can redo the undo to restore the previous state

Save: Save current node graph

Save As: Save the current node graph as a new node graph file

[Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk23ora1wom)
