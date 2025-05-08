// 1)------------- Generics in Function

//Def:- Generics let you write flexible, reusable, and type-safe code without losing type information.
//Instead of hardcoding types, you define a placeholder type (usually T, U, etc.) that can be substituted later.

// We make a General function that can accept anything in function parameter on the time of function calling we can specify the type of our parameter.
// Eg 1:-

const GenericsFn = <T>(arg: T): T => {
  return arg.toUpperCase();
  // Even though you're passing a string, TypeScript doesn't know for sure that T will always have a .toUpperCase() method.
};
// He
GenericsFn<string>("jay");
GenericsFn<number>(888);

// THe solution is to give extend string

const GenericsFun = <T extends string>(arg: T): T => {
  // “Typescript can’t return a string when you promised to return the exact T.”, so the solution is in next eg.
  return arg.toUpperCase();
};

const EgGenericsFn = <T extends string>(arg: T): string => {
  // Now Typescript exactly know what he should to return.
  return arg.toUpperCase();
};

//Eg 2:-

function identity<T>(value: T): T {
  return value;
}

//  T is a generic placeholder. TypeScript figures out what T is based on the argument.

const num = identity(42); // inferred as number
const str = identity("hello"); // inferred as string

// Eg 3:-

// Generic Array Function:-

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = firstElement([1, 2, 3]); // number
const firstStr = firstElement(["a", "b"]); // string

// Eg 4:-

// Generic With Constraints

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello"); // ✅ string has length
getLength([1, 2, 3]); // ✅ array has length
// getLength(123);           // ❌ number doesn't have length

// Eg 5 :- Multiple Generics

function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const merged = merge({ name: "Alice" }, { age: 30 });
// inferred as: { name: string, age: number }

// Eg 6:-  Generic Function in Object/Arrow Style

const wrapInArray = <T>(value: T): T[] => {
  return [value];
};

const wrapped = wrapInArray("test"); // inferred as string[]

// ======================================= Real-World Usage Scenarios =====================================================

// API Fetch Wrapper

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

type User = { id: number; name: string };

const user = fetchData<User>("/api/user/1");

//  Generic Map Function

function mapArray<T, U>(arr: T[], callback: (item: T) => U): U[] {
  return arr.map(callback);
}

const lengths = mapArray(["one", "two"], (word) => word.length); // number[]

//======================================Generics Inteface =============================================

// A generic interface allows you to define a reusable interface where the types of its properties can vary, depending on how the interface is used.

interface Box<T, U> {
  typeofBox: T;
  purpose: U;
}

// Declare T and U in the function's generic signature
const FactoryObjects = <T, U>(box: Box<T, U>): T & U => {
  return { ...box.typeofBox, ...box.purpose };
};

const result1 = FactoryObjects({
  typeofBox: { color: "blue" },
  purpose: { usage: "storage" }
});

// result has type: { color: string; usage: string }

//Eg 2:-

interface Pair<T, U> {
  first: T;
  second: U;
}

const nameAgePair: Pair<string, number> = {
  first: "Alice",
  second: 30,
};

// ===================**********   Real-World Example: API Response Wrapper

interface ApiResponse<T> {
  status: number;
  data: T;
  message?: string;
}

type Users = {
  id: number;
  name: string;
};

const response: ApiResponse<Users> = {
  status: 200,
  data: {
    id: 1,
    name: "Jaydeep"
  }
};


// With Constraints:-

interface HasLength {
  length: number;
}

interface Wrapper<T extends HasLength> {
  item: T;
}

const stringWrap: Wrapper<string> = { item: "hello" }; // ✅ string has length
// const numberWrap: Wrapper<number> = { item: 123 };  // ❌ number doesn't have length


//=========================###########   Generics interface with Class 

interface Repository<T> {
  getAll(): T[];
  getById(id: number): T;
}

class UserRepo implements Repository<User> {
  private users: User[] = [{ id: 1, name: "Jaydeep" }];
  
  getAll() {
    return this.users;
  }
  
  getById(id: number) {
    return this.users.find(u => u.id === id)!;
  }
}

//===================== Generics in class

class BottleMaker<T>{
  constructor(public brand: T){}
}

const b3 = new BottleMaker("Jay")
const b2 = new BottleMaker(11)


// Type ascertain and Typecasting 

// When You know the variable type more the typescript that is called ascertain

