// "use strict"
// console.log('hhm');
// // alert(2+3);
// // let number=33;
// // console.log(typeof(number));
// // let valueInstring=String(number)
// // console.log(typeof(valueInstring));
// // if("")
// // {
// //     console.log('false');
// // }
// // else
// // {
// //     console.log('true else');
// // }
// // console.log(null>=0);
// // console.log(null<0);
// // console.log(null==0);

// console.log(undefined>0)
// console.log(undefined<0)
// console.log(undefined==0)

// const hello = new String('shivesh trivedi');
// console.log(hello);
// const data = new Date();
// console.log(data);
// console.log(data.toString());
const marvel_hero=['ironmab','cap','thor','hawkeye','blackwidow'];
const dc_hero=['batman','superman','greenlantern','wonderwoman','flash'];
// const add=marvel_hero.concat(dc_hero);
const add=[...marvel_hero,...dc_hero]
console.log(add);
const arr=[1,2,[3,4],[5,[6,7,[8,9]]]];
const val=arr.flat(Infinity);
console.log(val)