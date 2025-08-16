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

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
        h1.style.color = color;
        resolve("color changed");
    }, delay);
    })
}

changeColor("red", 1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("yellow", 1000);
})
.then(()=>{
    console.log("yellow was completed");
});

//Promises

// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("apna college", ()=>{
//     console.log("your data was saved");
//     savetoDb("hello world", ()=>{
//         console.log("success2: data saved.")
//     }, ()=>{
//         console.log("failure2");
//     })
// },()=>{
//     console.log("weak connection. data not saved.");
// });

function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
        resolve("success: your data was saved.");
    } else {
        reject("failure: weak connection");
    }
    });
}

savetoDb("apna college")
.then((result)=>{
    console.log("data1. promise was resolved");
    console.log("result of promise :", result);
    return savetoDb("hello world");
})
.then((result)=>{
    console.log("data2 saved.");
    console.log("result of promise:", result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promise:", error);
});


