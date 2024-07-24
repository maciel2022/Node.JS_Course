const mysecretVariable = 'xyz123'

const myWebAddress = 'macidevweb.com'
const myNumber = 30
const myArray = [10, 20, 30]
const user = {
    name: 'Maciel',
    lastname: 'Fernandez'
}

// const group = {
//     myWebAddress: myWebAddress,
//     myNumber: myNumber,
//     myArray: myArray,
//     user: user
// }
// module.exports = group

// Otra forma
// module.exports.user = user;
// module.exports.myNumber = myNumber;
// module.exports.myArray = myArray;
// module.exports.myWebAddress = myWebAddress;

// Las más utilizada
module.exports = {
    myWebAddress,
    myNumber,
    myArray,
    user
}