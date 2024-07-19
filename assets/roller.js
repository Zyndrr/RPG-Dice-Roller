//Will need variables here eventually for the local storage dice roll history

//Creating a function that will be passed a number of sides for the dice to be rolled and will return the randomized value
function dieRoll(numSides) {
    //let numDie = Number(numSides);
    let min = 1;
    let result = Math.floor(Math.random() * numSides + 1);
    return result;
}