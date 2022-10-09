const values = [1, 2, 3, 4, 5, 6]

console.log('');
console.log('-------- forEach --------');
console.log('-------------------------');

// foreach is mutable, it may change the values of the input array
values.forEach((value, index, array) => {array[index] = value * 2})
console.log(values);
// logs: [ 2, 4, 6, 8, 10, 12 ]

const myForEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
       callback(array[i], i, array);
    }
}

myForEach(values, (value, index, array) => {array[index] = value * 2});
console.log(values);
// logs: [ 4, 8, 12, 16, 20, 24 ]

console.log('');
console.log('---------- Map ----------');
console.log('-------------------------');
// map creates new array of variables by 
// applying operation given to the input array
const newMappedArray = values.map(value => `<li> ${value} </li>`)
console.log(newMappedArray);
/* logs:
[
  '<li> 4 </li>',
  '<li> 8 </li>',
  '<li> 12 </li>',
  '<li> 16 </li>',
  '<li> 20 </li>',
  '<li> 24 </li>'
]
*/

const myMapFunction = (array, callback) => {
    const resultArr = []
    for (const item of array) {
        resultArr.push(callback(item))
    }

    return resultArr
}

const myNewMappedArray = myMapFunction(values, value => `<li> ${value} </li>`);

console.log(myNewMappedArray);
/* logs:
[
  '<li> 4 </li>',
  '<li> 8 </li>',
  '<li> 12 </li>',
  '<li> 16 </li>',
  '<li> 20 </li>',
  '<li> 24 </li>'
]
*/

console.log('');
console.log('--------- filter --------');
console.log('-------------------------');

const filteredValues = values.filter(value => value > 10);
console.log(filteredValues);
// logs: [ 12, 16, 20, 24 ]

const myFilterFunction = (items, callback) => {
    const resultItems = []

    for (const item of items) {
        if(callback(item)) {
            resultItems.push(item)
        }
    }

    return resultItems
}

const myFilteredValues = myFilterFunction(values, value => value > 10)
console.log(myFilteredValues);
// logs: [ 12, 16, 20, 24 ]