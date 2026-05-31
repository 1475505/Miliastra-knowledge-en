---
id: mh9y7008w3ug
title: Basic Concepts
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk23ora1wom
language: en
scope: guide
crawledAt: 2026-05-31T16:17:32.628Z
---

# Basic Concepts

# I. Node Definition

## 1. What is a Node?

In a node graph, nodes are the most basic functional units

Each node defines a specific game logic function

For example:



**Playing Special Effects**



**Addition**



**Loop Execution**

## 2. Node Structure

A typical node is shown in the graph below

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/f264d307-c6c3-4632-88cd-12931e8afad3.png)

### (1) Node Name

Describes the node's function. Non-composite nodes cannot be edited

### (2) Logic Pins

Used to connect the execution flow in node graphs and define the execution order of nodes

Divided into logic input pins and logic output pins

_Logic input pins_ can connect to _logic output pins_ of other nodes. The node graph executes each node in sequence along the execution flow lines between logic pins. Logic input pins act as the "entry point" of a node

_Logic output pins_ can be connected to _logic input pins_ of other nodes, specifying which node will run next after the current node finishes. Logic output pins act as the "exit point" of a node

### (3) Parameter Pins

Parameter Pins are divided into input parameter pins and output parameter pins

_Input Parameter Pins_ specify the parameters required for node execution. Parameter values can be provided either by entering them directly or by connecting them via lines

_Output Parameter Pins_ specify the parameters returned after the node completes execution. These can be connected to input pins of other nodes to pass parameters between nodes

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/49065d9d-03d6-4e7b-9b8a-e06e6d293e73.png)

For example, in the [Addition] node shown above, there are two input parameter pins and one output parameter pin

The two input parameter pins represent two addends in a binary addition, and the output parameter pin represents the sum

As mentioned, you can specify input parameters by entering values directly

In the example below, this node's running output value is 3 (1+2=3)

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/47412bdb-849f-43b6-98d6-3be83c262446.png)

Input parameters can also receive values through connections

In this example, the right-hand Addition Node takes in two inputs: 3 (from the upper Addition Node's output of 2+1) and 11 (from the lower Addition Node's output of 5+6)

Therefore, the output value of the Addition node on the right is 14 (11+3=14)

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/8f54c803-65e6-4571-98d6-f96c0e133695.png)

## 3. Node Types

In a node graph, there are five types of nodes:

**Node Type****Example****Style****Function**
Execution Node![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/292b9807-f723-4072-998f-dddbc168c85f.png)Logic Pins: Includes one logic input pin and one logic output pin.

Parameter Pins: There are several input parameter pins and several output parameter pins.Each execution node corresponds to a specific function; when the execution flow runs to this node, it executes this node and produces some effects that actually impact the game's operation, such as playing special effects, performing attacks, or modifying custom variables.

The node graph will run along the execution flow connections between event and execution nodes.
Event Node![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/01750baa-9ca5-4cc2-99ce-91f8de7fc1f6.png)Logic Pins: one logic output pin; no logic input pin.

Parameter Pins: several output parameter pins; no input parameter pins.An event node defines an in-game event. When that event occurs, it triggers the node and initiates the subsequent execution flow.

An event node is the entry point of the server-side node graph's execution flow. Every valid execution flow must start with an event node.

Typically, an event is triggered only when a specific event occurs on the entity that the node graph is mounted to. For example, the [Tab Selected] event on the left is triggered when the _tab component_ 's configured _tab_ is selected
Flow Control Node![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/9ee6c8b2-50c5-44d1-8a61-7c909b829b14.png)Logic Pins: may have multiple logic input pins and logic output pins.

Parameter Pins: may have multiple input parameter pins and output parameter pins.There are fewer flow control nodes; they mainly include nodes that will affect the execution flow. They all include multiple logic output pins. Depending on the input values, subsequent execution will follow different logic flow branches.

A typical example is the binary branch node on the left. This node accepts a boolean-type parameter. When the parameter is [true], the execution flow will follow the [true] branch; otherwise, when it is [false], it will follow the [false] branch of the execution flow
Operation Node![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/dabadaab-6761-4479-a14b-e3f2161b51fb.png)Logic Pins: No logic pins.

Parameter Pins: Must have input parameter pins and output parameter pins.Operation nodes are a series of nodes describing [operations], such as additions, comparisons, etc.

Therefore these nodes must have input parameters (the input values of the operation) and output parameters (the result values).

Operation nodes have no logic pins and therefore can only be used in operation flows
Query Node![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/3b713a80-d39e-45d2-8c5f-1d15ae126a2c.png)Logic Pins: No logic pins.

