console.log(" helloword");
// a block of code excuting based on the conditions then we use ststements.
// if else
// switch case
 

const gender = prompt("what is your gender?");

if(gender ==="m"){
    alert("you are male");

}else{
    alert("you are female");
}
//ternary operator
const result1 =
gender === "m"? console.log("you are male"): console.log("you are female");
 
//write ternary operator to check if a user can vote or not (age above 18)
const age = prompt("enter the age ");
const result = age>=18? console.log("you can vote"): console.log(" you can not vote");

// comparisoin chart
//=->a=b(value)
//== ==>value&& value check
// == ==>strictly type check value&& value check&& type ckeck



//switch case

const value = Number(prompt("enter the value"));
switch (value)
{

    case 1 :
        console.log("1");
        break;

    defult:
    console.log("else") 

}