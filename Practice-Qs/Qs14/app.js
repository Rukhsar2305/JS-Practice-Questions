//Create a function to roll a dice & always display the value of the dice(1 to 6).
function dice(){
    let roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}

dice();