// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8, -2, 4];

arr.sort((a, b) => a - b);
// можно использовать не только -1, 0, 1 но и любые отриц и полож значения

alert(arr); // 8, 5, 2, 1, -10