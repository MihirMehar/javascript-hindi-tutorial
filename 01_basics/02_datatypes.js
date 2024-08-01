"use strict"; // treat all JS code as newer version

//alert() => operation // we are using node js ,not browser

/* JavaScript there are many datatype like other programming language
primitive and non primitive so we defined datatype
*/

let name = "Mihir"  //string
let age = 23  //number
let isLoggedIn = true //Boolean
let email = null; // null
let password;  // undefined


// String => ""  range of datatypes
// number  =>2 to power53
// Boolean => true or false
// null => standalone value & also object typeof
// undefined => declare or not defined
// symbol => unique

console.table([name,age,isLoggedIn,email,password])

// similar we also have typeof we can use to find datatype
console.log(typeof name);

// example of symbol
const mySymbol = Symbol('&');
console.log(mySymbol);

//In Javascript we also have non primitive datatype like objecr and array

let myArray =[1,2,3,4,5];
console.log(myArray);

//similar we accessing array elements like
console.log(myArray[2]);

//Object:

const Employee={
    name:"Mihir Mehar",
    age: 23,
    designation: "System Enginner"
}

console.log(Employee);