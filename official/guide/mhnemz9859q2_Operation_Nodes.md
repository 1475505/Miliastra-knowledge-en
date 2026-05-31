---
id: mhnemz9859q2
title: Operation Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhte5piu3it0
language: en
scope: guide
crawledAt: 2026-05-31T16:30:03.945Z
---

# Operation Nodes

# I. General

## **1. Enumeration Match**

![Image 2](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/9d3218d5-c3b0-4c23-8cdf-07636c2c9bb2.png)

**Node Functions**

After confirming the Enumeration type, determines whether the two input values are equal

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Enumeration 1 Generic
Input Parameter Enumeration 2 Generic
Output Parameter Result Boolean Output True if equal, False if not equal

## **2. Equal**

![Image 3](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/acb4cf3f-7903-48fd-864e-f78f8aada686.png)

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

![Image 4](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/999f5d2a-d5e1-4250-9f36-b0d8c8111e03.png)

**Node Functions**

Converts input parameter types to another type for output. For specific rules, see [Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhk23ora1wom) - [Conversion Rules Between Basic Data Types]

In the client node, when converting a floating-point number to an integer, the number will be truncated.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Conversion Result Generic

# II. Math

## **1. Split 3D Vector**

![Image 5](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/a9ca3dc1-b23a-44fe-b663-f42a64e7b54d.png)

**Node Functions**

Outputs the x, y, and z components of a 3D Vector as three Floating Point Numbers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter X-Component Floating Point Numbers
Output Parameter Y-Component Floating Point Numbers
Output Parameter Z-Component Floating Point Numbers

## **2. Orientation to Rotation**

![Image 6](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/2774113f-7a99-49ce-8386-66cc5df1394e.png)

**Node Functions**

Converts a Direction Vector to Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Orientation 3D Vector
Output Parameter Rotate 3D Vector

## **3. Multiplication**

![Image 7](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/62c84552-0384-4f1e-97e7-1267d497b7ea.png)

**Node Functions**

Performs multiplication, supporting Floating Point and Integer multiplication

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **4. Division**

![Image 8](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/96f06b87-1a5f-4d91-a327-4299bc739531.png)

**Node Functions**

Performs division, supporting Floating Point division and Integer division. Integer division returns the quotient result

The divisor should not be 0, otherwise it may return an illegal value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **5. Arccosine Function**

![Image 9](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/6034a2c9-5990-495d-9d32-bea4beff68b4.png)

**Node Functions**

Calculates the arccosine of the input and returns the value in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **6. Arctangent Function**

![Image 10](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/1057bdeb-f76b-425b-880b-c1c16eecd75f.png)

**Node Functions**

Calculates the arctangent of the input and returns the value in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **7. Arcsine Function**

![Image 11](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/1acbf654-1bc7-4cea-a463-9726e6efb358.png)

**Node Functions**

Calculates the arcsine of the input and returns the value in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **8. Direction Vector to Rotation**

![Image 12](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/3742171b-dcd0-4643-9541-8c3a60e0cfbe.png)

**Node Functions**

Converts the Forward Vector and Upward Vector to Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Forward Vector 3D Vector Represents the desired Orientation of the Unit
Input Parameter Upward Vector 3D Vector Defines the Unit's Up direction (used to determine the rotation angle). Default is the positive Y-axis of the World Coordinate System
Output Parameter Rotate 3D Vector

## **9. Radians to Degrees**

![Image 13](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/b034235b-1fb0-41b1-8b46-d0e3fd14e33c.png)

**Node Functions**

Converts Radian to degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Angle Floating Point Numbers

## **10. Get Random Number**

![Image 14](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/e91b5dd8-2c62-43f5-b201-718437b163bd.png)

**Node Functions**

Returns a random number in [Lower Limit, Upper Limit] (inclusive)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Lower Limit Generic
Input Parameter Upper Limit Generic
Output Parameter Random Number Generic

## **11. Addition**

![Image 15](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/b8f63000-b219-4ea6-8d8b-d3057c2c4ce2.png)

**Node Functions**

Adds two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **12. Subtraction**

![Image 16](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/fe849184-f82f-490f-acd8-083e14620481.png)

**Node Functions**

Subtracts two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **13. Degrees to Radians**

![Image 17](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/f6f6f2d9-cb49-49a6-925e-56eff655edd5.png)

**Node Functions**

Converts degrees to Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Angle Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **14. Absolute Value Operation**

![Image 18](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/aefc088b-11a1-446f-a92a-253c4d462081.png)

**Node Functions**

Returns the absolute value of the input

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Result Generic

## **15. Logical NOT Operation**

![Image 19](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/69037375-f7b9-42cd-9ca6-eab526fa4d93.png)

**Node Functions**

Performs a logical NOT operation on the input Boolean value and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition Boolean
Output Parameter Result Boolean

## **16. Logical OR Operation**

![Image 20](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/0bef7069-dc65-4c3d-97e7-0a49ad44e6b2.png)

**Node Functions**

Performs a logical OR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **17. Logical XOR Operation**

![Image 21](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/3d05fe01-0a87-41a1-ba02-b59ed76f54ec.png)

**Node Functions**

Performs a logical XOR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **18. Logical AND Operation**

![Image 22](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/fb51b2f1-b215-4c94-a5f7-30f534967235.png)

**Node Functions**

Performs a logical AND operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **19. 3D Vector Normalization**

