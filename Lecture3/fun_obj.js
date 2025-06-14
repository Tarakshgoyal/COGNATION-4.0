function add(num1,num2){
    return num1+num2;
}
console.log(add(2,3))
const n=add
console.log(n(2,3))
function Programmer (name){
    this.name=name;
    this.writecode=function(){
        console.log('Java script');
    }
}
console.log(Programmer.constructor)
Programmer.name="taraksh"
