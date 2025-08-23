//await
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        h1.style.color = color;
        console.log(`color changed to ${color}!`);
        resolve("color changed");
    }, delay);
    })
}

async function demo(){
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    changeColor("yellow", 1000);
}

//async
async function greet(){
    throw "weak connection";
    return "hello!";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was:", result);
})
.catch((err)=>{
    console.log("promise was rejected with err : ", err);
});

//json
let jsonRes = '{"fact": "All cats need taurine in their diet to avoid blindness. Cats must also have fat in their diet as they are unable to produce it on their own.","length":140}';

let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);

//Our first API request
let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    console.log(res); 
    return res.json();
})
.then((data)=>{
    console.log(data.fact);
})
.catch((err)=>{
    console.log("ERROR -", err);
})

//using fetch with async-await
let url2 = "https://catfact.ninja/fact";

async function getFacts(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}
