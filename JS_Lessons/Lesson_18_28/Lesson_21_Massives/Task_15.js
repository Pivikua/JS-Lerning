// Напишите функцию shuffle(array),
// которая перемешивает (переупорядочивает случайным образом) элементы массива.

let arr = [1, 2, 3, 4, 5];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    // for (let index = 0; index < array.length; index++) {
    //     console.log("indexItem  -  " + array[index]);
    //     let tmp = array[index];
    //     let randIndex = Math.round(Math.random() * (array.length - 1));
    //     console.log("randIndex  -  " + randIndex);
    //     //alert(randIndex);
    //     console.log("randIndexItem -  " + array[randIndex]);
    //     array[index] = array[randIndex];
    //     array[randIndex] = tmp;
    // }
}

for (let i = 0; i < 5; i++) {
    shuffle(arr);
    alert(arr);
}