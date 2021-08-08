//Разница между вызовами

// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi();  // Rabbit
Rabbit.prototype.sayHi();   // undefined
Object.getPrototypeOf(rabbit).sayHi();  // undefined
rabbit.__proto__.sayHi();  // undefined