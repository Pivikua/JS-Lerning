// Давайте произведём 5 операций с массивом.
//
//     Создайте массив styles с элементами «Джаз» и «Блюз».
//     Добавьте «Рок-н-ролл» в конец.
//     Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     Удалите первый элемент массива и покажите его.
//     Вставьте «Рэп» и «Регги» в начало массива.

let styles = ["Djaz", "Bluze"];
styles.push("Rock&Roll");

function centr(massive) {
    return massive.length % 2 == 0 ? Math.round(massive.length / 2) : Math.round(massive.length / 2) + 1;
}

styles[centr(styles)] = "Klassic";

alert(styles.shift());

styles.unshift("Rep", "Reaggy");

alert(styles);