Parameter Pins: May have input parameters but must have an output parameter.A search node is a type of node that describes a [Query] action, such as searching for an entity type or searching the layout of the current UI controls group and the alike.

This type of node will always have an output parameter to serve as the search result.

Search nodes do not have logic pins and can therefore only be used within an operation flow

# II. Connections Between Nodes

## 1. How to Connect Between Nodes

Node graphs organize game logic by linking node functions through [connections]

The basic rules for connections are



For both logic pins and parameter pins, output pins connect to input pins, and input pins connect to output pins



Logic pins connect to logic pins, forming _execution flow connections_; parameter pins connect to parameter pins, forming _operation flow connections_

## 2. Node Graph Connections

### (1) Execution Flow Connection

In the graph below, the highlighted section shows the [Execution Flow Connection]

Execution flows link nodes with logic pins (such as execution nodes, event nodes, or flow control nodes) by connecting a node's logic output pins to another node's logic input pins

At runtime, execution flow begins from an event node's logic output pins and proceeds sequentially through the connected nodes

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/c6f0e288-1306-4221-a11c-e180c134e71f.png)

For example, in the graph above, the nodes run in the following order:

**When On-Hit Detection Is Triggered** (Event) — **Play Special Effects** (Execution) — **Double Branch** (Flow Control) — **Initiate Attack** or **Destroy Entity** (Execution) (based on the double-branch condition being [Yes] or [No])

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/b57adc56-ef15-4704-ad5d-6e9c052c4026.png)

Execution flow connections support one-to-many and many-to-one connections

**One-to-Many Execution Flow Connection**

This refers to one logic output pin connecting to multiple logic input pins

One-to-many execution still follows a sequential order (hover over the pins to view execution sequence markers)

Note: The execution of one-to-many connections follows a **depth-first** order, meaning it will complete the current execution flow to its conclusion before starting to execute the flow in the next branch

Taking the following graph as an example, after the Play Special Effects node, it executes: Initiate Attack, then Set Custom Variable, then Destroy Entity

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/076df8c1-04a7-43c9-a6ab-91cd7c491ed9.png)

The connection methods shown in the graphs above and below are equivalent

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/cf869e87-a587-478a-b34f-da14f6e16b47.png)

**Many-to-One Execution Flow Connections**

This refers to multiple logic output pins connecting to a single logic input pin

The execution flow in this case follows the basic rules (proceeding in the sequence of logic output — logic input — logic output...)

As shown in the graph below, after executing the **Initiate Attack** and **Destroy Entity** nodes, the **Set Custom Variable** node will be executed each time

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/f3778fff-217c-4bb2-bfbe-906b2fc52981.png)

The connection methods shown in the graphs above and below are equivalent

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/1941f372-bdd3-4f59-ad72-91ec26724439.png)

Please note that this connection method may introduce some hard-to-detect risks: although the execution node is placed only once in the node graph, it will still be executed multiple times. You can use the [Node Graph Logs](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhu951iz7wz8) to check the actual execution flow

### (2) Operation Flow Connections

The highlighted section in the graph below shows the [Operation Flow Connections]

An operation flow connection links two nodes via parameter pins, connecting the output parameter pin of the previous node to the input parameter pin of the next node

Operation flow connections represent the process of passing parameters. At runtime, the output parameter from the previous node is passed to the input parameter of the next node for use in its operations or execution

![Image 17](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk23ora1wom)

Operation flow connections only support one-to-many connections

**One-to-Many Operation Flow Connections**

In the example above, there is a typical one-to-many operation flow connection. Hover over the pins to highlight the connections (see the graph below)

A one-to-many connection means the same output parameter value is passed simultaneously to multiple input pins for operation. For example, in the graph below, the output parameter of [Event Source Entity] is passed to both the [Target Entity] input parameter of the [Play Special Effects] node and the [Target Entity] input parameter of the [Destroy Entity] node, meaning both nodes receive the same value

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/6ae76670-2ba7-44a2-a84a-830ae5b7b168.png)

## 3. Other Connection Rules

### (1) No Cycles and Special Cases

In a node graph, both execution flow and operation flow must not form circular connections. (For execution flow, this often causes infinite loops; for operation flow, it leads to circular evaluation)

The connections shown in the graph below are examples of invalid connection methods

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/deaea1c2-89ef-4b7d-b00a-6240a6380f78.png)

There is one exception to this rule, which is the [Break Loop] node. For specific functionality details, please refer to: [Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhw66orrrfkm)> Break Loop

