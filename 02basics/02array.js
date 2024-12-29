//02 Arrays

const marvelHeroes = ['thor','IronMan','Spiderman']
const dcHeroes = ['Superman','Flash','Batman']

//marvelHeroes.push(dcHeroes)
//console.log(marvelHeroes); // array inside array

//merging of two arrays

//console.log(marvelHeroes.concat(dcHeroes)); //merged second array in first array

//spread operator

const allHeroes = [...dcHeroes,...marvelHeroes]

//console.log(allHeroes);


const anotherArray = [1,2,3,[4,5],6,[7,8,[9,10]]]

const newArray = anotherArray.flat(Infinity)

console.log(newArray);

console.log(Array.isArray(marvelHeroes))
console.log(Array.from("John"))//converts a string into array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) // a set elements create new array object
