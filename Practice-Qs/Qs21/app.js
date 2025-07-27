//Create a function to find the min number in an array.
let nums = [9, 17, 3, 5, 24, 8];

let min = nums.reduce((min, el) => {
    if (min < el) {
        return min;
    } else {
        return el;
    }
});

console.log(min);