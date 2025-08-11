let btn = document.querySelector("button");
console.dir(btn);

function sayHello() {
    alert("Button was clicked");
};

btn.onclick = sayHello;

let btns = document.querySelectorAll("button");

for (btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}

function sayHello(){
    alert("Hello!");
}

function sayName(){
    alert("Apna College");
}

let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("parah was clicked!");
})

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function(){
    console.log("Mouse inside div");
})

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(){
    console.log("key was pressed.");
})

inp.addEventListener("keyup", function(){
    console.log("key was released.");
})

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});