const person = [{name:"ram",age:"20"},{name:"sita",age:"19"},
{},
{},
{a:""},];
const personss = new Array();

console.log(person,personss);

//Access
//provide index value in the array
//index always start from 0

console.log(person[person.length - 1]);

//Update
person[0] = {name:"hari"};
person[3] = {name:"hari"};
//delete
delete person[2];

//loop inside array
const peoples =[
    {name:"ram",age: "20"},
    {name:"sita", age:"19"},
    {name:"hari",age:"10"},
];

//function to console the name
const showName = (people) =>{
    console.log(people.name);
};
//loop using for loop

for (let i= 0; i<=peoples.length - 1; i++){
    showName(peoples[i]);
}

//loop using arrays inbuilt feature 
//Direct source data manipulation 
peoples.forEach(showName); //ES5

//Advanced technique
//immutable jS
//create a shallow copy and operation on it 
//Es6
//map, filter, reduce, every , some

console.log("...........");

//peoples.map((people)=>showNamw(people));
const addd = peoples.map((people) =>showName(people)).pop();
console.log({ddd});


//write a function to sort the array by age in ascending order


const ex =[
    {name:"ram",age:"20"},
    {name:"sita",age:"10"},
   { name:"hari",age:"15"}
];
const showNames =(ex)=>{
    console.log(ex.name);
}
const newAr =ex.sort((a,b)=>a,age -b.age);
console.log({newAr});

//exercise
const fn =(data) =>{
   // const age = data.sort((a,b)=> age - b.age);
    console.log(data.sort);
}

const newArr = ex.map((fn));

//write a javaScript function that return a string that has letters in alphabetical order.
//example strng;"webmaster"

//write js function that return true if the value is palindrome else false?
//for Eg; mom(true)
//egtest
//palindrome(121)true
//palindrome(-10)false
//palindrome(10)false


//spread operator...
const arr= [
    {name:"hari",age:"10"},
    {name:"shyam",age:"15"},
    {name:"ram",age:"20"},
];
const obj= {
    name:"a",
    address:"b",
    password:"c",
    role:[],
    isActive: false,
};
//donot do this
//delet obj.password;
const{password,roles, ...data} = obj;
console.log({data});

const[a, ...rest]=arr;
consdole.log(rest);


