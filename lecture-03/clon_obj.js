let a={value: 10};
let b=a;
b.value=20;
console.log(a)
console.log(b)
let c={value: 20}
let d
Object.assign(d,c)
d={ ...c};