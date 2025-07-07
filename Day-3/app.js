//Conditional Statements
console.log("before my if statement");
let age = 21;
if (age>=18){
    console.log("you can vote");
    console.log("you can drive");
}
if (age < 18) {
    console.log("you cannot vote");
}
console.log("after my if statement");


//else if statement
let newAge = 14;
if (newAge>=18){
    console.log("you can vote");
}
else if (newAge<18){
    console.log("you cannot vote");
}

//Grading system using else if
let marks = 55;
if (marks>=80){
    console.log("A+");
}
else if (marks >= 60){
    console.log("A");
}
else if(marks >= 33) {
    console.log("B");
}
else if (marks < 33){
    console.log("F");
}

//nested if-else
let Marks = 45;
if (marks >=33) {
    console.log("Pass");
    if (marks>=80){
        console.log("Grade: Outstanding");
    } else {
        console.log("Grade: A");
    }
} 
else {
    console.log("Better Luck Next Time!");
}

//Switch statement
let color = "red";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Broken Light");
}
