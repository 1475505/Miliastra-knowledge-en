---
id: mhbydx0u7cgw
title: Dictionary
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhubgk9yy8gy
language: en
scope: guide
crawledAt: 2026-05-31T16:21:43.610Z
---

# Dictionary

# I. What is a Dictionary

A _Dictionary_ is a data structure used to represent a set of mapping relationships

For example, in a given gameplay, you may want to store the Scores of all Players on the Stage Entity

Without using a Dictionary, you would need to use multiple _Custom Variables_ on the Stage Entity, each one storing a Player's Score (in Beyond Mode, up to 8 Custom Variables may be required)

This approach becomes cumbersome when you need to store Scores for more Entities. For instance, in a racing gameplay against Creations, each Creation would require an additional Custom Variable to record its Score

Using a Dictionary can effectively solve this problem:

On a Stage Entity, you can define a Dictionary mapping _Entity_ to _Integer_. Each mapping in this Dictionary contains an Entity-type value and an Integer-type value. The Entity entry can be used to store Player Entities, while the Integer entry records their Scores

You can easily modify elements in a Dictionary using Dictionary Operation Nodes—for example, adding new elements or deleting existing ones

You can also package a data structure such as [Player's Score] into a Dictionary type for use and transfer

## 1. Definition of Dictionary

A Dictionary is a data structure that can be used in Server Node Graphs

Each Dictionary defines a mapping from data type A to data type B

Here, data type A is the _Key_, B is the _Value_, and each Key+Value combination is a _Key-Value Pair_. A Dictionary is simply a collection of Key-Value Pairs

A common Dictionary structure is shown below. This Dictionary maps _Strings_ to _Floating Point Numbers_

**Key****Value**
ABC 1.3
DEF 1.8
GHI 20.5

## 2. Key Points of Dictionary Functions



**Dictionary Type Determination**

As explained in [Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhk23ora1wom), Node Graphs are strongly typed, and a Dictionary's type is uniquely defined by its Key and Value types.

Therefore, a Dictionary of [String → Floating Point Numbers] type cannot be connected to a Dictionary of [String → Integer] type



**Dictionary Key Uniqueness**

A Dictionary cannot contain duplicate Keys. Each Key in a Dictionary must be unique

Therefore, Dictionary actions are centered around Keys, such as editing Values by Key or searching Values by Key



**Pass by Reference for Dictionaries**

Similar to Lists, Dictionaries in Node Graphs are passed by reference. As a result, Dictionary modification Nodes directly affect Dictionary data stored in _Custom Variables_ and _Node Graph Variables_, as detailed in [Custom Variables](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhso1b9wjica)

Similarly, in the _When_ _Custom Variable Changes_ Event, the fields [_Pre-Change Value_] and [_Post-Change_ _Value_] are not provided. Use _Get Custom Variable_ to obtain the updated Value



**Unordered Storage of Dictionary**

The Key-Value Pairs in a Dictionary are not stored in order. When using a Dictionary, do not rely on their sequence; treat them as unordered



**Available Data Types for Dictionaries**

The Dictionary Key types include:

**Data Types**
Entity
GUID
Integer
String
Factions
Prefab ID
Configuration ID

The Dictionary values can include the following types:

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

# II. Using Dictionaries in Generics

In a Server Node Graph, a Dictionary is a special type of _Generic Pin_. To define a Dictionary type, select [Dictionary] in the Generic configuration, then specify its Key and Value types

For Generic Pins that support Dictionaries, the [Dictionary] option is available in the Generic dropdown menu

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/66ea59ad-6603-4be0-a5ec-8aab776acf11.png)

Upon being clicked, the Generic button next to [_Variable Value_] changes, indicating that this Pin is now a Generic Dictionary Pin

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/d04d3d7a-319c-4fc1-b060-23c6e66441e8.png)

Click the Generic button again to specify the Key and Value types for this Generic Dictionary

As described above, a Generic Dictionary's type is only fully defined once both its Key and Value types are specified

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/b9db1f49-dddf-46e3-a3bc-2c2806296204.png)

# III. Dictionary-Related Nodes

## 1. Execution Nodes

**Set or Add Key Value Pair to Dictionary**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/c25ce504-b8c4-48be-aed1-326f7df09cec.png)

**Remove key-value pairs From cictionary by Key**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/81e8ab0c-fde4-453a-b564-ea6cde8283aa.png)

**Clear Dictionary**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/0797ab1a-99a5-44fc-9286-431476eee7c9.png)

**S ort Dictionary by Key**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/22c79b75-1782-4dd7-98bb-8b0bb049248e.png)

**Sort Dictionary by Value**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/fc37c12b-85fb-4041-978b-e9328e26dfdc.png)

## 2. Query Nodes

**Query Dictionary Length**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/15c321e8-175c-4f0d-9dd9-45fc5029c26b.png)

**Query Dictionary Value by Key**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/b5568464-ad69-47ad-a681-c7d1d4883459.png)

**Get List of Keys From Dictionary**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/df9be975-ebac-4f16-a449-ff35dfe697aa.png)

**Get List of Values From Dictionary**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/6283d834-127e-4bc7-ac9b-7d0448092e43.png)

**Query If Dictionary Contains Specific Key**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/a57851dc-e3a1-4cd0-bb99-081c24bcc99e.png)

**Query If Dictionary Contains Specific Value**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/52091ce4-f1d5-404a-8766-45fa1b81e889.png)

## 3. Operation Nodes

**Create Dictionary**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/00775cd4-bafa-4acb-a948-740f17ed5c60.png)

**Assembly Dictionary**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbydx0u7cgw/3416277c-17e5-43c3-afa9-2b81563ca594.png)

[Signal](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhlaj0r9bldi)[Structure](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh3fmi0t99ns)
