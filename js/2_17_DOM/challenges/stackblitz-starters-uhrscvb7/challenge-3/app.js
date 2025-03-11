/**
 * Write your challenge solution here
 */


let nameInput = document.getElementById("nameInput");
let jobInput = document.getElementById("jobInput");
let ageInput = document.getElementById("ageInput");
let bioInput = document.getElementById("bioInput");

let nameDisplay = document.getElementById("nameDisplay");
let jobDisplay = document.getElementById("jobDisplay");
let ageDisplay = document.getElementById("ageDisplay");
let bioDisplay = document.getElementById("bioDisplay");

nameInput.addEventListener("input", function() {
    nameDisplay.innerText = nameInput.value;

    if (nameInput.value == "") {
        nameDisplay.innerText = "Not provided";
    }
})

jobInput.addEventListener("input", function() {
    jobDisplay.innerText = jobInput.value;

    if (jobInput.value == "") {
        jobDisplay.innerText = "Not provided";
    }
})

ageInput.addEventListener("input", function() {
    ageDisplay.innerText = ageInput.value;

    if (ageInput.value == "") {
        ageDisplay.innerText = "Not provided";
    }
})

bioInput.addEventListener("input", function() {
    bioDisplay.innerText = bioInput.value;

    if (bioInput.value == "") {
        bioDisplay.innerText = "Not provided";
    }
})