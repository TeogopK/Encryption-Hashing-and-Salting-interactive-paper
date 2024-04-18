
const LATIN_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const CYRILLIC_ALPHABET = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ';

function encrypt() {
  var message = document.getElementById('messageInput').value;
  var key = document.getElementById('keyInput').value.toUpperCase();
  var alphabetType = document.getElementById('alphabetSelect').value;
  var alphabet = (alphabetType === 'latin') ? LATIN_ALPHABET : CYRILLIC_ALPHABET;

  var result = '';
  var keyIndex = 0;
  for (var i = 0; i < message.length; i++) {
    var char = message.charAt(i);
    var charIndex = alphabet.indexOf(char.toUpperCase());
    if (charIndex !== -1) { // Check if it's a letter
      var shift = alphabet.indexOf(key.charAt(keyIndex).toUpperCase());
      var encryptedIndex = (charIndex + shift) % alphabet.length;
      var encryptedChar = (char === char.toLowerCase()) ? alphabet.charAt(encryptedIndex).toLowerCase() : alphabet.charAt(encryptedIndex);
      result += encryptedChar;
      keyIndex = (keyIndex + 1) % key.length;
    } else {
      result += char;
    }
  }
  
  document.getElementById('result').value = result;
}