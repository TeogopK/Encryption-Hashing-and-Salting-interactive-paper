function updateShift(shift) {
    const letters = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ';
    const originalLettersContainer = document.getElementById('originalLettersContainer');
    const encodedLettersContainer = document.getElementById('encodedLettersContainer');
    const shiftValue = document.getElementById('shiftValue');
    const encodedTextContainer = document.getElementById('encodedText');
  
    originalLettersContainer.innerHTML = '';
    encodedLettersContainer.innerHTML = '';
    shiftValue.textContent = shift;
  
    for (let i = 0; i < letters.length; i++) {
      const encodedIndex = (i + parseInt(shift) + 30) % 30;
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
    const letters = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ';
  
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= 'А' && text[i] <= 'Я') {
        const index = (letters.indexOf(text[i]) + parseInt(shift) + 33) % 33;
        encodedText.push(letters[index]);
      } else {
        encodedText.push(text[i]);
      }
    }
  
    const encodedTextContainer = document.getElementById('encodedText');
    encodedTextContainer.textContent = "Encoded Text: " + encodedText.join('');
  }
  
  // Initialize with shift 0
  updateShift(0);
  