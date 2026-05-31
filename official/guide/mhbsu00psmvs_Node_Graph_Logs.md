---
id: mhbsu00psmvs
title: Node Graph Logs
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhu951iz7wz8
language: en
scope: guide
crawledAt: 2026-05-31T16:28:37.760Z
---

# Node Graph Logs

# I. What is a Node Graph Log

When developing gameplay logic, you may encounter many cases where issues are difficult to pinpoint.

The Node Graph Log displays the execution flow of a Node Graph at different points in time and shows the input and output parameter values of each Node, which will help Creators (Craftspeople) to debug more effectively

The graph below shows a Node Graph in Log Viewing mode![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbsu00psmvs/9a036205-3ae8-4850-bca5-cd4576f63632.png)

# II. Debugging Through Node Graph Logs

## 1. Enable Node Graph Logs

From Window — Log, open the Node Graph Logs window

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbsu00psmvs/1ab04774-70ad-43e4-8dea-2471008ce49e.png)

Node Graph Log Tab

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbsu00psmvs/da520255-0996-4698-82e8-74083e1f5f3e.png)

## 2. Debug through Node Graph Logs



**Filter Node Graphs**

Before debugging with logs, select which Node Graphs to include in the Node Graph Filter Tab, as shown in the graph below

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbsu00psmvs/bf58dab2-34d7-420b-bd61-c77b00c1cc4c.png)

After filtering, when the Stage runs, the selected Node Graph will return log information during execution

Log information includes the following:

Node Graph Events: Shows the currently active Node Graphs and the time points at which they became active

Print Information: Information printed through the [_Print String_] node

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbsu00psmvs/962cbc54-a6ed-4881-a3bc-abce2de61c55.png)

Double-click an active Node Graph to enter the Node Graph Debug mode

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbsu00psmvs/ee56f154-fcd3-42b7-9f80-e04caf952b36.png)



**Node Graph Debug Mode**

In the Debug Tools at the top-left, you can view the active _Logic Subgraphs_ (there may be multiple) at the current log timestamp. Each Logic Subgraph is a Node Graph Execution Flow triggered by an Event Node

When you select the currently active Logic Subgraph, its section will be highlighted (as shown in the graph below)

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbsu00psmvs/f735857b-c224-4e25-af56-bff58c0e3e4b.png)

Hover over a Node to view its current input and output parameter values

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhbsu00psmvs/5a84fefe-3d67-41f3-ad15-73f8906067ad.png)

[Composite Node](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhty17iqeht0)[Client Server Node Graph Logs](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhrnuz9izfne)
