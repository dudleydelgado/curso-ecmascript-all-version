const countries = {
    ES: 'Espana',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
};

console.log(Object.values(countries));

/*
OUTPUT: [ 'Espana', 'Colombia', 'Chile', 'Peru' ]
*/

/*

Obtener los valores de un objeto en un array
Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

Object.values(usuario) 
// [ 'Andres', 'andres@correo.com', 23 ]

lectura recomendada

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values
https://platzi.com/cursos/arrays/

*/