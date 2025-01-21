const languages = ['js','java','python','cpp']

// languages.forEach(function (value) {
//             console.log(value);
// });

// languages.forEach(element => {
//     console.log(element);
// });

function printme(value) {
    console.log(value);
}

languages.forEach(printme);