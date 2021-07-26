// Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат
// помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, current) => sum + current);
}

alert(sumSalaries(salaries)); // 650