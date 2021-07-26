let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
    let summ = 0;
    let tmp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            tmp += arr[j]
        }
        if (tmp >= 0) {
            if (tmp > summ){
                summ = tmp;
            }
        }
        tmp = 0;
        for (let j = 0; j < arr.length - i; j++) {
            tmp += arr[j]
        }
        if (tmp >= 0) {
            if (tmp > summ){
                summ = tmp;
            }
        }
        tmp = 0;
        for (let j = i; j < arr.length - i; j++) {
            tmp += arr[j]
        }
        if (tmp >= 0) {
            if (tmp > summ){
                summ = tmp;
            }
        }
        tmp = 0;
        console.log(i + " -- " + summ);
    }
    return summ;
}

alert(getMaxSubSum(arr));