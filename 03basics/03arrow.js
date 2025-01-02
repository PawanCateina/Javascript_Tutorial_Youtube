//arrow function

// const user= {
//     username:"john",
//     fee: 999,
//     welcomemessage: function () {
//         console.log(`${this.username} welcome to the website`); //this - used to take the current context of the object. 
//     }
// }


// user.welcomemessage()
// user.username="JohnBaby"
// user.welcomemessage()


//console.log(this); // When working on node this print empty object

//And when same this keyword gets printed in browser it gives us {Window} obj. So, Its executes differently in both of them.



// function chai(){
//     const username= "JohnSena"
//     console.log(this.username);
// }

// chai()
// const chai = () => {
//     console.log("hello")
// }

// chai()

//Basic Arrow Function
const addition = (n1,n2) =>{
    return n1+n2
}


console.log(addition(9,5))

//Implicit Return
// const addition1 = (n1,n2) =>  n1+n2
// const addition1 = (n1,n2) =>  (n1+n2)
const addition1 = (n1,n2) =>  ({username:"Speed"})
console.log(addition1(4,5))
