const userLeft = false;
const userWatching = true;

const p = new Promise((resolve, reject) => {
  if (userLeft) {
    reject({ name: "User Left", status: ":(" });
  } else if (userWatching) {
    reject({ name: "User Watching", status: ":(" });
  } else {
    resolve("Success YAAY");
  }
});

p.then((msg) => {
  console.log(`Then: ${msg}`);
}).catch((error) => {
  console.log(`Then: ${error.name} ${error.status}`);
});
