//Will need variables here eventually for the local storage dice roll history

//Replace the "myModal" with the Modal's ID.
var singleResult = 0;
var modal = document.getElementById("myModal");
var d2btn = document.getElementById("d2btn");
var d4btn = document.getElementById("d4btn");
var d6btn = document.getElementById("d6btn");
var d8btn = document.getElementById("d8btn");
var d10btn = document.getElementById("d10btn");
var d12btn = document.getElementById("d12btn");
var d20btn = document.getElementById("d20btn");
//diePrintsRes needs to access the modal's p tag when created.
var diePrintRes = document.getElementById("results");
var span = document.getElementsByClassName("close")[0];

//when user clicks on x it closes the modal
//span.onclick = function() {
//    modal.style.display = "none";
//}

//When user clicks outside the modal it closes the modal (this was commented out as it was preventing the modal from opening)
//window.onclick = function(){
//    modal.style.display = "none";
//}

//Creating a function that will be passed a number of sides for the dice to be rolled and will return the randomized value
function dieRoll(numSides) {
    //let numDie = Number(numSides);
    let min = 1;
    let result = Math.floor(Math.random() * numSides + 1);
    return result;
}

//Button function for the die buttons. When the corresponding die button is pressed, the die is rolled and the result is presented to the user via a modal popup and added to the history through local storage.
d2btn.onclick = function() {
    let result = dieRoll(2);
    console.log(result);
    //Call here the function printing the result to a modal,
    diePrintRes.innerText = result;
    //Set the modal display to "block" to allow it to show up
    modal.style.display = "block";
}

d4btn.onclick = function() {
    let result = dieRoll(4);
    console.log(result);
    //Call here the function printing the result to a modal,
    diePrintRes.innerText = result;
    //Set the modal display to "block" to allow it to show up
    modal.style.display = "block";
}

d6btn.onclick = function() {
    let result = dieRoll(6);
    console.log(result);
    //Call here the function printing the result to a modal,
    diePrintRes.innerText = result;
    //Set the modal display to "block" to allow it to show up
    modal.style.display = "block";
}

d8btn.onclick = function() {
    let result = dieRoll(8);
    console.log(result);
    //Call here the function printing the result to a modal,
    diePrintRes.innerText = result;
    //Set the modal display to "block" to allow it to show up
    modal.style.display = "block";
}

d10btn.onclick = function() {
    let result = dieRoll(10);
    console.log(result);
    //Call here the function printing the result to a modal,
    diePrintRes.innerText = result;
    //Set the modal display to "block" to allow it to show up
    modal.style.display = "block";
}

d12btn.onclick = function() {
    let result = dieRoll(12);
    console.log(result);
    //Call here the function printing the result to a modal,
    diePrintRes.innerText = result;
    //Set the modal display to "block" to allow it to show up
    modal.style.display = "block";
}

d20btn.onclick = function() {
    let result = dieRoll(20);
    console.log(result);
    //Call here the function printing the result to a modal,
    diePrintRes.innerText = result;
    //Set the modal display to "block" to allow it to show up
    modal.style.display = "block";
}