// Con async-await
// async function loadData(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await res.json();
//         console.log(data);
//     } catch (error){
//         console.log(error);
//     }
// }

// loadData();

// Si utilizamos los modulos de JS (en package.json debemos tener el type: 'module')podemos utilizar las funciones de fetch sin agregar la funcion de async, pero funciona de manera asincronica
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
} catch (error){
    console.log(error);
}

// Con promesas
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))