![Image 23](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/ed43eba2-a5a5-48d2-9d22-82db458cdedb.png)

**Node Functions**

Normalizes the length of a 3D Vector and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **20. 3D Vector Addition**

![Image 24](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/73dfad44-75b0-4f73-ac1c-6c15529a0866.png)

**Node Functions**

Calculates the sum of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **21. 3D Vector Angle**

![Image 25](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/5825281a-29b6-4c3c-a29a-5a5e50ebe8c9.png)

**Node Functions**

Calculates the angle between two 3D Vectors and outputs the value in degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Angle (°)Floating Point Numbers

## **22. 3D Vector Subtraction**

![Image 26](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/96b8da55-4173-4e4c-b3a3-2047fac49c3e.png)

**Node Functions**

Calculates the difference of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **23. 3D Vector Modulo Operation**

![Image 27](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/bb8de034-e5a3-4153-958c-73b8f6cfdf0b.png)

**Node Functions**

Calculates the magnitude of the input 3D Vector

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result Floating Point Numbers

## **24. 3D Vector Dot Product**

![Image 28](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/1e44d087-fe13-4b2e-a5a8-0a55406b5273.png)

**Node Functions**

Calculates the dot product of two input 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result Floating Point Numbers

## **25. 3D Vector Zoom**

![Image 29](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/519432cb-cd1d-45d3-8c74-dce4541ead8a.png)

**Node Functions**

Scales the input 3D Vector (scalar multiplication) and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Zoom Multiplier Floating Point Numbers
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **26. 3D Vector Cross Product**

![Image 30](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/2067f7e9-e599-4a79-97f5-3ba6d90c6009.png)

**Node Functions**

Calculates the cross product of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **27. 3D Vector Rotation**

![Image 31](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/178967b2-2022-43e7-b4fe-a3bdac1eb5a6.png)

**Node Functions**

Rotates the input 3D Vector by the Euler Angles specified by the rotation and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Rotated 3D Vector 3D Vector
Input Parameter Rotate 3D Vector
Output Parameter Result 3D Vector

## **28. Greater Than**

![Image 32](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/f671c4ea-7827-4757-93f0-d31e8258431c.png)

**Node Functions**

Returns whether the left value is greater than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **29. Greater Than or Equal To**

![Image 33](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/fcca029b-6410-4292-abbe-c140de92584f.png)

**Node Functions**

Returns whether the left value is greater than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **30. Less Than**

![Image 34](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/b90d517d-e77d-4af7-8381-890292981d1e.png)

**Node Functions**

Returns whether the left value is less than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **31. Less Than or Equal To**

![Image 35](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/668b68cf-02a8-4a0b-a351-d8e2860841d8.png)

**Node Functions**

Returns whether the left value is less than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **32. Cosine Function**

![Image 36](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/2c15059a-180a-467a-bccf-d264d7b57d3c.png)

**Node Functions**

Calculates the cosine of the input in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **33. Tangent Function**

![Image 37](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/b332c186-fb36-416d-bf33-f2f8091f5c66.png)

**Node Functions**

Calculates the tangent of the input in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **34. Sine Function**

![Image 38](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/de767b03-ba17-4100-a959-59fd490f92c8.png)

**Node Functions**

Calculates the sine of the input in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **35. Create 3D Vector**

![Image 39](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/2d536c0c-4a7e-481c-9a2c-10c6cc941eff.png)

**Node Functions**

Creates a 3D Vector from x, y, and z components

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter X-Component Floating Point Numbers
Input Parameter Y-Component Floating Point Numbers
Input Parameter Z-Component Floating Point Numbers
Output Parameter 3D Vector 3D Vector

# III. Lists

## **1. Assembly List**

![Image 40](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/5c03093d-6461-4e55-b957-6a0d3ffbe247.png)

**Node Functions**

Assembles multiple Input Parameters of the same type (up to 100) into a single List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 0–99 Generic Assembles up to 100 parameters into a list
Output Parameter List Generic List The assembled list

# IV. Structure

## **1. Split Structure**

![Image 41](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/7f3679e4-2372-4deb-bf59-72e4a8f2a30d.png)

**Node Functions**

Get all parameters of the specified structure.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **2. Assemble Structure**

![Image 42](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/e1bcec60-bc41-4cc2-b678-54ad8cd1af66.png)

**Node Functions**

Combine multiple parameters into a value of the structure type.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

# V. Dictionary

## **1. Create Dictionary**

![Image 43](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/3910ae97-05a2-498d-b9c7-933e186d73c2.png)

**Node Functions**

Create key-value pairs according to the order of the input keys and values list.

This node will create a dictionary based on the shorter of the two lists, and any excess elements will be truncated.

If there are duplicate values in the keys list, the creation will fail, and an empty dictionary will be returned.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key List Generic
Input Parameter Value List Generic
Output Parameter Dictionary Generic

## **2. Assembly Dictionary**

![Image 44](https://act-webstatic-pre.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhnemz9859q2/37ab3d4a-7ca4-429f-bf33-6c92befaedac.png)

**Node Functions**

Combine up to 50 key-value pairs into a dictionary.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key 0–49 Generic
Input Parameter Key 0–49 Generic
Output Parameter Dictionary Generic Dictionary

[Query Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh2crq9jzueq)[Other Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhbgxo0eavlk)
