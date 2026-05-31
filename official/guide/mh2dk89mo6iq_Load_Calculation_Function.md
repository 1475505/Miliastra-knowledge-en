---
id: mh2dk89mo6iq
title: Load Calculation Function
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho2hirgodxi
language: en
scope: guide
crawledAt: 2026-05-31T16:26:51.125Z
---

# Load Calculation Function

# I. What is Load Calculation Function?

During Stage editing, this function performs real-time evaluation of the environment. It calculates the complexity of Scene Layout and the number and density of Entities, then provides risk warnings by area.

After a Stage runs, the system generates a Load report. It records the Stage's Static Units Layout and Node Graph activity, then compiles the data into a summary report with risk warnings for Creators (Craftspeople).

# II. Stage Load Level

The Stage Load setting feature provides Creators (Craftspeople) with auxiliary detection for monitoring Stage Load.

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/c9616d8c-3b64-48e7-b2d9-8943e938cbcb.png)

Open the _Stage Settings_ in the system menu. Under **Basic Configuration — Load Settings**, you can adjust the minimum Load requirement needed for the Stage to run properly.

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/20d85ace-a1c1-45c0-9a7d-24613d1e651b.png)

The higher the Load requirement level, the higher the Load metric limit. During Stage editing, the warning threshold for Load detection also increases accordingly.

Based on the configured Stage Load requirements and the actual editing state, the final Load requirement will be displayed in the Details Interface after deployment. Players will also receive Load-related prompts before gameplay.

# III. Load Calculation Function Overview

Provides both Static and Dynamic Load calculation methods.

_Static Load Calculation_

Provides recommended Load limits during Static editing and estimates the current Load of the Stage being edited.

If the limit is exceeded, a warning is issued, as this may result in stutters, frame drops, or even crashes during Stage runtime.

If performance is within the limit, the current editing status is good and the playtest is expected to go smoothly. However, this method cannot evaluate Load costs from dynamic runtime logics like node graphs, so runtime issues, such as stutters, cannot be fully prevented

_Dynamic Load Calculation_

Creators (Craftspeople) can manually start Load recording, which will capture Load data during Stage runtime in a playtest.

During Stage runtime, each Player's Load is monitored. When a Player's Stage Load reaches its peak, a screenshot is taken. After the playtest ends, a report is compiled and provided to the Creator (Craftsperson).

_Client Server-related Load Metrics_

Related to the devices used by Players when running a Stage, the current client server upper limit is based on standard PC hardware specifications

Please check **Stage Settings — Player Count Configuration**

Local memory — Others mainly include memory consumption required for the **max number** of players

_Server-related Metrics Load_

Please check **Stage Settings — Player Count Configuration**

The Server deploys Load based on the configured minimum player count. For example, if the server Load N is deployed for 1 Player, then the Stage's deployed Load will be the minimum player count x N

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/7adaf0c1-a95e-4b84-a659-2949bebed890.png)

# IV. Static Load Calculation

The menu bar provides a Static Load option. Click to view the current Global Load calculation.

To help Creators (Craftspeople) locate places where Load exceeds limits, the Stage is divided into Areas. Each Area provides its own Load calculation to support targeted adjustments.

## 1. Static Load Calculation — Global

Summarizes Load calculations across all Areas in the current Stage being edited. All Static Load metrics are consolidated here

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/a97d066b-0311-472e-b747-9db17fe8fc6a.png)

Parameter Description
_*Icon_![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/cf58ea39-4c9e-451b-ba41-90fbbbdc0d27.png)If any metric exceeds the recommended value, a warning will be issued
_*Global Resource Ratio_ The highest Load calculation result across all areas in the current Stage, compared to the total available Load.

Displays the percentage of total Assets used
_*Static Calculation Load_ A notification will appear if the Load calculation exceeds the limit in any Area of the current Stage
_*Static Memory Load_ A notification will appear if the Load calculation exceeds the limit in any Area of the current Stage
_*Save File Size_ Estimates the storage space required when uploading the current Stage after saving.

If it exceeds the limit, **Creators (Craftspeople) will be prevented from uploading**

## 2. Static Load Calculation — Area

Click **View Load Status** to expand the details interface

### (1) Regional Load Overview

When considering player gameplay, with the player's location as the center, the surrounding environment and entities within a certain range will occupy a certain Load.Therefore, in Load calculation, Load is calculated and displayed by Area, making results easier to understand.

