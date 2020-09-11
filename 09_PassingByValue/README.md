# Pass by Value and Pass by Reference

1. Primitive parameters, String, Boolean, Number, BigInt, Symbol, undefined, are passed to functions by value. If the function changes the value of the parameter, this change is not reflected in the calling function.
2. Non Primitive types (object/null) passing parameters to functions by reference. If the function changes the object's properties, that change is visible outside the function.