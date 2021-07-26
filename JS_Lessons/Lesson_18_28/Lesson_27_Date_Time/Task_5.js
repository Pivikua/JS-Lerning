// Последнее число месяца?
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.

//     year – год из четырёх цифр, например, 2012.
//     month – месяц от 0 до 11.

// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month){
    return Math.floor((new Date(year, month + 1) - new Date(year, month))/86400000);
}

alert(getLastDayOfMonth(2012, 1));

