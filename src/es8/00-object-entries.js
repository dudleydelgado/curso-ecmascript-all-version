const countries = {
    ES: 'Espana',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
};
console.log(Object.entries(countries))

/*
OUTPUT:
[
  [ 'ES', 'Espana' ],
  [ 'CO', 'Colombia' ],
  [ 'CL', 'Chile' ],
  [ 'PE', 'Peru' ]
]
*/

/*

Los métodos de transformación de objetos a arrays sirven para obtener la información de las propiedades, sus valores o ambas.

Obtener los pares de valor de un objeto en un array
Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 

[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  

Obtener las propiedades de un objeto en un array
Object.keys() devuelve un array con las propiedades (keys) del objeto enviado como argumento.

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario) 
// [ 'name', 'email', 'age' ]

lectura recomendada

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

*/