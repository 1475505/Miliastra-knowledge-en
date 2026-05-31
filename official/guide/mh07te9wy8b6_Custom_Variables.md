---
id: mh07te9wy8b6
title: Custom Variables
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhso1b9wjica
language: en
scope: guide
crawledAt: 2026-05-31T16:21:30.580Z
---

# Custom Variables

# I. Definition of Custom Variables

## 1. What Are Custom Variables

Custom variables are data structures stored in an entity's custom variable _component_ that creators (Craftspeople) can define and use themselves

Custom variables have many uses, with common applications being custom data that carries gameplay logic. For example: using custom variables on a stage entity to record player scores, or recording the number of times a player hits a switch to determine whether to open a mechanism door

Custom variables use _custom variable names_ (string type) as unique identifiers. Operations such as reading, modifying, and monitoring events all rely on custom variable names, therefore custom variables cannot share the same name within the same entity

Custom variables support most of the _basic data types_ and _list data types_ available in node graphs. The supported types are shown in the table below:

**Basic Data Types****List Data Types****Dictionary Data Types**
Integer Integer List All Dictionary Data Types
Floating Point Numbers Floating Point Numbers List
String String List
Boolean Boolean List
3D Vector 3D Vector List
Entities Entity List
GUID GUID List
Prefab ID Prefab ID List
Configuration ID Configuration ID List
Structure Structure List

For data type descriptions, see [Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhk23ora1wom) - Data Types in Node Graph

Specifically, in the custom variable component, integers cannot be -2147483648; that is, the value range is -2147483647 to 2147483647. If the entered data exceeds this range, the last valid input value will be returned.

The precision of custom variables of type Floating Point Numbers is set to 0.0001

## 2. Life Cycle and Scope of Custom Variables

**Life Cycle**

The life cycle of custom variables follows the component (and similarly follows the entity to which the component is mounted)

When an entity is _destroyed_, custom variables will be destroyed simultaneously (cannot be accessed or modified)

**Scope**

Custom variables have global scopes for both reading and writing, meaning entities can read and modify custom variables on any entity

Similar to most other events, custom variable events are only pushed to entities where the node graph is mounted

## 3. Custom Variable Operations

After defining custom variables in components, you can perform operations such as reading, writing, and monitoring in the node graph, including:



Read from the _server node graph_



Write in Server Node Graph



Monitor custom variable changes in the server node graph



Read from the _local node graph_

# II. Functions of Custom Variable Component

The custom variable component is the data carrier for custom variables

Custom variable components support configuring multiple custom variables simultaneously

An entity must have a custom variable component before custom variable operations can be performed on it

Only custom variables configured and created by default in the component will be synchronized locally for use by features such as the _Interface_ and _local filters_

Custom variables **do not** need to be defined before use. In Server Node Graphs, the _"Set Custom Variable"_ node can be used to dynamically create new custom variables for an entity (but ensure the newly created custom variables do not share names with existing ones)

Must be specified during the definition process



Custom variable name: This is the unique identifier for custom variables. Within the same component, duplicate custom variable names are not allowed



Custom variable _data type_: The current mode uses strong typing, which means all custom variables must have their types explicitly defined.



Custom variable default value: When an entity is created, this custom variable will be created with this default value

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/d5153bb9-1a9d-4616-b538-6026b5a4926c.png)

# III. Entry Point for Custom Variables Editing

**Step 1**: Find or add a custom variable component in the Components tab of the entity or prefab

1. Switch to the Components tab of the entity or prefab

2. Find or add a custom variable component

The custom variable component is a default-mounted component for all units (i.e., it will be mounted by default when a unit is created). Therefore, for newly created entities or prefabs, you can find the custom variable component directly in the Components tab

If it doesn't exist, you can add a custom variable component through the Add Common Components button

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/d2ee9e0d-135b-4299-8162-9f922edc2921.png)

You can see the number of currently defined custom variables on the Components tab

Click [Advanced Editing] to enter the details editing tab for custom variable components

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/42847ef7-3288-4140-853b-58f7e2e2ce0d.png)

**Step 2**: Add or modify custom variables on the "Advanced Editing" tab for custom variable components

After entering the "Advanced Editing" tab, you will see the following:

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/dd543a7c-bb1b-4422-a534-89bcb494a7fe.png)

[Predefined Custom Variables]: View and modify currently defined custom variables, including their names, types, and default values

Please note that modifying the name or type of a predefined custom variable within a component may cause related custom variable nodes in the node graph to fail to run

For example: Suppose there is a custom variable in the graph named [New Variable 1] with type [Integer], and its value was modified using [Set Custom Variable] in the node graph

If you modify the name or type of [New Variable 1] in the component, the [Set Custom Variable] node in the node graph will fail to run because it cannot find the corresponding variable

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/17f04925-0fda-4ad8-8d0d-62d8c01966ba.png)

[Add Custom Variable]: You can add one or multiple execution-type custom variables

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/67cbdfaa-1d3c-436a-bbb6-abec860f3a46.png)

[Other Functions]: Stage variable overview, filtering and other functions

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/6d979812-9231-4f11-9807-d115e5fe3e31.png)

Stage Custom Variables Overview: View all custom variables defined on entities in the current stage

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/6dc3ddea-8762-4541-823b-77bd08af133d.png)

Filter: You can filter defined custom variables by type

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/a74df4e9-04f0-415a-b365-1d708f0d5b88.png)

Other Functions - Batch Delete: When enabled, you can batch delete custom variables

Note: Similar to modification, deleting custom variables defined in components may also cause custom variable-related nodes in the node graph to fail to run

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/d4376ece-a591-459f-bc6a-53f6bcbfb7ca.png)

