"use strict";
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

// Клонирование объекта "в ручную"

let user = {
    name: "Ivan",
    age: 30,
};

let clonedObj = {};

function clone(obj, clone) {
    for (let field in obj) {
        clone[field] = obj[field]
    }
}

clone(user, clonedObj);

function alertObjField(obj) {
    for (let field in obj) {
        alert(field + ":" + obj[field])
    }
}

alertObjField(clonedObj);

// Клонирование объекта Object.assign
//  - Object.assign(dest, [src1, src2, src3...])
//  - Первый аргумент dest — целевой объект.
//  - Остальные аргументы src1, ..., srcN (может быть столько, сколько нужно)) являются исходными объектами
//  - Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest.
//      То есть, свойства всех перечисленных объектов, начиная со второго, копируются в первый объект.
//  - Возвращает объект dest.

// Например, объединим несколько объектов в один:
let user2 = {name: "Иван"};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user2, permissions1, permissions2);

// теперь user = { name: "Иван", canView: true, canEdit: true }

// Если принимающий объект (user) уже имеет свойство с таким именем, оно будет перезаписано:

let user3 = {
    name: "Ivan",
};

Object.assign(user3, {name: "Piter"});

// Мы также можем использовать Object.assign для замены for..in на простое клонирование:
let user4 = {
    name: "Ivan",
    age: 30,
};

let clone2 = Object.assign({}, user4);
// Этот метод скопирует все свойства объекта user в пустой объект и возвратит его.

// Вложенное клонирование объектов являющихся полями объекта
let user5 = {
    name: "Ivan",
    size: {
        height: 182,
        width: 50,
    },
};

// Порведем клонирование
let clone3 = _.cloneDeep(user5);

alertObjField(clone3);