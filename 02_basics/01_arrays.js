//array

const myArr =[0,1,2,3,4,5]
// we can declare array in different form
const heros = new Array("Captain America","Spiderman","DrDoom");
const myArr2 = ["shaktiman","nagrag"]
// console.log(myArr[2]);


//array method
// myArr.push(6) //add value
// myArr.push(7)
// myArr.pop() //remove last element


//myArr.unshift(9) // shift value of array at 0 index

// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));


const newArr = myArr.join()
// console.log(typeof newArr);

//slice ,splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);


//splice manipulate original array
const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C",myArr);



