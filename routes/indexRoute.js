const express = require('express');

const routes = express.Router();


routes.get('/', (req, res)=>{
    res.render('index')//apenas o nome..nao precisa passar
    // o caminho completo. pois  express ja sabe onde buscar.
})

module.exports = routes