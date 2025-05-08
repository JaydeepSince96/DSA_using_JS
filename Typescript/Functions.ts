// When ever you make function It's good that you should specify the what it should reture, basically specify the type which will fuction return.

function Somthing(): void {
  // Its valid function
}

const someThing = (): number => {
  return 2;
  // It is also a valid syntax we can write like this in arrow function
};

const someThingInteresting: () => number = () => {
  return 2;
  // This is also valid syntax.
  //someThingInteresting is a variable whose type is a function that takes no arguments and returns a number.
};

//===============*** If you need to send callback as parameter in that case how do you handle ...!!?

function LetsDo(val: string, call: () => void): void {
  // this how you deal with callback in typescript.
}

const LetsDoSomething = (val: string, call: () => void): void => {
  // valid arrow function syntax
};

//---------------------------### When you passing ...args in the function parameter It will make the arguments in an array and It called the rest operator but when you copy an array property to other variable that's called spread operatior.

function RestOperator(...args: number[]): void {
  // This is how you have to define rest operator in typescript.
  console.log(args);
}

//--------------------------#######  Function Overloading in Typescript

function abcd(a: string): void;
function abcd(a: string, b: number): number;

// When two function name is same but their parameter would be different that called function overloading.

// In typescript for Function overloading you have to make signature of it and then You can initiated it.

function abcd(a: unknown, b?: unknown) {
  if (typeof a === "string" && b === null) {
    console.log(a);
  }
  if (typeof a === "string" && b === Number) {
    return 123;
  } else {
    throw new Error("Something wrong with the input");
  }
}
