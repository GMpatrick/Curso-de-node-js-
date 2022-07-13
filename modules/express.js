const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()

app.use(express.json())


app.get('/users', async (req, res)=> {
    try{
        const users = await UserModel.find({})   

        res.status(200).json(users)
    }catch(error){
       return res.status(500).send(error.message)
    }
})

//pegar um uusario por id
app.get('/users/:id', async (req, res) => { /*  com os dois pontos id eu estarei recebendo um parametro */
    try {
        const id = req.params.id

        const user = await UserModel.findById(id)

        return res.status(202).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
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

// atualizar usuario no banco
// path ou put para criar

/* path usar quando querer atualizar nosso registro parcialmente
exemplo apenas o email */

/* put mudar o registro por completo */

app.patch('/users/:id', async (req, res) => { /*  com os dois pontos id eu estarei recebendo um parametro */
    try {
        const id = req.params.id

        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

// delete

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id

        const user = await UserModel.findByIdAndRemove(id)
    
        res.status(200).json(user)
    } catch (error) {
        return res.status.send(error.message)
    }
})



const port = 8080

app.listen(port, () => console.log(`Rodando com express na porta: ${port}`))

