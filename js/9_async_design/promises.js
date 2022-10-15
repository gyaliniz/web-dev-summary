const items = [
    { id: 2, content: "Hello from JS" },
    { id: 12, content: "This is another item" }
];

function getItems() {
    setTimeout(() => {
        let output = '';

        items.forEach((item) => {
            output += `<li> ${item.content} </li>`
        });

        document.body.innerHTML = output;
    }, 1000);
};


function addItem(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            items.push(item);
            resolve("Completed");
            // call reject when there is an error
        }, 2000);
    })
}

// when you use callback
// you bring dependency to your functions
// however, they should be independent
// this approach also create `callback hell` problem
// when you have bunch of async operations need to
// run synchronously
// funcA(funcB(funcC...))

// Here you can use Promises

// Now you removed the dependency
// and you can write async code as if the operations
// are synchronous
addItem({ content: 'New Item', id: 99 }).
    then(() => getItems()).
    finally(() => console.log("Done"));