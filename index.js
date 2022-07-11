const { Person } = require("./person") // com as chaves no person eu estou fazendo o destructuring

// require("./modules/path") // importar um arquivo só para executar

//require("./modules/fs")
//require('./modules/http')
require('./modules/express')

const person  = new Person("Patrick")

