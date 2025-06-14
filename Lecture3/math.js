console.log(Math.round(3.14))//3
console.log(Math.round(3.6))//4
console.log(Math.floor(4.6))//4
console.log(Math.floor(4.2))//4
console.log(Math.ceil(4.2))//5
console.log(Math.max(1,2))//2
console.log(Math.max(1,2,4,8,3,8,3,7,9,1))//9
console.log(Math.min(6,3,7))//3
console.log(Math.pow(2,3))//8
console.log(Math.sqrt(25))//5
console.log(Math.random())//any random value between 0 and 1
let min=1
let max=10 
const randowmnumber=Math.random()*(max-min)+min//decimal
const randint=Math.round(Math.random()*(max-min)+min)//integer
console.log(randowmnumber)
console.log(randint)