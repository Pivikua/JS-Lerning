function random(min, max) {
    return Math.round(min + Math.random()*(max - min));
}

while (true) {
    alert(random(10, 100));
    alert( "\u{1F60D}" );
}