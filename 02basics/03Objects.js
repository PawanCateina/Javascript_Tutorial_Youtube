//Objects
//Object.create

//object literals

//In objects there is key value 

const mySym = Symbol('key1');

let Stud = {
    "full name":"John",
    [mySym]:"mykey10",
    age: 10,
    std: "4",
    div: "A",
    isLoggedIn: false
}


// console.log(typeof Stud);
// console.log(Stud);
// console.log(Stud.age);
// console.log(Stud["full name"]);

// console.log(typeof Stud [mySym] );
// console.log(typeof mySym)


Stud.age = 25; //Change the age of the student
//console.log(Stud);
//Object.freeze(Stud); //Cannot change the value of the object
Stud.div="B"
//console.log(Stud);

Stud.greetingOne = function() {
    console.log("Hello greetingOne");
}

Stud.greetingTwo = function () {
    console.log(`Hello greetingTwo ${this["full name"]}`);
}

console.log(Stud.greetingOne());
console.log(Stud.greetingTwo());

