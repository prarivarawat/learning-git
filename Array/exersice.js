//map()
//write a function that return  user name who has access or not
//[{name:"raktim",role:["admin"]},{name:"harry",roll:["gust"]},
//{name:"sita",role:["asmin","vendor"]}]

const arr =[{name:"raktim" , roles:["admin"]},{name:"harry",roles:["gust"]},{name:"sita",roles:["admin","vendor"]},
];
//drfine
const checkRole =(role)=>{

// //logic
// const newArr = arr.map((arr)=>{
//     if(arr.roles.includes(role))return arr.name;
// });
// //output
// return newArr;


return arr.filter((arr)=>arr.roles.includes(role));
};
//call
const resp =checkRole("admin");
console.log(resp);



//write a pagination function that retrun 5 item on page change
//['1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8']
const pagination =(item)=>{
    for( let i = item; i => value; i++)
    console.log();
};
pagination();

//write a function that sum  every character of [1,2,3] .
const array =[1,2,3];

const sumEveryNum = (data) =>{
    const fan = ( sum,currentValue)=>{
        return sum+currentValue;
    }
    return data.reduce
};
    
 console.log(sumEverynum(123));
console.log(sum);


