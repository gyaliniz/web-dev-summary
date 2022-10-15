const items = [
    {id: 2, content: "Hello from JS"},
    {id: 12, content: "This is another item"}
];

function getItems () {
    setTimeout(() => {
        let output = '';

        items.forEach((item) => {
            output += `<li> ${item.content} </li>`
        });

        document.body.innerHTML = output;
    }, 1000);
};


function addItem(item, callback) {
    setTimeout(() => {
        items.push(item);
        callback();
    }, 2000);
}

// We want to see all items: But because of asyncronity of 
// timeOut, we only see the first two items
/*
addItem({item: 'New Item', id: 99});
getItems();
*/

// we have to complete addItem 
// before getItems function is called
// so we bring callback approach

addItem({content: 'New Item', id: 99}, getItems);