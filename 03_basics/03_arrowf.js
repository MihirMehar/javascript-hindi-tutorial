const User = {
    userName: "Mihir",
    designation: "Software Enginner",

    welcomeMessage: function () {
        console.log(`${this.userName},welcome to our team`);
        console.log(this) // this is a current context
    }
}
// User.welcomeMessage()  // output: Mihir,welcome to our team
// User.userName="Shivam"
// User.welcomeMessage()
// console.log(this);
/*** */

// function chai(){
//     let name ="Mihir"
//     console.log(this);
// }
// chai()

const Name = function () {
    let userName = "Mihir"
    console.log(this.userName);
}
Name()

// arrow function synatx ()=>{}
const addNo = (num1, num2) => {
    return num1 + num2
}
console.log(addNo(50, 175));


//single arrow function'
// const Op =(num1,num2)=>num1*num2
const Op =(num1,num2)=>(num1*num2)
console.log(Op(7,5));


