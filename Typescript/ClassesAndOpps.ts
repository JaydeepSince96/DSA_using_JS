// class Bottle{
//     constructor(public brand: string, public color: string, public price: number){}
// }

// let b1 = new Bottle("Cello","whilte",150)

// Both have the same working feature but syntaxwise It is different

class Bottle {
  public brand;
  public color;
  public price;
  constructor(brand: string, color: string, price: number) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }
}

let b1 = new Bottle("Cello", "whilte", 150);
console.log(b1);

//------***** If you declare anything inside the class you can access those inside other methods using this keywords

// eg: 1

class ThisExample {
  name: string = "something";
  someMethod() {
    console.log(this.name); // Name is delared in the class but If you want to use it inside the method you have to give this. keyword
  }
  anotherMethod() {
    this.someMethod; // Again you can access the someMethod using this keyword here this specify the environment of class
  }
}

class AccessModifier {
  constructor(private balance: number, public bankName: string) {
    console.log(this.balance, this.bankName);
  }
}

const result = new AccessModifier(5000, "SBI");
// result.balance
// You can not access Private access modifire variable from outside of class, even If you have some of the private properties in the class and you inherit that class into some other class then also You can not acess the private properties from inherited class the private properties can be access only the same class environment only. Althoug It can be compiled and you can see the response but at development time you got the error.

class Car {
  constructor(
    public carName: string,
    public isLuxury: boolean,
    public price: number,
    private isComfertable: boolean
  ) {}
  carDetails() {
    console.log(this.carName, this.price, this.isLuxury, this.isComfertable);
  }
}

class PremiumCar extends Car {
    // In order to get dynamically values, you need to receive those values first in your subclass constructor and write those variable that you will get from parent class.
  constructor(
    carName: string,
    isLuxury: boolean,
    price: number,
    isComfertable: boolean,
    public isPremium: boolean
  ) {
    super(carName, isLuxury, price, isComfertable);
  }
}

const pCar = new PremiumCar("MG Hactor",true,50000,true,true)
 //pCar.isComfertable  It is not accessible  due to have private property.

 //---------------**** Protected keyword

 // Unlike the Private keyword the protected variable also can be used in their sub Classes also but outside of the classes it won't be accessible.

 // Eg:-

 class Employees {
    constructor(
        public name: string,
        public empId: string,
        private salary: number,
    ){}
    protected companyDetails(){
        console.log(this.name, this.empId, this.salary)
    }
 }
 class SeniorEmployees extends Employees{
    constructor(
        name: string,
        empId: string,
        salary: number,
        public yoe: number
    ){
        super(name,empId, salary)
    }

    companyDetails(): void {
        console.log(this.name, this.empId, this.yoe, )
    }

 }

 const senEmp = new SeniorEmployees("Jay","J-100",90000,4)

 //---------------------**** readOnly 

 // Sometimes you don't want to change a paricular variable value and you want to reuse that in that case you have to keep readonly property.

 class DescribeReadOnly{
    constructor(public readonly things: string){
        things = "Hello";
    }
    // always remember that after giving access specifier you have to write the readoly.

    ChangeTheThings(){
      //  this.things = "Yellow"
      // It started giving error because you can not change a readonly variable
    }

 }

 // Getters and Setters

 class GetAndSet{
    // variable name is keeping in the _ this is just a approach so that we can make the function with the same name, It's just a convention.
    constructor(public _name: string, public age: number){}

    get name(){
        // this is how getter methods can be defined
        return this._name
    }
    set name(val: string){
        // This is how we write the setter method
        this._name = val
    }
 }
 const u1 = new GetAndSet("Jay",25)
 u1._name // Getter
 u1._name = "Jaydeep" //Setter
 // you don't need to make it executable to give the () It will atomatically give the name because of getters.


 // -----------------***** static

 // static method and variable we can access without using new keyword you don't need to make class instance in order to access static methods or variables.

 class StaticClass{
    public static userName: string = "Jaydeep"
 }
 StaticClass.userName
// You can directly access it.