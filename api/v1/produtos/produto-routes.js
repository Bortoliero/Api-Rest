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
    },
    {
        method: "GET",
        path: "/v1/products",
        options: {
            tags: ['api'],
            description: 'List of products',
            handler: getProducts,
            validate: schema.getProducts
        }
    },
    {
        method: "GET",
        path: "/v1/products/{id}",
        options: {
            tags: ['api'],
            description: 'Create a product',
            handler: findById,
            validate: schema.getById
        }
    },
    {
        method: "DELETE",
        path: "/v1/products/{id}",
        options: {
            tags: ['api'],
            handler: deleteById,
            validate: schema.deleteById
        }
    },
];

module.exports = routes;
