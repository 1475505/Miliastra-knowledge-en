---
id: mh50r6rf4hra
title: Operation Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhjyvxrqz2fy
language: en
scope: guide
crawledAt: 2026-05-31T16:29:49.404Z
---

# Operation Nodes

# I. General

## **1. Enumeration Match**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/b24d1b9d-e587-475a-b678-34fe78925944.png)

**Node Functions**

After confirming the Enumeration type, determines whether the two input values are equal

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Enumeration 1 Generic
Input Parameter Enumeration 2 Generic
Output Parameter Result Boolean Output True if equal, False if not equal

## **2. Equal**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/da20a8a4-043e-4220-84db-86b7b15636f3.png)

**Node Functions**

Determines whether two inputs are equal

Some Parameter Types have special comparison rules:

Floating Point Numbers: Floating Point Numbers are compared using approximate equality. When the difference between two Floating Point Numbers is less than an extremely small value, the two numbers are considered equal. For example: 2.0000001 and 2.0 are considered equal

3D Vector: The x, y, and z components of a 3D Vector are compared using Floating Point approximate equality

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **3. Data Type Conversion**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/b952f6d7-4f3f-4b96-a76b-4ff3ac3800f4.png)

**Node Functions**

Converts input parameter types to another type for output. For specific rules, see [Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhk23ora1wom)-[Conversion Rules Between Basic Data Types]

In the Local Node, converting Floating Point Numbers to an Integer truncates the decimal part

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Conversion Result Generic

# II. Math

## **1. Split 3D Vector**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/b6d92e5b-fbd3-42c7-82b6-a6828c542d44.png)

**Node Functions**

Outputs the x, y, and z components of a 3D Vector as three Floating Point Numbers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter X-Component Floating Point Numbers
Output Parameter Y-Component Floating Point Numbers
Output Parameter Z-Component Floating Point Numbers

## **2. Orientation to Rotation**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/4c6e94fe-b2a3-4e11-ab53-a576751a420a.png)

**Node Functions**

Converts a Direction Vector to Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Orientation 3D Vector
Output Parameter Rotation 3D Vector

## **3. Multiplication**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/06e56d57-26ed-4b7b-8200-1c7957325d41.png)

**Node Functions**

Performs multiplication, supporting Floating Point and Integer multiplication

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **4. Division**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/1da399e7-4ce4-4783-8291-e21ac532b8a4.png)

**Node Functions**

Performs division, supporting Floating Point division and Integer division. Integer division returns the quotient result

The divisor should not be 0, otherwise it may return an illegal value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **5. Create 3D Vector**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/8f061009-212a-4eb9-a745-598d687b4e39.png)

**Node Functions**

Creates a 3D Vector from x, y, and z components

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter X-Component Floating Point Numbers
Input Parameter Y-Component Floating Point Numbers
Input Parameter Z-Component Floating Point Numbers
Output Parameter 3D Vector 3D Vector

## **6.. Arccosine Function**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/f9efee27-88f8-42f9-a42e-865d613a112b.png)

**Node Functions**

Calculates the arccosine of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **7.. Arctangent Function**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/3203bdd7-912c-43fa-a8f9-d76086193ffb.png)

**Node Functions**

Calculates the arctangent of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **8.. Arcsine Function**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/a532526f-15fc-4142-afd2-fb1b739640b8.png)

**Node Functions**

Calculates the arcsine of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **9. Direction Vector to Rotation**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/aacebb70-b3a9-4182-b715-aaa1d2c53ef6.png)

**Node Functions**

Converts the Forward Vector and Upward Vector to Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Forward Vector 3D Vector Represents the desired Orientation of the Unit
Input Parameter Upward Vector 3D Vector Defines the Unit's Up direction (used to determine the rotation angle). Default is the positive Y-axis of the World Coordinate System
Output Parameter Rotate 3D Vector

## **10. Radians to Degrees**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/2b259ab3-a9e0-4340-aca3-73354f8bb319.png)

**Node Functions**

Converts radians to degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Angle Floating Point Numbers

## **11. Get Random Number**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/dce1f20d-71bf-4cc9-b84d-153d5b8a800f.png)

**Node Functions**

Returns a random number in [Lower Limit, Upper Limit] (inclusive)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Lower Limit Generic
Input Parameter Upper Limit Generic
Output Parameter Random Number Generic

## **12. Addition**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/daef845e-c7a0-479a-b6ac-ac286fc0dc5c.png)

**Node Functions**

Adds two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **13. Subtraction**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/bc242cf5-b167-4b84-a1e1-9a12fb4b6843.png)

**Node Functions**

Subtracts two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **14. Degrees to Radians**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/2282b900-cb77-4b42-a553-ec96225ca9e7.png)

**Node Functions**

Converts degrees to radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Angle Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **15. Absolute Value Operation**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/a03f914e-5b16-4e38-9835-3d9369b7d547.png)

**Node Functions**

Returns the absolute value of the input

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Result Generic

## **16. Logical NOT Operation**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/fccdc3a9-9f6d-4706-abd1-a6f063bd440d.png)

