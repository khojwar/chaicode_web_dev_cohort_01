/**
 * Write your challenge solution here
 */

let mainHeading = document.getElementById("mainHeading");
let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");
let purpleButton = document.getElementById("purpleButton");
let resetButton = document.getElementById("resetButton");



redButton.addEventListener("click", function(){
    mainHeading.style.color = "#e74c3c";
})

greenButton.addEventListener("click", function(){
    mainHeading.style.color = "#2ecc71";
})

blueButton.addEventListener("click", function(){
    mainHeading.style.color = "#3498db";
})

purpleButton.addEventListener("click", function(){
    mainHeading.style.color = "#9b59b6";
})

resetButton.addEventListener("click", function(){
    mainHeading.style.color = "#000";
})