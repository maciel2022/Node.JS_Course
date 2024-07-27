// const { readFile } = require('fs');
// const { promisify } = require('util');
//podemos utilizar todo en un solo modulo de fs/promise, esto se debe a la evolucion de node
const { readFile } = require('fs/promises');

// const getText = (pathFile) => {
//     return new Promise(function(resolve, reject) {
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         })
//     })
// }

// utilizamos del modulo 'util', promisify para realizar promesas
//cuando utilizamos el modulo combinado no hace falta crear la promesa
// const getText = promisify(readFile);

// Promises:
// getText('./data/second.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/fourth.txt'))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// Async-Await:
// async function read() {
//     try {
//         const result = await getText('./data/first.txt', 'utf-8');
//         console.log(result);
//         const result2 = await getText('./data/second.txt', 'utf-8');
//         console.log(result2);
//         const result3 = await getText('./data/five.txt', 'utf-8');
//         console.log(result3);
//         const result4 = await getText('./data/fourth.txt', 'utf-8');
//         console.log(result4);
//     } catch (error) {
//         console.log(error);
//     }
// }
async function read() {
    try {
        const result = await readFile('./data/first.txt', 'utf-8');
        console.log(result);
        const result2 = await readFile('./data/second.txt', 'utf-8');
        console.log(result2);
        const result3 = await readFile('./data/five.txt', 'utf-8');
        console.log(result3);
        const result4 = await readFile('./data/fourth.txt', 'utf-8');
        console.log(result4);
    } catch (error) {
        console.log(error);
    }
}
read();