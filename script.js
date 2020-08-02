const items = [
    { name: 'bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'album', price: 10 },
    { name: 'book', price: 5 },
    { name: 'phone', price: 300 },
    { name: 'laptop', price: 500 },
];

// filter method
const filteredItems = items.filter((item) => {
    return item.price <= 100
});

// console.log(items);
// console.log(filteredItems);


// map method
const itemNames = items.map((item) => {
    return item.name
});

// console.log(itemNames);


// find; returns true (and very first element) or false
const foundItem = items.find((item) => {
    return item.name === 'book'
});

// console.log(foundItem);


// forEach
items.forEach((item) => {
    // console.log(item.price)
})


// some; returns only true (when reaches first true statement) or false
const hasInexpensiveItem = items.some((item) => {
    return item.price <= 4
})

// console.log(hasInexpensiveItem);


// every; checks if every element is true for the statement
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100
})

// console.log(hasInexpensiveItems);


// reduce
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

// currentTotal element starts with second parameter in function ('0'), and after each iteration updates its value

// console.log(total);


// includes
const numbers = [1, 2, 3, 5, 8, 9];
const includesTwo = numbers.includes(2);
console.log(includesTwo);
