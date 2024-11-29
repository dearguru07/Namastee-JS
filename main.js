// function z(){
//     for (i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
//     console.log('Hello world....')
// }
// z()


// function z(){
//     for (var i=1;i<=5;i++){
//         function a(x){
//             setTimeout(()=>{
//                 console.log(x)
//             },x*3000)
//         }
//         a(i)
//     }
//     console.log('Namastee JS....')
// }
// z()



// function (){
//     console.log('Hello world........')
// }
// ()


setTimeout(()=>{
    console.log('It is Timer')
},4000)
function x(y){
    console.log('x')
    y()
}
x(function y(){
    console.log('Y')
})