const colorBox = document.getElementById('color-box');
const colorInput = document.getElementById('color-input');
const checkButton = document.getElementById('check-button');
const resultMessage = document.getElementById('result-message');
const endMessage = document.getElementById('end-message');
const playAgainButton = document.getElementById('play-again-button');

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray'];
let currentRound = 0;

playAgainButton.addEventListener('click', () => {
  currentRound = 0;
  generateNextRound();
  endMessage.classList.add('hidden');
  colorInput.disabled = false;
  checkButton.disabled = false;
});

checkButton.addEventListener('click', () => {
  const userColorName = colorInput.value.trim().toLowerCase();
  
  if (userColorName === colors[currentRound]) {
    resultMessage.textContent = 'VOCÊ ACERTOU. PARABÉNS!';
    resultMessage.style.color = 'green';
    currentRound++;
    
    if (currentRound < colors.length) {
      generateNextRound();
    } else {
      showCongratulations();
    }
  } else {
    resultMessage.textContent = 'VOCÊ ERROU. TENTE NOVAMENTE!';
    resultMessage.style.color = 'red';
  }
});

function generateNextRound() {
  colorBox.style.backgroundColor = colors[currentRound];
  colorInput.value = '';
  resultMessage.textContent = '';
  colorInput.focus();
}

function showCongratulations() {
  endMessage.classList.remove('hidden');
  colorBox.style.backgroundColor = '';
  colorInput.disabled = true;
  checkButton.disabled = true;
}

generateNextRound();
