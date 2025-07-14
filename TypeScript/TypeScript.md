
### What is typescript ?

### Why to use typescript ?


let a : number = 10;              // declaration 
separate large number by __ for readability , ex - let b: number = 50_000

ts --init  to config file 

debugging 

#### 4 new types in typescript :-
1. any :- assign datatype to this type denoting it can of any type. 
2. unknown
3. never
4. Enum :- for assigning constant values. 
5. tuple :- [value, pair ] represented in form of array

#### Functions
function sum(a: number, b?: number or b = 10) : number{  
	 let s: number = a + (b || 10)
	return s;
}

#### objects
let employee : {
	readonly id : number, 
	name: string,
	retire: (date: Date) => void
} = {
	id : 1,
	name: 'abc',
	retire: (date: Date) => {
		console.log(date)
	   }
}

#### Type Alias

type Employee = {
	readonly id : number, 
	name: string,
	retire: (date: Date) => void
}

let employee : Employee = {
	id : 1,
	name: 'abc',
	retire: (date: Date) => {
		console.log(date)
	   }
}

Union -> a | b    either a or b can be used
	function xyz ( a : number | b : string){
	}
	
Intersection -> a & b      both has to be used
