# Objects

1. An object is a composite value: primitive values or other objects.
2. An object is an unordered collection of properties, each of which has a name and a value. Property name sare usually strings (can also be Symbols).
3. Objects can be created in many ways:
    1. with object literals, object literal is a comma-separated list of {name: value} pairs. 
    2. by using the "new" operator. Objects created using the new keyword and a constructor invocation use the value of the prototype property of the constructor function as their prototype.  
    3. with the Object.create() function. Creates a new object,  with specified prototypes.
4. Almost every JavaScript object has a second JavaScript object associated with it. This second object is known as a prototype, and the first object inherits properties from the prototype.
5. The object created by new Object() or object literal inherit from Object.prototype. Similarly, the object created by new Array()uses Array.prototype as its prototype, and the object created by new Date() uses Date.prototype as its prototype.  Date.prototype inherits properties from Object.prototype, so a Date object created by new Date()inherits properties from both Date.prototype and Object.prototype. This linked series of prototype objects is known as a *prototype chain*. 
6. JavaScript objects are dynamic—properties can usually be added and deleted
7. Objects are mutable and manipulated by reference. If the variable "a" refers to an object and the code let b = a; is executed, the variable "b" holds a reference to the same object, not a copy of that object. 
8. A property has a name and a value. A property name may be any string or any Symbol but no object may have two properties with the same name.
9. JavaScript uses the term own property to refer to non-inherited properties from prototype object.
10. The "Object" type is the  based from which all other objects are derived.
    Every object has the following property attributes and methods:
    1. each property has four  data property attributes:
       - The "writable" attribute specifies whether the value of the property can be set.
       - The "enumerable" attribute specifies whether the property name isreturned by a for-in loop.
       - The "configurable" attribute specifies whether the property can be deleted and whether its attributes can be altered.
       By default, all properties of the objects you create are writable, enumerable, and configurable.
       - value contains the actual data value for the property. The default value for this attribute is undefined.
    2. method
       - constructor the function that was used to create the object. 
        hasOwnProperty(propertyName)  Indicates if the given property exists on the 
     object instance.  For example, obj1.hasOwnProperty("name")).
       - isPrototypeOf(object)  Determines if the object is a prototype of another object.
       - defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
       - getOwnPropertyDescriptors() returns all own property descriptors of a given object.
       - toString()  Returns a string representation of the object.
       - valueOf()  Returns a string, number, or Boolean equivalent of the object   
         It often returns the same value as toString().

11. Many of JavaScript’s built-in objects have properties that are read-only,    non-enumerable, or non-configurable. 
12. object.property or object["property"] have the same value.
13. "prototypal inheritance" is a key feature of JavaScript. An Object also inherits the properties of another object, known as its "prototype". The methods of an object are typically inherited properties.
14. This linked series of prototype objects is known as a prototype chain. 
