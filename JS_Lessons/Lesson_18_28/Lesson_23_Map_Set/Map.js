// Map
//
// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
//
// Методы и свойства:
//
//     new Map() – создаёт коллекцию.
//     map.set(key, value) – записывает по ключу key значение value.
//     map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
//     map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
//     map.delete(key) – удаляет элемент по ключу key.
//     map.clear() – очищает коллекцию от всех элементов.
//     map.size – возвращает текущее количество элементов.

let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1)); // "num1"
alert(map.get("1")); // "str1"
alert(map.get(true)); // "str1"
alert(map.size); // 3

//Map может использовать объекты в качестве ключей.

let sarah = { name: "Sarah" };
// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();
// объект sarah - это ключ для значения в объекте Map
visitsCountMap.set(sarah, 123);
alert(visitsCountMap.get(sarah)); // 123

// Использование объектов в качестве ключей – это одна из известных
// и часто применяемых возможностей объекта Map. При строковых ключах обычный объект Object
// может подойти, но для ключей-объектов – уже нет.
//
// Попробуем заменить Map на Object в примере выше:

let john = { name: "John" };
let visitsCountObj = {}; // попробуем использовать объект
alert(visitsCountObj);
visitsCountObj[john] = 123; // возьмём объект john как ключ
// Вот как это было записано!
alert( visitsCountObj["[object Object]"] ); // 123

// Так как visitsCountObj – это объект, то все ключи он автоматически преобразует к строке,
// в итоге получился строковой ключ "[object Object]"

//Как объект Map сравнивает ключи

// Чтобы сравнивать ключи, объект Map использует алгоритм SameValueZero.
// Это почти такое же сравнение, что и ===, с той лишь разницей,
// что NaN считается равным NaN. Так что NaN также может использоваться в качестве ключа.
// Этот алгоритм не может быть заменён или модифицирован.

// Цепочка вызовов
// Каждый вызов map.set возвращает объект map, так что мы можем объединить вызовы в цепочку:

map.set("1", "str1")
  .set(1, "num1")
  .set(true, "bool1");

// Перебор Map

// Для перебора коллекции Map есть 3 метода:

//     map.keys() – возвращает итерируемый объект по ключам,
//     map.values() – возвращает итерируемый объект по значениям,
//     map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
  alert(entry); // огурец,500 (и так далее)
}

// Используется порядок вставки
// В отличие от обычных объектов Object, в Map перебор происходит в том же порядке,
// в каком происходило добавление элементов.

// Кроме этого, Map имеет встроенный метод forEach, схожий со встроенным методом массивов Array:

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // огурец: 500 и так далее
});

// Object.entries: Map из Object

// При создании Map мы можем указать массив (или другой итерируемый объект)
// с парами ключ-значение для инициализации, как здесь:

// массив пар [ключ, значение]
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1

// Если у нас уже есть обычный объект, и мы хотели бы создать Map из него,
// то поможет встроенный метод Object.entries(obj), который получает объект и
// возвращает массив пар ключ-значение для него, как раз в этом формате.

// Так что мы можем создать Map из обычного объекта следующим образом:

let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

// Здесь Object.entries возвращает массив пар ключ-значение:
// [ ["name","John"], ["age", 30] ].

// Object.fromEntries: Object из Map

// Мы только что видели, как создать Map из обычного объекта при помощи Object.entries(obj).
// Есть метод Object.fromEntries, который делает противоположное: получив массив пар вида [ключ, значение], он создаёт из них объект:

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2

// Мы можем использовать Object.fromEntries, чтобы получить обычный объект из Map.
// К примеру, у нас данные в Map, но их нужно передать в сторонний код,
// который ожидает обычный объект.

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2

// Вызов map.entries() возвращает массив пар ключ/значение,
// как раз в нужном формате для Object.fromEntries.
// Мы могли бы написать строку (*) ещё короче:

let obj = Object.fromEntries(map); // убрать .entries()

// Это то же самое, так как Object.fromEntries ожидает перебираемый объект в качестве аргумента,
// не обязательно массив. А перебор map как раз возвращает пары ключ/значение, так же,
// как и map.entries(). Так что в итоге у нас будет обычный объект с теми же ключами/значениями,
// что и в map.

// Итого

// Map – коллекция пар ключ-значение.

// Методы и свойства:

//     new Map([iterable]) – создаёт коллекцию, можно указать перебираемый объект (обычно массив)
//          из пар [ключ,значение] для инициализации.
//     map.set(key, value) – записывает по ключу key значение value.
//     map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
//     map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
//     map.delete(key) – удаляет элемент по ключу key.
//     map.clear() – очищает коллекцию от всех элементов.
//     map.size – возвращает текущее количество элементов.

// Отличия от обычного объекта Object:

//     Что угодно может быть ключом, в том числе и объекты.
//     Есть дополнительные методы, свойство size.