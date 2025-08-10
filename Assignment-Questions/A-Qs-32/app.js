//Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me!";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Add following attributes to the element:
// -Change place holder value of input to “username”
// -Change the id of button to “btn”
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//Access the btn using the querySelector and buttonid. Change the button background color to blue and text color to white
let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

//Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.
let h1 = document.createElement("h1");
h1.innerHTML = "<u> DOM Practice </u>";
h1.style.color = "purple";
document.querySelector("body").append(h1);

//Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold.
let p = document.createElement("p");
p.innerHTML = "Apna College <b> Delta </b> Practice";
document.querySelector("body").append(p);