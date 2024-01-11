const numberBox = document.getElementById('guess');
const feedbackBox = document.getElementById('feedback');

const newNumber = Math.floor(Math.random()*100)

numberBox.addEventListener("change", checkNumber);

function checkNumber() {
    const guess = numberBox.value;
    if(guess <newNumber) {
    feedbackBox.innerText = "Too Low, Skill Issue Bruh";

    }
    else if (guess> newNumber) {
        feedbackBox.innerText = "Too High Lol, Skill Issue";
    }
    else { 
        feedbackBox.innerText = "Yep that right";
    }

}