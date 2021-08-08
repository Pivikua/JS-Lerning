// Сортировать по полю

// У нас есть массив объектов, который нужно отсортировать:
//
let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];

// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
//users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
//users.sort((a, b) => a.age > b.age ? 1 : -1);

// Можем ли мы сделать его короче, скажем, вот таким?
function byField(fieldName) {
    return function (item_a, item_b) {
        return item_a[fieldName] > item_b[fieldName] ? 1 : -1
    }
}

function objArrToString(arr) {
    let string = "";
    for (let o of arr) {
        string += `${o.name} ${o.surname}-${o.age}; `
    }
    return string;
}

alert(objArrToString(users));

users.sort(byField('name'));
alert(objArrToString(users));

users.sort(byField('age'));
alert(objArrToString(users));

users.sort(byField('surname'));
alert(objArrToString(users));