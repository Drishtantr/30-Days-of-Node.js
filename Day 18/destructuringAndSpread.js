const firstName = {
  fname: "John",
  age: 18,
  address: {
    city: "KTM",
    country: "Nepal",
  },
  height: "174 cm",
};
const secondName = {
  fname: "Doe",
  age: 20,
  address: {
    city: "Delhi",
    country: "India",
  },
  food: "watermelon",
};

const { fname: firstname, age: fage } = firstName;
console.log(firstname, fage);

const combine = { ...firstName, ...secondName };
console.log(combine);

const { fname, age, ...rest } = firstName;
console.log(rest);
