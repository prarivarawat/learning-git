//local scoped vs globle scoped function

// write a multiplicate table of 3 using function and loop
//const a = 3; //prompt();
//check

//define
//const mul =(num , i) =>{
 //return num *i;
//};

//call

//for(let i = 1; i <= 10; i++){
   // const res =mul(a, i);
   // console.log(res);
//}
//write a function to add two number.

//function sum(a,b){
  //return a+b;
//}

// how to write function
/**
 1. defult function using the function keyboard(function)
 2. define the name of the function (sum)
 3. creat parameter based on the function (sum mean we need atleast 2 parameter)
 4. return the result using the logic
 */

 //namelessfunction /Anonymousfunction
//function keyword must be used to make it global
 const a = function(){
  console.log("hello from nameless");
 }
 a();
// =========================
 // default function
 //write a multiplication table of 2

 // if nothing is sent , a=3 , a value will be overriddden by user sent value
 const mul =(a = 3,b) =>{
  return a*b;
 };
 const res =mul(undefined, 3);
 console.log(res);
 //Eg: pagination

//pagination logic

 /**
  * 
  define function
  name it pagination
  write the 2 parameter(page, size)
  define the default parameter (page=1,page=5)
  write the loop logic to display the value
  */
 const pagination = (page=1, size=5) => {
  for(let i = page; i <= size; i++){
    console.log(i);
  }
 };
 pagination();
 //==================


 //parameterized function

 //write a multipalication table of 3
 const multiplier =(a,b,c,) =>{
  return a*b;
 }
 //Inline function (interview Q)

 //if we assign variable to namelesss function/ anonymous function, it is called inline function
  const footer = function(){
    console.log("anonymous");
  };

  footer();//page 1
  footer(); //page 2
//concept : Reusability

//==============
//Closure( interview Q)
// function that return the hardcoded variable stored inside the function.
//use case: Used to get the secret environment variable used in the application.

//write a function that return a secret password used in the system

const secret = () => {
  const password = "password";
  return password;

};
console.log(secret());

//===============================

//implicit function
 //function addition (a,b){
  //eturn a+b;
 //}
 //IF WE remove the return keyword to return the result , it is called implicit

 const addit = (a,b) =>a+b;

 const result = addit(2,3);
 const result1 =addit(3,3);
 console.log({result});

 //Explicit function
 const additi = (a,b) =>{
  return a+b;
 }

 //IIFE
 //Immediately Invoked FUNCTION expression

 (function(a,b){
  console.log(a+b);
  console.log("I am IIFE");
 })(2,3);

 //Use case: Script to  add the dummy data inside the application during first run

























//let num;
//const rev = 0;
//let rem;
//const reverse = (num, rev, rem)=> {
  //console.log("Enter the num");
  //while (num = 0){
    //rem = num%10;
    //rev = rev*10 + rem;
    //num = num / 10;

  //}
  //return rev;
//};
//const output = reverse(num , rev,rem);
//console.log(output);

