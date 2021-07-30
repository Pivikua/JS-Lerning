let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

function sumSalaries(department){
    let totalSalary = 0;  // переменная для суммы зарплат
    if (Array.isArray(department)){  // если объект массив то ...
        return department.reduce((prev, current) => prev + current.salary, 0); // суммируем все зарплаты и взвращаем
    } else { // ... иначе ...
        for (let subdep of Object.values(department)) { // проходим в цикле по списки департаметов ...
            totalSalary += sumSalaries(subdep); // запускаем рекурсию и суммируем вернувщиеся суммы
        }
    };
    return totalSalary;
}

alert(sumSalaries(company));