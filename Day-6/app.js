//object literals
let student = {
    name: "rukhsar",
    age: 20,
    marks: 9.84
};

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined:"e"
};

//Nested Objects
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Agra"
    }
};
classInfo.shradha.city = "Gurgaon";
classInfo.karan.grade = "B";
classInfo.aman.age = 27;
delete classInfo.aman.age;

console.log(classInfo);

//array of objects
const info = [
    {
        name: "rukhsar",
        grade: "O",
        city: "Chattisgarh"
    },
    {
        name: "ayaan",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "Garima",
        grade: "B",
        city: "Bihar"
    }
];

info[0];
info[1];
info[2];

info[0].name;
info[1].grade;
info[2].city;

info[1].city = "Indore";
info[1].gender = "male";
console.log(info);

//random integers
let random = Math.floor(Math.random()*10) + 1;
