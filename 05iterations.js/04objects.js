const myObj = {
    js:"Javascript",
    py:"Python",
    cpp:"c++"
}

for (const key in myObj) {
    console.log(`${key}:${myObj[key]}`);
    
}

const myArr = ["js","py","java","cpp"]

for (const key in myArr) {
   console.log(myArr[key]);
   
}