_*Show Only Overloaded Areas_: Checked by default. When enabled, only Areas with high Load usage are displayed; otherwise, all Areas are shown.

Areas are displayed in ascending order by Area ID.

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/666ce4aa-4cdb-439c-99ff-5a66b7a7d924.png)

_*Indicator on the Right Side of the Area_: Represents the current Area's Load usage status

Parameter Description
![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/38e584c8-d6a2-49ac-87eb-a926386e43d0.png)The current Area's Static Load has exceeded the limit. Adjustment recommended
![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/6775eb38-8cfb-4f03-8817-c288012f84eb.png)The current Area's Static Load is approaching its upper limit.

### (2) Area Load Details

The content of each Stage is calculated independently within each included Area, without interference between them.

The total Load calculation for each Area consists of _Static Memory Load_ and _Static Calculation Load_.



**Specified area's**_Static Memory Load_

Clicking a specific Area expands its Load calculation details. In Scene editing, overlaps between the calculation Area and the Scene are displayed

Scenes and Entities within an Area consume that Area's memory Load

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/bfbb1e4c-01a1-4db8-8d76-56f7a3212994.png)

Stage Load calculation Areas are evenly distributed across the entire Scene. This ensures that calculations exist for different height ranges.

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/68faddb5-f0fb-4566-ab07-33b57bda8d1d.png)



**Orientation-specific**_Static_ _Calculation Load_

When Players are in different Areas but face the same Location, they can see or interact with the same Stage content. This means multiple Areas may include the same Stage content in Load calculations. The orientation data refines the Load calculation range, helping Creators (Craftspeople) optimize adjustments

As shown in the example below, you might wonder why the empty white area also has a high Load calculation

This happens because the actual calculation distance is greater than the illustrated range. Load calculations begin from the center Location and extend in the specified direction to the visible detection range. The graph only shows the starting point and Orientation range

Therefore, the high Load calculation shown in the graph is due to too many enemies placed along the negative Z-axis

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/8fae772c-26b3-4310-9fff-7211afefddb7.png)

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/9e26e6cc-fff8-4979-96ea-44ea67cbba31.png)

As shown in the graph, two Areas with different Orientations both recorded Load for the same Stage content, demonstrating that each Area's Load calculation is independent

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/83ffad5f-8ce7-4941-bc2e-96ebe765b6e6.png)

By selecting a specific Orientation, you can view Load calculation details for that Orientation. All included Entities and their respective Load values are listed

Parameter Description
_*Location_ The central Location used for Load calculation within each Area
_*Orientation_ Starting from the central Location, the Load calculation values are displayed within an 80m range detected in the specified Orientation.

In Scene editing, the corresponding Orientation range is also displayed.
FOV Cone — Red

Represents Static Calculation Load exceeding the recommended value![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/843962c1-79a4-4a6f-a34d-d2c27a42e2cd.png)
FOV Cone — Yellow

Represents Static Calculation Load, approaching the recommended value![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/7b842ece-bf2f-4782-8579-eba1cbb8decf.png)
FOV Cone — White

Represents Static Calculation Load, below the recommended value![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/692d74be-5e7c-4f81-90fe-dbc2ad9727f0.png)
_*Static Calculation Load_ The current orientation-specific **Static Calculation Load**/Recommended Upper Limit

First, the Area calculates the Load of Entities within the visible range, starting from the central location in the specified orientation.

Second, based on the distance between each Entity and the center point, a distance coefficient is applied. The total load of all Entities is then calculated as the Static Calculation Load.

As shown below, eight identical slimes produce different load results depending on their distances from the center. The farther away, the lower the Load.

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/8b83d75d-6a7d-4c5b-8aab-372f0ddbf7e7.png)

In the second graph, the red Area contains 16 slimes, while the blue Area has only 8. Even with distance coefficients reducing values at greater ranges, the red Area still bears higher Calculation Load due to having more Entities

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/d83cb8ab-16eb-475f-9004-5c8e87a113db.png)
_*Static Memory Load_ Current Area's **Static Memory Load**

# V. Dynamic Load Calculation

During Stage runtime, Entities and Special Effects generated by Node Graphs affect the Load. These impacts cannot be estimated by Static calculations. Therefore, Dynamic Load Calculation is provided, allowing Creators (Craftspeople) to obtain Stage runtime Load data for adjustments.

