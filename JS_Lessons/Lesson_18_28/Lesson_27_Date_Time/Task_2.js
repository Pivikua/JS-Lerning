// Покажите день недели

// Напишите функцию getWeekDay(date),
// показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date){
    // let options = { weekday: 'narrow', year: 'numeric', month: 'long', day: 'numeric' };
    // return date.toLocaleDateString('ru-Ru', options).split(',')[0].toLocaleUpperCase();
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

alert(getWeekDay(date));          // нужно вывести "ВТ"