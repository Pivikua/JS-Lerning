let log_in = prompt("Введите логин");
let pass;

if (log_in == "Админ") {

    pass = prompt("Введите пароль");

    if (pass == "Я главный") {
        alert("Здравствуйте!");
    } else if(pass == null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }

} else if (log_in == null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}
