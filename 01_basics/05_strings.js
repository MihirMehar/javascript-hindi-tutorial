// operation 1: concat
const name ="Mihir"
const repoCount = 3
console.log(name + repoCount +"value");

//modern way to use string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//string declare
const gameName = new String("Tekken3")

// access the key 
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

// slice
// const newString = gameName.substring(0,4);
// const newString1 = gameName.slice(-2,4);
console.log(gameName.substring(0,4));

console.log(gameName.slice(-2,4));



//trim
const newStringOne ="   Mihir  ";
console.log(newStringOne.trim());

// replace
const url = "https://mihir-mehar.com/mihir%20mehar";
console.log(url.replace('%20','-'))
console.log(url.includes('mihir'));



//split(convert string into array)
console.log(gameName.split('-'));