# IV. Using Custom Variables in Node Graph

## 1. Using Custom Variables in Server Node Graph

**Set Custom Variable**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/5dba96b7-be4f-4093-bbc8-484efbd493ce.png)

**Node Type**: Execute

**Node Functions**



Set a custom variable with a specific name on the target entity to the specified variable value



The target entity must have a custom variable component. Regardless of whether a variable with the specified name already exists, the node will execute normally; if no variable with that name is present, a new variable will be created automatically



This node supports generic input

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity Target entity for setting custom variables
Input Parameter Variable Name String Custom variable name to be set
Input Parameter Variable Value Generic Variable value to be set. Supports generic input parameters
Input Parameter Trigger Event Boolean When set to [yes], the [When Custom Variable Changes] event will be triggered

**Get Custom Variable**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/35fc82e2-205f-4837-850c-94c2c0b9b518.png)

**Node Type**: Query

**Node Functions**



Get custom variable value with a specific name from the target entity



The target entity must have a custom variable component with a corresponding custom variable name



The output parameter type of this node is generic, requiring connection to determine the generic type before use

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity Target entity to obtain custom variables
Input Parameter Variable Name String Custom variable name to be obtained
Output Parameter Variable Value Generic Retrieved variable value, generic output, requires connection or manual generic type determination before use

**When Custom Variable Changes**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/5a991da7-51d1-4dcc-a940-5b8e940091b6.png)

**Node Type**: Event

**Node Functions**



When the custom variable value on the entity to which the node graph is mounted changes, the node graph will receive this event



Note that this event will be triggered whenever any modification is made to the custom variable, even if the value remains the same before and after the modification

For example: If a custom variable has a value of 3 (integer), using the [Set Custom Variable] node to set its value to 3 again will still trigger this event (both the old and new values in this event will be 3)



All custom variable changes will trigger this event, so it is recommended to filter the variable names you want to monitor as shown in the graph below

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/e33cb7b2-ae48-4ad9-9279-2e06b6e8e7a9.png)

It is important to note that in all custom variable change events for container data types, the event will not include the _pre-change value_ and the _post-change value_ of the change. Additional use of the "Get Custom Variable" node is required to obtain the post-change value

Container data types include all list data types, all dictionary data types, and all structure data types

As shown in the graph below

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/5220d8fa-0417-4133-8c27-de393dfd7902.png)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Output Parameter Event Source Entity Entity Common event parameters. The entity that triggers the event
Output Parameter Event Source GUID GUID Common event parameters, the entity GUID of the event trigger
Output Parameter Variable Name String Changed variable name
Output Parameter Pre-Change Value Generic The value of this custom variable before the change
Output Parameter Post-Change Value Generic The value of this custom variable after the change

## 2. Using Custom Variables in Local Node Graph

**Get Custom Variables**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/35fc82e2-205f-4837-850c-94c2c0b9b518.png)

**Node Type:**Query

**Node Functions**

-Get custom variable value with a specific name from the target entity

-The target entity must have a custom variable component with a corresponding custom variable name

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Target Entity Entity Target entity to obtain custom variables
Input Parameter Variable Name String Custom variable name to be obtained
Output Parameter Variable Value Generic Retrieved variable value, generic output, requires connection or manual generic type determination before use

# V. Runtime Details of Custom Variables

## Custom Variables and Container Types

Custom variables of _container data_ types in node graphs have distinctive pass-by-reference semantics

Container data types include all _list data types_, all _dictionary data types_, and all _structure data types_

The following uses the list data type as an example

See the graph below:

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/e9413a83-06f9-4c71-a0f4-e7f8200d5c9d.png)

After executing the above process, the value of the custom variable [Test List] will become {1, 3, 5, 7}

We can see that the nodes [Insert Value Into List] and [List Sorting] actually changed the values stored in the custom variable.

This is what we call [Pass by Reference]. When the [Get Custom Variable] node retrieves a variable whose value type is a list, it outputs a reference to the list stored in the custom variable (rather than the value itself). Any subsequent modifications will result in changes to the list stored in the custom variable

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/c579c7a9-1517-4a2e-bd4b-4ae9956ded49.png)

Additionally, it should be noted that modifications here will not trigger the [When Custom Variable Changes] event (this event can only be triggered by the [Set Custom Variable] node)

You can see the comparison in the graph below

The [Addition] node does not modify the value of the [Test Value] custom variable, so the printed custom variable value remains 5 (instead of 10 after the addition)

This is a typical [Value Transmission], meaning that the output parameter of [Get Custom Variable] outputs the value stored in the custom variable, so modifying this value will not affect the value of the custom variable stored in the component itself

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/778045f2-bdbc-4238-b2c8-7bfbb0e8d40e.png)

In summary, **operations on container-type custom variables in the node graph will cause changes to the value of the custom variable, while operations on non-container types will not**

Additionally, when the value of a custom variable is modified using the [Reference Passing] method for container data types, it will not trigger the [**When Custom Variable Changes]** event. You need to use the [**Get Custom Variable]** node to obtain the updated value.

Only the Set Custom Variable node can trigger the When Custom Variable Changes event for container data types, and the _Pre-Change Value_ _and_ _Post-Change Value_ outputs do not have values. You need to use the _Get Custom Variable_ node to obtain the updated value.

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh07te9wy8b6/e3573c19-e747-4ad0-9ec4-9acf16b225a7.png)

[Collision Trigger](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh8w69rzuc3i)[Projectile Motion Device](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhaqt9rgqv4u)
