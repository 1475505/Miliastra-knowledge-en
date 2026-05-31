---
id: mhinnxrxbf6m
title: Operation Nodes
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhnd4l069tk0
language: en
scope: guide
crawledAt: 2026-05-31T16:40:48.022Z
---

# Operation Nodes

# I. General

## **1. Enumerations Equal**

![Image 2](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/10e51bd2-3efb-44e4-87a8-4c3013eb327d.png)

**Node Functions**

After confirming the Enumeration type, determines whether the two input values are equal

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Enumeration 1 Generic
Input Parameter Enumeration 2 Generic
Output Parameter Result Boolean Output True if equal, False if not equal

## **2. Assembly List**

![Image 3](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/a31c67bb-c8a9-443e-9fee-b4deaef799ae.png)

**Node Functions**

Assembles multiple Input Parameters of the same type (up to 100) into a single List

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 0~99 Generic Assembles up to 100 parameters into a list
Output Parameter List Generic List The assembled list

## **3. Equal**

![Image 4](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/4de85ede-8502-4a49-b275-13bcc345fd39.png)

**Node Functions**

Determines whether two inputs are equal

Some Parameter Types have special comparison rules:

Floating Point Numbers: Floating Point Numbers are compared using approximate equality. When the difference between two Floating Point Numbers is less than an extremely small value, the two numbers are considered equal. For example: 2.0000001 and 2.0 are considered equal

3D Vector: The x, y, and z components of a 3D Vector are compared using Floating Point approximate equality

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Enumeration 1 Generic
Input Parameter Enumeration 2 Generic
Output Parameter Result Boolean Output True if equal, False if not equal

## **4. Data Type Conversion**

![Image 5](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/baf41214-696f-4332-80d7-f94e2177f51a.png)

**Node Functions**

