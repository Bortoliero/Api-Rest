const { create} = require('./produto-controller');

const baseVersion = '/v1';

// Rotas para o contexto de produtos
const routes = [
   
    {
        method: "POST",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtosController.createProdutos,
            validate: produtosSchema.createProdutos
        }
    }
];

module.exports = routes;
