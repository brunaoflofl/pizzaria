const express = require('express')

let rotasUsuario = require('./routes/usuarioRoute')
let rotasCardapio = require('./routes/cardapioRoute')
let rotasIndex = require('./routes/indexRoute')

let app = express()

//configurando o express para aceitar ejs
app.use(express.static('public'));

app.set('view engine', 'ejs')
app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);
app.use(rotasIndex)


app.listen(3000, ()=>console.log("Servidor rodando perfeitamente"))