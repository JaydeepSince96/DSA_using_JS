// Q) What is head and tail recursion?
// A-) When we kept console before the logic statement it will give output in decending order Often we called it head recursion and when we keep console after the logic the order will just oposite and we called it as a tail recursion.

// const head = (x) => {
//   console.log(x);
//   if (x > 0) {
//     head(x - 1);
//   }
// };
// let data = 5;
// head(data);

// Tail recursion ------------->

const tail = (x) => {
  if (x > 0) {
    head(x - 1);
  }
  console.log(x);
};
let data = 5;
tail(data);
