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
    console.log(item.price)
})