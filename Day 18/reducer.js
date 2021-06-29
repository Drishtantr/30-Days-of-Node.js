const a = ["1", "2", "3", "4", "5"];

// for(let i=1; i<=5; i++) {
//   for(let j=1; j<=i; j++) {
//     console.log(j);
//   }
//   console.log('CH')
// }

const b = a.reduce((pval, val) => {
  return pval + val;
}, 0);
console.log(b);
