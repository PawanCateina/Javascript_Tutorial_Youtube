/* 
Primitive DataTypes
1.String
2.Boolean
3.Symbol
4.BigInt
5.Number
6.Null
7.Undefined


Non Primitive Datatype/Reference Type

1.Arrays
2.Objects
3.Functions

Javascript is dynamically typed language,because variables can hold different types during runtime 

//typeof - tp get the type of a variable

================================================================================================
*/
//Memory 

//Two types of Memory
//1.Stack (Primitive DataType) - Copy of declared variable
//2.Heap (Non-Primitive Datatype) - Reference of declared variable

let myYoutubeName = "Chaiaurcode"

console.log(myYoutubeName);

let anotherName = myYoutubeName

anotherName = "freecodecamp"
//myYoutubeName = "freecodecamp"
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi:"john@123ybl"
}

let userTwo= userOne

userTwo.email = 'userTwo@google.com'

console.log(userOne.email);

console.log(userTwo.email);





