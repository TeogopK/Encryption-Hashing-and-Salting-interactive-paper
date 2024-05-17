// Attach event listener to input element
document.getElementById('inputText').addEventListener('input', analyzeText);

// Define the analyzeText function
function analyzeText() {
    var text = document.getElementById('inputText').value;
    var symbolFrequency = {};

    // Count frequency of each symbol
    for (var i = 0; i < text.length; i++) {
        var symbol = text[i];
        if (symbol !== ' ') {
            if (symbolFrequency[symbol]) {
                symbolFrequency[symbol]++;
            } else {
                symbolFrequency[symbol] = 1;
            }
        }
    }

    // Sort symbols by frequency
    var sortedSymbols = Object.keys(symbolFrequency).sort(function (a, b) {
        return symbolFrequency[b] - symbolFrequency[a];
    });

    // Get the table body element
    var tableBody = document.querySelector('#frequencyTable tbody');

    // Clear previous table content
    tableBody.innerHTML = '';

    // Populate table with sorted symbols and their frequencies
    sortedSymbols.forEach(function (symbol) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = symbol;
        cell2.textContent = symbolFrequency[symbol];
    });
}

function clearAnalyzerTextBoxes() {
    document.getElementById("inputText").value = "";
}

window.addEventListener('load', clearAnalyzerTextBoxes);