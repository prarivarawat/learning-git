console.log("hello world");
function today(){
    return new Date();
}
function getFormDate(){
    const fName = document.getElementById("fName").value;
    const lname = document.getElementById("lName").value;

    console.log({fName, lName});

}

document.getElementById("dateId").innerHTML=today();