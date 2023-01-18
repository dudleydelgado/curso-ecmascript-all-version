//Una promesa es algo que va a pasar today, tomorrow or never

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!');
        } else {
            reject('Whoooops!');
        }
    })
}

//Al llamar a nuestra promesa vamos a obtener un response y en su defecto si no se cumple un err, (pueden haber mas de un then)
anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err))
//Finally
.finally(() => console.log('Finally'));

/*

Las siguientes características de ES9 o ES2018 que aprenderás son: método finally para promesas y generadores asíncronos.

Método finally en promesas
El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.

promesa()
    .then(response => console.log(response) // Promesa resuelta
    .catch(error => console.log(response) // Promesa rechazada
    .finally( () => console.log("Finalizado") ) // Código final  

*/