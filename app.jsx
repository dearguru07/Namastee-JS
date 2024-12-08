// console.log('Hello world.......')


console.log('clicked the Download btn...')
console.log('server is featching from db....')
console.log('Movie is downloadng....')
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Movie is downloaed..')
        console.log('Stored to ur device....')
        resolve()
    },4000)
    
})
myPromise.then(()=>{
    console.log('watch the movie.........')
}).catch(()=>{
    console.log('Server busy... Try again later.....')
}).finally(()=>{
    console.log('Movie time............')
})


