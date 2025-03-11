/**
 * Write your challenge solution here
 */

let bulb = document.getElementById('bulb');
let toggleButton = document.getElementById('toggleButton');
let status = document.getElementById('status');

toggleButton.addEventListener('click', function() {

    if (toggleButton.innerText == "Turn On") {
        console.log('Button clicked');
        bulb.style.backgroundColor = "yellow";
        bulb.style.boxShadow = "0 0 10px yellow";
        toggleButton.innerText = "Turn Off";
        status.innerText = "On";
        document.body.classList.remove('dark-mode')
    } else {
        bulb.style.backgroundColor = "gray";
        bulb.style.boxShadow = "0 0 0px gray";
        toggleButton.innerText = "Turn On";
        status.innerText = "Off";
        document.body.classList.toggle('dark-mode')
    }
    
});