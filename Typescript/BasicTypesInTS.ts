// Basics Type
// Primitive Types (number,string, bool)
// Array
// Tuple
// Enum
// Any, Unknown, void, null, undefined, Never

// ----------------------------------Primitives and Reference --------------------------------------

// a, 1, 2.3, "abc", true, false :- These are primitives data types
// [], {}, () these are referece means If you copied these value to another variable changing the value in that variable also affected the original one values that why these are References.

// 1)-  Defining Array
// It throw error because we give the signature of array of numbers
// const arr: number[] = [2,5, 8, "Jay"]

// 2)- Tuple is fixed size

const tuple: [number, string] = [3, "jay"];

// 3) enum: Enum is used to make constant values

enum StatusCode {
  abandoned = "Abandoned status code of 500",
  notFound = "not Found status code 404",
}

// 4) Any, Unknown

let a: unknown;
a = 3;
a = "jaydeep";

// a.toUpperCase // Throw error because Before checking the type we did the toUpperCase same case with any keyword will not throw any error.

// if(typeof a === "string"){
//     a.toUpperCase;
// }

// If we specify the type as Unknown so it will check for toUpperCase and If you do it same with any It will not throw any error.

function VoidFun(): void {
  console.log("Void");
}

// If Function not returning anything then we need to specify the type as void

function ReturnNumber(): number {
  return 6;
}

let something: string | null;
something = "jaydeep";
something = null;

// When we specify the variable with : and give the types It's called the type annotation
