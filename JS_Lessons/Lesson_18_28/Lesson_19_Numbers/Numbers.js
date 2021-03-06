alert( 9999999999999999 ); // покажет 10000000000000000

// Проверка: isFinite и isNaN
//
// Помните эти специальные числовые значения?
//
//      Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности
//      как математическая бесконечность ∞.
//      NaN представляет ошибку.
//
// Эти числовые значения принадлежат типу number, но они не являются «обычными» числами,
// поэтому есть функции для их проверки:
//
//     isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

// Нужна ли нам эта функция? Разве не можем ли мы просто сравнить === NaN?
// К сожалению, нет. Значение NaN уникально тем, что оно не является равным ни чему другому,
// даже самому себе:

alert( NaN === NaN ); // false

// isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом,
// т.е. не NaN/Infinity/-Infinity:

    alert( isFinite("15") ); // true
    alert( isFinite("str") ); // false, потому что специальное значение: NaN
    alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity

// Иногда isFinite используется для проверки, содержится ли в строке число:

let num = +prompt("Enter a number", '');

//вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число

alert( isFinite(num) );

// Помните, что пустая строка интерпретируется как 0 во всех числовых функциях, включаяisFinite.

// Существует специальный метод Object.is, который сравнивает значения примерно как ===,
// но более надёжен в двух особых ситуациях:
//
//  1. Работает с NaN: Object.is(NaN, NaN) === true, здесь он хорош.
//  2. Значения 0 и -0 разные: Object.is(0, -0) === false, это редко используется,
//      но технически эти значения разные.
//
// Во всех других случаях Object.is(a, b) идентичен a === b.

// parseInt и parseFloat
//
// Для явного преобразования к числу можно использовать + или Number(). Если строка не является в точности числом, то результат будет NaN:

alert( +"100px" ); // NaN

// Единственное исключение — это пробелы в начале строки и в конце, они игнорируются.
//
// В реальной жизни мы часто сталкиваемся со значениями у которых есть единица измерения, например "100px" или "12pt" в CSS. Также во множестве стран символ валюты записывается после номинала "19€". Так как нам получить числовое значение из таких строк?
//
// Для этого есть parseInt и parseFloat.
//
// Они «читают» число из строки. Если в процессе чтения возникает ошибка, они возвращают полученное до ошибки число. Функция parseInt возвращает целое число, а parseFloat возвращает число с плавающей точкой:

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

// Функции parseInt/parseFloat вернут NaN, если не смогли прочитать ни одну цифру:

alert( parseInt('a123') ); // NaN, на первом символе происходит остановка чтения

// Второй аргумент parseInt(str, radix)
// Функция parseInt() имеет необязательный второй параметр.
// Он определяет систему счисления, таким образом parseInt может также читать строки
// с шестнадцатеричными числами, двоичными числами и т.д.:

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, без 0x тоже работает

alert( parseInt('2n9c', 36) ); // 123456