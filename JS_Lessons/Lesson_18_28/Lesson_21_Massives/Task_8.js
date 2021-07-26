// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
// и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
// Функция должна изменять принимаемый массив и ничего не возвращать.

let array = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    array = arr.filter(item => (item >= a) && (item <= b));
}

filterRangeInPlace(array, 1, 4);
alert(array);