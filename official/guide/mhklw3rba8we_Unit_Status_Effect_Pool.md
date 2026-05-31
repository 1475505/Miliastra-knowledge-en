---
id: mhklw3rba8we
title: Unit Status Effect Pool
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhou93r2pxv2
language: en
scope: guide
crawledAt: 2026-05-31T16:38:44.348Z
---

# Unit Status Effect Pool

Final Value = (Base Value + Change Value) * (1 + Adjustment Rate) * Multiplier + Correction Value

"Change Value" indicates how much the base value changes

"Adjustment Rate" is the coefficient for additional scaling

"Multiplier" is the coefficient for overall scaling

"Correction Value" is the final increment/decrement applied to the value

**Unit Status****Indication****Effect**
Interrupt Intake Multiplier![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/1d77b964-ec5c-4cff-8634-556a32ee7fdf.png)Influences the multiplier for interrupt value increase when attacked. When this value is 0, it means that taking damage does not increase the interrupt value, indicating that the entity has invincibility (or 'dominant body' status).
Fall Efficiency Change Value![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/60615038-32ea-4ddc-8a22-7fc7f13ba77f.png)Affects acceleration while falling. By default, all characters or creations have 200% fall efficiency; setting this to -200% allows characters or creations to ignore gravity.
Fall DMG Adjustment Rate![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/d9d183d0-bd5b-47f1-b803-6ec0be0b3333.png)Affects fall damage taken by characters. At -100, characters take no fall damage.
Max HP Adjustment Rate![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/5a176a92-f66c-42c9-b023-62ca2836abb3.png)Affects the entity's Max HP
Max HP Correction Value![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/47a2df42-5ff9-4e64-83ee-ee56014c74d2.png)Affects the entity's Max HP
Movement SPD Adjustment Rate![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/a29564dd-8528-4a58-bb58-eb2719a54b59.png)Affects the movement speed of characters and creations
Attack SPD Adjustment Rate![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/b0d79660-1236-4cd6-a435-1530a11b9b84.png)Affects character attack speed
Stamina Consumption Adjustment Rate![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/aae6cb9d-c465-4ac1-baa3-f423acf431c6.png)Adjusts Stamina consumption while running, swimming, and similar actions. A value of -100% removes Stamina cost for these actions
Stamina Recovery Adjustment Rate![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/83d087bc-8b31-44cd-a416-da4e776dc449.png)Adjusts Stamina recovery efficiency after Stamina is depleted. A value of -100% disables Stamina recovery
DEF Adjustment Rate![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/1464ea8e-bf42-4a8c-8a3d-1c14fccb4d38.png)Affects the entity's DEF
DEF Correction Value![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/ae8f391c-10c4-4af4-a951-ff5dd1bb0b73.png)Affects the entity's DEF
ATK Adjustment Rate![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/7a0611ce-c232-47f9-a809-ddbc5be60807.png)Affects the entity's ATK
ATK Correction Value![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/9be58532-fbb2-4c9d-a56f-1c9d21055be9.png)Affects the entity's ATK
CRIT Hit Trigger Change Value![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/8969118e-9906-4264-a53b-d414894c1bd1.png)Affects the entity's CRIT Rate
CRIT Hit RES Trigger Change Value![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/f841d481-3e66-4f33-b076-2ec04801043f.png)Affects the attacker's CRIT Rate when this entity is hit
CRIT DMG Change Value![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/3dc0d8b5-f6d5-4f3e-8f5f-7a4646f8ace1.png)Affects the entity's CRIT DMG
Attack DMG Boost Adjustment Rate![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/ba93c9f1-ecc8-44cf-9dbe-2ef6a02bca66.png)Affects the entity's Attack DMG Bonus
Damage Reduction Adjustment Rate![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/14da4441-7760-4f70-823b-ccf6b7a2d635.png)Affects the entity's incoming DMG reduction
Recovery Effect Adjustment Rate![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/eb9d3246-bfa7-4772-ae41-5426ad52ed5d.png)Affects the healing effect applied by the entity
Healing Effect Adjustment Rate![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/6d691ecb-6fac-41a0-b95c-3b77cbb62eec.png)Affects healing effects received by the entity
Elemental DMG Bonus Adjustment Rate![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/0333deb7-73fe-4489-87db-d74e88030cc9.png)Affects elemental damage dealt by the entity, including Physical and the seven elements
Elemental RES Adjustment Rate![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/d23b821d-3b99-46f1-9ef2-78beb768fed6.png)Affects elemental damage received by the entity, including Physical and the seven elements
Elemental Mastery Correction Value![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/8fcf4b7b-af1e-4352-8337-65da0fee5313.png)Affects the entity's Elemental Mastery
Transformative Reaction DMG Bonus Adjustment Rate![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/31ea5d8e-bcae-4e36-b565-2ab3d7af9688.png)Affects the damage of transformative reactions dealt by the entity