Converts input parameter types to another type for output. For specific rules, see [Basic Concepts](https://act.hoyoverse.com/ys/ugc/tutorial//detail/mhk23ora1wom) - [Conversion Rules Between Basic Data Types]

Floating point numbers are rounded to integers when converted

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Output Generic

# II. Math

## **1. Split 3D Vector**

![Image 6](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/8a4e18c5-9b47-4db9-b27a-d057e0edfc69.png)

**Node Functions**

Outputs the x, y, and z components of a 3D Vector as three Floating Point Numbers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter X-Component Floating Point Numbers
Output Parameter Y-Component Floating Point Numbers
Output Parameter Z-Component Floating Point Numbers

## **2. Multiplication**

![Image 7](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/50365d5a-5959-471a-aad5-b0e11e7459ee.png)

**Node Functions**

Performs multiplication, supporting Floating Point and Integer multiplication

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **3. Division**

![Image 8](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/3b1dafad-fd8c-44e8-8a23-5a909465f257.png)

**Node Functions**

Performs division, supporting Floating Point division and Integer division. Integer division returns the quotient result

The divisor should not be 0, otherwise it may return an illegal value

When the divisor is 0, the result is 0.

-2147483648 divided by -1 results in 0.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **4. Create 3D Vector**

![Image 9](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/cc695b18-cce3-415d-988d-3bbf77bcc482.png)

**Node Functions**

Creates a 3D Vector from x, y, and z components

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter X-Component Floating Point Numbers
Input Parameter Y-Component Floating Point Numbers
Input Parameter Z-Component Floating Point Numbers
Output Parameter 3D Vector 3D Vector

## **5. Logarithm Operation**

![Image 10](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/0c781da2-1e26-40ec-920c-b6063a503c44.png)

**Node Functions**

Calculates the logarithm of the argument with the specified base

The base should not be negative or equal to 1, and the argument should not be negative, otherwise illegal values may be generated

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Real Number Floating Point Numbers
Input Parameter Base Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **6. Arccosine Function**

![Image 11](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/e14fa053-aa4c-4f9d-b366-1e6a500e70e2.png)

**Node Functions**

Calculates the arccosine of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **7. Arctangent Function**

![Image 12](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/2902c727-d6a7-4f78-915d-d77aa266b93d.png)

**Node Functions**

Calculates the arctangent of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **8. Arcsine Function**

![Image 13](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/11288f92-1aee-44d6-88a6-0d7e15c08d30.png)

**Node Functions**

Calculates the arcsine of the input and returns the value in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Radian Floating Point Numbers

## **9. Range Limiting Operation**

![Image 14](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/7152f7b3-377f-497b-a942-bf78c1c6e64a.png)

**Node Functions**

Clamps the input value to the range [lower limit, upper limit] (both bounds inclusive) and outputs the result



If the input falls within [lower limit, upper limit], returns the original value



If the input is below the lower limit, returns the lower limit; if it exceeds the upper limit, returns the upper limit



If the lower limit is greater than the upper limit, treats the input as invalid and returns an illegal value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Input Parameter Lower Limit Generic
Input Parameter Upper Limit Generic
Output Parameter Result Generic

## **10. Direction Vector to Rotation**

![Image 15](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/702ce510-aa0b-49c5-8271-7b3fc9d0ddd0.png)

**Node Functions**

Converts the Forward Vector and Upward Vector to Euler Angles

Example: For a Character, suppose it has an initial orientation in 3D space. To rotate the character to a desired orientation: The Forward Vector indicates the direction we want the Character's nose to face. The Upward Vector indicates the direction we want the Character's head to point. Output: A 3D Euler rotation vector representing the rotation the Character must undergo to move from its initial orientation to the specified target orientation.

Note: Ensure the Forward and Upward Vectors are normalized. Using non-normalized vectors can produce unintended scaling and inaccurate rotation results.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Forward Vector 3D Vector Represents the desired Orientation of the Unit
Input Parameter Upward Vector 3D Vector Defines the Unit's Up direction (used to determine the rotation angle). Default is the positive Y-axis of the World Coordinate System
Output Parameter Rotate 3D Vector Returns Euler Angles, where each component represents:

X – Pitch: Rotation around the local X-axis (right). Controls looking up and down.

Y – Yaw: Rotation around the local Y-axis (up). Controls turning left and right.

Z – Roll: Rotation around the local Z-axis (forward). Controls tilting the object side to side.

## **11. Calculate Timestamp From Formatted Time**

![Image 16](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/e2311333-d8ab-45f4-92f7-11f2274be0e4.png)

**Node Functions**

Converts a formatted time to a timestamp

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Year Integer
Input Parameter Month Integer
Input Parameter Day Integer
Input Parameter Hour Integer
Input Parameter Minute Integer
Input Parameter Second Integer
Output Parameter Timestamp Integer

## **12. Calculate Formatted Time From Timestamp**

![Image 17](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/1ba54003-8835-44e3-98f0-9d970d8b5866.png)

**Node Functions**

Converts a timestamp to formatted time

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Timestamp Integer
Output Parameter Year Integer
Output Parameter Month Integer
Output Parameter Day Integer
Output Parameter Hour Integer
Output Parameter Minute Integer
Output Parameter Second Integer

## **13. Calculate Day of the Week From Timestamp**

![Image 18](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/13d0a201-246a-41fb-bf08-64d2a01e3000.png)

**Node Functions**

Converts a timestamp to the day of the week

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Timestamp Integer
Output Parameter Weekday Integer

## **14. Radians to Degrees**

![Image 19](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/ccb689d8-276a-41da-bd3c-24aa6a410457.png)

**Node Functions**

Converts radians to degrees

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Value Floating Point Numbers
Output Parameter Angle Value Floating Point Numbers

## **15. Addition**

![Image 20](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/fe2a59aa-420a-4f49-84c9-690c95b28dde.png)

**Node Functions**

Adds two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **16. Subtraction**

![Image 21](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/4f2dbbd5-e10b-44d9-a32b-cdd2b986c95e.png)

**Node Functions**

Subtracts two Floating Point Numbers or Integers

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Generic
Input Parameter Generic
Output Parameter Result Generic

## **17. Degrees to Radians**

![Image 22](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/5008d2fe-e2a7-47f4-bc82-58cc732eefac.png)

**Node Functions**

Converts degrees to radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Angle Value Floating Point Numbers
Output Parameter Radian Value Floating Point Numbers

## **18. Take Larger Value**

![Image 23](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/2d334656-7377-47fe-b49e-7225df4fdadd.png)

**Node Functions**

Returns the larger of two inputs

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input 1 Generic
Input Parameter Input 2 Generic
Output Parameter Larger Value Generic

## **19. Take Smaller Value**

![Image 24](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/ffa63f77-7ea0-4692-8ea7-fae12d2d7661.png)

**Node Functions**

Returns the smaller of two inputs

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input 1 Generic
Input Parameter Input 2 Generic
Output Parameter Smaller Value Generic

## **20. Absolute Value Operation**

![Image 25](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/2d3cd858-9ba9-4edb-95b3-a83e6cd75cca.png)

**Node Functions**

Returns the absolute value of the input

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Result Generic

## **21. Distance Between Two Coordinate Points**

![Image 26](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/8cc42be3-b4ad-48aa-8257-e8f8a69d6900.png)

**Node Functions**

Calculates the Euclidean distance between two coordinates

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Coordinate Point 1 3D Vector
Input Parameter Coordinate Point 2 3D Vector
Output Parameter Distance Floating Point Numbers

## **22. Logical NOT Operation**

![Image 27](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/100c2a03-1696-498e-9b3a-8d349268f659.png)

**Node Functions**

Performs a logical NOT operation on the input Boolean value and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Boolean
Output Parameter Result Boolean

## **23. Logical OR Operation**

![Image 28](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/6ad05bff-5574-4369-aa11-18e04df732ec.png)

**Node Functions**

Performs a logical OR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input 1 Boolean
Input Parameter Input 2 Boolean
Output Parameter Result Boolean

## **24. Logical XOR Operation**

![Image 29](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/0d6ea723-0d13-4bc5-82c6-30487c3157e2.png)

**Node Functions**

Performs a logical XOR operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input 1 Boolean
Input Parameter Input 2 Boolean
Output Parameter Result Boolean

## **25. Logical AND Operation**

![Image 30](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/821ded1e-cf7b-4ea0-8301-e449b8d73bae.png)

**Node Functions**

Performs a logical AND operation on the two input Boolean values and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input 1 Boolean
Input Parameter Input 2 Boolean
Output Parameter Result Boolean

## **26. Exponentiation**

![Image 31](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/798b72db-fab8-40e1-aca8-2d470016ee6e.png)

**Node Functions**

Raises the base to the given exponent and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Base Generic
Input Parameter Exponent Generic
Output Parameter Result Generic

## **27. Modulo Operation**

![Image 32](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/50a32a7b-348b-41dd-9d85-d0cc0ef1d1ac.png)

**Node Functions**

Returns the result of input 1 modulo input 2, with input 1 as the dividend

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Integer
Input Parameter Integer
Output Parameter Result Integer

## **28. Arithmetic Square Root Operation**

![Image 33](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/2f27602d-99c6-463b-9c47-0f8a8a5e0d84.png)

**Node Functions**

Returns the arithmetic square root of the input value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **29. Sign Operation**

![Image 34](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/92d82aac-2363-494d-955c-f6f941099981.png)

**Node Functions**

When the input is positive, returns 1

When the input is negative, returns -1

When the input is 0, returns 0

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Generic
Output Parameter Result Generic

## **30. Round to Integer Operation**

![Image 35](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/6ee528aa-1d6d-4f34-80ea-53eb810bb003.png)

**Node Functions**

Performs a rounding operation based on the rounding method and returns the rounded positive number

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Input Floating Point Numbers
Input Parameter Rounding Mode Enumeration Round: Rounds to the nearest integer according to standard rules

Round Up: Returns the smallest integer greater than the input value. For example: input 1.2 → 2; input −2.3 → −2

Round Down: Returns the largest integer smaller than the input value. For example: input 1.2 → 1; input −2.3 → −3

Truncate: Removes the decimal part of the floating point number (rounds toward zero). For example: input 1.2 → 1; input −2.3 → −2
Output Parameter Result Integer

## **31. 3D Vector Normalization**

![Image 36](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/61a6e9a9-a01f-4afd-a379-823daff08fd0.png)

**Node Functions**

Normalizes the length of a 3D Vector and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **32. 3D Vector Addition**

![Image 37](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/0392f98f-3f81-4e4e-aab3-e8dd481f26e4.png)

**Node Functions**

Calculates the sum of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Result 3D Vector

## **33. 3D Vector Angle**

![Image 38](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/2e93745b-fb86-4429-9c4c-bb2d3504b949.png)

**Node Functions**

Calculates the angle between two 3D Vectors and outputs it in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Angle (Radians)Floating Point Numbers

## **34. 3D Vector Subtraction**

![Image 39](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/63bb2910-c07a-412b-a95f-f570d772ab5a.png)

**Node Functions**

Calculates the difference of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Result 3D Vector

## **35. 3D Vector Modulo Operation**

![Image 40](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/5a29ad13-5296-455f-93ac-5b8d44d06540.png)

**Node Functions**

Calculates the magnitude of the input 3D Vector

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Output Parameter Result Floating Point Numbers

## **36. 3D Vector Dot Product**

![Image 41](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/e94f1414-b180-49e1-89e6-6627649c066c.png)

**Node Functions**

Calculates the dot product of two input 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Result Floating Point Numbers

## **37. 3D Vector Zoom**

![Image 42](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/dc5fc202-5358-4cb5-9588-fb3118fd8ea2.png)

**Node Functions**

Scales the input 3D Vector (scalar multiplication) and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 3D Vector
Input Parameter Zoom Multiplier Floating Point Numbers
Output Parameter Result 3D Vector

## **38. 3D Vector Cross Product**

![Image 43](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/61e977cd-fba5-47be-ab89-c23426a9c21e.png)

**Node Functions**

Calculates the cross product of two 3D Vectors

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter 3D Vector 1 3D Vector
Input Parameter 3D Vector 2 3D Vector
Output Parameter Result 3D Vector

## **39. 3D Vector Rotation**

![Image 44](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/4d5343da-5c9f-46a9-8626-ca549c2c8271.png)

**Node Functions**

Rotates the input 3D Vector by the Euler Angles specified by the rotation and returns the result

Note: The Rotated 3D Vector is the one you want to rotate. The Rotated Euler Angles define how the vector should be rotated. The resulting output vector shows the position of the original 3D Vector after applying the rotation.

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Rotate 3D Vector This 3D input vector represents a specific rotation in Euler angles, where each component represents:

X – Pitch: Rotation around the local X-axis (right). Controls looking up and down.

Y – Yaw: Rotation around the local Y-axis (up). Controls turning left and right.

Z – Roll: Rotation around the local Z-axis (forward). Controls tilting the object side to side.
Input Parameter Rotated 3D Vector 3D Vector
Output Parameter Result 3D Vector

## **40. Greater Than**

![Image 45](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/fee18218-a125-4364-89e3-b6e2043fe939.png)

**Node Functions**

Returns whether the left value is greater than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Left Value Generic
Input Parameter Right Value Generic
Output Parameter Result Boolean

## **41. Greater Than or Equal To**

![Image 46](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/1d9f39a2-fc53-4ca3-9cba-02e291c7f614.png)

**Node Functions**

Returns whether the left value is greater than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Left Value Generic
Input Parameter Right Value Generic
Output Parameter Result Boolean

## **42. Less Than**

![Image 47](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/7b9456d1-51a0-4d7e-9e3c-01763f021e4b.png)

**Node Functions**

Returns whether the left value is less than the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Left Value Generic
Input Parameter Right Value Generic
Output Parameter Result Boolean

## **43. Less Than or Equal To**

![Image 48](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/9848dd23-bb7b-4f13-b584-5a5f427b0874.png)

**Node Functions**

Returns whether the left value is less than or equal to the right value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Left Value Generic
Input Parameter Right Value Generic
Output Parameter Result Boolean

## **44. Cosine Function**

![Image 49](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/48351ad1-9fc3-4e1d-b416-b7eb110bd002.png)

**Node Functions**

Calculates the cosine of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **45. Tangent Function**

![Image 50](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/c3338c47-e29e-4071-aaab-7a1cb2712a96.png)

**Node Functions**

Calculates the tangent of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **46. Sine Function**

![Image 51](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/345f42a2-06c3-427f-ad53-f16e2c14d3eb.png)

**Node Functions**

Calculates the sine of the input in radians

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Radian Floating Point Numbers
Output Parameter Result Floating Point Numbers

## **47. Left Shift Operation**

![Image 52](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/80f05d06-344c-456e-95de-809ae9c7d669.png)

**Node Functions**

Performs a logical left shift on the input by the specified bit count and outputs the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Integer
Input Parameter Left Shift Count Integer
Output Parameter Result Integer

## **48. Right Shift Operation**

![Image 53](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/31f57a84-9c8b-47b2-84b2-b40ca8d9215f.png)

**Node Functions**

Performs a logical right shift on the input by the specified bit count and outputs the result

Performs an arithmetic right shift, preserving the sign bit

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Integer
Input Parameter Right Shift Count Integer
Output Parameter Result Integer

## **49. Bitwise AND**

![Image 54](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/8bfe3a21-0ab6-4894-9d09-ed6999a02319.png)

**Node Functions**

Performs a bitwise AND operation on the two inputs and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value 1 Integer
Input Parameter Value 2 Integer
Output Parameter Result Integer

## **50. Bitwise OR**

![Image 55](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/422b2e5d-cc92-4d86-ac0e-da49d9c533a2.png)

**Node Functions**

Performs a bitwise OR operation on the two inputs and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value 1 Integer
Input Parameter Value 2 Integer
Output Parameter Result Integer

## **51. XOR (Exclusive OR)**

![Image 56](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/790ecdf3-d086-4a32-8694-ad47b861ec7a.png)

**Node Functions**

Performs a bitwise XOR operation on the two inputs and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value 1 Integer
Input Parameter Value 2 Integer
Output Parameter Result Integer

## **52. Bitwise Complement**

![Image 57](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/c9a0cb87-667d-4d0c-b811-80a491685dfa.png)

**Node Functions**

Performs a bitwise complement operation on the input and returns the result

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Integer
Output Parameter Result Integer

## **53. Write by bit**

![Image 58](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/025aadbb-c58c-434b-a3d2-e7937a0b7cd6.png)

**Node Functions**

Writes the write value as a binary number to the [start bit, end bit] of the target value (also a binary number). The start bit is indexed from 0, and the write length includes both the start and end bits

If the binary significant length of the write value (counted from the first 1 from the left) exceeds the write length, the write fails and returns the original value

If the write value is negative, it also fails due to exceeding the write length (the first bit of a negative number's binary representation is the sign bit 1)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Written value Integer
Input Parameter Write value Integer
Input Parameter Write starting position Integer
Input Parameter Write end position Integer
Output Parameter Result Integer

## **54. Read by bit**

![Image 59](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/589fbf43-9490-4a0f-9260-d667b8499492.png)

**Node Functions**

Reads the value from [start bit, end bit] of the value (in binary representation)

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Value Integer
Input Parameter Read starting position Integer
Input Parameter Read end position Integer
Output Parameter Result Integer

# III. Dictionary

## **1. Create Dictionary**

![Image 60](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/d570409f-dd6a-4855-ad58-7812e6961d9a.png)

**Node Functions**

Creates Key-Value Pairs sequentially from the input key and value lists

This node builds the Dictionary using the shorter of the key and value lists; extra items are truncated

If duplicate keys are found in the key list, creation fails and returns an empty Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key List Generic
Input Parameter Value List Generic
Output Parameter Dictionary Generic

## **2. Assembly Dictionary**

![Image 61](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/36191653-0459-4e81-b392-aaeefb08897e.png)

**Node Functions**

Combines up to 50 Key-Value Pairs into one Dictionary

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**
Input Parameter Key 0~49 Generic
Input Parameter Value 0~49 Generic
Output Parameter Dictionary Generic Dictionary

# IV. Structures

## **1. Split Structure**

![Image 62](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/5945a0e0-e9f4-4b47-8a07-5a68df74fd33.png)

**Node Functions**

Returns all parameters of the specified Structure

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

## **2. Assemble Structure**

![Image 63](https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/mhinnxrxbf6m/efac3164-1cca-426d-942c-32005f5f55fb.png)

**Node Functions**

Combines multiple parameters into a single Structure-type value

**Node Parameters**

**Parameter Type****Parameter Name****Type****Description**

[Query Nodes](https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhwbqlrw655q)
