const numberBox = document.getElementById('guess');
const feedbackBox = document.getElementById('feedback');
const inputBox = document.getElementById('input');
const func = document.getElementById('functionSelector');
const outputbox = document.getElementById('output');
const inputBox1 = document.getElementById('square'); 
const outputbox1 = document.getElementById('output1')

const newNumber = Math.floor(Math.random()*100)

numberBox.addEventListener("change", checkNumber);
inputBox.addEventListener("change", calculate);
func.addEventListener("change", calculate);
inputBox1.addEventListener("change", calculate1);


function checkNumber() {
    const guess = numberBox.value;
    if(guess <newNumber) {
    feedbackBox.innerText = "Too Low, Skill Issue Bruh, Get better at the game";

    }
    else if (guess> newNumber) {
        feedbackBox.innerText = "Too High Loool, Skill Issue bot";
    }
    else { 
        feedbackBox.innerText = "Omg, about time you got it!";
    }

}

function calculate() { 

    const num = inputBox.value;
    const funct= func.value;
    if (funct=="square"){
        outputbox.innerText = num*num;
    } else if (funct=="double"){
        outputbox.innerText=2*num;
    } else if (funct=="2x+7"){
        outputbox.innerText=2*num+7
    } else if (funct == "cube"){
        outputbox.innerText=num*num*num;
    } else{
        outputbox.innerText="something broke"
    }




}

function calculate1() { 

    const num = inputBox1.value;
    outputbox1.innerText = num*num; }
