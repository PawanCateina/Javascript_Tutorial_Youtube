//Dates

let date = new Date()
// let myCreatedDate = new Date(2025,11,21)
let myCreatedDate = new Date("01-01-2024")
// console.log(`Date ${date}`);
// console.log(`to date string ${date.toDateString()}`);
// console.log(`to ISO String ${date.toISOString()}`);
// console.log(`to JSON ${date.toJSON()}`);
// console.log(`to Locale String ${date.toLocaleString()}`);
// console.log(`to String ${date.toString()}`);
// console.log(typeof date);

//console.log(myCreatedDate.toLocaleString());

console.log(Math.floor(Date.now()/1000));

console.log(date.getDay());
console.log(date.getMonth()+1);


const myNewCreatedDate = date.toLocaleString('default',{
    weekday: "long",

})
console.log(myNewCreatedDate);
