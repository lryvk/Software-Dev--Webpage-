var colorTable = {
    "Sad": "blue" ,
    "Tired": "black" ,
    "Mad": "red" ,
    "Joyful": "orange" ,
}

function changeMood() {
    const word= textBox1.value;
    console.log(word)
    if (word in colorTable) {
    console.log(colorTable[word])
        colorBox.style.backgroundColor = colorTable[word];   
    }
}

const textBox1 = document.getElementById('boxtext');
textBox1.addEventListener("input", changeMood);
const colorBox = document.getElementById('box');