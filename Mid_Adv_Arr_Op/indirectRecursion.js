// Indirect Recusion----------------> As its name described all itself, when recursion happened indirectly we called it indirect recursion; Lets understand this with an example lets say we havw two function A & B.
// lets call function A inside function B and, call function B inside function A and make our task happened with some conditions.

// Here we have some money and we made two function buyApple() for purchase apple and  buyMore() for buying more apple, every apple price is 10Rs than we can call buyMore inside buyApple and buyApple inside buyMore.

let totalMoney = 100;
let apple = 0;
const buyApple = (x) => {
  // buy apple till money is more or equal to zero.
  if (x >= 0) {
    console.log("total apple", apple, "Money remained", x);
    buyMore(x);
  } else {
    console.log("I dont have more money");
  }
};
const buyMore = (x) => {
  //Every time we purchase aaple will 10 Rs will deduct from total money.
  buyApple(x - 10);
  apple++;
};
buyApple(totalMoney);
