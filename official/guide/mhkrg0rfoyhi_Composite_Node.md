---
id: mhkrg0rfoyhi
title: Composite Node
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhty17iqeht0
language: en
scope: guide
crawledAt: 2026-05-31T16:19:44.020Z
---

# Composite Node

# I. What is a Composite Node?

## 1. Reusing a Function in the Node Graph

During the creation of Node Graphs, you may encounter many scenarios where logic can be reused:

As shown in the graph below, this Node Graph implements a continuous scoring device with the following rules:



When attacked, increase the Custom Variable [Hit Score] on the Entity by 3



Then, at 1, 3, and 5 seconds, add 1 to the Custom Variable [Hit Score]

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/9242f09e-90cd-41a3-afb0-ebc28b657dcd.png)

As the graph shows, the logic for increasing the Custom Variable score is repeated multiple times. This kind of repetition can cause issues during iteration

For example:



If adding points no longer meets your needs, you can change it to deducting points by replacing all addition operations with subtraction operations in bulk within the Node Graph



If you need to change the Custom Variable name used for scoring, you must edit the values in four nodes in the graph above. In more complex Node Graphs, it's easy to overlook some of these changes

## 2. Definition of Composite Nodes

Composite Nodes are designed to address the issues described above.

A Composite Node is a Node Type that allows Creators (Craftspeople) to define custom Node structures. Creators can encapsulate functions implemented in part of a Node Graph within a Composite Node and choose which parameters and Logic Pins to expose externally

In an external Node Graph, a Composite Node can be used like any other Node, following the standard Node Graph connection rules

After optimizing the Node Graph with Composite Nodes, the result is as follows. The Node Graph's functions are clearer and better support complex iterations

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/0720b504-aaad-4989-9ea5-94c32af78633.png)

# II. Structure of Composite Nodes

## 1. External Node Graphs

A Composite Node can be used externally as a regular Node without needing to consider its internal implementation.

All of its Pins follow the standard Node connection rules.

## 2. Inside Composite Nodes

A Composite Node contains an internal _Sub Node Graph_ that implements specific functions (for example, adding to a Custom Variable as shown below).

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/dbaa8ba8-0238-40fc-9e4f-8bc547e6da62.png)

Inside the Composite Node Graph, you can specify which Pins to expose externally (such as the Pins highlighted in the graph below).

In the graph below, the connections on these Pins are called _Virtual Pins_. These act as the Input Pins or Output Pins for the external connections of the Composite Node.

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/458a3602-cd2f-4dfc-8598-6679d25cdc83.png)

Exposed Pins can be used as regular Pins in an external Node Graph, as shown in the graph below. The ID numbers on the Virtual Pins match the Pin ID numbers in the Node Graph Editor.

Among these, [Target Entity], [Variable Name], and [Trigger Event] are exposed from the [Set Custom Variable] Node above.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/e1807d69-620c-4b01-89aa-e75fbf198f67.png)

# III. Editing Composite Nodes

## 1. Creating Composite Nodes



**Create Through Node Graphs**

In a Node Graph, select all Nodes that you want to encapsulate into a Composite Node

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/4d3fccbf-f10b-4c89-b69c-04b95276de51.png)

Right-click any of the selected Nodes and choose [Generate Composite Node] from the context menu

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/da20fa93-cc7f-4aa4-83f7-ce978ee7d71f.png)

This creates a new Composite Node

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/982a8fb3-884e-44db-a48f-31c5235b3464.png)



**Create via Node Manager**

From the window menu in the upper-left corner, open the Node Manager Interface

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/0d0bf615-4f25-4b97-ad7f-81634cb10b89.png)

In the Composite Node section on the left, you can add new Composite Node Tabs

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/933a4f17-57cb-416d-923c-c7215484b74b.png)

In the Composite Nodes Management Tab, right-click and select [Create Composite Node] to create a new Composite Node

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/c95dad4d-2665-48ef-93ec-82e09cfa9923.png)

## 2. Editing Composite Nodes

Double-click a Composite Node in the Node Graph or in the Node Manager to enter the Composite Node Editing Interface

This interface is divided into two parts

On the left is the [Composite Node Graph Editor] Interface, which functions the same way as other Node Graphs

On the right is the [Composite Node Preview] Interface, where you can view how the currently edited Composite Node is exposed, and adjust details such as Node names and Pin names

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/e71746ab-34ad-44ca-98a9-d345ed113d8b.png)



**Composite Node Graph**

The Composite Node Graph works much like any other Node Graph, with the key difference being the presence of Virtual Pins

These Virtual Pins indicate which Pins connect to the outside of the Composite Node. Their configuration can be modified in the Composite Node Preview Tab

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/6d48adda-5548-4fe4-b0d4-d09cc4a12e08.png)

Right-click a Pin to expose it as an external Pin of the Composite Node

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/0739231c-9093-496c-a075-42df099bed42.png)



**Editing Composite Node Styles**

In the Composite Node Style Editing Tab, you can configure how the Composite Node is exposed externally



**Renaming Composite Nodes**

Double-click the Composite Node name to rename it

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/ec36ceca-71e9-46a1-b581-867b873ec8ff.png)



**Pin Details Editor**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/c702f668-bf8c-40fd-9f45-a36774fc0f85.png)

Supports the following edits:

Editing Pin names

Editing Parameter Box Hints for External Use



**Pin Actions**

Right-click a Pin to perform various actions, such as moving it up or down, or hiding it from display on the Composite Node

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/8df95848-d948-451e-b24d-df8845623cb7.png)



**Pin Merging**

When two Pins of the same type exist on a Composite Node, they can be merged

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/efc92070-bb68-4f23-9de0-3c433ed98927.png)![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/00b1f245-2708-4ab7-bde8-83647c1f771a.png)![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/ac62814e-50bd-40d2-822a-2357bf14bca1.png)

After merging, the Pin functions as if it were connected to both Pins at the same time

As shown in the graph below, Virtual Pins 1 and 4 are connected to the first Input Parameter Pins of [Set Custom Variable] and [Get Custom Variable], respectively

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/04e23fd0-bae4-421f-aed9-d9ed8eeacbe7.png)

After merging, the Composite Node's style appears as shown in the graph below

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/fdaf13c5-16be-401d-baf7-26ee2d17d916.png)

As shown, the [Target Entity] Pin of the Composite Node is now connected simultaneously to the first Input Parameter Pins of both [Set Custom Variable] and [Get Custom Variable]

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/6b193783-78c0-4fcb-9ebb-3e63ce7c387b.png)

## 3. Using Composite Nodes in External Node Graphs

In an external Node Graph, the created Composite Nodes can be found under the [Composite Node] category

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/52ff4fb9-3014-427e-977d-eb3377935db7.png)

Composite Nodes in a Node Graph follow the same rules as any other Node and can be used as any Node Type. As shown in the graph below, both graphs provide identical functionality

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/de05ef9a-939d-4598-adad-7088d9819f1a.png)

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhkrg0rfoyhi/bcbadd62-ca5d-4874-8822-f909d83bd28a.png)

[Node Graph Variables](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhtshailzs7w)[Node Graph Logs](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhu951iz7wz8)
