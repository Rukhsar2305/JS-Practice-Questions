//forEach
let arr = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
}

arr.forEach(print);

//map
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el*el;
});

//filter
let nums = [1, 4, 6, 7, 9, 12, 14, 5];

let ans = nums.filter((el)=>{
    return el % 2 != 0;
});

//every
let odd = [1, 9, 3, 7, 17];

let result = odd.every((el) => {
    return el % 2 != 0;
});

let result2 = odd.some((el)=>{
    return el % 2 == 0;
});

//reduce
let number = [1,2,3,4];

let finalVal = number.reduce((res,el) => res + el);
console.log(finalVal);

//maximum in array
let array = [1, 2, 4, 5, 8, 3, 9];

let max = array.reduce((max,el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(max);

//default parameter
function sum(a, b = 3){
    return a + b;
}

console.log(sum(2));

//Spread (Array Literals)
let evenNum = [0, 2, 4, 6, 8, 10];
let oddNum = [1, 3, 5, 7, 9];

let newNum = [...evenNum, ...oddNum];

console.log(newNum);

//Spread (Object Literals)
const data = {
    email: "ironaman@gmail.com",
    password: "abcd"
};

const dataCopy = {...data, id: 123, country: "India"};

console.log(dataCopy);

//Reset
function add(...args) {
    return args.reduce((add, el) => add + el);
}

//Destructuring
let names = ["arya", "bhupesh", "chitiz", "dinesh", "garima"];

let [winner, runnerup, ...others] = names;

console.log(winner);
console.log(...others);

//Destructuring (Objects)
const bestfrnd = {
    name: "Vaishnavi Nair",
    age: 21,
    dob: 28072005,
    email: "vaishnavinair28@gmail.com"
};

let {name, email, city = "Kerala"} = bestfrnd;

console.log(bestfrnd);