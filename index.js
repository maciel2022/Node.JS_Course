// VARIABLES Y CONSTANTES
// let username = 'Maciel'
// let age = 37
// let hasHobbies = false
// let points = [1 ,20, 30]
// let user = {
//     name: 'Daiana',
//     lastname: 'guazzetti'
// }
// const PI = 3.1415

// console.log(username)
// console.log(age)
// console.log(hasHobbies)
// console.log(points)
// console.log(user)
// console.log(PI)

// const age = 15

// if(age >= 18){
//     console.log("You are an adult")
// } else if(age >= 13){
//     console.log("You are an teenager")
// }else{
//     console.log("You are an child")
// }

// const names = [ 'Joe', 'Jhon', 'Robert', 'Louis']

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }


// FUNCIONES

// function showUserInfo(userName, userAge) {
//     return `The username is ${userName}, the user is ${userAge} years old`
// }

// ARROW FUNCTION
const showUserInfo = (userName, userAge) => `The username is ${userName}, the user is ${userAge} years old`


console.log(showUserInfo('Daiana', 36))
console.log(showUserInfo('Maciel', 37))

