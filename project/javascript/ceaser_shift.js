const LATIN_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const CYRILLIC_ALPHABET = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ'

const DEFAULT_VALUE_SHIFT = 3

// Updates the visual cipher
function updateShift() {
  const alphabetSelect = document.getElementById('alphabetSelect');
  const selectedAlphabet = alphabetSelect.value;
  let letters = '';

  letters = (selectedAlphabet === 'latin') ? LATIN_ALPHABET : CYRILLIC_ALPHABET;

  const shiftRange = document.getElementById('shiftRange');
  shiftRange.max = letters.length - 1;
  shiftRange.min = -(letters.length - 1);
  shiftRange.value = shiftRange.value % letters.length

  const originalLettersContainer = document.getElementById('originalLettersContainer');
  const encodedLettersContainer = document.getElementById('encodedLettersContainer');

  originalLettersContainer.innerHTML = '';
  encodedLettersContainer.innerHTML = '';
  shiftValue.textContent = shiftRange.value;

  for (let i = 0; i < letters.length; i++) {
    const encodedIndex = (i + parseInt(shiftRange.value) + letters.length) % letters.length;
    const letter = letters[i];
    const encodedLetter = letters[encodedIndex];

    const originalLetterDiv = document.createElement('section');
    originalLetterDiv.classList.add('letter');
    originalLetterDiv.textContent = letter;
    originalLettersContainer.appendChild(originalLetterDiv);

    const encodedLetterDiv = document.createElement('section');
    encodedLetterDiv.classList.add('letter');
    encodedLetterDiv.textContent = encodedLetter;
    encodedLettersContainer.appendChild(encodedLetterDiv);
  }

  encodeText(shiftRange.value, letters);
}

// Encodes the text
function encodeText(shift, letters) {
  const textInput = document.getElementById('textInput');
  const text = textInput.value.toUpperCase();

  const encodedText = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= letters[0] && text[i] <= letters[letters.length - 1]) {
      const index = (letters.indexOf(text[i]) + parseInt(shift) + letters.length) % letters.length;
      encodedText.push(letters[index]);
    } else {
      encodedText.push(text[i]);
    }
  }

  document.getElementById('encodedText').value = encodedText.join('');
}

// Function to set default values on page load
function setDefaultValues() {
  document.getElementById('shiftRange').value = DEFAULT_VALUE_SHIFT;
  document.getElementById('textInput').value = '';
  document.getElementById('alphabetSelect').selectedIndex = 0;

  updateShift();
}

// Default page loader
window.addEventListener('load', setDefaultValues);