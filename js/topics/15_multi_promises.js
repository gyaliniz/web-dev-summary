const promise1 = Promise.resolve(5);
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(15);
    }, 1000);
});

const promise4 = Promise.reject('Unhandled exception occured');


Promise.all([
    promise1, promise2, promise3,
    promise4.catch((err) => console.log('Internal Error carch'))
])
    .then(values => console.log(values))
    .catch(err => console.log(err));


const promise5 = Promise.resolve(20);
const promise6 = 25;

const fun = async () => {
    try {
        const allPromises = Promise.all([promise5, promise6]);
        const results = await allPromises;
        console.log(results);
    } catch (err) {
        console.log(err);
    }
}

fun()
