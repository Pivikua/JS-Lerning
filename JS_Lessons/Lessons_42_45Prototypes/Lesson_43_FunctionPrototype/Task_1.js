// Изменяем "prototype"

// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
//
// Сначала у нас есть такой код:

// function Rabbit() {} // Создаем пустую функцию Rabbit
//
// Rabbit.prototype = { // открываем прототип функции по умолчанию
//   eats: true         // добавляем свойство
// };
//
// let rabbit = new Rabbit();  // создаем объект функции
//
// alert( rabbit.eats ); // true  // вызываем добавленно свойство

//     Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
//
// let rabbit = new Rabbit();
//
// Rabbit.prototype = {};  // добавлем в совйство prototype пустое совество
//                         // которое не перезаписывает ранее объявленное
//
// alert( rabbit.eats ); // true

// …А если код такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
//
// let rabbit = new Rabbit();
//
// Rabbit.prototype.eats = false; // меняем свойство eats на false
//
// alert( rabbit.eats ); // false

// Или такой (заменили одну строчку)?
//
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
//
// let rabbit = new Rabbit();
//
// delete rabbit.eats;
//
// alert( rabbit.eats ); // true?

// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined