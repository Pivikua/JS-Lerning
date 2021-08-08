// Установка и уменьшение значения счётчика

// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
//
//     counter() должен возвращать следующее значение (как и раньше).
//     counter.set(value) должен устанавливать счётчику значение value.
//     counter.decrease() должен уменьшать значение счётчика на 1.
//
// Посмотрите код из песочницы с полным примером использования.
//
// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием,
// так и свойством функции. Или сделать два варианта решения: и так, и так.

function makeCounter() {

    // функция counter() как объект
    function counter() {
    };

    // добавляем объекту свойства функции
    counter.incrase = function () {
        return counter.count++;
    };

    // добавляем объекту свойства функции
    counter.set = function (value) {
        return counter.count = value;
    };

    // добавляем объекту свойства функции
    counter.decrease = function () {
        return counter.count--;
    };

    counter.show = function () {
        return counter.count;
    };

    return counter;
}

let counter = makeCounter();

//counter.count = 10;
counter.set(12);
alert( counter.show() );
counter.incrase();
alert( counter.show() );
counter.incrase();
alert( counter.show() );
counter.incrase();
alert( counter.show() );
counter.decrease();
alert( counter.show() );