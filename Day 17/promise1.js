const p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

p.then((message) => {
  console.log(`Then ${message}`);
}).catch((message) => {
  console.log(`Catch ${message}`);
});
