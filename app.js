// console.log('Hello world.....')

// var a=5
// function GetName(){
//     console.log('Namastee JS.....')
// }

// GetName()
// console.log(a)
// console.log(GetName)
// console.log(Fun1)
// var Fun1=function Name(){
//     console.log(4*5)
// }

// var a = 1;
// b();
// c();
// console.log(a);
// function b() {
//   var a = 10;
//   console.log(a);
// }
// function c() {
//   var a = 100;
//   console.log(a);
// }

// const value='458'
// const res=typeof(value)+value
// console.log(res)

// const heading=document.getElementById('heading')
// heading.onclick=()=>{
//   heading.innerText='Namstee Guru'
// }

// function a(){
//   console.log(c)
// }
// const c=10
// a()

// function a(){
//   console.log(c)
//   const c=20
// }
// a()

// console.error('Hello');

// x()
// function x(){
//     console.log(10)
// }

// function a(){
//     let s=10
//     function b(){
//         console.log(s)
//     }
//     return b
// }
// let res=a()
// console.log(res)

// console.log(a)
// function a(){
//     console.log(154)
// }

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i )
//         },i*1000)
//     }
//     console.log('Hello world.......')
// }
// x()

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function closu(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, i * 3000);
//     }
//     closu(i)
//   }
//   console.log("Hello world.....");
// }
// x();


// function z() {
//   var f = 10;
//   function x() {
//     var g = 20;
//     function c() {
//       console.log(g,f);
//     }
//     c();
//   }
//   x();
// }
// z();


// first class functions--------


// let f=function (param1){
//   console.log(param1)
// }
// f(function (){
// })


// let k=function (param1){
//   console.log(param1)
// }  
// function xyz(){
// }
// k(xyz)


// var x=function (param1){
//     return function hello(){
//     }
// }

// console.log(new Date().getTime()); // Example output: 1706791234567

// let NewDate=new Date().getTime()
// console.log(NewDate)


// console.log('One')
// setTimeout(()=>{
//   console.log('Threee')
// })
// // setTimeout(()=>{
// //   console.log('Two.....')
// // },1000)

// console.log('Four......')

// var a=58
// let guru=['hello','world...']


console.log('One')
setTimeout(()=>{
  console.log('Two')
},4000)
console.log('Threee')
setTimeout(()=>{
  console.log('Four')
},4000)