### (2) Type Matching

Node Graphs are a **strongly-typed** scripting language, meaning that at runtime, all parameters in the node graph are transmitted and executed with defined data types

Therefore, only parameter pins of the same type can be directly connected

For example, in the image below, [Tab ID] and [Extra Collision ID] are both [Integer] types, so they can be connected

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/1f566541-0b7b-4381-a88c-1fb1a5db647b.png)

In contrast, attempting to connect [Tab ID] with [Activate] will result in a connection error, because [Tab ID] is an [Integer] and [Activate] is a [Boolean]

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/cf8f8c09-6ceb-4171-ba8f-10e6d18c54d8.png)

# III. Node Graph and Logic Subgraphs

Use lines to connect the nodes together to form a **_Node Graph_**. Each node graph executes specific custom logic

A structure that starts from an event node and connects all subsequent execution flow lines is called a **_logic subgraph_**. Each node graph can contain multiple logic subgraphs

The graph below contains two logical subgraphs

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/4b04a196-3cfa-43dd-88fe-c7aecb61f88a.png)

Note: Operation flow connections across different logic subgraphs are not allowed. For example:

Since operation flow is evaluated after execution flow, if an operation flow input pin is connected to an output pin in another execution flow, it will retrieve the value from the previous execution of that operation flow node — typically resulting in incorrect results

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/b075ef42-ac7f-440d-8f82-4d1d3d023b27.png)

# IV. Node Graph Execution Flow

## 1. Starting Point of a Node Graph

### **(1) Server Node Graphs**

Server Node Graphs are event-driven, meaning the starting point of a server node graph's execution flow must be an _event node_.

When the event node is triggered, execution follows the execution flow line through to the final execution node, as shown by the red arrow in the graph below

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/a6db9dad-e491-4e3b-9209-c5c1b78881ce.png)

### **(2) Skill Node Graphs**

A Skill Node Graph is not event-driven; instead, it has a fixed _Node Graph Starts_ node. The skill node graph will run sequentially from this node to the final node

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/3cfbf00c-7ae7-4b27-8733-1fbcf9b9edc4.png)

### **(3) Local Filter Node Graph**

The Local Filter node graph only has operation flows. Therefore, this node graph has no starting point, with only a _Node Graph Ends_ node serving as the exit point of the node graph. The final output result is calculated according to the operation order of the operation flow

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/24da4156-3717-4037-a1d4-4b547c7e9b71.png)

## 2. Execution Flow

A node graph executes its nodes sequentially, from front to back, based on the connection order of their logic pins

Key points:



The execution flow of all node graphs can be considered sequential within the same frame (ignoring performance issues that may cause delays), with a fixed temporal order determined by the sequence of nodes in the execution flow



A node may fail to execute (for example, when attempting to set a value for a non-existent custom variable), but execution failure will not interrupt the execution flow, and the next node will still run normally

## 3. Operation Flow

The operation flow of the node graph **relies on the****execution flow calls** to run. Any operation flow not connected to the input parameters of an execution flow node will not take effect

Specifically, when the execution flow reaches a particular execution node, if that node's input parameters are provided through parameter connections, the system will trace back along the operation flow connections to the farthest upstream operation flow node, then calculate sequentially from front to back along the operation flow until the input parameter value is determined

Taking the following graph as an example, when executing [Set Node Graph Variable], it is found that the [Variable Value] input parameter is passed through the operation flow, so it will trace back along the red arrows shown in the graph to find the farthest operation flow nodes (i. e., the Addition and Larger Value nodes)

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/674fb552-c5a6-42dd-8c7a-08992e9a001b.png)

Then, following the operation flow's connection order in the forward direction (from input parameters to output parameters to the next node's input parameters), each operation node is executed in sequence, ultimately outputting a value to the execution flow node's input parameters

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/e1848ebc-5b0a-4365-ac12-7e4bd6aca6a0.png)

Additionally, it's important to note that the above process of tracing + computation is carried out on a per-execution-flow node basis. This means that for a single execution flow node, the computation stream related to the input parameters will only be executed once. However, for two execution flow nodes, the process will be repeated once.

For example:

In Node 1, the two input parameters [Variable Name] and [Variable Value] share part of the operation flow, but that shared portion will run only once (in the order shown in the graph)

In Node 2, the [Variable Value] input parameter shares the same operation flow as Node 1's [Variable Value] input parameter. However, because they belong to different execution flow nodes, the entire operation flow is executed again, producing a new computation

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/e552053c-e2fa-432e-afb1-e055ded4e150.png)

