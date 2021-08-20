loadScript('firstSctipt', step1);

function step1(error, script) {
    if(error){
        handleError(error);
    }else{
        // ...
        loadScript('secondScript', step2);
    }
}

function step2(error, script) {
    if(error) {
        handleError(error);
    } else {
        // ...
        loadScript('threedScript', step3);
    }
}

function step3(error, script) {
    if(error){
        hendleError(error)
    }else{
        // ...
    }
}