// 1. Все объекты в логическом контексте являются true. Существуют лишь их численные и строковые преобразования.
// 2. Численные преобразования происходят, когда мы вычитаем объекты или выполняем математические операции.
//          Например, объекты Date (мы рассмотрим их в статье Дата и время) могут вычитаться,
//          и результатом date1 - date2 будет временной отрезок между двумя датами.
// 3. Что касается строковых преобразований – они обычно происходят, когда мы выводим объект alert(obj),
//          а также в других случаях, когда объект используется как строка.

// Существуют три варианта преобразований («три хинта»), описанные в спецификации:

// "string" - Для преобразования объекта к строке, когда операция ожидает получить строку, например alert:

// вывод
alert(obj);

// используем объект в качестве имени свойства
anotherObj[obj] = 123;

// "number" - Для преобразования объекта к числу, в случае математических операций:

// явное преобразование
let num = Number(obj);

// математическое (исключая бинарный оператор "+")
let n = +obj; // унарный плюс
let delta = date1 - date2;

// сравнения больше/меньше
let greater = user1 > user2;

// "default" - Происходит редко, когда оператор «не уверен», какой тип ожидать.
// Например, бинарный плюс + может работать с обоими типами: строками (объединять их) и числами (складывать).
// Таким образом, и те, и другие будут вычисляться. Или когда происходит сравнение
// объектов с помощью нестрогого равенства == со строкой, числом или символом, и неясно,
// какое преобразование должно быть выполнено.

// бинарный плюс
let total = car1 + car2;

// obj == string/number/symbol
let user5 = 1;
if (user5 >= 1){ alert(" ") }

// Оператор больше/меньше <> также может работать как со строками, так и с числами.
// Однако, по историческим причинам он использует хинт «number», а не «default».

// В процессе преобразования движок JavaScript пытается найти и вызвать три следующих метода объекта:
//
// 1. Вызывает obj[Symbol.toPrimitive](hint) – метод с символьным ключом Symbol.toPrimitive (системный символ),
//      если такой метод существует, и передаёт ему хинт.
// 2. Иначе, если хинт равен "string" -
//         пытается вызвать obj.toString(), а если его нет, то obj.valueOf(), если он существует.
// 3.В случае, если хинт равен "number" или "default"
//         пытается вызвать obj.valueOf(), а если его нет, то obj.toString(), если он существует.


// Symbol.toPrimitive
/
// Начнём с универсального подхода – символа Symbol.toPrimitive:
//    метод с таким названием (если есть) используется для всех преобразований:

obj[Symbol.toPrimitive] = function (hint) {
    // должен вернуть примитивное значение
    // hint равно чему-то одному из: "string", "number" или "default"
};

// Для примера используем его в реализации объекта user:

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
        // если строкове значение то возвращаем строку name: "John"
        // иначе ваолзвращаем число this.money
    }
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// Как мы видим из кода, user преобразовывается либо в информативную читаемую строку,
// либо в денежный счёт в зависимости от значения хинта.
// Единственный метод user[Symbol.toPrimitive] смог обработать все случаи преобразований.

// Методы toString/valueOf

// Если нет метода Symbol.toPrimitive, движок JavaScript пытается найти эти методы и вызвать их следующим образом:
//
//     toString -> valueOf для хинта со значением «string».
//     valueOf -> toString – в ином случае.
//
// Для примера, используем их в реализации всё того же объекта user.
// Воспроизведём его поведение комбинацией методов toString и valueOf:

let user = {
    name: "John",
    money: 1000,

    // переопределяем методы

    // для хинта равного "string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // для хинта равного "number" или "default"
    valueOf() {
        return this.money;
    }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

// Существует всего 3 типа преобразований (хинтов):
//
//     "string" (для alert и других операций, которым нужна строка)
//     "number" (для математических операций)
//     "default" (для некоторых операций)
//
// В спецификации явно указано, какой хинт должен использовать каждый оператор.
// И существует совсем немного операторов, которые не знают, что ожидать,
// и используют хинт со значением "default". Обычно для встроенных объектов
// хинт "default" обрабатывается так же, как "number". Т
// аким образом, последние два очень часто объединяют вместе.
//
// Алгоритм преобразований к примитивам следующий:
//
// 1. Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует.
// 2. Иначе, если хинт равен "string"
//         происходит попытка вызвать obj.toString(), затем obj.valueOf(), смотря что есть.
// 3. Иначе, если хинт равен "number" или "default"
//         происходит попытка вызвать obj.valueOf(), затем obj.toString(), смотря что есть.
//
// На практике довольно часто достаточно реализовать только obj.toString()
// как «универсальный» метод для всех типов преобразований, возвращающий
// «читаемое» представление объекта, достаточное для логирования или отладки.