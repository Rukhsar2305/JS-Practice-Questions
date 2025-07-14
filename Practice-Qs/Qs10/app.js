const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "delhi"
};

//change the city to mumbai
student.city = "Mumbai";

//add a new property, gender: "female"
student.gender = "female";

//change the marks to a
student.marks = "A";

//delete
delete student.age;

console.log(student);