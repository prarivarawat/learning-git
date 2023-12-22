console.log("hello world");
const num1 = prompt("enter the first num");
const num2 = prompt("enter the second num");
let operator = prompt("enter the arthimetic operator");
/*
write the logic to check if the user  has input any charater
*/
const isValisnum1 = (num1.charCodeAt() >=65 && num1.charCodeAt() <=90) ||
 (num1.charCodeAt() >=97 && num1.charCodeAt() <=122);
const isVakidnum2 =(num2.charCodeAt() >=65 && num2.charCodeAt() <=90) ||
 (num2.charCodeAt() >=97 && num2.charCodeAt() <=122);

if(isValidnum1 || isvalidnum2){
    alert("invlide number");
}

switch (operator)
{
    case"+":
    console.log (num1 + num2);
    break;

    case"-":
    console.log(num1 -num2);
    break;

    case"*":
    console.log(num1*num2);
    break;

    case"/":
   // if(num1 === 0 && num2 === 0)console.log("invlide input");
    console.log(num1/num2);
    break;

    defult:
    console.log("invalid operator");
    break;


}