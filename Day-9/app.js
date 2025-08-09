let smallImages = document.getElementsByClassName("oldImg");

for (let i =0; i < smallImages.length; i++) {
    console.dir(smallImages[i]);
};

console.dir(document.querySelector("p"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("div a"));

let links = document.querySelectorAll('.box a');

//for (let i = 0; i < links.length; i++){
    //links[i].style.color = "yellow";
//}

for (link of links){
    link.style.color = "purple";
}