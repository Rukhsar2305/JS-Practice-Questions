//Check if all numbers in an array are the multiples of 10 or not.
let nums = [10, 20, 50, 80, 40];

let ans = nums.every((el) => {
    return el % 10 == 0;
});

console.log(ans);