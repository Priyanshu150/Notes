-  JavaScript is loosely type language
- JavaScript is a **synchronous single-threaded** language.
- Everything in JavaScript happens inside an **execution context**.

#### JS code execution and declaration process 

- JavaScript engine creates execution context. It has 2 components
	1) Memory component (Variable environment)
	2) Code component (Thread of execution)
- There are 2 type of execution context 
	1) Global execution context 
	2) Function execution context
- JavaScript is a #single-treaded language
- That why execution context exists so that one thing at executed at one time
- This concept is called #hoisting
- With let and const  hoisting doesn't work
- In GEC, it creates a global object.
- In case of browser it is #window
- #this key word refers to the current object of global scope

### Creation of execution context
1) Creation phase 
	- Creation of variable object
	- Creation of scope chain
	- Setting the value of this keyword
	
2) Execution phase
	- JS execution stack (call stack) get created -> which work list stack push every function when it's in use and pop it out when it got used

#### Window 
	 it a global object created by js. For every environment js creates a global object. In case of web browser window is a js global object called window. 

#### this 
	this is a reference to the global object created by js

#### undefined v/s not defined

#### Lexical Environment 
	 The local memory of the execution contect + lexical environment of its parent. 

#### Scope chain
	The whole chain of lexical environment is called scope chain. If a variable is not find in it's local scope then it look for parent lexical environment and that loops goes on and on until we find it or until we hit the global lexical enviroment which is null and we didn't got that variable.

#### Hoisting in let and const 
	 let and const are also hoisted but when we access it before value initalization it throws error becuase these variable are not present in the global scope/object instead they are present in separate scope and it's only accessible after initialization.

#### Error in js
- Syntax Error -> Syntax is wrong and the code stop running at that point
- Type Error -> Error related to type (const / let), invalid initialization
- Reference Error -> accessing a variable / function which never existed

#### Block
 {
	 //Compound statement
	 var a = 10;
	 console.log(a);
 }
Anything inside { } is block
We keep statement in block because we want js to consider it as 1 statement.
#let and #const are blocked scope variables

#### Shadowing 
	If we have same named variable outside and inside of function / block then inside one shadows the outside variable means it changes it value.
	(Illegal shadowing) -> Shadowing is only possible when scope of variable is not hamper. For ex, var can be shadowed by let but vice-versa is not true.




