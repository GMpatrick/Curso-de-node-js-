const http = require('http')

const port = 8080

/* a pessoa manda o req(request) e o servidor manda o res(response) */
const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end('<h1> Home page </h1>')
    }
    if(req.url === '/users'){
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
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(users))
    }
})

server.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})