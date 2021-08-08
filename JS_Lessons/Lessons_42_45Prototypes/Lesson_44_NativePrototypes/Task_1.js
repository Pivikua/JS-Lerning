// Добавить функциям метод "f.defer(ms)"

// Добавьте всем функциям в прототип метод defer(ms),
// который вызывает функции через ms миллисекунд.
//
// После этого должен работать такой код:

function h() {
  alert("Hello!");
}

function w() {
    alert("World!");
}

function a() {
    alert("Again");
}

//f.defer = function(n){setTimeout(this, n)}; //добавил свойство которое является функцией
// или
Function.prototype.defer = function(n){setTimeout(this, n)};

h.defer(1000); // выведет "Hello!" через 1 секунду
w.defer(3000);
a.defer(5000);