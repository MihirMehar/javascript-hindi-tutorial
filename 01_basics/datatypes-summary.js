// data are stored and how to access are reason between primitive and non primitive datatypes


//  primitive datatypes (call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference  (non-primitive) i.e memory ref are directly allocated to you

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*stack and heap memory concept ,i.e all primitive datatype 
are stored in stack memory mean copy of varibale is provided and changes are done in copy not original
*/

let myfunction = "Hello World";

let anotherfunction =myFunction
anotherfunction="Hello Good Morning"
console.log(myFunction);
console.log(anotherfunction);


//similar non primitive data types are stored in heap i.e refernce change
let userOne={
    email:"mihir@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="mihir@google.com"
console.log(userOne.email);
console.log(userTwo.email);


