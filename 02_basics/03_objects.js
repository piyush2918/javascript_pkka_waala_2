//singleton

//object literals


const mySym = Symbol("key1")


const Jsuser = {
    name: "Hitesh",
    "full name": "Hitesh Chaudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(Jsuser.email) // we cannot access string type of key with dot waale method se that's why to access neeche waala methoda apnaana padega
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "hitesh@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email = "hitesh@microsoft.com"
//console.log(Jsuser);

Jsuser.greeting = function() {
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1 , obj2 , obj4)

const obj3 = {...obj1 , ...obj2}
console.log(obj3);















