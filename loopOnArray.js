// // for of
// const arr=[1,3,2]
// // for (const iterator of arr) {
// //     console.log(iterator)
// // }
// // const map=new Map();
// // map.set('in','india')
// // map.set('u','use')
// // map.set('uk','england')
// // for (const key of map) {
// //     console.log(key);
// // }
// const myObj={
//     'ff':'green',
//     'pg':'red'
// };
// // for (const [key] of myObj) {
// //     console.log(key);

// // }
// for (const key in myObj) {
//     console.log(myObj[key]);
// }
// const map=new Map();
// map.set('in','india')
// map.set('u','use')
// map.set('uk','england')
// for (const key in map) {
//     console.log(key);//doesnot show any output because map is not iterable
// }

// const array=[1,20,3032,232,]
// for (const key in array) {
//     console.log(array[key])
// }

// const coding=['js','c','python','java'];
// // coding.forEach((item)=>console.log(item))

// function print(item)
// {
//     console.log(item)
// }
// coding.forEach(print)
const arrofobj = [
  {
    language: "javascript",
    extension: "js",
  },
  {
    language: "java",
    extension: "java",
  },
  {
    language: "python",
    extension: "py",
  },
];
arrofobj.forEach((item)=>{
    console.log(item.language)
})
// for each donot return value while while map and filter return values
const val=arrofobj.map((item)=>item.extension+'a')
console.log(val);

const a=[1,2,3,4]
const sum=a.reduce((acc,curr)=>acc+curr,10);
console.log(sum)