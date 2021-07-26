// Форматирование относительной даты

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm".
//          А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    let deltaTime = new Date().getTime() - date.getTime();
    console.log(date.getTime() + " -- " + new Date().getTime() + " -- " + deltaTime);
    return deltaTime <= 1000 ? `прямо сейчас` :
        (1000 < deltaTime & deltaTime <= 30000) ? `${deltaTime / 1000} сек. назад` :
            (30000 < deltaTime & deltaTime <= 3600000) ? `${deltaTime / 60000} мин. назад` :
                date.toLocaleString();

}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));