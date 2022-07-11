// Manipular sistemas de arquivos

const fs = require('fs')
const path = require('path')

// criar uma pasta 

fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if(error){
        return console.log('Erro: ', error)
    }

    console.log('Pasta criada com sucesso')
}, {})

// criar um arquivo

fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'Hello Node!!!', (error) => { /* wrute file é assicrono  */

    if(error){
        return console.log('Erro: ', error)
    }

    console.log('Arquivo criado com sucesso')

    // adicionar a um arquivo

    fs.appendFile(path.join(__dirname, '/teste', 'teste.txt'),' Mario galaxy' ,error => {
        if(error){
            return console.log('Erro: ', error)
        }

        console.log('arquivo adicionado com sucesso')
    })

    // lendo um arquivo
    fs.readFile(path.join(__dirname, '/teste', 'teste.txt'), 'utf-8' ,(error, data) => { /* utf8 é o sistema de caracteres que o arquivo esta usando */
    if(error){
        return console.log('Erro: ', error)
    }
    console.log('Arquivo lido com sucesso, dados do arquivo...')
    console.log()
    console.log(data)
    })
})



