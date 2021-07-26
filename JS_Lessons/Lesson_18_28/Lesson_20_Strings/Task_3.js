function truncate(str, maxlength) {
    return str.length > maxlength ? str.substring(0, maxlength - 1).concat("…") : str;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));