// this current context ko refer karta hai
// console.log(this)
// let obj={
//     'username':"shivesh",
//     'age':22,
//     greet:function()
//     {
//         console.log(`learning about this username is ${this.username}`)
//     }
// }
// console.log(obj.username);
// console.log(obj.greet());
// obj.username="hitesh"
// console.log(obj.username);
// console.log(obj.greet());

function one()
{
    console.log(this);
}
const two= function()
{
    console.log(this);
}
const three=()=>{
    console.log(this)
}
// one();
// two();
// three();
const arrow=(a,b)=>a+b;
console.log(arrow(2,3));
const objreturn =()=>({username:'shivesh'})
console.log(objreturn());
// iife immediately invoked function ()(); semicolon important because it refer that function end here 