function hello(){
    console.log("hello");
}

function demo(){
    hello();
}

demo();

//Call Stack
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

//Single threaded
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);

setTimeout(()=>{
    console.log("apna college");
}, 2000);

console.log("hello...");

//CallBack hell
h1 = document.querySelector("h1");

function changeColor(color, delay, nextcolorChange){
    setInterval(()=>{
        h1.style.color = color;
        if (nextcolorChange) nextcolorChange()
    }, delay);
}

changeColor("red", 1000, ()=>{
    changeColor("green", 1000, ()=>{
        changeColor("blue", 1000, ()=>{
            changeColor("yellow", 1000);
        });
    });
});