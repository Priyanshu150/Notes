>First class function or First Class citizens :- 
- Ability to use like values or variables
- It can be passed as argument, parameter and so on just like values

>Function statement aka Function Declaration
	function a(){
	    console.log('a called');
	}

> Function expression
	var b = function (){
	    console.log('b called');
	}
	
	 Major_difference b/w function statment and expresion is hoisting. 'a' will have whole function stored in it while 'b' will be holding undefined.

>Anonymous Function -> function which doesn't have name
	function (){}

>Named Function expression -> Function with a name
	var b = function xyz(){
	    console.log('b called');
	    xyz() //doesn't throw error because it was locally created 
	}
	xyz() //error

> parameter and arguments
	function abc(param1, param2){}
	abc(arrgument1, arrgument2)


#### Callback Function 
- A callback is a function passed as an argument to another function
- This technique allows a function to call another function
- A callback function can run after another function has finished

#### Problem with callback
	Callbacks inherently asynchronous flow of code execution, meaning they do not guarantee that the code will be executed sequentially.

1) Callback hell (Pyramid of Doom) :- 
	When multiple asynchronous operations depend on each other, callbacks get deeply nested, making the code hard to read and maintain.
	
2) Inversion of control :- 
	the first part of our program that executes now and the second part that executes in the callback and when we give that callback to someone else(like, for example, an external API). That’s what inverts the control and puts them in charge of executing the second part of our program.
	- **A Callback may be called multiple times.**
	- **A Callback would never get called.**
	- **A Callback may be called synchronously.**


#### Higher  Order Function 
  A ****higher-order function**** is a function that does one of the following:
- Takes another function as an argument.
- Returns another function as its result.

