const LATIN_ALPHABET_KEY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const CYRILLIC_ALPHABET_KEY = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ';

function encryptKey() {
  var messageKey = document.getElementById('messageInputKey').value;
  var keyKey = document.getElementById('keyInputKey').value.toUpperCase();
  var alphabetTypeKey = document.getElementById('alphabetSelectKey').value;
  var alphabetKey = (alphabetTypeKey === 'latin') ? LATIN_ALPHABET_KEY : CYRILLIC_ALPHABET_KEY;

  var resultKey = '';
  var keyIndexKey = 0;
  for (var i = 0; i < messageKey.length; i++) {
    var charKey = messageKey.charAt(i);
    var charIndexKey = alphabetKey.indexOf(charKey.toUpperCase());
    if (charIndexKey !== -1) { // Check if it's a letter
      var shiftKey = alphabetKey.indexOf(keyKey.charAt(keyIndexKey).toUpperCase());
      var encryptedIndexKey = (charIndexKey + shiftKey) % alphabetKey.length;
      var encryptedCharKey = (charKey === charKey.toLowerCase()) ? alphabetKey.charAt(encryptedIndexKey).toLowerCase() : alphabetKey.charAt(encryptedIndexKey);
      resultKey += encryptedCharKey;
      keyIndexKey = (keyIndexKey + 1) % keyKey.length;
    } else {
      resultKey += charKey;
    }
  }
  
  document.getElementById('resultKey').value = resultKey;
}
