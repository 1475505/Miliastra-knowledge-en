---
id: mhw7p30tmvqo
title: Operation Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhb5tu05hgfc
language: en
scope: guide
crawledAt: 2026-05-31T16:29:57.342Z
---

# Operation Nodes

# I. General

## **1. Enumeration Match**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/22ec3237-0e6f-4ca5-90f0-57167c4c6274.png)

**Node Functions**

After confirming the Enumeration type, determines whether the two input values are equal

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Enumeration 1 Generic
Input Parameter Enumeration 2 Generic
Output Parameter Result Boolean Output True if equal, False if not equal

## **2. Equal**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/102fef8c-32a7-4f29-a82c-0f0b94bfc152.png)

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

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/3c1c5997-4b91-459a-835d-d03ae4beada8.png)

**Node Functions**

Converts input parameter types to another type for output. For specific rules, see [Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhk23ora1wom)-[Conversion Rules Between Basic Data Types]

In the Local Node, converting Floating Point Numbers to an Integer truncates the decimal part

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Conversion Result Generic

# II. Math

## **1. Split 3D Vector**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/53b21813-d0a6-42a5-8acd-ab11b1edb80a.png)

**Node Functions**

Outputs the x, y, and z components of a 3D Vector as three Floating Point Numbers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter X-Component Floating Point Numbers
Output Parameter Y-Component Floating Point Numbers
Output Parameter Z-Component Floating Point Numbers

## **2. Orientation to Rotation**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/bdb77d2f-9c02-4d3f-976a-3a21b121b9ac.png)

**Node Functions**

Converts a Direction Vector to Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Orientation 3D Vector
Output Parameter Rotation 3D Vector

## **3. Multiplication**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/52622f95-7251-4a8e-9898-81ad31b78d14.png)

**Node Functions**

Performs multiplication, supporting Floating Point and Integer multiplication

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **4. Division**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/9b6d9017-207c-470c-acfc-4aba6a79e04d.png)

**Node Functions**

Performs division, supporting Floating Point division and Integer division. Integer division returns the quotient result

The divisor should not be 0, otherwise it may return an illegal value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **5. Create 3D Vector**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/08fe8f1a-940f-4a3d-8bdd-6859d196240f.png)

**Node Functions**

Creates a 3D Vector from x, y, and z components

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter X-Component Floating Point Numbers
Input Parameter Y-Component Floating Point Numbers
Input Parameter Z-Component Floating Point Numbers
Output Parameter 3D Vector 3D Vector

## **6.. Arccosine Function**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/0291a184-d820-4271-9bf8-bdbb30e085f7.png)

**Node Functions**

Calculates the arccosine of the input and returns the value in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **7.. Arctangent Function**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/b686ff1d-6e76-4dff-afd7-8ad4231e5398.png)

**Node Functions**

Calculates the arctangent of the input and returns the value in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **8.. Arcsine Function**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/16978ae7-36d9-4a74-83ef-f9b9fe5e9c42.png)

**Node Functions**

Calculates the arcsine of the input and returns the value in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **9. Direction Vector to Rotation**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/50eb9529-38b0-4e62-8f66-a00b3fca4c93.png)

**Node Functions**

Converts the Forward Vector and Upward Vector to Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Forward Vector 3D Vector Represents the desired Orientation of the Unit
Input Parameter Upward Vector 3D Vector Defines the Unit's Up direction (used to determine the rotation angle). Default is the positive Y-axis of the World Coordinate System
Output Parameter Rotate 3D Vector

## **10. Radians to Degrees**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/0dab22a3-fd37-4a39-bb19-cc188b6fb0c9.png)

**Node Functions**

Converts Radian to degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Angle Floating Point Numbers

## **11. Get Random Number**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/7c2bf6a0-8790-45dc-be17-c6684af9bf9e.png)

**Node Functions**

Returns a random number in [Lower Limit, Upper Limit] (inclusive)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Lower Limit Generic
Input Parameter Upper Limit Generic
Output Parameter Random Number Generic

## **12. Addition**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/afb6cd34-45c2-42e0-91bf-475e1478daeb.png)

**Node Functions**

Adds two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **13. Subtraction**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/a7f437ad-ec37-4e14-84a2-c7f8b2907011.png)

**Node Functions**

Subtracts two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **14. Degrees to Radians**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/334aaf1e-5e9d-4bf0-ac31-a572836ead9f.png)

**Node Functions**

Converts degrees to Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Angle Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **15. Absolute Value Operation**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/26ff6401-6b64-4d78-9a6e-1c553cdda8fa.png)

**Node Functions**

Returns the absolute value of the input

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Result Generic

## **16. Logical NOT Operation**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/054e65ef-c44e-4dbb-9fc4-a90bb301c884.png)

**Node Functions**

