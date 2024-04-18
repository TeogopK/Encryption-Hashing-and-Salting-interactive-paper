function analyzeText() {
    var text = document.getElementById('inputText').value;
    var symbolFrequency = {};

    // Count frequency of each symbol
    for (var i = 0; i < text.length; i++) {
        var symbol = text[i];
        if (symbolFrequency[symbol]) {
            symbolFrequency[symbol]++;
        } else {
            symbolFrequency[symbol] = 1;
        }
    }

    // Sort symbols by frequency
    var sortedSymbols = Object.keys(symbolFrequency).sort(function (a, b) {
        return symbolFrequency[b] - symbolFrequency[a];
    });

    // Display results
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h3>Symbol Frequency Analysis:</h3>';
    var table = '<table><tr><th>Symbol</th><th>Frequency</th></tr>';

    // Populate table with sorted symbols and their frequencies
    sortedSymbols.forEach(function (symbol) {
        table += '<tr><td>' + symbol + '</td><td>' + symbolFrequency[symbol] + '</td></tr>';
    });

    table += '</table>';
    resultsDiv.innerHTML += table;
}
