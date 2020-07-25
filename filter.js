// filter method
const items = [
    { name: 'bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'album', price: 10 },
    { name: 'book', price: 5 },
    { name: 'phone', price: 300 },
    { name: 'laptop', price: 500 },
];

const filteredItems = items.filter((item) => {
    return item.price <= 100
});

// console.log(items);
// console.log(filteredItems);

// map method
const itemNames = items.map((item) => {
    return item.name
});

console.log(itemNames);