In most cases, these rules have no impact on usage, but the behavior becomes more noticeable when random numbers are involved

For example, in the graph below: in Node 1, both [Variable Name] and [Variable Value] use the same [Get Random Number] node. Since it runs only once, both parameters receive the same random number

However, in Node 2, [Variable Value] triggers [Get Random Number] again, producing a different random number

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/d0aeabbc-228b-4bd7-82d5-403521d011a8.png)

# V. Data Types in Node Graphs

## 1. Basic Data Types

The following are the basic data types in the node graph

**Data Type****Description****Default Value****Boundary**
Entity Represents a runtime entity 0, meaningless, points to a non-existent entity None
GUID The GUID of the entity when placed in the scene. For dynamically created entities, GUID = 0 0 None
Integer 32-bit signed integer, value range from -2147483648 to 2147483647 0 Values exceeding the range will automatically overflow/underflow, e. g., 2147483648 will automatically become -2147483648
Boolean Boolean type. Only has two values: [True] and [False]False None
Floating Point Numbers Single-precision Floating Point Numbers, with a range of approximately ±1.5 x 10^−45 to ±3.4 x 10^38 0 Unlike most programming languages, we do not use overflow values/invalid values (usually represented as Inf or NaN) to handle floating-point overflow. When overflow occurs, the value is corrected to 0
String String type, used to represent text data""(Empty String)Must not exceed 40 English characters (about 13 Chinese characters)
3D Vector A 3D vector type

Each component of the vector is a Floating Point Number{"x":0,"y":0,"z":0}If a single component overflows, it is handled according to the rules for Floating Point Numbers overflow
Prefab ID The ID of a prefab which corresponds to a specific prefab 0, meaningless, points to a non-existent prefab None
Config ID General Configuration ID, such as: Unit Status ID, Class ID, etc.0, meaningless, points to a non-existent configuration None

## 2. List Data Types

Each of the basic types above has a corresponding list type.

**Data Types**
Entity List
GUID List
Integer List
Boolean List
Floating Point List
String List
3D Vector List
Prefab ID List
Configuration ID List

List-type data stores a collection of values of the same type, making it easier to manage related data as a group

For example, an [Integer List] might store a group of integers such as {1, 3, 5, 7, 9}

You can perform list operations, such as using [Insert Value Into List] to insert an integer. In the example below, after execution, the list becomes {1, 3, 5, 4, 7, 9}

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh9y7008w3ug/e23bcf07-6a19-42a0-9f41-07c50ca3f25b.png)

Additional characteristics of list data types:



The list indexing starts from 0. That is, when using the [Get Corresponding Value From List] node, inserting an index input of 0 corresponds to the first element of the list.



Lists in the node graph use "Pass by Reference" for parameter transmission, see]

## 3. Conversion Rules Between Basic Data Types

[Data Type Conversion] enables conversions between compatible data types

**Source Type****Target Type****Conversion Logic****Example**
Integer Boolean 0 converts to False, non-zero converts to True Input: 0 Output: False

Input: 5 Output: True
Floating Point Numbers Integer to Floating Point Number Input: 1 Output: 1.0

Input: -2 Output: -2.0

Input: 0 Output: 0.0
String Integer to String Input: 1, Output: "1"

Input: 15, Output: "15"
Entity String Output runtime entity ID Input: Certain Entities

Output: "1001"
GUID String Output the string corresponding to the GUID Input: Certain Entities

Output: "100001"
Boolean Integer False converts to 0, True converts to 1 Input: False, Output: 0

Input: True, Output: 1
String Returns "True" or "False"Input: False, Output: "False"

Input: True, Output: "True"
Floating Point Numbers Integer Convert to an integer using the rounding rules Input: 2.5, Output: 3

Input: -1.31, Output: -1

Input: 0.0, Output: 0
String Outputs the string corresponding to the floating point number, preserving up to 6 significant digits Input: 2.5 Output: "2.5"

Input: -1.317524 Output: “-1.31752”
3D Vector String Return a string in the format “{component1, component2, component3}”. Each component retains one decimal place.Input: {"x":1.05,"y":2.3,"z":3}

Output: “{1.0, 2.3, 3.0}”
Faction String Returns the faction ID as a string Input: (any entity's faction)

Output: "2"

## 4. Invalid Values in Node Graphs

To ensure that the execution flow runs correctly, the node graph has no concept of invalid values.

When a node fails to run (for example, if the divisor is 0 in a division node), it outputs the type's default value (e.g., 0 for integer division)

[Node Graph Editing Guide](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhb3ho0k5l2w)
