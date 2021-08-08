// Сумма с произвольным количеством скобок
// Напишите функцию sum, которая бы работала следующим образом:
//
alert(sum(1)(2)); // 1 + 2
alert(sum(1)(2)(3)); // 1 + 2 + 3
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));
//
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

function sum(arg) {
    sum.total = sum.total ? sum.total + arg : arg;
    sum.toString = function() {
        return sum.total;
    };
    return sum;
}

