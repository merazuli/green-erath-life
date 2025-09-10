

#### 1 What is the difference between var, let, and const?
answer:
*var → Function scoped, can be redeclared, can be reassigned,it use before declaration
*const → Block scoped, cannot be redeclared, cannot be reassigned
*let → Block scoped, cannot be redeclared, can be reassigned, hoisted error if used before declaration;



#### 2) What is the difference between map(), forEach(), and filter()? 
*map() → Creates a new array with the results of calling a function on every element. (Returns transformed array)

*forEach() → Executes a function on every element, but does not return anything (returns undefined).

*filter() → Creates a new array containing only the elements that pass a given condition (returns filtered array).



#### 3) What are arrow functions in ES6?

Shorter and cleaner syntax.

Implicit return (if body has a single expression, no need to write return).

this behaves differently → it uses lexical scope (parent scope’s this).


#### 4) How does destructuring assignment work in ES6?
Destructuring assignment lets you unpack values from arrays or properties from objects into separate variables in a clean and easy way.


#### 5) Explain template literals in ES6. How are they different from string concatenation?
Template literals are a new way to create strings in ES6, using backticks (` `) instead of quotes.
They allow string interpolation, multi-line strings, and easier formatting.

