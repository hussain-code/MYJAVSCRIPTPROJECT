//Grab dom elements form Html Elements
const word = document.getElementById('word');
const wrongletters = documnet.getElementById('wrongletters');
const message = documnet.getElementById('win-lose');
const popup = document.getElementById('popup-container');
const restartButton = document.getElementById('restart');
const notificatin= document.getElementById('slider-container');

const hangmanParts = document.querySelectorAll('.hangman-part');

const wordpool = ['javascript','Computer','Facebook','hangman'];
//selecting a word random from pool
let selectedword = wordpool[Math.random() * wordpool.length];
//array to classify the  input of the letter
const correctletters =[];
const incorrectletters =[];
// functin to display the word on the screen

function displayselectedword() {
  word.innerHTML = '
  s{selectedword} 
            ';
}

displayselectedword();