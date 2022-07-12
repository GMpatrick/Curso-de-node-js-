const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()

app.use(express.json())

app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1> Hello word </h1>')
})

const port = 8080

app.listen(port, () => console.log(`Rodando com express na porta: ${port}`))

app.get('/users', (req, res)=> {
    const users = [
        {
            name: 'John deep',
            email: 'Joe@gmail.com',
            idade: '40'
        },
        {
            name: 'Jane deep',
            email: 'jane@gmail.com',
            idade: '37'
        }
    ]

    res.status(200).json(users)
})

// post criar alguma coisa no nosso banco

app.post("/users", async (req, res) => {

    try{
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    }catch(erro){
        res.status(500).send(erro.message)
    }

})

