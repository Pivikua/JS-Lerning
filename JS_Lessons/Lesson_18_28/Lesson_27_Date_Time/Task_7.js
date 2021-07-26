// Сколько секунд осталось до завтра?

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600

// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


function getSecondsToTomorrow(){
    let tomorrow = new Date(now.setDate(now.getDate() + 1)).setHours(0,0,0,0);
    return (tomorrow - now)/1000/3600;
}

alert(getSecondsToTomorrow());