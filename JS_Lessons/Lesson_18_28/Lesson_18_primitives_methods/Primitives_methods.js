// Есть 7 примитивных типов:
// string, number, boolean, symbol, null, undefined и bigint.

// для всех примитивов создаються классы обертки по умолчанию
// и можно польховаться методами классов оберток
let str = "Hello";
let spc = " ";
let wrd = "World";
let srch = "ll";
console.log(str.concat(spc, wrd, spc).repeat(10));