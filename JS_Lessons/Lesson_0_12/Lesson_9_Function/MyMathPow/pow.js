let x = +prompt("Целое положительное число", 1);
let n = +prompt("Степень. Целое положительное число", 1);

function pow(x, n) {
    let pow = 1;

    for (let i = 0; i < n; i++) {
        pow *= x;
    }

    return pow;
}

alert("Результат " + pow(x, n));


