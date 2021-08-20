Promise.all([
    new Promise(resolve => setTimeout(() => resolve(10), 3000)),
    new Promise(resolve => setTimeout(() => resolve(20), 2000)),
    new Promise(resolve => setTimeout(() => resolve(30), 1000)),
]).then((results) => console.log(results[0]));