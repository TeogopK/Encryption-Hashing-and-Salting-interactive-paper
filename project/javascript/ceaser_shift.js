const LATIN_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const CYRILLIC_ALPHABET = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ'

function updateShift(shift) {
  const alphabetSelect = document.getElementById('alphabetSelect');
  const selectedAlphabet = alphabetSelect.value;
  let letters = '';

  if (selectedAlphabet === 'latin') {
    letters = LATIN_ALPHABET;
  } else if (selectedAlphabet === 'cyrillic') {
    letters = CYRILLIC_ALPHABET;
  } else {
    // Default to Latin alphabet if invalid option
    letters = LATIN_ALPHABET;
  }

  const originalLettersContainer = document.getElementById('originalLettersContainer');
  const encodedLettersContainer = document.getElementById('encodedLettersContainer');
  const shiftValue = document.getElementById('shiftValue');
  const encodedTextContainer = document.getElementById('encodedText');

  originalLettersContainer.innerHTML = '';
  encodedLettersContainer.innerHTML = '';
  shiftValue.textContent = shift;

  for (let i = 0; i < letters.length; i++) {
    const encodedIndex = (i + parseInt(shift) + letters.length) % letters.length;
    const letter = letters[i];
    const encodedLetter = letters[encodedIndex];

    const originalLetterDiv = document.createElement('div');
    originalLetterDiv.classList.add('letter');
    originalLetterDiv.textContent = letter;
    originalLettersContainer.appendChild(originalLetterDiv);

    const encodedLetterDiv = document.createElement('div');
    encodedLetterDiv.classList.add('letter');
    encodedLetterDiv.textContent = encodedLetter;
    encodedLettersContainer.appendChild(encodedLetterDiv);
  }

  // Encode the text in the text input
  encodeText(shift);
}

function encodeText(shift) {
  const textInput = document.getElementById('textInput');
  const encodedText = [];
  const text = textInput.value.toUpperCase();
  const alphabetSelect = document.getElementById('alphabetSelect');
  const selectedAlphabet = alphabetSelect.value;
  let letters = '';

  if (selectedAlphabet === 'latin') {
    letters = LATIN_ALPHABET;
  } else if (selectedAlphabet === 'cyrillic') {
    letters = CYRILLIC_ALPHABET;
  } else {
    // Default to Latin alphabet if invalid option
    letters = LATIN_ALPHABET;
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= letters[0] && text[i] <= letters[letters.length - 1]) {
      const index = (letters.indexOf(text[i]) + parseInt(shift) + letters.length) % letters.length;
      encodedText.push(letters[index]);
    } else {
      encodedText.push(text[i]);
    }
  }

  const encodedTextContainer = document.getElementById('encodedText');
  encodedTextContainer.textContent = "Криптираното съобщение: " + encodedText.join('');
}

// Function to set default values on page load
function setDefaultValues() {
  const shiftRange = document.getElementById('shiftRange');
  const textInput = document.getElementById('textInput');

  // Set default shift value
  shiftRange.value = 3;

  // Set default text input value
  textInput.value = '';

  // Update shift and encoded text
  updateShift(shiftRange.value);
}

// Add an event listener to call setDefaultValues when the page is loaded
window.addEventListener('load', setDefaultValues);