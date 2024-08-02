// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// this is simple and recommend comparision 

// if you comparsion of different data type like
console.log("2">1);
console.log("02" >1);

//similar we compare null value
console.log(null>0) // false
console.log(null==0)  // false
console.log(null>=0)  // true


/* because The reason is that equality check == and comparisons > <> >= <= works different
comparison convert null to number ,treating as 0 i.e null>=0 is true 

i.e most of case this type of code are not recommened
*/

// strict check comparison is ===
console.log("2"===2);
