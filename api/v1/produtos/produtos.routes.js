const express = require('express');
const router = express.Router();
const produtosController = require('./produtos.controller');

// Rotas para o contexto de produtos
router.post('/', produtosController.cadastrarProduto);
router.put('/:id', produtosController.atualizarProduto);
router.delete('/:id', produtosController.removerProduto);
router.get('/:id', produtosController.buscarProdutoPorId);
router.get('/', produtosController.buscarProdutos);

module.exports = router;
