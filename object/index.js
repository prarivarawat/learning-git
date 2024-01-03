//syntax
const person = "prativa rawat";{

}
console.log(person);

//key value pair
const person1 ={
    FirstName:"prativa",
    lastName:"rawat",
    age:19,
    isAdult: true,
    Fullname: function(){
        return this.firstName + this.lastName;
    },
    isEligibleToVote: () =>{
        return person1.age > 18;
    },
    
};
console.log(person1.firstName());
console.log(person1("firstName"));

console.log(person1.Fullname());//method
    console.log(person1.isEligibleToVote());


    //CRUD(Creat, Read,Update,Delete)

    //update the object

    person1.firstName = 'roshan';
    person1.dob = "2nd jun";

    console.log(person1);
    //delect a poropty
    delete person1.lastName;

    console.log(person1);