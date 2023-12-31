//write a function  to add two number

const a = Number(prompt("Enter the first num")); //1
const b = Number(prompt("Enter the second num")); //2
const c = Number (prompt("enter the third num")); //3

//define the function (basic)
//es5
//function add(){}

function add(a,b){
    return a+b;
}

//es6 (arrow function)
//const add = () =>{};
//const sub = () =>{};
const add = (a,b) =>{
    return a+b;
};

function checkEven (a){
    return a % 2 === 0;
}

//call the function
const o = add(a,b);
console.log(o); //print the value

//Nameless function
//defult function
//Parameterized function
//inline function(interview ques)
//closure (interview ques)
//implicit function
//Explicit function

//calculator
const operator = prompt("enter the arithmetic operator");
function calculator(a,b){
switch (operator){
    case "+" :
    return a+b;
    break;
    case "-":
        return a-b;
        break;
    case "*":
        return a*b;
        break;
    case "/":
        return a/b;
        break;
    defult:
    console.log("invalid");

}
}
const op = calculator(a,b);
console.log(op);

//ternary operation

const result =
a === 1
  ? console.log("1"):
  a === 2
  ? console.log("2"):
  a ===3
  ? console.log("3"):
  console.log("invlide")

  //es6 (arrow function)
  const sub =(a,c) =>{
    return a-c;
  }
  const s = sub(a,c);
  console.log(s);



