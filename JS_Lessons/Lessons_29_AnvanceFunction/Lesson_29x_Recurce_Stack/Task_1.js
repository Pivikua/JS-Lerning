// Вычислить сумму чисел до данного
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:

//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.

// Пример работы вашей функции:

function sumTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function rSumTo(n) {
    if (n == 1) {
        return n;
    } else {
        return n + rSumTo(n - 1);
    }
    return n;
}

function apSumTo(n) {
    return (2 * 1 + (n - 1) * 1) / 2 * n;
}

let time = 0, timer = 0, timeap = 0;
for (let i = 0; i < 10000; i++) {

    let start = new Date();
    sumTo(10000);
    let finish = new Date();
    time += (finish - start);

    let startr = new Date();
    rSumTo(10000);
    let finishr = new Date();
    timer += (finishr - startr);

    let startap = new Date();
    apSumTo(10000);
    let finishap = new Date();
    timeap += (finishap - startap);
}

alert(`${time} - ${timer} - ${timeap}`);

// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
//
// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?