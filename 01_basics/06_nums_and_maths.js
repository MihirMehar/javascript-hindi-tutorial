// some basic operation in js

const score = 400;
// console.log(score);

//eg if you defined exclusive defined you want only Number

const balance = new Number(score);
// console.log(balance);
// output [Number:400]

//similar if you want to change number into String

console.log(balance.toString().length);
// i.e now you balance change to string
console.log(typeof balance);

console.log(balance.toFixed(1));

// const amount = 23.456;
const amount = 1123.456;
// const amount = 123.456; //123
console.log(amount.toPrecision(3)); //23/5

//
const price = 1000000;
console.log(price.toLocaleString('en-IN'));


//  Maths concept in javascript

console.log(Math);
console.log(Math.abs(-19)); // always give positive value
console.log(Math.round(34.5)); // give round value
console.log(Math.ceil(4.2)); //5

console.log(Math.floor(4.9)); //4
console.log(Math.min(4,3,6,8)); //give min value 3
console.log(Math.max(4,3,6,8)); //give max value 8

//similar we have random function in Math that generate random value btw 0 and 1
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


// also have simple formula to know min and max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() *(max-min+1))+min)






