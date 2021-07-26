// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
//
// Функция должна возвращать новый массив и не изменять исходный!!

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a) && (item <= b));
}

alert(arr);
alert(filterRange(arr, 1, 4));
