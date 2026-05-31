---
id: mh0u129el2nm
title: Shop Component
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mho6gviqhsqs
language: en
scope: guide
crawledAt: 2026-05-31T16:34:27.723Z
---

# Shop Component

# 1. Shop Component Functions

[Shop](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhi9s7isvp50) template configurations are referenced by shop components and instantiated at runtime

The shop component supports configuring multiple shops simultaneously

# II. Editing the Shop Component

## 1. Add Components

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/c47320f1-d2ae-45e4-bf3f-50a6d9afb8d8.png)

(1) In the Entity or Prefab editing interface, open the Component Editing Tab

(2) Click "Add Common Components" below, then click "Shop" to add it.

(3) Click "Advanced Editing" to expand the editing tab

## 2. Basic Concepts

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/aa83e284-b2ab-4936-8d97-6353c9927233.png)

_Shop ID_: A shop component can define multiple shops simultaneously, with independent configuration data between shops

_Shop Name_: The name of the shop

_Shop Template_: Reference a globally defined shop template

_*Preview Shop Style_: Press to preview how the shop style actually appears during runtime with the current configuration

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/4b477855-e07d-4250-9004-e0f37e99dc91.png)

_Add Shop_: You can add a new shop

**III. Runtime Instance of the Shop**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/b9516618-f652-4162-a672-aeee90a36ae0.png)

# IV. Node Graph Operations

## 1. Shop-Related Execution Nodes



Remove Item From Inventory Shop Sales List

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/326fccc1-1054-46ce-a0cc-b70825ea3959.png)



Remove Item From Purchase List

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/4ec1e7f8-6bb6-4aca-bfc1-857a05369d4f.png)



Remove Item From Custom Shop Sales List

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/738eb4e0-9735-4839-8846-2f9c3cdb6793.png)



Open Shop

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/b9336224-4b5c-4778-b531-5713a5a139fd.png)



Close Shop

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/09fd7aab-bd6e-4625-b0dc-f42a3a5b741f.png)



Add New Item to Inventory Shop Sales List

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/2474e6a9-59b1-42e9-80c9-7d5861dd2dee.png)



Add Items to the Purchase List

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/5cba15f2-8a35-47b6-9cc6-fb1acf0cc464.png)



Add New Item to Custom Shop Sales List

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/0d1d5dd2-6232-4dbe-811e-3cf6d4cc0559.png)



Modify Inventory Shop Item Sales Info

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/f0e5e2a0-c513-4a06-964f-d5eb2b1c15e7.png)



Modify Item Purchase Info in the Purchase List

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/9f7b7fa2-521a-4ba9-b558-d4570c0bd946.png)



Modify Custom Shop Item Sales Info

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/37d7f697-a67a-4d70-9c9d-9ffbe381be06.png)

## 2. Shop Related Event Nodes



When selling inventory items in the Shop

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/3535048b-8b2e-48ce-9a81-b8dd1e2d35ec.png)



When Custom Shop Item Is Sold

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/5b9135a9-f6fc-48c0-82e3-9c99610a2e33.png)



When selling items to the shop

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/b2dc2fe9-9a77-4bf7-b511-46c4104f708d.png)

## 3. Shop Related Query Nodes



Query Inventory Shop Item Sales Info

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/aa5c394f-21d7-4c45-9e74-5553b00322f9.png)



Query Inventory Shop Item Sales List

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/520804f8-b817-421f-9c08-0be588ec7b48.png)



Query Shop Purchase Item List

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/52e0d104-5899-4d22-88cd-0012e70da870.png)



Query Shop Item Purchase Info

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/66d6d200-ee28-4ae1-ad9d-9ce53f8a9024.png)



Query Custom Shop Item Sales List

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/262ad873-26a1-4d16-8313-801bd51660df.png)



Query Custom Shop Item Sales Info

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh0u129el2nm/23be42ec-6747-48f3-849a-4efd2917d3d9.png)

[Loots](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh63ox06afy8)[Scan Tag](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhfc0lr1tcke)