Performs a logical NOT operation on the input Boolean value and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition Boolean
Output Parameter Result Boolean

## **17. Logical OR Operation**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/02e966c6-3ad2-44d6-b9a3-dc0916bd9ec3.png)

**Node Functions**

Performs a logical OR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **18. Logical XOR Operation**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/2c334201-22c7-469a-93b9-466a7b09ef55.png)

**Node Functions**

Performs a logical XOR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **19. Logical AND Operation**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/7fa938d9-7370-4c69-a602-5cc7c23a0e4b.png)

**Node Functions**

Performs a logical AND operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **20. Assembly List**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/c498b211-5658-4870-ae84-e7c30fe754b5.png)

**Node Functions**

Assembles multiple Input Parameters of the same type (up to 100) into a single List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 0–99 Generic Assemble up to 100 parameters into a list
Output Parameter List Generic List The assembled list

## **21. 3D Vector Normalization**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/b314ff0a-c569-4075-bb1f-b30977f1c9dd.png)

**Node Functions**

Normalizes the length of a 3D Vector and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **22. 3D Vector Addition**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/c65fc4a7-b948-4f31-8702-889697ffdc86.png)

**Node Functions**

Calculates the sum of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **23. 3D Vector Angle**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/656e05a0-340d-4cbc-92f7-50aa36c0f938.png)

**Node Functions**

Calculates the angle between two 3D Vectors and outputs the value in degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Angle Floating Point Numbers

## **24. 3D Vector Subtraction**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/39705c31-901c-4c17-8677-d57312b4bcc6.png)

**Node Functions**

Calculates the difference of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **25. 3D Vector Modulo Operation**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/e082697c-86f0-4e10-99ae-f2aa7fa0edc1.png)

**Node Functions**

Calculates the magnitude of the input 3D Vector

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result Floating Point Numbers

## **26. 3D Vector Dot Product**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/8b47b687-28ac-47d2-a6dd-4589c786ccf2.png)

**Node Functions**

Calculates the dot product of two input 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result Floating Point Numbers

## **27. 3D Vector Zoom**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/4ac056f2-815c-416e-978d-f27745edb33c.png)

**Node Functions**

Scales the input 3D Vector (scalar multiplication) and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Zoom Multiplier Floating Point Numbers
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **28.. 3D Vector Cross Product**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/56c25ccb-0124-4881-8dd7-9e986f111424.png)

**Node Functions**

Calculates the cross product of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **29. 3D Vector Rotation**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/3e767dce-4ad8-46c6-9da9-0dd4a10f0505.png)

**Node Functions**

Rotates the input 3D Vector by the Euler Angles specified by the rotation and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Rotated 3D Vector 3D Vector
Input Parameter Rotate 3D Vector
Output Parameter Result 3D Vector

## **30. Greater Than**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/19c9c4c3-6bd6-43b5-8193-c89bb27a7ade.png)

**Node Functions**

Returns whether the left value is greater than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **31. Greater Than or Equal To**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/86aff1ab-d15e-40ad-9aaa-08e6eb2ab2df.png)

**Node Functions**

Returns whether the left value is greater than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **32. Less Than**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/e1d97d8d-2252-49b6-952f-55b7f3c818de.png)

**Node Functions**

Returns whether the left value is less than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **33. Less Than or Equal To**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/aa6440e9-b65c-4226-bcf9-f36dfc996137.png)

**Node Functions**

Returns whether the left value is less than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **34. Cosine Function**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/297542e0-b7a2-4a56-ae7f-25c291fdf47f.png)

**Node Functions**

Calculates the cosine of the input in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **35. Tangent Function**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/49aae53f-cad1-4c6f-bda4-2936fade918b.png)

**Node Functions**

Calculates the tangent of the input in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **36. Sine Function**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/23051f2a-b564-409f-9f38-983dae5dbaa5.png)

**Node Functions**

Calculates the sine of the input in Radian

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

# III. Dictionary

## **1. Create Dictionary**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/4b999dd3-7c19-4b91-b4ac-2a2379f47acb.png)

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

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/7d449321-4389-4e8d-be52-9a0981576ce3.png)

**Node Functions**

Combines up to 50 Key-Value Pairs into one Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key 0–49 Generic
Input Parameter Value 0–49 Generic
Output Parameter Dictionary Generic Dictionary

# IV. Structures

## **1. Split Structure**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/f2494795-a56f-43db-9854-7fa8daafa57f.png)

**Node Functions**

Returns all parameters of the specified Structure

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **2. Assemble Structure**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhw7p30tmvqo/d43092b2-fd31-4bc6-9cd3-96f94ae9dea2.png)

**Node Functions**

Combines multiple parameters into a single Structure-type value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

[Query Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhk4furvds12)[Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh277t9fl4tm)
