// let message : string = "Hello bob"
// message = "Hello James"
// console.log(message)
var _a;
// let price : number = 14.5
// console.log(price)
// let active : boolean = true
// console.log(active)
// let list : number[] = [1,2,3]
// let list2: Array<number> = [1,2,3]
// console.log(list)
// console.log(list2)
// let x : [string, number]
// x = ["hello", 10]
// // x = [10, "hello"]
// let y : [string, boolean, number]
// y = ["Hello",true, 34]
// // y = [34, "Hello", false]
// function greet(name : string):any{
//     return `Hello ${name}`
// }
// console.log(greet("Bob"))
// any : disable the type checking
// let h : any = true
// h = "james"
// console.log(h)
// objects
// function processUser(user: User){
//     return `User: ${user.name}, Age: ${user.age}`
// }
// interface User {
//     name : string,
//     age : number
// }
// const user = {name: "bob", age: 30}
// user.age = "xjldjfas"
// const invalidUser = {name:"James", age:30}
// console.log(processUser(invalidUser))
// enums : Define group of related constants having meaningful names
// enums -- string or numeric
// enum Direction {
//     North = 1,
//     East,
//     South,
//     West
// }
// console.log(Direction.East)
// enum Color {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE",
// }
// console.log(Color.Green)
// Type Alias : It is used to give a name to primitive types
// primitive types : string, number, boolean, array, tuple
// type Strdata = string;
// let userName : Strdata = "James"
// console.log(userName)
// let Myname : Strdata = "Bob"
// console.log(Myname)
// type float = number;
// let price : float = 24.5
// console.log(price)
// // Union Type Alias
// type ID = number | string;
// let employeeID : ID = 101;
// employeeID = "AB123"
//  Type alias to define arrays
// type StringArray = string[]
// type NumberArray = Array<number>
// let names : StringArray = ["James", "Bob", "Rock"]
// let scores : NumberArray = [90, 85, 95]
// Type alias to define complex object structures
// type User = {
//     name: string,
//     age: number,
//     isAdmin: boolean
// }
// let adminUser : User = {
//     name: "James",
//     age: 30, 
//     isAdmin: true
// }
// Type aliases can also define the structure of functions
// specifying input types and return types.
// type Greet = (name: string) => string;
// let greetUser : Greet = (name:string)=>{
//     return `Hello, ${name}`
// }
// console.log(greetUser("James"))
// // Type alias for tuple
// type Point = [number, number]
// let coordinate : Point = [10, 20]
// combine multiple types into one
// type HasName = {
//     name: string
// }
// type HasAge = {
//     age: number
// }
// type HasJob = {
//     jobtitle: string
// }
// type Person = HasName & HasAge & HasJob
// let person : Person = {
//     name: "Rock",
//     age : 30,
//     jobtitle: "Engineer"
// }
// Extend Interfaces
// interface User{
//    readonly name: string,
//    readonly age : number,
//     greet(): string;
// }
// interface Employee extends User {
//     readonly jobtitle: string
// }
// let user : Employee = {
//     name: "bob",
//     age : 35,
//     jobtitle: "Software Engineer",
//     greet() {
//         return `Hello, my name is ${this.name}`
//     },
// }
// user.age = 50
// user.name = "James"
// user.jobtitle = "Developer"
// console.log(user.jobtitle)
// readonly : 
// Nullable Types: Nullable types refer null or undefined types
// In typescript, you can allow a variable or parameter to accept null or undefined explicitly
// undefined : absence of a value or an unintialized state
// ---> It is the default value for variables that have been declared but not assigned any value
// ---> Also it is returned by functions that don't explicitly return a value
// let a;
// // console.log(a)
// function doSomething() {}
// console.log(doSomething())
// null: Represents an intentional absence of value.
// -> It is explicitly assigned to variables when you want to indicate that the variable should be empty or has no value.
// let b = null;
// console.log(b)
// null and undefined is primitive type like string, boolean, number or etc.
// let u : undefined = undefined
// let x : null = null
// let name : string | null = null
// let userName : string | undefined = undefined
// Optional Types: Optional types refer to properties of unction parameters that are not required.
// they can be left out, and when omitted, they are implicitly set to undefined.
//  You can make a parameter or property optional by adding a ? after the name
// function greet(age: number, name?: string ){
//     if (name){
//         console.log(`Hello, ${name} and age is ${age}`)
//     }
//     else {
//         console.log('Hello, stranger')
//     }
// }
// greet(30, "James")
// interface Person {
//     name: string,
//     age? : number
// }
// let person1 : Person = {name:"Rock"}
// console.log(person1.name, person1.age)
var user = {
    name: "bob",
    address: {
        city: "New York",
        postalCode: "00001"
    }
};
console.log((_a = user.greet) === null || _a === void 0 ? void 0 : _a.call(user));
