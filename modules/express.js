const express = require('express')

const app = express()

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