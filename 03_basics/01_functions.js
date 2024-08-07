// function are used in javascript to perform some specifice tasks
// function(){

// }

function sayMyName(){
    console.log('M');
    console.log('i');
    console.log('h');
    console.log('i');
    console.log('r');
}

// to call function 
// sayMyName // nothing print 
sayMyName()

function addTwoNumber(num1,num2){ //parameter
    num3 =  num1+num2
    console.log(`addition of two number is : ${num3}`)
}
addTwoNumber(2,5) //argument


function subTwoNumber(num1,num2){
   
    // let result = number2 - number2
    return num2 - num1;
}

// console.log(subTwoNumber(3,8));  
const result = subTwoNumber(25,50);
console.log(`Result of sub two number is : ${result}`);


function UserLoggedIn(username="Mihir"){
    if(!username){
        return 
    }
    return `${username} just logged in`
}
console.log(UserLoggedIn('Mihir'));


// 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
} // object

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));