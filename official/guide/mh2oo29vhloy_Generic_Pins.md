---
id: mh2oo29vhloy
title: Generic Pins
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkirfrna1fy
language: en
scope: guide
crawledAt: 2026-05-31T16:24:53.607Z
---

# Generic Pins

# I. What are Generic Pins?

While using the node graph, you may have encountered nodes with generic selection buttons (the small gear icon before the parameter pin)

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/e0ff7a25-d542-4c74-ae81-4e28e2e90fe2.png)

We call pins with such buttons _Generic Pins_, and nodes with generic pins are called _Generic Nodes_

Generic Pins represent **pins that can connect to multiple different data types**. The parameter types supported by each generic parameter pin can be viewed by clicking the generic selection button

Take the [Addition] node above as an example, both input parameters of this node support two types of input: [_Integers_] and [_Floating Point Numbers_]

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/3944b39d-67e8-42eb-a6f0-725e215aaa2c.png)

It should be noted that as explained in [Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhk23ora1wom), although Generic Dodes and Generic Pins exist in the Node Graph, the Node Graph remains _strongly typed_.

Therefore, when uploading Node Graph data, all Generic Pins and Nodes must go through a process of **_Generic Type Determination_**

Generic Type Determination refers to **assigning a concrete data type to each Generic Pin on a node**. Once all pins have a defined type, the node completes its Generic Type Determination and becomes valid for use

If a node remains in a generic state when entering playtest, it will be considered invalid and will not run properly at runtime.

Generic Type Determination may cause previously valid connections to break. (For example, if an integer type is changed to a string type, existing connections to integer pins will be disconnected)

Still taking the [Addition] node in the above graph as an example

When an Addition node is first added to the Node Graph, it defaults to a generic state, which means it is not yet a valid node for runtime execution

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/3944b39d-67e8-42eb-a6f0-725e215aaa2c.png)

After either connecting or manually defining the generic type, once the Node is set to a specific type (for example, integer addition as shown in the graph), it becomes a valid and usable node

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/afd8867a-b550-45cc-81ea-5888d43a345b.png)

# II. Generic Pin Type Determination

There are two ways to determine generic types: manual selection and connection-based determination

## **1. Manual Generic Type Determination**

Click the generic type selection button (the small gear before the parameter pin) to specify the generic type for that pin

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/2c3d891c-fab5-4931-bcb7-d876f95a8e50.png)

## **2. Connection-based Generic Type Determination**

A more common approach is to determine generic types through direct connections.

Connect the Generic Pin to another Parameter Pin. As long as the connected pin type is supported by the Node's generic types, the connection is valid

After the connection is complete, the Generic Pin will be determined as the pin type it is connected to

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/1de97bb8-92f7-406d-a6ca-0d6a8ef57a9c.png)

Generic Pins can also connect to other Generic Pins. In this case, both pins will be assigned the same default type

For example, when two Addition nodes are connected, both will be determined as integer type

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/010cbcce-93d0-422c-b0d7-d7e026df0195.png)

# III. Key Points for Using Generic Pins

## **1. Type Linkage of Multiple Generic Pins**

While using Generic Pins, you may notice some Nodes have multiple Generic Pins (Addition shown above is a typical example)

In fact, for each Generic Node's Generic Pins, their available parameter types are related to one another

When one pin's type is determined, it narrows the range of available types for the other pins.

Take the [Data Type Conversion] Node as an example. It has two Generic Pins: input and output

When the input pin is set to a 3D Vector type (as shown in the graph below)

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/18551fe2-bc82-4951-80f5-4594b213d5fd.png)

The Output Pin's Generic Pin will be restricted to only the String type, since there is only one possible Parameter Type combination where the input is a 3D Vector and the output is a String

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/84aae8d0-a536-4da4-bcb6-2ac24c5046e5.png)

For most Nodes, once one Generic Pin's type is set, the others will be automatically determined. In practice, defining just one pin is usually enough

For instance, in an Addition node, if Input 1 is set to Integer, then Input 2 and the Result pin will also become Integer

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/ccd59136-787a-47f9-bb3c-42e7ae870913.png)

## **2. Checking Generic Pins on Event Nodes**

In most cases, for operation, search, and execution nodes, input and output pins usually have values or connections, so it's rare for them to remain undetermined at upload

However, event nodes sometimes don't use all their Output Parameters. Take the [When Custom Variable Changes] node as an example

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2oo29vhloy/e0ae7c13-7f6a-4b40-8a0d-ba1a61c051d6.png)

By default, this node is in a generic state. You need to define types for its [Pre-Change Value] and [Post-Change Value] Parameter Pins before it can function properly.

However, in some cases, these pins may remain unconnected. If uploaded in this generic state, the Node may fail to trigger correctly

[Node Graph Variables](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhtshailzs7w)
