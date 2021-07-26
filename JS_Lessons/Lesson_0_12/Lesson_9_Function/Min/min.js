function min(one, two) {
    return one < two ? one : two;
}

let one = +prompt("Введите первое число");
let two = +prompt("Введите второе число");

alert("Меньшее число " + min(one, two));