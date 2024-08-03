// we can object in two ways

const tinder = new Object() 
//singleton
const tinderUser={} // non singleton object

tinder.id="123abc"
tinder.name="Mihir"
tinder.isLoggedIn =false

// console.log(tinder);

const regularUser={
    email:"mihir@gmail.com",
    fullName:{
        userName:{
            firstName:"Mihir",
            lastName:"Mehar"
        }
    }
}
console.log(regularUser.fullName?.userName.firstName);

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'a',4:'b'}

//combining
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

//also using spread concept
const obj3 = {...obj1,...obj2}
console.log(obj3);


console.log(tinder);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));


console.log(tinder.hasOwnProperty('isLogged'));
