// Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// function printList(list) {
//     //let what = list.next;
//     if (list.next) {  // true - любом значени,  null и undefine - false
//         printList(list.next);
//     }
//     alert(list.value);
// }
//
// printList(list);

function cPrintList(list) {
    let tmp = list;
    let listValArr = [];

    while (tmp) {
        listValArr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let item of listValArr.reverse()){
        alert(item);
    }
}

cPrintList(list);
