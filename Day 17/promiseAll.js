const p1 = new Promise((resolve, reject) => {
  resolve("P1 received");
});
const p2 = new Promise((resolve, reject) => {
  resolve("P2 received");
});
const p3 = new Promise((resolve, reject) => {
  resolve("P3 received");
});

Promise.all([p1, p2, p3]).then((msg) => console.log(msg));
