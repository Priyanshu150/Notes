//Output of asyncronous js code(interview question)

// function a(){
//     for(var i=0; i<5; ++i){
//         setTimeout(function abc(){
//             console.log(i);
//         },)
//         abc(5)
//     }
// }
// a()

// Closure example 

// function outer(b){
//     let a = 9;
//     let b = 99;     //error
//     function inner(){
//         console.log(a, b);
//     }
//     a = 10
//     inner();
// }
// outer("test")



// a();
// console.log(a);

// console.log(b);
// b()

// //Function statement aka Function Declaration 
// function a(){
//     console.log('a called');
// }

// // Function expression
// var b = function (){
//     console.log('b called');
// }

// //Anonymous Function -> function which doesn't have name
// function c(){

// }

// // Named Function expression -> Function with a name
// var b = function xyz(){
//     console.log('b called');
// }
// xyz() //error

// // parameter and arguments 
// function abc(param1, param2){}

// abc(arrgument1, arrgument2)

//First class function or First Class citizens
// -> Ability to use like values or variables 
// -> It can be passed as argument, parameter and so on just like values 