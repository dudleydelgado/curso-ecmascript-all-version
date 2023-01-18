//Declaramos
class User {};
/*Instancia de una clase
const newUser = new User(); */

 class user {
    // Metodos
    greeting() {
        return 'Hello';
    }
 };

const artclan = new user();
console.log(artclan.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//Constructor

class user {
    //constructor
    constructor() {
        console.log('Nuevo usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

//This

class user {
    constructor(name) {
        this.name = name;
    }
    //Metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

//Setters and getters

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('Arturo', 16);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);