## 1. Dynamic Load Calculation Window

Open Miliastra Sandbox and, from the **Window** of the Menu Bar, open the **Load Detection** window.

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/9cdc8072-c918-49a5-8540-c2cd04e3207e.png)

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/15bcbd19-6cce-459f-beae-fafe28eabdb3.png)

## 2. Enable Dynamic Load Calculation

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/01a57c95-ec7d-4c41-8789-da5159483900.png)



Turn on the **Enable Load Testing** switch in the top-left corner.



Do a **playtest** of the Stage**.**

When the Stage starts running, dynamic Load detection begins, taking screenshots whenever the Load exceeds recommended values during runtime.

**_Important Notes:_** Enabling Dynamic Load Test will itself impact the Load.

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/98c8cde3-f666-4b68-afe6-5b4a47facb63.png)

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/087d0b0e-c9b8-4c6c-a6b4-fde07b950d76.png)

After the playtest ends, the Dynamic Load log for the Stage will be automatically imported.

**_Important Notes:_** Do not turn off the Load test switch during the playtest or while viewing reports.

## 3. View Dynamics Load Calculation Report

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/5c60385b-fc46-4262-844a-e1706e728a69.png)

**Submenu**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/3e17fe79-232e-440e-80a4-49c2430c7e86.png)

Parameter Description
_*Calculation Load Spike (Local)_ When Dynamic Calculation Load approaches or exceeds the limit, detailed data will be provided along with adjustment recommendations
_*Memory Load Spike (Local)_ When Dynamic Memory Load approaches or exceeds the limit, detailed data will be provided along with adjustment recommendations
_*Processor Spike (Server)_ When the server processor approaches or exceeds its limit, detailed data will be provided along with adjustment recommendations
_*Memory Load Spike (Server)_ When server memory approaches or exceeds its limit, detailed data will be provided along with adjustment recommendations

### **(1) Local Calculation Load Spike**



**Load Detection Tool Hint**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/9ff03005-85f2-4cc8-b7ad-f33610a91372.png)



**Load Detection Tool Details**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/860f8125-8821-4548-a529-1063f2239bfc.png)

_*_ _List of Anomaly Moments_

During the playtest, data is collected every second.

If the Dynamic Calculation Load exceeds the recommended value, screenshots will be taken and listed here in chronological order

Select to view details

_*_ _Anomaly Moments_ _Comparison Chart_

With the selected anomaly as the center of the chart, the actual runtime screenshots will be displayed on the right side. This supports comparing detailed Load data up to 5 seconds before and after (if available)

Select an anomaly from the graph/filter bar, and the Load details will display a comparison between the selected moment and the anomaly moment

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/5c60385b-fc46-4262-844a-e1706e728a69.png)

_*Load Details_

The selected anomaly moment will have data screenshots listed here, including runtime entities and environmental information.

Expand an entity to also view details such as its mounted special effects

### **(2) Local Memory Load Anomaly**

The interface data display section for Dynamic Memory Load has the same significance as Local Calculation Load anomalies.

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/39853489-f2bf-4eea-9f71-11c5a29f0664.png)

### **(3) Server Processor Anomalies**



**Stage Runtime Hint**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/314a603c-97ff-4285-82c2-4a21f84949bf.png)



**Load Detection Tool Hint**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/e48ecff1-69b4-4725-9cce-dc79e1098d14.png)



**Load Detection Tool Details**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/448a02d0-aa47-4cf7-b617-faf6e4d49f03.png)

Parameter Description
_Anomaly Log_ The cause of the anomaly is labeled
_System Content_ Explanation of processor Load consumed by essential system functions
_Anomaly Node Graph_ Explanation of processor Load consumed by the Anomaly Node Graph
_Details_ _ID_ Node graph ID
_Load_ The Load value of the specified function
_Load Percentage_ The percentage of total Load taken by the specified function
_Affiliated Entity_ If the target is a Node Graph, the associated Entity will be provided
_Operation_ Locate the Node Graph and open it directly for editing

### **(4) Server Memory Load Anomalies**



**Load Detection Tool Details**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh2dk89mo6iq/5867021f-0a60-4bd5-8313-f4cbf3fea81a.png)

Displays server memory usage anomalies and total memory consumption

Different suggestions will be provided depending on the cause of the memory anomalies

[Risk Check Function](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh0xm3ryh9hq)
