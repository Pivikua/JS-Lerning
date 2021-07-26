// День недели в европейской нумерации

// В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay(date){
    let euroWeekDays = [7, 1, 2, 3, 4, 5, 6];
    return euroWeekDays[date.getDay()];
}

alert( getLocalDay(date) );       // вторник, нужно показать 2