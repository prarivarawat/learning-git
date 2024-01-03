//write  a javascript function that revers a number
//example x =32243;Expected output:34223

/**
 * Steps
 1. write a function called reverser
 2.call the reverser with parameter
 3. Invoke that function with data
 4.Typecast that number to string
 5. Get the length of the string
 6. Loop in opposite way
 7. return the value
 */
let num =0;
 const reverser = (num) =>{
    //logoic
    const data = String(num);
    const lengthOfData = data.length; //New
    let temp ="";
    for (let i = lengthOfData -1; i>=0; i--){
        console.log(i, temp);

        temp+= data[i]; //new
    }
    return temp;  
 };
 console.log(reverser(32243));

 //write a javascript program to convert temperature to and form celsius, fahrenteit
 // Formula c/5=(f-32)/9
/**
 * steps
 1.write an empty function
 2.Name it tempConverter
 3.Write down the parameter used in the function
 4.Creat defult function parameter with second parameter as "c"
 5.Invoke the function using 60 degree
 6.add switch case in the mix/ if else statement
 7.use the function to return the result
 8.console log the function call
 */

 const tempConverter = (temp, measurement ="c") =>{
    if(measurement === "c"){
        //convert celcius to fahrenhite
        return(9*temp)/5 +32 + "fahrenhite";
        //convert fahrenhite to celcius
    } return((temp - 32)/9)*5 + "celcius";
 };
 console.log(tempConverter(45, "c"));

 //write a javascript program to calculate multiplication and division of two numbers.(use same function to achieve this)

 const calculate = (num1, num2 ,ops ="*")=>{
    if (ops ==="*"){
        return num1*num2;
    }
    return num1/num2;
 };
 console.log(calculate(2,3));