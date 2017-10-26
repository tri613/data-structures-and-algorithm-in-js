const promiseFactory = (sec, index) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`promise ${index} resolved in ${sec} at ${Math.round(new Date().getTime() / 1000)}`), sec);
});

const myPromises = [ () => promiseFactory(1000, 1), () => promiseFactory(1000, 2), () => promiseFactory(1000, 3) ];

// not chaining (concurrent)
myPromises.forEach(promise => {
    promise().then(console.log);
});

// chaining (in order)
myPromises.reduce((resolved, promise) => {
    return resolved.then(promise).then(console.log);
}, Promise.resolve('ok'));

// not chaining (concurrent)
for (let promise of myPromises) {
    promise().then(console.log);
}