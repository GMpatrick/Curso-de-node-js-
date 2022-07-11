const path = require('path')

// basename
// apenas o nome do arquivo atual
console.log(path.basename(__filename))

// nome do diretorio atual
console.log(path.dirname(__filename))

// pegar a extensão do arquivo
console.log(path.extname(__filename))

// criar o obejto path
console.log(path.parse(__filename)) // ele vai criar um obejto path com varias informações sobre o nosso arquivo atual

// junte varios caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"))




