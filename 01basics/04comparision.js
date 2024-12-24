//Avoid below comparisions of different datatypes. Clean Code is the motive 
console.log(null >= 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null == 0);


console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined == 0);


//strict check - (===) checks the value along with datatype

console.log('strict check');

console.log("2" === 2);
console.log(2 === 2);

console.log('Normal Check'); 
console.log("2"== 2); //checkes only value and not the datatype
console.log(2 == 2);//checkes only value and not the datatype