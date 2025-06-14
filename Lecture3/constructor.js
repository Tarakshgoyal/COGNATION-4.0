const person={
    name: 'taraksh'
}
console.log(person)
person.favoritefood='dal makhni'
console.log(person)
person.icecream='chocolate'
console.log(person)
delete person.icecream
console.log(person)
person.eat=function() {
    console.log('tawa roti')
}
console.log(person)
person.eat()
console.log(person.constructor)
let newobj = new Object()
new String()
new Boolean()
new Number()