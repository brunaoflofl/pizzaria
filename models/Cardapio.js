let cardapio = [
    {nome:"Calamussa", preco:"R$30,00", img:'pizza1.jpg'},
    {nome:"Frango c Catu", preco:"R$35,00",  img:'pizza2.jpg'},
    {nome:"Romanesca", preco:"R$35,00",  img:'pizza2.jpg'},
    {nome:"Mussarela", preco:"R$35,00",  img:'pizza2.jpg'},
    {nome:"Chocolate", preco:"R$35,00",  img:'pizza2.jpg'},
    {nome:"Banana", preco:"R$35,00",  img:'pizza2.jpg'},


]

function listarCardapio(){
    return cardapio
}
function cadastrarPizza(nome, preco){
    let novaPizza = {
        nome,
        preco,
        img:'pizza2.jpg'
    }
    return cardapio.push(novaPizza)
}
function deletarPizza(posicao){
    return cardapio.splice(posicao, 1)
}

module.exports = {listarCardapio, cadastrarPizza, deletarPizza}