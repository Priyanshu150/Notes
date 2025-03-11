
#### Promises 
	The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
		A `Promise` is in one of these states:
			- pending: initial state, neither fulfilled nor rejected.
			- fulfilled: meaning that the operation was completed successfully.
			- rejected: meaning that the operation failed.
![[Pasted image 20250225184436.png]]

//Creation of a promise 
 const pr = new Promise(function(resolve, reject){
 
	 // success case 
		 resolve(orderId)
	//error case 
		reject("card in not valid")
 })

#Note  .catch() is used to catch the exception in promise chain. It'll catch the error which are place above it which are place below remains can un-caught the application

#### Promise_API 

###### promise.all() 
- We pass array of promises in this function.
- After all get resolved it returns us result of all the promises in form of array. 
- Time taken by this function is equal to the maximum time taken among all the promises 
- As soon as a single promise is reject, it return us the error for the same promise

promise.allSettled()
- Same as promise.all() except of the fact during error it'll wait for every promise to settle and return the output of each promise even if one or more ended in error.

promise.race()
- As soon as one of the promise gets settles from the list promises we'll get our result and it'll contain only 1 result. 
- Success or failure it doesn't matter it'll return the result

promise.any()
- It'll wait for first success/resolved promise  and return the result of that promise 
- If all fails then it returns combined error (aggregated array) of all promises

#### setTimeout(p1, p2)
	- p1 should be a callback funtion 
	- p2 should be time in milisecond 
	The code get executed after the timer exprires and synchronous operation is finished.

#### Async - Await 
 #Async is keyword that used with a function making it async function. A async function return a promise and contains 0 or more await expressions

#Await is keyword that can only be use under async function. It is write in front of promise and it settles the promise 

we use try catch block to handle the error here 

#### setInterval(p1, p2)
	- p1 should be a callback funtion 
	- p2 should be time in milisecond 
	The code get executed after the timer exprires again and again until clearInterval() is called with the reference of the function
