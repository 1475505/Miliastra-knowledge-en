---
id: mh2zrw94b0v6
title: Structure
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3fmi0t99ns
language: en
scope: guide
crawledAt: 2026-05-31T16:36:25.895Z
---

# Structure

# I. What is a Structure

A _Structure_ is an advanced data type that lets Creators (Craftspeople) group different kinds of data together into a single piece of Custom data

For example, in some gameplay scenarios, a Creator (Craftsperson) may design a [Weapon] with multiple Attributes. This Weapon includes three fields: [Name], [ATK], and [Enhanced or Not]

Creators want Players to store a weapon's data as Custom Variables after obtaining it, so it can be reused later. Meanwhile, Players may acquire multiple different weapons that share the same fields during gameplay

Therefore, Structure can be used to effectively solve this requirement

Creators (Craftspeople) first define a Structure called [Weapon Data] with three Attributes: [Name] (_String_), [ATK] (_Floating Point Numbers_), and [Enhanced or Not] (_Boolean_)

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/2ba92079-55be-4452-ad2c-b9b654ca63b3.png)

Once defined, [Weapon Data] can then be used like any other data type — for example, as a _Custom Variable_, and modified within a Node Graph using Nodes such as _Modify_ _Structure_

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/497853b2-7c7c-4654-8e58-ef777e0baeed.png)

Creators (Craftspeople) can also combine it with data structures such as _Dictionary_ to maintain complete weapon data in Custom Variables

As shown in the graph below, a Dictionary can be defined to map to [Weapon Data] Structures, functioning as a weapon database (with Integers used as IDs)

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/c60373c7-9fed-4335-a3c1-d56872d2c01c.png)

## 1. Definition of Structure

Structure is a Custom data structure that can be used in Server Node Graphs

Each Structure has a unique name that identifies it

Each Structure can contain multiple data entries of any type, and each entry must have a unique field name. These entries are called _Members_ of the Structure

Taking the [Weapon Data] Structure as an example, its layout is as follows:

**Field Name****Type**
Name String
ATK Floating Point Numbers
Enhanced or Not Boolean

Within a Structure, you can use all currently available data types: Basic, List, Dictionary, and Structure:

**Data Types****List Data Types**
Entity Entity List
GUID GUID List
Integer Integer List
Boolean Boolean List
Floating Point Numbers Floating Point Numbers List
String String List
Faction Faction List
3D Vector 3D Vector List
Prefab ID Prefab ID List
Configuration ID Configuration ID List
Custom Structure Custom Structure List
Dictionaries of All Types

It should be noted that Structures can also contain other Structures and Structure Lists (i.e., **support nested Structures**)

## 2. Key Points of Structure-Related Functions



**Structure Types**

The type of a Structure is completely determined by its name. Even if two Structures have identical internal data layouts, they are considered different Structures if their names differ, and cannot be connected in a Node Graph

Therefore, structures with the same name are not allowed



**Pass by Reference for Structures**

Similar to Lists, Structures in Node Graphs are passed by reference. As a result, Structure modification Nodes directly affect Structure data stored in Custom Variables and Node Graph Variables. For details, see [Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhso1b9wjica)

Similarly, this modification method will not trigger the "When Custom Variable Changes" event; the changed value needs to be obtained through the "Get Custom Variable" node.

# II. Creating a Structure

Find the [Advanced Data Management] option in the menu to open the Structure Editing Tab

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/1ae37b7d-ffa9-47b7-a452-063634732a35.png)

In the Structure Editing Tab, you can view Structures already created in the Stage, add new Structures, and edit the values of Structure Members

You can add new Structures, as shown in Graph A

You can add new Members within a Structure, as shown in Graph B

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/e79c893c-bbfd-4607-81d4-abb2eb637f94.png)

After creation is complete, you can use the defined Structures in features such as _Server Node Graph_, _Custom Variables_, and _Node Graph Variables_

# III. Using Structures in Generics

In a Server Node Graph, Structures and Structure Lists are special types of _Generic Pins_. You must select a specific Structure or Structure List before the corresponding Node can be defined as that Structure or Structure List type

On Generic Pins that support Structures, you can find [Structure] and [Structure List] options in the Generic dropdown menu. Expanding this menu displays all Structure data types currently defined in the Stage

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/5f0cb0b4-097d-4e52-a09e-f45a3c8ff3b2.png)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/1c7017a5-f00d-455b-884a-4885c89f2638.png)

# IV. Structure-Related Nodes

## 1. Operation Nodes

**Assemble Structure**

Assemble a Structure by passing in or directly assigning values to each of its parameters

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/b7975069-9617-4706-b1d1-5f3e393e6a16.png)

To use this Node, first select the defined Structure type via the Generic selection button

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/8e691de6-6eef-4a8f-8d64-23bcae62f751.png)

After selecting the corresponding Structure, the Node displays all Member variables defined in that Structure

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/bd973c6f-67a2-452b-8106-2b84622637c1.png)

**Node Type**: Operation

**Node Functions**



Fill in the values for each parameter in the Structure to generate Structure data



This Node can only be used once the corresponding Structure type has been defined

**Split Structure**

Pass in a Structure to obtain the values of each Member within it

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/168ab37f-a354-4c24-a6d2-2022362f7e35.png)

To use this Node, first select the defined Structure type via the Generic selection button

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/4467d336-d820-4601-abc2-76f7f10c94b0.png)

After selecting the corresponding Structure, the Node displays all Member variables defined in that Structure

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/9ea17654-4691-48f6-b891-deaf1ef553d4.png)

**Node Type**: Operation

**Node Functions**



Returns the values of all Members contained in the input Structure data



This Node can only be used once the corresponding Structure type has been defined

## 2. Execution Nodes

**Modify Structure**

Pass in a Structure and edit the values of selected Members within it

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/42a6bca1-742d-4096-a6b7-e3155331ebba.png)

To use this Node, first select the defined Structure type via the Generic selection button

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/b3673dab-0cda-4977-990d-c84878ef99c8.png)

After selecting the corresponding Structure, the Node changes to the following layout:

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/bd69743a-f5b8-47ce-8d5e-c7bb39535c5a.png)

Use the dropdown menu to choose which Members to edit. Only the checked Members will have their values modified

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/1123a72e-be3f-42cd-93b4-67308b208030.png)

As shown in the graph below, only the values of [Name] and [ATK] fields are modified

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2zrw94b0v6/7fc4d332-1af5-4e1e-ac18-e47d69b764d6.png)

**Node Type**: Execution

**Node Functions**



Edit the values of selected Members within the Structure data



You can select which values to edit. Values of unselected Members remain unchanged

[Dictionary](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhubgk9yy8gy)

1
