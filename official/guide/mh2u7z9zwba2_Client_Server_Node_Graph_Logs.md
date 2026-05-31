---
id: mh2u7z9zwba2
title: Client Server Node Graph Logs
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhrnuz9izfne
language: en
scope: guide
crawledAt: 2026-05-31T16:18:32.712Z
---

# Client Server Node Graph Logs

# I. Feature Overview

This feature is used for debugging client node graphs (displays the execution flow of node graphs and shows the input/output values of nodes within the graph).

# II. Limitations and Feature Planning

## 1. Limitations

Unlike the original node graph log system, due to the client node graphs' operating logic, this feature currently only displays logs from the Local using the logging function; it cannot view node graph logs from other players' client node graphs logs.

## 2. Feature Planning

Future versions will provide functionality to display client node graphs logs from other players participating in playtests.

# III. Function Entry Point

From Miliastra Sandbox > Window > Logs, click to open [Log System]

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2u7z9zwba2/e7024160-eb7c-425b-9fd6-300c0b956402.png)

# IV. Debugging Process

## 1. Select Target Node Graph

Before starting a playtest, in the Filter panel, select all client node graphs from which you want to capture log information.

The highlighted section in the graph is used to select target logs for client node graphs. Selection limit for client node graphs: 99 (Server Node Graph limit remains 10)

Note: Only the selected target Node Graphs will return log information.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2u7z9zwba2/2111925f-4b4e-45f3-9eba-8500492ff888.png)

New feature: Select all node graphs of this type.

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2u7z9zwba2/7368342c-22b3-4674-99e2-bbfabd69433f.png)

## 2. Node Graph Log View

During gameplay, when a selected client node graph is triggered, log information is generated

The log information includes the following:



Node graph name, effective time, and mounted objects;

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2u7z9zwba2/f94137c7-3b93-4050-afc7-a2a0f02be5aa.png)

Double-click the active client node graph to open its debug mode (see below);

## 3. Node Graph Debug Mode

When in Client Node Graph Debug Mode, all active nodes and their execution flows are highlighted. Hover over a node to view its current input and output parameter values.

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2u7z9zwba2/b934f3e9-caba-4432-8f9c-6f97cce4e107.png)

[Node Graph Logs](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhu951iz7wz8)[Composite Node Graph Logs](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhip8yit341o)

1
