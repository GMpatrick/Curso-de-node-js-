const { Person } = require("./person") // com as chaves no person eu estou fazendo o destructuring
const dotenv = require('dotenv')
const connectToDatabase =require('./src/database/connect')

dotenv.config()

// require("./modules/path") // importar um arquivo só para executar
//require("./modules/fs")
//require('./modules/http')
/* const person  = new Person("Patrick") */

connectToDatabase()
require('./modules/express')




