let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumbers(obj) {
    for (let item in obj) {
        if (typeof obj[item] === "number") {
            obj[item] *= 2;
        }
    }
}

function odjToAlert(obj){
    for(let item in obj){
        alert("Object menu field " + item + " has " + obj[item]);
    }
}

multiplyNumbers(menu);
odjToAlert(menu);

