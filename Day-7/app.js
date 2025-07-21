//this keyword
const student = {
    name: "rukhsar",
    age: 23,
    eng: 95,
    maths: 88,
    phy: 79,
    getAvg() {
        let avg = (this.eng + this.maths + this.phy) / 3;
        console.log(avg);
    }
}

//try & catch
console.log('Hello');
console.log("Hello");
try {
    console.log(a);
} catch(err) {
    console.log("caught an error.. a is not defined");
    console.log(err);
}
console.log("Byee!");

//arrow functions
const sum = (a,b) => {
    console.log(a+b);
};

const pow = (a,b) => {
    return a**b;
};

//arrow function = implicit return
const mul = (a,b) => (a*b);

//setTimeout
console.log("Hi, there!");

setTimeout( () => {
    console.log("Apna College");
}, 2000);

console.log("Welcome to");

//setinterval
console.log("Hi, Rukhsar!");

let id = setInterval(() => {
    console.log("You are selected as a SDE Intern!!");
}, 3000);

console.log(id);

//this with arrow functions
const stud = {
    name: "aman",
    marks: 85,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);//parent's scope
        return this.marks;
    }
};