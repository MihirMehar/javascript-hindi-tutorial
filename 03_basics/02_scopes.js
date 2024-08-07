// wkt we have 3 imp variable in js
// let a =5;
// var b = 10;
// const c =15;

// console.log(a);
// console.log(b);
// console.log(c);

// simply printed but if we use scope {}
var c = 200; // global scope
if(true){
    let a =5;
    const b =15;
     var c = 100; // block scope
}

// console.log(a); // a is not defined
// console.log(b); // b is not defined
console.log(c); // 100


let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}