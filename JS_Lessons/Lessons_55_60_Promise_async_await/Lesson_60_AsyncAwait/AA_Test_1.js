async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("All right!"), 1000)
    });
    let result = await promise;

    alert(result);
}

f();