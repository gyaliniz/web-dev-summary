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

// by using async await keyword, you can reach
// the same result with .then.catch approach
// and the result becomes cleaner

const asnycFunc = async () => {
    await addItem({ content: 'New Item', id: 99 });
    getItems();
    console.log("Done")
};

asnycFunc();