//Loops
for (i=1; i<=10; i++){
    console.log(i);
}

for(i=1; i<=15; i=i+2){
    console.log(i); //odd numbers
}
console.log("backwards");
for(i=15; i>=1; i=i-2){
    console.log(i);
}

//even numbers
for (i=2; i<=10; i=i+2){
    console.log(i);
}

//multiplication of 5
for (i=5; i<=50; i=i+5){
    console.log(i);
}

//Loops with arrays
let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (let i = 0; i< fruits.length; i++){
    console.log(i, fruits [i]);
}

//nested loops with nested arrays
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonderwomen", "flash"]];

for(i=0; i<heroes.length; i++){
    console.log(i, heroes[i]);
    for (let j =0; j<heroes[i].length; j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

//for-of loops
let colors =["red", "green", "purple", "blue", "yellow", "black"];

for (color of colors){
    console.log(color);
}
