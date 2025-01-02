//scope

// the following curly braces {} is scope. except object

//Global Scopes 
// U can access the below variables inside the scope
// let a =10
// const b= 11
// var c=12

// if(true){  
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }

/*A variable declared inside the scope should not be accessbile outside. But var is getting accessible outside of the scope.
Thats why we dont use var while declareing variables
*/

let a=9
var c=100
if(true){  
        let a=10
        const b=11
        var c=12
        // console.log(a);
}



//     console.log(a);
//     // console.log(b);
//     console.log(c);


//Nested Scopes
//Nested Scopes are also same for if conditional statements

function one() {
        const username="John"
        function two() {
                const platform="Youtube"
                console.log(username);
        }
        //console.log(platform);
        two()
}

// one()

// ++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++

console.log(addOne(4));
// addOne(2)
function addOne(num) {
        return num + 1
}


//console.log(addTwo(7)); // Error: Cannot access 'addTwo' before initialization

const addTwo= function Two(num1) {
        return num1+1
}

console.log(addTwo(3));




