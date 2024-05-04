function updateSteps() {
    var text = document.getElementById("bitKey_inputText").value;
    var key = document.getElementById("bitKey_encryptionKey").value;

    if (text === "") {
        clearOutputs();
        return;
    }

    var asciiArray = text.split('').map(function(char) {
        return char.charCodeAt(0);
    });
    var binaryArray = asciiArray.map(function(decimal) {
        return decimal.toString(2).padStart(8, '0');
    });
    var binaryString = binaryArray.join('');
    document.getElementById("originalText").innerText = text;
    document.getElementById("textToASCII").innerText = asciiArray.join(', ');
    document.getElementById("ASCIIToBinary").innerText = binaryString;

    if (key === "") {
        clearEncryptedOutputs();
        return;
    }

    var encryptedBinaryString = '';
    for (var i = 0; i < binaryString.length; i++) {
        var encryptedBit = parseInt(binaryString[i]) | parseInt(key[i % key.length]);
        encryptedBinaryString += encryptedBit.toString();
    }

    document.getElementById("encryptedBinary").innerText = encryptedBinaryString;

    var encryptedAsciiArray = [];
    for (var k = 0; k < encryptedBinaryString.length; k += 8) {
        encryptedAsciiArray.push(parseInt(encryptedBinaryString.substr(k, 8), 2));
    }
    var encryptedText = String.fromCharCode.apply(null, encryptedAsciiArray);
    document.getElementById("encryptedASCII").innerText = encryptedAsciiArray.join(', ');
    document.getElementById("encryptedText").innerText = encryptedText;
}

function clearOutputs() {
    document.getElementById("originalText").innerText = "";
    document.getElementById("textToASCII").innerText = "";
    document.getElementById("ASCIIToBinary").innerText = "";
    document.getElementById("bitKey_inputText").value = ""; // Clear the input text
    document.getElementById("bitKey_encryptionKey").value = ""; // Clear the encryption key
}

function clearEncryptedOutputs() {
    document.getElementById("encryptedBinary").innerText = "";
    document.getElementById("encryptedASCII").innerText = "";
    document.getElementById("encryptedText").innerText = "";
}

window.onload = function() {
    clearOutputs();
};
