console.log("hello date");
//DATE
//
const today = new Date();//default curent date and time
const someTime = new Date("2003-09-27");
console.log(today , someTime);

//ISO Date times
const now = today.toISOString();

console.log(now);

console.log(today.getDay());//5
console.log(today.setFullYear())//2024

//write a function that accept the date and shows which day is entered as date

const dayFridar = (date)=>{
    
    const someTime =new Date(date);
    console.log(day);
    
    switch(day)
    {
        case 1:
            return sunday;
            break;
        case 2:
            return monday;
            break;
        case 3:
            return tuesday;
            break;
        case 4:
            return wednesday;
            break;
        case 5:
            return thureday;
            break;
         case 6:
            return friday;
            break;
        case 7:
            return saturday;
            break;                       


    }
   console.log(today.getDate());
};
console.log(dayFridar("2003-09-27"));//output saturday