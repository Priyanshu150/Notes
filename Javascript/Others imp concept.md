
### Closure
	It is a combination of a function bundled together(enclosed) with references to it's surrounding state(lexical environent)
	Data hidding conecpt can be used in closure. In the given example 'a' is hidden varible and can only be used inside the function. If calling from outside it can't be accessed. It can only be printed by calling outer function.

> Uses of Closure 
> - Module Design Pattern 
> - Currying
> - Functions like one 
> - Memoize 
> - maintaining state in async world
> - setTimeouts
> - Iterators
> - and many more.........

Example of closure
![[Pasted image 20250203174355.png]]

#### Garbage collection 
	The space that is not used by program anymore is freed up by js environment this process is called garbage collection. It is imp process in js that help manage memory management and memory leaks.
	If we add var b = 10 in outer function and not use it. Once the excution of outer function is completed it will be smartly garbage collected only a will be there along side closure because it's being used and can be called in future.

#### Garbage collection & removeEventListener 
	It always recomended to remove event listener because they perform heavy operation. Remove them will make the other operation faster. And finally the variably will be garbage collected.

#### Constructor




#Q. **How does asynchronous operation of JS works ?**
	It follows a certain steps to execute these behavior which are as follows 
	
1. ***Call Stack*** :- JavaScript uses a call stack to keep track of the currently executing function.

2. ***Callback queue*** :- Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.

3. ***Microtask queue*** :- Microtask Queue is like the Callback Queue, but Microtask Queue has #higher_priority. All the callback functions coming through promises and mutation observer will go inside microtask queue. Ex, fetch()

4. ***Event Loop*** :- The event loop continuously checks the call stack and the callback queue/microtask queue. If the call stack is empty, it takes the first function from the microtask queue or callback queue and pushes it onto the call stack for execution.

5. ***Execution***:- The function on top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous operations.

6. ***Callback Execution*** :- When an asynchronous operation is complete, its callback is placed in the callback queue.

7. *Repeat*


#### JS Engine and Runtime Explained

![[Pasted image 20250211233834.png]]

- JS engine and other features of environment (event loop, callback queue, web api etc.) forms the JS runtime environment.

![[Pasted image 20250211234535.png]]
- JS uses a set of operation to perform asynchronous operation which is explained in previous section.
- WEB APIs
	- Manipulate documents (DOM API)
	- Draw and manipulate graphics (Canvas API, web graphics library API)
	 - Feed data from server (fetch API)
- In parsing, these code are converted into tokens and later in AST (Abstract syntax tree) using syntax parser.
- JS uses #JIT i.e. both compilation and Interpretation to convert the JS code to machine code.
- Garbage collected is used to free up the space and it uses mark and sweep algorithm.
- Compilation uses #Inlining, #copy_elision, #Inline_caching techniques for optimization.