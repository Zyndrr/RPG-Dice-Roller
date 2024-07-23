//Will need variables here eventually for the local storage dice roll history

//Replace the "myModal" with the Modal's ID.
var singleResult = 0;
var modal = document.getElementById("myModal");
var d4btn = document.getElementById("d4Btn");
//var d6btn = document.getElementById("myBtn");
//var d8btn = document.getElementById("myBtn");
//var d10btn = document.getElementById("myBtn");
//var d12btn = document.getElementById("myBtn");
//var d20btn = document.getElementById("myBtn");
var diePrintRes = document.getElementById("modalRes");
var span = document.getElementsByClassName("close")[0];

//when user clicks on x it closes the modal
span.onclick = function() {
    modal.style.display = "none";
}
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

//Button function for the d6. When the d6 button is pressed, the die is rolled and the result is presented to the user via a modal popup and added to the history through local storage.
d4btn.onclick = function() {
    let result = dieRoll(4);
    console.log(result);
    //Call here the function printing the result to a modal,
    diePrintRes.innerText = result;
    //Set the modal display to "block" to allow it to show up
    modal.style.display = "block";
}