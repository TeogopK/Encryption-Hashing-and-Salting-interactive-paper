function updateSteps() {
    var text = document.getElementById("bitKeyInputText").value;
    var key = document.getElementById("bitKeyKey").value;

    var asciiArray = text.split('').map(function (char) {
        return char.charCodeAt(0);
    });
    var binaryArray = asciiArray.map(function (decimal) {
        return decimal.toString(2).padStart(8, '0');
    });

    var binaryString = binaryArray.join('');
    document.getElementById("textToASCII").value = asciiArray.join(', ');
    document.getElementById("ASCIIToBinary").value = binaryString;
    
    if (key === "") {
        return;
    }

    var encryptedBinaryString = '';
    for (var i = 0; i < binaryString.length; i++) {
        var encryptedBit = parseInt(binaryString[i]) | parseInt(key[i % key.length]);
        encryptedBinaryString += encryptedBit.toString();
    }

    document.getElementById("encryptedBinary").value = encryptedBinaryString;

    var encryptedAsciiArray = [];
    for (var k = 0; k < encryptedBinaryString.length; k += 8) {
        encryptedAsciiArray.push(parseInt(encryptedBinaryString.substr(k, 8), 2));
    }
    var encryptedText = String.fromCharCode.apply(null, encryptedAsciiArray);
    document.getElementById("encryptedASCII").value = encryptedAsciiArray.join(', ');
    document.getElementById("encryptedText").value = encryptedText;
}

function clearBitKeyTextBoxes() {
    document.getElementById("bitKeyInputText").value = "";
    document.getElementById("textToASCII").value = "";
    document.getElementById("ASCIIToBinary").value = "";

    document.getElementById("bitKeyKey").value = "";
    document.getElementById("encryptedBinary").value = "";
    document.getElementById("encryptedASCII").value = "";
    document.getElementById("encryptedText").value = "";
}

window.addEventListener('load', clearBitKeyTextBoxes);