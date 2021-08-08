// Создайте новый объект с помощью уже существующего
// важность: 5
//
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
//
// Можем ли мы сделать так?
function Obj() {
}

Obj.prototype = {
    constructor: Obj,
    inst: true
};

let obj = new Obj();

let obj2 = new obj.constructor();

alert(obj2.inst == true);

// Приведите пример функции-конструктора для объекта obj,
// с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.