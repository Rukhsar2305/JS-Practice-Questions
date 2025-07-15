//Create a function that prints a multiplication table of a number
function table(n){
    for(let i = n; i<=n*10; i+=n) {
        console.log(i);
    }
}

table(3);
table(7);
table(9);