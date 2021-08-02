//Задерживающий декоратор

// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

function f(x) {
  alert(x);
}

function delay(func, time){
    setTimeout(function () {return func}, time);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
//
// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать
// все аргументы и контекст this.