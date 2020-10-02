//Grab dom elements form Html Elements
const word = document.getElementById('word');
const wrongletters = document.getElementById('wrong-letters');
const message = document.getElementById('win-lose');
const popup = document.getElementById('popup-container');
const restartButton = document.getElementById('restart');
const notificatin= document.getElementById('slider-container');

const hangmanParts = document.querySelectorAll('.hangman-part');

const wordpool = ['javascript','computer','facebook','hangman'];
//selecting a word random from pool
let selectedword = wordpool[Math.random() * wordpool.length];
//array to classify the  input of the letter
const correctletters =['a','o','i','e'];
const incorrectletters =[];
// functin to display the word on the screen

function displayselectedword() {
  word.innerHTML= `
    ${selectedword
      .split ('')
      . map(
         letter => `
         <span class="letter">
          ${correctletters.includes(letter) ? letter : '' }
         </span>
         `
      )
      .join('')
    } 
  `;
console.log(word.innerText);

}


displayselectedword();