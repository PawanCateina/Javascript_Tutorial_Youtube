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
        console.log(a);
        
}

    console.log(a);
    // console.log(b);
    console.log(c);
