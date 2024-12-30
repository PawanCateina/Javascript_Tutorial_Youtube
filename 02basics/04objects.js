//Objects Part2

//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id= "1234"
tinderUser.name="John"
tinderUser.isLoggedIn = false

const newUser = {
            email: "john@babycoin.com",
            fullname:{
                userfullname:{
                    name:"John Babycoin"
                }
            }
        }

//console.log(newUser.fullname.userfullname.name);
//console.log(tinderUser);
const obj1 = {1:"a",2:"b"}
const obj2= {3:"c",4:"d"}

const obj3= {...obj1,...obj2} //Can use spread operator 

const obj4= Object.assign({},obj1,obj2) // Can use assign method 
//console.log(obj3);
//console.log(obj4);


const Users = [
    {
        id:123,
        email:"john@123.com"
    },
    {
        id:124,
        email:"sam@124.com"
    }
]

console.log(Users[0]);
console.log(Users[1].id);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('id1'));