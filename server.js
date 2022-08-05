import app from './src/app.js'


// Exemplo sem a utilização do express
// const http = require("http");
// const port = 3000;

//    const rotas = {
//        '/': 'Curso de Node',
//        '/livros': 'Entrei na pagina de livros',
//        '/autores': 'Listagem de autores',
//        '/editora': 'Pagina da Editora',
//        '/sobre': 'Info sobre o projeto'
//    }

//    const server = http.createServer((req, res) => {
//        res.writeHead(200, {'Content-Type': 'text/plain'});
//        res.end(rotas[req.url]);
//    })

const port = process.env.PORT || 3000;



// server.listen(port, () => {
app.listen(port, () => {
        console.log(`Servidor escutando em http://localhost:${port}`)
})