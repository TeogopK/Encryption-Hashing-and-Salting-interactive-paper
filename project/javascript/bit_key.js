function updateSteps() {
    var text = document.getElementById("bitKeyInputText").value;
    var key = document.getElementById("bitKeyKey").value;

    if (text === "") {
        clearOutputs();
        return;
    }

    var asciiArray = text.split('').map(function (char) {
        return char.charCodeAt(0);
    });
    var binaryArray = asciiArray.map(function (decimal) {
        return decimal.toString(2).padStart(8, '0');
    });

    var binaryString = binaryArray.join('');
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

function clearBitKeyTextBoxes() {
    document.getElementById("bitKeyInputText").value = "";
    document.getElementById("textToASCII").innerText = "";
    document.getElementById("ASCIIToBinary").innerText = "";

    document.getElementById("bitKeyKey").value = "";
    document.getElementById("encryptedBinary").innerText = "";
    document.getElementById("encryptedASCII").innerText = "";
    document.getElementById("encryptedText").innerText = "";
}

window.addEventListener('load', clearBitKeyTextBoxes);