Includes the following reactions: Swirl, Superconduct, Electro-Charged, Firestarter, Frozen, Overloaded, Shatter, Bloom, Burgeon, Hyperbloom
Amplifying Reaction DMG Bonus Adjustment Rate![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/065eab65-ab08-4309-8665-6da1b355fb00.png)Affects the damage of amplifying reactions dealt by the entity

Includes the following reactions: Vaporize, Melt
Catalyze Reaction DMG Bonus Adjustment Rate![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/436b0063-6cc6-4789-b1ba-9a9a64cd4e9c.png)Affects the damage of Catalyze reactions dealt by the entity

Includes the following reactions: Aggravate, Spread
DEF Ignore Adjustment Rate![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/caab88db-ec3f-4521-a246-e4fa5b96fabf.png)Affects the percentage of DEF ignored when entities deal DMG
DEF Ignore Correction Value![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/85b53a31-c520-4b59-8184-aa5da4b5ffb1.png)The amount of defense ignored when an entity deals damage
Elemental DMG Immunity![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/4ee7d6bd-80e6-4d0d-a752-e46bb5491caf.png)When set to [Yes], grants immunity to damage of a specified element, including Physical and the seven elements
Skill Cooldown Efficiency Change Value![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/68ea90ba-f499-444b-8ae6-c2a8a3cd4851.png)Affects the cooldown reduction efficiency of a character's skills; the higher this value, the faster skills cool down
Mount Special Effects![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/9bcbfee7-37f4-484e-bde2-00ba95adfd14.png)Mount a looping effect on the entity; configuration is basically the same as for special effects
Elemental Effects![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/029505b7-67fe-4601-9ebd-89bf5212acfd.png)Applies a specific element to the entity. The element does not decay naturally, but is consumed by Elemental Reactions
Special Status: Invincible![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/40052706-42fc-4a09-9472-d347f60371d4.png)Puts the entity into the Invincible state

While Invincible, the entity cannot take damage; being hit does not trigger the [When Attacked] event
Special Status: Cannot be Locked![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/0681666e-a934-42be-accb-5881ac88fbd1.png)Puts the entity into a Lock-On Disabled state

While active, auto-locking attacks and skills cannot lock onto this entity
Special Status: HP Locked![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/820f0c0e-f86f-467c-b4dc-b915ac3d51cc.png)Puts the entity into an HP Locked state

While active, HP cannot decrease; being hit still triggers the [When Attacked] event
Special Status: Struggle![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/9bf174de-23ec-4d78-bab7-93908a92b635.png)Puts the entity into a Struggle state

While active, the entity cannot act. Players can escape by rapidly tapping the Struggle key

Note: **This state is not available with some creations**
Special Status: Cannot recover HP![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/b78428c0-7d43-46f1-8db3-f6196c90fc0d.png)Puts the entity into a Cannot recover HP state

While active, the entity cannot restore HP
Special Status: HP Cannot Drop Below Specified Value![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/4e00d55a-f720-4351-89ed-14e368346415.png)Puts the entity into a Minimum HP Threshold state

While active, the entity's HP cannot fall below the configured threshold percentage
Invisible to Other Players![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/8a4f9aff-a1fe-4d6f-accc-624003b0d6b2.png)In this state, other players cannot see the character under this status effect
Super Jump![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/257ec507-e541-4c25-8af4-0206db5d0a35.png)In this state, the character gains enhanced jumping ability

The xz multiplier controls horizontal jump distance; values greater than 1 increase horizontal jump distance

The y multiplier controls upward jump height; values greater than 1 increase vertical jump height
Prevent Elemental Attack Application![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/2b3ca53c-ee1d-4012-928f-292b9550413f.png)In this state, elemental attacks dealt by creations cannot apply elements
Knockback Efficiency Adjustment Rate![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/b235d2e2-a214-4be8-bab2-cff44a64f8e2.png)When attacked, this value affects the magnitude of the knockback force, influencing the knockback distance or height.
Immune to Taunt![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/66497967-9bd7-476b-9c28-509670a8ee59.png)Immune to taunts in Classic and Custom Aggro modes
Aggro Multiplier Adjustment Rate![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/26625322-266b-4d91-b950-938e5a405a19.png)Adjustment rate applied when gaining Aggro Value
Aggro Multiplier Adjustment Rate![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/cc9b2386-912f-4688-8496-2505e864231f.png)Modifier applied when gaining Aggro Value
Disable Gliding![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/f462fae4-0ff5-477f-ba18-d07802ef1d78.png)Prevents the character from gliding
Disable Climbing![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/960d6e99-2945-465e-af63-bc01bf941f25.png)Prevents the character from climbing
Hide Nameplate![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/b3c8b2a6-6bf9-4b4d-8b8a-7c1c16b20bad.png)Hides this unit's nameplate
Disable Struggle Button![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/dfa3714d-733d-440d-b431-973fdf49dcba.png)When the character enters the Struggle state, they cannot escape early using the Struggle button
Hide Entity's Mini-Map Markers![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/a09458f0-5ddb-4437-b906-06413bc458dd.png)Hides the entity's marker on the mini-map
Sprint Disabled![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/8b1a6b88-a7f9-4a55-aa1e-f9ce1c4fdd41.png)Prevents the character from sprinting
Jump Disabled![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/a5a81a01-127d-4587-ba0e-80c40e1332b7.png)Prevents the character from jumping
Creation Silenced![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/df901757-9f4a-4cda-87ad-f32c048c789b.png)Prevents creations from casting skills

