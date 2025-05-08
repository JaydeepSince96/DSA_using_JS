// Iterface is used to defined the shape of object where as Type alias is used for defining it's own user Type.

// 1):- Interface

interface IUser {
  name: string;
  email: string;
  age: number;
  isCustormer: boolean;
  subscriber?: boolean; // If you put ? maker It will become optional.
}

// This is how you define function classically  with function keyword

// function GetUserProfile(user:IUser): IUser{
//     return user;
// }

// This is how you can defined the types in Arrow function.

const GetUserProfile = (user: IUser): IUser => {
  return user;
};

GetUserProfile({
  name: "Jaydeep",
  email: "jay@gmail.com",
  age: 25,
  isCustormer: true,
});

// 2) Inheritence in interface, extend keyword.

interface IUserData {
  name: string;
  email: string;
}

interface IAdmin extends IUserData {
  isAdmin: boolean;
}

const Login = (user: IAdmin): boolean => {
  return user.isAdmin;
};

// If you made the two interface with same name than IT will merge both interface property

// 3) type:-

type values = string | number;

function GetVals(val: values): values {
  if (typeof val === "number") {
    return val.toString(); // converts number to string
  }
  return val; // if already a string, return as-is
}

GetVals(15);
