let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
const data = input[0].split(' ')
const A = Number(data[0])
const B = Number(data[1])
const C = Number(data[2])

console.log((A + B) % C)
console.log(((A % C) + (B % C)) % C)
console.log((A * B) % C)
console.log(((A % C) * (B % C)) % C)
