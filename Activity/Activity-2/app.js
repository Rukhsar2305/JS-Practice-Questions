let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code = ", event.code); //ArrowUp, ArrowDown, Arrowleft, Arrowright
    if (event.code == "ArrowUp"){
        console.log("character moves forward");
    } else if (event.code == "ArrowDown"){
        console.log("character moves downward");
    } else if (event.code == "Arrowleft"){
        console.log("character moves left");
    } else if (event.code == "Arrowright"){
        console.log("character moves right");
    }
});