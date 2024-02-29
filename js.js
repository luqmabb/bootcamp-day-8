// function sayHello() {
//     console.log('trilili')
// }

// function apaKabar(param) {
//     param()
//     console.log('tralala')
// }

// apaKabar(sayHello)

// function tigaDetik() {
//     console.log('loading dulu 3 detik')
//     setTimeout(() => {
//         console.log('jeng jeng')
//     }, 3000)
// }
    
// tigaDetik()

// const arr = [1,2,3,4,5,6]

// arr.forEach((a) => {
//     console.log(`ini data ke - ${a}`)
// })

let arr = [3,6,2,7,9]

console.log(arr.reduce((prev, current) => prev + current, 3))