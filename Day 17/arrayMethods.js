const items = [
  { name: "Apple", price: 10 },
  { name: "Ball", price: 20 },
  { name: "Cat", price: 30 },
  { name: "Dog", price: 40 },
  { name: "Eagle", price: 50 },
];

// Filter
const filarr = items.filter((item) => {
  return item.price < 30;
});
console.log(filarr);

// Map
const maparr = items.map((item) => (item.price === 10 ? 1000 : 10));
console.log(maparr);

// Find
const findarr = items.find((item) => {
  return item.name === "Dog";
});
console.log(findarr);

// foreach
items.forEach((item) => {
  console.log(item.name);
});

// Some
const somearr = items.some((item) => {
  return item.price > 15;
});
console.log(somearr);

// every
const everyarr = items.every((item) => {
  return item.price > 9;
});
console.log(everyarr);

// reduce
const reducearr = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(reducearr);

//includes
const listt = [1, 2, 3, 4, 5];
const incl = listt.includes(5);
console.log(incl);
