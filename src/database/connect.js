const moongose = require('mongoose')

const connectToDatabase = async () => {
    await moongose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.07gt8xp.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if(error){
            return console.log('Ocorreu um erro ao se conectar com o banco de dados', error)
        }
        
        return console.log('Conexão com o banco de dados realizada com sucesso')
    }) // recebe a string do mongo db
}


module.exports = connectToDatabase