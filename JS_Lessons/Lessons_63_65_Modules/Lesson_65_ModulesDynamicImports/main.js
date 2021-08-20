let modulePath = './ExportModule_1.js';

let obj;
import(modulePath)
    .then(module => {
        obj = new module.User;
        console.log(obj.userName);
        console.log(obj.age);
    })
    .catch(err => alert(err));