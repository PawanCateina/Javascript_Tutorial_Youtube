// function greet(){
//     console.log("Hello World");
    
// }

// greet//reference
//greet()//Execution


// function addition(n1,n2){ //this is parameters
//     console.log(n1+n2);   
// }



// const result = addition(2,4)
// console.log(result);


function loginUserMessage(user="sam"){
    return `${user} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage());



function calculateCartProce(n1,n2,...num)//rest operator and it is also called as spread operator according to the use name gets changed
{
    return num;
}

// console.log(calculateCartProce(100,200,300,400));


const userObj = {
    username:"John",
    coursePrice:199
}

function handleObj(anyObjhandle) {
    console.log(`Username is ${anyObjhandle.username} and the coursePrice is ${anyObjhandle.coursePrice}  `);
}

// handleObj(userObj);

//You can pass direct obj when calling a function
handleObj({
    username:"John Smith",
    coursePrice:8999
})

//Array 

const newArry = [200,300,400,500,600]

function handleNewArry(n1) {
    //console.log(`the second element in the array is ${n1[1]}`);
    return n1[1]
}

console.log(handleNewArry(newArry))



