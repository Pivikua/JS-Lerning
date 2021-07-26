function extractCurrencyValue(str) {
    return parseInt(str.substring(1));
}

alert(extractCurrencyValue('$120'));