//IIFE (Immediately Invoked Function Expressions)

//Using iife to avoid the global scope pollution

//named iife
(function dbConn(){
    console.log("DB Connection");
    
})(); //explicitly put comma to end the statement

//simple iife
( (name) => {
    console.log(`Hello ${name}`);
} )('John');

( () => {
    console.log("DB Connection2");
} )()