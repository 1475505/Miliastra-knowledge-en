---
id: mhdttai0m3rw
title: Operation Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mh7ys59fhtvu
language: en
scope: guide
crawledAt: 2026-05-31T16:29:42.134Z
---

# Operation Nodes

# I. General

## **1. Enumeration Match**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/ab07051a-739b-416f-b8fa-1e8b48fc9c5a.png)

**Node Functions**

After confirming the Enumeration type, determines whether the two input values are equal

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Enumeration 1 Generic
Input Parameter Enumeration 2 Generic
Output Parameter Result Boolean Output True if equal, False if not equal

## **2. Equal**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/4afc3275-e147-449e-ba80-28fd91f3d311.png)

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

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/f55686ac-6679-4fa0-95f7-8353c4c2215c.png)

**Node Functions**

Converts input parameter types to another type for output. For specific rules, see [Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhk23ora1wom) - [Conversion Rules Between Basic Data Types]

In the client node, when converting a floating-point number to an integer, the number will be truncated.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Conversion Result Generic

# II. Math

## **1. Split 3D Vector**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/fca080dd-d0f2-4369-9108-1742a5765f42.png)

**Node Functions**

Outputs the x, y, and z components of a 3D Vector as three Floating Point Numbers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter X-Component Floating Point Numbers
Output Parameter Y-Component Floating Point Numbers
Output Parameter Z-Component Floating Point Numbers

## **2. Orientation to Rotation**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/425558d1-b2fb-4e0e-8862-e7374e52daa3.png)

**Node Functions**

Converts a Direction Vector to Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Orientation 3D Vector
Output Parameter Rotate 3D Vector

## **3. Multiplication**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/400723c8-7979-4964-8476-233689dc7926.png)

**Node Functions**

Performs multiplication, supporting Floating Point and Integer multiplication

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **4. Division**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/2ee46ee4-ccc5-473e-b6a9-5c77554e3708.png)

**Node Functions**

Performs division, supporting Floating Point division and Integer division. Integer division returns the quotient result

The divisor should not be 0, otherwise it may return an illegal value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **5. Arccosine Function**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/460db7e5-6cb2-4573-8f1b-012a54e1f7e9.png)

**Node Functions**

Calculates the arccosine of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **6. Arctangent Function**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/793053af-069f-4c35-8ffc-1eae522396f4.png)

**Node Functions**

Calculates the arctangent of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **7. Arcsine Function**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/8cd21220-bd39-480f-9027-675845be0f07.png)

**Node Functions**

Calculates the arcsine of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **8. Direction Vector to Rotation**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/51913b6c-03c0-4e98-beba-a64c194ded6f.png)

**Node Functions**

Converts the Forward Vector and Upward Vector to Euler Angles

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Forward Vector 3D Vector Represents the desired Orientation of the Unit
Input Parameter Upward Vector 3D Vector Defines the Unit's Up direction (used to determine the rotation angle). Default is the positive Y-axis of the World Coordinate System
Output Parameter Rotate 3D Vector

## **9. Radians to Degrees**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/60d2e08a-edf5-49bb-b3ab-50b5bc414d5c.png)

**Node Functions**

Converts radians to degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Angle Floating Point Numbers

## **10. Get Random Number**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/6d3988f3-b4c7-4890-af31-67bd8e6279bd.png)

**Node Functions**

Returns a random number in [Lower Limit, Upper Limit] (inclusive)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Lower Limit Generic
Input Parameter Upper Limit Generic
Output Parameter Random Number Generic

## **11. Addition**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/adbe28ee-54be-4e61-a043-a3f6a84895a5.png)

**Node Functions**

Adds two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **12. Subtraction**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/36abbcc5-1555-4230-ba0f-1afea8a634e6.png)

**Node Functions**

Subtracts two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **13. Degrees to Radians**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/040d11de-771f-4a76-bb54-a20c58df013d.png)

**Node Functions**

Converts degrees to radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Angle Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **14. Absolute Value Operation**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/72c0b0b2-3795-4062-a6ae-9d28b0bc7daf.png)

**Node Functions**

Returns the absolute value of the input

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Result Generic

## **15. Logical NOT Operation**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/265036a8-2ee3-45ee-89fb-d274f2b99ba1.png)

**Node Functions**

Performs a logical NOT operation on the input Boolean value and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition Boolean
Output Parameter Result Boolean

## **16. Logical OR Operation**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/e957293f-498f-4326-8875-1e5dccaeaa1e.png)

**Node Functions**

Performs a logical OR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **17. Logical XOR Operation**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/c4f34a71-4330-459f-8069-a2b0de705090.png)

