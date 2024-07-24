// Modulo Http

const http = require('http')

const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.write('Welcome to the serve')
        return response.end()
    }
    
    if(request.url === '/about') {
        response.write('acerca de')
        return response.end()
    }
    
    response.write(`
    <h1>Not found</h1>
    <p>No se encontró la página</p>
    <a href='/'>Volver al inicio</a>
    `)
    response.end()
})

server.listen(3000)

console.log('Servidor escuchando en el puerto 3000')