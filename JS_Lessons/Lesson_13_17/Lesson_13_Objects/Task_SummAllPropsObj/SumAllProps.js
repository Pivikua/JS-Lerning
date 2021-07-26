let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let salaries2 = {};

function summAllProps(obj) {
    let summ = 0;
    for(let salary in obj){
        summ += obj[salary];
    }
    return summ;
}

alert("Итого: " + summAllProps(salaries));
alert("Итого: " + summAllProps(salaries2));