**Node Functions**

Performs a logical XOR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **18. Logical AND Operation**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/0b854cd3-402c-465a-af7e-484e08c03e86.png)

**Node Functions**

Performs a logical AND operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Condition 1 Boolean
Input Parameter Condition 2 Boolean
Output Parameter Result Boolean

## **19. 3D Vector Normalization**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/58380f19-1531-4b49-b854-f29c0ec0c4c9.png)

**Node Functions**

Normalizes the length of a 3D Vector and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **20. 3D Vector Addition**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/bee35a33-e492-4598-be72-be799b432f61.png)

**Node Functions**

Calculates the sum of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **21. 3D Vector Angle**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/3a84c19c-8187-4733-8c24-c60a3902e7a0.png)

**Node Functions**

Calculates the angle between two 3D Vectors and outputs the value in degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Angle Floating Point Numbers

## **22. 3D Vector Subtraction**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/308f29bf-9174-463b-a5d9-b7f04c25ec4b.png)

**Node Functions**

Calculates the difference of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **23. 3D Vector Modulo Operation**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/ecb6f9ba-f5de-4bf7-9f22-33d3093fdc7f.png)

**Node Functions**

Calculates the magnitude of the input 3D Vector

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result Floating Point Numbers

## **24. 3D Vector Dot Product**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/a44f64b2-6c62-4e57-bc9e-625da5f562fe.png)

**Node Functions**

Calculates the dot product of two input 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result Floating Point Numbers

## **25. 3D Vector Zoom**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/c6daaf77-381c-423e-9e2d-cbff56a0f6e6.png)

**Node Functions**

Scales the input 3D Vector (scalar multiplication) and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Zoom Multiplier Floating Point Numbers
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **26. 3D Vector Cross Product**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/9ffc5660-8389-4c9f-a278-219a24a6567d.png)

**Node Functions**

Calculates the cross product of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Calculation Result 3D Vector

## **27. 3D Vector Rotation**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/b1b0520b-8117-471a-ac12-f7ac1f78371b.png)

**Node Functions**

Rotates the input 3D Vector by the Euler Angles specified by the rotation and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Rotated 3D Vector 3D Vector
Input Parameter Rotate 3D Vector
Output Parameter Result 3D Vector

## **28. Greater Than**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/26343e07-e495-4ffb-a425-66d51dec98bb.png)

**Node Functions**

Returns whether the left value is greater than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **29. Greater Than or Equal To**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/f6d11a59-9b76-4bb1-90c9-2ad382db6f56.png)

**Node Functions**

Returns whether the left value is greater than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **30. Less Than**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/ec7c82e1-599c-416c-b84d-6c71f294124b.png)

**Node Functions**

Returns whether the left value is less than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **31. Less Than or Equal To**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/5e89ec66-957e-4bcd-9709-df472d37c7b0.png)

**Node Functions**

Returns whether the left value is less than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Boolean

## **32. Cosine Function**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/789cd45d-9df2-4dd2-99c3-09e426f2f3f5.png)

**Node Functions**

Calculates the cosine of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **33. Tangent Function**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/795224b0-f1a9-4889-a863-383521b5e57f.png)

**Node Functions**

Calculates the tangent of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **34. Sine Function**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/9f6dd191-5dd2-4785-a469-205951ca2a96.png)

**Node Functions**

Calculates the sine of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **35. Create 3D Vector**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/0d9ed7d6-6b5a-4660-92cb-092d5efbd85c.png)

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

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/f90c51e6-8f22-49cb-a404-82edfcd75b9a.png)

**Node Functions**

Assembles multiple Input Parameters of the same type (up to 100) into a single List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 0~99 Generic Assembles up to 100 parameters into a list
Output Parameter List Generic List The assembled list

# IV. Structure

## **1. Split Structure**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/7f225085-6d08-48f0-aec7-3aaf622dc784.png)

**Node Functions**

Get all parameters of the specified structure.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **2. Assemble Structure**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/8f217b65-d7e2-4065-b29f-582545b9f2ad.png)

**Node Functions**

Combine multiple parameters into a value of the structure type.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

# V. Dictionary

## **1. Create Dictionary**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/6bb534f4-e220-4ef0-9481-9863c21129d6.png)

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

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhdttai0m3rw/af7731b3-f149-4131-84f0-a6310b0ac261.png)

**Node Functions**

Combine up to 50 key-value pairs into a dictionary.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key 0–49 Generic
Input Parameter Key 0–49 Generic
Output Parameter Dictionary Generic Dictionary

[Query Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhpw06rvah3a)[Execution Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhz064iplia4)
