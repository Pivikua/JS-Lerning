function ucFirst(str) {
    return str.substring(0, 1).toLocaleUpperCase().concat(str.substring(1, str.length));
}

alert(ucFirst(""));