**Node Functions**

Performs a logical NOT operation on the input Boolean value and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition Boolean
Output Parameter Result Boolean

## **17. Logical OR Operation**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/4d1140ce-bc1c-4108-a93a-56a87ac86691.png)

**Node Functions**

Performs a logical OR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **18. Logical XOR Operation**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/8e454df2-5b3b-4c98-8655-2b2eb00754af.png)

**Node Functions**

Performs a logical XOR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **19. Logical AND Operation**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/287910de-c87a-487a-a0c6-29fa8fdf111b.png)

**Node Functions**

Performs a logical AND operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **20. Assembly List**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/a99f134f-390a-4218-bcbb-c32155d018a4.png)

**Node Functions**

Assembles multiple Input Parameters of the same type (up to 100) into a single List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 0–99 Generic Assemble up to 100 parameters into a list
Output Parameter List Generic List The assembled list

## **21. 3D Vector Normalization**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/fa95a975-f02f-4778-94b4-c89d2f950951.png)

**Node Functions**

Normalizes the length of a 3D Vector and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **22. 3D Vector Addition**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/2c016296-83dc-4266-99aa-f1477965023b.png)

**Node Functions**

Calculates the sum of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **23. 3D Vector Angle**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/36ef9106-0fee-44fc-a96a-0968ed915fe1.png)

**Node Functions**

Calculates the angle between two 3D Vectors and outputs the value in degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Angle (°)Floating Point Numbers

## **24. 3D Vector Subtraction**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/6a3cdb50-7fae-428a-8d17-cf38b2fcb358.png)

**Node Functions**

Calculates the difference of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **25. 3D Vector Modulo Operation**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/2e5fe023-0cac-417e-a232-2c0a42cde649.png)

**Node Functions**

Calculates the magnitude of the input 3D Vector

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result Floating Point Numbers

## **26. 3D Vector Dot Product**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/11b1a3e1-67a2-4522-a4fa-6b5855891479.png)

**Node Functions**

Calculates the dot product of two input 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result Floating Point Numbers

## **27. 3D Vector Zoom**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/285bfd66-53c8-4a95-a677-e09ec8e42104.png)

**Node Functions**

Scales the input 3D Vector (scalar multiplication) and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Zoom Multiplier Floating Point Numbers
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **28. 3D Vector Cross Product**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/af219d91-d5cb-4586-a5be-7e113bc7bd47.png)

**Node Functions**

Calculates the cross product of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **29. 3D Vector Rotation**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/50bfb401-d491-416b-bbd4-4545f6c05762.png)

**Node Functions**

Rotates the input 3D Vector by the Euler Angles specified by the rotation and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Rotated 3D Vector 3D Vector
Input Parameter Rotate 3D Vector
Output Parameter Result 3D Vector

## **30. Greater Than**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/a6772d89-afb3-4a6c-8011-664f1c04c8a7.png)

**Node Functions**

Returns whether the left value is greater than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **31. Greater Than or Equal To**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/eb51e3a3-1d32-461a-8ad1-b5c926b079c3.png)

**Node Functions**

Returns whether the left value is greater than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **32. Less Than**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/e5b1f536-cfe0-47a2-bfd0-a6f68ab6c359.png)

**Node Functions**

Returns whether the left value is less than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **33. Less Than or Equal To**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/af61b5ec-086d-4cfb-a555-90aa799ee69f.png)

**Node Functions**

Returns whether the left value is less than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **34. Cosine Function**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/77aa567e-aa7e-4f3d-bcd0-2e2e3e1ff896.png)

**Node Functions**

Calculates the cosine of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **35. Tangent Function**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/411942d2-1231-4546-bbac-d32258f981a6.png)

**Node Functions**

Calculates the tangent of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **36. Sine Function**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/de5fa7fd-0b08-421c-ae01-56d039fc7773.png)

**Node Functions**

Calculates the sine of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

# III. Dictionary

## **1. Create Dictionary**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/666160a5-938c-4989-8e6b-453d72c25c7a.png)

**Node Functions**

Creates Key-Value Pairs sequentially from the input key and value lists.

This node builds the Dictionary using the shorter of the key and value lists; extra items are truncated

If duplicate keys are found in the key list, creation fails and returns an empty Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key List Generic
Input Parameter Value List Generic
Output Parameter Dictionary Generic

## **2. Assembly Dictionary**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/59a0fdce-b372-47e2-a28d-965f2b677583.png)

**Node Functions**

Combines up to 50 Key-Value Pairs into one Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key 0–49 Generic
Input Parameter Value 0–49 Generic
Output Parameter Dictionary Generic Dictionary

# IV. Structures

## **1. Split Structure**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/52be3b6b-a9d9-4cfe-9e13-675e00fe3722.png)

**Node Functions**

Returns all parameters of the specified Structure

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **2. Assemble Structures**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mh50r6rf4hra/e04be18b-4e5a-4cfb-b19b-d0a7b8c97b4d.png)

**Node Functions**

Combines multiple parameters into a single Structure-type value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

[Query Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh1w3z96rpne)[Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhb09x012qu8)
