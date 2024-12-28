//Strings

let name="John"
let repoCount = 5
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation

//another way to write a string
//String is an Object
const stuName = new String('Virat Kohli')
const stuName1 = '    Rohit    '
console.log(stuName);
console.log(stuName[0]);
console.log(stuName.length);
console.log(stuName.toUpperCase());
console.log(stuName.toLowerCase());
console.log(stuName.charAt(8));
console.log(stuName.indexOf('h'));
console.log(stuName.slice(0,8));
console.log(stuName1);
console.log(stuName1.trim());
const url = "http://johnwick/john%20wick/"

console.log(url.replace('%20','-'));
console.log(url.includes('john'));