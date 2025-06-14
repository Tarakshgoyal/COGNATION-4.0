let a= 10;
let b=a;
a=20;
console.log(a)//20 
console.log(b)//10
a = {value: 20};
b=a;
a.value=100;
console.log(a);// 100
console.log(b);// 100