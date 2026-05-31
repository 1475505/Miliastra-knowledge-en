---
id: mhir93rudpv2
title: Inventory Component
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh5y5001vqd4
language: en
scope: guide
crawledAt: 2026-05-31T16:26:04.791Z
---

# Inventory Component

# I. Inventory Component Functions

The Inventory component directly references the [Inventory](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhogfq9bf86q) template and generates corresponding inventory instances at runtime

The Inventory component supports selecting only one inventory template at a time

The Inventory component can be mounted on characters, creations, and dynamic objects

# II. Editing Inventory Components

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/9efcee44-b91f-427d-9278-96e01c0668ac.png)

(1) In the Entity or Prefab editing interface, open the Component Editing Tab

(2) Click "Add Components" below, then click "Inventory" to add it

(3) Click "Advanced Editing" to expand the editing tab

## 2. Basic Concepts

By adding this component, you can configure the character's inventory component and define default items in the inventory

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/7320ffe4-7679-4e06-a61c-4f40c378c6e7.png)

_Inventory Template_: Reference an inventory template

_Starting Items_ _:_ The default item configuration in the inventory. When gameplay starts, the character carries these contents by default

# III. Inventory Runtime Instance

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/474853db-c75f-4a2c-a3f8-9a3c8099b4c9.png)

# IV. Inventory Data for Node Graph Operations

## 1. Inventory Component-Related Execution Nodes



Set Inventory Drop Items/Currency Amount

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/0e79e128-211c-44a6-b80a-4866736e3640.png)



Set Inventory Item Drop Contents

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/5b7d8d88-0ffa-4de1-9663-d32dbfcbec88.png)



I ncrease Inventory Item Quantity

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/33c70b71-ba8a-46ce-96f7-7a5a2f5522cb.png)



Increase Inventory Currency Quantity

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/282f1820-c126-4a81-9d63-fd6135a17dd7.png)



Increase Maximum Inventory Capacity

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/194db472-e374-4c98-9ad8-7fb30d863ff4.png)

## 2. Inventory Component-Related Event Nodes



When Item Is Lost From Inventory

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/0f94859e-96f5-4127-b3d4-2f5c72b812ce.png)



When the Quantity of Inventory Item Changes

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/c659af43-4af3-4171-bf6e-2280522f59ee.png)



When Item Is Added to Inventory

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/89cfe9da-4d94-4c87-8aea-22ebd55ccc5e.png)



When the Quantity of Inventory Currency Changes

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/4e12a384-941e-4010-ab22-9bc7091d7595.png)



When items in the inventory are used

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/c35a7b07-af44-4764-8de3-7cde8c6f2e17.png)

## 3. Inventory Component-Related Query Nodes



Get Inventory Item Quantity

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/7944e135-e108-4231-ba84-80c9371739b0.png)



Get Inventory Capacity

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/fc99d9c7-9036-422c-a827-2f8abb1ed97f.png)



Get All Inventory Basic Items

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/c507b734-39b4-4b63-a500-bbdd787409f4.png)



Get All Inventory Equipment

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/2b99a4c4-9a1d-4489-a5be-bf847cf7ea85.png)



Get All Inventory Currency

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/a7d43889-ac73-4a61-b8fe-46f5757749ba.png)



Get Inventory Currency Quantity

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhir93rudpv2/35c321d3-e47b-446f-a912-d0f60e58ec81.png)

[Text Bubble](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwtz297kp6a)[Loots](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh63ox06afy8)
