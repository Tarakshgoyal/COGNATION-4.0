// const dog={
//     name: 'doggy',
//     breed: 'labra',
//     age: 5,
//     weightinpound: 12,
//     eat(){
//         console.log('predigry')
//     },
//     bark(){
//         console.log('bhau')
//     }
// }
// // const Anotherdog={
// //     name: 'tommy',
// //     breed: 'labra',
// //     age: 3,
// //     weightinpound: 13,
// //     eat(){
// //         console.log('predigry')
// //     },
// //     bark(){
// //         console.log('bhau')
// //     }
// // }
// // console.log(dog)
// // console.log(Anotherdog)
// // dog.eat()
// // dog.bark()
// function getDog(name,breed,age,weightinpound){//factory function
//     return {
//         name,
//         breed,
//         age,
//         weightinpound,
//         eat(){
//             console.log(this.name + ' pedigry')
//         },
//         bark(){
//             console.log(this.name + ' bhau')
//         }
//     }
// }
// const dog2=getDog('tommy','bulldog',3,23)
// dog2.bark()
// console.log(dog2)

//DYNAMIC OBJECT

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