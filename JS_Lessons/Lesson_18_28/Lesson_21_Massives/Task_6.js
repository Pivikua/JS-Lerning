function camelize(string) {
    return string.split('-')
        .map((item, index) => index == 0 ? item : item[0].toUpperCase().concat(item.slice(1)))
        .join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));