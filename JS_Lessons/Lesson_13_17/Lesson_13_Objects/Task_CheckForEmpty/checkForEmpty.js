function isEmpty(obj) {
    let isEmpt = true;
    for(let prop in obj){
        isEmpt = false;
    }
    return isEmpt;
}

let obj = {};

let obj2 = {
    prop1: 1,
    prop2: 2,
};

alert("obj isEmpty? " + isEmpty(obj));
alert("obj2 isEmpty? " + isEmpty(obj2));

