//trim methods
let msg = "  Hello   ";
msg.trim();

//Uppercase and Lowercase
let Name = "Apna College";
Name.toLowerCase();

let fullName = "Rukhsar Bano";
fullName.toUpperCase(); 

//Methods with Arguements
let message = "ILoveCoding";
message.indexOf("Love");

//Method Chaining
let str = "  programmer  ";
let newStr = str.trim().toUpperCase();
console.log(newStr);

//Slice Method
message.slice(1,5);
message.slice(5);
message.slice(-3); //11-3 = 8

//Replace method
message.replace("Love", "do");

//Repeat method
message.repeat(2);

//Arrays
let fruits = ["Mango", "Banana", "Strawberry", "Grapes"];
fruits[2] = "Litchi";
console.log(fruits);

//array methods
let cars = ["audi", "bmw", "xuv", "maruti"];
cars.push("toyota");//add elements to the end
console.log(cars);

cars.pop(); //delete from ends & return it
console.log(cars);

cars.unshift("ferrari");//add elements to the start
console.log(cars);

cars.shift(); //delete from start and returns it
console.log(cars);

//Concatenate
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
primary.concat(secondary); //adds element alltogether

//reverse
primary.reverse();

//Slice method
let colors = ["red", "white", "blue", "green"];
colors.slice();//returns all the elements 
colors.slice(3);//returns all the elements after index-3
colors.slice(1,4);//return elements in between of index 1 to 3
colors.slice(-2);//returns 2 elements from the end i.e."lavender" and "black"

//Splice method
colors.splice(3);//delete element of index-3 i.e.blue
colors.splice(0,1);//delete elements in between of index-0 to index-1, i.e.red
colors.splice(0,0,"lavender", "black");//add element at the index-0
colors.splice(1,0,"red"); //add elements after the index-1

//sort
let days = ["thursday", "sunday", "tuesday", "saturday", "wednesday", "friday"];
days.sort();

//nested arrays
let nums = [[1,2], [3,4], [5,6]];
nums.length;
nums[0];
nums[1][2];