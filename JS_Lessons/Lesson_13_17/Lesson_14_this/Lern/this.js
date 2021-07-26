"use strict";
// Методы классов JS

// обычная запись
let userRegular = {
    sayHi: function () {
        alert("Hi, all!");
    }
};

// сокращенная запись
let userShort = {
    sayHi() {
        alert("Hi, all!");
    }
};

// Ключевое слово «this» в методах
let userWithMethod = {
    name: "John",
    age: 45,
    sayHi() {
        alert("Name " + this.name + " - " + this.age + " year.")
    }
};

userWithMethod.sayHi();

// В JavaScript ключевое слово «this» ведёт себя иначе,
// чем в большинстве других языков программирования.
// Оно может использоваться в любой функции

let user = { name: "Джон" };
let admin = { name: "Админ" };

function andSayHi() {
    alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

// Неважен способ доступа к методу - через точку или квадратные скобки.
admin['f']();

// Вызов без объекта: this == undefined

function sayHi() {
  alert(this);
}

sayHi(); // undefined

admin.method = sayHi();
admin.method();

//