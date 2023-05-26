// Recursion------> is basically function calling itself within the function body along with some conditions

// Printing 1 to 15 using recursion

// const recursion = (x) => {
//   console.log(x);
//   if (x < 15) {
//     recursion(x + 1);
//   }
// };
// let data = 0;

// recursion(data);

// Problem-----------> Factorial of a number withour using loop;

// Printing factorial of a number.

const factorial = (num) => {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));
