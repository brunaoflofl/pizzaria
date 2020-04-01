const express = require('express')
const cardapioController = require('../controllers/cardapioController' )

let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})
//crud cardapio

//read
route.get('/ver', cardapioController.listarCardapio)

//cadastro
route.get('/cadastro', cardapioController.formCadastro)

route.post('/cadastro', cardapioController.salvarCadastro)

//delete
route.delete('/deletar/:posicao', cardapioController.deletarPizza )



module.exports = route