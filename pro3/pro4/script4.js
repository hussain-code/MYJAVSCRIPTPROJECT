//Grab dom elements form Html Elements
const word = document.getElementById('word');
const wrongletters = document.getElementById('wrong-letters');
const message = document.getElementById('win-lose');
const popup = document.getElementById('popup-container');
const restartButton = document.getElementById('restart');
const notification= document.getElementById('slider-container');

const hangmanParts = document.querySelectorAll('.hangman-part');

const wordPool = ['facebook','javascript','computer','hangman'];
//selecting a word random from pool
let selectedword = wordPool[Math.floor(Math.random() * wordPool.length)];
//array to classify the  input of the letter
const correctletters = ['a','b'];
const incorrectletters = [];
// functin to display the word on the screen

function displayselectedword() {
  word.innerHTML= `
    ${selectedword
      .split('')
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
  const wordtext = word.innerText.replace(/\n/g,'');
 //console.log(word.innerText);
 //console.log(wordtext);

    if ( wordtext === selectedword ) {
      message.innerText = 'You win!';
      popup.style.display = 'flex';
    }


};
//Functin to Display the sliding notificatin

function showNotification() {
  notification.classList.add('show');

  setTimeout( () => {notification.classList.remove('show');}, 3000) 
    
 // notification.classList.remove('show');
}
// fUNCTION TO uPDATE  INCORRECTLETTES
  function updateWorngletters() {
    wrongletters.innerHTML = `
    ${incorrectletters.length > 0 ? `<P>Wrong</P>` : ''}
    ${incorrectletters.map ( letter => `<span>${letter}</span>)`)}
    `;
    hangmanParts.forEach( (part,index) => {
      const error = incorrectletters.length;
      if (index < error ) {
        part.style.display ='block';
      } else {
        part.style.display= 'none';
      }
    });
    //SHOW POPUP IF LOST 
    
    if(incorrectletters.length === hangmanParts.length) {
      message.innerText = 'you lost!';
      popup.style.display = 'flex';
    }
  }


//Event Handler
//1. Event handler for keyboard button Press
window.addEventListener('keydown', e => {
  if ( e.keyCode >= 65 && e.keyCode <= 90 ) {
    const letter = e.key;
    
    if ( selectedword.includes(letter) ){

      if(!correctletters.includes(letter)) {
        correctletters.push(letter);
        displayselectedword();
      } else {
        showNotification();
      }
    } else {
      if (! incorrecletters.includes(letter)) {
        incorrectletters.push(letter);
        updateWorngletters();
      } else {
        showNotification();
      }
    }
  }
})

displayselectedword();