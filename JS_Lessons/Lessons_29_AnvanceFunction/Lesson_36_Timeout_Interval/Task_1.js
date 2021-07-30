// Вывод каждую секунду
// Напишите функцию printNumbersInterval(from, to), которая выводит число каждую секунду,
// начиная от from и заканчивая to.
//
// Сделайте два варианта решения.
//
//     Используя setInterval.
//     Используя рекурсивный setTimeout.

// function printNumbersInterval(from, to) {
//     let number = from;
//
//     function everySec() {
//         if (number <= to) {
//             console.log(number);
//             number++;
//         } else {
//             return
//         }
//     }
//
//     setInterval(everySec, 1000)
// }
//
// printNumbersInterval(10, 20);

function printNumbersTimeOutR(from, to) {
    let number = from;
    let timer = setTimeout(function everySec() {
        if (number <= to) {
            console.log(number);
            number++;
            timer = setTimeout(everySec, 1000)
        } else {
            return;
        }
    }, 1000);
}

printNumbersTimeOutR(30, 40);