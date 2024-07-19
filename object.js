// // object can define two way constructor and literals constructor form singleton while literal form multiple instances.
// // literals
// const jsUser={name:"shivesh",arr:[1,2],0:0,nestedUser:{name:'pratham'}};
// console.log(jsUser["name"]);
// console.log(jsUser["arr"]);
// console.log(jsUser[0]);
// console.log(jsUser["nestedUser"]["name"]);
// console.log(jsUser?.nestedUser?.name); //here question mark is used to check whether item is present or not otherwise we need to use if else
// // in js treat function as normal variable
// // Object.freeze(jsUser)
// jsUser.greeting=function(){
//     console.log("hello world hhm")
// }
// console.log(jsUser.greeting())
// jsUser.greetingTwo=function(){
//     console.log(`hello hhm i am you disciple ${this.name} and i have ${this[0]}`)
// }
// console.log(jsUser.greetingTwo())
obj1={1:'a',2:'b'}
obj2={4:'c',3:'d'}
// obj3={obj1,obj2}
// obj3=Object.assign({},obj1,obj2) //isme sari value empty obj mein ja rahi hai fir wo return ho raha hai
obj3={...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(obj3))//it returns value in the form of array