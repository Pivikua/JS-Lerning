// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

function Calculator() {
    this.methods = { // метод у которого поля типа опрерации
        "-": (a, b) => a - b,  // имя поля : и его стрелочная функция
        "+": (a, b) => a + b,  // имя поля : и его стрелочная функция
    };

    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)){ // проверка на NaN
            return NaN;
        }

        return this.methods[op](a, b);  // запускаем метод с вычисляемым свойством
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;  // создаем метод с вычисляемым свойством.
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8