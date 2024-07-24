// Module File System

const fs = require('fs')

// Aqui utilizamos código Sync
// // podemos convertir el texto agregando la propiedad de utf-8
// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')

// console.log(first)
// // tambien podemos convertir atexto utilizando la función .toString
// console.log(second.toString())

// // Crear un archivo con writeFileSync, primero decimos donde se guarda y luego colocamos el contenido
// const title = 'agregar contenido a archivo existente'

// // fs.writeFileSync('./data/fourth.txt', title)
// fs.writeFileSync('./data/fourth.txt', title, {
//     flag: 'a'
// })



// Ahora utilizaremos código Async

// fs.readFile('./data/first.txt', (error, data) => {
//     console.log(error)
//     console.log(data.toString())
// }) 

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log(error)
    }
    console.log(data)
})

// Esta función es un Callback, se ejecuta luego de que...(forma asincronica)
//(error, data) => {
//     if(error) {
//         console.log(error)
//     }
//     console.log(data)
// })

// Aca se nos forma el famoso Callback Hell, cosa que podremos evitar con async/await de js
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log(error)
    }
    console.log(data)
    fs.writeFile('./data/newfile.txt', 'nuevo archivo de fs, forma async', (err, data) => {
        console.log(err)
        console.log(data)
        fs.writeFile('./data/newfile2.txt', 'nuevo archivo de fs, forma async', (err, data) => {
            console.log(err)
            console.log(data)
            fs.writeFile('./data/newfile3.txt', 'nuevo archivo de fs, forma async', (err, data) => {
                console.log(err)
                console.log(data)
            })
        })
    })
})