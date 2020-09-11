# Basic JavaScript Syntax

1. == and != (loose equality) perform a type conversion when comparing two things. When performing conversions, follow these basic rules:
   - If an operand is a Boolean value, convert it into a numeric value before checking for equality. A value of false converts to 0, whereas a value of true converts to 1.
   - If one operand is a string and the other is a number, attempt to convert the string into a number before checking for equality.
   - If one of the operands is an object and the other is not, the valueOf() method is called on the object to retrieve a primitive value to compare according to the previous rules.
2. === and!=== strict equality without type conversion. 
3. The Object.is()method determines whether two values are the same value without type conversion.  Both the same object means both object have same reference. 
4. Other comparing operators: != , !==, > , <, <=, >= 
   - As with other operators in ECMAScript, there are some conversions when using different data types. 
   - If the operands are numbers, perform a numeric comparison.
   - If the operands are strings, compare the character codes of each corresponding character in the string. When comparing a string with a number, JavaScript will convert the string to a number. An empty string converts to 0. A non-numeric string converts to NaN which is always false 
   - If one operand is a number, convert the other operand to a number and perform a numeric comparison.
   - If an operand is an object, call valueOf() and use its result to perform the comparison according to the previous rules. 
   - If valueOf() is not available, call toString() and use that value according to the previous rules.
   - If an operand is a Boolean, convert it to a number and perform the comparison.
5. Logical operators: && (and), || (or), ! (not) 