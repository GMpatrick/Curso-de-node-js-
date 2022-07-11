class Person {
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        return `My name is ${this.name}!`
    }
}

/* Com o module exports podemos exportar um variavel, pbjetos etc... */

module.exports = Person; // pode ser feito dessa forma 

module.exports = { // dessa tbm
   /*  person: Person */
   Person
}

