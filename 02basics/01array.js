//Array
let cricketers = ["Dhoni","Virat","Rohit","Hardik","Gill"]
let fruits = new Array('Apple','Mango','Pineapple','Watermelon','Chickoo')

//Change the value in the specified index 
fruits[0]="Cherries"
// console.log(fruits.length);

// fruits.push('banana')
// console.log(fruits);
// fruits.pop() // Removes the last element in the array
// console.log(fruits);


// fruits.unshift('strawberry') // adds the value at the start
// console.log(fruits);

// fruits.shift() //Removes the element which is at the start of the array
// console.log(fruits);
 
//Questionary Methods for Arrays


// console.log(fruits.includes('Mango'));
// console.log(fruits.indexOf('Chickoo'));

//slice and splice
console.log("Original Array", cricketers);

//slice
const myNewSliceArr = cricketers.slice(0,3)
console.log("Slice Array", myNewSliceArr); //Original array not manipulated
console.log("B", cricketers);


//splice
const myNewSpliceArr = cricketers.splice(0,4)
console.log("Splice Array", myNewSpliceArr);//Original array got manipulated
console.log("C", cricketers);

//console.log(typeof cricketers);
// console.log(cricketers);





