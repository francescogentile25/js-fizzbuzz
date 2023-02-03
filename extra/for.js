// USO ELSE IF 
// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

// USO SWITCH
const output =document.getElementById('console')
console.log(console)
for (let i = 1; i <= 100; i++) {
    switch (true) {
        case i % 15 === 0:
            console.log("FizzBuzz");
            output.innerHTML += "FizzBuzz<br>"
            break;
        case i % 5 === 0:
            console.log("Buzz");
            output.innerHTML += "Buz<br>"
            break;
        case i % 3 === 0:
            console.log("Fizz");
            output.innerHTML += "Fizz<br>"
            break;
        default:
            output.innerHTML += i + '<br>';
            console.log(i);
    }
}