Custom skills for complex creations are not currently available; this feature will be supported in the next version.
Immobilize![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/962fb6b3-e686-4608-9834-0a01583534b3.png)Restricts normal movement of creations; does not affect movement during skills or movement effects caused by skills

During the immobilization period, entities in the combat disengagement phase may be affected, potentially causing disengagement failure or other unstable state blockages. Creators (Craftspeople) are advised to manage movement restrictions by avoiding or monitoring disengagement states.
Shield![Image 56](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/c1b3086d-0306-4fd9-ac6a-12ac89b2d825.png)Grants a Shield; parameters are referenced from the Shield configuration
Shield Power Adjustment Rate![Image 57](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/7d728484-c033-4844-a1d9-b84fc9bc4129.png)When gaining a Shield, modifies the shield amount by the adjustment rate
Fix Mini-Map Orientation![Image 58](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/6734149a-41c6-4eca-99ee-76659967ef62.png)You can choose to set the character's facing direction as the top of the mini-map, or specify a certain angle of rotation to be the top of the mini-map
Enable Transparency Effect![Image 59](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/1e387d85-3fe5-40f0-9593-7f36f83dc71b.png)

![Image 60](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/fe3899a5-050c-4c26-a87f-32d0901d27d2.png)When the boolean local filter returns TRUE, and the mounted entity is obscured, the entity will be displayed with the configured color as if it were penetrating the obstruction
Enable Outline Effect![Image 61](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/5c621826-18e5-4601-b22f-e2dd5df594ca.png)

![Image 62](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/b9a6818a-cf49-4d67-aa4b-554d4434acbc.png)The edges of the entity will be outlined with the configured color

A Boolean filter can be configured

When the local Boolean filter returns TRUE, the outline will be applied on the entity
Object Invisible![Image 63](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/dc169303-7734-4553-a4f2-cf270e40e49f.png)When the Boolean local filter returns TRUE, the entity is not visible
Creation Invisible![Image 64](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/43fd081f-5520-4b57-8d11-fc44e30f4613.png)When the Boolean local filter returns TRUE, the creation is not visible
Always Animate![Image 65](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/d4e3a71b-d370-48b6-b3ef-429a5622733a.png)Animations will be fully calculated and played regardless of whether they are visible or within the camera view. (By default, animations may stop playing for performance optimization reasons when they are not visible or not in the camera view.)
Monitor Movement Rate![Image 66](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/ecadcb2c-c74f-4cbf-b0bb-d39c692c3df9.png)After adding, the node graph event [When Character Movement SPD Meets Condition] will be triggered when the condition is met. Additionally, the character with the added unit status can have their movement speed and direction obtained through the [Query Character's Current Movement SPD] node.
Keep hurtbox active during sprint![Image 67](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/2b0cde59-88f8-466b-928e-1e78341f51d6.png)During sprinting, the hitbox is not disabled. (By default, a character's hitbox is briefly disabled while sprinting)
Character Hidden![Image 68](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/ce94d547-e6e6-4bbe-9968-0a9fe0238963.png)When the Boolean local filter returns true, the character is hidden, and audio and effects are muted according to the parameter settings
Overwrite Scan Tag Data![Image 69](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/eea29761-7398-47a5-a810-5a73d224941b.png)

![Image 70](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/668f34b6-2c05-4e4f-b224-be6231a5f7b5.png)After adding, the character's scan tag component data will take effect according to the set parameters
Monitor Elemental Reaction![Image 71](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/e1c76a99-77c3-4d35-9286-baf2e7987be1.png)Set the event's send target and the reaction type to monitor for. When the entity undergoes the specified elemental reaction, it can trigger the node graph event [When Elemental Reaction Event Occurs] on the target entity
Character Hidden![Image 72](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhklw3rba8we/4f265013-7f43-4aad-91cb-cf75793b6236.png)Semi-transparent and fully transparent are both states of concealment.

The evaluation result of a Boolean local filter can be understood as: [Whether the character mounted on the role is visible locally].

When both “Mute Effects” and “Mute Audio” are fully checked:

When viewed locally by a character mounted with this state:



 If the filter evaluates to true, the mounted character becomes semi-transparent with a blur effect; Mute Effects and Mute Audio do not take effect.



If the filter evaluates to false, the mounted character is fully hidden.



Effect masking takes effect; effects applied via effect components or effect unit states will not activate.



Sound masking takes effect; walking/running/action sounds will not play, and sound effects will not activate.

Whether to Mute Effects as well: The priority level of this unit’s state toggle is higher than the priority level of the VFX tools in the VFX Tool system

[Creation Skill Description](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhzys1ic5eok)[Node Graph Advanced Features](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk7nlregm9q)
