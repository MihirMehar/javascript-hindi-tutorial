// objects in javascript can be created in two ways 1: Literal 2: Constuctor (Objects created uysing this are always singleton)

// Object Literals:
const mySym = Symbol("key1") 

const JsUser={
    name:"Mihir",  //js by default use key as string,
    "full Name":'Mihir Mehar',
    age:23,
    location:"Ujjain",
    [mySym]:"myKey1", // to use as symbol 
    email:"mihirmehar@google.com",
    isLoggedIn: false,
    lastLoggedIn:["Monday","Tuesday","Saturaday"]
}

//Now firstky we going to print all values of our object
// console.log(JsUser);

// we access object key in simple way 
// fisrtly
// console.log(JsUser.email); //output: mihirmehar@google.com (. refrence as string)


console.log(JsUser['full Name']); // second way


//  Now SYmbol

// in interview mostly they mostly asked to add symbol in object or use in key.

// console.log(JsUser.mySym);
console.log(JsUser)

// Now if want to change value
JsUser.email="mihir@gmail.com"
console.log(JsUser.email);

// To lock value in Object we use freeze method
// Object.freeze(JsUser);
JsUser.email="priya@gmail.com"
console.log(JsUser.email);

// function

JsUser.greeting = function(){
    console.log("hello JS User");
    
}
JsUser.greeting1 = function(){
    console.log(`Hello JS User ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting1());



