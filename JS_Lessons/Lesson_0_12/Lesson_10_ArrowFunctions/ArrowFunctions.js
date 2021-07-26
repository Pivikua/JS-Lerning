"use strict";

/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}*/

let ask = (question, yes, no) => confirm((question)) ? yes() : no();
let num = 5;
let str = "5";
let bool = true;


ask(
    "Вы согласны?",
    function () {
        alert("Вы согласились.");
    },
    function () {
        alert("Вы отменили выполнение.");
    }
);

alert (typeof ask);
alert (typeof num);
alert (typeof str);
alert (typeof bool);