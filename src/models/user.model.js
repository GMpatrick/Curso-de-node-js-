const mongose = require('mongoose')

const userSchema = new mongose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
})

/* required serve para: esse first name é obrigadotrio, se ele não me der o first name não cria nada no banco
minlength: 7: tera que ter no minimo 7 caracteres
*/

const UserModel = mongose.model('User', userSchema)

module.exports = UserModel