//Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green
// when it is clicked
let button = document.createElement("button");
button.textContent = "Click Me!";

document.body.appendChild(button);

button.addEventListener("click", function(){
    button.style.backgroundColor = "green";
});