//Write an arrow function that returns the square of a number n
const square = (n) => (n*n);

//Write a function that prints Hello World 5 times at interval of 2s each
let id = setInterval(() => {
    console.log("Hello World!");
}, 2000);

setTimeout( ()=> {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);